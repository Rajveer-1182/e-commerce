import express from 'express'
import { addProduct, listProduct, removeProduct } from '../controller/productController.js'
import upload from '../middleware/Multer.js'
import adminAuth from "../middleware/adminAuth.js"

const productRoutes = express.Router()

productRoutes.post(
  "/addproduct",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
)
// for getting the list of product
productRoutes.get("/list", listProduct)
// to create post request , we take the id from params so we http method use post
productRoutes.post("/remove/:id",adminAuth,removeProduct)


export default productRoutes
