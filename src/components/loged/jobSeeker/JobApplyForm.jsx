"use client";

const JobApplyForm = ({ job }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const applicantData = Object.fromEntries(formData.entries());

        // console.log(applicantData);


        const finalData = {
            ...applicantData,
            jobId: job._id,
            companyId: job.companyId,
            recruiterId: job.postmanId,

            company: job.company,
            category: job.category,

            appliedAt: new Date(),
            status: "Pending",
        };
        console.log(finalData)

        // API Call Example
        // await fetch("/api/applications", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         ...applicantData,
        //         jobId: job?._id,
        //     }),
        // });

        // e.target.reset();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-[#111827] border border-gray-800 rounded-2xl p-6"
        >
            <h2 className="text-2xl font-bold text-white mb-6">
                Apply For This Job
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

                {/* Required Fields */}

                <Input
                    label="Full Name"
                    name="fullName"
                    required
                />

                <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    required
                />

                <Input
                    label="Phone Number"
                    name="phone"
                    type="Number"
                    required
                />

                <Input
                    label="Address"
                    name="address"
                    required
                />

                <Input
                    label="LinkedIn Profile"
                    name="linkedin"
                    type="url"
                    placeholder="https://linkedin.com/in/your-profile"
                    required
                />

                {/* Optional Fields */}

                <Input
                    label="GitHub Profile"
                    name="github"
                    type="url"
                    placeholder="https://github.com/username"
                />

                <Input
                    label="Portfolio Website"
                    name="portfolio"
                    type="url"
                    placeholder="https://yourportfolio.com"
                />

                <Input
                    label="Resume Link"
                    name="resume"
                    type="url"
                    required
                    placeholder="Google Drive / Dropbox Link"
                />
            </div>

            <div className="mt-5">
                <label className="block text-gray-300 mb-2">
                    Professional Summary
                </label>

                <textarea
                    name="bio"
                    rows={5}
                    placeholder="Tell the recruiter about yourself..."
                    className="w-full bg-[#1f2937] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition"
            >
                Submit Application
            </button>
        </form>
    );
};

const Input = ({
    label,
    name,
    type = "text",
    required = false,
    placeholder = "",
}) => {
    return (
        <div>
            <label className="block text-gray-300 mb-2">
                {label}
                {required && (
                    <span className="text-red-500 ml-1">*</span>
                )}
            </label>

            <input
                type={type}
                name={name}
                required={required}
                placeholder={placeholder}
                className="w-full bg-[#1f2937] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export default JobApplyForm;