import React from "react";

const OrderItem = ({ order }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold">Order Id: {order._id}</h2>
      <p className="text-gray-600">Status: {order.status}</p>
      <p className="text-gray-600">Total: {order.totalAmount.toFixed(2)}JD</p>
      <ul className="mt-2">
        {order.products.map((product, index) => (
          <li key={index} className="text-sm text-gray-700">
            {product.name} - {product.quantity} × {product.price}JD
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderItem;
