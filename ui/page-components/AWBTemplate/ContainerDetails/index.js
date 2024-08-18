import React from 'react';
import cl from '@/ui/commons/Components/utils/classname-processor';

import styles from './styles.module.css';

function ContainerDetails({ formData = {}, whiteout = false }) {
	const { dimension = [] } = formData;

	let tempColor = '#333';
	if (whiteout) {
		tempColor = 'transparent';
	}

	return (
		<div className={styles.container} style={{ pointerEvents: 'none' }}>
			<div className={styles.flex}>
				<div
					className={cl`
						${styles.block} 
						${styles.block_flex_border} 
						${styles.handling_information} 
					`}
					style={{ '--temp-color': tempColor }}
				>
					<div
						className={cl`
						${styles.flex_col} 
						${styles.inner_handling_information} 
					`}
					>
						<p style={{ fontSize: 10, color: tempColor }}>
							Handling Information
						</p>
						<div
							className={cl`
							${styles.flex} 
							${styles.flex_font_weight}
							${styles.vol_weight_box}
							${styles.font_style}
						`}
						>
							{formData.handlingInformation}
						</div>
					</div>
					<div
						className={cl`
						${styles.flex_col} 
						${styles.sci_handling_information} 
					`}
					>
						<div
							className={cl`
							${styles.flex} 
							${styles.sci_text_style}
						`}
							style={{ '--temp-color': tempColor }}
						>
							<p style={{ fontSize: 10, color: tempColor }}>SCI</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.flex}>
				<div
					className={cl`
						${styles.block} 
						${styles.block_flex_border} 
						${styles.container_section} 
					`}
					style={{ '--temp-color': tempColor }}
				>
					<div
						className={cl`
						${styles.flex_col} 
						${styles.border_right_solid}
						${styles.block_a_container_section}
					`}
						style={{ '--temp-color': tempColor }}
					>
						<div
							className={cl`
							${styles.flex} 
							${styles.flex_border_solid}
							${styles.flex_in_flex}
							${styles.block_a_container_section_rcp}
						`}
							style={{ '--temp-color': tempColor }}
						>
							<p style={{ fontSize: 7, color: tempColor }}>No. of Pieces RCP</p>
						</div>

						<div
							className={cl`
							${styles.flex} 
							${styles.flex_font_weight}
							${styles.flex_border_solid}
							${styles.flex_in_flex_b}
							${styles.flex_justify_end}
						`}
							style={{ '--temp-color': tempColor }}
						>
							<div
								className={cl`
								${styles.flex} 
								${styles.block_a_container_top_package}
							`}
							>
								<p className={styles.data} style={{ fontSize: 13 }}>
									{formData?.totalPackagesCount}
								</p>
							</div>
							<div
								className={cl`
								${styles.flex} 
								${styles.block_a_container_volume}
								${styles.vol_weight_box}
							`}
							>
								<div
									className={cl`
									${styles.flex} 
								`}
								>
									{' '}
									<p className={styles.data} style={{ fontSize: 11 }}>
										<div>Volume Weight:</div>
									</p>
									<div
										className={cl`
										${styles.flex} 
										${styles.vol_weight_box}
									`}
									>
										<p
											style={{ fontSize: 11 }}
											className={`${styles.data} volume_box`}
										>
											{`${formData.volumetricWeight} Kgs(${dimension?.[0]?.unit || 'Cms'})`}
										</p>
									</div>
								</div>
								<div
									className={cl`
									${styles.flex} 
								`}
								>
									<div
										className={cl`
										${styles.flex} 
										${styles.vol_weight_box}
									`}
									>
										<p
											style={{ fontSize: 11 }}
											className={`${styles.data} volume_box`}
										>
											{dimension &&
												dimension.map(
													(item) =>
														item.length &&
														`${item.length}x${item.width}x${item.height}/${item.packages_count} 
											`,
												)}
										</p>
									</div>
								</div>
								<div
									className={cl`
									${styles.flex} 
									${styles.margin_remarks}
								`}
								>
									<p
										className={styles.data}
										style={{ fontSize: 11, marginRight: 4 }}
									>
										Remarks:
									</p>
									<div
										className={cl`
										${styles.flex} 
										${styles.vol_weight_box}
									`}
									>
										<p
											style={{ fontSize: 11 }}
											className={`${styles.data} volume_box`}
										>
											<div className={`${styles.data} remark_box`}>
												{formData.remark}
											</div>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className={cl`
							${styles.flex} 
							${styles.flex_font_weight}
							${styles.flex_in_flex}
							${styles.flex_justify_end}
							${styles.block_a_container_bottom_package}
						`}
						>
							<p className={styles.data} style={{ fontSize: 13 }}>
								{formData?.totalPackagesCount}
							</p>
						</div>
					</div>

					<div
						className={cl`
						${styles.flex_col} 
						${styles.border_right_solid}
						${styles.block_b_container_section}
					`}
						style={{ '--temp-color': tempColor }}
					>
						<div
							className={cl`
							${styles.flex} 
							${styles.flex_border_solid}
							${styles.flex_in_flex}
							${styles.flex_justify_center}
						`}
							style={{ '--temp-color': tempColor }}
						>
							<div
								className={cl`
								${styles.flex} 
								${styles.grossweight_text}
							`}
							>
								<p style={{ fontSize: 8, color: tempColor }}>Gross Weight</p>
							</div>
						</div>
						<div
							className={cl`
								${styles.flex} 
								${styles.flex_font_weight}
								${styles.flex_border_solid}
								${styles.flex_in_flex_b}
								${styles.flex_justify_end}
							`}
							style={{ '--temp-color': tempColor }}
						>
							<div
								className={cl`
								${styles.flex} 
								${styles.block_a_container_bottom_package}
							`}
							>
								<p className={styles.data} style={{ fontSize: 13 }}>
									{formData?.weight}
								</p>
							</div>
						</div>
						<div
							className={cl`
								${styles.flex} 
								${styles.flex_font_weight}
								${styles.flex_in_flex}
								${styles.flex_justify_end}
							`}
						>
							<div
								className={cl`
								${styles.flex} 
								${styles.block_a_container_bottom_package}
							`}
							>
								<p className={styles.data} style={{ fontSize: 13 }}>
									{formData?.weight}
								</p>
							</div>
						</div>
					</div>

					<div
						className={cl`
						${styles.flex_col} 
						${styles.border_right_solid}
						${styles.block_c_container_section}
					`}
						style={{ '--temp-color': tempColor }}
					>
						<div
							className={cl`
								${styles.flex} 
								${styles.flex_border_solid}
								${styles.flex_in_flex_empty_top}
							`}
							style={{ '--temp-color': tempColor }}
						>
							<p style={{ fontSize: 8 }} />
						</div>
						<div
							className={cl`
								${styles.flex} 
								${styles.flex_font_weight}
								${styles.flex_in_flex_empty_bottom}
							`}
						>
							<p className={styles.font_style} style={{ fontSize: 13 }}>
								K
							</p>
						</div>
					</div>
					<div
						className={cl`
						${styles.flex_row} 
						${styles.block_dfhjl_container_section} 
					`}
						style={{ '--temp-color': tempColor }}
					>
						<p style={{ fontSize: 11 }}> </p>
					</div>

					<div
						className={cl`
						${styles.flex_col} 
						${styles.border_right_solid}
						${styles.block_egi_container_section}
					`}
						style={{ '--temp-color': tempColor }}
					>
						<div
							className={cl`
							${styles.flex_col} 
							${styles.block_e_container_top_section}
						`}
						>
							<div
								className={cl`
								${styles.flex} 
								${styles.block_e_container_rateclass_section}
							`}
							>
								<p style={{ fontSize: 7, color: tempColor }}>Rate Class</p>
							</div>
							<div
								className={cl`
								${styles.flex_row} 
								${styles.block_e_container_commodity_section} 
							`}
							>
								<div
									className={cl`
									${styles.flex} 
									${styles.flex_in_flex_empty_top}
									${styles.block_e_container_commodity_empty_section}
								`}
									style={{ '--temp-color': tempColor }}
								/>
								<div
									className={cl`
									${styles.flex} 
									${styles.flex_justify_center}
									${styles.flex_border_solid}
									${styles.flex_in_flex_empty_bottom}
									${styles.block_e_container_commodity_text_section}
								`}
									style={{ '--temp-color': tempColor }}
								>
									<p style={{ fontSize: 7, color: tempColor }}>
										Commodity
										<div
											className={cl`
											${styles.flex} 
											${styles.flex_justify_center}
										`}
										>
											<p style={{ fontSize: 7 }}>Item No.</p>
										</div>
									</p>
								</div>
							</div>
						</div>

						<div
							className={cl`
								${styles.flex_row} 
								${styles.block_e_container_bottom_section} 
							`}
						>
							<div
								className={cl`
								${styles.flex} 
								${styles.flex_font_weight}
								${styles.flex_in_flex_empty_top}
								${styles.block_e_container_q_section}
							`}
								style={{ '--temp-color': tempColor }}
							>
								<p
									className={styles.data}
									style={{ fontSize: 13, textTransform: 'uppercase' }}
								>
									{formData.class}
								</p>
							</div>
							<div
								className={cl`
								${styles.flex} 
								${styles.flex_in_flex_empty_bottom}

							`}
							>
								<p style={{ fontSize: 7 }} />
							</div>
						</div>
					</div>
					<div
						className={cl`
						${styles.flex_row} 
						${styles.block_dfhjl_container_section} 
					`}
						style={{ '--temp-color': tempColor }}
					>
						<p style={{ fontSize: 7 }}> </p>
					</div>

					<div
						className={cl`
							${styles.flex_col} 
							${styles.border_right_solid}
							${styles.block_egi_container_section}
						`}
						style={{ '--temp-color': tempColor }}
					>
						<div
							className={cl`
								${styles.flex} 
								${styles.flex_border_solid}
								${styles.flex_justify_center}
								${styles.flex_in_flex_empty_top}
							`}
							style={{ '--temp-color': tempColor }}
						>
							<div
								className={cl`
								${styles.flex} 
								${styles.chargeableweight_text}
							`}
							>
								<p style={{ fontSize: 8, color: tempColor }}>
									Chargeable
									<div
										className={cl`
										${styles.flex} 
										${styles.flex_justify_center}
									`}
									>
										<p style={{ fontSize: 8 }}>Weight</p>
									</div>
								</p>
							</div>
						</div>
						<div
							className={cl`
								${styles.flex} 
								${styles.flex_font_weight}
								${styles.flex_justify_end}
								${styles.flex_in_flex_empty_bottom}
							`}
						>
							<div
								className={cl`
								${styles.flex} 
								${styles.block_a_container_bottom_package}
							`}
							>
								<p className={styles.data} style={{ fontSize: 13 }}>
									{formData?.chargeableWeight}
								</p>
							</div>
						</div>
					</div>

					<div
						className={cl`
						${styles.flex_row} 
						${styles.block_dfhjl_container_section} 
					`}
						style={{ '--temp-color': tempColor }}
					>
						<p style={{ fontSize: 7 }}> </p>
					</div>

					<div
						className={cl`
							${styles.flex_col} 
							${styles.border_right_solid}
							${styles.block_egi_container_section}
						`}
						style={{ '--temp-color': tempColor }}
					>
						<div
							className={cl`
								${styles.flex} 
								${styles.flex_border_solid}
								${styles.flex_justify_center}
								${styles.flex_in_flex_empty_top}
							`}
							style={{ '--temp-color': tempColor }}
						>
							<div
								className={cl`
								${styles.flex} 
								${styles.grossweight_text}
							`}
							>
								<p style={{ fontSize: 9, color: tempColor }}>Rate / Charge</p>
							</div>
						</div>
						<div
							className={cl`
								${styles.flex} 
								${styles.flex_font_weight}
								${styles.flex_justify_end}
								${styles.flex_in_flex_empty_bottom}
							`}
						>
							<div
								className={cl`
								${styles.flex} 
								${styles.block_a_container_bottom_package}
							`}
							>
								<p className={styles.data} style={{ fontSize: 13 }}>
									{formData?.class === 'a' ? 'AS AGREED' : formData.ratePerKg}
								</p>
							</div>
						</div>
					</div>

					<div
						className={cl`
						${styles.flex_row} 
						${styles.block_dfhjl_container_section} 
					`}
						style={{ '--temp-color': tempColor }}
					>
						<p style={{ fontSize: 7 }}> </p>
					</div>

					<div
						className={cl`
							${styles.flex_col} 
							${styles.border_right_solid}
							${styles.block_k_container_section}
						`}
						style={{ '--temp-color': tempColor }}
					>
						<div
							className={cl`
								${styles.flex} 
								${styles.flex_border_solid}
								${styles.flex_in_flex}
								${styles.flex_justify_center}
							`}
							style={{ '--temp-color': tempColor }}
						>
							<div
								className={cl`
								${styles.flex} 
								${styles.grossweight_text}
							`}
							>
								<p style={{ fontSize: 9, color: tempColor }}>Total</p>
							</div>
						</div>
						<div
							className={cl`
								${styles.flex} 
								${styles.flex_font_weight}
								${styles.flex_border_solid}
								${styles.flex_in_flex_b}
								${styles.flex_justify_end}
							`}
							style={{ '--temp-color': tempColor }}
						>
							<div
								className={cl`
								${styles.flex} 
								${styles.block_a_container_bottom_package}
							`}
							>
								<p className={styles.data} style={{ fontSize: 13 }}>
									{formData?.class === 'a' ? 'AS AGREED' : formData.amount}
								</p>
							</div>
						</div>
						<div
							className={cl`
								${styles.flex} 
								${styles.flex_font_weight}
								${styles.flex_in_flex}
								${styles.flex_justify_end}
							`}
						>
							<div
								className={cl`
								${styles.data}
								${styles.flex} 
								${styles.block_a_container_bottom_package}
							`}
							>
								{formData?.class === 'a' ? 'AS AGREED' : formData.amount}
							</div>
						</div>
					</div>

					<div
						className={cl`
						${styles.flex_row} 
						${styles.block_dfhjl_container_section} 
					`}
						style={{ '--temp-color': tempColor }}
					>
						<p style={{ fontSize: 7 }}> </p>
					</div>

					<div
						className={cl`
							${styles.flex_col} 
							${styles.block_m_container_section}
						`}
					>
						<div
							className={cl`
								${styles.flex} 
								${styles.flex_border_solid}
								${styles.flex_justify_center}
								${styles.flex_in_flex_empty_top}
							`}
							style={{ '--temp-color': tempColor }}
						>
							<div
								className={cl`
								${styles.flex} 
								${styles.commodity_text_style}
							`}
							>
								<p style={{ fontSize: 9, color: tempColor }}>
									Nature and Quantity of Goods
									<div
										className={cl`
										${styles.flex} 
										${styles.flex_justify_center}
									`}
									>
										<p style={{ fontSize: 9 }}>(incl. Dimensions or Volume)</p>
									</div>
								</p>
							</div>
						</div>

						<div
							className={cl`
								${styles.flex} 
								${styles.flex_font_weight}
								${styles.flex_in_flex_empty_bottom}
							`}
						>
							<div
								className={styles.font_style}
								style={{ paddingLeft: '4px', whiteSpace: 'pre-wrap' }}
							>
								{formData.commodity}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default ContainerDetails;
