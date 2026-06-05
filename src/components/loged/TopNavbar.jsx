import { Bell, Search } from "lucide-react";

export default function TopNavbar() {
    return (
        <header className="md:h-[80px] border-b border-[#222] flex items-center justify-between pr-3 md:px-8 pt-1 ">

            <div className="relative md:w-[700px]">
                <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                    placeholder="Search applications, jobs, or talent..."
                    className="w-full h-12 bg-transparent border border-[#333] rounded-lg pl-12 outline-none"
                />
            </div>

            <div className="flex items-center gap-2">

                <Bell size={20} />

                <div className="h-8 w-[1px] bg-[#333]" />

                <div className="flex items-center gap-3">
                    <div>
                        <h4 className="text-sm">
                            Alex Sterling
                        </h4>

                        <p className="text-xs text-gray-500">
                            TechFlow Inc.
                        </p>
                    </div>

                    <img
                        src="https://i.pravatar.cc/100"
                        alt=""
                        className="w-10 h-10 rounded-full"
                    />
                </div>
            </div>
        </header>
    );
}