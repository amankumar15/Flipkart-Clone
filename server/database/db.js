import mongoose from "mongoose";

export const Connection = async(USERNAME, PASSWORD)=>{

    // const username='user200'
    // const password="te1eSz7tczYqwGbd"
    // const databasaeName='ECOMMERCE'

    // const URL=`mongodb+srv://user200:te1eSz7tczYqwGbd@ecommerce.idxbuje.mongodb.net/`;
    const URL=`mongodb+srv://${USERNAME}:${PASSWORD}@ecommerce.idxbuje.mongodb.net/`;
    
    try{
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected Seccessfuly');
    }catch(error){
        console.log('Error while connecting with the database ', error.message);

    }


};

export default Connection;

