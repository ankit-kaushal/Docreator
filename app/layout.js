import './globals.css';
import PageLayout from '@/ui/components/Layout/PageLayout';

export const metadata = {
	title: {
		default: 'Docreator | Simple Text and Code Sharing Tool',
		template: '%s | Docreator',
	},
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/favicon.ico', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon.ico', sizes: '32x32', type: 'image/png' },
		],
		apple: [{ url: '/apple-touch-icon.png' }],
	},
	description: 'Simple Text and Code Sharing Tool | Free AWB Generator',
	metadataBase: new URL('https://docreator.in'),
	alternates: {
		canonical: '/',
	},
	keywords:
		'docreator, document generator, document creator, document automation, pdf generator, awb generator, awb creator, awb automation, awb, airway bill generator, free awb generator, free awb creator, ',
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
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<meta
					name="google-site-verification"
					content="ZdTxiXrK0yjpYGk5ggg9hsAuDwAsffJ4NVTFA-3CMys"
				/>
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4489981300925306"
					crossOrigin="anonymous"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'WebSite',
							name: 'Docreator',
							url: 'https://docreator.in',
							logo: 'https://docreator.in/docreator.png',
							description: 'Simple Text and Code Sharing Tool',
							potentialAction: {
								'@type': 'SearchAction',
								target: 'https://docreator.in/search?q={search_term_string}',
								'query-input': 'required name=search_term_string',
							},
						}),
					}}
				/>
			</head>
			<body>
				<PageLayout>{children}</PageLayout>
			</body>
		</html>
	);
}
