
// pages/DeliveryTracking/DeliveryTable.jsx

import { Link } from "react-router-dom";
import { useState } from "react";

export default function DeliveryTable() {
  const [deliveries] = useState([
    {
      id: 1,
      date: "07/12/2023",
      invoice: "62784675741",
      name: "Ramesh",
      location: "Coimbatore",
      contact: "99999 88888",
      products: 2,
      price: "Rs. 100",
      trackingId: "",
      trackingLink: "",
      deliveryPartner: "",
    },
    {
      id: 2,
      date: "07/12/2023",
      invoice: "62784675742",
      name: "Ajith",
      location: "Chennai",
      contact: "99999 77777",
      products: 1,
      price: "Rs. 200",
      trackingId: "BLR1250461437",
      trackingLink: "https://track.example.com/BLR1250461437",
      deliveryPartner: "Delhivery",
    },
  ]);

  return (
    <div className="p-6 flex flex-col min-h-screen bg-green-100 font-inter">
      <h2 className="text-xl font-bold mb-4 text-green-800">Delivery Tracking</h2>
      <div className="overflow-x-auto bg-white p-4 rounded shadow">
        <table className="min-w-full text-sm text-center border">
          <thead className="bg-gray-100">
            <tr>
              <th>Sl. no.</th>
              <th>Date</th>
              <th>Invoice</th>
              <th>Name</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Products</th>
              <th>Price</th>
              <th>Delivery Partner</th>
              <th>Tracking</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map((d, index) => (
              <tr key={d.id} className="border-t">
                <td>{index + 1}</td>
                <td>{d.date}</td>
                <td>{d.invoice}</td>
                <td>{d.name}</td>
                <td>{d.location}</td>
                <td>{d.contact}</td>
                <td>{d.products}</td>
                <td>{d.price}</td>
                <td>{d.deliveryPartner || '-'}</td>
                <td>
                  {d.trackingId ? (
                    <a
                      href={d.trackingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-700 underline"
                    >
                      Track
                    </a>
                  ) : (
                    <Link
                      to={`/delivery-tracking/${d.id}`}
                      className="text-blue-600 underline"
                    >
                      Enter ID
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

