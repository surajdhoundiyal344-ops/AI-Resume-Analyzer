import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#111827] via-[#1e1b4b] to-[#0f172a] text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">

        {/* Blue Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full" />

        {/* Purple Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/20 blur-[180px] rounded-full" />

        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2 bg-sky-400/10 blur-[160px] rounded-full" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      <Navbar />

      <main className="relative z-10">
        {children}
      </main>

    </div>
  );
}

export default Layout;