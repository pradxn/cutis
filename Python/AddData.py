import pymongo
from bson.objectid import ObjectId

products = {
    'LaShield SPF 50': {
        'image' : "https://cdn01.pharmeasy.in/dam/products_otc/S44979/la-shield-expert-urban-protect-mineral-sunscreen-gel-spf-50-50g-1-1671742395.jpg?dim=700x0&dpr=1&q=100",
        'ingredients' : ['Octinoxate', 'Avobenzone', 'Octocrylene',
    'Oxybenzone', 'Zinc Oxide', 'Diethylamino Hydroxybenzoyl Hexyl Benzoate',
    'Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine']
    },
    
    'The DermaCo SPF 50': {
        'image' : "https://images.thedermaco.com/catalog/product/1/s/1st_2.jpg?auto=format&fit=contain&width=720&auto=compress",
        'ingredients':['Aqua', 'Ethylhexyl Methoxycinnamate', 'Zinc Oxide', 
                'Butyl Methoxydibenzoylmethane', 'Phospholipids', 
                'Glyceryl Stearate', 'Hyaluronic Acid', 'D-Alpha Tocopheryl Acetate', 
                'Benzophenone-3', 'Sodium Benzoate', 'Sodium Levulinate', 'Allantoin', 
                'Titanium Dioxide', 'Sodium Polyacrylate', 'Glycerin', 'Xylitol', 
                'Caprylic Acid', 'Dimethicone', 'Helianthus Annuus', '(Sunflower) Seed Oil', 
                '1,3 Butylene glycol', 'C12-C15 Alkyl Benzoate', 'Aloe Barbadensis Leaf Juice', 
                'E-Ascorbic Acid', 'Phenoxyethanol', 'Melanin']}
}
# Connect to MongoDB
myclient = pymongo.MongoClient('mongodb+srv://pradeepvajrala:o3BfsOKNM9DCMey5@cluster0.q5kh2tb.mongodb.net/?retryWrites=true&w=majority')
db = myclient["SPF"]
collection = db["Data"]

# Insert data
result = collection.insert_one({"ingredients": products})
print("Inserted document ID:", result.inserted_id)

try:
    myclient.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

