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

toxic_ingredients = ['Oxybenzone', 'Octinoxate', 'Homosalate', 'Octisalate',
                     'Octocrylene', 'Retinyl palmitate', 'Parabens', 'Fragrance',
                     'Ethylhexyl Methoxycinnamate', 'Benzophenone-3',
                     'Sodium Benzoate', 'Phenoxyethanol', 'Melanin']

product_name = input('What is your skin product name?\n')
print('\n')

'''if product_name in products:
    print('\n')
    print('\n'.join(products[product_name]))
    print('\n')
else:
    print('Product not found')
'''
if product_name in products:
    ingredients = products[product_name]
    toxic_ingredients_found = [ingredient for ingredient in toxic_ingredients if ingredient in ingredients]
    
    if toxic_ingredients_found:
        print("Following toxic ingredients were found in the " + product_name)
        print('\n')
        print('\n'.join(toxic_ingredients_found))
    else:
        print("No toxic ingredients found in the product.")
        
    print('\n')
    #print('\n'.join(ingredients))
    #print('\n')
else:
    print('Product not found')
