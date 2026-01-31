import uploadCloudinary from "../config/cloudinary.js";
import Product from "../model/productModel.js";

export const addProduct = async (req, res) => {
  try {
    // ✅ 1. Get data from req.body
    const {
      name, Description, sizes, price, category, SubCategory, bestSeller,date} = req.body;

    // ✅ 2. Validate price
    const numericPrice = Number(price);
    if (!price || isNaN(numericPrice)) {
      return res.status(400).json({
        message: "Price must be a valid number",
      });
    }

    // ✅ 3. Validate images
    if (
      !req.files?.image1 ||
      !req.files?.image2 ||
      !req.files?.image3 ||
      !req.files?.image4
    ) {
      return res.status(400).json({ message: "All images are required" });
    }

    // ✅ 4. Upload images
    const image1 = await uploadCloudinary(req.files.image1[0].path);
    const image2 = await uploadCloudinary(req.files.image2[0].path);
    const image3 = await uploadCloudinary(req.files.image3[0].path);
    const image4 = await uploadCloudinary(req.files.image4[0].path);

    // ✅ 5. Create product object
    const productData = {
      name,
      Description,
      sizes: typeof sizes === "string" ? JSON.parse(sizes) : sizes,
      price: numericPrice,
      category,
      SubCategory,
      bestSeller: bestSeller === "true",
      image1,
      image2,
      image3,
      image4,
      date
    };

    // ✅ 6. Save to DB
    const product = await Product.create(productData);
        //  console.log(product)
    return res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    console.error("Add product error:", error);
    return res.status(500).json({
      message: "Internal Server Error while adding product",
    });
  }
};

export const listProduct = async(req, res)=>{
  try {
    const product = await Product.find({})
       return res.status(200).json(product);

  } catch (error) {
     console.error("List  product error:", error);
    return res.status(500).json({
      message: "Internal Server Error while listing product",
    });
  }
};


export const removeProduct  = async(req, res)=>{
try {
  let {id} = req.params;
  const product = await Product.findByIdAndDelete(id)
       return res.status(200).json(product);

} catch (error) {
     return res.status(500).json({
      message: "Internal Server Error while remove product error product",
    });
}
}