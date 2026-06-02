import Image from 'next/image';

export default function DreamPosition() {
    return (
        <section className="relative bg-black text-white min-h-[600px] flex flex-col justify-end items-center overflow-hidden px-4 pb-12 pt-16">

            {/* Background Globe Image with Glow Effect */}
            <div className="absolute inset-x-0 top-0 flex justify-center pointer-events-none select-none">
                <div className="relative w-full max-w-5xl aspect-[2/1]">
                    {/* Blue radial glow behind the globe */}
                    <div className="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full transform -translate-y-1/4" />

                    <Image
                        src="/images/globe.png"
                        alt="Globe Background"
                        fill
                        priority
                        className="object-cover opacity-80"
                    />
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">

                {/* Header Text */}
                <h2 className="text-2xl md:text-4xl font-normal text-gray-200 max-w-2xl tracking-wide leading-relaxed mb-16">
                    Assisting over <span className="text-white font-medium">15,000 job seekers</span> find their dream positions.
                </h2>

                {/* Static Stats Grid (Responsive) */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">

                    {/* Card 1: Active Jobs */}
                    <div className="bg-[#0D0D0D]/80 backdrop-blur-md border border-neutral-900 rounded-2xl p-6 flex flex-col justify-between items-start h-44 text-left shadow-2xl transition-all duration-300 hover:border-neutral-800">
                        <div className="p-2 bg-neutral-900/50 rounded-lg border border-neutral-800/40">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="mt-auto">
                            <span className="block text-4xl font-semibold tracking-tight text-white mb-1">50K</span>
                            <span className="text-sm font-medium text-neutral-400">Active Jobs</span>
                        </div>
                    </div>

                    {/* Card 2: Companies */}
                    <div className="bg-[#0D0D0D]/80 backdrop-blur-md border border-neutral-900 rounded-2xl p-6 flex flex-col justify-between items-start h-44 text-left shadow-2xl transition-all duration-300 hover:border-neutral-800">
                        <div className="p-2 bg-neutral-900/50 rounded-lg border border-neutral-800/40">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <div className="mt-auto">
                            <span className="block text-4xl font-semibold tracking-tight text-white mb-1">12K</span>
                            <span className="text-sm font-medium text-neutral-400">Companies</span>
                        </div>
                    </div>

                    {/* Card 3: Job Seekers */}
                    <div className="bg-[#0D0D0D]/80 backdrop-blur-md border border-neutral-900 rounded-2xl p-6 flex flex-col justify-between items-start h-44 text-left shadow-2xl transition-all duration-300 hover:border-neutral-800">
                        <div className="p-2 bg-neutral-900/50 rounded-lg border border-neutral-800/40">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <div className="mt-auto">
                            <span className="block text-4xl font-semibold tracking-tight text-white mb-1">2M</span>
                            <span className="text-sm font-medium text-neutral-400">Job Seekers</span>
                        </div>
                    </div>

                    {/* Card 4: Satisfaction Rate */}
                    <div className="bg-[#0D0D0D]/80 backdrop-blur-md border border-neutral-900 rounded-2xl p-6 flex flex-col justify-between items-start h-44 text-left shadow-2xl transition-all duration-300 hover:border-neutral-800">
                        <div className="p-2 bg-neutral-900/50 rounded-lg border border-neutral-800/40">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                        </div>
                        <div className="mt-auto">
                            <span className="block text-4xl font-semibold tracking-tight text-white mb-1">97%</span>
                            <span className="text-sm font-medium text-neutral-400">Satisfaction Rate</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}