
require('dotenv').config();
const mongoose = require('mongoose');
const db= async ()=>{
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Db connected');

    }
    catch(error){
      console.log('Error connecting',error.message);
    }
}
module.exports={ db };
