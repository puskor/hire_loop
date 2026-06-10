import AddCompany from "@/components/loged/recruiter/compant/AddCompany";
import CompanyCard from "@/components/loged/recruiter/compant/CompanyCard";
import { GetCompany } from "@/lib/actions/company";
import getUserSession from "@/lib/core/getUserSession";

export default async function Company() {


    const user = await getUserSession()
    const companyData = await GetCompany(user.id)

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