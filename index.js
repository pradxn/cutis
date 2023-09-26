const PORT = 5000;

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Setup

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://pradeepvajrala:7IQkq04Kr9sO49sH@cluster0.q5kh2tb.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const dbName = "SPF";

client.connect((err) => {
    if (err) {
      console.error('MongoDB connection error:', err);
      return;
    }
  
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    const collection = db.collection('toxic');
  
    // API endpoint
    app.post('/sebas', async (req, res) => {
        console.log('123')
      const { product_name } = req.body;
  
      try {
        // Fetch toxic ingredients from MongoDB based on product name
        const product = await collection.findOne({ product_name });
  
        if (product) {
          const toxicIngredients = product.ingredients;
          res.json({ toxicIngredients });
        } else {
          res.status(404).json({ error: 'Product not found' });
        }
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred' });
      }
    });
});


/*const mongoURI = "mongodb+srv://pradeepvajrala:7IQkq04Kr9sO49sH@cluster0.q5kh2tb.mongodb.net/?retryWrites=true&w=majority";
const dbName = "SPF";
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  if (err) {
    console.error('MongoDB connection error:', err);
    return;
  }

  console.log('Connected to MongoDB');
  const db = client.db(dbName);
  const collection = db.collection('toxic');

  // API endpoint
  app.post('/sebas', async (req, res) => {
    const { product_name } = req.body;

    try {
      // Fetch toxic ingredients from MongoDB based on product name
      const product = await collection.findOne({ product_name });

      if (product) {
        const toxicIngredients = product.ingredients;
        res.json({ toxicIngredients });
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });*/

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
