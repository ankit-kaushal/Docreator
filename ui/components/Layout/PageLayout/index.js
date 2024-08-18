'use client';

import { Layout } from 'antd';
import PageSider from './PageSider';
import PageContent from './PageContent';
import styles from './style.module.css';

function PageLayout({ children = null }) {
	return (
		<Layout className={styles.layout} hasSider>
			<PageSider />
			<Layout className="site-layout">
				<PageContent>{children}</PageContent>
			</Layout>
		</Layout>
	);
}

export default PageLayout;
