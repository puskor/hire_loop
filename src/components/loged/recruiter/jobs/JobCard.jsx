"use client";

import { Pencil, Trash2, Send } from "lucide-react";

export default function JobsCard({ jobsData: jobs }) {

    // console.log(jobs)


    return (
        <div className="w-full mt-10">
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-hidden rounded-2xl border border-zinc-800 bg-[#111111] shadow-xl">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-zinc-800 bg-[#181818]">
                            <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-400">
                                Position
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-400">
                                Type
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-400">
                                Salary
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-400">
                                Deadline
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-400">
                                Remote
                            </th>
                            <th className="px-6 py-4 text-right text-sm font-semibold text-zinc-400">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {jobs.map((job) => (
                            <tr
                                key={job._id}
                                className="border-b border-zinc-800 hover:bg-[#181818] transition"
                            >
                                <td className="px-6 py-5">
                                    <div>
                                        <h3 className="font-semibold text-white">
                                            {job.category}
                                        </h3>
                                        <p className="text-sm text-zinc-500">
                                            {job.location || "Worldwide"}
                                        </p>
                                    </div>
                                </td>

                                <td className="px-6 py-5 text-zinc-300">
                                    {job.type}
                                </td>

                                <td className="px-6 py-5 text-zinc-300">
                                    {job.currency} {job.min} - {job.max}
                                </td>

                                <td className="px-6 py-5 text-zinc-300">
                                    {job.deadline}
                                </td>

                                <td className="px-6 py-5">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${job.remote
                                            ? "bg-green-500/15 text-green-400"
                                            : "bg-red-500/15 text-red-400"
                                            }`}
                                    >
                                        {job.remote ? "Remote" : "Onsite"}
                                    </span>
                                </td>

                                <td className="px-6 py-5">
                                    <div className="flex justify-end gap-2">
                                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm transition">
                                            <Pencil size={16} />
                                            Edit
                                        </button>

                                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm transition">
                                            <Trash2 size={16} />
                                            Delete
                                        </button>

                                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm transition">
                                            <Send size={16} />
                                            Applier
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile + Tablet Cards */}
            <div className="lg:hidden space-y-4">
                {jobs.map((job) => (
                    <div
                        key={job._id}
                        className="rounded-2xl border border-zinc-800 bg-[#111111] p-5 shadow-lg"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-white">
                                    {job.category}
                                </h3>

                                <p className="text-sm text-zinc-500 mt-1">
                                    {job.type}
                                </p>
                            </div>

                            <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${job.remote
                                    ? "bg-green-500/15 text-green-400"
                                    : "bg-red-500/15 text-red-400"
                                    }`}
                            >
                                {job.remote ? "Remote" : "Onsite"}
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-5">
                            <div>
                                <p className="text-xs text-zinc-500">
                                    Salary
                                </p>
                                <p className="text-white">
                                    {job.currency} {job.min} - {job.max}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-zinc-500">
                                    Deadline
                                </p>
                                <p className="text-white">
                                    {job.deadline}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mt-5">
                            <button className="flex justify-center items-center gap-2 rounded-lg bg-blue-600 py-2.5 text-white">
                                <Pencil size={16} />
                            </button>

                            <button className="flex justify-center items-center gap-2 rounded-lg bg-red-600 py-2.5 text-white">
                                <Trash2 size={16} />
                            </button>

                            <button className="flex justify-center items-center gap-2 rounded-lg bg-emerald-600 py-2.5 text-white">
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}