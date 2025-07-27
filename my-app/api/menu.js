// /api/menu.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

let cachedClient = null;

export default async function handler(req, res) {
  if (!uri) {
    return res.status(500).json({ error: 'MONGODB_URI not set in environment' });
  }

  try {
    if (!cachedClient) {
      const client = new MongoClient(uri, { useUnifiedTopology: true });
      cachedClient = await client.connect();
    }

    const db = cachedClient.db('DessertShop'); // Replace with your database name
    const items = await db.collection('MenuItems').find({}).toArray();

    res.status(200).json(items);
  } catch (err) {
    console.error('MongoDB connection error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
