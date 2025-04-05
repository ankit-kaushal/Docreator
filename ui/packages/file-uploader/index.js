import { useState } from 'react';
import { Upload, message, Button, Space, Input, Modal } from 'antd';
import { UploadOutlined, CopyOutlined, LockOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

function FileUploader() {
	const [uploadedUrl, setUploadedUrl] = useState('');
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isModalVisible, setIsModalVisible] = useState(true);
	const [passkey, setPasskey] = useState('');

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

	const handleRemove = () => {
		setUploadedUrl('');
		return true;
	};

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
