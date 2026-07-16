import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import clsx from "clsx";

import {
  Bot,
  Home,
  Upload,
  BarChart3,
  LogOut,
  LogIn,
  UserPlus,
  LayoutDashboard,
  UserCircle2,
} from "lucide-react";

function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("analysis");
    navigate("/");
  };

  const navItem = (path) =>
    clsx(
      "relative flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300",
      location.pathname === path
        ? "text-white"
        : "text-slate-400 hover:text-cyan-300 hover:bg-white/10"
    );

  return (

    <motion.header

      initial={{ y: -80, opacity: 0 }}

      animate={{ y: 0, opacity: 1 }}

      transition={{
        duration: 0.6,
      }}

      className="sticky top-5 z-50"

    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="backdrop-blur-2xl bg-white/5 border border-white/20 rounded-2xl shadow-2xl">

          <div className="flex items-center justify-between px-8 py-4">

            {/* LOGO */}

            <Link
              to="/"
              className="flex items-center gap-4"
            >

              <motion.div

                whileHover={{
                  rotate: 10,
                  scale: 1.08,
                }}

                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-xl shadow-cyan-500/30"

              >

                <Bot size={28} />

              </motion.div>

              <div>

                <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">

                  AI Resume Analyzer

                </h1>

                <p className="text-xs text-slate-400">

                  Smart ATS Scanner

                </p>

              </div>

            </Link>
                        {/* RIGHT SIDE */}

            {!token ? (

              <div className="flex items-center gap-3">

                <Link
                  to="/"
                  className={navItem("/")}
                >
                  <Home size={18} />
                  Home

                  {location.pathname === "/" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-cyan-500/20 border border-cyan-400/30 -z-10"
                    />
                  )}

                </Link>

                <Link
                  to="/login"
                  className={navItem("/login")}
                >
                  <LogIn size={18} />
                  Login

                  {location.pathname === "/login" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-cyan-500/20 border border-cyan-400/30 -z-10"
                    />
                  )}

                </Link>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>

                  <Link
                    to="/signup"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/30 transition"
                  >
                    <UserPlus size={18} />
                    Signup
                  </Link>

                </motion.div>

              </div>

            ) : (

              <div className="flex items-center gap-3">

                <Link
                  to="/dashboard"
                  className={navItem("/dashboard")}
                >
                  <LayoutDashboard size={18} />
                  Dashboard

                  {location.pathname === "/dashboard" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-cyan-500/20 border border-cyan-400/30 -z-10"
                    />
                  )}

                </Link>

                <Link
                  to="/upload"
                  className={navItem("/upload")}
                >
                  <Upload size={18} />
                  Upload

                  {location.pathname === "/upload" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-cyan-500/20 border border-cyan-400/30 -z-10"
                    />
                  )}

                </Link>

                <Link
                  to="/analysis"
                  className={navItem("/analysis")}
                >
                  <BarChart3 size={18} />
                  Analysis

                  {location.pathname === "/analysis" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-cyan-500/20 border border-cyan-400/30 -z-10"
                    />
                  )}

                </Link>

                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10">

                  <UserCircle2
                    size={22}
                    className="text-cyan-400"
                  />

                  <span className="text-slate-300">
                    User
                  </span>

                </div>

                <motion.button

                  whileHover={{
                    scale: 1.05,
                  }}

                  whileTap={{
                    scale: 0.95,
                  }}

                  onClick={logout}

                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-400 hover:to-rose-500 shadow-lg shadow-red-500/30"

                >

                  <LogOut size={18} />

                  Logout

                </motion.button>

              </div>

            )}
                      </div>

        </div>

      </div>

    </motion.header>

  );

}

export default Navbar;