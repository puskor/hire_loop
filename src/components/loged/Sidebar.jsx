import {
    LayoutDashboard,
    Building2,
    Briefcase,
    FileText,
    Settings,
    SquareChevronRight,
} from "lucide-react";
import { Button, Drawer } from "@heroui/react";
import NavLink from "../shered/NavLinks";
import getUserSession from "@/lib/core/getUserSession";



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
            <button
                key={index}
                className={`flex items-center gap-4 px-4 py-4 cursor-pointer mb-1 ${item.active
                    ? "bg-[#1c1c1c] border-r-2 border-white"
                    : "text-gray-400"
                    }`}
            >
                <item.icon size={18} />
                <span>{item.title}</span>
            </button>
        ))}
    </nav>
)

const requiter_links = (
    <nav className="mt-10">
        <NavLink href="/dashboard" className="flex items-center gap-4 px-4 py-2 cursor-pointer  text-gray-400 border-y border-gray-600"><LayoutDashboard /> Dashboard</NavLink>
        <NavLink href="/dashboard/recruiter/company" className="flex items-center gap-4 px-4 py-2 cursor-pointer  text-gray-400 border-y border-gray-600"><Building2 /> My Company</NavLink>
        <NavLink href="/dashboard/recruiter/jobs" className="flex items-center gap-4 px-4 py-2 cursor-pointer  text-gray-400 border-y border-gray-600"><Briefcase /> Manage Jobs</NavLink>
        <NavLink href="/dashboard/recruiter/#" className="flex items-center gap-4 px-4 py-2 cursor-pointer  text-gray-400 border-y border-gray-600"><FileText /> Applications</NavLink>
        <NavLink href="/dashboard/recruiter/#" className="flex items-center gap-4 px-4 py-2 cursor-pointer  text-gray-400 border-y border-gray-600"><Settings /> Settings</NavLink>
    </nav>
)

const seeker_links = (
    <nav className="mt-10">
        <NavLink href="/dashboard" className="flex items-center gap-4 px-4 py-2 cursor-pointer  text-gray-400 border-y border-gray-600"><LayoutDashboard /> Dashboard</NavLink>

        <NavLink href="/dashboard/recruiter/#" className="flex items-center gap-4 px-4 py-2 cursor-pointer  text-gray-400 border-y border-gray-600"><FileText /> Applications</NavLink>
        <NavLink href="/dashboard/recruiter/#" className="flex items-center gap-4 px-4 py-2 cursor-pointer  text-gray-400 border-y border-gray-600"><Settings /> Settings</NavLink>
    </nav>
)

export default async function Sidebar() {
    const user = await getUserSession()


    return (
        <>
            <Drawer className="p-0  fixed top-0">
                <Button variant="" className="md:hidden mt-3">
                    <SquareChevronRight />
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog className="p-0 w-[220px]">
                            <Drawer.CloseTrigger />
                            <Drawer.Body className={"bg-[#0b0b0b] text-white pt-2"}>
                                {requiter_links}
                            </Drawer.Body>

                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>

            <aside className=" md:w-[250px] hidden md:block sticky top-0 border-r border-[#222] bg-[#0b0b0b]">
                <div className="p-6 ">
                    <a href="/" className="text-3xl font-bold">HireLoop</a>
                    <div className="mt-8 flex items-center gap-3">
                        <img
                            src={user?.image}
                            alt=""
                            className="w-12 h-12 rounded-full"
                        />

                        <div>
                            <h3 className="text-sm font-medium">
                                {user?.name}
                            </h3>

                            <p className="text-xs text-gray-500">
                                {user?.role}
                            </p>

                            <span className="text-[10px] bg-[#222] px-2 py-1 rounded">
                                PREMIUM ACCOUNT
                            </span>
                        </div>
                    </div>
                    {
                        user.role === "seeker" ?  seeker_links  :  requiter_links 
                    }
                </div>
            </aside>
        </>

    );
}