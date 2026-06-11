import React from 'react';

const Job = async({params}) => {
    const {id} =await params
    console.log(id)
    return (
        <div className='text-white'>
            this is job {id}
        </div>
    );
};

export default Job;