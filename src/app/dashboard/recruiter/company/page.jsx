import AddCompany from "@/components/loged/recruiter/compant/AddCompany";
import CompanyCard from "@/components/loged/recruiter/compant/CompanyCard";

export default function Company() {
    const companies = [
        {
            name: "Vercel",
            industry: "Technology",
            description:
                "Vercel is the platform for frontend developers, providing speed and reliability. Experience the best workflow for React, Next.js and more.",

            location: "San Francisco",
            employees: "201-500 range",
            website: "https://vercel.com",
            status: "pending",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAuKrVgOa4BJxUnH4gdJ5TV0m2IFEMjLJ2g&s",
        },

        {
            name: "Figma",
            industry: "Technology",
            description:
                "Figma is the collaborative interface design tool. Design, prototype and gather feedback all in one place.",

            location: "San Francisco",
            employees: "501-1000 range",
            website: "https://figma.com",
            status: "approved",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62LVhts8-ERiNmlrfHQShVXasUYH38KKSRw&s",
        },

        {
            name: "Enosis Solutions",
            industry: "Technology",
            description:
                "ENOSIS - Your trusted software development partner. A top tier software development team assisting owners and decision makers.",

            location: "Dhaka, Bangladesh",
            employees: "51-200 range",
            website: "https://enosisbd.com",
            status: "pending",
            logo: "https://www.trgdatacenters.com/wp-content/uploads/2024/02/shutterstock_2182571667-1920x1080.jpg",
        },
    ];

    return (
        <div className="p-8">
            <AddCompany />

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 pt-6">
                {companies.map((company, index) => (
                    <CompanyCard
                        key={index}
                        {...company}
                    />
                ))}
            </div>
        </div>
    );
}