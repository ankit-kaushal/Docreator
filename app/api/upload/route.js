import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
	try {
		const formData = await request.formData();
		const file = formData.get('file');

		const cloudinaryFormData = new FormData();
		cloudinaryFormData.append('file', new Blob([file]), file.name);
		cloudinaryFormData.append(
			'upload_preset',
			process.env.CLOUDINARY_UPLOAD_PRESET,
		);

		const response = await axios.post(
			`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/auto/upload`,
			cloudinaryFormData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			},
		);

		return NextResponse.json(response.data);
	} catch (error) {
		return NextResponse.json(
			{ error: error.response?.data?.error || error.message },
			{ status: error.response?.status || 500 },
		);
	}
}
