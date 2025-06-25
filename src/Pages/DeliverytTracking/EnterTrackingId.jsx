

// pages/DeliveryTracking/EnterTrackingId.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EnterTrackingId() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    trackingId: "",
    trackingLink: "",
    deliveryPartner: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tracking ID "${form.trackingId}" saved for Order ID ${id}`);
    navigate("/delivery-tracking");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-green-800 mb-4">Enter Tracking ID</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
        <div>
          <label className="block text-sm">Tracking ID</label>
          <input
            name="trackingId"
            value={form.trackingId}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Tracking Link</label>
          <input
            name="trackingLink"
            value={form.trackingLink}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm">Delivery Partner</label>
          <select
            name="deliveryPartner"
            value={form.deliveryPartner}
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="">Select</option>
            <option>Delhivery</option>
            <option>DTDC</option>
            <option>BlueDart</option>
            <option>Ekart</option>
          </select>
        </div>
        <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">
          Save
        </button>
      </form>
    </div>
  );
}