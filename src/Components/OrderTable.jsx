import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

export default function OrderTable({ data }) {
  return (
    <div className="overflow-x-auto bg-white p-4 rounded shadow mt-4">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th>Sl.No</th><th>Date</th><th>Name</th><th>Product</th><th>Qty</th><th>Total</th><th>Status</th><th>Invoice</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order, i) => (
            <tr key={i} className="text-center border-t">
              <td>{i + 1}</td>
              <td>{order.date}</td>
              <td>{order.name}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>Rs. {order.total}</td>
              <td className={order.status === "Dispatched" ? "text-green-600" : "text-red-600"}>{order.status}</td>
              <td>
                <Link to={`/invoice/${order.id}`} state={{ order }}>
                  <FileText className="text-blue-600 hover:text-blue-800" size={18} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
