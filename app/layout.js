import './globals.css';
import PageLayout from '@/ui/components/Layout/PageLayout';

export const metadata = {
	title: 'Docreator',
	description: 'Generated Documents easily',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<meta name="google-adsense-account" content="ca-pub-1816177424340336" />
			<script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1816177424340336"
				crossOrigin="anonymous"
			/>
			<body>
				<PageLayout>{children}</PageLayout>
			</body>
		</html>
	);
}
