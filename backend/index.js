
import "./config/env.js"; 

// console.log("API KEY:", process.env.CLOUDINARY_API_KEY);
// console.log("KEY ID:", process.env.RAZORPAY_KEY_ID);

import express from 'express'
import connectDB from './config/db.js'
import cookieParser from 'cookie-parser'
import authRouter from './routes/authRouter.js'
import userRoutes  from './routes/userRoutes.js'
import cors from 'cors'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

const app = express()

connectDB();



// Allow CORS from the frontend origin(s).
// Update the list below (or set env vars) when you deploy to a new domain.
const allowedOrigins = [
  process.env.CLIENT_URL,
  process.env.CLIENT_URL_2,
  "http://localhost:5173",
  "http://localhost:5174",
  "https://e-commerce-livid-three-31.vercel.app",
  "https://e-commerce-o97j74kui-unknown9.vercel.app",
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error(`CORS policy does not allow access from origin ${origin}`));
  },
  credentials: true,
}));



app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRouter)
app.use('/api/user',userRoutes)
app.use('/api/product',productRoutes)

app.use('/api/cart/', cartRoutes);
app.use('/api/order/', orderRoutes);



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
