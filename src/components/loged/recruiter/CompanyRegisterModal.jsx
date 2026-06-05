"use client";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { MapPin, Upload } from "lucide-react";

export default function CompanyRegisterModal({ isOpen, onClose }) {
    const handleForm = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
        onClose()
        console.log(data);
    }

    return (
        <Modal isOpen={isOpen} onOpenChange={onClose}>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="bg-black border overflow-auto">
                        <Modal.CloseTrigger />
                        <Modal.Body>
                            <form onSubmit={handleForm} className="py-4 px-2 space-y-5">
                                {/* Two-Column Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">
                                    {/* Company Name */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-zinc-300">Company Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="e.g. Acme Corp"
                                            className="w-full bg-[#1e1e1e] border border-[#262626] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                                        />
                                    </div>

                                    {/* Industry / Category */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-zinc-300">Industry / Category</label>
                                        <div className="relative">
                                            <select
                                                className="w-full bg-[#1e1e1e] border border-[#262626] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-500 transition-colors appearance-none cursor-pointer"
                                                defaultValue="technology"
                                                name="category"
                                            >
                                                <option value="technology">Technology</option>
                                                <option value="design">Design & Creative</option>
                                                <option value="finance">Finance & Legal</option>
                                                <option value="marketing">Marketing & Sales</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-zinc-500">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Website URL */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-zinc-300">Website URL</label>
                                        <div className="flex rounded-lg overflow-hidden border border-[#262626]">
                                            
                                            <input
                                                type="text"
                                                name="web_url"
                                                placeholder="www.company.com"
                                                className="w-full bg-[#1e1e1e] px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-zinc-300">Location</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                            <input
                                                type="text"
                                                name="location"
                                                placeholder="City, Country"
                                                className="w-full bg-[#1e1e1e] border border-[#262626] rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Employee Count Range */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-zinc-300">Employee Count Range</label>
                                        <div className="relative">
                                            <select
                                                name="employee_number"
                                                className="w-full bg-[#1e1e1e] border border-[#262626] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-500 transition-colors appearance-none cursor-pointer"
                                                defaultValue="1-10"
                                            >
                                                <option value="1-10">1-10 employees</option>
                                                <option value="11-50">11-50 employees</option>
                                                <option value="51-200">51-200 employees</option>
                                                <option value="201+">201+ employees</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-zinc-500">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Company Logo Dropzone */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-zinc-300">
                                            Company Logo
                                        </label>

                                        <input
                                            type="file"
                                            name="logo"
                                            accept="image/png, image/jpeg"
                                            className="hidden"
                                            id="logoUpload"
                                        />

                                        <label
                                            htmlFor="logoUpload"
                                            className="border border-dashed border-[#333] rounded-lg p-3 bg-[#1e1e1e]/40 flex items-center gap-3.5 hover:bg-[#1e1e1e]/80 transition-colors cursor-pointer group"
                                        >
                                            <div className="bg-[#1e1e1e] border border-[#333] p-2.5 rounded-lg text-zinc-400 group-hover:text-zinc-200 transition-colors">
                                                <Upload className="w-4 h-4" />
                                            </div>

                                            <div>
                                                <p className="text-sm font-medium text-zinc-200">Upload image</p>
                                                <p className="text-xs text-zinc-500 mt-0.5">
                                                    PNG, JPG up to 5MB
                                                </p>
                                            </div>
                                        </label>
                                    </div>

                                </div>

                                {/* Brief Description */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-zinc-300">Brief Description</label>
                                    <textarea
                                        name="description"
                                        rows={4}
                                        placeholder="Tell us about your company's mission and culture..."
                                        className="w-full bg-[#1e1e1e] border border-[#262626] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                                    />
                                </div>

                                {/* Action Footer Button Container */}
                                <div className="flex justify-end gap-3 pt-4 border-t border-[#262626]">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="px-5 py-2.5 rounded-lg border border-[#262626] bg-[#1a1a1a] text-zinc-300 text-sm font-medium hover:bg-[#222] hover:text-white transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        slot="close"
                                        className="px-5 py-2.5 rounded-lg bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors"
                                    >
                                        Register Company
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