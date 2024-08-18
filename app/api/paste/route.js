import connectToDatabase from '../../../lib/mongodb';
import Pastes from '../../../models/Pastes';

export async function GET(request) {
	try {
		await connectToDatabase();
		const url = new URL(request.url);
		const slug = url.searchParams.get('slug');
		if (slug) {
			const paste = await Pastes.findOne({ slug });
			if (!paste) {
				return new Response(
					JSON.stringify({ success: false, error: 'Paste not found' }),
					{
						status: 404,
						headers: { 'Content-Type': 'application/json' },
					},
				);
			}

			return new Response(JSON.stringify({ success: true, data: paste }), {
				status: 200,
				headers: { 'Content-Type': 'application/json' },
			});
		}
		const pastes = await Pastes.find({});
		return new Response(JSON.stringify({ success: true, data: pastes }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error('Error fetching pastes:', error.message);
		return new Response(
			JSON.stringify({ success: false, error: error.message }),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			},
		);
	}
}

export async function POST(request) {
	try {
		await connectToDatabase();
		const body = await request.json();
		const existingPaste = await Pastes.findOne({ slug: body.slug });
		if (existingPaste) {
			return new Response(
				JSON.stringify({ success: false, error: 'Slug already in use' }),
				{
					status: 400,
					headers: { 'Content-Type': 'application/json' },
				},
			);
		}

		const paste = await Pastes.create(body);
		return new Response(JSON.stringify({ success: true, data: paste }), {
			status: 201,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error('Error adding new paste:', error.message);
		return new Response(
			JSON.stringify({ success: false, error: error.message }),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			},
		);
	}
}
