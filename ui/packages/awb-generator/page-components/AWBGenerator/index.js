'use client';

import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import controls from '../../configurations/controls';
import { useForm } from '../../../../commons/Controller';
import FormContainer from '../FormContainer';
import { Modal } from '../../../../commons/Components';
import GenerateDoc from '../GenerateDoc';

const AGENT_OTHER_CHARGES_CODE = [
	{ code: 'AWB', price: '150' },
	{ code: 'PCA', price: '250' },
];
const NULL_VALUE = 0;
const DECIMAL_NULL_VALUE = 0.0;
const TO_FIXED_DECIMAL_PLACES = 2;
const INCH_CM_FACTOR = 2.54;
const VOLUME_FACTOR = 166.67;
const PRECISION_VALUE = 1000000;

function AwbGenerator() {
	const {
		control,
		watch,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const formValues = watch();

	// useStates
	const [preview, setPreview] = useState(false);
	const [disableClass, setDisableClass] = useState(false);
	const [unitDefaultValue, setUnitDefaultValue] = useState(
		formValues?.dimension?.[0]?.unit,
	);

	const fields = controls({
		disableClass,
		unitDefaultValue,
	});

	useEffect(() => {
		setValue('city', 'NEW DELHI');
		setValue('place', 'NEW DELHI');
		setValue('agentName', 'COGOPORT FREIGHT FORCE PVT LTD');
		setValue('amountOfInsurance', 'NIL');
		setValue('accountingInformation', 'FREIGHT PREPAID');
		setValue('paymentTerm', 'prepaid');
		setValue('class', 'q');
		setValue('currency', 'INR');
		setValue('commodity', `${'SAID TO CONTAIN\n'}`);
		setValue('agentOtherCharges', AGENT_OTHER_CHARGES_CODE);
	}, []);

	useEffect(() => {
		if (formValues.class !== 'm') {
			setValue(
				'amount',
				(
					formValues.chargeableWeight * formValues.ratePerKg ||
					DECIMAL_NULL_VALUE
				).toFixed(TO_FIXED_DECIMAL_PLACES),
			);
		}

		if (formValues.class === 'a') {
			setDisableClass(true);
		} else {
			setDisableClass(false);
		}
	}, [formValues.chargeableWeight, formValues.ratePerKg, formValues.class]);

	useEffect(() => {
		setUnitDefaultValue(formValues?.dimension?.[0]?.unit);
	}, [JSON.stringify(formValues?.dimension)]);

	useEffect(() => {
		let totalVolume = NULL_VALUE;
		let totalPackage = NULL_VALUE;
		(formValues.dimension || []).forEach((dimensionObj) => {
			if (dimensionObj?.unit === 'inch') {
				totalVolume +=
					Number(dimensionObj?.length) *
						INCH_CM_FACTOR *
						Number(dimensionObj?.width) *
						INCH_CM_FACTOR *
						Number(dimensionObj?.height) *
						INCH_CM_FACTOR *
						Number(dimensionObj?.packages_count) || NULL_VALUE;
			} else if (dimensionObj?.unit === 'cms') {
				totalVolume +=
					Number(dimensionObj?.length) *
						Number(dimensionObj?.width) *
						Number(dimensionObj?.height) *
						Number(dimensionObj?.packages_count) || NULL_VALUE;
			}
			totalPackage += Number(dimensionObj?.packages_count) || NULL_VALUE;
		});
		setValue(
			'volumetricWeight',
			Number(
				(+totalVolume * VOLUME_FACTOR || DECIMAL_NULL_VALUE) / PRECISION_VALUE,
			).toFixed(TO_FIXED_DECIMAL_PLACES),
		);
		setValue('totalPackagesCount', totalPackage);
	}, [JSON.stringify(formValues.dimension), formValues.weight]);

	return (
		<div className={styles.container}>
			<h1>AWB Generator</h1>
			<FormContainer
				formValues={formValues}
				fields={fields}
				errors={errors}
				control={control}
				setValue={setValue}
				setPreview={setPreview}
				handleSubmit={handleSubmit}
			/>
			<div className={styles.preview_container}>
				{preview && (
					<Modal
						onClose={() => {
							setPreview(false);
						}}
						style={{ width: '900px', height: '92vh' }}
					>
						<GenerateDoc
							formData={formValues}
							setPreview={setPreview}
							preview={preview}
						/>
					</Modal>
				)}
			</div>
		</div>
	);
}

export default AwbGenerator;
