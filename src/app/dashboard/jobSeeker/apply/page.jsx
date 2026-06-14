import ApplyCard from '@/components/loged/jobSeeker/ApplyCard';
import { jobApplyData } from '@/lib/actions/seeker/applyJob';
import getUserSession from '@/lib/core/getUserSession';
import React from 'react';

const AllApply = async () => {
    const user = await getUserSession()
    const applyData = await jobApplyData(user.id)

    // console.log(applyData)
    return (
        <div className='text-white'>
            <h1 className='text-xl p-3'>Total Apply : <span className='font-bold'>{applyData.length}</span></h1>
            <div className='space-y-3'>
                {
                    applyData.map((apply) => <ApplyCard key={apply._id} apply={apply} />)
                }
            </div>
        </div>
    );
};

export default AllApply;