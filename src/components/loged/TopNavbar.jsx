"use client"

import { authClient, useSession } from "@/lib/auth-client";
import { Bell, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { TiThMenuOutline } from "react-icons/ti";

export default function TopNavbar() {
    const router = useRouter()

    const {data:session} = useSession()


    const handelLogout = async () => {
        await authClient.signOut();
        router.push("/")
    }

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

                <div className="group relative cursor-pointer mx-15 ">
                    <TiThMenuOutline className={"text-xl"} />
                    <div className='absolute hidden group-hover:block border-gray-600 border w-35 text-center top-5 z-30 backdrop-blur-md rounded-md bg-black/60 right-0 '>
                        <button onClick={() => router.push("/")} className='text-green-600 w-full cursor-pointer py-2'>Profile</button>
                        <hr />
                        <button onClick={handelLogout} className='text-red-600 w-full cursor-pointer py-2'>Logout</button>
                    </div>

                </div>
            </div>
        </header>
    );
}