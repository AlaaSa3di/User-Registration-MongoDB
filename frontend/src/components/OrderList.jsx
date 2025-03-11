import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderItem from './OrderItem';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get('http://localhost:8000/api/orders/user-orders', { withCredentials: true });
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Your Orders</h1>
      {orders.map(order => <OrderItem key={order._id} order={order} />)}
    </div>
  );
};

export default OrderList;