import { useState } from "react";

export default function OrderForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    location: "",
    contact: "",
    category: "Men",
    subCategory: "",
    product: "",
    quantity: 1,
    price: 100,
    status: "Dispatched",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, date: new Date().toLocaleDateString(), total: form.quantity * form.price });
    setForm({ ...form, name: "", location: "", contact: "", subCategory: "", product: "", quantity: 1 });
  };

  return (
    <div className="bg-green-100">
    <form onSubmit={handleSubmit} className="grid md:grid-cols-4 gap-4 bg-white p-4 rounded shadow">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Customer Name" className="border p-2 rounded" required />
      <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="border p-2 rounded" />
      <input name="contact" value={form.contact} onChange={handleChange} placeholder="Contact Number" className="border p-2 rounded" />
      <select name="category" value={form.category} onChange={handleChange} className="border p-2 rounded">
        <option>Men</option><option>Women</option><option>Kids</option><option>Accessories</option>
      </select>
      <input name="subCategory" value={form.subCategory} onChange={handleChange} placeholder="Sub Category" className="border p-2 rounded" />
      <input name="product" value={form.product} onChange={handleChange} placeholder="Product" className="border p-2 rounded" />
      <input type="number" name="quantity" value={form.quantity} onChange={handleChange} placeholder="Qty" className="border p-2 rounded" />
      <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price" className="border p-2 rounded" />
      <select name="status" value={form.status} onChange={handleChange} className="border p-2 rounded">
        <option>Dispatched</option><option>Cancelled</option>
      </select>
      <button type="submit" className="md:col-span-4 bg-green-700 text-white rounded py-2 hover:bg-green-800">Add Order</button>
    </form>
    </div>
  );
}
