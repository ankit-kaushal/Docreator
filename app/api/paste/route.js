import connectToDatabase from '../../../lib/mongodb';
import Pastes from '../../../models/Pastes';

const createResponse = (success, dataOrError, statusCode) => {
	return new Response(JSON.stringify({ success, ...dataOrError }), {
		status: statusCode,
		headers: { 'Content-Type': 'application/json' },
	});
};

export async function GET(request) {
	try {
		await connectToDatabase();
		const url = new URL(request.url);
		const slug = url.searchParams.get('slug');

		if (slug) {
			const paste = await Pastes.findOne({ slug }).lean();
			if (!paste) {
				return createResponse(false, { error: 'Paste not found' }, 404);
			}
			return createResponse(true, { data: paste }, 200);
		}

		const pastes = await Pastes.find({}).lean();
		return createResponse(true, { data: pastes }, 200);
	} catch (error) {
		console.error('Error fetching pastes:', error.message);
		return createResponse(false, { error: 'Internal Server Error' }, 500);
	}
}

export async function POST(request) {
	try {
		await connectToDatabase();
		const body = await request.json();

		if (!body.slug) {
			return createResponse(false, { error: 'Slug is required' }, 400);
		}

		const existingPaste = await Pastes.findOne({ slug: body.slug }).lean();
		if (existingPaste) {
			return createResponse(false, { error: 'Slug already in use' }, 400);
		}

		const paste = await Pastes.create(body);
		return createResponse(true, { data: paste }, 201);
	} catch (error) {
		console.error('Error adding new paste:', error.message);
		return createResponse(false, { error: 'Internal Server Error' }, 500);
	}
}
