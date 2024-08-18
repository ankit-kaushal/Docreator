import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';

import getElementController from '../getController';
import getErrorMessage from '../getErrorMessage';

import styles from './styles.module.css';

function Child({
	controls,
	control,
	index,
	name,
	remove,
	showDeleteButton = true,
	noDeleteButtonTill = 0,
	disabled = false,
	field,
	error,
}) {
	let rowWiseFields = [];
	const TOTAL_FIELDS = [];
	let span = 0;
	controls.forEach((fields) => {
		span += fields.span || 11;
		if (span === 11) {
			rowWiseFields.push(fields);
			TOTAL_FIELDS.push(rowWiseFields);
			rowWiseFields = [];
			span = 0;
		} else if (span < 11) {
			rowWiseFields.push(fields);
		} else {
			TOTAL_FIELDS.push(rowWiseFields);
			rowWiseFields = [];
			rowWiseFields.push(fields);
			span = fields.span;
		}
	});
	if (rowWiseFields.length) {
		TOTAL_FIELDS.push(rowWiseFields);
	}

	return (
		<div className={styles.fieldarray} key={field.id}>
			{Object.keys(TOTAL_FIELDS).map((rowfield) => (
				<div key={rowfield} className={styles.row}>
					{TOTAL_FIELDS[rowfield].map((controlItem) => {
						const Element = getElementController(controlItem.type);

						const errorOriginal = getErrorMessage({
							error: error?.[controlItem.name],
							rules: controlItem?.rules,
							label: controlItem?.label,
						});
						const EXTRA_PROPS = {};
						if (controlItem.customProps?.options) {
							EXTRA_PROPS.options = controlItem.customProps.options[index];
						}
						const flex = ((controlItem?.span || 12) / 12) * 100 - 1;
						if (!Element) return null;
						return (
							<div
								key={controlItem.name}
								className={styles.element}
								style={{ width: `${flex}%` }}
							>
								{controlItem?.label && (
									<div
										className={`${styles.label} 
								${controlItem?.rules?.required ? styles.required_field : ''}`}
									>
										{controlItem?.label}
									</div>
								)}
								<Element
									{...controlItem}
									{...EXTRA_PROPS}
									style={{ minWidth: '0px' }}
									key={`${name}.${index}.${controlItem.name}`}
									name={`${name}.${index}.${controlItem.name}`}
									index={index}
									control={control}
								/>
								<p className={styles.font_style}>{errorOriginal}</p>
							</div>
						);
					})}
					<div style={{ width: '2em', marginTop: '20px' }}>
						{showDeleteButton && index >= noDeleteButtonTill && !disabled ? (
							<DeleteOutlined
								className={`form-fieldArray-${name}-remove`}
								onClick={() => remove(index, 1)}
								style={{
									width: '1.8em',
									height: '1.8em',
									margin: '8px',
									cursor: 'pointer',
								}}
							/>
						) : null}
					</div>
				</div>
			))}
		</div>
	);
}
export default Child;
