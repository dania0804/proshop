import express from 'express';
import dotenv from 'dotenv' 
import cookieParser from 'cookie-parser';

import products from './data/products.js'
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js';

dotenv.config();
connectDB();
//const port = 5000;
const port = process.env.PORT;

const app = express();


//BODY parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cookie parser middleware
app.use(cookieParser());


/* app.get('/', (req, res) => {
     res.send('Api is running'); 
    });   */




app.use('/api/products', productRoutes);  
app.use('/api/users', userRoutes);  
  
        
        
app.listen(port, ()=> console.log(`Server started on ${port}`));

