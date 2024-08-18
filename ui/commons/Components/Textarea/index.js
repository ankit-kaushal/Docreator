import React, { forwardRef } from 'react';

import cl from '../utils/classname-processor';

import styles from './styles.module.css';

function Textarea(
	{
		id,
		className,
		style,
		size = 'md',
		name,
		onKeyDown = () => {},
		onKeyUp = () => {},
		onChange = () => {},
		onBlur = () => {},
		value,
		defaultValue,
		placeholder,
		disabled,
		required,
		readOnly,
		rows,
		cols,
		maxLength,
	},
	ref,
) {
	return (
		<div
			id={id}
			style={style}
			className={cl`
				${className}
				${styles.container}
				${disabled ? styles.disabled : ''}
				${cl.ns('text_area_container')}
				${cl.preset('size', size)}
			`}
		>
			<textarea
				ref={ref}
				className={cl`
					${styles.control}
					${cl.ns('text_area_control')}
				`}
				name={name}
				onChange={(e) => onChange(e.target.value)}
				onKeyDown={onKeyDown}
				onKeyUp={onKeyUp}
				onBlur={(e) => onBlur(e)}
				defaultValue={defaultValue}
				value={value}
				placeholder={placeholder}
				disabled={disabled}
				required={required}
				readOnly={readOnly}
				rows={rows}
				cols={cols}
				maxLength={maxLength}
			/>
		</div>
	);
}

export default forwardRef(Textarea);
