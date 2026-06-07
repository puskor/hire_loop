"use client";
import { CreateJob } from "@/lib/actions/job";
import { useSession } from "@/lib/auth-client";
import { Button, Modal } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function JobAddModal({ isOpen, onOpenChange, resData }) {

    // console.log(resData)

    const [SelectedCompany, setSelectedCompany] = useState("");


    const handleCompanyChange = (e) => {
        const company = resData.find(
            (item) => item.name === e.target.value
        );
        setSelectedCompany(company);
    };

    const category = SelectedCompany?.category

    // console.log(category)

    const finance = (
        <>
            <option>Account Manager</option>
            <option>Area Manager</option>
        </>
    )

    const marketing = (
        <>
            <option>Marketing head</option>
            <option>Marketing diveson head</option>
            <option>Marketing area head</option>
        </>
    )

    const design = (
        <>
            <option>Main artist</option>
            <option>Fason Model</option>
            <option>Account Manager</option>
        </>
    )

    const technology = (
        <>
            <option>Full stack engineer</option>
            <option>AI/ML engineer</option>
            <option>Cloud engineer</option>
            <option>Security engineer</option>
        </>
    )

    const { data: session } = useSession()
    // console.log(session?.user?.id)
    const [isRemote, setIsRemote] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const finalData = {
            ...data,
            remote: isRemote,
            location: isRemote ? "" : data.location,
            postmanId: session?.user?.id
        }
        const res = await CreateJob(finalData)
        if (res.insertedId) {
            toast.success("Job post done")
            onOpenChange(!isOpen)
        }
        // console.log(res,"76,addModal")

    };

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="bg-black border overflow-auto p-10 max-w-[700px]">
                        <Modal.CloseTrigger />
                        <Modal.Body>
                            <form onSubmit={handleSubmit} className="space-y-5">

                                {/* ROW 1 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                    {/* Company */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-zinc-300">Company Name</label>
                                        <select
                                            onChange={handleCompanyChange}
                                            name="category"
                                            className="w-full mt-1 bg-[#1e1e1e] border border-[#262626] rounded-lg px-3.5 py-2.5 text-white text-sm"
                                        >
                                            {
                                                resData.map((item) => <option key={item._id}>{item.name}</option>)
                                            }
                                            {/* <option>Frontend</option> */}
                                            {/* <option>Backend</option>
                                            <option>Full Stack</option> */}
                                        </select>
                                    </div>

                                    {/* Category */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-zinc-300">Job Category</label>
                                        <select
                                            name="category"
                                            className="w-full mt-1 bg-[#1e1e1e] border border-[#262626] rounded-lg px-3.5 py-2.5 text-white text-sm"
                                        >
                                            {
                                                category == "finance" ? finance : category == "technology" ? technology : category == "marketing" ? marketing : category == "design" ? design : finance
                                            }
                                            {/* <option>Frontend</option>
                                            <option>Backend</option>
                                            <option>Full Stack</option> */}
                                        </select>
                                    </div>

                                    {/* Type */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-zinc-300">Job Type</label>
                                        <select
                                            name="type"
                                            className="w-full mt-1 bg-[#1e1e1e] border border-[#262626] rounded-lg px-3.5 py-2.5 text-white text-sm"
                                        >
                                            <option>Full Time</option>
                                            <option>Part Time</option>
                                        </select>
                                    </div>

                                    {/* Salary */}
                                    <div className="grid grid-cols-3 gap-2 ">
                                        <div>
                                            <label className="text-sm text-zinc-300">Min</label>
                                            <input
                                                required
                                                name="min"
                                                type="number"
                                                className="w-full mt-1 bg-[#1e1e1e] border border-[#262626] rounded-lg px-2 py-2 text-white text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-sm text-zinc-300">Max</label>
                                            <input
                                                required
                                                name="max"
                                                type="number"
                                                className="w-full mt-1 bg-[#1e1e1e] border border-[#262626] rounded-lg px-2 py-2 text-white text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-sm text-zinc-300">Currency</label>
                                            <select
                                                required

                                                name="currency"
                                                className="w-full mt-1 bg-[#1e1e1e] border border-[#262626] rounded-lg px-2 py-2 text-white text-sm"
                                            >
                                                <option>BDT</option>
                                                <option>USD</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* DEADLINE */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-zinc-300">Application Deadline</label>
                                        <input
                                            type="date"
                                            required
                                            name="deadline"
                                            className="w-full  mt-1 bg-[#1e1e1e] border border-[#262626] rounded-lg px-3.5 py-2.5 text-white text-sm"
                                        />
                                    </div>
                                    {/* LOCATION TYPE (NEW UX) */}
                                    <div className=" space-y-3">
                                        <label>
                                            <div className="flex items-center justify-between">

                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs text-zinc-400">Office</span>

                                                    <input
                                                        type="checkbox"
                                                        checked={isRemote}
                                                        onChange={(e) => setIsRemote(e.target.checked)}
                                                    />

                                                    <span className="text-xs text-zinc-400">Remote</span>
                                                </div>
                                            </div>
                                        </label>


                                        {/* OFFICE LOCATION ONLY */}

                                        <div className={`space-y-2 ${isRemote && "pointer-events-none"} `}>
                                            {/* <label className="text-sm text-zinc-300">Office Location</label> */}
                                            <input
                                                required
                                                name="location"
                                                placeholder="City, Country"
                                                className={`w-full mt-2 bg-[#1e1e1e] border border-[#262626] rounded-lg px-3.5 py-2.5  text-sm ${isRemote ? "text-black" : "text-white"} `}
                                            />
                                        </div>

                                    </div>
                                </div>



                                {/* REQUIREMENTS */}
                                <div className="space-y-2">
                                    <label className="text-sm text-zinc-300">Requirements</label>
                                    <textarea
                                        required
                                        name="requirements"
                                        rows={4}
                                        className="w-full mt-1 bg-[#1e1e1e] border border-[#262626] rounded-lg px-3.5 py-2.5 text-white text-sm"
                                    />
                                </div>

                                {/* BENEFITS */}
                                <div className="space-y-2">
                                    <label className="text-sm text-zinc-300">Benefits</label>
                                    <textarea
                                        required
                                        name="benefits"
                                        rows={4}
                                        className="w-full mt-1 bg-[#1e1e1e] border border-[#262626] rounded-lg px-3.5 py-2.5 text-white text-sm"
                                    />
                                </div>

                                {/* FOOTER */}
                                <div className="flex justify-end gap-3 pt-3 border-t border-[#262626]">

                                    <button
                                        type="button"
                                        onClick={() => onOpenChange(false)}
                                        className="px-5 py-2.5 rounded-lg border border-[#262626] bg-[#1a1a1a] text-zinc-300 text-sm"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="px-5 py-2.5 rounded-lg bg-white text-black text-sm font-semibold"
                                    >
                                        Publish Job
                                    </button>
                                </div>

                            </form>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}