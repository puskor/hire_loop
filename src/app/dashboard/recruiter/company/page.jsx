import AddCompany from "@/components/loged/recruiter/compant/AddCompany";
import CompanyCard from "@/components/loged/recruiter/compant/CompanyCard";

export default async function Company() {


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_AUTH_URL}/api/company`)
    const companyData = await res.json()



    return (
        <div className="p-8">
            <AddCompany />

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 pt-6">
                {companyData.map((company, index) => (
                    <CompanyCard key={index} company={company} />
                ))}
            </div>
        </div>
    );
}