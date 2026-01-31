import express from 'express';
import isAauth from '../middleware/isAuth.js';
import { addToCart, getUserCart, upDateCart } from '../controller/cartController.js';


const cartRoutes = express.Router();



cartRoutes.post('/add',isAauth, addToCart);
cartRoutes.post('/update', isAauth, upDateCart);
cartRoutes.post('/get', isAauth, getUserCart);

export default cartRoutes;