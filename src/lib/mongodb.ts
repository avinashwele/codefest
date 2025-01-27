import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

/** Cached connection to prevent multiple connections during development */
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
























// import mongoose from "mongoose";

// let isConnected = false; // Global flag to track the connection state

// export async function connectToDatabase() {
//   if (isConnected) {
//     console.log("Using existing MongoDB connection");
//     return;
//   }

//   if (!process.env.MONGODB_URI) {
//     throw new Error("MONGODB_URI is not defined in environment variables");
//   }

//   try {
//     // Connect to the MongoDB database
//     const db = await mongoose.connect(process.env.MONGODB_URI, {
//       maxPoolSize: 10, // Optimized connection pool size for production
//       minPoolSize: 5,  // Maintain a minimum number of connections
//       serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds if no server is available
//       socketTimeoutMS: 45000, // Timeout for inactive sockets
//       autoIndex: false, // Disable auto-creation of indexes in production
//     });

//     isConnected = db.connection.readyState === 1;
//     console.log("MongoDB connected successfully");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw new Error("Failed to connect to MongoDB");
//   }
// }

// // Graceful shutdown of the MongoDB connection
// process.on("SIGINT", async () => {
//   if (isConnected) {
//     await mongoose.connection.close();
//     console.log("MongoDB connection closed due to application termination");
//   }
//   process.exit(0);
// });
