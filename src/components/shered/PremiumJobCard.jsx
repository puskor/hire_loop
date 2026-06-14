"use client"
import { useSession } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function PremiumJobCard({ job }) {

    const { data: user } = useSession()
    const router = useRouter()

    // console.log(user)
    // console.log(job._id)

    const handelApply = () => {
        if (!user) {
            router.push(`/login?redirect=/jobs/${job._id}`);
            return;
        }

        if (user.user.role === "seeker") {
            router.push(`/dashboard/jobSeeker/apply/${job._id}`);
        } else {
            toast.error("Only job seekers can apply for jobs");
        }
    };
    return (
        <div className="w-full">
            <div className="max-w-md rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white shadow-xl border border-[#2d3748] overflow-hidden">

                {/* Top Section */}
                <div className="px-5 py-3 flex justify-between items-center bg-[#111827]">
                    <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">
                        {job.type}
                    </span>

                    <span className="text-xs text-gray-400">
                        {job.currency}
                    </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">

                    {/* Company + Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                            <img
                                src={job?.logo}
                                alt={job.company}
                                className="w-14 h-14 object-cover"
                            />
                        </div>

                        <div>
                            <h2 className="text-xl font-bold">
                                {job.company}
                            </h2>

                            <p className="text-sm text-gray-300">
                                {job.category}
                            </p>
                        </div>
                    </div>

                    {/* Salary */}
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>💰 {job.min}</span>
                        <span>-</span>
                        <span>{job.max}</span>
                    </div>

                    {/* Location */}
                    <p className="text-sm text-gray-400">
                        📍 {job.location}
                        {job.remote && (
                            <span className="ml-2 text-green-400">
                                (Remote)
                            </span>
                        )}
                    </p>

                    {/* Requirements */}
                    {job.requirements && (
                        <div className="flex flex-wrap gap-2 pt-2">
                            {job.requirements
                                .split(",")
                                .map((item, index) => (
                                    <span
                                        key={index}
                                        className="text-xs bg-[#1f2937] border border-[#374151] px-2 py-1 rounded-md"
                                    >
                                        {item.trim()}
                                    </span>
                                ))}
                        </div>
                    )}

                    {/* Benefits */}
                    {job.benefits && (
                        <div className="pt-2">
                            <p className="text-xs text-gray-400">
                                ✨ {job.benefits}
                            </p>
                        </div>
                    )}

                    {/* Deadline */}
                    {job.deadline && (
                        <div className="text-xs text-red-400">
                            ⏳ Apply before: {job.deadline}
                        </div>
                    )}
                </div>

                {/* Bottom Apply Button */}
                <div className="p-4 bg-[#0b1220] border-t border-[#1f2937]">
                    <button onClick={handelApply} className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition py-2.5 rounded-xl font-semibold">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
}