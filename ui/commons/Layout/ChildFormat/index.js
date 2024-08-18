import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useFieldArray } from '../../Controller';

import Child from './child';
import styles from './styles.module.css';

function FieldArray({
	name,
	control,
	controls,
	showElements,
	buttonText = 'Add',
	showButtons = true,
	disabled = false,
	value,
	error,
	...rest
}) {
	const { fields, append, remove } = useFieldArray({
		control,
		name,
	});

	const CHILD_EMPTY_VALUES = {};

	useEffect(() => {
		if (fields.length === 0) {
			append(CHILD_EMPTY_VALUES);
		}
	}, []);

	return (
		<div className={styles.child}>
			{(fields || []).map((field, index) => (
				<Child
					{...rest}
					key={field.id}
					field={field}
					index={index}
					control={control}
					controls={controls}
					name={name}
					remove={remove}
					disabled={disabled}
					error={error?.[index]}
				/>
			))}
			<div>
				{showButtons && !disabled ? (
					<Button
						style={{ margin: '4px' }}
						size="small"
						onClick={() => append(CHILD_EMPTY_VALUES)}
					>
						+ {buttonText}
					</Button>
				) : null}
			</div>
		</div>
	);
}

export default FieldArray;
