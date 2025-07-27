import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  try {
    await client.connect();
    const db = client.db('DessertShop');
    const collection = db.collection('MenuItems');

    const desserts = await collection.find({ category: 'dessert' }).toArray();
    const drinks = await collection.find({ category: 'drink' }).toArray();

    res.status(200).json({ desserts, drinks });
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    await client.close();
  }
}
