import mongoose from 'mongoose';

const MONGODB_URI =
	'mongodb+srv://ankitkaushal882:zyK1E0P5ies4eegg@cluster0.pylq1yt.mongodb.net/docreator?retryWrites=true&w=majority&appName=Cluster0';

if (!MONGODB_URI) {
	throw new Error(
		'Please define the MONGODB_URI environment variable inside .env.local',
	);
}

let cached = global.mongoose;

if (!cached) {
	// eslint-disable-next-line no-multi-assign
	cached = global.mongoose = {
		conn: null,
		promise: null,
	};
}

async function connectToDatabase() {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const opts = {
			bufferCommands: false,
			connectTimeoutMS: 10000,
		};

		cached.promise = mongoose
			.connect(MONGODB_URI, opts)
			.then((mong) => {
				return mong;
			})
			.catch((error) => {
				console.error('Error connecting to MongoDB:', error.message);
				throw new Error('Failed to connect to MongoDB');
			});
	}

	cached.conn = await cached.promise;
	return cached.conn;
}

export default connectToDatabase;
