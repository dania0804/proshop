import express from 'express';
import dotenv from 'dotenv' 
dotenv.config();
import products from './data/products.js'
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'


connectDB();
//const port = 5000;
const port = process.env.PORT;

const app = express();

/* app.get('/', (req, res) => {
     res.send('Api is running'); 
    });   */




app.use('/api/products', productRoutes);    
  
        
        
app.listen(port, ()=> console.log(`Server started on ${port}`));

