import connectToDatabase from '../../../lib/mongodb';
import Pastes from '../../../models/Pastes';

export async function DELETE() {
	try {
		await connectToDatabase();

		const today = new Date();
		const year = today.getFullYear();
		const month = today.getMonth() + 1;
		const day = today.getDate();
		const result = await Pastes.deleteMany({
			$or: [
				{
					$expr: {
						$and: [
							{
								$eq: [
									{
										$year: {
											$dateFromString: { dateString: '$expiry', onError: null },
										},
									},
									year,
								],
							},
							{
								$eq: [
									{
										$month: {
											$dateFromString: { dateString: '$expiry', onError: null },
										},
									},
									month,
								],
							},
							{
								$eq: [
									{
										$dayOfMonth: {
											$dateFromString: { dateString: '$expiry', onError: null },
										},
									},
									day,
								],
							},
						],
					},
				},
				{ expiry: { $exists: false } },
			],
		});

		return new Response(
			JSON.stringify({ success: true, deletedCount: result.deletedCount }),
			{
				status: 200,
				headers: { 'Content-Type': 'application/json' },
			},
		);
	} catch (error) {
		console.error('Error deleting expired pastes:', error.message);
		return new Response(
			JSON.stringify({ success: false, error: error.message }),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			},
		);
	}
}
