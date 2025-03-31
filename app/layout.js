import './globals.css';
import PageLayout from '@/ui/components/Layout/PageLayout';

export const metadata = {
	title: 'Docreator',
	description: 'Simple Text and Code Sharing Tool',
	keywords:
		'docreator, document generator, document creator, document automation, pdf generator, awb generator, awb creator, awb automation, awb, airway bill generator',
	openGraph: {
		title: 'Docreator - Simple Text and Code Sharing Tool',
		description: 'Manage texts and codes effortlessly with Docreator',
		type: 'website',
		locale: 'en_US',
		url: 'https://docreator.in/',
		siteName: 'Docreator',
		images: [
			{
				url: 'https://docreator.in/docreator.png',
				width: 1200,
				height: 627,
				alt: 'Docreator - Simple Text and Code Sharing Tool',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Docreator - Simple Text and Code Sharing Tool',
		description: 'Manage texts and codes effortlessly with Docreator',
		images: ['https://docreator.in/docreator.png'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta name="google-adsense-account" content="ca-pub-1816177424340336" />
				<meta
					name="google-site-verification"
					content="ZdTxiXrK0yjpYGk5ggg9hsAuDwAsffJ4NVTFA-3CMys"
				/>
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1816177424340336"
					crossOrigin="anonymous"
				/>
			</head>
			<body>
				<PageLayout>{children}</PageLayout>
			</body>
		</html>
	);
}
