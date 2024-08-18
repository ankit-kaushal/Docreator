import mongoose from 'mongoose';

const PastesSchema = new mongoose.Schema(
	{
		slug: {
			type: String,
			trim: true,
		},
		content: {
			type: String,
			required: true,
		},
		title: String,
		expiry: String,
		tags: String,
	},
	{
		timestamps: true,
	},
);

export default mongoose.models.Paste || mongoose.model('Paste', PastesSchema);
