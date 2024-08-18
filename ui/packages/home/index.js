import { Button, notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Link from 'next/link';
import axios from 'axios';
import styles from './styles.module.css';
import controls from './configurations/controls';
import Layout from '@/ui/commons/Layout';
import { useForm } from '../../commons/Controller';

const svgStyle = {
	backgroundImage: `url(${'generate.svg'})`,
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right',
	height: '40vh',
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
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const fields = controls();

	const addNewPaste = async (values) => {
		try {
			const updatedValues = { ...values };

			if (updatedValues.slug && updatedValues.slug.length <= 6) {
				const isUnique = await checkSlugUnique(updatedValues.slug);
				if (isUnique) {
					await axios.post('/api/paste', updatedValues);
					return;
				}
			}
			updatedValues.slug = await generateUniqueSlug();
			await axios.post('/api/paste', updatedValues);
		} catch (error) {
			notification.error({
				message: 'Failed to Add New Paste',
				description:
					error.response?.data?.error || 'An unexpected error occurred.',
			});
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
				>
					Create New Paste
				</Button>
			</div>
			<div className={styles.developer}>
				<span className={styles.design}>Designed & Developed by</span>
				<Link href="https://www.ankitkaushal.tech/" className={styles.my_name}>
					Ankit Kaushal
				</Link>
			</div>
		</div>
	);
}

export default Home;
