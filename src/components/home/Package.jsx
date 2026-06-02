import React from 'react';

export default function Package() {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-8 lg:px-16 font-sans min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-6xl w-full mx-auto text-center space-y-12">
        
        {/* Top Badge */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#5151FF]">
          <span className="w-1.5 h-1.5 bg-[#5151FF] inline-block rounded-sm" />
          PRICING
          <span className="w-1.5 h-1.5 bg-[#5151FF] inline-block rounded-sm" />
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight max-w-3xl mx-auto leading-[1.15]">
          Pay for the leverage,<br />not the listings
        </h2>

        {/* Monthly/Yearly Toggle Switch */}
        <div className="inline-flex items-center bg-[#161618] p-1 rounded-full border border-neutral-800">
          <button className="bg-white text-black text-sm font-medium px-5 py-2 rounded-full transition-all">
            Monthly
          </button>
          <button className="text-gray-400 hover:text-white text-sm font-medium px-5 py-2 rounded-full flex items-center gap-2 transition-all">
            Yearly
            <span className="bg-magenta-600 text-[10px] bg-pink-600 text-white font-semibold px-2 py-0.5 rounded-full">
              25%
            </span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 text-left max-w-5xl mx-auto">
          
          {/* Card 1: Starter */}
          <div className="bg-[#0A0A0A] border border-neutral-900 rounded-3xl p-8 flex flex-col justify-between h-[500px]">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center text-pink-400 text-sm">
                    👑
                  </div>
                  <h3 className="text-xl font-medium text-neutral-200">Starter</h3>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold">$0</span>
                  <span className="text-xs text-neutral-500 ml-1">/month</span>
                </div>
              </div>

              <p className="text-sm font-medium text-neutral-300">Start building your insights hub:</p>
              
              {/* Features List */}
              <ul className="space-y-4 text-xs text-neutral-400">
                <li className="flex items-center gap-3">
                  <span className="text-neutral-600 font-bold text-base">＋</span> Daily AI match brief (top 5)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-neutral-600 font-bold text-base">＋</span> Verified salary bands
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-neutral-600 font-bold text-base">＋</span> Company insight dashboards
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-neutral-600 font-bold text-base">＋</span> 1-click apply, unlimited
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-[#1F1F22] hover:bg-[#2A2A2E] text-white text-sm font-medium py-3 px-4 rounded-xl flex items-center justify-between transition-colors mt-auto">
              <span>Choose This Plan</span>
              <span className="text-base">→</span>
            </button>
          </div>

          {/* Card 2: Growth (Highlighted/Active Card) */}
          <div className="bg-[#0D0D10] border border-neutral-800/80 rounded-3xl p-8 flex flex-col justify-between h-[500px] shadow-2xl relative ring-1 ring-neutral-800">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center text-purple-400 text-sm">
                    📊
                  </div>
                  <h3 className="text-xl font-medium text-neutral-200">Growth</h3>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold">$17</span>
                  <span className="text-xs text-neutral-500 ml-1">/month</span>
                </div>
              </div>

              <p className="text-sm font-medium text-neutral-300">Start building your insights hub:</p>
              
              {/* Features List */}
              <ul className="space-y-4 text-xs text-neutral-400">
                <li className="flex items-center gap-3">
                  <span className="text-neutral-600 font-bold text-base">＋</span> Daily AI match brief (top 5)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-neutral-600 font-bold text-base">＋</span> Verified salary bands
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-neutral-600 font-bold text-base">＋</span> Company insight dashboards
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-neutral-600 font-bold text-base">＋</span> 1-click apply, unlimited
                </li>
              </ul>
            </div>

            {/* Highlighted CTA Button */}
            <button className="w-full bg-white hover:bg-neutral-200 text-black text-sm font-semibold py-3 px-4 rounded-xl flex items-center justify-between transition-colors mt-auto shadow-lg">
              <span>Choose This Plan</span>
              <span className="text-base">→</span>
            </button>
          </div>

          {/* Card 3: Premium */}
          <div className="bg-[#0A0A0A] border border-neutral-900 rounded-3xl p-8 flex flex-col justify-between h-[500px]">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center text-blue-400 text-sm">
                    ⚡
                  </div>
                  <h3 className="text-xl font-medium text-neutral-200">Premium</h3>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold">$99</span>
                  <span className="text-xs text-neutral-500 ml-1">/month</span>
                </div>
              </div>

              <p className="text-sm font-medium text-neutral-300">Start building your insights hub:</p>
              
              {/* Features List */}
              <ul className="space-y-4 text-xs text-neutral-400">
                <li className="flex items-center gap-3">
                  <span className="text-neutral-600 font-bold text-base">＋</span> Everything in Pro
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-neutral-600 font-bold text-base">＋</span> Multi-profile career portfolios
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-neutral-600 font-bold text-base">＋</span> Shared talent rooms
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-neutral-600 font-bold text-base">＋</span> Recruiter view (read-only)
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-[#1F1F22] hover:bg-[#2A2A2E] text-white text-sm font-medium py-3 px-4 rounded-xl flex items-center justify-between transition-colors mt-auto">
              <span>Choose This Plan</span>
              <span className="text-base">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}