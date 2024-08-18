import { Button, notification } from 'antd';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { PlusOutlined, CopyOutlined } from '@ant-design/icons';
import styles from './styles.module.css';
import controls from '../home/configurations/controls';
import Layout from '@/ui/commons/Layout';
import { useForm } from '../../commons/Controller';

function ViewPaste() {
	const [data, setData] = useState({});
	const router = useRouter();
	const pathname = usePathname();

	const {
		control,
		setValue,
		formState: { errors },
	} = useForm();

	const fields = controls({ disabled: true });

	const copyToClipboard = () => {
		const { content } = data || {};

		if (content) {
			// eslint-disable-next-line no-undef
			navigator.clipboard
				.writeText(content)
				.then(() => {
					notification.success({
						message: 'Copied!',
						description: 'Content has been copied to the clipboard.',
						placement: 'top',
					});
				})
				.catch(() => {
					notification.error({
						message: 'Failed to Copy',
						description: 'There was an error copying the content.',
						placement: 'top',
					});
				});
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			const slug = pathname.replace(/\//g, '');
			if (slug) {
				try {
					const response = await axios.get(`/api/paste?slug=${slug}`);
					if (response.data.success && response.data.data) {
						setData(response.data.data);
						const pasteContent = response.data.data.content;
						setValue('content', pasteContent);
					} else {
						notification.error({
							message: 'No data found for the given slug',
						});
					}
				} catch (error) {
					notification.error({
						message: 'Error fetching pasted data',
						description: error.message || 'An unexpected error occurred.',
					});
				}
			}
		};

		fetchData();
	}, [pathname]);

	return (
		<div className={styles.container}>
			<div className={styles.pasted_box}>
				<div className={styles.header}>
					<div className={styles.title}>{data.title || 'Untitled'}</div>
					<Button icon={<CopyOutlined />} onClick={copyToClipboard}>
						Copy
					</Button>
				</div>

				<fieldset>
					<legend>Your Pasted Content</legend>
					<Layout fields={fields?.content} errors={errors} control={control} />
				</fieldset>

				<Button
					type="primary"
					shape="circle"
					size="small"
					icon={<PlusOutlined />}
					onClick={() => {
						router.push('/');
					}}
				/>
				<span>Create New Paste</span>
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

export default ViewPaste;
