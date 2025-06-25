import { useState } from "react";

export default function ProductForm({ onAdd }) {
  const [form, setForm] = useState({
    code: "",
    category: "",
    subCategory: "",
    name: "",
    type: " ",
    price: "",
    gst: "",
    image: "",
    colour: "",
    size: "",
    status: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

   
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...form,
      postedOn: new Date().toLocaleDateString(),
    };
    onAdd(newProduct);
    setForm({
      code: "",
      category: "",
      subCategory: "",
      name: "",
      type: " ",
      price: "",
      gst: "",
       image: "",
    colour: "",
    size: "",
      status: "",
      action:"",
    });
    
    
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow grid md:grid-cols-3 gap-4">
      <input name="code" value={form.code} onChange={handleChange} placeholder="Product Code" className="border p-2 rounded " required />
        {/* <input name="code" value={form.postedon} onChange={handleSubmit} placeholder="Postedon" className="border p-2 rounded " required /> */}
      <select name="category" value={form.category} onChange={handleChange} className="border p-2 rounded">
        <option>Men</option><option>Women</option><option>Kids</option><option>Accessories</option>
      </select>
      <input name="subCategory" value={form.subCategory} onChange={handleChange} placeholder="Sub Category" className="border p-2 rounded" required />
       <input name="name" value={form.name} onChange={handleChange} placeholder="Product Name" className="border p-2 rounded" required />
       <input name="type" value={form.type} onChange={handleChange} placeholder="Product Type" className="border p-2 rounded" required />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" className="border p-2 rounded" required />
      <input name="gst" value={form.gst} onChange={handleChange} placeholder="GST" className="border p-2 rounded" required />
      <input name="colour" value={form.colour} onChange={handleChange} placeholder="Colour" className="border p-2 rounded" required />
      <input name="size" value={form.size} onChange={handleChange} placeholder="Size" className="border p-2 rounded" required />
      <select name="status" value={form.status} onChange={handleChange} className="border p-2 rounded">
        <option>Active</option><option>Inactive</option><option>Out of Stock</option>
      </select>
      <input name="action" value={form.action} onChange={handleChange} className="border p-2 rounded">
        
      </input>
      <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 md:col-span-3">Add Product</button>
    </form>
  );
}