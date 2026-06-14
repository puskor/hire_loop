import Image from "next/image";
import { GetCompanyById } from "@/lib/actions/company";

const JobCard = async ({ apply }) => {
    const companies = await GetCompanyById(apply.companyId);
    const company = companies?.[0];

    return (
        <div className="group relative bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

            {/* Glow effect */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>

            {/* Top Section */}
            <div className="flex items-start gap-4">

                {/* Logo */}
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center overflow-hidden border border-white/10">
                    <Image
                        src={company?.logo || "/company.png"}
                        alt={company?.name || "company"}
                        width={56}
                        height={56}
                        className="object-cover"
                    />
                </div>

                {/* Company Info */}
                <div className="flex-1">
                    <div className="flex items-start justify-between">

                        <div>
                            <h2 className="text-lg font-bold text-white">
                                {company?.name || apply.company}
                            </h2>

                            {/* CATEGORY BADGE */}
                            <span className="inline-block mt-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
                                {apply.category}
                            </span>
                        </div>

                        {/* STATUS */}
                        <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                                apply.status === "Pending"
                                    ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                                    : apply.status === "Accepted"
                                    ? "bg-green-500/10 text-green-400 border-green-500/20"
                                    : "bg-red-500/10 text-red-400 border-red-500/20"
                            }`}
                        >
                            {apply.status}
                        </span>
                    </div>

                    {/* Location */}
                    <p className="text-sm text-zinc-400 mt-2">
                        📍 {company?.location || "Remote"}
                    </p>
                </div>
            </div>

            {/* Description */}
            <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-sm text-zinc-400 line-clamp-2">
                    {company?.description}
                </p>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-4">

                    {/* Date */}
                    <div>
                        <p className="text-xs text-zinc-500">
                            Applied On
                        </p>
                        <p className="text-sm font-medium text-white">
                            {new Date(apply.appliedAt).toLocaleDateString(
                                "en-US",
                                {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                }
                            )}
                        </p>
                    </div>

                    {/* Button */}
                    <a
                        href={company?.web_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-white text-black text-sm font-semibold hover:scale-105 transition"
                    >
                        Visit Company
                    </a>
                </div>
            </div>
        </div>
    );
};

export default JobCard;