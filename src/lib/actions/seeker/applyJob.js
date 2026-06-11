

export const apply = async ({ finalData }) => {
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