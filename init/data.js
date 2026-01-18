const sampleListings = [
    {
        title: "Butter Chicken",
        image: { filename: "listingimage", url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/chicken-butter-masala-recipe.jpg" },
        price: 181,
        calorie: 450,
        fat: 27.3,
        protein: 34,
        ingredients: ["Chicken", "Tomato", "Onion", "Garlic", "Ginger", "Cashew", "Red Chili", "Coriander", "Cumin", "Salt"],
        tasteProfile: "creamy"
    },
    {
        title: "Dal Makhni",
        image: { filename: "listingimage", url: "https://static.toiimg.com/thumb/53192600.cms?width=1200&height=900" },
        price: 103,
        calorie: 391,
        fat: 17.9,
        protein: 30,
        ingredients: ["Black Lentils", "Kidney Beans", "Tomato", "Onion", "Garlic", "Ginger", "Red Chili", "Cumin", "Coriander", "Salt"],
        tasteProfile: "rich"
    },
    {
        title: "Biryani",
        image: { filename: "listingimage", url: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        price: 190,
        calorie: 542,
        fat: 23.7,
        protein: 28,
        ingredients: ["Rice", "Chicken", "Onion", "Tomato", "Garlic", "Ginger", "Mint", "Coriander", "Yogurt", "Salt"],
        tasteProfile: "spicy"
    },
    {
        title: "Pav Bhaji",
        image: { filename: "listingimage", url: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?cs=srgb&dl=pexels-saveurssecretes-5410400.jpg&fm=jpg" },
        price: 94,
        calorie: 420,
        fat: 19.5,
        protein: 8,
        ingredients: ["Potatoes", "Cauliflower", "Peas", "Capsicum", "Onion", "Tomato", "Garlic", "Ginger", "Coriander", "Salt"],
        tasteProfile: "savory"
    },
    {
        title: "Chole Bhature",
        image: { filename: "listingimage", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Chole_Bhature_At_Local_Street.jpg/1200px-Chole_Bhature_At_Local_Street.jpg" },
        price: 100,
        calorie: 400,
        fat: 20,
        protein: 26,
        ingredients: ["Chickpeas", "Flour", "Onion", "Tomato", "Garlic", "Ginger", "Green Chili", "Coriander", "Cumin", "Salt"],
        tasteProfile: "spicy"
    },
    {
        title: "Kadai Paneer",
        image: { filename: "listingimage", url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/kadai-paneer-recipe.jpg" },
        price: 120,
        calorie: 430,
        fat: 25,
        protein: 8,
        ingredients: ["Paneer", "Bell Peppers", "Onion", "Tomato", "Garlic", "Ginger", "Green Chili", "Coriander", "Cumin", "Salt"],
        tasteProfile: "spicy"
    },
    {
        title: "Aloo Paratha",
        image: { filename: "listingimage", url: "https://images.pexels.com/photos/33428723/pexels-photo-33428723.jpeg?cs=srgb&dl=pexels-shootsaga-33428723.jpg&fm=jpg" },
        price: 140,
        calorie: 460,
        fat: 10,
        protein: 11,
        ingredients: ["Potatoes", "Wheat Flour", "Onion", "Green Chili", "Coriander", "Cumin", "Garlic", "Ginger", "Salt", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Palak Paneer",
        image: { filename: "listingimage", url: "https://www.indianveggiedelight.com/wp-content/uploads/2023/02/palak-paneer-recipe.jpg" },
        price: 160,
        calorie: 490,
        fat: 15,
        protein: 14,
        ingredients: ["Spinach", "Paneer", "Onion", "Tomato", "Garlic", "Ginger", "Green Chili", "Coriander", "Salt", "Water"],
        tasteProfile: "creamy"
    },
    {
        title: "Malai Kofta",
        image: { filename: "listingimage", url: "https://carveyourcraving.com/wp-content/uploads/2021/09/Best-Malai-Kofta-recipe.jpg" },
        price: 80,
        calorie: 520,
        fat: 20,
        protein: 17,
        ingredients: ["Paneer", "Potatoes", "Cashew", "Onion", "Tomato", "Garlic", "Ginger", "Red Chili", "Salt", "Water"],
        tasteProfile: "creamy"
    },
    {
        title: "Masala Dosa",
        image: { filename: "listingimage", url: "https://static.vecteezy.com/system/resources/previews/068/494/509/non_2x/masala-dosa-traditional-south-indian-crepe-resting-on-banana-leaf-with-chutney-and-sambar-photo.jpg" },
        price: 100,
        calorie: 550,
        fat: 25,
        protein: 20,
        ingredients: ["Rice", "Urad Dal", "Potatoes", "Onion", "Mustard Seeds", "Curry Leaves", "Green Chili", "Ginger", "Salt", "Water"],
        tasteProfile: "spicy"
    },
    {
        title: "Paneer Tikka",
        image: { filename: "listingimage", url: "https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka-500x500.jpg" },
        price: 120,
        calorie: 400,
        fat: 10,
        protein: 23,
        ingredients: ["Paneer", "Bell Peppers", "Onion", "Garlic", "Ginger", "Lemon", "Coriander", "Red Chili", "Salt", "Oil"],
        tasteProfile: "spicy"
    },
    {
        title: "Rajma Chawal",
        image: { filename: "listingimage", url: "https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg" },
        price: 140,
        calorie: 430,
        fat: 15,
        protein: 26,
        ingredients: ["Kidney Beans", "Rice", "Onion", "Tomato", "Garlic", "Ginger", "Green Chili", "Coriander", "Cumin", "Salt"],
        tasteProfile: "savory"
    },
    {
        title: "Veg Pulao",
        image: { filename: "listingimage", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFPjIluL4H7E7Qznz6kq0DziLeDpnSg0RqM_0J-3nemYyxHbWSK0EaaAZ70NBiy1kLAFy5ZCxgBfCpETdfnL2oSqhS88KOdNTexX9Me5y1xKbFCU0D0DocySLaCPdiP1eXT7dvEWHXstDA/s1600/vegetable+pulao.JPG" },
        price: 160,
        calorie: 460,
        fat: 20,
        protein: 8,
        ingredients: ["Rice", "Carrot", "Beans", "Peas", "Onion", "Garlic", "Ginger", "Cumin", "Salt", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Aloo Gobi",
        image: { filename: "listingimage", url: "https://www.cookwithmanali.com/wp-content/uploads/2014/09/Indian-Aloo-Gobi-480x270.jpg" },
        price: 80,
        calorie: 490,
        fat: 25,
        protein: 11,
        ingredients: ["Potatoes", "Cauliflower", "Onion", "Tomato", "Garlic", "Ginger", "Green Chili", "Coriander", "Salt", "Oil"],
        tasteProfile: "spicy"
    },
    {
        title: "Bhindi Masala",
        image: { filename: "listingimage", url: "https://www.anveshan.farm/cdn/shop/articles/BhindiMasala.jpg?v=1690790485&width=1100" },
        price: 100,
        calorie: 520,
        fat: 10,
        protein: 14,
        ingredients: ["Okra", "Onion", "Tomato", "Garlic", "Ginger", "Green Chili", "Coriander", "Cumin", "Salt", "Oil"],
        tasteProfile: "spicy"
    },
    {
        title: "Samosa",
        image: { filename: "listingimage", url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg" },
        price: 120,
        calorie: 550,
        fat: 15,
        protein: 17,
        ingredients: ["Potatoes", "Peas", "Flour", "Onion", "Green Chili", "Garlic", "Ginger", "Coriander", "Salt", "Oil"],
        tasteProfile: "savory"
    },
    {
        title: "Matar Paneer",
        image: { filename: "listingimage", url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/matar-paneer.jpg" },
        price: 140,
        calorie: 400,
        fat: 20,
        protein: 20,
        ingredients: ["Green Peas", "Paneer", "Onion", "Tomato", "Garlic", "Ginger", "Red Chili", "Coriander", "Salt", "Water"],
        tasteProfile: "creamy"
    },
    {
        title: "Paneer Butter Masala",
        image: { filename: "listingimage", url: "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg" },
        price: 160,
        calorie: 430,
        fat: 25,
        protein: 23,
        ingredients: ["Paneer", "Tomato", "Cashew", "Onion", "Garlic", "Ginger", "Red Chili", "Coriander", "Salt", "Water"],
        tasteProfile: "creamy"
    },
    {
        title: "Baingan Bharta",
        image: { filename: "listingimage", url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/baingan-bharta.jpg" },
        price: 80,
        calorie: 460,
        fat: 10,
        protein: 26,
        ingredients: ["Eggplant", "Onion", "Tomato", "Garlic", "Ginger", "Green Chili", "Coriander", "Salt", "Oil", "Water"],
        tasteProfile: "smoky"
    },
    {
        title: "Naan",
        image: { filename: "listingimage", url: "https://saltedmint.com/wp-content/uploads/2024/01/Naan-Bread-2.jpg" },
        price: 80,
        calorie: 460,
        fat: 10,
        protein: 17,
        ingredients: ["Flour", "Yeast", "Milk", "Sugar", "Salt", "Water", "Oil", "Baking Powder", "Yogurt", "Butter"],
        tasteProfile: "savory"
    },

    // chnages images

    {
        title: "Grilled Chicken Bowl",
        image: { filename: "listingimage", url: "https://cdn.shopify.com/s/files/1/0029/6262/0527/files/smoky-grilled-chicken-bowl_bol-de-poulet-grille-facon-bbq_southern-bbq-seasoning_assaisonnement-bbq-du-sud_a-spice-affair_2.heic?v=1752502504" },
        price: 220,
        calorie: 480,
        fat: 18,
        protein: 42,
        ingredients: ["Chicken Breast", "Brown Rice", "Lettuce", "Tomato", "Cucumber", "Onion", "Garlic", "Olive Oil", "Lemon", "Salt"],
        tasteProfile: "savory"
    },
    {
        title: "Veggie Stir Fry",
        image: { filename: "listingimage", url: "https://www.cookingclassy.com/wp-content/uploads/2023/01/vegetable-stir-fry-3.jpg" },
        price: 180,
        calorie: 350,
        fat: 12,
        protein: 14,
        ingredients: ["Broccoli", "Carrot", "Bell Pepper", "Beans", "Onion", "Garlic", "Soy Sauce", "Sesame Oil", "Ginger", "Salt"],
        tasteProfile: "savory"
    },
    {
        title: "Quinoa Salad",
        image: { filename: "listingimage", url: "https://www.healthyseasonalrecipes.com/wp-content/uploads/2016/04/southwest-quinoa-salad-with-mango-and-black-beans-sq-040.jpg" },
        price: 200,
        calorie: 320,
        fat: 10,
        protein: 12,
        ingredients: ["Quinoa", "Cucumber", "Tomato", "Onion", "Olive Oil", "Lemon", "Parsley", "Chickpeas", "Salt", "Pepper"],
        tasteProfile: "fresh"
    },
    {
        title: "Paneer Rice Bowl",
        image: { filename: "listingimage", url: "https://www.indianveggiedelight.com/wp-content/uploads/2023/09/paneer-fried-rice.jpg" },
        price: 210,
        calorie: 520,
        fat: 22,
        protein: 28,
        ingredients: ["Paneer", "Rice", "Onion", "Tomato", "Capsicum", "Garlic", "Ginger", "Green Chili", "Oil", "Salt"],
        tasteProfile: "savory"
    },
    {
        title: "Avocado Toast",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOvCNzAMHEp41zyrel-BQWmuhUjp_gjeWgWg&s" },
        price: 150,
        calorie: 300,
        fat: 15,
        protein: 9,
        ingredients: ["Bread", "Avocado", "Tomato", "Onion", "Lemon", "Olive Oil", "Garlic", "Salt", "Pepper", "Seeds"],
        tasteProfile: "fresh"
    },
    {
        title: "Chicken Wrap",
        image: { filename: "listingimage", url: "https://i.ytimg.com/vi/HoLQR21pfXM/maxresdefault.jpg" },
        price: 190,
        calorie: 450,
        fat: 17,
        protein: 35,
        ingredients: ["Chicken", "Tortilla", "Lettuce", "Tomato", "Onion", "Garlic", "Yogurt", "Lemon", "Oil", "Salt"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Soup",
        image: { filename: "listingimage", url: "https://static01.nyt.com/images/2023/10/12/multimedia/LH-vegetable-soup-ckfp-copy/LH-vegetable-soup-ckfp-mediumSquareAt3X.jpg" },
        price: 140,
        calorie: 220,
        fat: 6,
        protein: 8,
        ingredients: ["Carrot", "Beans", "Potato", "Tomato", "Onion", "Garlic", "Celery", "Water", "Oil", "Salt"],
        tasteProfile: "light"
    },
    {
        title: "Egg Fried Rice",
        image: { filename: "listingimage", url: "https://data.thefeedfeed.com/static/2020/04/16/15870736275e98d25b874a7.JPG" },
        price: 170,
        calorie: 500,
        fat: 20,
        protein: 22,
        ingredients: ["Rice", "Eggs", "Onion", "Garlic", "Carrot", "Beans", "Soy Sauce", "Oil", "Spring Onion", "Salt"],
        tasteProfile: "savory"
    },
    {
        title: "Fruit Smoothie Bowl",
        image: { filename: "listingimage", url: "https://beginwithbalance.com/wp-content/uploads/2023/03/Protein-Berry-Smoothie-Bowl-1.jpg" },
        price: 160,
        calorie: 280,
        fat: 6,
        protein: 10,
        ingredients: ["Banana", "Strawberry", "Blueberry", "Milk", "Honey", "Oats", "Chia Seeds", "Almonds", "Water", "Salt"],
        tasteProfile: "sweet"
    },
    {
        title: "Chickpea Salad",
        image: { filename: "listingimage", url: "https://cdn.loveandlemons.com/wp-content/uploads/2023/05/chickpea-salad.jpg" },
        price: 170,
        calorie: 360,
        fat: 12,
        protein: 16,
        ingredients: ["Chickpeas", "Onion", "Tomato", "Cucumber", "Lemon", "Olive Oil", "Parsley", "Garlic", "Salt", "Pepper"],
        tasteProfile: "fresh"
    },
    {
        title: "Oats Porridge",
        image: { filename: "listingimage", url: "https://img.taste.com.au/T3YfKDYY/taste/2017/05/basicporridge_1980x1320-126888-1.jpg" },
        price: 130,
        calorie: 260,
        fat: 8,
        protein: 11,
        ingredients: ["Oats", "Milk", "Banana", "Honey", "Almonds", "Raisins", "Water", "Salt", "Cinnamon", "Seeds"],
        tasteProfile: "sweet"
    },
    {
        title: "Grilled Fish Plate",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDfsT-ue2jQXG_FXstAYEk36AR9tNICo65BQ&s" },
        price: 260,
        calorie: 420,
        fat: 16,
        protein: 38,
        ingredients: ["Fish", "Lemon", "Garlic", "Onion", "Tomato", "Olive Oil", "Parsley", "Salt", "Pepper", "Vegetables"],
        tasteProfile: "savory"
    },
    {
        title: "Veg Sandwich",
        image: { filename: "listingimage", url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/05/vegetarian-club-sandwich-recipe.jpg" },
        price: 120,
        calorie: 340,
        fat: 12,
        protein: 10,
        ingredients: ["Bread", "Tomato", "Cucumber", "Onion", "Lettuce", "Cheese", "Butter Substitute", "Salt", "Pepper", "Oil"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Salad",
        image: { filename: "listingimage", url: "https://spicecravings.com/wp-content/uploads/2022/05/Strawberry-Spinach-Salad-Featured.jpg" },
        price: 210,
        calorie: 380,
        fat: 14,
        protein: 34,
        ingredients: ["Chicken", "Lettuce", "Tomato", "Cucumber", "Onion", "Olive Oil", "Lemon", "Garlic", "Salt", "Pepper"],
        tasteProfile: "fresh"
    },
    {
        title: "Paneer Salad",
        image: { filename: "listingimage", url: "https://greenbowl2soul.com/wp-content/uploads/2023/03/Paneer-salad.jpg" },
        price: 190,
        calorie: 420,
        fat: 20,
        protein: 22,
        ingredients: ["Paneer", "Lettuce", "Tomato", "Onion", "Cucumber", "Olive Oil", "Lemon", "Garlic", "Salt", "Pepper"],
        tasteProfile: "fresh"
    },
    {
        title: "Rice & Lentil Bowl",
        image: { filename: "listingimage", url: "https://greenhealthycooking.com/wp-content/uploads/2018/09/Lentils-and-Rice.jpg" },
        price: 180,
        calorie: 460,
        fat: 10,
        protein: 20,
        ingredients: ["Rice", "Lentils", "Onion", "Tomato", "Garlic", "Ginger", "Oil", "Salt", "Coriander", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Veg Pasta",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SSJCeuOMHXlN5IlA2oT39G758Ed8p0_OXg&s" },
        price: 200,
        calorie: 520,
        fat: 18,
        protein: 16,
        ingredients: ["Pasta", "Tomato", "Onion", "Garlic", "Bell Pepper", "Olive Oil", "Cheese", "Salt", "Pepper", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Pasta",
        image: { filename: "listingimage", url: "https://www.kitchensanctuary.com/wp-content/uploads/2021/11/Buffalo-Chicken-Pasta-square-FS-5.jpg" },
        price: 240,
        calorie: 600,
        fat: 22,
        protein: 34,
        ingredients: ["Pasta", "Chicken", "Tomato", "Onion", "Garlic", "Olive Oil", "Cheese", "Salt", "Pepper", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Omelette",
        image: { filename: "listingimage", url: "https://www.thespruceeats.com/thmb/hJC1AieY5HbKRecRTg8w6xWvXnc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegetarian-omelette-with-bell-peppers-3376569-hero-4-c276751995104c1e917070e911d2d677.jpg" },
        price: 140,
        calorie: 300,
        fat: 18,
        protein: 20,
        ingredients: ["Eggs", "Onion", "Tomato", "Bell Pepper", "Spinach", "Oil", "Salt", "Pepper", "Garlic", "Milk"],
        tasteProfile: "savory"
    },
    {
        title: "Peanut Butter Toast",
        image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1701210418970-a869aa8eb39f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVhbnV0JTIwYnV0dGVyJTIwdG9hc3R8ZW58MHx8MHx8fDA%3D" },
        price: 110,
        calorie: 350,
        fat: 18,
        protein: 14,
        ingredients: ["Bread", "Peanut Butter", "Honey", "Banana", "Milk", "Salt", "Seeds", "Oats", "Oil", "Water"],
        tasteProfile: "sweet"
    },
    {
        title: "Tofu Stir Fry",
        image: { filename: "listingimage", url: "https://mypocketkitchen.com/wp-content/uploads/2024/01/tofu-stir-fry-8-of-11.jpg" },
        price: 190,
        calorie: 380,
        fat: 14,
        protein: 24,
        ingredients: ["Tofu", "Broccoli", "Carrot", "Bell Pepper", "Onion", "Garlic", "Soy Sauce", "Oil", "Salt", "Ginger"],
        tasteProfile: "savory"
    },
    {
        title: "Veg Burrito Bowl",
        image: { filename: "listingimage", url: "https://healthyfitnessmeals.com/wp-content/uploads/2022/08/Vegetarian-burrito-bowl-5.jpg" },
        price: 210,
        calorie: 480,
        fat: 16,
        protein: 18,
        ingredients: ["Rice", "Black Beans", "Corn", "Tomato", "Onion", "Avocado", "Lemon", "Oil", "Salt", "Garlic"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Burrito Bowl",
        image: { filename: "listingimage", url: "https://www.thecookierookie.com/wp-content/uploads/2023/05/chipotle-chicken-burrito-bowls-recipe.jpg" },
        price: 250,
        calorie: 560,
        fat: 20,
        protein: 36,
        ingredients: ["Rice", "Chicken", "Black Beans", "Corn", "Tomato", "Onion", "Avocado", "Oil", "Salt", "Garlic"],
        tasteProfile: "savory"
    },
    {
        title: "Fruit Salad",
        image: { filename: "listingimage", url: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Winter-Fruit-Salad-Recipe.jpg" },
        price: 130,
        calorie: 220,
        fat: 4,
        protein: 5,
        ingredients: ["Apple", "Banana", "Orange", "Papaya", "Grapes", "Lemon", "Honey", "Water", "Salt", "Mint"],
        tasteProfile: "sweet"
    },

    {
        title: "Moong Dal Khichdi",
        image: { filename: "listingimage", url: "https://www.livofy.com/health/wp-content/uploads/2021/07/Moong-Dal-Khichdi.jpg" },
        price: 160,
        calorie: 380,
        fat: 9,
        protein: 18,
        ingredients: ["Rice", "Moong Dal", "Onion", "Garlic", "Ginger", "Carrot", "Peas", "Oil", "Salt", "Water"],
        tasteProfile: "light"
    },
    {
        title: "Chicken Curry Bowl",
        image: { filename: "listingimage", url: "https://www.whiskaffair.com/wp-content/uploads/2022/03/Bihari-Chicken-Curry-2-1-1200x1800.jpg" },
        price: 240,
        calorie: 520,
        fat: 22,
        protein: 36,
        ingredients: ["Chicken", "Onion", "Tomato", "Garlic", "Ginger", "Green Chili", "Oil", "Salt", "Coriander", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Pulao",
        image: { filename: "listingimage", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFPjIluL4H7E7Qznz6kq0DziLeDpnSg0RqM_0J-3nemYyxHbWSK0EaaAZ70NBiy1kLAFy5ZCxgBfCpETdfnL2oSqhS88KOdNTexX9Me5y1xKbFCU0D0DocySLaCPdiP1eXT7dvEWHXstDA/s1600/vegetable+pulao.JPG" },
        price: 180,
        calorie: 460,
        fat: 14,
        protein: 10,
        ingredients: ["Rice", "Carrot", "Beans", "Peas", "Onion", "Garlic", "Ginger", "Oil", "Salt", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Egg Bhurji",
        image: { filename: "listingimage", url: "https://uniquecooks.com/wp-content/uploads/2025/03/egg-bhurji-1.jpg" },
        price: 150,
        calorie: 340,
        fat: 20,
        protein: 22,
        ingredients: ["Eggs", "Onion", "Tomato", "Green Chili", "Garlic", "Ginger", "Oil", "Salt", "Coriander", "Milk"],
        tasteProfile: "savory"
    },
    {
        title: "Paneer Bhurji",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqvNF2NaMIXKbJS-MuQbsgTffnTVjuvdXnA&s" },
        price: 190,
        calorie: 420,
        fat: 24,
        protein: 26,
        ingredients: ["Paneer", "Onion", "Tomato", "Green Chili", "Garlic", "Ginger", "Oil", "Salt", "Coriander", "Milk"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Stew",
        image: { filename: "listingimage", url: "https://www.brandnewvegan.com/wp-content/uploads/2014/07/hearty-vegetable-stew1.jpg" },
        price: 170,
        calorie: 300,
        fat: 8,
        protein: 9,
        ingredients: ["Potato", "Carrot", "Beans", "Onion", "Garlic", "Ginger", "Oil", "Salt", "Water", "Coriander"],
        tasteProfile: "light"
    },
    {
        title: "Chicken Sandwich",
        image: { filename: "listingimage", url: "https://www.eatingwell.com/thmb/lWAiwknQ9yapq6UuXAYrUdrcKbk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Rotisserie-Chicken-Sandwich-202-2000-485b673fe411460e95b512fbf805a5d9.jpg" },
        price: 180,
        calorie: 430,
        fat: 15,
        protein: 30,
        ingredients: ["Bread", "Chicken", "Lettuce", "Tomato", "Onion", "Garlic", "Oil", "Salt", "Pepper", "Lemon"],
        tasteProfile: "savory"
    },
    {
        title: "Veg Wrap",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDHd_U2ziKCQw_-QtxHcxoVjLCqE1UHLN6g&s" },
        price: 160,
        calorie: 390,
        fat: 14,
        protein: 12,
        ingredients: ["Tortilla", "Potato", "Lettuce", "Tomato", "Onion", "Garlic", "Oil", "Salt", "Lemon", "Cucumber"],
        tasteProfile: "savory"
    },
    {
        title: "Sprouts Salad",
        image: { filename: "listingimage", url: "https://www.funfoodfrolic.com/wp-content/uploads/2020/09/Sprout-Salad-Thumbnail.jpg" },
        price: 140,
        calorie: 260,
        fat: 6,
        protein: 18,
        ingredients: ["Mixed Sprouts", "Onion", "Tomato", "Cucumber", "Lemon", "Salt", "Coriander", "Green Chili", "Oil", "Water"],
        tasteProfile: "fresh"
    },
    {
        title: "Curd Rice Bowl",
        image: { filename: "listingimage", url: "https://services.uresthome.com/wp-content/uploads/2024/07/curdriceDSC09411-1300x731-1.jpg" },
        price: 150,
        calorie: 360,
        fat: 10,
        protein: 12,
        ingredients: ["Rice", "Yogurt", "Onion", "Cucumber", "Ginger", "Green Chili", "Salt", "Oil", "Coriander", "Water"],
        tasteProfile: "light"
    },
    {
        title: "Chicken Soup",
        image: { filename: "listingimage", url: "https://greenhealthycooking.com/wp-content/uploads/2022/03/Chicken-Soup-in-Pot.jpg" },
        price: 180,
        calorie: 280,
        fat: 8,
        protein: 24,
        ingredients: ["Chicken", "Carrot", "Beans", "Onion", "Garlic", "Ginger", "Salt", "Water", "Coriander", "Oil"],
        tasteProfile: "light"
    },
    {
        title: "Vegetable Cutlet",
        image: { filename: "listingimage", url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/06/cutlet-recipe-veg-cutlet.jpg" },
        price: 150,
        calorie: 420,
        fat: 18,
        protein: 10,
        ingredients: ["Potato", "Carrot", "Beans", "Peas", "Bread Crumbs", "Onion", "Garlic", "Oil", "Salt", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Paneer Sandwich",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzM3qiwtxGokfPzBlILixV6vKBg7Jk3TfGvQ&s" },
        price: 170,
        calorie: 450,
        fat: 20,
        protein: 22,
        ingredients: ["Bread", "Paneer", "Onion", "Tomato", "Lettuce", "Garlic", "Oil", "Salt", "Pepper", "Milk"],
        tasteProfile: "savory"
    },
    {
        title: "Banana Pancake",
        image: { filename: "listingimage", url: "https://www.kuchpakrahahai.in/wp-content/uploads/2016/05/Eggless-2BPancakes-2B4-2BLR-e1631083962476.jpg" },
        price: 140,
        calorie: 360,
        fat: 12,
        protein: 10,
        ingredients: ["Banana", "Flour", "Milk", "Eggs", "Sugar", "Oil", "Salt", "Water", "Honey", "Seeds"],
        tasteProfile: "sweet"
    },
    {
        title: "Chicken Omelette",
        image: { filename: "listingimage", url: "https://www.thespruceeats.com/thmb/tHsR3VpNhwON_MU4bdyaQ4rQK7k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chickenomelet-07-0a739b5228244ffb8139ea66d7da9248.jpg" },
        price: 180,
        calorie: 390,
        fat: 22,
        protein: 32,
        ingredients: ["Eggs", "Chicken", "Onion", "Garlic", "Green Chili", "Oil", "Salt", "Pepper", "Milk", "Coriander"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Rice Bowl",
        image: { filename: "listingimage", url: "https://successrice.com/wp-content/uploads/2020/01/Autumn-Vegetable-Rice-Power-Bowl-3-4-017-1.jpg" },
        price: 170,
        calorie: 420,
        fat: 12,
        protein: 11,
        ingredients: ["Rice", "Carrot", "Beans", "Peas", "Onion", "Garlic", "Ginger", "Oil", "Salt", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Tofu Salad",
        image: { filename: "listingimage", url: "https://www.allrecipes.com/thmb/w1oa3yx5xJgRq9nIzA6T3nO1nxI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8229092-efac8c353602472e81edbc8457c17a0d.jpg" },
        price: 190,
        calorie: 340,
        fat: 14,
        protein: 22,
        ingredients: ["Tofu", "Lettuce", "Tomato", "Cucumber", "Onion", "Olive Oil", "Lemon", "Garlic", "Salt", "Pepper"],
        tasteProfile: "fresh"
    },
    {
        title: "Vegetable Noodles",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8QmnRyLKIOqyKHyqsjGr8DPltNiWrYMDGlA&s" },
        price: 190,
        calorie: 480,
        fat: 16,
        protein: 12,
        ingredients: ["Noodles", "Carrot", "Beans", "Cabbage", "Onion", "Garlic", "Oil", "Salt", "Pepper", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Noodles",
        image: { filename: "listingimage", url: "https://static.toiimg.com/photo/75356205.cms" },
        price: 230,
        calorie: 560,
        fat: 20,
        protein: 32,
        ingredients: ["Noodles", "Chicken", "Carrot", "Beans", "Onion", "Garlic", "Oil", "Salt", "Pepper", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Paratha",
        image: { filename: "listingimage", url: "https://preview.redd.it/mix-veg-paratha-v0-nhptn9eravgd1.jpeg?auto=webp&s=e06cb4154596dbe35fb23a468e829a82eceb09ba" },
        price: 150,
        calorie: 420,
        fat: 14,
        protein: 12,
        ingredients: ["Wheat Flour", "Potato", "Carrot", "Onion", "Garlic", "Ginger", "Oil", "Salt", "Water", "Coriander"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Paratha Roll",
        image: { filename: "listingimage", url: "https://www.foodfusion.com/wp-content/uploads/2019/05/Crispy-Chicken-roll-Recipe-by-Food-fusion-5.jpg" },
        price: 210,
        calorie: 520,
        fat: 18,
        protein: 34,
        ingredients: ["Wheat Flour", "Chicken", "Onion", "Tomato", "Garlic", "Ginger", "Oil", "Salt", "Lemon", "Coriander"],
        tasteProfile: "savory"
    },
    {
        title: "Mixed Fruit Yogurt Bowl",
        image: { filename: "listingimage", url: "https://joyfullymad.com/wp-content/uploads/2024/02/creamy-fruit-salad-6.jpg" },
        price: 160,
        calorie: 300,
        fat: 8,
        protein: 12,
        ingredients: ["Yogurt", "Apple", "Banana", "Papaya", "Grapes", "Honey", "Seeds", "Water", "Salt", "Almonds"],
        tasteProfile: "sweet"
    },
    {
        title: "Vegetable Burger Patty",
        image: { filename: "listingimage", url: "https://myints.in/wp-content/uploads/2023/09/Myints-Veg-Burger-Patty-.jpg" },
        price: 180,
        calorie: 460,
        fat: 18,
        protein: 14,
        ingredients: ["Potato", "Carrot", "Beans", "Peas", "Bread Crumbs", "Onion", "Garlic", "Oil", "Salt", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Upma",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62An25qATwuE83QS6U4uid1_fK5kigq9gMQ&s" },
        price: 140,
        calorie: 360,
        fat: 10,
        protein: 11,
        ingredients: ["Semolina", "Onion", "Carrot", "Beans", "Peas", "Ginger", "Green Chili", "Oil", "Salt", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Rice Bowl",
        image: { filename: "listingimage", url: "https://www.skinnytaste.com/wp-content/uploads/2024/05/Coconut-Chicken-Rice-Bowls-12.jpg" },
        price: 220,
        calorie: 520,
        fat: 18,
        protein: 36,
        ingredients: ["Rice", "Chicken", "Onion", "Tomato", "Garlic", "Ginger", "Oil", "Salt", "Coriander", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Idli",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz3VXEm7u0AT4L-cO7s0f2XT-Rx227G9BlLg&s" },
        price: 120,
        calorie: 300,
        fat: 6,
        protein: 9,
        ingredients: ["Rice", "Urad Dal", "Carrot", "Beans", "Salt", "Water", "Oil", "Ginger", "Coriander", "Onion"],
        tasteProfile: "light"
    },
    {
        title: "Chicken Idli Bowl",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYCQkXZ8gSCzSbRi3z_Z9kC6gxiSP_HQfybw&s" },
        price: 180,
        calorie: 420,
        fat: 12,
        protein: 28,
        ingredients: ["Rice", "Urad Dal", "Chicken", "Onion", "Garlic", "Ginger", "Oil", "Salt", "Coriander", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Dalia",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIu3MiRc41D6kJ8zhIlA3FVl__YUXahMq4Q&s" },
        price: 150,
        calorie: 340,
        fat: 8,
        protein: 12,
        ingredients: ["Broken Wheat", "Carrot", "Beans", "Peas", "Onion", "Garlic", "Ginger", "Oil", "Salt", "Water"],
        tasteProfile: "light"
    },
    {
        title: "Chicken Dalia",
        image: { filename: "listingimage", url: "https://s2.dmcdn.net/v/Sshfj1WUWzJaYQQSy/x1080" },
        price: 210,
        calorie: 460,
        fat: 14,
        protein: 30,
        ingredients: ["Broken Wheat", "Chicken", "Onion", "Garlic", "Ginger", "Carrot", "Oil", "Salt", "Coriander", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Poha",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnIwQ79XUuyxcet-fVoPJf2iplEspFK5DJQ&s" },
        price: 130,
        calorie: 330,
        fat: 9,
        protein: 10,
        ingredients: ["Flattened Rice", "Onion", "Potato", "Peas", "Green Chili", "Ginger", "Oil", "Salt", "Coriander", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Poha",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Rpg5qIk2DjNhTKmojAr0fX49ZL9_ZsvAbw&s" },
        price: 190,
        calorie: 460,
        fat: 14,
        protein: 28,
        ingredients: ["Flattened Rice", "Chicken", "Onion", "Garlic", "Ginger", "Green Chili", "Oil", "Salt", "Coriander", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Fried Rice",
        image: { filename: "listingimage", url: "https://images.getrecipekit.com/20220904015448-veg-20fried-20rice.png?aspect_ratio=16:9&quality=90&" },
        price: 180,
        calorie: 480,
        fat: 16,
        protein: 11,
        ingredients: ["Rice", "Carrot", "Beans", "Cabbage", "Onion", "Garlic", "Oil", "Salt", "Pepper", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Fried Rice",
        image: { filename: "listingimage", url: "https://iamhomesteader.com/wp-content/uploads/2025/05/Bang-Bang-Chicken-Fried-Rice-2.jpg" },
        price: 230,
        calorie: 560,
        fat: 20,
        protein: 32,
        ingredients: ["Rice", "Chicken", "Carrot", "Beans", "Onion", "Garlic", "Oil", "Salt", "Pepper", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Smoothie",
        image: { filename: "listingimage", url: "https://www.refreshmyhealth.com/wp-content/uploads/2022/06/yellow-afternoon-vegetable-smoothie-smoothie_061-main_img_3240-lrcc.jpg" },
        price: 150,
        calorie: 260,
        fat: 6,
        protein: 8,
        ingredients: ["Spinach", "Apple", "Cucumber", "Carrot", "Lemon", "Ginger", "Water", "Salt", "Seeds", "Mint"],
        tasteProfile: "fresh"
    },
    {
        title: "Protein Smoothie",
        image: { filename: "listingimage", url: "https://www.eatingwell.com/thmb/TBp6lbiwoYPhRP4N__4sROiUDhA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mixed-berry-breakfast-smoothie-7959466-1x1-e0ad2304222e49508cda7b73b21de921.jpg" },
        price: 190,
        calorie: 380,
        fat: 10,
        protein: 26,
        ingredients: ["Milk", "Banana", "Peanut Butter", "Oats", "Almonds", "Honey", "Water", "Salt", "Seeds", "Dates"],
        tasteProfile: "sweet"
    },
    {
        title: "Vegetable Pizza",
        image: { filename: "listingimage", url: "https://images.archanaskitchen.com/images/recipes/world-recipes/pizza-recipes/Gralic_Crust_Veggie_Pizza_8c0c64f05b.jpg" },
        price: 220,
        calorie: 540,
        fat: 20,
        protein: 18,
        ingredients: ["Flour", "Tomato", "Onion", "Bell Pepper", "Olive Oil", "Cheese", "Salt", "Water", "Yeast", "Garlic"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Pizza",
        image: { filename: "listingimage", url: "https://www.allrecipes.com/thmb/G2rFqFeanFROj7mgqFQ_di0BREY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-273658-Keto-Chicken-Crust-Pizza-gw-ddmfs-beauty-4x3-c08a2694bea042adad75a4765dd825fd.jpg" },
        price: 260,
        calorie: 620,
        fat: 24,
        protein: 32,
        ingredients: ["Flour", "Chicken", "Tomato", "Onion", "Olive Oil", "Cheese", "Salt", "Water", "Yeast", "Garlic"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Sushi Bowl",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-avt5uEJ1piCiRDxqawA3ZRPMOTidpVmvQQ&s" },
        price: 240,
        calorie: 420,
        fat: 12,
        protein: 14,
        ingredients: ["Rice", "Cucumber", "Carrot", "Avocado", "Seaweed", "Soy Sauce", "Water", "Salt", "Sesame Seeds", "Oil"],
        tasteProfile: "fresh"
    },
    {
        title: "Chicken Sushi Bowl",
        image: { filename: "listingimage", url: "https://www.afarmgirlsdabbles.com/wp-content/uploads/2022/04/Teriyaki-Chicken-Poke-Bowls_afarmgirlsdabbles_01s-2.jpg" },
        price: 280,
        calorie: 520,
        fat: 16,
        protein: 34,
        ingredients: ["Rice", "Chicken", "Cucumber", "Carrot", "Avocado", "Soy Sauce", "Water", "Salt", "Sesame Seeds", "Oil"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Kebabs",
        image: { filename: "listingimage", url: "https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2022/08/Veg-galouti-kebab-recipe-07.jpg.webp" },
        price: 200,
        calorie: 460,
        fat: 18,
        protein: 14,
        ingredients: ["Potato", "Carrot", "Beans", "Peas", "Onion", "Garlic", "Oil", "Salt", "Coriander", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Kebabs",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfE36sXgx0UurC8aGJP0ACTDrdR7akqoEXTQ&s" },
        price: 260,
        calorie: 520,
        fat: 18,
        protein: 38,
        ingredients: ["Chicken", "Onion", "Garlic", "Ginger", "Oil", "Salt", "Coriander", "Lemon", "Water", "Pepper"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Salad Bowl",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ye_DGigVJzbmH-4c8sablg3kPEVSRonHiQ&s" },
        price: 160,
        calorie: 300,
        fat: 8,
        protein: 9,
        ingredients: ["Lettuce", "Tomato", "Cucumber", "Carrot", "Onion", "Olive Oil", "Lemon", "Salt", "Pepper", "Seeds"],
        tasteProfile: "fresh"
    },
    {
        title: "Chicken Salad Bowl",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zWhKtPF3vn7akikTcH-K7Wtk7AuQIGEtwA&s" },
        price: 240,
        calorie: 420,
        fat: 14,
        protein: 36,
        ingredients: ["Chicken", "Lettuce", "Tomato", "Cucumber", "Onion", "Olive Oil", "Lemon", "Salt", "Pepper", "Seeds"],
        tasteProfile: "fresh"
    },
    {
        title: "Plain Paratha",
        image: { filename: "listingimage", url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2025/08/paratha-recipe.jpg" },
        price: 170,
        calorie: 440,
        fat: 16,
        protein: 14,
        ingredients: ["Wheat Flour", "Oil", "Salt", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Stuffed Paratha",
        image: { filename: "listingimage", url: "https://res.cloudinary.com/dg4wzx8c8/image/upload/v1764832882/recipes/images/bt1xrzwwqutuomnkldtp.jpg" },
        price: 230,
        calorie: 540,
        fat: 18,
        protein: 32,
        ingredients: ["Wheat Flour", "Chicken", "Onion", "Garlic", "Ginger", "Oil", "Salt", "Water", "Coriander", "Lemon"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Khichdi",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qloZudlEGv_iCtCD7fNtom8EEbdc7eDP_Q&s" },
        price: 150,
        calorie: 360,
        fat: 8,
        protein: 14,
        ingredients: ["Rice", "Moong Dal", "Carrot", "Peas", "Onion", "Garlic", "Ginger", "Oil", "Salt", "Water"],
        tasteProfile: "light"
    },
    {
        title: "Chicken Khichdi",
        image: { filename: "listingimage", url: "https://durantbarta.com/uploads/2/2024-01/maxresdefault.jpg" },
        price: 210,
        calorie: 460,
        fat: 14,
        protein: 30,
        ingredients: ["Rice", "Chicken", "Moong Dal", "Onion", "Garlic", "Ginger", "Oil", "Salt", "Coriander", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Sambar Bowl",
        image: { filename: "listingimage", url: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Vegetable-Sambar-Recipe.jpg" },
        price: 160,
        calorie: 380,
        fat: 10,
        protein: 16,
        ingredients: ["Toor Dal", "Tomato", "Carrot", "Beans", "Onion", "Garlic", "Oil", "Salt", "Water", "Coriander"],
        tasteProfile: "tangy"
    },
    {
        title: "Chicken Stew",
        image: { filename: "listingimage", url: "https://www.whiskaffair.com/wp-content/uploads/2024/01/Mughlai-Chicken-Stew-2-3.jpg" },
        price: 190,
        calorie: 480,
        fat: 16,
        protein: 34,
        ingredients: ["Chicken", "Potato", "Carrot", "Onion", "Garlic", "Ginger", "Oil", "Salt", "Water", "Coriander"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Korma Bowl",
        image: { filename: "listingimage", url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-kurma-vegetable-korma-recipe.jpg" },
        price: 190,
        calorie: 520,
        fat: 18,
        protein: 14,
        ingredients: ["Potato", "Carrot", "Beans", "Peas", "Onion", "Cashew", "Garlic", "Oil", "Salt", "Water"],
        tasteProfile: "creamy"
    },
    {
        title: "Chicken Korma Bowl",
        image: { filename: "listingimage", url: "https://img.freepik.com/free-photo/delicious-food-table_23-2151902524.jpg?semt=ais_hybrid&w=740&q=80" },
        price: 260,
        calorie: 620,
        fat: 22,
        protein: 38,
        ingredients: ["Chicken", "Onion", "Cashew", "Garlic", "Ginger", "Oil", "Salt", "Water", "Coriander", "Milk"],
        tasteProfile: "creamy"
    },
    {
        title: "Vegetable Porridge",
        image: { filename: "listingimage", url: "https://www.mjandhungryman.com/wp-content/uploads/2021/07/IMG_0196-77-2.jpg" },
        price: 130,
        calorie: 300,
        fat: 6,
        protein: 10,
        ingredients: ["Oats", "Carrot", "Beans", "Onion", "Garlic", "Ginger", "Salt", "Water", "Oil", "Coriander"],
        tasteProfile: "light"
    },
    {
        title: "Chicken Porridge",
        image: { filename: "listingimage", url: "https://nomadette.com/wp-content/uploads/2024/09/Rice-Cooker-Chicken-Congee-Porridge.jpg" },
        price: 190,
        calorie: 420,
        fat: 10,
        protein: 32,
        ingredients: ["Oats", "Chicken", "Onion", "Garlic", "Ginger", "Salt", "Water", "Oil", "Coriander", "Pepper"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Taco",
        image: { filename: "listingimage", url: "https://www.veganosity.com/wp-content/uploads/2020/03/Balsamic-Tacos-5.jpg" },
        price: 200,
        calorie: 460,
        fat: 16,
        protein: 14,
        ingredients: ["Corn", "Rice", "Black Beans", "Tomato", "Onion", "Avocado", "Oil", "Salt", "Lemon", "Garlic"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Taco",
        image: { filename: "listingimage", url: "https://www.recipetineats.com/tachyon/2025/01/Crunchy-chicken-taco-fingers_0.jpg" },
        price: 260,
        calorie: 560,
        fat: 20,
        protein: 36,
        ingredients: ["Corn", "Rice", "Chicken", "Tomato", "Onion", "Avocado", "Oil", "Salt", "Lemon", "Garlic"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Lasagna",
        image: { filename: "listingimage", url: "https://wendypolisi.com/wp-content/uploads/2021/02/SQ-veggie-lasagna.jpg" },
        price: 240,
        calorie: 620,
        fat: 24,
        protein: 22,
        ingredients: ["Lasagna Sheets", "Tomato", "Onion", "Bell Pepper", "Zucchini", "Olive Oil", "Cheese", "Salt", "Water", "Garlic"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Lasagna",
        image: { filename: "listingimage", url: "https://img.taste.com.au/gwmqsXZs/taste/2023/02/chicken-and-zucchini-lasagne-184635-2.jpg" },
        price: 280,
        calorie: 700,
        fat: 28,
        protein: 38,
        ingredients: ["Lasagna Sheets", "zucchini", "Chicken", "Tomato", "Onion", "Olive Oil", "Cheese", "Salt", "Water", "Garlic", "Milk"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Stuffed Bell Pepper",
        image: { filename: "listingimage", url: "https://cdn.loveandlemons.com/wp-content/uploads/2023/08/vegetarian-stuffed-peppers.jpg" },
        price: 200,
        calorie: 420,
        fat: 14,
        protein: 16,
        ingredients: ["Bell Pepper", "Rice", "Tomato", "Onion", "Beans", "Garlic", "Oil", "Salt", "Water", "Coriander"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Stuffed Bell Pepper",
        image: { filename: "listingimage", url: "https://www.simplywhisked.com/wp-content/uploads/2015/08/Chicken-Stuffed-Peppers-4.jpg" },
        price: 260,
        calorie: 520,
        fat: 18,
        protein: 36,
        ingredients: ["Bell Pepper", "Chicken", "Rice", "Onion", "Garlic", "Oil", "Salt", "Water", "Coriander", "Lemon"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Couscous Bowl",
        image: { filename: "listingimage", url: "https://cheerfulchoices.com/wp-content/uploads/2020/09/Roasted-Chickpea-Couscous-Bowls-14-scaled.jpeg" },
        price: 210,
        calorie: 440,
        fat: 14,
        protein: 12,
        ingredients: ["Couscous", "Carrot", "Beans", "Onion", "Tomato", "Olive Oil", "Lemon", "Salt", "Water", "Garlic"],
        tasteProfile: "fresh"
    },
    {
        title: "Chicken Couscous Bowl",
        image: { filename: "listingimage", url: "https://media.hellofresh.com/q_100,w_3840,f_auto,c_limit,fl_lossy/recipes/image/mediterranean-chicken-bowls-420fd0df.jpg" },
        price: 270,
        calorie: 540,
        fat: 18,
        protein: 34,
        ingredients: ["Couscous", "Chicken", "Carrot", "Onion", "Tomato", "Olive Oil", "Lemon", "Salt", "Water", "Garlic"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Rice Porridge",
        image: { filename: "listingimage", url: "https://www.theworktop.com/wp-content/uploads/2017/11/Vegetable-Congee-Vegan-Recipe.jpg" },
        price: 140,
        calorie: 320,
        fat: 6,
        protein: 9,
        ingredients: ["Rice", "Carrot", "Beans", "Onion", "Garlic", "Ginger", "Salt", "Water", "Oil", "Coriander"],
        tasteProfile: "light"
    },
    {
        title: "Chicken Rice Porridge",
        image: { filename: "listingimage", url: "https://takestwoeggs.com/wp-content/uploads/2024/01/Chao-Ga-Vietnamese-Chicken-Rice-Porridge-recipe-takestwoeggs-1.jpg" },
        price: 190,
        calorie: 420,
        fat: 10,
        protein: 30,
        ingredients: ["Rice", "Chicken", "Onion", "Garlic", "Ginger", "Salt", "Water", "Oil", "Coriander", "Pepper"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Power Bowl",
        image: { filename: "listingimage", url: "https://realandvibrant.com/wp-content/uploads/2019/05/Vegan-Power-Bowl-1.jpg" },
        price: 220,
        calorie: 460,
        fat: 16,
        protein: 18,
        ingredients: ["Quinoa", "Chickpeas", "Spinach", "Tomato", "Cucumber", "Olive Oil", "Lemon", "Salt", "Garlic", "Seeds"],
        tasteProfile: "fresh"
    },
    {
        title: "Chicken Power Bowl",
        image: { filename: "listingimage", url: "https://www.fitmittenkitchen.com/wp-content/uploads/2023/02/Honey-Ginger-Chicken-Power-Bowls-5.jpg" },
        price: 280,
        calorie: 560,
        fat: 18,
        protein: 40,
        ingredients: ["Quinoa", "Chicken", "Spinach", "Tomato", "Cucumber", "Olive Oil", "Lemon", "Salt", "Garlic", "Seeds"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Millet Bowl",
        image: { filename: "listingimage", url: "https://www.feastingathome.com/wp-content/uploads/2021/02/Millet-Bowl-17.jpg" },
        price: 200,
        calorie: 440,
        fat: 14,
        protein: 16,
        ingredients: ["Millets", "Carrot", "Beans", "Peas", "Onion", "Garlic", "Oil", "Salt", "Water", "Coriander"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Millet Bowl",
        image: { filename: "listingimage", url: "https://images.webeng.co/fCj9gbfDL-XH4r8X3Ib9HhRq4C-s4Mi3NnzWCjbz0WY/resize:fit:768:768:0/enlarge:0/aHR0cHM6Ly9pbWFnZXMudWNvb2suY28uemEvaW1hZ2VzL3dpZHRoPTc2OHxlbmNvZGluZz1qcGVnLzkyOTc2NmU2LzkyOTc2NmU2LTc3ZDYtNDhkMC05ZWMyLWYzMGFkZjQ3YTRkMy5qcGVn" },
        price: 260,
        calorie: 540,
        fat: 18,
        protein: 36,
        ingredients: ["Millets", "Chicken", "Onion", "Garlic", "Ginger", "Oil", "Salt", "Water", "Coriander", "Lemon"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Rava Dosa",
        image: { filename: "listingimage", url: "https://palatesdesire.com/wp-content/uploads/2019/11/Onion_Rava_Dosa@palates_desire-scaled.jpg" },
        price: 150,
        calorie: 380,
        fat: 10,
        protein: 12,
        ingredients: ["Semolina", "Rice Flour", "Onion", "Carrot", "Green Chili", "Ginger", "Oil", "Salt", "Water", "Coriander"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Rava Dosa",
        image: { filename: "listingimage", url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/rava-dosa-recipe.jpg" },
        price: 210,
        calorie: 480,
        fat: 14,
        protein: 30,
        ingredients: ["Semolina", "Rice Flour", "Chicken", "Onion", "Garlic", "Ginger", "Oil", "Salt", "Water", "Coriander"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Udon Bowl",
        image: { filename: "listingimage", url: "https://familystylefood.com/wp-content/uploads/2020/09/udon-ratatouille.jpg" },
        price: 220,
        calorie: 460,
        fat: 14,
        protein: 14,
        ingredients: ["Udon Noodles", "Carrot", "Beans", "Cabbage", "Onion", "Garlic", "Oil", "Salt", "Water", "Spring Onion"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Udon Bowl",
        image: { filename: "listingimage", url: "https://www.jocooks.com/wp-content/uploads/2014/09/hoisin-chicken-udon-noodles-1-15.jpg" },
        price: 280,
        calorie: 560,
        fat: 18,
        protein: 36,
        ingredients: ["Udon Noodles", "Chicken", "Carrot", "Beans", "Onion", "Garlic", "Oil", "Salt", "Water", "Spring Onion"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Falafel Bowl",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQkpl7XWePCXrS2Ttff734UqaOKFZdiXw6CA&s" },
        price: 210,
        calorie: 440,
        fat: 16,
        protein: 18,
        ingredients: ["Chickpeas", "Onion", "Garlic", "Parsley", "Flour", "Olive Oil", "Salt", "Water", "Lemon", "Sesame Seeds"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Shawarma Bowl",
        image: { filename: "listingimage", url: "https://www.chilitochoc.com/wp-content/uploads/2025/01/chicken-shawarma-rice-bowl.jpg" },
        price: 290,
        calorie: 580,
        fat: 20,
        protein: 38,
        ingredients: ["Chicken", "Pita Bread", "Onion", "Tomato", "Garlic", "Yogurt", "Oil", "Salt", "Lemon", "Cucumber"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Hakka Rice",
        image: { filename: "listingimage", url: "https://www.whiskaffair.com/wp-content/uploads/2018/11/Vegetable-Fried-Rice-2-3.jpg" },
        price: 180,
        calorie: 470,
        fat: 15,
        protein: 11,
        ingredients: ["Rice", "Carrot", "Beans", "Cabbage", "Onion", "Garlic", "Oil", "Salt", "Pepper", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Hakka Rice",
        image: { filename: "listingimage", url: "https://orders.popskitchen.in/storage/2024/09/image-115.png" },
        price: 240,
        calorie: 560,
        fat: 18,
        protein: 32,
        ingredients: ["Rice", "Chicken", "Carrot", "Beans", "Cabbage", "Onion", "Garlic", "Oil", "Salt", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Lentil Bowl",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlECeKDReu17iWYzujbi2RV5645tPL-OgLhg&s" },
        price: 170,
        calorie: 390,
        fat: 10,
        protein: 18,
        ingredients: ["Lentils", "Onion", "Tomato", "Carrot", "Garlic", "Ginger", "Oil", "Salt", "Water", "Coriander"],
        tasteProfile: "light"
    },
    {
        title: "Chicken Lentil Bowl",
        image: { filename: "listingimage", url: "https://marleyspoon.com/media/recipes/45974/main_photos/large/warm_chicken_and_lentil_bowl-9e31498f2eede17232f080c67d36101c.jpeg" },
        price: 230,
        calorie: 480,
        fat: 14,
        protein: 34,
        ingredients: ["Lentils", "Chicken", "Onion", "Garlic", "Ginger", "Oil", "Salt", "Water", "Coriander", "Lemon"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Rice Noodles",
        image: { filename: "listingimage", url: "https://cdn.vegetariantimes.com/wp-content/uploads/2017/05/noodles2_2000_1125.jpg?crop=1:1&width=1000" },
        price: 190,
        calorie: 460,
        fat: 14,
        protein: 12,
        ingredients: ["Rice Noodles", "Carrot", "Beans", "Cabbage", "Onion", "Garlic", "Oil", "Salt", "Water", "Spring Onion"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Rice Noodles",
        image: { filename: "listingimage", url: "https://mymorningmocha.com/wp-content/uploads/2023/09/chicken-vermicelli-recipe.jpg" },
        price: 250,
        calorie: 560,
        fat: 18,
        protein: 34,
        ingredients: ["Rice Noodles", "Chicken", "Carrot", "Beans", "Cabbage", "Onion", "Garlic", "Oil", "Salt", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Stuffed Wrap",
        image: { filename: "listingimage", url: "https://img.freepik.com/premium-photo/veg-spring-roll-wrap-also-known-as-franky-made-using-paneer-vegetables-stuffed-inside-chapati-roti-served-with-tomato-ketchup-selective-focus_466689-16769.jpg" },
        price: 180,
        calorie: 420,
        fat: 14,
        protein: 14,
        ingredients: ["Tortilla", "Potato", "Carrot", "Onion", "Lettuce", "Garlic", "Oil", "Salt", "Lemon", "Cucumber"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Stuffed Wrap",
        image: { filename: "listingimage", url: "https://talkingmeals.com/wp-content/uploads/2022/11/Stuffing-Stuffed-Chicken-Breast-Recipes-POST-angle-SQUARE.jpeg" },
        price: 240,
        calorie: 520,
        fat: 18,
        protein: 34,
        ingredients: ["Tortilla", "Chicken", "Onion", "Tomato", "Lettuce", "Garlic", "Oil", "Salt", "Lemon", "Cucumber"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Barley Bowl",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe" },
        price: 200,
        calorie: 430,
        fat: 12,
        protein: 16,
        ingredients: ["Barley", "Carrot", "Beans", "Onion", "Tomato", "Olive Oil", "Garlic", "Salt", "Water", "Lemon"],
        tasteProfile: "light"
    },
    {
        title: "Chicken Barley Bowl",
        image: { filename: "listingimage", url: "https://img.taste.com.au/TrsuLfz7/taste/2017/07/grilled-chicken-and-veg-barley-bowl-126589-1.jpg" },
        price: 260,
        calorie: 520,
        fat: 16,
        protein: 34,
        ingredients: ["Barley", "Chicken", "Onion", "Tomato", "Garlic", "Olive Oil", "Salt", "Water", "Lemon", "Coriander"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Rice Casserole",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1525755662778-989d0524087e" },
        price: 220,
        calorie: 540,
        fat: 18,
        protein: 18,
        ingredients: ["Rice", "Tomato", "Onion", "Bell Pepper", "Beans", "Olive Oil", "Cheese", "Salt", "Water", "Garlic"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Rice Casserole",
        image: { filename: "listingimage", url: "https://www.allrecipes.com/thmb/-CgYeDhVqONC0papo6pWg-0rUjk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8635802-lemon-chicken-rice-casserole-ddmfs-4x3-ee82ae7b7cea49bd9992e069ab8f7d91.jpg" },
        price: 280,
        calorie: 640,
        fat: 22,
        protein: 36,
        ingredients: ["Rice", "Chicken", "Tomato", "Onion", "Olive Oil", "Cheese", "Salt", "Water", "Garlic", "Milk"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Energy Bowl",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1546069901-eacef0df6022" },
        price: 210,
        calorie: 460,
        fat: 14,
        protein: 18,
        ingredients: ["Brown Rice", "Chickpeas", "Spinach", "Tomato", "Cucumber", "Olive Oil", "Lemon", "Salt", "Garlic", "Seeds"],
        tasteProfile: "fresh"
    },
    {
        title: "Chicken Energy Bowl",
        image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToHtvXWp57W2np0F5PRePh7LPHbpSP0JpwWA&s" },
        price: 290,
        calorie: 560,
        fat: 18,
        protein: 40,
        ingredients: ["Brown Rice", "Chicken", "Spinach", "Tomato", "Cucumber", "Olive Oil", "Lemon", "Salt", "Garlic", "Seeds"],
        tasteProfile: "savory"
    },
    {
        title: "Vegetable Rice & Beans",
        image: { filename: "listingimage", url: "https://www.vegetarianventures.com/wp-content/uploads/2016/05/RedBeansandRiceBlog-7-of-7-819x1024.jpg" },
        price: 180,
        calorie: 420,
        fat: 12,
        protein: 16,
        ingredients: ["Rice", "Kidney Beans", "Onion", "Tomato", "Garlic", "Ginger", "Oil", "Salt", "Water", "Coriander"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Rice & Beans",
        image: { filename: "listingimage", url: "https://mealpractice.b-cdn.net/47733394452385792/brazilian-chicken-and-black-bean-stew-with-coconut-rice-bpiDFMheOu.webp" },
        price: 240,
        calorie: 520,
        fat: 16,
        protein: 34,
        ingredients: ["Rice", "Chicken", "Kidney Beans", "Onion", "Garlic", "Ginger", "Oil", "Salt", "Water", "Coriander"],
        tasteProfile: "savory"
    },

    {
        title: "Margherita Pizza",
        image: { filename: "listingimage", url: "https://murmursofricotta.com/wp-content/uploads/2022/04/Neapolitan-Pizza_-4.jpg" },
        price: 280,
        calorie: 620,
        fat: 24,
        protein: 22,
        ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Basil", "Olive Oil", "Salt", "Water", "Yeast", "Garlic", "Sugar"],
        tasteProfile: "savory"
    },
    {
        title: "Pepperoni Pizza",
        image: { filename: "listingimage", url: "https://www.perfectitaliano.com.au/content/dam/perfectitaliano-aus/recipe/pepperoni_pizza_standard.jpg" },
        price: 320,
        calorie: 680,
        fat: 28,
        protein: 26,
        ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Pepperoni", "Olive Oil", "Salt", "Water", "Yeast", "Garlic", "Sugar"],
        tasteProfile: "savory"
    },
    {
        title: "Pasta Alfredo",
        image: { filename: "listingimage", url: "https://tastesbetterfromscratch.com/wp-content/uploads/2018/07/Instant-Pot-Fettuccine-Alfredo25-1-scaled.jpg" },
        price: 260,
        calorie: 640,
        fat: 26,
        protein: 20,
        ingredients: ["Pasta", "Milk", "Cheese", "Garlic", "Olive Oil", "Salt", "Pepper", "Water", "Flour", "Parsley"],
        tasteProfile: "creamy"
    },
    {
        title: "Chicken Alfredo Pasta",
        image: { filename: "listingimage", url: "https://gimmedelicious.com/wp-content/uploads/2024/10/Skinny-Chicken-Broccoli-Alfredo-1.jpg" },
        price: 320,
        calorie: 720,
        fat: 30,
        protein: 36,
        ingredients: ["Pasta", "Chicken", "Milk", "Cheese", "Garlic", "Olive Oil", "Salt", "Pepper", "Water", "Parsley"],
        tasteProfile: "creamy"
    },
    {
        title: "Lasagna",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9" },
        price: 300,
        calorie: 700,
        fat: 28,
        protein: 30,
        ingredients: ["Lasagna Sheets", "Tomato Sauce", "Cheese", "Onion", "Garlic", "Olive Oil", "Milk", "Salt", "Water", "Flour"],
        tasteProfile: "savory"
    },
    {
        title: "Veg Burger",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
        price: 220,
        calorie: 480,
        fat: 18,
        protein: 16,
        ingredients: ["Burger Bun", "Potato Patty", "Lettuce", "Tomato", "Onion", "Cheese", "Oil", "Salt", "Flour", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Burger",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
        price: 280,
        calorie: 560,
        fat: 22,
        protein: 34,
        ingredients: ["Burger Bun", "Chicken Patty", "Lettuce", "Tomato", "Onion", "Cheese", "Oil", "Salt", "Flour", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "French Fries",
        image: { filename: "listingimage", url: "https://www.indianveggiedelight.com/wp-content/uploads/2019/07/air-fryer-potato-fries-featured-500x500.jpg" },
        price: 150,
        calorie: 420,
        fat: 20,
        protein: 6,
        ingredients: ["Potatoes", "Oil", "Salt", "Water", "Flour", "Corn Flour", "Garlic", "Pepper", "Sugar", "Lemon"],
        tasteProfile: "savory"
    },
    {
        title: "Grilled Chicken Steak",
        image: { filename: "listingimage", url: "https://ikneadtoeat.com/wp-content/uploads/2022/11/grilled-chicken-steak-7.jpg" },
        price: 380,
        calorie: 540,
        fat: 22,
        protein: 46,
        ingredients: ["Chicken Breast", "Olive Oil", "Garlic", "Lemon", "Salt", "Pepper", "Herbs", "Butter Substitute", "Water", "Parsley"],
        tasteProfile: "savory"
    },
    {
        title: "Fish and Chips",
        image: { filename: "listingimage", url: "https://swallowtail.ca/wp-content/uploads/sites/5751/2019/04/fish-and-chips.jpg?w=1000&h=1000&zoom=2" },
        price: 360,
        calorie: 620,
        fat: 26,
        protein: 32,
        ingredients: ["Fish Fillet", "Potatoes", "Flour", "Oil", "Salt", "Lemon", "Water", "Garlic", "Pepper", "Sugar"],
        tasteProfile: "savory"
    },
    {
        title: "Caesar Salad",
        image: { filename: "listingimage", url: "https://www.allrecipes.com/thmb/mXZ0Tulwn3x9_YB_ZbkiTveDYFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg" },
        price: 240,
        calorie: 360,
        fat: 18,
        protein: 14,
        ingredients: ["Lettuce", "Croutons", "Cheese", "Olive Oil", "Garlic", "Lemon", "Salt", "Pepper", "Milk", "Water"],
        tasteProfile: "fresh"
    },
    {
        title: "Chicken Caesar Salad",
        image: { filename: "listingimage", url: "https://damndelicious.net/wp-content/uploads/2023/01/220905_DD_Chx-Caesar-Salad_051.jpg" },
        price: 300,
        calorie: 440,
        fat: 20,
        protein: 34,
        ingredients: ["Chicken", "Lettuce", "Croutons", "Cheese", "Olive Oil", "Garlic", "Lemon", "Salt", "Pepper", "Milk"],
        tasteProfile: "fresh"
    },
    {
        title: "Tacos",
        image: { filename: "listingimage", url: "https://www.allrecipes.com/thmb/p2N3MeodbxZ6WQ_VG7C8qFtb-7Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-255545-Ground-Turkey-Taco-Meat-ddmfs-4x3-a17a78145cc44607afa7fe98a56b4c2a.jpg" },
        price: 260,
        calorie: 480,
        fat: 18,
        protein: 22,
        ingredients: ["Taco Shell", "Beans", "Tomato", "Onion", "Lettuce", "Cheese", "Oil", "Salt", "Garlic", "Lemon"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Tacos",
        image: { filename: "listingimage", url: "https://www.marthastewart.com/thmb/CtJOD-NwiMEkghIuzRUxbdbfx-Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-chicken-tacos-3bz-nrwoqwc9omr_4sbnkp-0522-opus_hz-cd753b1236074668a38894a665046797.jpgitokS71p4T_-" },
        price: 320,
        calorie: 560,
        fat: 22,
        protein: 36,
        ingredients: ["Taco Shell", "Chicken", "Tomato", "Onion", "Lettuce", "Cheese", "Oil", "Salt", "Garlic", "Lemon"],
        tasteProfile: "savory"
    },
    {
        title: "Veg Quesadilla",
        image: { filename: "listingimage", url: "https://mylifecookbook.com/wp-content/uploads/2024/06/veggie-quesadilla-fSQ-735x735.jpg" },
        price: 240,
        calorie: 520,
        fat: 22,
        protein: 18,
        ingredients: ["Tortilla", "Cheese", "Bell Pepper", "Onion", "Tomato", "Oil", "Salt", "Garlic", "Flour", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Chicken Quesadilla",
        image: { filename: "listingimage", url: "https://www.allrecipes.com/thmb/qX33KNwobIQ742FAouPjBbsgH4U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21659-Chicken-Quesadillas-DDMFS-3291-4x3-Beauty-8849a09057d34cde9bad913783262833.jpg" },
        price: 300,
        calorie: 600,
        fat: 26,
        protein: 34,
        ingredients: ["Tortilla", "Chicken", "Cheese", "Onion", "Bell Pepper", "Oil", "Salt", "Garlic", "Flour", "Water"],
        tasteProfile: "savory"
    },
    {
        title: "Garlic Bread",
        image: { filename: "listingimage", url: "https://i0.wp.com/thejoyfilledkitchen.com/wp-content/uploads/2022/02/DSC_0047-2.jpg?fit=800%2C1200&ssl=1" },
        price: 180,
        calorie: 420,
        fat: 18,
        protein: 10,
        ingredients: ["Bread", "Garlic", "Olive Oil", "Cheese", "Salt", "Water", "Flour", "Yeast", "Sugar", "Parsley"],
        tasteProfile: "savory"
    },
    {
        title: "Pancakes",
        image: { filename: "listingimage", url: "https://www.yummytummyaarthi.com/wp-content/uploads/2022/08/pancakes-1.jpg" },
        price: 200,
        calorie: 480,
        fat: 16,
        protein: 14,
        ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Oil", "Salt", "Water", "Baking Powder", "Honey", "Butter Substitute"],
        tasteProfile: "sweet"
    },
    {
        title: "Waffles",
        image: { filename: "listingimage", url: "https://cdn.vegkit.com/wp-content/uploads/sites/2/2025/04/10111655/VK_choc_waffle1.jpg" },
        price: 220,
        calorie: 520,
        fat: 18,
        protein: 14,
        ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Oil", "Salt", "Water", "Baking Powder", "Honey", "Butter Substitute"],
        tasteProfile: "sweet"
    },
    {
        title: "Chocolate Brownie",
        image: { filename: "listingimage", url: "https://www.sweetishhousemafia.com/cdn/shop/files/ClassicBrownie_1200x.jpg?v=1716046003" },
        price: 240,
        calorie: 560,
        fat: 28,
        protein: 10,
        ingredients: ["Flour", "Cocoa Powder", "Sugar", "Milk", "Oil", "Salt", "Water", "Baking Powder", "Chocolate", "Eggs"],
        tasteProfile: "sweet"
    },
    {
        title: "Cheese Omelette",
        image: { filename: "listingimage", url: "https://www.emborg.com/app/uploads/2023/07/1200x1200px_Easy_Cheese_Omelette.png" },
        price: 180,
        calorie: 360,
        fat: 24,
        protein: 22,
        ingredients: ["Eggs", "Cheese", "Milk", "Oil", "Salt", "Pepper", "Onion", "Garlic", "Water", "Parsley"],
        tasteProfile: "savory"
    },
    {
        title: "Hot Dog",
        image: { filename: "listingimage", url: "https://thespiceway.com/cdn/shop/files/Cheesy_Classic_Hot_Dogs.jpg?v=1712164565" },
        price: 260,
        calorie: 520,
        fat: 24,
        protein: 20,
        ingredients: ["Hot Dog Bun", "Sausage", "Onion", "Tomato", "Oil", "Salt", "Water", "Flour", "Sugar", "Garlic"],
        tasteProfile: "savory"
    },
    {
        title: "Club Sandwich",
        image: { filename: "listingimage", url: "https://images.arla.com/recordid/15F33607-F6D9-4952-B6AA210D3033BF14/club-sandwich1.jpg?format=webp" },
        price: 300,
        calorie: 620,
        fat: 26,
        protein: 32,
        ingredients: ["Bread", "Chicken", "Eggs", "Lettuce", "Tomato", "Cheese", "Oil", "Salt", "Garlic", "Water"],
        tasteProfile: "savory"
    }




];

module.exports = { data: sampleListings };
