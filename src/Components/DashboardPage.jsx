import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", sales: 300 },
  { day: "Tue", sales: 500 },
  { day: "Wed", sales: 350 },
  { day: "Thu", sales: 400 },
  { day: "Fri", sales: 300 },
  { day: "Sat", sales: 450 },
  { day: "Sun", sales: 500 },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-green-100 p-4">
      {/* Header Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          ["500", "Mens"],
          ["660", "Women"],
          ["400", "Kids"],
          ["250", "Accessories"],
        ].map(([count, label], i) => (
          <div
            key={i}
            className="bg-white p-4 rounded shadow text-center border"
          >
            <div className="text-2xl font-bold">{count}</div>
            <div className="text-gray-600">{label}</div>
          </div>
        ))}
      </div>

      {/* Sales & Revenue */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Sales Graph */}
        <div className="bg-white p-4 rounded shadow border">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold">Sales Graph</h2>
            <select className="border p-1 rounded text-sm">
              <option>Week</option>
              <option>Month</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue */}
        <div className="bg-white p-4 rounded shadow border">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold">Revenue</h2>
            <select className="border p-1 rounded text-sm">
              <option>Today</option>
              <option>This Week</option>
            </select>
          </div>
          <div className="space-y-2">
            {["Mens", "Womens", "Kids", "Accessories"].map((cat, idx) => (
              <div key={idx} className="flex justify-between">
                <span>{cat}</span>
                <span className="font-medium text-green-600">Rs.{(idx + 1) * 10000}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Orders & Low Stock */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Orders */}
        <div className="bg-white p-4 rounded shadow border">
          <div className="flex justify-between mb-2">
            <h2 className="text-lg font-semibold">Orders</h2>
            <button className="text-green-600 text-sm">View All</button>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th>Sl. no.</th>
                <th>Name</th>
                <th>Location</th>
                <th>Mobile</th>
                <th>Products</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["01", "Praveen", "Coimbatore", "87567 81291", "Shoe"],
                ["02", "Gokul", "Nagercoil", "98854 57248", "Pant"],
                ["03", "Priya", "Tirunelveli", "74584 98756", "Top"],
                ["04", "Angel", "Chennai", "43854 76289", "Saree"],
                ["05", "Aboitha", "Madurai", "91857 83241", "Kurti"],
              ].map(([sl, name, loc, mobile, prod], i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td>{sl}</td>
                  <td>{name}</td>
                  <td>{loc}</td>
                  <td>{mobile}</td>
                  <td>{prod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Low Stock */}
        <div className="bg-white p-4 rounded shadow border">
          <h2 className="text-lg font-semibold mb-2">Low Stock</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th>Code</th>
                <th>Product</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["26747", "Saree", 8],
                ["26757", "Leggings", 12],
                ["26767", "Tops", 5],
                ["26777", "Hand kerchief", 10],
                ["26787", "Nighty", 15],
              ].map(([code, product, qty], i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td>{code}</td>
                  <td>{product}</td>
                  <td className="text-red-600 font-medium">{qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Expenses */}
      <div className="bg-white p-4 rounded shadow border">
        <div className="flex justify-between mb-2">
          <h2 className="text-lg font-semibold">Expense</h2>
          <button className="text-green-600 text-sm">View All</button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th>Sl. no.</th>
              <th>Date</th>
              <th>Category</th>
              <th>Sub Category</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["01", "10/11/2023", "Plumbing", "Taps, Pipes", "Rs.1200", "Paid"],
              ["02", "12/11/2023", "Painting", "Paint brush", "Rs.600", "Unpaid"],
              ["03", "13/11/2023", "Carpentry", "Wood", "Rs.800", "Paid"],
              ["04", "13/11/2023", "Transport", "Diesel", "Rs.1000", "Unpaid"],
              ["05", "17/11/2023", "Electrical", "Wires", "Rs.1200", "Paid"],
            ].map(([sl, date, cat, sub, amt, stat], i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td>{sl}</td>
                <td>{date}</td>
                <td>{cat}</td>
                <td>{sub}</td>
                <td>{amt}</td>
                <td
                  className={
                    stat === "Paid" ? "text-green-600 font-medium" : "text-red-500 font-medium"
                  }
                >
                  {stat}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
