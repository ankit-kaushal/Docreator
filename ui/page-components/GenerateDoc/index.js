/* eslint-disable no-undef */
import React, { createRef, useState } from 'react';
import { Button, Checkbox } from 'antd';
import { jsPDF as JsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { DownloadOutlined } from '@ant-design/icons';
import styles from './styles.module.css';
import ShipperConsigneeDetails from '../AWBTemplate/ShipperConsigneeDetails';
import ShipmentDetails from '../AWBTemplate/ShipmentDetails';
import ContainerDetails from '../AWBTemplate/ContainerDetails';
import ChargeDetails from '../AWBTemplate/ChargeDetails';
import { footerImages, backPage } from '../../configurations/image-copies';
import DownloadModal from './DownloadModal';

const ZERO_COORDINATE = 0;
const PDF_HEIGHT_ADJUST_VALUE = 14;
const PDF_SCALE = 4.5;
const TWELEVE_COPIES_LAST_INDEX = 1;
const INCLUDE_TNC = ['original_3', 'original_2', 'original_1'];

function GenerateDoc({ formData = {} }) {
	const [whiteout, setWhiteout] = useState(false);
	const [open, setOpen] = useState(false);
	const [copiesValue, copiesOnChange] = useState([
		'original_3',
		'original_2',
		'original_1',
		'copy_9',
		'copy_4',
		'copy_5',
		'copy_6',
		'copy_7',
		'copy_8',
		'copy_10',
		'copy_11',
		'copy_12',
	]);

	const ref = createRef(null);

	const handleDownload = (download24) => {
		html2canvas(document.getElementById('mawb')).then((canvas) => {
			const imgData = canvas.toDataURL('image/jpeg');
			const pdf = new JsPDF();
			const pdfWidth = pdf.internal.pageSize.getWidth();
			const pdfHeight = pdf.internal.pageSize.getHeight();

			(copiesValue || []).forEach((item, i) => {
				pdf.addImage(
					imgData,
					'jpeg',
					ZERO_COORDINATE,
					ZERO_COORDINATE,
					pdfWidth,
					pdfHeight,
				);
				if (!whiteout) {
					pdf.addImage(
						footerImages[item],
						'jpeg',
						ZERO_COORDINATE,
						pdfHeight - PDF_HEIGHT_ADJUST_VALUE,
						pdfWidth,
						PDF_SCALE,
					);
				}

				if (download24) {
					if (INCLUDE_TNC.includes(item)) {
						pdf.addPage();
						pdf.addImage(
							backPage,
							'jpeg',
							ZERO_COORDINATE,
							ZERO_COORDINATE,
							pdfWidth,
							pdfHeight,
						);
					} else {
						pdf.addPage();
					}
				}
				if (i < copiesValue.length - TWELEVE_COPIES_LAST_INDEX) {
					pdf.addPage();
				}
			});
			pdf.save(formData?.documentNumber);
		});
	};

	let agentCharge = 0;
	formData?.agentOtherCharges?.forEach((item) => {
		agentCharge += Number(item.price);
	});
	let carrierCharge = 0;
	formData?.carrierOtherCharges?.forEach((item) => {
		carrierCharge += Number(item.price);
	});
	const data = {
		totalCharge: Number(formData.amount),
		agentCharge,
		carrierCharge,
		finalCharge: Number(formData.amount) + agentCharge + carrierCharge,
	};

	return (
		<div className={styles.flex_col}>
			<div className={styles.download_button_div}>
				<div
					style={{ marginRight: '36px', display: 'flex', alignItems: 'center' }}
				>
					<div
						className={styles.flex}
						style={{ alignItems: 'center', margin: '0 8px' }}
					>
						<Checkbox value={whiteout} onChange={() => setWhiteout((p) => !p)}>
							Whiteout
						</Checkbox>
					</div>
					<Button
						onClick={() => {
							setOpen(true);
						}}
						icon={<DownloadOutlined />}
						size="default"
					>
						Download
					</Button>
				</div>
			</div>
			<div
				className={styles.flex_col}
				id="mawb"
				ref={ref}
				style={{
					flex: '1',
					width: '100%',
					height: '100%',
					padding: '40px 40px',
					opacity: 1,
					background: '#fff',
				}}
			>
				<div style={{ position: 'relative' }}>
					<ShipperConsigneeDetails formData={formData} whiteout={whiteout} />
					<ShipmentDetails formData={formData} whiteout={whiteout} />
					<ContainerDetails formData={formData} whiteout={whiteout} />
					<ChargeDetails formData={formData} data={data} whiteout={whiteout} />
				</div>
			</div>
			{open && (
				<DownloadModal
					open={open}
					setOpen={setOpen}
					copiesValue={copiesValue}
					copiesOnChange={copiesOnChange}
					handleDownload={handleDownload}
				/>
			)}
		</div>
	);
}

export default GenerateDoc;
