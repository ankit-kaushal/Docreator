import React from 'react';
import cl from '@/ui/commons/Components/utils/classname-processor';

import styles from './styles.module.css';

function ShipmentDetails({ formData = {}, whiteout = false }) {
	let tempColor = '#333';
	if (whiteout) {
		tempColor = 'transparent';
	}

	return (
		<div className={styles.container} style={{ pointerEvents: 'none' }}>
			<div className={styles.flex}>
				<div
					className={cl`
					${styles.block_col} 
					${styles.blockcol_in_flex}
					${styles.blockcol_minheight}
					${styles.carrier_information}
				`}
					style={{ '--temp-color': tempColor }}
				>
					<div
						className={cl`
						${styles.flex} 
						${styles.flex_padding_left} 
						${styles.flex_border_solid} 
						${styles.flex_in_flex_b} 
						${styles.input_issuing_agent} 
					`}
						style={{ '--temp-color': tempColor }}
					>
						<p style={{ fontSize: 10, color: tempColor }}>
							Issuing Carrier&apos;s Agent Name and City
						</p>
						<div
							className={cl`
						${styles.flex} 
						${styles.flex_font_bold} 
						${styles.input_issuing_agent} 
					`}
						>
							<div className={styles.font_style} style={{ paddingLeft: '2px' }}>
								{formData.agentName}
								<br />
								{formData.city}
							</div>
						</div>
					</div>
					<div
						className={cl`
							${styles.block_row} 
							${styles.blockrow_left_padding}
							${styles.blockrow_border}
							${styles.agent_iata_accounting_info}
						`}
						style={{ '--temp-color': tempColor }}
					>
						<div
							className={cl`
								${styles.flex} 
								${styles.flex_border_right} 
								${styles.flex_in_flex} 
							`}
							style={{ '--temp-color': tempColor }}
						>
							<p style={{ fontSize: 10 }}>
								{' '}
								<span style={{ color: tempColor }}>Agent&apos;s IATA Code</span>
								<div
									className={cl`
									${styles.flex} 
									${styles.flex_font_bold} 
									${styles.font_style}
								`}
									style={{ fontSize: 14 }}
								>
									{formData.iataCode}
								</div>
							</p>
						</div>
						<div
							className={cl`
						${styles.flex} 
						${styles.flex_padding_left}
						${styles.flex_in_flex}
					`}
						>
							<p style={{ fontSize: 10, color: tempColor }}> Account No.</p>
						</div>
					</div>
				</div>
				<div
					className={cl`
						${styles.block_row} 
						${styles.agent_iata_accounting_info}
						${styles.accounting_information}
					`}
					style={{ '--temp-color': tempColor }}
				>
					<div
						className={cl`
						${styles.flex} 
						${styles.flex_padding_left}
						${styles.flex_in_flex}
					`}
					>
						<p style={{ fontSize: 10, color: tempColor }}>
							Accounting Information
						</p>
					</div>
					<div
						className={cl`
						${styles.flex} 
						${styles.flex_padding_left}
						${styles.flex_font_bold}
						${styles.flex_justify_center}
						${styles.flex_in_flex}
						${styles.font_style}
					`}
						style={{
							fontSize: 14.5,
							textTransform: 'uppercase',
							whiteSpace: 'pre-wrap',
						}}
					>
						{formData.accountingInformation}
					</div>
				</div>
			</div>

			<div className={styles.flex}>
				<div
					className={cl`
					${styles.block_col}
					${styles.blockcol_in_flex}
				`}
					style={{ '--temp-color': tempColor }}
				>
					<div
						className={cl`
							${styles.block}
							${styles.departure_airport}
						`}
						style={{ '--temp-color': tempColor }}
					>
						<p style={{ fontSize: 10 }}>
							<span style={{ color: tempColor }}>
								Airport of Departure (Addr. of First Carrier) and Requested
								Routing
							</span>
							<div
								className={cl`
						${styles.flex}
						${styles.flex_font_bold}
					`}
							>
								<p
									className={styles.font_style}
									style={{ fontSize: 14, textTransform: 'uppercase' }}
								>
									{formData?.origin}
								</p>
							</div>
						</p>
					</div>
				</div>
				<div
					className={cl`
					${styles.block_col}
					${styles.blockcol_in_flex}
					${styles.referrence_block}
				`}
					style={{ '--temp-color': tempColor }}
				>
					<div
						className={cl`
							${styles.block_col}
							${styles.blockcol_border}
							${styles.referrence_optional}
						`}
						style={{ '--temp-color': tempColor }}
					>
						<div
							className={cl`
								${styles.flex_row}
								${styles.referrence_optional_flight_date_top}
							`}
						>
							<div
								className={cl`
									${styles.flex}
									${styles.flex_in_flex}
								`}
							>
								<div
									className={cl`
					${styles.flex}
					${styles.flex_padding_left}
				`}
								>
									<p style={{ fontSize: 9, color: tempColor }}>
										Reference Number
									</p>
								</div>
							</div>
							<div
								className={cl`
									${styles.flex}
									${styles.flex_in_flex}
									${styles.trapezium}
								`}
								style={{ '--temp-color': tempColor }}
							>
								<div
									className={cl`
					${styles.flex}
					${styles.optional_shipping_text}
				`}
								/>
								<p style={{ fontSize: 8, color: tempColor }}>
									Optional Shipping Information
								</p>
							</div>
							<div
								className={cl`
					${styles.flex}
					${styles.flex_in_flex}
				`}
							>
								<p style={{ fontSize: 9 }} />
							</div>
						</div>
						<div
							className={cl`
					${styles.flex_row}
					${styles.referrence_optional_bottom}
				`}
						>
							<div
								className={cl`
								${styles.flex}
								${styles.flex_border_right}
								${styles.flex_in_flex_c}
							`}
								style={{ '--temp-color': tempColor }}
							>
								<p style={{ fontSize: 9 }} />
							</div>
							<div
								className={cl`
								${styles.flex}
								${styles.flex_border_right}
								${styles.referrence_optional_bottom_middle}
							`}
								style={{ '--temp-color': tempColor }}
							>
								<p style={{ fontSize: 9 }} />
							</div>
							<div
								className={cl`
					${styles.flex}
					${styles.flex_in_flex_c}
				`}
							>
								<p style={{ fontSize: 9 }} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.flex}>
				<div
					className={cl`
					${styles.block_col}
					${styles.blockcol_in_flex}
					${styles.routing_block}
				`}
					style={{ '--temp-color': tempColor }}
				>
					<div
						className={cl`
						${styles.block_row} 
						${styles.blockrow_border}
						${styles.currency_declared_value_to_by_flight}
					`}
						style={{ '--temp-color': tempColor }}
					>
						<div
							className={cl`
							${styles.block_row} 
							${styles.blockrow_left_padding}
							${styles.blockrow_border}
							${styles.blockrow_in_flex}
							${styles.to_by_first_carrier}
						`}
							style={{ '--temp-color': tempColor }}
						>
							<div
								className={cl`
									${styles.flex} 
									${styles.flex_border_right}
									${styles.destination_portcode}
								`}
								style={{ '--temp-color': tempColor }}
							>
								<p style={{ fontSize: 8 }}>
									<span style={{ color: tempColor }}>To</span>
									<div
										className={cl`
						${styles.flex} 
						${styles.flex_font_bold}
					`}
									>
										<p className={styles.data} style={{ fontSize: 13 }}>
											{formData?.destinationPortCode}
										</p>
									</div>
								</p>
							</div>
							<div
								className={cl`
						${styles.flex_row} 
						${styles.first_carrier}
					`}
							>
								<div
									className={cl`
						${styles.flex} 
						${styles.by_first_carrier}
					`}
								>
									<div
										className={cl`
						${styles.flex} 
						${styles.flex_padding_left}
					`}
									>
										<p style={{ fontSize: 9 }}>
											<span style={{ color: tempColor }}>By First Carrier</span>{' '}
											<div
												className={cl`
													${styles.flex} 
													${styles.flex_font_bold}
												`}
											>
												<p className={styles.data} style={{ fontSize: 12 }}>
													{formData.airlineIataCode}
												</p>
											</div>
										</p>
									</div>
								</div>
								<div
									className={cl`
						${styles.flex} 
						${styles.routing_and_destination}
					`}
								>
									<div
										className={cl`
										${styles.flex} 
										${styles.trapezium}
									`}
										style={{ '--temp-color': tempColor }}
									>
										<p
											style={{
												fontSize: 9,
												padding: '0 4px',
												color: tempColor,
											}}
										>
											Routing and Destination
										</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className={cl`
							${styles.block_row} 
							${styles.blockrow_border}
							${styles.to_by_to}
						`}
							style={{ '--temp-color': tempColor }}
						>
							<div
								className={cl`
									${styles.flex} 
									${styles.flex_border_right}
									${styles.flex_padding_left}
									${styles.to_by}
								`}
								style={{ '--temp-color': tempColor }}
							>
								<p style={{ fontSize: 9 }}>
									<span style={{ color: tempColor }}>to</span>
									<div
										className={cl`
										${styles.flex} 
										${styles.flex_font_bold}
									`}
									>
										<p className={styles.data} style={{ fontSize: 12 }}>
											{formData.to_one}
										</p>
									</div>
								</p>
							</div>
							<div
								className={cl`
								${styles.flex} 
								${styles.flex_border_right}
								${styles.flex_padding_left}
								${styles.to_by}
							`}
								style={{ '--temp-color': tempColor }}
							>
								<p style={{ fontSize: 9 }}>
									<span style={{ color: tempColor }}>by</span>
									<div
										className={cl`
										${styles.flex} 
										${styles.flex_font_bold}
									`}
									>
										<p className={styles.data} style={{ fontSize: 12 }}>
											{formData.by_one}
										</p>
									</div>
								</p>
							</div>
							<div
								className={cl`
								${styles.flex} 
								${styles.flex_border_right}
								${styles.flex_padding_left}
								${styles.to_by}
							`}
								style={{ '--temp-color': tempColor }}
							>
								<p style={{ fontSize: 9 }}>
									<span style={{ color: tempColor }}>to</span>
									<div
										className={cl`
										${styles.flex} 
										${styles.flex_font_bold}
									`}
									>
										<p className={styles.data} style={{ fontSize: 12 }}>
											{formData.to_two}
										</p>
									</div>
								</p>
							</div>
							<div
								className={cl`
						${styles.flex} 
						${styles.flex_padding_left}
						${styles.to_by}
					`}
							>
								<p style={{ fontSize: 9 }}>
									<span style={{ color: tempColor }}>by</span>
									<div
										className={cl`
										${styles.flex} 
										${styles.flex_font_bold}
									`}
									>
										<p className={styles.data} style={{ fontSize: 12 }}>
											{formData.by_two}
										</p>
									</div>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div
					className={cl`
							${styles.block_row} 
							${styles.blockrow_border}
							${styles.currency_declared_value_to_by_flight}
						`}
					style={{
						'--temp-color': tempColor,
						borderBottom: `1px solid ${tempColor}`,
					}}
				>
					<div
						className={cl`
						${styles.flex} 
						${styles.flex_border_right}
						${styles.flex_in_flex_c}
						${styles.currency_section}
					`}
						style={{ '--temp-color': tempColor }}
					>
						<div
							className={cl`
								${styles.flex} 
								${styles.flex_border_right}
								${styles.currency_top_chgs}
							`}
							style={{ '--temp-color': tempColor }}
						>
							<div
								className={cl`
									${styles.flex_col} 
									${styles.flexcol_border_right}
									${styles.currency}
								`}
								style={{ '--temp-color': tempColor }}
							>
								<div
									className={cl`
					${styles.flex}
					${styles.currency_top_chgs}
				`}
								>
									<p style={{ fontSize: 9, color: tempColor }}>Currency</p>
								</div>
								<div
									className={cl`
					${styles.flex}
					${styles.flex_font_bold}
					${styles.flex_justify_center}
					${styles.flex_in_flex_d}
				`}
								>
									<p className={styles.data} style={{ fontSize: 13 }}>
										{formData.currency}
									</p>
								</div>
							</div>
							<div
								className={cl`
					${styles.flex} 
					${styles.chgs}
				`}
							>
								<p style={{ fontSize: 8, color: tempColor }}>CHGS</p>
							</div>
						</div>
						<div
							className={cl`
					${styles.flex} 
					${styles.flex_in_flex_d}
				`}
						>
							<div
								className={cl`
									${styles.flex_col} 
									${styles.flexcol_border_right}
									${styles.flexcol_in_flex}
								`}
								style={{ '--temp-color': tempColor }}
							>
								<div
									className={cl`
										${styles.flex} 
										${styles.flex_border_solid}
										${styles.optional_shipping_text}
										${styles.wtval_top}
									`}
									style={{ '--temp-color': tempColor }}
								>
									<p style={{ fontSize: 9, color: tempColor }}>WT/VAL</p>
								</div>
								<div
									className={cl`
					${styles.flex_row} 
					${styles.requested_wtval_other}
				`}
								>
									<div
										className={cl`
											${styles.flex_col} 
											${styles.flexcol_border_right}
											${styles.flexcol_in_flex}
										`}
										style={{ '--temp-color': tempColor }}
									>
										<div
											className={cl`
					${styles.flex} 
					${styles.flex_font_bold}
					${styles.flex_justify_center}
					${styles.wtval_other_bottom_left_ppd_coll}
				`}
										>
											<p
												style={{
													margin: '2px 0px',
													fontSize: 7,
													color: tempColor,
												}}
											>
												PPD
											</p>
										</div>
										<div
											className={cl`
					${styles.flex} 
					${styles.flex_font_bold}
					${styles.flex_justify_center}
					${styles.flex_in_flex_b}
				`}
										>
											<p
												className={styles.data}
												style={{ fontSize: 12, color: tempColor }}
											>
												{formData.paymentTerm === 'prepaid' && 'P'}
											</p>
										</div>
									</div>
									<div
										className={cl`
					${styles.flex_col} 
					${styles.flexcol_in_flex}
				`}
									>
										<div
											className={cl`
					${styles.flex} 
					${styles.flex_font_bold}
					${styles.flex_justify_center}
					${styles.flex_in_flex}
				`}
										>
											<p
												style={{
													margin: '2px 0px',
													fontSize: 7,
													color: tempColor,
												}}
											>
												COLL
											</p>
										</div>
										<div
											className={cl`
					${styles.flex} 
					${styles.flex_font_bold}
					${styles.flex_justify_center}
					${styles.flex_in_flex_b}
				`}
										>
											<p
												className={styles.data}
												style={{ fontSize: 12, color: tempColor }}
											>
												{formData.paymentTerm === 'collect' && 'C'}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div
								className={cl`
					${styles.flex_col} 
					${styles.flexcol_in_flex}
				`}
							>
								<div
									className={cl`
										${styles.flex} 
										${styles.flex_border_solid}
										${styles.optional_shipping_text}
										${styles.other_top}
									`}
									style={{ '--temp-color': tempColor }}
								>
									<p style={{ fontSize: 9, color: tempColor }}>Other</p>
								</div>
								<div
									className={cl`
					${styles.flex_row} 
					${styles.requested_wtval_other}
				`}
								>
									<div
										className={cl`
											${styles.flex_col} 
											${styles.flexcol_border_right}
											${styles.flexcol_in_flex}
										`}
										style={{ '--temp-color': tempColor }}
									>
										<div
											className={cl`
					${styles.flex} 
					${styles.flex_font_bold}
					${styles.flex_justify_center}
					${styles.wtval_other_bottom_left_ppd_coll}
				`}
										>
											<p
												style={{
													margin: '2px 0px',
													fontSize: 7,
													color: tempColor,
												}}
											>
												PPD
											</p>
										</div>
										<div
											className={cl`
					${styles.flex} 
					${styles.flex_font_bold}
					${styles.flex_justify_center}
					${styles.flex_in_flex_b}
				`}
										>
											<p
												className={styles.data}
												style={{ fontSize: 12, color: tempColor }}
											>
												{formData.paymentTerm === 'prepaid' && 'P'}
											</p>
										</div>
									</div>
									<div
										className={cl`
					${styles.flex_col} 
					${styles.flexcol_in_flex}
				`}
									>
										<div
											className={cl`
					${styles.flex} 
					${styles.flex_font_bold}
					${styles.flex_justify_center}
					${styles.wtval_other_bottom_left_ppd_coll}
				`}
										>
											<p
												style={{
													margin: '2px 0px',
													fontSize: 7,
													color: tempColor,
												}}
											>
												COLL
											</p>
										</div>
										<div
											className={cl`
					${styles.flex} 
					${styles.flex_font_bold}
					${styles.flex_justify_center}
					${styles.flex_in_flex_b}
				`}
										>
											<p
												className={styles.data}
												style={{ fontSize: 12, color: tempColor }}
											>
												{formData.paymentTerm === 'collect' && 'C'}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className={cl`
							${styles.flex} 
							${styles.flex_border_right}
							${styles.declared_carriage}
							${styles.declared_carriage_box}
						`}
						style={{ '--temp-color': tempColor }}
					>
						<p style={{ fontSize: 8.3, color: tempColor }}>
							Declared Value for Carriage
						</p>
						{formData.declaredValueForCarriage}
					</div>
					<div
						className={cl`
							${styles.flex} 
							${styles.flex_padding_left}
							${styles.flex_in_flex_c}
							${styles.flex_border_right}
						`}
						style={{ '--temp-color': tempColor }}
					>
						<div className={styles.flex_col}>
							<p style={{ fontSize: 8.3, color: tempColor }}>
								Declared Value for Customs
							</p>
							{formData.valueForCustom}
						</div>
					</div>
				</div>
			</div>

			<div
				className={styles.flex}
				style={{ borderBottom: `1px solid ${tempColor}` }}
			>
				<div
					className={cl`
						${styles.block_row} 
						${styles.blockrow_border}
						${styles.blockrow_in_flex}
					`}
					style={{
						'--temp-color': tempColor,
						borderLeft: `1px solid ${tempColor}`,
					}}
				>
					<div
						className={cl`
						${styles.flex} 
						${styles.flex_justify_center}
						${styles.flex_border_right}
						${styles.flex_in_flex}
					`}
						style={{
							'--temp-color': tempColor,
							paddingLeft: 5,
							paddingRight: 5,
						}}
					>
						<p style={{ fontSize: 9 }}>
							<span style={{ color: tempColor }}>Airport of Destination</span>{' '}
							<div
								className={cl`
						${styles.flex} 
						${styles.flex_font_bold}
						${styles.flex_justify_center}
					`}
							>
								<p
									className={styles.font_style}
									style={{ fontSize: 14, textTransform: 'uppercase' }}
								>
									{formData?.destination}
								</p>
							</div>
						</p>
					</div>
					<div
						className={cl`
							${styles.block_col} 
							${styles.blockcol_in_flex}
							${styles.blockcol_border}
						`}
						style={{ '--temp-color': tempColor }}
					>
						<div
							className={cl`
								${styles.flex_row} 
								${styles.referrence_optional_flight_date_top}
							`}
						>
							<div
								className={cl`
									${styles.flex} 
				
									${styles.requested_flight_date_top_left}
								`}
							/>
							<div
								className={cl`
									${styles.flex} 
									${styles.flex_in_flex}
									${styles.trapezium}
								`}
								style={{ '--temp-color': tempColor }}
							>
								<div
									className={cl`
										${styles.flex} 
										${styles.requested_flight_date_text}
									`}
								>
									<p style={{ fontSize: 9, color: tempColor }}>
										Requested Flight/Date
									</p>
								</div>
							</div>
							<div
								className={cl`
									${styles.flex} 
									${styles.requested_flight_date_top_right}
								`}
							/>
						</div>
						<div
							className={cl`
									${styles.flex_row} 
									${styles.requested_wtval_other}
								`}
						>
							<div
								className={cl`
										${styles.flex}
										${styles.flex_border_right}
										${styles.flex_in_flex}
									`}
								style={{ '--temp-color': tempColor }}
							/>
							<div
								className={cl`
										${styles.flex} 
										${styles.flex_in_flex}
									`}
							/>
						</div>
					</div>
				</div>
				<div
					className={cl`
							${styles.block_row} 
							${styles.blockrow_border}
							${styles.blockrow_in_flex}
						`}
					style={{ '--temp-color': tempColor }}
				>
					<div
						className={cl`
							${styles.flex_col} 
							${styles.flexcol_border_right}
							${styles.amount_of_insurance}
						`}
						style={{
							'--temp-color': tempColor,
							borderLeft: `1px solid ${tempColor}`,
						}}
					>
						<div
							className={cl`
					${styles.flex} 
					${styles.flex_justify_center}
					${styles.amount_of_insurance_top}
				`}
						>
							<p style={{ fontSize: 9, color: tempColor }}>
								Amount of Insurance
							</p>
						</div>
						<div
							className={cl`
					${styles.flex} 
					${styles.flex_font_bold}
					${styles.flex_justify_center}
					${styles.amount_of_insurance_bottom}
				`}
						>
							<p className={styles.data} style={{ fontSize: 15 }}>
								{formData.amountOfInsurance}
							</p>
						</div>
					</div>
					<div
						className={cl`
							${styles.flex} 
							${styles.flex_padding_left}
							${styles.insurance}
						`}
						style={{ '--temp-color': tempColor }}
					>
						<p style={{ fontSize: 8, color: tempColor }} className="text">
							INSURANCE - If carrier offers insurance, and such insurance is
							requested in accordance with the conditions thereof, indicate
							amount to be insured in figures in box marked “Amount of
							Insurance”.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default ShipmentDetails;
