import { useState } from "react";
import OrderForm from "../Components/OrderForm";
import OrderTable from "../Components/OrderTable"

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    const newOrder = { ...order, id: orders.length + 1 };
    setOrders([...orders, newOrder]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-green-100 font-inter">
      <h2 className="text-xl font-bold text-green-700 mb-4">Orders</h2>
      <OrderForm onSubmit={addOrder} />
      <OrderTable data={orders} />
    </div>
  );
}
