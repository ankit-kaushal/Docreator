import React from 'react';

import cl from '../utils/classname-processor';

import styles from './styles.module.css';

function Loader({ id, className, style, themeType = 'primary' }) {
	return (
		<div
			id={id}
			className={cl`
				${className}
				${cl.ns('loader')}
				${styles.container}
				${cl.preset('themeType', themeType)}
			`}
			style={style}
		/>
	);
}

export default Loader;
