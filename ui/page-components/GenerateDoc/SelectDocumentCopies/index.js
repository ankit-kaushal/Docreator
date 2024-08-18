import { Button, Checkbox } from 'antd';
import React from 'react';

import multipleCopies from './multipleCopies';
import styles from './styles.module.css';

const CheckboxGroup = Checkbox.Group;

function SelectDocumentCopies({ copiesValue, copiesOnChange, handleDownload }) {
	const options = multipleCopies();

	const onChangeTableHeaderCheckbox = (event) => {
		copiesOnChange(
			event.target.checked
				? [
						'original_3',
						'original_2',
						'original_1',
						'copy_9',
						'copy_4',
						'copy_5',
						'copy_6',
						'copy_7',
						'copy_8',
						'copy_10',
						'copy_11',
						'copy_12',
					]
				: [],
		);
	};

	const getSelectAllCheckbox = () => {
		const isAllRowsChecked = (copiesValue || []).length === 12;

		return (
			<Checkbox
				value="select_all"
				className={styles.select_checkbox}
				checked={isAllRowsChecked}
				onChange={onChangeTableHeaderCheckbox}
			>
				Select All
			</Checkbox>
		);
	};

	return (
		<div className={styles.select_copies_container}>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				{getSelectAllCheckbox()}
				<CheckboxGroup
					options={options}
					onChange={copiesOnChange}
					value={copiesValue}
				/>
			</div>
			<div className={styles.download_container}>
				<Button
					size="small"
					onClick={() => {
						handleDownload();
					}}
				>
					Download
				</Button>
				<Button
					size="small"
					onClick={() => {
						handleDownload(true);
					}}
				>
					Download with T&C
				</Button>
			</div>
		</div>
	);
}

export default SelectDocumentCopies;
