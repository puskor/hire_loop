"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { redirect } from "next/navigation";
import { signIn } from "@/lib/auth-client";

export default function Login() {

    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries())
        // console.log(user)

        const { data, error } = await signIn.email({
            email: user.email, // required
            password: user.password, // required
        });

        if(data){
            redirect("/")
            alert("successfully signin")
        }
        if(error){
            alert(`${error}`)
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black px-4">

            {/* Card */}
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Login
                </h2>
                <p className="text-center text-gray-500 text-sm mt-1">
                    Welcome back! Please enter your details.
                </p>

                {/* Form */}
                <form onSubmit={handleLogin} className="mt-6 space-y-4">

                    {/* Email */}
                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            className="w-full mt-1 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm text-gray-600">Password</label>

                        <div className="relative mt-1">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                name="password"
                                className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-400"
                                required
                            />

                            {/* Toggle */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-gray-500"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium cursor-pointer hover:bg-indigo-700 transition"
                    >
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="px-3 text-gray-400 text-sm">OR</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Google Login */}
                <button className="w-full flex items-center justify-center gap-3 border py-3 rounded-xl hover:bg-gray-50 transition">
                    <img
                        src="https://www.svgrepo.com/show/355037/google.svg"
                        alt="google"
                        className="w-5 h-5"
                    />
                    <span className="text-gray-700 font-medium cursor-pointer">
                        Continue with Google
                    </span>
                </button>

                {/* Signup Link */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Don’t have an account?{" "}
                    <a
                        href="/sign_up"
                        className="text-indigo-600 font-medium hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}