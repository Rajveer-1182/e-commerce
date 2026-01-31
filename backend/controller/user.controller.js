import User from '../model/userModel.js'

export const getCurrentUser = async (req, res) => {
  try {

    console.log(req.userID +"in get current user")
    const users = await User.findById(req.userID).select("-password");
     
    //  console.log(users ,+ " error in the get curret user")

    if (!users) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    return res.status(200).json(users);

  } catch (error) {
    console.log("get current user error", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getAdmin = async(req, res)=>{
    try {
      let adminEmail = req.adminEmail;
      if(!adminEmail){
          return res.status(404).json({
        message: "admin not found"
      });
      }
       return res.status(201).json({
       email:adminEmail,
       role:"admin"
       })

    } catch (error) {
          console.log("get admin error user error", error);
    return res.status(500).json({ message: " admin erroServer error" });
  
    }
}
