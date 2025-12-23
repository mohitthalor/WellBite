const sampleListings = [
    {
        "title": "Butter Chicken",
        "image": {
            "filename": "listingimage",
            "url": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/chicken-butter-masala-recipe.jpg"
        },
        "price": 181,
        "calorie": 450,
        "fat": 27.3,
        "protein": 34,
        "ingredients": ["Chicken", "Butter", "Tomato", "Cream", "Spices"],
        "tasteProfile": "creamy"
    },
    {
        "title": "Dal Makhni",
        "image": {
            "filename": "listingimage",
            "url": "https://static.toiimg.com/thumb/53192600.cms?width=1200&height=900"
        },
        "price": 103,
        "calorie": 391,
        "fat": 17.9,
        "protein": 30,
        "ingredients": ["Black lentils", "Butter", "Tomato", "Cream", "Spices"],
        "tasteProfile": "rich"
    },
    {
        "title": "Biryani",
        "image": {
            "filename": "listingimage",
            "url": "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg"
        },
        "price": 190,
        "calorie": 542,
        "fat": 23.7,
        "protein": 28,
        "ingredients": ["Rice", "Chicken", "Spices", "Yogurt", "Onion"],
        "tasteProfile": "spicy"
    },
    {
        "title": "Pav Bhaji",
        "image": {
            "filename": "listingimage",
            "url": "https://bhojmasale.com/cdn/shop/articles/YFL-Pav-Bhaji-2_8a51cfbd-f4ff-4ee8-81e6-90831eaa304d_1024x1024.webp?v=1719038943"
        },
        "price": 94,
        "calorie": 420,
        "fat": 19.5,
        "protein": 8,
        "ingredients": ["Potatoes", "Mixed Vegetables", "Butter", "Spices", "Bread"],
        "tasteProfile": "savory"
    },
    {
        "title": "Chole Bhature",
        "image": {
            "filename": "listingimage",
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Chole_Bhature_At_Local_Street.jpg/1200px-Chole_Bhature_At_Local_Street.jpg"
        },
        "price": 100,
        "calorie": 400,
        "fat": 20,
        "protein": 26,
        "ingredients": ["Chickpeas", "Flour", "Onion", "Tomato", "Spices"],
        "tasteProfile": "spicy"
    },
    {
        "title": "Kadai Paneer",
        "image": {
            "filename": "listingimage",
            "url": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/kadai-paneer-recipe.jpg"
        },
        "price": 120,
        "calorie": 430,
        "fat": 25,
        "protein": 8,
        "ingredients": ["Paneer", "Bell Peppers", "Onion", "Tomato", "Spices"],
        "tasteProfile": "spicy"
    },
    {
        "title": "Aloo Paratha",
        "image": {
            "filename": "listingimage",
            "url": "https://tasteofindiabrookfield.com/wp-content/uploads/2023/06/Visit-us-Dine-To-your-Deepest-Desire-11-1.png"
        },
        "price": 140,
        "calorie": 460,
        "fat": 10,
        "protein": 11,
        "ingredients": ["Potatoes ", "Wheat Flour", "Spices", "Butter"],
        "tasteProfile": "savory"
    },
    {
        "title": "Palak Paneer",
        "image": {
            "filename": "listingimage",
            "url": "https://www.indianveggiedelight.com/wp-content/uploads/2023/02/palak-paneer-recipe.jpg"
        },
        "price": 160,
        "calorie": 490,
        "fat": 15,
        "protein": 14,
        "ingredients": ["Spinach", "Paneer", "Onion", "Tomato", "Spices"],
        "tasteProfile": "creamy"
    },
    {
        "title": "Malai Kofta",
        "image": {
            "filename": "listingimage",
            "url": "https://carveyourcraving.com/wp-content/uploads/2021/09/Best-Malai-Kofta-recipe.jpg"
        },
        "price": 80,
        "calorie": 520,
        "fat": 20,
        "protein": 17,
        "ingredients": ["Paneer", "Potatoes", "Cream", "Tomato", "Spices"],
        "tasteProfile": "creamy"
    },
    {
        "title": "Masala Dosa",
        "image": {
            "filename": "listingimage",
            "url": "https://www.efghfoods.com/wp-content/uploads/2020/11/Blog-2-min.jpg"
        },
        "price": 100,
        "calorie": 550,
        "fat": 25,
        "protein": 20,
        "ingredients": ["Rice", "Lentils", "Potatoes", "Spices"],
        "tasteProfile": "spicy"
    },
    {
        "title": "Paneer Tikka",
        "image": {
            "filename": "listingimage",
            "url": "https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka-500x500.jpg"
        },
        "price": 120,
        "calorie": 400,
        "fat": 10,
        "protein": 23,
        "ingredients": ["Paneer", "Yogurt", "Bell Peppers", "Spices"],
        "tasteProfile": "spicy"
    },
    {
        "title": "Rajma Chawal",
        "image": {
            "filename": "listingimage",
            "url": "https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg"
        },
        "price": 140,
        "calorie": 430,
        "fat": 15,
        "protein": 26,
        "ingredients": ["Kidney Beans", "Rice", "Onion", "Tomato", "Spices"],
        "tasteProfile": "savory"
    },
    {
        "title": "Veg Pulao",
        "image": {
            "filename": "listingimage",
            "url": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFPjIluL4H7E7Qznz6kq0DziLeDpnSg0RqM_0J-3nemYyxHbWSK0EaaAZ70NBiy1kLAFy5ZCxgBfCpETdfnL2oSqhS88KOdNTexX9Me5y1xKbFCU0D0DocySLaCPdiP1eXT7dvEWHXstDA/s1600/vegetable+pulao.JPG"
        },
        "price": 160,
        "calorie": 460,
        "fat": 20,
        "protein": 8,
        "ingredients": ["Rice", "Mixed Vegetables", "Spices"],
        "tasteProfile": "savory"
    },
    {
        "title": "Aloo Gobi",
        "image": {
            "filename": "listingimage",
            "url": "https://www.cookwithmanali.com/wp-content/uploads/2014/09/Indian-Aloo-Gobi-480x270.jpg"
        },
        "price": 80,
        "calorie": 490,
        "fat": 25,
        "protein": 11,
        "ingredients": ["Potatoes", "Cauliflower", "Spices"],
        "tasteProfile": "spicy"
    },
    {
        "title": "Bhindi Masala",
        "image": {
            "filename": "listingimage",
            "url": "https://www.anveshan.farm/cdn/shop/articles/BhindiMasala.jpg?v=1690790485&width=1100"
        },
        "price": 100,
        "calorie": 520,
        "fat": 10,
        "protein": 14,
        "ingredients": ["Okra", "Onion", "Tomato", "Spices"],
        "tasteProfile": "spicy"
    },
    {
        "title": "Samosa",
        "image": {
            "filename": "listingimage",
            "url": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg"
        },
        "price": 120,
        "calorie": 550,
        "fat": 15,
        "protein": 17,
        "ingredients": ["Potatoes", "Flour", "Spices", "Peas"],
        "tasteProfile": "savory"
    },
    {
        "title": "Matar Paneer",
        "image": {
            "filename": "listingimage",
            "url": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/matar-paneer.jpg"
        },
        "price": 140,
        "calorie": 400,
        "fat": 20,
        "protein": 20,
        "ingredients": ["Green Peas", "Paneer", "Onion", "Tomato", "Spices"],
        "tasteProfile": "creamy"
    },
    {
        "title": "Paneer Butter Masala",
        "image": {
            "filename": "listingimage",
            "url": "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg"
        },
        "price": 160,
        "calorie": 430,
        "fat": 25,
        "protein": 23,
        "ingredients": ["Paneer", "Butter", "Tomato", "Cream", "Spices"],
        "tasteProfile": "creamy"
    },
    {
        "title": "Baingan Bharta",
        "image": {
            "filename": "listingimage",
            "url": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/baingan-bharta.jpg"
        },
        "price": 80,
        "calorie": 460,
        "fat": 10,
        "protein": 26,
        "ingredients": ["Eggplant", "Onion", "Tomato", "Spices"],
        "tasteProfile": "smoky"
    },
    {
        "title": "Sambar Rice",
        "image": {
            "filename": "listingimage",
            "url": "https://www.kannammacooks.com/wp-content/uploads/sambar-sadam-sambar-rice.jpg"
        },
        "price": 100,
        "calorie": 490,
        "fat": 15,
        "protein": 8,
        "ingredients": ["Lentils", "Vegetables", "Tamarind", "Spices"],
        "tasteProfile": "tangy"
    },
    {
        "title": "Kadhi Chawal",
        "image": {
            "filename": "listingimage",
            "url": "https://img-global.cpcdn.com/recipes/e97adcdf1aff77ca/680x482cq70/kadhi-chawal-recipe-main-photo.jpg"
        },
        "price": 120,
        "calorie": 520,
        "fat": 20,
        "protein": 11,
        "ingredients": ["Yogurt", "Gram Flour", "Rice", "Spices"],
        "tasteProfile": "tangy"
    },
    {
        "title": "Gajar Ka Halwa",
        "image": {
            "filename": "listingimage",
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2Ob3fms8ImHG2uJmICGqIubO-TuWx79azg&s"
        },
        "price": 140,
        "calorie": 550,
        "fat": 25,
        "protein": 14,
        "ingredients": ["Carrots", "Milk", "Sugar", "Nuts", "Ghee"],
        "tasteProfile": "sweet"
    },
    {
        "title": "Dhokla",
        "image": {
            "filename": "listingimage",
            "url": "https://www.maggi.in/sites/default/files/srh_recipes/d1d74216ba5fa7ce5d72b8e121afe69f.jpg"
        },
        "price": 160,
        "calorie": 400,
        "fat": 10,
        "protein": 17,
        "ingredients": ["Gram Flour", "Yogurt", "Spices", "Mustard Seeds"],
        "tasteProfile": "savory"
    },
    {
        "title": "Pani Puri",
        "image": {
            "filename": "listingimage",
            "url": "https://i2.wp.com/wp-backend.thefearlesscooking.com/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-10-at-4.45.10-PM.jpeg?fit=1536%2C1024&ssl=1"
        },
        "price": 80,
        "calorie": 430,
        "fat": 15,
        "protein": 20,
        "ingredients": ["Semolina", "Potatoes", "Chickpeas", "Spices", "Pani"],
        "tasteProfile": "spicy"
    },
    {
        "title": "Rasam",
        "image": {
            "filename": "listingimage",
            "url": "https://thewhiskaddict.com/wp-content/uploads/2023/02/IMG_9588.jpg"
        },
        "price": 100,
        "calorie": 460,
        "fat": 20,
        "protein": 23,
        "ingredients": ["Tomato", "Tamarind", "Spices", "Coriander"],
        "tasteProfile": "tangy"
    },
    {
        "title": "Vada Pav",
        "image": {
            "filename": "listingimage",
            "url": "https://vegecravings.com/wp-content/uploads/2017/02/Vada-Pav-Recipe-Step-By-Step-Instructions-3.jpg"
        },
        "price": 120,
        "calorie": 490,
        "fat": 25,
        "protein": 26,
        "ingredients": ["Potato", "Bread", "Spices", "Chutney"],
        "tasteProfile": "spicy"
    },
    {
        "title": "Upma",
        "image": {
            "filename": "listingimage",
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62An25qATwuE83QS6U4uid1_fK5kigq9gMQ&s"
        },
        "price": 140,
        "calorie": 520,
        "fat": 10,
        "protein": 8,
        "ingredients": ["Semolina", "Vegetables", "Spices"],
        "tasteProfile": "savory"
    },
    {
        "title": "Poha",
        "image": {
            "filename": "listingimage",
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNviqYRu3NUiH3bGBpsTSUxddYW1GIryF4tQ&s"
        },
        "price": 160,
        "calorie": 430,
        "fat": 15,
        "protein": 11,
        "ingredients": ["Flattened Rice", "Onion", "Peas", "Spices"],
        "tasteProfile": "savory"
    },
    {
        "title": "Kheer",
        "image": {
            "filename": "listingimage",
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTfAH_V1USnAgtbcCLhsAdSzbI8KZXw5pcQ&s"
        },
        "price": 80,
        "calorie": 460,
        "fat": 20,
        "protein": 14,
        "ingredients": ["Rice", "Milk", "Sugar", "Cardamom", "Nuts"],
        "tasteProfile": "sweet"
    },
    {
        "title": "Dahi Vada",
        "image": {
            "filename": "listingimage",
            "url": "https://static.toiimg.com/photo/55432577.cms"
        },
        "price": 100,
        "calorie": 550,
        "fat": 15,
        "protein": 26,
        "ingredients": ["Lentils", "Yogurt", "Spices", "Chutney"],
        "tasteProfile": "savory"
    },
    {
        "title": "Aloo Tikki",
        "image": {
            "filename": "listingimage",
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4UNO539_sQOnnJmQN5G-y2Qca3FHLpO7jg&s"
        },
        "price": 100,
        "calorie": 490,
        "fat": 25,
        "protein": 14,
        "ingredients": ["Potatoes", "Spices", "Bread Crumbs"],
        "tasteProfile": "spicy"
    },
    {
        "title": "Methi Malai Paneer",
        "image": {
            "filename": "listingimage",
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ufO0KR4w0c3cDc61U0I4HqnWRRuGWumdBQ&s"
        },
        "price": 120,
        "calorie": 520,
        "fat": 10,
        "protein": 17,
        "ingredients": ["Fenugreek", "Paneer", "Cream", "Spices"],
        "tasteProfile": "creamy"
    },
    {
        "title": "Gulab Jamun",
        "image": {
            "filename": "listingimage",
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgh4DGpTdfQ6JMMJM6SrDC2UpFc5jxerTjQ&s"
        },
        "price": 160,
        "calorie": 550,
        "fat": 25,
        "protein": 17,
        "ingredients": ["Milk Powder", "Flour", "Sugar", "Cardamom", "Ghee"],
        "tasteProfile": "sweet"
    },
    {
        "title": "Ras Malai",
        "image": {
            "filename": "listingimage",
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRe_iE1P5sbsw7izWdPDzEIn-R8tK-3yRbLA&s"
        },
        "price": 140,
        "calorie": 490,
        "fat": 25,
        "protein": 8,
        "ingredients": ["Paneer", "Milk", "Sugar", "Cardamom", "Saffron"],
        "tasteProfile": "sweet"
    },
    {
        "title": "Kachori",
        "image": {
            "filename": "listingimage",
            "url": "https://static.toiimg.com/thumb/55070757.cms?width=1200&height=900"
        },
        "price": 120,
        "calorie": 400,
        "fat": 10,
        "protein": 14,
        "ingredients": ["Flour", "Spices", "Lentils"],
        "tasteProfile": "spicy"
    },
    {
        "title": "Lassi",
        "image": {
            "filename": "listingimage",
            "url": "https://www.indianveggiedelight.com/wp-content/uploads/2023/01/sweet-lassi-recipe-featured.jpg"
        },
        "price": 140,
        "calorie": 430,
        "fat": 15,
        "protein": 17,
        "ingredients": ["Yogurt", "Sugar", "Cardamom", "Ice"],
        "tasteProfile": "sweet"
    },
    {
        "title": "Tandoori Chicken",
        "image": {
            "filename": "listingimage",
            "url": "https://sinfullyspicy.com/wp-content/uploads/2023/11/2-2.jpg"
        },
        "price": 160,
        "calorie": 460,
        "fat": 20,
        "protein": 20,
        "ingredients": ["Chicken", "Yogurt", "Spices", "Lemon"],
        "tasteProfile": "spicy"
    },
    {
        "title": "Idli",
        "image": {
            "filename": "listingimage",
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv9P6yCSHyTSC7V98SEc16fk7BeyJ37BNh8A&s"
        },
        "price": 100,
        "calorie": 520,
        "fat": 10,
        "protein": 26,
        "ingredients": ["Rice", "Lentils", "Fermentation"],
        "tasteProfile": "savory"
    },
    {
        "title": "Dum Aloo",
        "image": {
            "filename": "listingimage",
            "url": "https://sinfullyspicy.com/wp-content/uploads/2024/01/1200-by-1200-images-3.jpg"
        },
        "price": 140,
        "calorie": 400,
        "fat": 20,
        "protein": 11,
        "ingredients": ["Potatoes", "Spices", "Tomato", "Yogurt"],
        "tasteProfile": "spicy"
    },
    {
        "title": "Fish Curry",
        "image": {
            "filename": "listingimage",
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVt2p5bZiNhPJkbc0HHBaFgAvpHT4wUsUGQ&s"
        },
        "price": 160,
        "calorie": 430,
        "fat": 25,
        "protein": 14,
        "ingredients": ["Fish", "Coconut Milk", "Spices", "Onion"],
        "tasteProfile": "spicy"
    },
    {
        "title": "Naan",
        "image": {
            "filename": "listingimage",
            "url": "https://saltedmint.com/wp-content/uploads/2024/01/Naan-Bread-2.jpg"
        },
        "price": 80,
        "calorie": 460,
        "fat": 10,
        "protein": 17,
        "ingredients": ["Flour", "Yeast", "Water", "Yogurt"],
        "tasteProfile": "savory"
    }
];

module.exports = { data: sampleListings };