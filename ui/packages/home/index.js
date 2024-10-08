import { Button, notification, Spin } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { addDays } from 'date-fns';
import { useState } from 'react';
import styles from './styles.module.css';
import controls from './configurations/controls';
import Layout from '@/ui/commons/Layout';
import { useForm } from '../../commons/Controller';
import Adsense from '@/ui/commons/Adsense';

const svgStyle = {
	backgroundImage: `url(${'generate.svg'})`,
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right',
	height: '40vh',
};

const expiryMapping = {
	'1_day': addDays(new Date(), 1),
	'2_days': addDays(new Date(), 2),
	'1_week': addDays(new Date(), 7),
	'1_month': addDays(new Date(), 30),
	never: '',
};

const generateRandomSlug = () => {
	return Math.random().toString(36).substring(2, 8);
};

const checkSlugUnique = async (slug) => {
	try {
		const response = await axios.get(`/api/pastes?slug=${slug}`);
		return response.data.success && response.data.data.length === 0;
	} catch (error) {
		return true;
	}
};

const generateUniqueSlug = async () => {
	const newSlug = generateRandomSlug();
	const isUnique = await checkSlugUnique(newSlug);

	if (!isUnique) {
		return generateUniqueSlug();
	}

	return newSlug;
};

function Home() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const fields = controls({ disabled: false });

	const addNewPaste = async (values) => {
		setLoading(true);

		try {
			const updatedValues = { ...values };

			if (updatedValues.expiry && expiryMapping[updatedValues.expiry]) {
				updatedValues.expiry = expiryMapping[updatedValues.expiry];
			}

			if (updatedValues.slug) {
				const isUnique = await checkSlugUnique(updatedValues.slug);
				if (isUnique) {
					await axios.post('/api/paste', updatedValues);
					router.push(`/${updatedValues.slug}`);
					return;
				}
			}
			updatedValues.slug = await generateUniqueSlug();
			await axios.post('/api/paste', updatedValues);
			router.push(`/${updatedValues.slug}`);
		} catch (error) {
			notification.error({
				message: 'Failed to Add New Paste',
				description:
					error.response?.data?.error || 'An unexpected error occurred.',
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<div style={svgStyle} className={styles.home_container}>
			<span className={styles.title}>WELCOME TO DOCREATOR</span>
			<div className={styles.generate}>
				<fieldset>
					<legend>New Paste</legend>
					<Layout fields={fields?.content} errors={errors} control={control} />
				</fieldset>
				<fieldset>
					<legend>Settings</legend>
					<Layout fields={fields?.settings} errors={errors} control={control} />
				</fieldset>
				<Button
					type="primary"
					icon={<PlusOutlined />}
					onClick={handleSubmit(addNewPaste)}
					disabled={loading}
				>
					{loading ? <Spin size="small" /> : 'Create New Paste'}
				</Button>
			</div>
			<div className={styles.developer}>
				<Adsense client="ca-pub-1816177424340336" slot="1646560170" />
				<span className={styles.design}>Designed & Developed by</span>
				<Link href="https://www.ankitkaushal.tech/" className={styles.my_name}>
					Ankit Kaushal
				</Link>
			</div>
		</div>
	);
}

export default Home;
