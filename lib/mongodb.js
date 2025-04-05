import mongoose from 'mongoose';

const cluster = process.env.DB_CLUSTER;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const MONGODB_URI = `mongodb+srv://${username}:${password}@${cluster}.pylq1yt.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=${cluster}`;

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
