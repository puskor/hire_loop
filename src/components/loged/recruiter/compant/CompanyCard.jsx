"use client";

import { Building2, MapPin, Users, Globe } from "lucide-react";

export default function CompanyCard({ company }) {


    const {
        name,
        category,
        description,
        employee_number,
        location,
        logo,
        status,
        web_url,
    } = company;

    console.log(logo)

    const statusStyles = {
        approved: "bg-green-500/10 text-green-400",
        pending: "bg-yellow-500/10 text-yellow-400",
        rejected: "bg-red-500/10 text-red-400",
    };

    return (
        <div className="bg-[#151515] border border-[#252525] rounded-2xl p-6 flex flex-col">

            {/* Top */}
            <div className="flex justify-between items-start">

                <div className="flex gap-4 max-h-[50px] mb-6">
                    <div className="min-w-20 min-h-20 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                        {logo ? (
                            <img
                                src={logo}
                                alt={name}
                                className=" items-center object-cover"
                            />
                        ) : (
                            <Building2 size={26} className="text-black" />
                        )}
                    </div>

                    <div>
                        <h3 className="text-xl font-medium text-white">
                            {name}
                        </h3>

                        <p className="text-gray-400 mt-1">
                            {category}
                        </p>
                    </div>
                </div>

                <span
                    className={`px-4 py-1 rounded-full text-xs font-semibold uppercase ${statusStyles[status?.toLowerCase()]
                        }`}
                >
                    {status}
                </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 mt-8 leading-8 line-clamp-3 min-h-[96px]">
                {description}
            </p>

            {/* Divider */}
            <div className="h-px bg-[#252525] my-8" />

            {/* Info */}

            <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{location}</span>
            </div>

            <div className="flex items-center gap-2 mt-4">
                <Users size={18} />
                <span>{employee_number} Employee</span>
            </div>

            {/* Website */}
            <a
                href={web_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 text-white hover:text-gray-300 transition"
            >
                <Globe size={18} />
                Visit Website
            </a>
        </div>
    );
}