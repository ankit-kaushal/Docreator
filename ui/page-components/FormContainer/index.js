import { Steps, Button } from 'antd';
import { useState } from 'react';
import styles from './styles.module.css';
import Layout from '../../commons/Layout';

const DECIMAL_PLACE = 2;

function FormContainer({
	formValues = {},
	fields = {},
	errors = {},
	control = {},
	setValue = () => {},
	setPreview = () => {},
	handleSubmit = () => {},
}) {
	const calculateCharges = () => {
		const updatedCharges = (formValues.carrierOtherCharges || []).map(
			(charge) => {
				let price = 0;
				price = Number(
					(Number(charge.chargeUnit) * Number(charge.quantity)).toFixed(
						DECIMAL_PLACE,
					),
				);
				return { ...charge, price };
			},
		);
		setValue('carrierOtherCharges', updatedCharges);
	};

	const STEPS = [
		{
			title: 'Basic Details',
			key: 'first',
			content: (
				<div>
					<fieldset>
						<legend>Document Details</legend>
						<Layout fields={fields?.main} errors={errors} control={control} />
					</fieldset>
					<div className={styles.flex_column}>
						<fieldset style={{ width: '50%' }}>
							<legend>Shipper Details</legend>
							<Layout
								fields={fields?.shipper}
								errors={errors}
								control={control}
							/>
						</fieldset>
						<fieldset style={{ width: '50%' }}>
							<legend>Consignee Details</legend>
							<Layout
								fields={fields?.consignee}
								errors={errors}
								control={control}
							/>
						</fieldset>
					</div>
					<fieldset>
						<legend>Routing and Flight Details</legend>
						<Layout
							fields={fields?.routing}
							errors={errors}
							control={control}
						/>
					</fieldset>
				</div>
			),
		},
		{
			title: 'Package & Charges Details',
			key: 'second',
			content: (
				<>
					<fieldset>
						<legend>Rate Description</legend>
						<Layout
							fields={fields?.rate_description}
							errors={errors}
							control={control}
						/>
					</fieldset>
					<fieldset>
						<legend>Other Charges</legend>
						<Layout
							fields={fields?.other_charges}
							errors={errors}
							control={control}
						/>
						<div className={styles.calcuate_button}>
							<Button
								size="small"
								type="primary"
								onClick={() => {
									calculateCharges();
								}}
							>
								Calculate
							</Button>
						</div>
					</fieldset>
				</>
			),
		},
		{
			title: 'Handling Details',
			key: 'third',
			content: (
				<>
					<div className={styles.flex_column}>
						<fieldset style={{ width: '50%' }}>
							<legend>Issuing carrier&apos;s agent Details</legend>
							<Layout
								fields={fields?.issuing_agent}
								errors={errors}
								control={control}
							/>
						</fieldset>
						<fieldset style={{ width: '50%' }}>
							<legend>Charges Declaration</legend>
							<Layout
								fields={fields?.charges_declaration}
								errors={errors}
								control={control}
							/>
						</fieldset>
					</div>
					<div className={styles.flex_column}>
						<fieldset style={{ width: '50%' }}>
							<legend>Accounting Information</legend>
							<Layout
								fields={fields?.accounting_information}
								errors={errors}
								control={control}
							/>
						</fieldset>
						<fieldset style={{ width: '50%' }}>
							<legend>Handling Information</legend>
							<Layout
								fields={fields?.handling_information}
								errors={errors}
								control={control}
							/>
						</fieldset>
					</div>
					<fieldset>
						<legend>Shipper&apos;s & Carrier&apos;s Certification</legend>
						<Layout
							fields={fields?.cerification}
							errors={errors}
							control={control}
						/>
					</fieldset>
					<fieldset>
						<legend>Copy Type</legend>
						<Layout
							fields={fields?.copy_type}
							errors={errors}
							control={control}
						/>
					</fieldset>
				</>
			),
		},
	];

	const [current, setCurrent] = useState(0);

	const next = () => {
		setCurrent(current + 1);
	};

	const prev = () => {
		setCurrent(current - 1);
	};

	const onSubmit = () => {
		setPreview(true);
	};

	const items = STEPS.map((item) => ({ key: item.key, title: item.title }));

	return (
		<div className={styles.container}>
			<Steps size="small" current={current} items={items} />
			<div className={styles.form_container}>
				<div>{STEPS[current].content}</div>
				<div className={styles.button_container}>
					<div className={styles.button_div}>
						{current > 0 && <Button onClick={() => prev()}>BACK</Button>}
						{current < STEPS.length - 1 && (
							<Button onClick={handleSubmit(() => next())}>Next</Button>
						)}
						{STEPS[current].key === 'third' && (
							<Button onClick={handleSubmit(onSubmit)} type="primary">
								Generate Airway Bill
							</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default FormContainer;
