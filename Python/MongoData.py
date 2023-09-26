import pymongo
from bson.objectid import ObjectId

toxic_ingredients = ['Oxybenzone', 'Octinoxate', 'Homosalate', 'Octisalate',
                     'Octocrylene', 'Retinyl palmitate', 'Parabens', 'Fragrance',
                     'Ethylhexyl Methoxycinnamate', 'Benzophenone-3',
                     'Sodium Benzoate', 'Phenoxyethanol', 'Melanin']

# Connect to MongoDB
myclient = pymongo.MongoClient('mongodb+srv://pradeepvajrala:7IQkq04Kr9sO49sH@cluster0.q5kh2tb.mongodb.net/test?retryWrites=true&w=majority')
db = myclient["SPF"]
collection = db["toxic"]

# Insert data
'''result = collection.insert_one({"ingredients": toxic_ingredients})
print("Inserted document ID:", result.inserted_id)
'''
# Retrieve data
query_result = collection.find_one({})
#print("Retrieved document:", query_result)

try:
    myclient.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


# uncomment to retrieve data
document_id = "64e77bc2253f35a71af18916"
document = collection.find_one({"_id": ObjectId(document_id)})
print('\n')
print('\n')
print('\n')
print(document)
print('\n')
print('\n')
print('\n')
print(type(document))
print('\n')
print('\n')
print('\n')
#print(document["ingredients"])
toxic_chemicals = document["ingredients"]

products = {
    'LaShield': ['Octinoxate', 'Avobenzone', 'Octocrylene',
    'Oxybenzone', 'Zinc Oxide', 'Diethylamino Hydroxybenzoyl Hexyl Benzoate',
    'Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine'],
    
    'DermaCo': ['Aqua', 'Ethylhexyl Methoxycinnamate', 'Zinc Oxide', 
                'Butyl Methoxydibenzoylmethane', 'Phospholipids', 
                'Glyceryl Stearate', 'Hyaluronic Acid', 'D-Alpha Tocopheryl Acetate', 
                'Benzophenone-3', 'Sodium Benzoate', 'Sodium Levulinate', 'Allantoin', 
                'Titanium Dioxide', 'Sodium Polyacrylate', 'Glycerin', 'Xylitol', 
                'Caprylic Acid', 'Dimethicone', 'Helianthus Annuus', '(Sunflower) Seed Oil', 
                '1,3 Butylene glycol', 'C12-C15 Alkyl Benzoate', 'Aloe Barbadensis Leaf Juice', 
                'E-Ascorbic Acid', 'Phenoxyethanol', 'Melanin']
}

product_name = input('What is your skin product name?\n')
print('\n')

if product_name in products:
    ingredients = products[product_name]
    toxic_ingredients_found = [ingredient for ingredient in toxic_chemicals if ingredient in ingredients]
    
    if toxic_ingredients_found:
        print("Following toxic ingredients were found in " + product_name)
        print('\n')
        print('\n'.join(toxic_ingredients_found))
    else:
        print("No toxic ingredients found in the product.")
        
    print('\n')

else:
    print('Product not found')
