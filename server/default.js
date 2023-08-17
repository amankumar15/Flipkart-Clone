
import { products } from './constants/data.js';
import Product from './model/product-schema.js';
const DefaultData=()=> {
  try{

    Product.insertMany(products)
    console.log('Data inserted Successfully');


  }catch(error){
    console.log('Error while inserting default data',error.message );
  }
}
 export default DefaultData


