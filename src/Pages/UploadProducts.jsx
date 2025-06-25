import { useState } from "react";


export default function UploadProducts() {
  const [products, setProducts] = useState([]);
 
  const [form, setForm] = useState({
    code: "",
    category: "",
    subCategory: "",
    name: "",
    type: "",
    price: "",
    gst: "",
    image: "",
    colour: "",
    size: "",
    quantity: "",
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
    setProducts([...products, form]);
    onAdd(newProduct)
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
    <div className=" p-6 max-w-full mx-auto flex flex-col min-h-screen bg-green-100 font-inter">
      <h2 className="text-2xl font-semibold text-green-800 mb-4">Add New Product</h2>
     
      
      {/* Form Section */}
      {/* <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4 bg-white p-4 shadow rounded">
       
        <div>
          <label className="block font-medium">Product Code</label>
          <input name="code" value={form.code} onChange={handleChange} className="border rounded px-2 py-1 w-full" required />
        </div>
         
          

        <div>
          <label className="block font-medium">Product Category</label>
          <select name="category" value={form.category} onChange={handleChange} className="border rounded px-2 py-1 w-full">
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
            <option>Accessories</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Sub Category</label>
          <input name="subCategory" value={form.subCategory} onChange={handleChange} className="border rounded px-2 py-1 w-full" required />
        </div>

        <div>
          <label className="block font-medium">Product Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="border rounded px-2 py-1 w-full" required />
        </div>

        <div>
          <label className="block font-medium">Product Type</label>
          <select name="type" value={form.type} onChange={handleChange} className="border rounded px-2 py-1 w-full">
            <option>Western Wear</option>
            <option>Traditional Wear</option>
            <option>Sports Wear</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Price</label>
          <input name="price" value={form.price} onChange={handleChange} className="border rounded px-2 py-1 w-full" required />
        </div>

        <div>
          <label className="block font-medium">GST</label>
          <input name="gst" value={form.gst} onChange={handleChange} className="border rounded px-2 py-1 w-full" required />
        </div>

        <div>
          <label className="block font-medium">Image</label>
          <input type="file" className="w-full border rounded px-2 py-1" />
        </div>

        <div>
          <label className="block font-medium">Colour</label>
          <input type="color" name="colour" value={form.colour} onChange={handleChange} className="w-full h-10 border rounded" />
        </div>

        <div>
          <label className="block font-medium">Size</label>
          <input name="size" value={form.size} onChange={handleChange} className="border rounded px-2 py-1 w-full" required />
        </div>

        <div>
          <label className="block font-medium">Quantity</label>
          <input name="quantity" value={form.quantity} onChange={handleChange} className="border rounded px-2 py-1 w-full" required />
        </div>
         <select name="status" value={form.status} onChange={handleChange} className="border px-2 py-1 rounded">
        <option>Active</option><option>Inactive</option><option>Out of Stock</option>
      </select>

        <div className="flex gap-2 items-end mt-4">
          <button type="button" className="text-red-200 font-medium px-4 py-2 rounded hover:bg-red-800">Discard</button>
          <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Continue</button>
        </div>

      </form> */}
       <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow grid md:grid-cols-3 gap-4">
      <input name="code" value={form.code} onChange={handleChange} placeholder="Product Code" className="border p-2 rounded " required />
        {/* <input name="code" value={form.postedon} onChange={handleSubmit} placeholder="Postedon" className="border p-2 rounded " required /> */}
      <select name="category" value={form.category} onChange={handleChange} className="border p-2 rounded">
        <option>Men</option><option>Women</option><option>Kids</option><option>Accessories</option>
      </select>
      <input name="subCategory" value={form.subCategory} onChange={handleChange} placeholder="Sub Category" className="border p-2 rounded" required />
       <input name="name" value={form.name} onChange={handleChange} placeholder="Product Name" className="border p-2 rounded" required />
       <select name="type" value={form.type} onChange={handleChange} placeholder="Product Type" className="border p-2 rounded" required>
       
            <option>Western Wear</option>
            <option>Traditional Wear</option>
            <option>Sports Wear</option>
          </select>
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" className="border p-2 rounded" required />
      <input name="gst" value={form.gst} onChange={handleChange} placeholder="GST" className="border p-2 rounded" required />
      <input  name="colour" value={form.colour} onChange={handleChange} placeholder="Colour" className=" w-full h-10 rounded border p-2 " required />
       <input type="file" value={form.image} onChange={handleChange} placeholder="Image" className="w-full border rounded px-2 py-1" />
      <input  name="size" value={form.size} onChange={handleChange} placeholder="Size" className="border p-2 rounded" required />
      <select name="status" value={form.status} onChange={handleChange} className="border p-2 rounded">
        <option className="text-black font-medium px-4 py-2 rounded hover:bg-green-500">Active</option>
        <option className="text-black font-medium px-4 py-2 rounded hover:bg-red-500">Inactive</option>
        <option className="text-black font-medium px-4 py-2 rounded hover:bg-yellow-500">Out of Stock</option>
      </select>
      {/* <input name="action" value={form.action} onChange={handleChange} className="border p-2 rounded">
        
      </input> */}
      <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 md:col-span-3">Add Product</button>
    </form>
    

      {/* Product Table */}
      {products.length > 0 && (
        <div className="mt-8 bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Uploaded Products</h3>
          <table className="w-full text-sm border">
            <thead>
              <tr className="bg-gray-100">
                <th>SI.No</th>
                <th>Posted on</th>
                <th >Product Code</th>
                <th>Category</th>
                <th>Sub Category</th>
                <th>P Name</th>
                <th>P Type</th>
                <th>Price</th>
                <th>GST</th>
                <th>Colour</th>
                <th>Size</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod, i) => (
                <tr key={i} className="border-t">
                    <td>{prod.sNO}</td>
                    <td>{prod.postedon}</td>
                  <td>{prod.productcode}</td>
                  <td>{prod.category}</td>
                  <td>{prod.subcategory}</td>
                  <td>{prod.pname}</td>
                  <td>{prod.type}</td>
                  <td>{prod.price}</td>
                  <td>{prod.gst}</td>
                  <td>{prod.colour}</td>
                  <td>{prod.size}</td>
                  <td>{prod.status}</td>
                  <td>{prod.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

