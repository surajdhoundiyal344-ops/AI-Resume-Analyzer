import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import Layout from "../components/Layout";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

      const response = await api.post("/auth/login", formData);

      localStorage.setItem("token", response.data.access_token);

      alert(response.data.message);

      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.detail);
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
            Login
          </h2>

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
            {loading ? "Logging In..." : "Login"}
          </button>

          <p className="text-center mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-cyan-400">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}

export default Login;