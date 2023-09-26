const { MongoClient, ObjectId } = require('mongodb');

const uri = "mongodb+srv://pradeepvajrala:7IQkq04Kr9sO49sH@cluster0.q5kh2tb.mongodb.net/?retryWrites=true&w=majority";

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db("SPF"); // Replace with your actual database name
    const collection = db.collection("names"); // Replace with your actual collection name
    const documentId = "64f1b0ec68a1753c9784b0e1"; // Replace with the document ID you want to retrieve

    const document = await collection.findOne({ _id: ObjectId(documentId) });

    console.log('\n');
    console.log('\n');
    console.log('\n');
    console.log(JSON.stringify(document, null, 2)); // Convert document to JSON with indentation
    console.log('\n');
    console.log('\n');
    console.log('\n');
    console.log(typeof document);
    console.log('\n');
    console.log('\n');
    console.log('\n');

    // Access specific fields in the document
    const names = document.ingredients;

    // Convert 'names' field to JSON and store it in a variable
    const namesJSON = JSON.parse(names);

    const product_names = JSON.stringify(namesJSON, null, 2)
}
catch{
    console.error();

}
}