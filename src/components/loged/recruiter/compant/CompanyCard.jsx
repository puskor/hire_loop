import {
    Globe,
    MapPin,
    Users,
    Building2,
} from "lucide-react";

const statusStyles = {
    approved:
        "bg-green-500/10 text-green-400 border border-green-500/20",

    pending:
        "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
};

export default function CompanyCard({
    logo,
    name,
    industry,
    description,
    location,
    employees,
    website,
    status,
}) 
{
    return (
        <div className="bg-[#151515] border border-[#252525] rounded-2xl p-6  flex flex-col">

            {/* Top */}
            <div className="flex justify-between items-start">

                <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                        {logo ? (
                            <img
                                src={logo}
                                alt={name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <Building2
                                size={26}
                                className="text-black"
                            />
                        )}
                    </div>

                    <div>
                        <h3 className="text-3xl font-medium text-white">
                            {name}
                        </h3>

                        <p className="text-gray-400 mt-1">
                            {industry}
                        </p>
                    </div>
                </div>

                <span
                    className={`px-4 py-1 rounded-full text-xs font-semibold uppercase ${statusStyles[
                        status?.toLowerCase()
                    ]
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
            <div className="flex flex-wrap gap-8 text-gray-300">

                <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>{location}</span>
                </div>

                <div className="flex items-center gap-2">
                    <Users size={18} />
                    <span>{employees}</span>
                </div>
            </div>

            {/* Website */}
            <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center gap-2 text-white hover:text-gray-300 transition"
            >
                <Globe size={18} />
                Visit Website
            </a>
        </div>
    );
}