import React from 'react';
import { Controller } from 'react-hook-form';
import { Textarea } from '../Components';

function TextAreaController(props) {
	const { name, control, rules, value, ...rest } = props;

	return (
		<Controller
			key={name}
			control={control}
			name={name}
			defaultValue={value}
			rules={rules}
			render={({ field: { onChange, onBlur, value: newValue } }) => (
				<Textarea
					id={name}
					key={name}
					onChange={onChange}
					value={newValue || ''}
					onBlur={onBlur}
					{...rest}
				/>
			)}
		/>
	);
}

export default TextAreaController;
