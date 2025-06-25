import { useState } from "react";

export default function AdvertisementPage() {
  const [ads, setAds] = useState([]);
  const [form, setForm] = useState({
    category: "",
    heading: "",
    content: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const resetForm = () => {
    setForm({ category: "", heading: "", content: "", image: null });
    setImagePreview(null);
    setEditingIndex(null);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setForm({ ...form, image: file });
      setImagePreview(file ? URL.createObjectURL(file) : null);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = () => {
    if (!form.category || !form.heading || !form.content || !form.image) return;

    const newAd = {
      ...form,
      id: Date.now(),
      preview: imagePreview,
    };

    if (editingIndex !== null) {
      const updated = [...ads];
      updated[editingIndex] = newAd;
      setAds(updated);
    } else {
      setAds([...ads, newAd]);
    }

    resetForm();
  };

  const handleEdit = (index) => {
    const ad = ads[index];
    setForm({
      category: ad.category,
      heading: ad.heading,
      content: ad.content,
      image: ad.image,
    });
    setImagePreview(ad.preview);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...ads];
    updated.splice(index, 1);
    setAds(updated);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col min-h-screen bg-green-100 font-inter">
      <h1 className="text-2xl font-bold mb-6">Advertisement Manager</h1>

      {/* Form */}
      <div className="bg-gray-100 p-6 rounded mb-6 grid md:grid-cols-2 gap-4">
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Product Category"
          className="input border p-3 rounded"
        />
        <input
          name="heading"
          value={form.heading}
          onChange={handleChange}
          placeholder="Heading"
          className="input border p-3 rounded"
        />
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Content"
          className="input md:col-span-2 border p-3 rounded"
        />
        <input
          name="image"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="input border p-3 rounded   "
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-32 h-32 object-cover rounded border"
          />
        )}
        <div className="col-span-full flex justify-end gap-4 mt-2">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={resetForm}
          >
            Discard
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            {editingIndex !== null ? "Update" : "Upload"}
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ads.map((ad, index) => (
          <div
            key={ad.id}
            className="bg-gray-50 p-4 rounded shadow-md border flex flex-col"
          >
            {ad.preview && (
              <img
                src={ad.preview}
                alt="Product"
                className="w-full h-48 object-cover rounded mb-3"
              />
            )}
            <div className="mb-2">
              <p className="text-sm text-gray-500">{ad.category}</p>
              <h2 className="font-bold text-lg">{ad.heading}</h2>
              <p className="text-gray-700 mt-1 text-sm">{ad.content}</p>
            </div>
            <div className="mt-auto flex justify-end gap-2">
              <button
                onClick={() => handleEdit(index)}
                className="bg-yellow-500 text-white px-3 py-1 text-xs rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white px-3 py-1 text-xs rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {ads.length === 0 && (
          <div className="text-gray-400 text-sm col-span-full text-center py-12">
            No advertisements added yet.
          </div>
        )}
      </div>
    </div>
  );
}
