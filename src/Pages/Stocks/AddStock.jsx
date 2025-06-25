import { useState } from "react";

export default function stocks() {
  const [stocks, setStocks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    code: "",
    category: "",
    subCategory: "",
    name: "",
    type: "",
    price: "",
    gst: "10%",
    variants: [{ color: "#800000", size: "S", quantity: "10" }],
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleVariantChange = (index, key, value) => {
    const updatedVariants = [...form.variants];
    updatedVariants[index][key] = value;
    setForm({ ...form, variants: updatedVariants });
  };

  const addVariant = () => {
    setForm({
      ...form,
      variants: [...form.variants, { color: "#000000", size: "", quantity: "" }],
    });
  };

  const handleSubmit = () => {
    const newStock = { ...form, updated: new Date().toLocaleDateString("en-GB") };
    setStocks([...stocks, newStock]);
    setForm({
      code: "",
      category: "",
      subCategory: "",
      name: "",
      type: "",
      price: "",
      gst: "10%",
      variants: [{ color: "#800000", size: "S", quantity: "10" }],
    });
    setShowForm(false);
  };

  const updateQuantity = (index) => {
    const qty = prompt("Enter new quantity:");
    if (qty && !isNaN(qty)) {
      const updatedStocks = [...stocks];
      const totalQty = updatedStocks[index].variants.reduce(
        (sum, v) => sum + Number(v.quantity),
        0
      );
      const updatedTotal = Number(qty);
      const multiplier = updatedTotal / totalQty;

      updatedStocks[index].variants = updatedStocks[index].variants.map((v) => ({
        ...v,
        quantity: Math.round(v.quantity * multiplier),
      }));

      setStocks(updatedStocks);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-green-100 border-r min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Stocks</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + New Product
        </button>
      </div>

      {showForm && (
        <div className="flex flex-col min-h-screen bg-gray-100 font-inter p-6 rounded mb-6">
          <h3 className="text-lg font-semibold mb-4">Add Product</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input name="code" value={form.code} onChange={handleInputChange} placeholder="Product Code" className="input border p-2 rounded" />
            <input name="category" value={form.category} onChange={handleInputChange} placeholder="Product Category" className="input border p-2 rounded" />
            <input name="subCategory" value={form.subCategory} onChange={handleInputChange} placeholder="Sub Category" className="input border p-2 rounded" />
            <input name="name" value={form.name} onChange={handleInputChange} placeholder="Product Name" className="input border p-2 rounded" />
            <input name="type" value={form.type} onChange={handleInputChange} placeholder="Product Type" className="input border p-2 rounded" />
            <input name="price" value={form.price} onChange={handleInputChange} placeholder="Price" className="input border p-2 rounded" />
            <input name="gst" value={form.gst} onChange={handleInputChange} placeholder="GST" className="input border p-2 rounded" />
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-2">Available Colours, Sizes & Quantity</h4>
            {form.variants.map((v, i) => (
              <div key={i} className="grid grid-cols-4 gap-2 mb-2">
                <input
                  type="color"
                  value={v.color}
                  onChange={(e) => handleVariantChange(i, "color", e.target.value)}
                  className="border p-0 rounded"
                />
                <input
                  type="text"
                  value={v.size}
                  onChange={(e) => handleVariantChange(i, "size", e.target.value)}
                  placeholder="Size"
                  className="input border p-2 rounded"
                />
                <input
                  type="number"
                  value={v.quantity}
                  onChange={(e) => handleVariantChange(i, "quantity", e.target.value)}
                  placeholder="Qty"
                  className="input border p-2 rounded"
                />
                <button onClick={addVariant} className="text-sm text-blue-600 hover:underline">
                  + Add
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-4 gap-4">
            <button className="text-red-500 border px-4 py-2 rounded" onClick={() => setShowForm(false)}>
              Discard
            </button>
            <button className="bg-green-700 text-white px-4 py-2 rounded" onClick={handleSubmit}>
              Upload
            </button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm text-left shadow-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border px-4 py-2">Sl. No.</th>
              <th className="border px-4 py-2">Product Code</th>
              <th className="border px-4 py-2">Product</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Sub Category</th>
              <th className="border px-4 py-2">Updated</th>
              <th className="border px-4 py-2">Available Qty</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, i) => {
              const totalQty = stock.variants.reduce((sum, v) => sum + Number(v.quantity), 0);
              return (
                <tr key={i} className="hover:bg-gray-50 border-b">
                  <td className="px-4 py-2 border">{i + 1}</td>
                  <td className="px-4 py-2 border">{stock.code}</td>
                  <td className="px-4 py-2 border">{stock.name}</td>
                  <td className="px-4 py-2 border">{stock.category}</td>
                  <td className="px-4 py-2 border">{stock.subCategory}</td>
                  <td className="px-4 py-2 border">{stock.updated}</td>
                  <td className="px-4 py-2 border">{totalQty}</td>
                  <td className="px-4 py-2 border">
                    <button
                      className="text-blue-600 hover:underline text-sm"
                      onClick={() => updateQuantity(i)}
                    >
                      Add More
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
