import { prisma } from '@/lib/prisma';

export default async function sitemap() {
	const baseUrl = 'https://docreator.in';

	// Static routes
	const routes = ['', '/generate'].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString(),
	}));

	// Dynamic routes
	const documents = await prisma.document.findMany({
		select: {
			id: true,
			updatedAt: true,
		},
		where: {
			isPublic: true,
		},
	});

	const dynamicRoutes = documents.map((doc) => ({
		url: `${baseUrl}/d/${doc.id}`,
		lastModified: doc.updatedAt.toISOString(),
	}));

	return [...routes, ...dynamicRoutes];
}
