

export const jobApply = async (finalData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_AUTH_URL}/api/job_apply`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData)
    })
    const data = await res.json()
    return data;
}

export const jobApplyData = async (user_id) => {
    // console.log(user_id)
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_AUTH_URL}/api/job_apply?user_id=${user_id}`)
    const result = await res.json()
    return result;
}
