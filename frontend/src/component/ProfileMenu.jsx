import { Link } from "react-router-dom";
import { useState } from "react";
import login1 from "../assets/login1.jpg"

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
     
      <Link to="/login">
<div className="flex items-center gap-1 group cursor-pointer">
  <img
    src={login1}
    alt="login"
    className="h-10 w-10"
  />

  <i
    className="
      ri-arrow-down-s-line
      hidden md:inline-block
      transition-transform
      duration-300
      group-hover:rotate-180
    "
  ></i>
</div>
      </Link>

     
      {open && (
       <div className="absolute right-0 mt-3 w-60 rounded-xl bg-white 
                shadow-lg z-50 overflow-hidden">

 
  <Link
    to="/registration"
    className="block px-6 py-4 text-lg font-semibold 
               hover:bg-gray-100 transition"
  >
   <b>not regsiter <span className="underline font-bold color-green"> Click here</span>
    </b>
  </Link>

  <hr />

  <Link
    to="/my-profile"
    className="block px-6 py-3 hover:bg-gray-100 transition"
  >
    My Profile
  </Link>

  <Link
    to="/orders"
    className="block px-6 py-3 hover:bg-gray-100 transition"
  >
    Orders
  </Link>

  <Link
    to="/wishlist"
    className="block px-6 py-3 hover:bg-gray-100 transition"
  >
    Wishlist
  </Link>

  <Link
    to="/gift-cards"
    className="block px-6 py-3 hover:bg-gray-100 transition"
  >
    Gift Cards
  </Link>
</div>


      )}
    </div>
  );
};

export default ProfileMenu;
