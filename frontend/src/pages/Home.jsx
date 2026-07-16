import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaRobot,
  FaChartLine,
  FaBrain,
  FaCheckCircle,
  FaCloudUploadAlt,
  FaShieldAlt,
} from "react-icons/fa";

function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden min-h-screen">

        {/* Background */}

        <div className="absolute inset-0 bg-gradient-to-br from-[#050b18] via-[#081423] to-[#0f172a]" />

        <div className="absolute top-0 left-0 w-[650px] h-[650px] bg-cyan-500/10 rounded-full blur-[180px]" />

        <div className="absolute bottom-0 right-0 w-[650px] h-[650px] bg-indigo-600/10 rounded-full blur-[180px]" />

        <div className="relative max-w-[1500px] mx-auto px-6 pt-20 pb-24">

          <div className="grid lg:grid-cols-[1fr_0.95fr] gap-10 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">

                <FaRobot />

                AI Powered Resume Analyzer

              </div>

              <h1 className="mt-8 text-7xl font-black leading-[1.05]">

                Build a

                <br />

                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">

                  Recruiter Ready

                </span>

                <br />

                Resume

              </h1>

              <p className="mt-8 text-xl leading-10 text-slate-300 max-w-lg">

                Upload your resume and receive ATS score,
                recruiter feedback, missing skills,
                career recommendations and downloadable
                PDF report within seconds.

              </p>

              <div className="flex gap-5 mt-10">

                <Link
                  to="/upload"
                  className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
                >
                  Analyze Resume
                  <FaArrowRight />
                </Link>

                <Link
                  to="/login"
                  className="px-8 py-4 rounded-xl border border-slate-700 hover:border-cyan-400 transition"
                >
                  Login
                </Link>

              </div>

              <div className="grid grid-cols-3 gap-10 mt-16">

                <div>

                  <h2 className="text-5xl font-black text-cyan-400">
                    95%
                  </h2>

                  <p className="text-slate-400 mt-2">
                    ATS Accuracy
                  </p>

                </div>

                <div>

                  <h2 className="text-5xl font-black text-green-400">
                    10K+
                  </h2>

                  <p className="text-slate-400 mt-2">
                    Reports
                  </p>

                </div>

                <div>

                  <h2 className="text-5xl font-black text-indigo-400">
                    AI
                  </h2>

                  <p className="text-slate-400 mt-2">
                    Powered
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <div className="rounded-3xl border border-slate-700 bg-slate-900/70 backdrop-blur-xl p-8 shadow-2xl">

                <div className="flex justify-between items-center">

                  <div>

                    <h2 className="text-3xl font-bold">
                      Resume Evaluation
                    </h2>

                    <p className="text-slate-400 mt-2">
                      AI Generated Report
                    </p>

                  </div>

                  <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full">

                    Completed

                  </span>

                </div>

                <div className="flex justify-center mt-10">

                  <div className="relative w-60 h-60">

                    <svg className="w-full h-full -rotate-90">

                      <circle
                        cx="120"
                        cy="120"
                        r="96"
                        stroke="#1e293b"
                        strokeWidth="14"
                        fill="none"
                      />

                      <circle
                        cx="120"
                        cy="120"
                        r="96"
                        stroke="#22d3ee"
                        strokeWidth="14"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="603"
                        strokeDashoffset="48"
                      />

                    </svg>

                    <div className="absolute inset-0 flex flex-col justify-center items-center">

                      <h1 className="text-6xl font-black text-cyan-400">
                        92%
                      </h1>

                      <p className="text-slate-400">
                        ATS Score
                      </p>

                    </div>

                  </div>

                </div>

                <div className="space-y-6 mt-8">
                                    <div>

                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300">
                        Resume Formatting
                      </span>

                      <span className="text-cyan-400">
                        9.5 / 10
                      </span>

                    </div>

                    <div className="h-3 rounded-full bg-slate-700 overflow-hidden">

                      <div
                        className="h-full bg-cyan-400 rounded-full"
                        style={{ width: "95%" }}
                      />

                    </div>

                  </div>

                  <div>

                    <div className="flex justify-between mb-2">

                      <span className="text-slate-300">
                        Skills Match
                      </span>

                      <span className="text-green-400">
                        9.0 / 10
                      </span>

                    </div>

                    <div className="h-3 rounded-full bg-slate-700 overflow-hidden">

                      <div
                        className="h-full bg-green-400 rounded-full"
                        style={{ width: "90%" }}
                      />

                    </div>

                  </div>

                  <div>

                    <div className="flex justify-between mb-2">

                      <span className="text-slate-300">
                        Projects
                      </span>

                      <span className="text-indigo-400">
                        9.3 / 10
                      </span>

                    </div>

                    <div className="h-3 rounded-full bg-slate-700 overflow-hidden">

                      <div
                        className="h-full bg-indigo-400 rounded-full"
                        style={{ width: "93%" }}
                      />

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* FEATURES */}

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-28">

            <div className="bg-slate-900/60 border border-slate-700 rounded-3xl p-8 hover:-translate-y-2 transition">

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6">

                <FaCloudUploadAlt className="text-3xl text-cyan-400" />

              </div>

              <h2 className="text-2xl font-bold mb-4">
                Resume Upload
              </h2>

              <p className="text-slate-400 leading-8">

                Upload PDF resumes and extract complete
                information automatically.

              </p>

            </div>

            <div className="bg-slate-900/60 border border-slate-700 rounded-3xl p-8 hover:-translate-y-2 transition">

              <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mb-6">

                <FaChartLine className="text-3xl text-green-400" />

              </div>

              <h2 className="text-2xl font-bold mb-4">

                ATS Evaluation

              </h2>

              <p className="text-slate-400 leading-8">

                Detailed recruiter style ATS score
                with section wise evaluation.

              </p>

            </div>

            <div className="bg-slate-900/60 border border-slate-700 rounded-3xl p-8 hover:-translate-y-2 transition">

              <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6">

                <FaBrain className="text-3xl text-indigo-400" />

              </div>

              <h2 className="text-2xl font-bold mb-4">

                AI Suggestions

              </h2>

              <p className="text-slate-400 leading-8">

                Missing skills, strengths,
                weaknesses and recommendations.

              </p>

            </div>

            <div className="bg-slate-900/60 border border-slate-700 rounded-3xl p-8 hover:-translate-y-2 transition">

              <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center mb-6">

                <FaShieldAlt className="text-3xl text-yellow-400" />

              </div>

              <h2 className="text-2xl font-bold mb-4">

                Recruiter Ready

              </h2>

              <p className="text-slate-400 leading-8">

                Optimize your resume for recruiters
                and ATS systems.

              </p>

            </div>

          </div>
                    {/* WHY CHOOSE */}

          <div className="mt-32">

            <div className="text-center mb-16">

              <h2 className="text-5xl font-black">

                Why Choose

                <span className="text-cyan-400">
                  {" "}AI Resume Analyzer?
                </span>

              </h2>

              <p className="mt-5 text-slate-400 text-lg max-w-3xl mx-auto">

                Everything you need to create an ATS friendly
                resume and impress recruiters.

              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
                "Professional ATS Score",
                "Detailed Resume Analysis",
                "AI Powered Suggestions",
                "Missing Skills Detection",
                "Recruiter Style Feedback",
                "Download PDF Report",
              ].map((item) => (

                <div
                  key={item}
                  className="bg-slate-900/60 border border-slate-700 rounded-2xl p-7 flex items-center gap-4 hover:border-cyan-400 transition"
                >

                  <FaCheckCircle className="text-green-400 text-2xl" />

                  <span className="text-lg font-medium">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* CTA */}

          <div className="mt-32">

            <div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-indigo-500/10 p-14 text-center">

              <h2 className="text-5xl font-black">

                Ready to Improve

                <span className="text-cyan-400">
                  {" "}Your Resume?
                </span>

              </h2>

              <p className="mt-6 text-slate-300 text-xl max-w-3xl mx-auto leading-9">

                Upload your resume, receive AI insights,
                discover missing skills and download a
                recruiter-ready report in less than a minute.

              </p>

              <Link
                to="/upload"
                className="inline-flex items-center gap-3 mt-10 bg-cyan-500 hover:bg-cyan-600 transition px-10 py-5 rounded-xl font-bold text-lg"
              >

                Analyze Resume

                <FaArrowRight />

              </Link>

            </div>

          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Home;