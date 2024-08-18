import React from 'react';
import cl from '@/ui/commons/Components/utils/classname-processor';

import styles from './styles.module.css';

function formatDate(date) {
	if (date) {
		return new Date(date).toLocaleDateString('en-GB', {
			day: 'numeric',
			month: 'short',
			year: 'numeric',
		});
	}
	return new Date().toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	});
}

function OtherChargeDetails({ formData = {}, whiteout = false }) {
	const { agentOtherCharges = [], carrierOtherCharges = [] } = formData;
	const awbNumber = formData?.documentNumber;

	let tempColor = '#333';
	if (whiteout) {
		tempColor = 'transparent';
	}

	return (
		<div
			className={cl`
				${styles.block_col} 
				${styles.other_charge_container} 
			`}
			style={{ '--temp-color': tempColor }}
		>
			<div
				className={cl`
				${styles.flex_col} 
				${styles.other_container} 
			`}
				style={{ '--temp-color': tempColor }}
			>
				<div
					className={cl`
					${styles.flex} 
					${styles.other_charge_outer_text} 
				`}
				>
					<p style={{ fontSize: 9 }}>
						<span style={{ color: tempColor }}>Other Charges</span>
						<div
							className={cl`
							${styles.flex} 
							${styles.other_charge_text} 
						`}
						>
							<p className={styles.data} style={{ fontSize: 13 }}>
								<div style={{ height: '30%' }}>
									{formData?.class === 'a'
										? ''
										: (agentOtherCharges || [{}]).map(
												(item) => `${item.code.toUpperCase()}: ${item.price} `,
											)}
								</div>
								<br />
								{formData?.class === 'a'
									? ''
									: carrierOtherCharges.map(
											(item) => `${item.code.toUpperCase()}: ${item.price} `,
										)}
							</p>
						</div>
					</p>
				</div>
			</div>

			<div
				className={cl`
				${styles.flex_col} 
				${styles.hereby_container} 
			`}
				style={{ '--temp-color': tempColor }}
			>
				<div
					className={cl`
					${styles.flex} 
					${styles.hereby_container_text} 
				`}
				>
					<p style={{ fontSize: 10, color: tempColor }} className="text">
						I hereby certify that the particulars on the face hereof are correct
						and that insofar as any part of the consignment contains dangerous
						goods.
						<strong>
							I hereby certify that the contents of this consignment are fully
							and accurately describe above by proper shipping name and are
							classified, packaged, marked and labeled,and in proper condition
							for carriage by air according to applicable national government
							regulations.
						</strong>
					</p>
				</div>
				<div
					className={cl`
					${styles.flex} 
					${styles.business_text}
					${styles.font_style}
				`}
				>
					<p style={{ fontSize: 14 }}>{formData?.shipperSignature}</p>
				</div>
				<div
					className={cl`
					${styles.flex_row} 
					${styles.signature_text} 
				`}
				>
					<p style={{ fontSize: 9, color: tempColor }}>
						Signature of Shipper or his Agent
					</p>
				</div>
			</div>
			<div
				className={cl`
				${styles.block_col} 
				${styles.right_container} 
			`}
				style={{ '--temp-color': tempColor }}
			>
				<div
					className={cl`
					${styles.flex_col} 
					${styles.place_container} 
				`}
					style={{ '--temp-color': tempColor }}
				>
					<div
						className={cl`
						${styles.flex} 
						${styles.place_sub_container} 
					`}
					/>
					<div
						className={cl`
						${styles.flex} 
						${styles.place_container_outer_text} 
					`}
					>
						<div
							className={cl`
							${styles.flex} 
							${styles.place_container_text} 
						`}
						>
							<p className={styles.data} style={{ fontSize: 14 }}>
								{formatDate(formData.executedDate) || formatDate(new Date())}
							</p>
						</div>
						<div
							className={cl`
							${styles.flex} 
							${styles.place_value} 
							${styles.font_style}
						`}
							style={{ pointerEvents: 'none' }}
						>
							{formData.place}
						</div>
					</div>
					<div
						className={cl`
						${styles.flex_row} 
						${styles.date_container} 
					`}
					>
						<div
							className={cl`
							${styles.flex} 
							${styles.date_text} 
						`}
						>
							<p style={{ fontSize: 8, color: tempColor }}>
								Executed on (date)
							</p>
						</div>
						<div
							className={cl`
							${styles.flex} 
							${styles.place_text} 
						`}
						>
							<p style={{ fontSize: 8, color: tempColor }}>at (place)</p>
						</div>
						<div
							className={cl`
							${styles.flex} 
							${styles.signature_value} 
						`}
						>
							<p style={{ fontSize: 8, color: tempColor }}>
								Signature of Issuing Carrier or its Agent
							</p>
						</div>
					</div>
				</div>
				<div
					className={cl`
						${styles.flex_row} 
						${styles.down_container} 
					`}
				>
					<div
						className={cl`
							${styles.flex_col} 
							${styles.down_container_block} 
						`}
						style={{ '--temp-color': tempColor }}
					>
						<div
							className={cl`
							${styles.flex_row} 
							${styles.collected_container} 
						`}
						>
							<div
								className={cl`
								${styles.flex} 
								${styles.collected_block} 
							`}
							/>
							<div
								className={cl`
								${styles.flex} 
								${styles.collecte_block_text} 
								${styles.trapezium}
							`}
								style={{ '--temp-color': tempColor }}
							>
								<p style={{ fontSize: 9, color: tempColor }}>Total Collected</p>
							</div>
							<div
								className={cl`
								${styles.flex} 
								${styles.collecte_end_block} 
							`}
							/>
						</div>
						<div
							className={cl`
								${styles.flex} 
								${styles.collecte_block_end} 
							`}
						/>
					</div>
					<div
						className={cl`
								${styles.data}
								${styles.flex} 
								${styles.end_final} 
							`}
					>
						<p style={{ fontSize: 18 }}>{awbNumber}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default OtherChargeDetails;
