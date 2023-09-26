import pymongo
from bson.objectid import ObjectId

myclient = pymongo.MongoClient('mongodb+srv://pradeepvajrala:o3BfsOKNM9DCMey5@cluster0.q5kh2tb.mongodb.net/?retryWrites=true&w=majority')
db = myclient["SPF"]
collection = db["Data"]

document_id = "6509d2daae52bb3a2fcea23b"
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
print(document["ingredients"])