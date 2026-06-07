"use client";

import { useState } from "react";
import JobAddModal from "./JobAddModal";
import JobsCard from "./JobCard";
// import CompanyRegisterModal from "./CompanyRegisterModal";

export default function AddJobs({resData,jobsData}) {


    const [isOpen,onOpenChange] = useState(false)
            
    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-semibold">
                        My Jobs
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Manage your job and their verification states.
                    </p>
                </div>

                <button
                    onClick={() => onOpenChange(true)}
                    className="bg-white text-black px-6 py-3 rounded-full font-medium"
                >
                    + Create New Job
                </button>
            </div>
            <JobAddModal isOpen={isOpen} onOpenChange={onOpenChange} resData={resData}/>
            <JobsCard jobsData={jobsData}/>
        </>
    );
}