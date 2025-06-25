import { useState } from "react";

export default function ProductTable({ data }) {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredData = data.filter(item => {
    const matchName = item.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = categoryFilter === "All" || item.category === categoryFilter;
    return matchName && matchCategory;
  });

  return (
    <div className="bg-white p-4 rounded shadow mt-6">
      {/* Filter + Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <input
          type="text"
          placeholder="Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full md:w-1/2"
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border p-2 rounded w-full md:w-1/4"
        >
          <option value="All">All Categories</option>
          <option>Men</option>
          <option>Women</option>
          <option>Kids</option>
          <option>Accessories</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">S.No</th>
              <th>Posted On</th>
              <th>Code</th>
              <th>Category</th>
              <th>Sub Category</th>
              <th>Product</th>
              <th>Price</th>
              <th>GST</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((prod, i) => (
                <tr key={i} className="border-t text-center">
                  <td className="p-2">{i + 1}</td>
                  <td>{prod.postedOn}</td>
                  <td>{prod.code}</td>
                  <td>{prod.category}</td>
                  <td>{prod.subCategory}</td>
                  <td>{prod.name}</td>
                  <td>{prod.type}</td>
                  <td>{prod.price}</td>
                  <td>{prod.gst}</td>
                  <td>{prod.colour}</td>
                  <td>{prod.size}</td>
                  
                  <td className={
                    prod.status === "Active" ? "text-green-600" :
                    prod.status === "Inactive" ? "text-yellow-600" : "text-red-600"
                  }>
                    {prod.status}
                  </td>
                  <td >{prod.action}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="9" className="p-4 text-center text-gray-500">No products found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
