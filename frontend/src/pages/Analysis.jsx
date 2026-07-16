import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import {
FaUserTie,
FaStar,
FaExclamationTriangle,
FaLightbulb,
FaCheckCircle,
FaBriefcase,
FaDownload,
} from "react-icons/fa";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function Analysis() {

const analysis = JSON.parse(localStorage.getItem("analysis"));

if (!analysis) {
return (
<Layout>

    <div className="min-h-screen flex items-center justify-center">

        <div className="text-center">

            <h1 className="text-4xl font-bold mb-6">
                No Analysis Found
            </h1>

            <Link to="/upload" className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl">
            Upload Resume
            </Link>

        </div>

    </div>

</Layout>
);
}

const score = Math.round((analysis.ats_score || 0) * 10);

const downloadPDF = () => {

const doc = new jsPDF();

doc.setFillColor(37,99,235);
doc.rect(0,0,210,28,"F");

doc.setTextColor(255,255,255);
doc.setFontSize(22);
doc.text("AI Resume Analyzer Report",20,18);

doc.setTextColor(0,0,0);

doc.setFontSize(14);

doc.text(`ATS Score : ${score}%`,20,42);

doc.text(
`Career Level : ${analysis.career_level}`,
20,
52
);

autoTable(doc,{
startY:65,
head:[["Recommended Roles"]],
body:
analysis.recommended_roles?.map(role=>[role]) || []
});

autoTable(doc,{
startY:doc.lastAutoTable.finalY+10,
head:[["Strengths"]],
body:
analysis.strengths?.map(item=>[item]) || []
});

autoTable(doc,{
startY:doc.lastAutoTable.finalY+10,
head:[["Weaknesses"]],
body:
analysis.weaknesses?.map(item=>[item]) || []
});

autoTable(doc,{
startY:doc.lastAutoTable.finalY+10,
head:[["Recommendations"]],
body:
analysis.recommendations?.map(item=>[item]) || []
});

doc.save("Resume_Report.pdf");

};

return (

<Layout>

    <div className="w-full max-w-[1600px] mx-auto px-6 xl:px-10 py-10">

        <div className="flex justify-between items-center mb-10">

            <div>

                <h1 className="text-5xl font-bold">
                    Resume Analysis
                </h1>

                <p className="text-slate-400 mt-3">
                    AI Generated Resume Insights
                </p>

            </div>

            <button onClick={downloadPDF}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl flex items-center gap-3">

                <FaDownload />

                Download Report

            </button>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

            <div className="bg-slate-900 rounded-3xl p-8">

                <h2 className="text-slate-400 text-lg mb-8">

                    ATS SCORE

                </h2>

                <div className="relative w-52 h-52 mx-auto">

                    <svg className="w-full h-full -rotate-90">

                        <circle cx="104" cy="104" r="86" stroke="#1e293b" strokeWidth="14" fill="none" />

                        <circle cx="104" cy="104" r="86" stroke="#2563eb" strokeWidth="14" fill="none"
                            strokeLinecap="round" strokeDasharray="540" strokeDashoffset={ 540-(540*score)/100 } />

                    </svg>

                    <div className="absolute inset-0 flex flex-col justify-center items-center">

                        <h1 className="text-6xl font-bold text-blue-500">

                            {score}%

                        </h1>

                        <p className="text-slate-400">

                            Overall Score

                        </p>

                    </div>

                </div>

            </div>

            <div className="lg:col-span-2 bg-slate-900 rounded-3xl p-8">

                <h2 className="text-2xl font-bold mb-6">

                    Executive Summary

                </h2>

                <p className="leading-8 text-slate-300">

                    {analysis.summary}

                </p>

            </div>

        </div>
        <div className="grid lg:grid-cols-2 gap-8 mt-10">

            <div className="bg-slate-900 rounded-3xl p-8">

                <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">

                    <FaUserTie className="text-green-400" />

                    Career Level

                </h2>

                <h1 className="text-4xl font-bold text-green-400">

                    {analysis.career_level}

                </h1>

            </div>

            <div className="bg-slate-900 rounded-3xl p-8">

                <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">

                    <FaBriefcase className="text-blue-400" />

                    Recommended Roles

                </h2>

                <div className="flex flex-wrap gap-3">

                    {analysis.recommended_roles?.map((role)=>(
                    <span key={role} className="bg-blue-500/20 border border-blue-500 px-4 py-2 rounded-full">
                        {role}
                    </span>
                    ))}

                </div>

            </div>

        </div>



        <div className="bg-slate-900 rounded-3xl p-8 mt-10">

            <h2 className="text-2xl font-bold mb-8">

                Resume Section Scores

            </h2>

            {Object.entries(
            analysis.section_scores || {}
            ).map(([key,value])=>(

            <div key={key} className="mb-7">

                <div className="flex justify-between mb-2">

                    <span className="capitalize">

                        {key}

                    </span>

                    <span>

                        {value}/10

                    </span>

                </div>

                <div className="bg-slate-700 rounded-full h-3">

                    <div className="bg-blue-500 h-3 rounded-full" style={{ width:`${value*10}%` }} />

                </div>

            </div>

            ))}

        </div>



        <div className="grid lg:grid-cols-2 gap-8 mt-10">

            <div className="bg-slate-900 rounded-3xl p-8">

                <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">

                    <FaCheckCircle className="text-green-400" />

                    Strengths

                </h2>

                <div className="space-y-5">

                    {analysis.strengths?.map((item,index)=>(

                    <div key={index} className="flex gap-4">

                        <FaCheckCircle className="text-green-400 mt-1" />

                        <p className="leading-7">

                            {item}

                        </p>

                    </div>

                    ))}

                </div>

            </div>



            <div className="bg-slate-900 rounded-3xl p-8">

                <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">

                    <FaExclamationTriangle className="text-yellow-400" />

                    Areas to Improve

                </h2>

                <div className="space-y-5">

                    {analysis.weaknesses?.map((item,index)=>(

                    <div key={index} className="flex gap-4">

                        <FaExclamationTriangle className="text-yellow-400 mt-1" />

                        <p className="leading-7">

                            {item}

                        </p>

                    </div>

                    ))}

                </div>

            </div>

        </div>
        <div className="bg-slate-900 rounded-3xl p-8 mt-10">

            <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">

                <FaLightbulb className="text-yellow-400" />

                AI Recommendations

            </h2>

            <div className="space-y-5">

                {analysis.recommendations?.length > 0 ? (

                analysis.recommendations.map((item, index) => (

                <div key={index} className="flex gap-4 bg-slate-800 rounded-xl p-5">

                    <FaLightbulb className="text-yellow-400 mt-1" />

                    <p className="leading-7">

                        {item}

                    </p>

                </div>

                ))

                ) : (

                <div className="bg-green-500/20 border border-green-500 rounded-xl p-6">

                    <div className="flex gap-3 items-center">

                        <FaCheckCircle className="text-green-400" />

                        <p>

                            Excellent! Your resume looks strong.

                        </p>

                    </div>

                </div>

                )}

            </div>

        </div>



        <div className="mt-12 text-center text-slate-500 text-sm">

            <p>

                Generated using AI Resume Analyzer

            </p>

        </div>

    </div>

</Layout>

);

}

export default Analysis;