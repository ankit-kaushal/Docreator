import mongoose from 'mongoose';

const PastesSchema = new mongoose.Schema(
	{
		slug: {
			type: String,
			trim: true,
			unique: true,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			trim: true,
		},
		expiry: {
			type: String,
		},
		tags: {
			type: [String],
		},
	},
	{
		timestamps: true,
	},
);

export default mongoose.models.Paste || mongoose.model('Paste', PastesSchema);
