import User from '../model/userModel.js';


export const addToCart = async (req , res)=>{
       try {
        const {itemId, sizes} = req.body;

        const userData = await User.findById(req.userID);

        // check if user already not exist 

        if(!userData){
            return res.status(400).json({message : "User not found"});
        }

        // check if cart already exist

        let cartData = userData.cartData || {};

        if(cartData[itemId]){
            if(cartData[itemId][sizes]){
                cartData[itemId][sizes] += 1;
            } else{
                cartData[itemId][sizes] = 1;
            }
        } else{
            cartData[itemId] = {};
            cartData[itemId][sizes] = 1;
        }

        await User.findByIdAndUpdate(req.userID, { cartData});
        return res.status(200).json({message : "Item added to cart successfully", cartData});
       } catch (error) {
         return res.status(500).json({message : "Internal server error"});
       }
}



export const upDateCart = async (req, res) => {
  try {
    const { itemId, size, quantity } = req.body;

    const userData = await User.findById(req.userID);
    let cartData = userData.cartData || {};

    // if (!cartData[itemId]) {
    //   cartData[itemId] = {};
    // }

    cartData[itemId][size] = quantity;

    await User.findByIdAndUpdate(req.userID, { cartData });

    return res.status(200).json({
      message: "Cart updated successfully",
      cartData
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Update cart internal server error" });
  }
};




export const getUserCart = async (req, res) => {
  try {
    const userData = await User.findById(req.userID);

    // if (!userData) {
    //   return res.status(400).json({ message: "User not found" });
    // }
  //  cartData ke throught userData me se cartData le rahe hai
    let cartData = userData.cartData || {};

    return res.status(200).json(cartData );

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Get user cart internal server error" });
  }
};

