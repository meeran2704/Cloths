import { useLocation, useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

export default function InvoicePage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const order = state?.order;

  if (!order) return <div className="p-8 text-center text-red-600">No Order Data Found</div>;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-green-800">Invoice</h2>
        <div className="space-x-2">
          <button onClick={handlePrint} className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Print</button>
          <button onClick={() => navigate(-1)} className="bg-gray-300 px-4 py-2 rounded">Back</button>
        </div>
      </div>

      <div ref={printRef} className="bg-white p-6 rounded shadow max-w-3xl mx-auto text-sm">
        <h3 className="text-lg font-semibold border-b pb-2 mb-4">.cloths Order Invoice</h3>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p><strong>Name:</strong> {order.name}</p>
            <p><strong>Location:</strong> {order.location}</p>
            <p><strong>Contact:</strong> {order.contact}</p>
          </div>
          <div>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Order ID:</strong> #{order.id}</p>
          </div>
        </div>

        <table className="w-full border text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Product</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Sub Category</th>
              <th className="border p-2">Qty</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">{order.product}</td>
              <td className="border p-2">{order.category}</td>
              <td className="border p-2">{order.subCategory}</td>
              <td className="border p-2">{order.quantity}</td>
              <td className="border p-2">Rs. {order.price}</td>
              <td className="border p-2 font-semibold">Rs. {order.total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
