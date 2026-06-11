import JobApplyForm from '@/components/loged/jobSeeker/JobApplyForm';
import JobDetails from '@/components/shered/JobDetails';
import {  GetJobByJobId } from '@/lib/actions/job';
import React from 'react';

const Jobs = async ({ params }) => {
    const { id } = await params
    const job = await GetJobByJobId(id)

    // console.log(job)
    return (
        <div>
            <JobDetails job={job[0]}/>
            <JobApplyForm job={job[0]}/>
        </div>
    );
};

export default Jobs;