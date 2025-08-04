const dishes = [
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/dishes/kadhai_paneer.jpg",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 1,
    "name": "Kadhai Paneer 1"
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/dishes/kadhai_paneer.jpg",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 2,
    "name": "Kadhai Paneer 2"
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/dishes/kadhai_paneer.jpg",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 3,
    "name": "Kadhai Paneer 3"
  },
  // ... Continuing for IDs 4 to 30 with the same structure ...
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/dishes/kadhai_paneer.jpg",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 30,
    "name": "Kadhai Paneer 30"
  },
  {
    "categoryId": 2,
    "mealType": "STARTER",
    "type": "VEG",
    "description": "Crispy fried vegetable fritters with chickpea flour coating.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/dishes/vegetable_pakora.jpg",
    "category": {
      "id": 2,
      "name": "Indian Snacks",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/indian_snacks.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "FRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "वेज पकोड़ा",
    "nameBn": "ভেজ পাকোড়া",
    "id": 31,
    "name": "Vegetable Pakora"
  },
  {
    "categoryId": 2,
    "mealType": "STARTER",
    "type": "NON-VEG",
    "description": "Spicy grilled chicken skewers marinated with yogurt and spices.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/dishes/chicken_tikka.jpg",
    "category": {
      "id": 2,
      "name": "Indian Snacks",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/indian_snacks.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "GRILL",
    "forChefit": true,
    "forParty": true,
    "nameHi": "चिकन टिक्का",
    "nameBn": "চিকেন টিক্কা",
    "id": 32,
    "name": "Chicken Tikka"
  },
  {
    "categoryId": 3,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Sweet milk dumplings soaked in cardamom-flavored sugar syrup.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/dishes/rasgulla.jpg",
    "category": {
      "id": 3,
      "name": "Indian Sweets",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/indian_sweets.png",
      "isRecommendedForMealSuggestion": false
    },
    "dishType": "SWEET",
    "forChefit": false,
    "forParty": true,
    "nameHi": "रसगुल्ला",
    "nameBn": "রসগোল্লা",
    "id": 33,
    "name": "Rasgulla"
  },
  {
    "categoryId": 3,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Deep-fried dough balls soaked in saffron-infused sugar syrup.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/dishes/gulab_jamun.jpg",
    "category": {
      "id": 3,
      "name": "Indian Sweets",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/indian_sweets.png",
      "isRecommendedForMealSuggestion": false
    },
    "dishType": "SWEET",
    "forChefit": false,
    "forParty": true,
    "nameHi": "गुलाब जामुन",
    "nameBn": "গোলাব জামুন",
    "id": 34,
    "name": "Gulab Jamun"
  },
  {
    "categoryId": 4,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Spiced cucumber, onion, and tomato salad with lemon dressing.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/dishes/kachumber_salad.jpg",
    "category": {
      "id": 4,
      "name": "Indian Salads",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/indian_salads.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "SALAD",
    "forChefit": true,
    "forParty": true,
    "nameHi": "कचुम्बर सलाद",
    "nameBn": "কচুম্বর সালাদ",
    "id": 35,
    "name": "Kachumber Salad"
  },
  {
    "categoryId": 4,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Creamy yogurt with cucumber and spices.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/dishes/cucumber_raita.jpg",
    "category": {
      "id": 4,
      "name": "Indian Salads",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/indian_salads.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "RAITA",
    "forChefit": true,
    "forParty": true,
    "nameHi": "खीरा रायता",
    "nameBn": "খিরা রায়তা",
    "id": 36,
    "name": "Cucumber Raita"
  },
  {
    "categoryId": 2,
    "mealType": "STARTER",
    "type": "VEG",
    "description": "Spicy potato and pea patties served with chutney.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/dishes/aloo_tikki.jpg",
    "category": {
      "id": 2,
      "name": "Indian Snacks",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/indian_snacks.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "FRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "आलू टिक्की",
    "nameBn": "আলু টিক্কি",
    "id": 37,
    "name": "Aloo Tikki"
  },
  {
    "categoryId": 2,
    "mealType": "STARTER",
    "type": "NON-VEG",
    "description": "Tender fish pieces marinated and fried with spices.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/dishes/fish_fry.jpg",
    "category": {
      "id": 2,
      "name": "Indian Snacks",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/indian_snacks.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "FRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "फिश फ्राई",
    "nameBn": "মাছ ভাজা",
    "id": 38,
    "name": "Fish Fry"
  },
  {
    "categoryId": 3,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Sweet vermicelli pudding cooked with milk and nuts.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/dishes/kheer.jpg",
    "category": {
      "id": 3,
      "name": "Indian Sweets",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/indian_sweets.png",
      "isRecommendedForMealSuggestion": false
    },
    "dishType": "SWEET",
    "forChefit": false,
    "forParty": true,
    "nameHi": "खीर",
    "nameBn": "খির",
    "id": 39,
    "name": "Kheer"
  },
  {
    "categoryId": 4,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Spiced boiled potatoes with herbs.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/dishes/aloo_chaat.jpg",
    "category": {
      "id": 4,
      "name": "Indian Salads",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/indian_salads.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "SALAD",
    "forChefit": true,
    "forParty": true,
    "nameHi": "आलू चाट",
    "nameBn": "আলু চাট",
    "id": 40,
    "name": "Aloo Chaat"
  },
  // New Non-Veg Main Course Dishes
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "description": "Tender chicken cooked in a rich buttery tomato-based gravy.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/dishes/butter_chicken.jpg",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "बटर चिकन",
    "nameBn": "বাটার চিকেন",
    "id": 41,
    "name": "Butter Chicken"
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "description": "Spicy mutton curry cooked with aromatic spices and yogurt.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/dishes/rogan_josh.jpg",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "रोगन जोश",
    "nameBn": "রোগান জোশ",
    "id": 42,
    "name": "Rogan Josh"
  },
  // New Non-Veg Dessert Dish (Egg-based)
  {
    "categoryId": 3,
    "mealType": "DESSERT",
    "type": "NON-VEG",
    "description": "Creamy egg custard flavored with caramel and baked to perfection.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/dishes/caramel_custard.jpg",
    "category": {
      "id": 3,
      "name": "Indian Sweets",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/indian_sweets.png",
      "isRecommendedForMealSuggestion": false
    },
    "dishType": "SWEET",
    "forChefit": false,
    "forParty": true,
    "nameHi": "कैरमल कस्टर्ड",
    "nameBn": "ক্যারামেল কাস্টার্ড",
    "id": 43,
    "name": "Caramel Custard"
  },
  // New Non-Veg Sides Dish
  {
    "categoryId": 4,
    "mealType": "SIDES",
    "type": "NON-VEG",
    "description": "Spicy chicken salad with onions, tomatoes, and chili dressing.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/dishes/chicken_salad.jpg",
    "category": {
      "id": 4,
      "name": "Indian Salads",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/indian_salads.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "SALAD",
    "forChefit": true,
    "forParty": true,
    "nameHi": "चिकन सलाद",
    "nameBn": "চিকেন সালাদ",
    "id": 44,
    "name": "Chicken Salad"
  }
];

export default dishes;