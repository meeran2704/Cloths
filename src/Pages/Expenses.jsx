import { useState, useEffect } from "react";

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "",
    amount: "",
    date: "",
    status: "Unpaid",
    description: "",
  });

  // Load from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem("expenses");
    if (saved) {
      setExpenses(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newExpense = { ...form };
    setExpenses([...expenses, newExpense]);
    setForm({
      title: "",
      category: "",
      amount: "",
      date: "",
      status: "Unpaid",
      description: "",
    });
    setShowForm(false);
  };

  const toggleStatus = (index) => {
    const updated = [...expenses];
    updated[index].status = updated[index].status === "Paid" ? "Unpaid" : "Paid";
    setExpenses(updated);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col min-h-screen bg-green-100 font-inter">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">Expenses</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add Expense
        </button>
      </div>

      {showForm && (
        <div className="bg-green-100 p-4 rounded mb-6 grid md:grid-cols-2 gap-4">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Expense Title"
            className="input border p-2 rounded"
          />
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            className="input border p-2 rounded"
          />
          <input
            name="amount"
            type="number"
            value={form.amount}
            onChange={handleChange}
            placeholder="Amount"
            className="input border p-2 rounded"
          />
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="input border p-2 rounded"
          />
          <input
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="input border p-2 rounded"
          />
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="input border p-2 rounded"
          >
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
          </select>
          <div className="col-span-full flex justify-end gap-4">
            <button
              className="text-red-500 border px-4 py-2 p-2 rounded"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
            <button
              className="bg-green-700 text-white px-4 py-2 rounded"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm text-left shadow-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border px-4 py-2">Sl. No.</th>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Amount</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Status</th>
            
            </tr>
          </thead>
          <tbody>
            {expenses.map((exp, i) => (
              <tr key={i} className="hover:bg-gray-50 border-b">
                <td className="px-4 py-2 border">{i + 1}</td>
                <td className="px-4 py-2 border">{exp.title}</td>
                <td className="px-4 py-2 border">{exp.category}</td>
                <td className="px-4 py-2 border">₹{exp.amount}</td>
                <td className="px-4 py-2 border">{exp.date}</td>
                <td className="px-4 py-2 border">{exp.description}</td>
                <td className="px-4 py-2 border">
                  <span
                    className={`px-2 py-1 rounded text-white text-xs ${
                      exp.status === "Paid" ? "bg-green-500" : "bg-yellow-500"
                    }`}
                  >
                    {exp.status}
                  </span>
                </td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => toggleStatus(i)}
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Toggle Status
                  </button>
                </td>
              </tr>
            ))}
            {expenses.length === 0 && (
              <tr>
                <td colSpan="7" className="bg-gray-100 text-center py-4 text-black">
                  No expenses added.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
