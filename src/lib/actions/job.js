
'use server'


export const CreateJob = async (finalData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_AUTH_URL}/api/job`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData)
    })
    const data = await res.json()
    return data ;
}

export const GetJob = async()=>{
    const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_AUTH_URL}/api/jobs`);
    return await res.json();
}