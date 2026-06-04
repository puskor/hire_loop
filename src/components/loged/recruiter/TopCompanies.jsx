const companies = [
    {
        name: "Google Inc.",
        jobs: 24,
    },
    {
        name: "Meta Platforms",
        jobs: 18,
    },
    {
        name: "Stripe",
        jobs: 12,
    },
    {
        name: "Tesla",
        jobs: 31,
    },
];

export default function TopCompanies() {
    return (
        <div className="border border-[#2d2d2d] rounded-xl p-5">
            <div className="flex justify-between mb-6">
                <h2 className="text-2xl">
                    My Top Companies
                </h2>

                <button>View all</button>
            </div>

            <div className="space-y-5">
                {companies.map((company, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center"
                    >
                        <div>
                            <h3>{company.name}</h3>

                            <p className="text-sm text-gray-500">
                                Active Jobs
                            </p>
                        </div>

                        <span className="text-xl">
                            {company.jobs}
                        </span>
                    </div>
                ))}
            </div>

            <button className="w-full mt-8 border border-[#333] py-3 rounded-lg">
                View All Companies
            </button>
        </div>
    );
}