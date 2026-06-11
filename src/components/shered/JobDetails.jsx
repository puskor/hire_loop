const JobDetails = ({ job }) => {
    return (
        <div className="bg-[#111827] rounded-2xl border border-gray-800 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-6">
                <div className="flex items-center gap-4">
                    <img
                        src={job.logo}
                        alt={job.company}
                        className="w-16 h-16 bg-white rounded-xl p-2"
                    />

                    <div>
                        <h1 className="text-2xl font-bold text-white">
                            {job.category}
                        </h1>

                        <p className="text-blue-100">
                            {job.company}
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-6 space-y-6 text-white">

                <div>
                    <h3 className="font-semibold mb-2">
                        Salary
                    </h3>

                    <p className="text-green-400 text-xl font-bold">
                        {job.currency} {job.min} - {job.max}
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">
                        Requirements
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {job.requirements
                            .split(",")
                            .map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500"
                                >
                                    {skill.trim()}
                                </span>
                            ))}
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">
                        Benefits
                    </h3>

                    <p>{job.benefits}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <InfoCard title="Location" value={job.location} />
                    <InfoCard title="Type" value={job.type} />
                    <InfoCard title="Deadline" value={job.deadline} />
                    <InfoCard title="Remote" value={job.remote ? "Yes" : "No"} />
                </div>
            </div>
        </div>
    );
};

const InfoCard = ({ title, value }) => (
    <div className="bg-[#1f2937] rounded-xl p-4">
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="font-semibold">{value}</p>
    </div>
);

export default JobDetails;