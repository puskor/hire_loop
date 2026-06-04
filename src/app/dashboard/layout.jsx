import Sidebar from "@/components/loged/Sidebar";
import TopNavbar from "@/components/loged/TopNavbar";


export default function DashboardLayout({ children }) {
    return (
        <div className="flex bg-[#090909] text-white min-h-screen">
            {/* <Sidebar /> */}
            <Sidebar/>
            <div className="flex-1 flex flex-col">
                <TopNavbar/>

                <main className="pr-4 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}