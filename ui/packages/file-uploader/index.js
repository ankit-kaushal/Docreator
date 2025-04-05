import { useState, useEffect } from 'react';
import { Upload, message, Button, Space, Input, Modal } from 'antd';
import { UploadOutlined, CopyOutlined, LockOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

const acceptedFileTypes = {
	'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp'],
	'video/*': ['.mp4', '.webm', '.ogg', '.mov'],
	'application/pdf': ['.pdf'],
};

function FileUploader() {
	const [uploadedUrl, setUploadedUrl] = useState('');
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [passkey, setPasskey] = useState('');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		setIsModalVisible(true);
	}, []);

	const correctPasskey = process.env.NEXT_PUBLIC_UPLOADER_PASSKEY;

	const handleAuth = () => {
		if (passkey === correctPasskey) {
			setIsAuthenticated(true);
			setIsModalVisible(false);
			message.success('Access granted!');
		} else {
			message.error('Incorrect passkey');
		}
	};

	const handleUpload = async (options) => {
		const { file, onSuccess, onError } = options;
		const formData = new FormData();
		formData.append('file', file);

		try {
			const response = await fetch('/api/upload', {
				method: 'POST',
				body: formData,
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error?.message || 'Upload failed');
			}

			if (data.secure_url) {
				setUploadedUrl(data.secure_url);
				message.success('File uploaded successfully!');
				onSuccess(data, file);
			} else {
				throw new Error('No URL received from server');
			}
		} catch (error) {
			message.error(error.message || 'Upload failed');
			onError(error);
		}
	};

	const handleCopy = async () => {
		try {
			if (typeof window !== 'undefined') {
				await window.navigator.clipboard.writeText(uploadedUrl);
			} else {
				throw new Error('Clipboard API is not available');
			}
			message.success('URL copied to clipboard!');
		} catch (err) {
			message.error('Failed to copy URL');
		}
	};

	const beforeUpload = (file) => {
		const isAccepted = Object.entries(acceptedFileTypes).some(
			([type, extensions]) => {
				if (
					file.type.startsWith(type.replace('*', '')) ||
					extensions.some((ext) => file.name.toLowerCase().endsWith(ext))
				) {
					return true;
				}
				return false;
			},
		);

		if (!isAccepted) {
			message.error('You can only upload images, videos, or PDF files!');
			return Upload.LIST_IGNORE;
		}

		const sizeLimit = 100 * 1024 * 1024; // 100MB
		if (file.size > sizeLimit) {
			message.error('File must be smaller than 100MB!');
			return Upload.LIST_IGNORE;
		}

		return true;
	};

	const handleRemove = () => {
		setUploadedUrl('');
		return true;
	};

	if (!mounted) {
		return null;
	}

	if (!isAuthenticated) {
		return (
			<Modal
				title="Enter Passkey"
				open={isModalVisible}
				onOk={handleAuth}
				onCancel={() => window.history.back()}
				closable={false}
				maskClosable={false}
			>
				<Input.Password
					prefix={<LockOutlined />}
					placeholder="Enter passkey"
					value={passkey}
					onChange={(e) => setPasskey(e.target.value)}
					onPressEnter={handleAuth}
				/>
			</Modal>
		);
	}

	return (
		<div className={styles.container}>
			<h1>File Uploader</h1>
			<div className={styles.uploadWrapper}>
				<Upload
					customRequest={handleUpload}
					showUploadList
					maxCount={1}
					onRemove={handleRemove}
					beforeUpload={beforeUpload}
					accept=".jpg,.jpeg,.png,.gif,.webp,.mp4,.webm,.ogg,.mov,.pdf"
				>
					<Button icon={<UploadOutlined />}>Click to Upload</Button>
				</Upload>
			</div>
			{uploadedUrl && (
				<div className={styles.result}>
					<p>File URL:</p>
					<Space>
						<a href={uploadedUrl} target="_blank" rel="noopener noreferrer">
							{uploadedUrl}
						</a>
						<Button
							type="text"
							icon={<CopyOutlined />}
							onClick={handleCopy}
							title="Copy URL"
						/>
					</Space>
				</div>
			)}
		</div>
	);
}

export default FileUploader;
