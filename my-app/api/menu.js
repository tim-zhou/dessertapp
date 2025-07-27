// /api/menu.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI inside .env.local');
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, {});
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('DessertShop');
    const menu = await db.collection('MenuItems').find({}).toArray();
    res.status(200).json(menu);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Could not fetch menu' });
  }
}
