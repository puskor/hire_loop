import AddJobs from '@/components/loged/recruiter/jobs/AddJobs';
import { GetCompany } from '@/lib/actions/company';
import { GetJob } from '@/lib/actions/job';
import getUserSession from '@/lib/core/getUserSession';
import React from 'react';

const Jobs = async() => {

    const user =await getUserSession()

    // console.log(user)
    const resData = await GetCompany(user?.id)
    const jobsData = await GetJob(user?.id)

    // console.log(jobsData)

    // console.log(resData);
    return (
        <div>
            <AddJobs resData={resData} jobsData={jobsData}/>
        </div>
    );
};

export default Jobs;