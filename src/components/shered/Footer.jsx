import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#030303] text-gray-400 pt-16 pb-8 px-4 md:px-8 lg:px-16 border-t border-neutral-900/50 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Top Section: Brand & Links */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8 mx-5 lg:pb-12">

                    {/* Brand Column (Spans 2 columns on large screens) */}
                    <div className="lg:col-span-2 space-y-5">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                                {/* Simplified placeholder for the Programming Hero play icon */}
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <span className="text-white text-xl font-semibold tracking-tight">
                                Programming <span className="block -mt-1 font-bold">Hero</span>
                            </span>
                        </div>
                        {/* Description */}
                        <p className="text-sm font-light text-neutral-500 max-w-sm leading-relaxed">
                            The AI-native career platform. Built for people who take their work seriously.
                        </p>
                    </div>

                    {/* Product Column */}
                    <div className="space-y-4">
                        <h3 className="text-[#5151FF] font-medium text-base tracking-wide">Product</h3>
                        <ul className="space-y-3 text-sm font-normal text-neutral-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Job discovery</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Worker AI</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Companies</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Salary data</Link></li>
                        </ul>
                    </div>

                    {/* Navigations Column */}
                    <div className="space-y-4">
                        <h3 className="text-[#5151FF] font-medium text-base tracking-wide">Navigations</h3>
                        <ul className="space-y-3 text-sm font-normal text-neutral-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Help center</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Career library</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div className="space-y-4">
                        <h3 className="text-[#5151FF] font-medium text-base tracking-wide">Resources</h3>
                        <ul className="space-y-3 text-sm font-normal text-neutral-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Brand Guideline</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Newsroom</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Divider line */}
                <div className="border-t border-neutral-900/60 my-6" />

                {/* Bottom Section: Socials & Copyright */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4 text-xs font-light text-neutral-500">

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        {/* Facebook */}
                        <a href="#" className="w-8 h-8 bg-[#0D0D0D] border border-neutral-900 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
                            </svg>
                        </a>
                        {/* Pinterest/Custom Social */}
                        <a href="#" className="w-8 h-8 bg-[#5151FF] rounded-lg flex items-center justify-center text-white transition-transform hover:scale-105">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.27 2.68 7.91 6.46 9.31-.09-.8-.17-2.03.03-2.91.19-.8 1.25-5.28 1.25-5.28s-.32-.64-.32-1.58c0-1.48.86-2.59 1.93-2.59.91 0 1.35.68 1.35 1.51 0 .92-.58 2.29-.89 3.56-.25 1.07.54 1.94 1.59 1.94 1.91 0 3.38-2.02 3.38-4.93 0-2.58-1.85-4.38-4.5-4.38-3.07 0-4.87 2.3-4.87 4.68 0 .93.36 1.92.8 2.45.09.11.1.2.07.31-.08.33-.25 1.02-.28 1.17-.04.18-.14.22-.33.13-1.27-.59-2.07-2.45-2.07-3.94 0-3.21 2.33-6.15 6.72-6.15 3.53 0 6.27 2.51 6.27 5.87 0 3.51-2.21 6.33-5.28 6.33-1.03 0-2-.54-2.33-1.17l-.63 2.41c-.23.88-.85 1.99-1.27 2.67C10.04 21.88 11 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" className="w-8 h-8 bg-[#0D0D0D] border border-neutral-900 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                    </div>

                    {/* Copyright and Legal Links */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
                        <span>Copyright 2024 — Programming Hero</span>
                        <span className="hidden sm:inline text-neutral-800">|</span>
                        <div className="space-x-4">
                            <a href="#" className="hover:text-white transition-colors">Terms & Policy</a>
                            <span>-</span>
                            <a href="#" className="hover:text-white transition-colors">Privacy Guideline</a>
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    );
}