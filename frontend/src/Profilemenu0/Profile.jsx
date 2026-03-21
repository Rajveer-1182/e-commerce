import React, { useContext } from "react";
import { authcontext } from "../context/Authcontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userDataContext } from '../context/userContext'

const Profile = () => {

  const { saveUrl } = useContext(authcontext);

  const { userData,setuserData } = useContext(userDataContext)
  const navigate = useNavigate();

  // Dummy user (replace with backend later)
  const user = {
    name: userData.name,
    email: userData.email,
    phone: userData.number,
  };

  // Logout Function
  const handleLogout = async () => {
    try {
      await axios.post(saveUrl + "/api/auth/logout", {}, { withCredentials: true });
      navigate("/login"); 
      setuserData(null)
      // redirect after logout
      toast.success("user logout")
    } catch (error) {
        console.log(error)
      toast.error("error in logout")
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-6">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          My Profile
        </h2>

        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <div className="h-24 w-24 rounded-full bg-black flex items-center justify-center text-3xl font-bold text-white">
           {user.name ? user.name.charAt(0) : "U"}
          </div>
        </div>

        {/* User Info */}
        <div className="space-y-4">
          
          <div>
            <label className="text-gray-500 text-sm">Full Name</label>
            <div className="bg-gray-100 p-3 rounded-lg mt-1 font-medium">
              {user.name}
            </div>
          </div>

          <div>
            <label className="text-gray-500 text-sm">Email</label>
            <div className="bg-gray-100 p-3 rounded-lg mt-1 font-medium">
              {user.email}
            </div>
          </div>

          <div>
            <label className="text-gray-500 text-sm">Phone</label>
            <div className="bg-gray-100 p-3 rounded-lg mt-1 font-medium">
              {user.phone}
            </div>
          </div>

        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full mt-6 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
        >
          Logout
        </button>

      </div>

    </div>
  );
};

export default Profile;