const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://fooddoo:Narayana8074@cluster0.qwyjdn1.mongodb.net/fooddoo?retryWrites=true&w=majority&appName=Cluster0'

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI,{useNewUrlParser:true});
    console.log('Connected!');
    const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
    global.food_items = fetched_data;
    const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
    global.foodCategory = foodCategory;
    
    console.log('Fetched data');
    console.log('foodCategory');
    
    
        

      }catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
    



module.exports = mongoDB;