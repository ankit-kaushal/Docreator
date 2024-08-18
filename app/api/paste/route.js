import connectToDatabase from '../../../lib/mongodb';
import Pastes from '../../../models/Pastes';

export async function GET() {
	try {
		await connectToDatabase();
		const paste = await Pastes.find({});
		return new Response(JSON.stringify({ success: true, data: paste }), {
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
