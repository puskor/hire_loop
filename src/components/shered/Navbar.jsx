"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full fixed top-0 left-0 z-50 px-4 md:px-8 py-4 backdrop-blur-3xl bg-black/30">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <Link href={"/"} className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">H</span>
                    </div>

                    <h1 className="text-white text-xl font-semibold leading-none">
                        Hire <br />
                        Loop
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-2 rounded-2xl shadow-lg">
                    <a
                        href="#"
                        className="text-gray-300 hover:text-white transition"
                    >
                        Browse Jobs
                    </a>

                    <a
                        href="#"
                        className="text-gray-300 hover:text-white transition"
                    >
                        Company
                    </a>

                    <a
                        href="#"
                        className="text-gray-300 hover:text-white transition"
                    >
                        Pricing
                    </a>

                    <div className="w-px h-6 bg-white/20" />

                    <a
                        href="/login"
                        className="text-indigo-400 hover:text-indigo-300 transition font-medium"
                    >
                        Sign In
                    </a>

                    <button className="bg-white text-black px-6 py-3 rounded-2xl font-medium hover:scale-105 transition">
                        Get Started
                    </button>
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden mt-4 mx-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-5">
                    <a
                        href="/"
                        className="block text-gray-300 hover:text-white transition"
                    >
                        Browse Jobs
                    </a>

                    <a
                        href="#"
                        className="block text-gray-300 hover:text-white transition"
                    >
                        Company
                    </a>

                    <a
                        href="#"
                        className="block text-gray-300 hover:text-white transition"
                    >
                        Pricing
                    </a>

                    <a
                        href="login"
                        className="block text-indigo-400 font-medium"
                    >
                        Sign In
                    </a>

                    <button className="w-full bg-white text-black py-3 rounded-xl font-medium">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
}