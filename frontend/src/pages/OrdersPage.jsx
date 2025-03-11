import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderList from "../components/OrderList";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/orders/user-orders", {
          withCredentials: true,
        });
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Order</h1>
      {loading ? <p>Downloading...</p> : <OrderList orders={orders} />}
    </div>
  );
};

export default OrdersPage;
