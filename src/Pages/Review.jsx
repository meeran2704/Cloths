import { useState } from "react";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      product: "Printed Shirt",
      rating: 4,
      comment: "Very good quality and fit.",
      status: "Pending",
    },
    {
      id: 2,
      name: "Priya K",
      product: "Cotton Kurti",
      rating: 5,
      comment: "Loved the color and comfort!",
      status: "Pending",
    },
    {
      id: 3,
      name: "Arun",
      product: "Formal Pants",
      rating: 2,
      comment: "Too tight for regular size.",
      status: "Pending",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    const updated = reviews.map((review) =>
      review.id === id ? { ...review, status: newStatus } : review
    );
    setReviews(updated);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col min-h-screen bg-green-100 font-inter">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Reviews & Ratings</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border shadow-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border px-4 py-2">Sl. No.</th>
              <th className="border px-4 py-2">Customer</th>
              <th className="border px-4 py-2">Product</th>
              <th className="border px-4 py-2">Rating</th>
              <th className="border px-4 py-2">Review</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((r, i) => (
              <tr key={r.id} className="bg-gray-50 border-b">
                <td className="border px-4 py-2">{i + 1}</td>
                <td className="border px-4 py-2">{r.name}</td>
                <td className="border px-4 py-2">{r.product}</td>
                <td className="border px-4 py-2">
                  {"⭐".repeat(r.rating)}{" "}
                  <span className="text-gray-400">({r.rating})</span>
                </td>
                <td className="border px-4 py-2">{r.comment}</td>
                <td className="border px-4 py-2">
                  <span
                    className={`text-xs px-2 py-1 rounded text-white ${
                      r.status === "Approved"
                        ? "bg-green-600"
                        : r.status === "Rejected"
                        ? "bg-red-600"
                        : "bg-yellow-500"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="border px-4 py-2 space-x-2">
                  <button
                    onClick={() => handleStatusChange(r.id, "Approved")}
                    className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleStatusChange(r.id, "Rejected")}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
            {reviews.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-400">
                  No reviews to display.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
