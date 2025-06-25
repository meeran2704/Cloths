// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsAuthenticated }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();


  // ✅ Hardcoded admin credentials
  const ADMIN_EMAIL = "admin@cloths.com";
  const ADMIN_PASSWORD = "admin123";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.email === ADMIN_EMAIL &&
      form.password === ADMIN_PASSWORD
    ) {
      setIsAuthenticated(true);
      navigate("/");
    } else {
      alert("Access denied: Admin only");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          className="w-full border p-2 mb-4"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="w-full border p-2 mb-4"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="w-full bg-green-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}