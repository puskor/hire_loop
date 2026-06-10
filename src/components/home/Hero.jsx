import { FiSearch, FiMapPin } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="min-h-screen  bg-black  text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">

      {/* Badge */}
      <div className="mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
        <span>💼</span>
        <span>50,000+ NEW JOBS THIS MONTH</span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight">
        Find Your Dream Job Today
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-gray-400 text-center max-w-2xl">
        HireLoop connects top talent with world-class companies. Browse thousands of
        curated opportunities and land your next role — faster.
      </p>

      {/* Search Box */}
      <div className="mt-10 w-full max-w-3xl bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center gap-3 backdrop-blur-md">
        
        {/* Job input */}
        <div className="flex items-center gap-2 flex-1 px-3">
          <FiSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Job title, skill or company"
            className="bg-transparent outline-none w-full text-white placeholder-gray-500"
          />
        </div>

        <div className="w-px h-6 bg-white/10" />

        {/* Location input */}
        <div className="flex items-center gap-2 flex-1 px-3">
          <FiMapPin className="text-gray-400" />
          <input
            type="text"
            placeholder="Location or Remote"
            className="bg-transparent outline-none w-full text-white placeholder-gray-500"
          />
        </div>

        {/* Button */}
        <button className="bg-indigo-500 hover:bg-indigo-600 transition p-3 rounded-xl">
          <FiSearch />
        </button>
      </div>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-gray-400 ">
        <span>Trending Position</span>
        <span className="px-3 py-1 bg-white/10 rounded-full">Product Designer</span>
        <span className="px-3 py-1 bg-white/10 rounded-full">AI Engineering</span>
        <span className="px-3 py-1 bg-white/10 rounded-full">Dev-ops Engineer</span>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_60%)] pointer-events-none"></div>
    </section>
  );
}