import mongoose from 'mongoose';

const MONGODB_URI =
	'mongodb+srv://ankitkaushal882:zyK1E0P5ies4eegg@cluster0.pylq1yt.mongodb.net/docreator?retryWrites=true&w=majority&appName=Cluster0';

export default async function sitemap() {
	const baseUrl = 'https://docreator.in';

	const routes = ['', '/generate'].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString(),
	}));

	try {
		if (!mongoose.connections[0].readyState) {
			await mongoose.connect(MONGODB_URI);
		}

		const Document =
			mongoose.models.Document ||
			mongoose.model('Document', {
				isPublic: Boolean,
				updatedAt: Date,
			});

		const documents = await Document.find(
			{ isPublic: true },
			{ _id: 1, updatedAt: 1 },
		);

		const dynamicRoutes = documents.map((doc) => ({
			url: `${baseUrl}/${doc.id.toString()}`,
			lastModified: doc.updatedAt.toISOString(),
		}));

		return [...routes, ...dynamicRoutes];
	} catch (error) {
		console.error('Sitemap generation error:', error);
		return routes;
	}
}
