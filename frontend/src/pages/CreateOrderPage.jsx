import React, { useState } from "react";
import axios from "axios";

const CreateOrderPage = () => {
  const [products, setProducts] = useState([{ name: "", price: "", quantity: "" }]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };

  const addProduct = () => {
    setProducts([...products, { name: "", price: "", quantity: "" }]);
  };

  const removeProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await axios.post("http://localhost:8000/api/orders/create", { products }, { withCredentials: true });
      setMessage("The order was created successfully!");
      setProducts([{ name: "", price: "", quantity: "" }]);
    } catch (error) {
      console.error("Error creating order:", error);
      setMessage("Failed to create order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Order</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {products.map((product, index) => (
          <div key={index} className="flex space-x-2">
            <input
              type="text"
              placeholder="Product Name"
              value={product.name}
              onChange={(e) => handleProductChange(index, "name", e.target.value)}
              className="border p-2 w-1/3"
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={product.price}
              onChange={(e) => handleProductChange(index, "price", e.target.value)}
              className="border p-2 w-1/3"
              required
            />
            <input
              type="number"
              placeholder="Quantity"
              value={product.quantity}
              onChange={(e) => handleProductChange(index, "quantity", e.target.value)}
              className="border p-2 w-1/3"
              required
            />
            <button type="button" onClick={() => removeProduct(index)} className="text-red-500">✖</button>
          </div>
        ))}
        <button type="button" onClick={addProduct} className="bg-blue-500 text-white px-4 py-2 rounded">
          + Add Product
        </button>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          {loading ? "Sending..." : "Send Order"}
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default CreateOrderPage;
