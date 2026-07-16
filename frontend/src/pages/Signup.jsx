import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import Layout from "../components/Layout";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/auth/signup", formData);

      console.log("SUCCESS:", response.data);

      alert(response.data.message);

      navigate("/login");
    } catch (error) {
      console.log("ERROR:", error);
      console.log("RESPONSE:", error.response);
      console.log("DATA:", error.response?.data);

      if (error.response) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[90vh]">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-slate-900 p-8 rounded-xl border border-slate-800"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Create Account
          </h2>

          <div className="mb-5">
            <label className="block mb-2">Name</label>

            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2">Email</label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">Password</label>

            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition p-3 rounded-lg font-semibold"
          >
            {loading ? "Creating Account..." : "Signup"}
          </button>

          <p className="text-center mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-400">
              Login
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}

export default Signup;