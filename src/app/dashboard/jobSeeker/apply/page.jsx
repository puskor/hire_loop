import { jobApplyData } from '@/lib/actions/seeker/applyJob';
import getUserSession from '@/lib/core/getUserSession';
import React from 'react';

const AllApply = async() => {
    const user =await getUserSession()
    const applyData =await jobApplyData(user.id)
    return (
        <div className='text-white'>
            data
            {
                applyData.map((apply)=><h1 key={apply._id}>1{apply?._id} {apply.jobId}</h1>)
            }
        </div>
    );
};

export default AllApply;