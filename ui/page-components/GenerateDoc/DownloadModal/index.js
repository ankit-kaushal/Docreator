import { Modal } from 'antd';
import SelectDocumentCopies from '../SelectDocumentCopies';

function DownloadModal({
	open = false,
	setOpen = () => {},
	copiesValue = [],
	copiesOnChange = () => {},
	handleDownload = () => {},
}) {
	const handleOk = () => {
		setOpen(false);
	};
	const handleCancel = () => {
		setOpen(false);
	};

	return (
		<Modal
			title="Download AWB's"
			open={open}
			onOk={handleOk}
			onCancel={handleCancel}
		>
			<SelectDocumentCopies
				copiesValue={copiesValue}
				copiesOnChange={copiesOnChange}
				handleDownload={handleDownload}
			/>
		</Modal>
	);
}

export default DownloadModal;
