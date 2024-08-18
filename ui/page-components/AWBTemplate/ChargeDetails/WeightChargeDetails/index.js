import React from 'react';
import cl from '@/ui/commons/Components/utils/classname-processor';

import styles from './styles.module.css';

function WeightChargeDetails({ data = {}, formData = {}, whiteout = false }) {
	let tempColor = '#333';
	if (whiteout) {
		tempColor = 'transparent';
	}

	return (
		<div
			className={cl`
				${styles.block_col} 
				${styles.weight_charge_container} 
			`}
			style={{ '--temp-color': tempColor }}
		>
			<div
				className={cl`
				${styles.flex_col} 
				${styles.common_border_bottom}
				${styles.common_flex} 
			`}
				style={{ '--temp-color': tempColor }}
			>
				<div
					className={cl`
					${styles.flex_row} 
					${styles.prepaid_block}
				`}
				>
					<div
						className={cl`
						${styles.flex} 
						${styles.prepaid_sub_block}
					`}
					/>
					<div
						className={cl`
						${styles.flex} 
						${styles.prepaid_sub_devision}
						${styles.trapezium}
					`}
						style={{ '--temp-color': tempColor }}
					>
						<p style={{ fontSize: 9, color: tempColor }}>Prepaid</p>
					</div>
					<div
						className={cl`
						${styles.flex} 
						${styles.collect_block}
					`}
					/>
					<div
						className={cl`
						${styles.flex} 
						${styles.common_justify_center}
						${styles.weight_charge_sub_block}
						${styles.trapezium}
					`}
						style={{ '--temp-color': tempColor }}
					>
						<p style={{ fontSize: 9, color: tempColor }}>Weight Charge</p>
					</div>
					<div
						className={cl`
						${styles.flex} 
						${styles.collect_block}
					`}
					/>
					<div
						className={cl`
						${styles.flex} 
						${styles.collect_sub_block}
						${styles.trapezium}
					`}
						style={{ '--temp-color': tempColor }}
					>
						<p style={{ fontSize: 9, color: tempColor }}>Collect</p>
					</div>
					<div
						className={cl`
						${styles.flex} 
						${styles.prepaid_sub_block}
					`}
					/>
				</div>

				<div
					className={cl`
					${styles.flex_row} 
					${styles.total_price_block}
				`}
				>
					{formData.paymentTerm === 'prepaid' ? (
						<div
							className={cl`
						${styles.flex} 
						${styles.common_justify_center}
						${styles.total_price_sub_block}
						${styles.common_flex}
						${styles.common_border_right}
					`}
							style={{ '--temp-color': tempColor }}
						>
							<p className={styles.font_style} style={{ fontSize: 13 }}>
								{formData?.class === 'a'
									? 'AS AGREED'
									: (data?.totalCharge || 0.0).toFixed(2)}
							</p>
						</div>
					) : (
						<div style={{ flex: 1 }} />
					)}

					{formData.paymentTerm === 'collect' ? (
						<div
							className={cl`
						${styles.flex} 
						${styles.common_justify_center}
						${styles.total_price_sub_block}
						${styles.common_flex}
						${styles.common_border_left}
					`}
							style={{ '--temp-color': tempColor }}
						>
							<p className={styles.font_style} style={{ fontSize: 13 }}>
								{formData?.class === 'a'
									? 'AS AGREED'
									: (data?.totalCharge || 0.0).toFixed(2)}
							</p>
						</div>
					) : (
						<div style={{ flex: 1 }} />
					)}
				</div>
			</div>
			<div
				className={cl`
				${styles.flex_col} 
				${styles.common_border_bottom}
				${styles.common_flex} 
			`}
				style={{ '--temp-color': tempColor }}
			>
				<div
					className={cl`
					${styles.flex_row} 
					${styles.prepaid_block}
				`}
				>
					<div
						className={cl`
						${styles.flex} 
						${styles.valuable_charge_sub_block}
					`}
					/>
					<div
						className={cl`
						${styles.flex} 
						${styles.common_justify_center}
						${styles.valuable_charge_text_block}
						${styles.trapezium}
					`}
						style={{ '--temp-color': tempColor }}
					>
						<p style={{ fontSize: 9, color: tempColor }}>Valuation Charge</p>
					</div>
					<div
						className={cl`
						${styles.flex} 
						${styles.valuable_charge_end_block}
					`}
					/>
				</div>

				<div
					className={cl`
					${styles.flex_row} 
					${styles.total_price_block}
				`}
				>
					<div
						className={cl`
						${styles.flex} 
						${styles.common_flex}
						${styles.common_border_right}
					`}
						style={{ '--temp-color': tempColor }}
					/>
					<div
						className={cl`
						${styles.flex} 
						${styles.common_flex}
					`}
					/>
				</div>
			</div>
			<div
				className={cl`
				${styles.flex_col} 
				${styles.common_border_bottom}
				${styles.common_flex} 
			`}
				style={{ '--temp-color': tempColor }}
			>
				<div
					className={cl`
					${styles.flex_row} 
					${styles.prepaid_block}
				`}
				>
					<div
						className={cl`
						${styles.flex} 
						${styles.tax_sub_block}
					`}
					/>
					<div
						className={cl`
						${styles.flex} 
						${styles.common_justify_center}
						${styles.tax_text_block}
						${styles.trapezium}
					`}
						style={{ '--temp-color': tempColor }}
					>
						<p style={{ fontSize: 9, color: tempColor }}>Tax</p>
					</div>
					<div
						className={cl`
						${styles.flex} 
						${styles.tax_end_block}
					`}
					/>
				</div>

				<div
					className={cl`
					${styles.flex_row} 
					${styles.total_price_block}
				`}
				>
					<div
						className={cl`
						${styles.flex} 
						${styles.common_flex}
						${styles.common_border_right}
					`}
						style={{ '--temp-color': tempColor }}
					/>
					<div
						className={cl`
						${styles.flex} 
						${styles.common_flex}
					`}
					/>
				</div>
			</div>
			<div
				className={cl`
				${styles.flex_col} 
				${styles.common_border_bottom}
				${styles.common_flex} 
			`}
				style={{ '--temp-color': tempColor }}
			>
				<div
					className={cl`
					${styles.flex_row} 
					${styles.prepaid_block}
				`}
				>
					<div
						className={cl`
						${styles.flex} 
						${styles.total_other_charge_sub_block}
					`}
					/>
					<div
						className={cl`
						${styles.flex} 
						${styles.common_justify_center}
						${styles.total_other_charge_text_block}
						${styles.trapezium}
					`}
						style={{ '--temp-color': tempColor }}
					>
						<p style={{ fontSize: 9, color: tempColor }}>
							Total Other Charges Due Agent
						</p>
					</div>
					<div
						className={cl`
						${styles.flex} 
						${styles.total_other_charge_final_block}
					`}
					/>
				</div>
				<div
					className={cl`
					${styles.flex_row} 
					${styles.total_price_block}
				`}
				>
					{formData.paymentTerm === 'prepaid' ? (
						<div
							className={cl`
						${styles.flex} 
						${styles.common_justify_center}
						${styles.total_other_charge_text_value_block}
						${styles.common_flex}
						${styles.common_border_right}
					`}
							style={{ '--temp-color': tempColor }}
						>
							<p className={styles.font_style} style={{ fontSize: 13 }}>
								{formData?.class === 'a'
									? 'AS AGREED'
									: (data?.agentCharge || 0.0).toFixed(2)}
							</p>
						</div>
					) : (
						<div
							className={cl`
						${styles.flex} 
						${styles.common_flex}
					`}
						/>
					)}
					{formData.paymentTerm === 'collect' ? (
						<div
							className={cl`
						${styles.flex} 
						${styles.common_justify_center}
						${styles.total_other_charge_text_value_block}
						${styles.common_flex}
						${styles.common_border_left}
					`}
							style={{ '--temp-color': tempColor }}
						>
							<p className={styles.font_style} style={{ fontSize: 13 }}>
								{formData?.class === 'a'
									? 'AS AGREED'
									: (data?.agentCharge || 0.0).toFixed(2)}
							</p>
						</div>
					) : (
						<div
							className={cl`
						${styles.flex} 
						${styles.common_flex}
					`}
						/>
					)}
				</div>
			</div>
			<div
				className={cl`
				${styles.flex_col}
				${styles.carrier_container}
				${styles.common_border_bottom}
				${styles.common_flex} 
			`}
				style={{ '--temp-color': tempColor }}
			>
				<div
					className={cl`
					${styles.flex_row} 
					${styles.prepaid_block}
				`}
				>
					<div
						className={cl`
						${styles.flex} 
						${styles.carrier_sub_block}
					`}
					/>
					<div
						className={cl`
						${styles.flex} 
						${styles.common_justify_center}
						${styles.carrier_text_block}
						${styles.trapezium}
					`}
						style={{ '--temp-color': tempColor }}
					>
						<p style={{ fontSize: 9, color: tempColor }}>
							Total Other Charges Due Carrier
						</p>
					</div>
					<div
						className={cl`
						${styles.flex} 
						${styles.carrier_end_block}
					`}
					/>
				</div>

				<div
					className={cl`
					${styles.flex_row} 
					${styles.total_price_block}
				`}
				>
					{formData.paymentTerm === 'prepaid' ? (
						<div
							className={cl`
						${styles.flex} 
						${styles.common_justify_center}
						${styles.carrier_final_sub_block}
						${styles.common_flex}
						${styles.common_border_right}
					`}
							style={{ '--temp-color': tempColor }}
						>
							<p className={styles.font_style} style={{ fontSize: 13 }}>
								{formData?.class === 'a'
									? 'AS AGREED'
									: (data?.carrierCharge || 0.0).toFixed(2)}
							</p>
						</div>
					) : (
						<div
							className={cl`
						${styles.flex} 
						${styles.common_flex}
					`}
						/>
					)}
					{formData.paymentTerm === 'collect' ? (
						<div
							className={cl`
						${styles.flex} 
						${styles.common_justify_center}
						${styles.carrier_final_sub_block}
						${styles.common_flex}
						${styles.common_border_left}
					`}
							style={{ '--temp-color': tempColor }}
						>
							<p className={styles.font_style} style={{ fontSize: 13 }}>
								{formData?.class === 'a'
									? 'AS AGREED'
									: (data?.carrierCharge || 0.0).toFixed(2)}
							</p>
						</div>
					) : (
						<div
							className={cl`
						${styles.flex} 
						${styles.common_flex}
					`}
						/>
					)}
				</div>
			</div>
			<div
				className={cl`
					${styles.flex_row} 
					${styles.total_prepaid_container}
				`}
				style={{ '--temp-color': tempColor }}
			>
				<div
					className={cl`
						${styles.flex} 
						${styles.common_flex}
						${styles.common_border_right}
					`}
					style={{ '--temp-color': tempColor }}
				/>
				<div
					className={cl`
						${styles.flex} 
						${styles.common_flex}
					`}
				/>
			</div>
			<div
				className={cl`
					${styles.flex_row} 
					${styles.total_prepaid_container}
				`}
			>
				<div
					className={cl`
					${styles.flex_col}
					${styles.common_flex}
					${styles.common_border_right} 
				`}
					style={{ '--temp-color': tempColor }}
				>
					<div
						className={cl`
						${styles.flex_row} 
						${styles.prepaid_block}
					`}
					>
						<div
							className={cl`
							${styles.flex} 
							${styles.prepaid_sub_block}
						`}
						/>
						<div
							className={cl`
							${styles.flex} 
							${styles.common_justify_center}
							${styles.prepaid_total_text_block}
							${styles.trapezium}
						`}
							style={{ '--temp-color': tempColor }}
						>
							<p style={{ fontSize: 9, color: tempColor }}>Total Prepaid</p>
						</div>
						<div
							className={cl`
							${styles.flex} 
							${styles.prepaid_sub_block}
						`}
						/>
					</div>
					{formData.paymentTerm === 'prepaid' && (
						<div
							className={cl`
						${styles.flex} 
						${styles.common_justify_center}
						${styles.prepaid_total_value}
					`}
						>
							<p className={styles.font_style} style={{ fontSize: 13 }}>
								{formData?.class === 'a'
									? 'AS AGREED'
									: (data?.finalCharge || 0.0).toFixed(2)}
							</p>
						</div>
					)}
				</div>

				<div
					className={cl`
					${styles.flex_col}
					${styles.common_flex}
				`}
				>
					<div
						className={cl`
						${styles.flex_row} 
						${styles.prepaid_block}
					`}
					>
						<div
							className={cl`
							${styles.flex} 
							${styles.prepaid_sub_block}
						`}
						/>
						<div
							className={cl`
							${styles.flex} 
							${styles.common_justify_center}
							${styles.prepaid_collect_text_block}
							${styles.trapezium}
						`}
							style={{ '--temp-color': tempColor }}
						>
							<p style={{ fontSize: 9, color: tempColor }}>Total Collect</p>
						</div>
						<div
							className={cl`
							${styles.flex} 
							${styles.prepaid_sub_block}
						`}
						/>
					</div>
					{formData.paymentTerm === 'collect' && (
						<div
							className={cl`
						${styles.flex} 
						${styles.common_justify_center}
						${styles.prepaid_total_value}
					`}
						>
							<p className={styles.font_style} style={{ fontSize: 13 }}>
								{formData?.class === 'a'
									? 'AS AGREED'
									: (data?.finalCharge || 0.0).toFixed(2)}
							</p>
						</div>
					)}
				</div>
			</div>

			<div
				className={cl`
				${styles.flex_row} 
				${styles.total_prepaid_container}
			`}
			>
				<div
					className={cl`
					${styles.flex_col}
					${styles.common_flex}
					${styles.common_border_right} 
				`}
					style={{ '--temp-color': tempColor }}
				>
					<div
						className={cl`
						${styles.flex_row} 
						${styles.prepaid_block}
					`}
					>
						<div
							className={cl`
							${styles.flex} 
							${styles.conversion_outer_text_block}
						`}
						/>
						<div
							className={cl`
							${styles.flex} 
							${styles.common_justify_center}
							${styles.conversion_text_block}
							${styles.trapezium}
						`}
							style={{ '--temp-color': tempColor }}
						>
							<p style={{ fontSize: 9, color: tempColor }}>
								Currency Conversion Rates
							</p>
						</div>
						<div
							className={cl`
							${styles.flex} 
							${styles.conversion_end_block}
						`}
						/>
					</div>
					<div
						className={cl`
							${styles.flex} 
							${styles.conversion_end}
						`}
					>
						<p> </p>
					</div>
				</div>
				<div
					className={cl`
					${styles.flex_col}
					${styles.common_flex}
				`}
				>
					<div
						className={cl`
						${styles.flex_row} 
						${styles.prepaid_block}
					`}
					>
						<div
							className={cl`
							${styles.flex} 
							${styles.currency_outer_text_block}
						`}
						/>
						<div
							className={cl`
							${styles.flex} 
							${styles.common_justify_center}
							${styles.currency_text_block}
							${styles.trapezium}
						`}
							style={{ '--temp-color': tempColor }}
						>
							<p style={{ fontSize: 9, color: tempColor }}>
								CC Charges in Dest. Currency
							</p>
						</div>
						<div
							className={cl`
							${styles.flex} 
							${styles.currency_final_end_block}
						`}
						/>
					</div>
					<div
						className={cl`
							${styles.flex} 
							${styles.currency_end}
						`}
					/>
				</div>
			</div>
			<div
				className={cl`
				${styles.flex_row} 
				${styles.destination_container}
			`}
			>
				<div
					className={cl`
					${styles.flex} 
					${styles.common_justify_center}
					${styles.destination_text}
					${styles.common_flex}
					${styles.common_border_right}
				`}
					style={{ '--temp-color': tempColor }}
				>
					<p style={{ fontSize: 9, color: tempColor }}>
						For Carrier&apos;s Use only at
						<div
							className={cl`
							${styles.flex} 
							${styles.common_justify_center}
						`}
						>
							<p style={{ fontSize: 9 }}>Destination</p>
						</div>
					</p>
				</div>
				<div
					className={cl`
					${styles.flex_col}
					${styles.common_flex}
				`}
				>
					<div
						className={cl`
						${styles.flex_row} 
						${styles.prepaid_block}
					`}
					>
						<div
							className={cl`
							${styles.flex} 
							${styles.prepaid_sub_block}
						`}
						/>
						<div
							className={cl`
							${styles.flex} 
							${styles.charges_container_text}
							${styles.trapezium}
						`}
							style={{ '--temp-color': tempColor }}
						>
							<p style={{ fontSize: 9, color: tempColor }}>
								Charges at Destination
							</p>
						</div>
						<div
							className={cl`
							${styles.flex} 
							${styles.prepaid_sub_block}
						`}
						/>
					</div>
					<div
						className={cl`
							${styles.flex} 
							${styles.charges_container_end}
						`}
					/>
				</div>
			</div>
		</div>
	);
}
export default WeightChargeDetails;
