import React from 'react';
import { Content } from 'antd/lib/layout/layout';
import PageTitle from '../../../PageTitle';
import styles from '../style.module.css';

function PageContent({ children = null }) {
	const { title } = children?.props || {};
	return (
		<Content className={styles.content}>
			<div className={styles.site}>
				<PageTitle title={title} />
				{children}
			</div>
		</Content>
	);
}

export default PageContent;
