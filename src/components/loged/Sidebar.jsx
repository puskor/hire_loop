import {
    LayoutDashboard,
    Building2,
    Briefcase,
    FileText,
    Settings,
} from "lucide-react";

const menuItems = [
    {
        icon: LayoutDashboard,
        title: "Dashboard",
        active: true,
    },
    {
        icon: Building2,
        title: "My Company",
    },
    {
        icon: Briefcase,
        title: "Manage Jobs",
    },
    {
        icon: FileText,
        title: "Applications",
    },
    {
        icon: Settings,
        title: "Settings",
    },
];


const all_links = (
    <nav className="mt-12">
        {menuItems.map((item, index) => (
            <div
                key={index}
                className={`flex items-center gap-4 px-4 py-4 cursor-pointer mb-1 ${item.active
                    ? "bg-[#1c1c1c] border-r-2 border-white"
                    : "text-gray-400"
                    }`}
            >
                <item.icon size={18} />
                <span>{item.title}</span>
            </div>
        ))}
    </nav>
    )

export default function Sidebar() {
    return (
        <aside className="w-[250px] hidden md:block border-r border-[#222] bg-[#0b0b0b]">
            <div className="p-6">

                <h1 className="text-3xl font-bold">HireLoop</h1>

                <div className="mt-8 flex items-center gap-3">
                    <img
                        src="https://i.pravatar.cc/100"
                        alt=""
                        className="w-12 h-12 rounded-full"
                    />

                    <div>
                        <h3 className="text-sm font-medium">
                            Alex Sterling
                        </h3>

                        <p className="text-xs text-gray-500">
                            Recruiter
                        </p>

                        <span className="text-[10px] bg-[#222] px-2 py-1 rounded">
                            PREMIUM ACCOUNT
                        </span>
                    </div>
                </div>

                {all_links}
            </div>
        </aside>
    );
}