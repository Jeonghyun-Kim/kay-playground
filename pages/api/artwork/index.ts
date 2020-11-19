import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectMongo from '@utils/connectMongo';

const collectionName = 'artwork';

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (_req, res) => {
  try {
    const { db } = await connectMongo();
    const artworks = await db.collection(collectionName).find({}).toArray();

    return res.json({ artworks, error: 0 });
  } catch (err) {
    return res.status(500).json({ error: JSON.stringify(err) });
  }
});

handler.post(async (req, res) => {
  try {
    const { title, year, name, description, price } = req.body;
    const { db } = await connectMongo();

    await db.collection(collectionName).insertOne({
      title,
      year,
      name,
      description,
      price,
    });

    return res.json({ error: 0 });
  } catch (err) {
    return res.status(500).json({ error: JSON.stringify(err) });
  }
});

export default handler;
