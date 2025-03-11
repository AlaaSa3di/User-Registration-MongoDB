import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">Home </Link>
        <div className="space-x-4">
          <Link to="/orders" className="hover:underline">My order</Link>
          <Link to="/create-order" className="hover:underline">Create New Order</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
