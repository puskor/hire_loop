
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

export const GetCompanyById = async (Company_id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_AUTH_URL}/api/company?company_id=${Company_id}`)
    const data = await res.json()
    return data;
}

export const GetCompany = async (user_id) => {
    // console.log(user_id,"199999")
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_AUTH_URL}/api/company?user_id=${user_id}`)
    const data = await res.json()
    return data;
}