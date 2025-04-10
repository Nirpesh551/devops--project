const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/myapp';

async function connectToMongo() {
  const client = new MongoClient(mongoUri);
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('myapp');
    await db.collection('sample').insertOne({ message: 'Hello from MongoDB!' });
    console.log('Sample data inserted');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  } finally {
    await client.close();
  }
}

app.get('/', (req, res) => {
  res.send('Hello from Node.js app!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  connectToMongo();
});
