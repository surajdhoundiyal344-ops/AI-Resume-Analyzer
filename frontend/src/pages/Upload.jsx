import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import api from "../services/api";
import { FaCloudUploadAlt, FaFilePdf } from "react-icons/fa";

function Upload() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a PDF Resume");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const response = await api.post("/resume/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      localStorage.setItem(
        "analysis",
        JSON.stringify(response.data.analysis)
      );

      navigate("/analysis");

    } catch (error) {
      alert(error.response?.data?.detail || "Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>

      <div className="min-h-screen flex items-center justify-center px-6">

        <div className="w-full max-w-3xl">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-10">

            <h1 className="text-4xl font-bold text-center mb-3">
              Upload Resume
            </h1>

            <p className="text-center text-slate-400 mb-10">
              Upload your resume and get instant ATS analysis using AI.
            </p>

            <label
              htmlFor="resume"
              className="cursor-pointer border-2 border-dashed border-cyan-500 rounded-2xl p-14 flex flex-col items-center justify-center hover:bg-slate-800 transition"
            >

              <FaCloudUploadAlt className="text-7xl text-cyan-400 mb-5" />

              <h2 className="text-2xl font-semibold">
                Drag & Drop Resume
              </h2>

              <p className="text-slate-400 mt-2">
                or click here to browse
              </p>

              <input
                id="resume"
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handleFileChange}
              />

            </label>

            {file && (

              <div className="mt-8 flex items-center gap-4 bg-slate-800 rounded-xl p-5">

                <FaFilePdf className="text-red-500 text-3xl" />

                <div>

                  <p className="font-semibold">
                    {file.name}
                  </p>

                  <p className="text-sm text-slate-400">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>

                </div>

              </div>

            )}

            <button
              onClick={handleUpload}
              disabled={loading}
              className="mt-10 w-full bg-cyan-500 hover:bg-cyan-600 transition rounded-xl py-4 text-lg font-bold shadow-lg"
            >

              {loading
                ? "Analyzing Resume..."
                : "Analyze Resume"}

            </button>

          </div>

        </div>

      </div>

    </Layout>
  );
}

export default Upload;