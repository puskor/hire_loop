import Image from 'next/image';
import Link from 'next/link';

export default function NextRole() {
  return (
    <section className="relative bg-black  text-white min-h-[550px] flex flex-col justify-center items-center overflow-hidden px-4 font-sans">
      
      {/* Background Globe Grid Image & Ambient Glow */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none select-none z-0">
        <div className="relative w-full max-w-6xl aspect-[2/1] translate-y-[20%]">
          {/* Blue neon radial glow centered on the grid */}
          
          <div className="absolute inset-0 bg-black/20 blur-[130px] rounded-full transform -translate-y-1/4" />

          <Image
            src="/images/cta-bg.png" // আপনার দেওয়া ইমেজ পাথ
            alt="Globe Grid Background"
            fill
            priority
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-blue-600/20 blur-[130px] rounded-full transform -translate-y-1/4" />

        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight max-w-2xl text-neutral-100 leading-[1.15]">
          Your next role is already looking for you
        </h2>

        {/* Subtitle / Description */}
        <p className="text-sm md:text-base font-light text-neutral-400 max-w-lg leading-relaxed">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
          {/* Primary White Button */}
          <Link 
            href="#" 
            className="w-full sm:w-auto bg-white hover:bg-neutral-200 text-black text-sm font-medium px-6 py-3 rounded-xl shadow-lg transition-colors text-center"
          >
            Create a free account
          </Link>

          {/* Secondary Outline Button */}
          <Link 
            href="#" 
            className="w-full sm:w-auto bg-[#0A0A0C]/60 backdrop-blur-sm border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/40 text-neutral-300 hover:text-white text-sm font-medium px-6 py-3 rounded-xl transition-all text-center"
          >
            View pricing
          </Link>
        </div>

      </div>
    </section>
  );
}