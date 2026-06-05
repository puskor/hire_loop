"use client";

import { useState } from "react";
import CompanyRegisterModal from "./CompanyRegisterModal";

export default function AddCompany() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-semibold">
                        My Companies
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Manage your registered companies and their verification states.
                    </p>
                </div>

                <button
                    onClick={() => setOpen(true)}
                    className="bg-white text-black px-6 py-3 rounded-full font-medium"
                >
                    + Register a company
                </button>
            </div>

            <CompanyRegisterModal
                isOpen={open}
                onClose={() => setOpen(false) }
            />
        </>
    );
}