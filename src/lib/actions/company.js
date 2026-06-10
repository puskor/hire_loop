
'use server'


export const CreateCompany = async (finalData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_AUTH_URL}/api/company`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData)
    })
    const data = await res.json()
    return data;
}


export const GetCompany = async (user_id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_AUTH_URL}/api/company?${user_id}`)
    const data = await res.json()
    return data;
}