const applications = [
    {
        name: "Julianne Moore",
        role: "Senior Product Designer",
        date: "Oct 24, 2023",
        exp: "6 years",
        status: "Interviewing",
    },
    {
        name: "Robert Downey",
        role: "Backend Engineer",
        date: "Oct 23, 2023",
        exp: "4 years",
        status: "New",
    },
    {
        name: "Emma Stone",
        role: "Marketing Lead",
        date: "Oct 22, 2023",
        exp: "8 years",
        status: "Reviewing",
    },
    {
        name: "Chris Pratt",
        role: "Product Manager",
        date: "Oct 21, 2023",
        exp: "5 years",
        status: "Rejected",
    },
];

const getStatusStyle = (status) => {
    switch (status) {
        case "Interviewing":
            return "bg-green-500/15 text-green-400";

        case "New":
            return "bg-gray-500/15 text-gray-300";

        case "Reviewing":
            return "bg-yellow-500/15 text-yellow-400";

        case "Rejected":
            return "bg-red-500/15 text-red-400";

        default:
            return "bg-gray-500/15 text-gray-300";
    }
};

export default function RecentApplications() {
    return (
        <div className="border border-[#2d2d2d] rounded-xl overflow-hidden bg-[#111]">

            {/* Header */}
            <div className="p-5 flex items-center justify-between">
                <h2 className="text-xl md:text-2xl font-medium">
                    Recent Applications
                </h2>

                <button className="text-sm text-gray-400 hover:text-white">
                    View all
                </button>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-y border-[#222] text-sm text-gray-400">
                            <th className="text-left p-5">
                                Candidate Name
                            </th>

                            <th className="text-left">
                                Role
                            </th>

                            <th className="text-left">
                                Date Applied
                            </th>

                            <th className="text-left">
                                Experience
                            </th>

                            <th className="text-left">
                                Status
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {applications.map((item, i) => (
                            <tr
                                key={i}
                                className="border-b border-[#1d1d1d] hover:bg-[#171717]"
                            >
                                {/* Candidate */}
                                <td className="p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[#2a2a2a]" />

                                        <span className="font-medium">
                                            {item.name}
                                        </span>
                                    </div>
                                </td>

                                <td>{item.role}</td>

                                <td>{item.date}</td>

                                <td>{item.exp}</td>

                                <td>
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                                            item.status
                                        )}`}
                                    >
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card Layout */}
            <div className="md:hidden">
                {applications.map((item, i) => (
                    <div
                        key={i}
                        className="border-b border-[#222] p-4"
                    >
                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-3">
                                <div className="w-4 h-4 rounded-full bg-[#2a2a2a]" />

                                <div>
                                    <h3 className="font-medium">
                                        {item.name}
                                    </h3>

                                    <p className="text-sm text-gray-400">
                                        {item.exp}
                                    </p>
                                </div>
                            </div>

                            <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                                    item.status
                                )}`}
                            >
                                {item.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}