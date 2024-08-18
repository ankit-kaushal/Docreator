import React from 'react';
import cl from '@/ui/commons/Components/utils/classname-processor';

import OtherChargeDetails from './OtherChargeDetails';
import styles from './styles.module.css';
import WeightChargeDetails from './WeightChargeDetails';
import { footerValues } from '@/ui/configurations/footer-values';

const FOOTER_MAPPING = {
	copy_12: 'COPY 12(FOR CUSTOMS)',
	copy_11: 'COPY 11(EXTRA COPY FOR CARRIER)',
	copy_10: 'COPY 10(EXTRA COPY FOR CARRIER)',
	copy_9: 'COPY 9(FOR AGENT)',
	copy_8: 'COPY 8(FOR FIRST CARRIER)',
	copy_7: 'COPY 7(FOR SECOND CARRIER)',
	copy_6: 'COPY 6(FOR THIRD CARRIER)',
	copy_5: 'COPY 5(FOR AIRPORT OF DESTINATION)',
	copy_4: 'COPY 4(DELIVERY RECEIPT)',
	original_3: 'ORIGINAL 3 (FOR SHIPPER)',
	original_2: 'ORIGINAL 2 (FOR CONSIGNEE)',
	original_1: 'ORIGINAL 1 (FOR ISSUING CARRIER)',
};

function ChargeDetails({ formData, data = {}, whiteout = false }) {
	let tempColor = '#333';
	if (whiteout) {
		tempColor = 'transparent';
	}

	return (
		<div className={styles.container}>
			<div
				className={cl`
				${styles.flex_row} 
				${styles.charge_container} 
			`}
			>
				<WeightChargeDetails
					formData={formData}
					data={data}
					whiteout={whiteout}
				/>
				<OtherChargeDetails formData={formData} whiteout={whiteout} />
			</div>
			<div
				className={styles.block}
				style={{ '--temp-color': tempColor }}
				id="footer"
			>
				<p className={styles.data} style={{ fontSize: 13, color: tempColor }}>
					{FOOTER_MAPPING[formData?.copyType] ||
						'ORIGINAL 1 (FOR ISSUING CARRIER)'}
				</p>
			</div>
			{footerValues.map((index) => (
				<div key={index} id={`footer${index}`}>
					<p style={{ fontSize: 13 }} />
				</div>
			))}
		</div>
	);
}
export default ChargeDetails;
