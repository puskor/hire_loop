"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { signUp } from "@/lib/auth-client";
import { Description, Label, Radio, RadioGroup } from "@heroui/react";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";


export default function SignUp() {
    const [showConfirm, setShowConfirm] = useState(false);
    const [error, setError] = useState("");
    const redirectTo = useSearchParams().get("redirect") || "/"
    const router = useRouter()

    const handleSignup = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries())

        if (user.password !== user.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        setError("");
        // console.log(user)
        const { data, error } = await signUp.email({
            name: user.name,// required
            email: user.email, // required
            password: user.password, // required
            image: user.photo,
            role: user.role
        });

        // console.log(error)

        if (data) {
            toast.success(`${user.name} is successfully resister`)
            router.push(redirectTo)
        }
        if (error) {
            toast.error(`${error.statusText}`)
            alert(`${error.statusText}`)
        }


    };

    const handleGoogleSignup = () => {
        console.log("Google signup clicked");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black px-2 overflow-y-auto pt-25">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">

                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Sign Up
                </h2>
                <p className="text-center text-gray-500 text-sm mt-1">
                    Create your account
                </p>

                {/* Form */}
                <form onSubmit={handleSignup} className="mt-2 space-y-1">

                    {/* Name */}
                    <div>
                        <label className="text-sm text-gray-600">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            className="w-full mt-1 px-4  border rounded-xl outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            className="w-full mt-1 px-4  border rounded-xl outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>

                    {/* photo */}
                    <div>
                        <label className="text-sm text-gray-600">Photo</label>
                        <input
                            type="text"
                            placeholder="Enter your photo url"
                            name="photo"
                            className="w-full mt-1 px-4  border rounded-xl outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm text-gray-600">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            className="w-full mt-1 px-4  border rounded-xl outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="text-sm text-gray-600">
                            Confirm Password
                        </label>

                        <div className="relative mt-1">
                            <input
                                type={showConfirm ? "text" : "password"}
                                placeholder="Confirm password"
                                name="confirmPassword"
                                className="w-full px-4  border rounded-xl outline-none focus:ring-2 focus:ring-indigo-400"
                                required
                            />

                            <button
                                type="button"
                                onClick={() => setShowConfirm(!showConfirm)}
                                className="absolute right-3 top-1 text-gray-500"
                            >
                                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <Label className="text-gray-500">Role</Label>
                        <RadioGroup defaultValue="seeker" name="role" orientation="horizontal">
                            <Radio value="seeker">
                                <Radio.Control>
                                    <Radio.Indicator />
                                </Radio.Control>
                                <Radio.Content>
                                    <Label>Seeker</Label>
                                </Radio.Content>
                            </Radio>
                            <Radio value="recruiter">
                                <Radio.Control>
                                    <Radio.Indicator />
                                </Radio.Control>
                                <Radio.Content>
                                    <Label>Recruiter</Label>
                                </Radio.Content>
                            </Radio>
                        </RadioGroup>
                    </div>

                    {/* Error */}
                    {error && (
                        <p className="text-red-500 text-sm">{error}</p>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-xl cursor-pointer font-medium hover:bg-indigo-700 transition"
                    >
                        Create Account
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-3">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="px-3 text-sm text-gray-400">OR</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Google Signup */}
                    <button
                        type="button"
                        onClick={handleGoogleSignup}
                        className="w-full flex items-center cursor-pointer justify-center gap-2 border border-gray-300 py-2 rounded-xl hover:bg-gray-50 transition"
                    >
                        <svg width="20" height="20" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-4z" />
                            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" />
                            <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.3l-6.3-5.2C29.3 35.7 26.8 36 24 36c-5.3 0-9.8-3.4-11.3-8.1l-6.6 5.1C9.4 39.7 16.2 44 24 44z" />
                            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.3 5.4-6.3 6.7l6.3 5.2C39.9 35.1 44 30 44 24c0-1.3-.1-2.7-.4-4z" />
                        </svg>

                        Continue with Google
                    </button>

                </form>

                {/* Login Link */}
                <p className="text-center text-sm text-gray-500 mt-3">
                    Already have an account?{" "}
                    <a
                        href="/login"
                        className="text-indigo-600 font-medium hover:underline"
                    >
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}