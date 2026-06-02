import React from 'react';

export default function Needed() {
  return (
    <section className="bg-[#0A0A0A] text-white py-24 px-4 md:px-8 lg:px-16 font-sans flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full mx-auto space-y-16">
        
        {/* Top Header Section */}
        <div className="text-center space-y-4">
          {/* Badge */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#5151FF]">
            <span className="w-1.5 h-1.5 bg-[#5151FF] inline-block rounded-sm" />
            FEATURES JOB
            <span className="w-1.5 h-1.5 bg-[#5151FF] inline-block rounded-sm" />
          </div>
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-neutral-100 max-w-2xl mx-auto leading-tight">
            Everything you need to succeed
          </h2>
        </div>

        {/* Features Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-6xl mx-auto pt-4">
          
          {/* Item 1: Smart Search */}
          <div className="flex items-start gap-4 group">
            <div className="w-14 h-14 shrink-0 bg-gradient-to-b from-[#161618] to-[#0D0D0E] border border-neutral-800/60 rounded-xl flex items-center justify-center shadow-xl transition-colors group-hover:border-neutral-700">
              <svg className="w-5 h-5 text-purple-400/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-medium text-neutral-200">Smart Search</h3>
              <p className="text-xs font-light text-neutral-500 leading-relaxed">Find your ideal job with advanced filters.</p>
            </div>
          </div>

          {/* Item 2: Salary Insights */}
          <div className="flex items-start gap-4 group">
            <div className="w-14 h-14 shrink-0 bg-gradient-to-b from-[#161618] to-[#0D0D0E] border border-neutral-800/60 rounded-xl flex items-center justify-center shadow-xl transition-colors group-hover:border-neutral-700">
              <svg className="w-5 h-5 text-purple-400/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-medium text-neutral-200">Salary Insights</h3>
              <p className="text-xs font-light text-neutral-500 leading-relaxed">Get real salary data to negotiate confidently.</p>
            </div>
          </div>

          {/* Item 3: Top Companies */}
          <div className="flex items-start gap-4 group">
            <div className="w-14 h-14 shrink-0 bg-gradient-to-b from-[#161618] to-[#0D0D0E] border border-neutral-800/60 rounded-xl flex items-center justify-center shadow-xl transition-colors group-hover:border-neutral-700">
              <svg className="w-5 h-5 text-purple-400/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-medium text-neutral-200">Top Companies</h3>
              <p className="text-xs font-light text-neutral-500 leading-relaxed">Apply to vetted companies that are hiring.</p>
            </div>
          </div>

          {/* Item 4: Saved Jobs */}
          <div className="flex items-start gap-4 group">
            <div className="w-14 h-14 shrink-0 bg-gradient-to-b from-[#161618] to-[#0D0D0E] border border-neutral-800/60 rounded-xl flex items-center justify-center shadow-xl transition-colors group-hover:border-neutral-700">
              <svg className="w-5 h-5 text-purple-400/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-medium text-neutral-200">Saved Jobs</h3>
              <p className="text-xs font-light text-neutral-500 leading-relaxed">Manage apps & favorites on your dashboard.</p>
            </div>
          </div>

          {/* Item 5: One-Click Apply */}
          <div className="flex items-start gap-4 group">
            <div className="w-14 h-14 shrink-0 bg-gradient-to-b from-[#161618] to-[#0D0D0E] border border-neutral-800/60 rounded-xl flex items-center justify-center shadow-xl transition-colors group-hover:border-neutral-700">
              <svg className="w-5 h-5 text-purple-400/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-medium text-neutral-200">One-Click Apply</h3>
              <p className="text-xs font-light text-neutral-500 leading-relaxed">Simplify your job applications for an easier process!</p>
            </div>
          </div>

          {/* Item 6: Resume Builder */}
          <div className="flex items-start gap-4 group">
            <div className="w-14 h-14 shrink-0 bg-gradient-to-b from-[#161618] to-[#0D0D0E] border border-neutral-800/60 rounded-xl flex items-center justify-center shadow-xl transition-colors group-hover:border-neutral-700">
              <svg className="w-5 h-5 text-purple-400/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-medium text-neutral-200">Resume Builder</h3>
              <p className="text-xs font-light text-neutral-500 leading-relaxed">Create professional resumes with modern templates.</p>
            </div>
          </div>

          {/* Item 7: Skill-Based Matching */}
          <div className="flex items-start gap-4 group">
            <div className="w-14 h-14 shrink-0 bg-gradient-to-b from-[#161618] to-[#0D0D0E] border border-neutral-800/60 rounded-xl flex items-center justify-center shadow-xl transition-colors group-hover:border-neutral-700">
              <svg className="w-5 h-5 text-purple-400/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-medium text-neutral-200">Skill-Based Matching</h3>
              <p className="text-xs font-light text-neutral-500 leading-relaxed">Discover jobs that match your skills and experience.</p>
            </div>
          </div>

          {/* Item 8: Career Growth Resources */}
          <div className="flex items-start gap-4 group">
            <div className="w-14 h-14 shrink-0 bg-gradient-to-b from-[#161618] to-[#0D0D0E] border border-neutral-800/60 rounded-xl flex items-center justify-center shadow-xl transition-colors group-hover:border-neutral-700">
              <svg className="w-5 h-5 text-purple-400/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-medium text-neutral-200">Career Growth Resources</h3>
              <p className="text-xs font-light text-neutral-500 leading-relaxed">Boost your career with quick interview tips.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}