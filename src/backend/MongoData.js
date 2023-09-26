const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3001;

app.use(bodyParser.json());

const uri =
  "mongodb+srv://pradeepvajrala:o3BfsOKNM9DCMey5@cluster0.q5kh2tb.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let toxicIngredientsList = []; // Initialize an empty list to store toxic ingredients

app.post("/sebas", async (req, res) => {
  const { productName } = req.body;

  try {
    await client.connect();
    console.log(`Connected to MongoDB & searching for product details in Data document`);

    const database = client.db("SPF");
    const collection = database.collection("Data");

    // Search for productName within the nested objects of the ingredients field
    const result = await collection.findOne({
      [`ingredients.${productName}.ingredients`]: { $exists: true },
    });

    if (result) {
      const ingredients = result.ingredients[productName].ingredients;
      const imageUrl = result.ingredients[productName].image; // Retrieve the image URL

      // Check if toxicIngredientsList is empty, and if so, fetch the toxic ingredients
      if (toxicIngredientsList.length === 0) {
        const toxicCollection = database.collection("toxic");

        // Find all documents in the "toxic" collection and add their ingredients to the list
        const allToxicIngredients = await toxicCollection.distinct("ingredients");
        toxicIngredientsList = allToxicIngredients;
      }

      // Compare the ingredients with the toxicIngredientsList
      const toxicIngredients = ingredients.filter((ingredient) =>
        toxicIngredientsList.includes(ingredient)
      );

      res.status(200).json({
        message: `${productName}'s Data`,
        ingredients: ingredients,
        toxicIngredients: toxicIngredients,
        imageUrl: imageUrl, // Include the image URL in the response
      });
    } else {
      res.status(404).json({ message: `${productName} not found in the database. We will add it to our list soon.` });
    }
  } catch (error) {
    console.error("Error searching for product:", error);
    res.status(500).json({ error: "An error occurred while searching (server)" });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
