import express from 'express';

import {getProducts, getProduct,deleteProduct} from '../controllers/productController.js'


const router = express.Router();


// GET all workouts
router.route('/').get(getProducts);

// GET a single workout
router.route('/:id').get(getProduct);
router.route('/:id').delete(deleteProduct);

export default router;