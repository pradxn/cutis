from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from bson.objectid import ObjectId
import pymongo

app = Flask(__name__)

CORS(app)

# Connect to MongoDB
myclient = pymongo.MongoClient('mongodb+srv://pradeepvajrala:7IQkq04Kr9sO49sH@cluster0.q5kh2tb.mongodb.net/test?retryWrites=true&w=majority')
db = myclient["SPF"]
collection = db["toxic"]

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

@app.route('/sebas', methods=['POST'])
def check_product():
    product_name = request.json.get('product_name')
    toxic_ingredients = get_toxic_ingredients(product_name)
    return jsonify({'toxicIngredients': toxic_ingredients})

def get_toxic_ingredients(product_name):
    document_id = "64e77bc2253f35a71af18916"
    document = collection.find_one({"_id": ObjectId(document_id)})
    toxic_chemicals = document["ingredients"]
    
    if product_name in products:
        ingredients = products[product_name]
        toxic_ingredients_found = [ingredient for ingredient in toxic_chemicals if ingredient in ingredients]
        return toxic_ingredients_found
    else:
        return []

if __name__ == '__main__':
    app.run(debug=True)
