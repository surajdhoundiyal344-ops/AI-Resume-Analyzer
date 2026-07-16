import { Link } from "react-router-dom";
import Layout from "../components/Layout";

import {
  FaUpload,
  FaChartLine,
  FaFileAlt,
  FaRobot,
  FaArrowRight,
} from "react-icons/fa";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function Dashboard() {

  const analysis = JSON.parse(localStorage.getItem("analysis"));

  const atsScore = analysis?.ats_score ?? 0;

  const doughnutData = {
    labels: ["ATS Score", "Remaining"],
    datasets: [
      {
        data: [atsScore, 100 - atsScore],
        backgroundColor: ["#06b6d4", "#1e293b"],
        borderWidth: 0,
      },
    ],
  };

  const barData = {
    labels: ["Contact", "Sections", "Skills", "Resume"],
    datasets: [
      {
        data: [
          analysis?.breakdown?.contact ?? 0,
          analysis?.breakdown?.sections ?? 0,
          analysis?.breakdown?.skills ?? 0,
          analysis?.breakdown?.resume ?? 0,
        ],
        backgroundColor: [
          "#06b6d4",
          "#3b82f6",
          "#22c55e",
          "#facc15",
        ],
        borderRadius: 8,
      },
    ],
  };

  return (

    <Layout>

     <div className="w-full px-6 lg:px-12 xl:px-16 py-10">

        <h1 className="text-5xl font-bold mb-3">
          Dashboard
        </h1>

        <p className="text-slate-400 mb-10">
          Welcome back! View your latest resume analysis.
        </p>
                {/* Stats Cards */}

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <FaChartLine className="text-cyan-400 text-4xl mb-4" />

            <p className="text-slate-400">
              ATS Score
            </p>

            <h2 className="text-5xl font-bold text-cyan-400 mt-4">
              {atsScore}%
            </h2>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <FaFileAlt className="text-green-400 text-4xl mb-4" />

            <p className="text-slate-400">
              Skills Found
            </p>

            <h2 className="text-5xl font-bold text-green-400 mt-4">
              {analysis?.skills_found?.length ?? 0}
            </h2>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <FaRobot className="text-purple-400 text-4xl mb-4" />

            <p className="text-slate-400">
              AI Suggestions
            </p>

            <h2 className="text-5xl font-bold text-purple-400 mt-4">
              {analysis?.suggestions?.length ?? 0}
            </h2>

          </div>

        </div>

        {/* Action Buttons */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

            <h2 className="text-3xl font-bold mb-4">
              Upload New Resume
            </h2>

            <p className="text-slate-400 mb-8">
              Upload another resume and get a fresh ATS analysis.
            </p>

            <Link
              to="/upload"
              className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 px-6 py-4 rounded-xl transition"
            >
              <FaUpload />
              Upload Resume
            </Link>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

            <h2 className="text-3xl font-bold mb-4">
              Open Analysis
            </h2>

            <p className="text-slate-400 mb-8">
              View your complete ATS report.
            </p>

            <Link
              to="/analysis"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 px-6 py-4 rounded-xl transition"
            >
              <FaArrowRight />
              View Analysis
            </Link>

          </div>

        </div>
                {/* Charts */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              ATS Score Overview
            </h2>

            <div className="max-w-sm mx-auto">

              <Doughnut
                data={doughnutData}
                options={{
                  responsive: true,
                  cutout: "70%",
                  plugins: {
                    legend: {
                      position: "bottom",
                      labels: {
                        color: "#ffffff",
                      },
                    },
                  },
                }}
              />

            </div>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Resume Breakdown
            </h2>

            <Bar
              data={barData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 40,
                    ticks: {
                      color: "#ffffff",
                    },
                    grid: {
                      color: "#334155",
                    },
                  },
                  x: {
                    ticks: {
                      color: "#ffffff",
                    },
                    grid: {
                      color: "#334155",
                    },
                  },
                },
              }}
            />

          </div>

        </div>

        {/* Summary */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mt-10">

          <h2 className="text-2xl font-bold mb-6">
            Latest Summary
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div>

              <p className="text-slate-400">
                ATS Score
              </p>

              <h3 className="text-4xl font-bold text-cyan-400 mt-2">
                {atsScore}%
              </h3>

            </div>

            <div>

              <p className="text-slate-400">
                Skills Found
              </p>

              <h3 className="text-4xl font-bold text-green-400 mt-2">
                {analysis?.skills_found?.length ?? 0}
              </h3>

            </div>

            <div>

              <p className="text-slate-400">
                AI Suggestions
              </p>

              <h3 className="text-4xl font-bold text-purple-400 mt-2">
                {analysis?.suggestions?.length ?? 0}
              </h3>

            </div>

          </div>

        </div>

      </div>

    </Layout>

  );

}

export default Dashboard;