// "use client";

// import {
//     Modal,
//     ModalContent,
//     Input,
//     Textarea,
//     Select,
//     SelectItem,
// } from "@heroui/react";

// import {
//     X,
//     MapPin,
//     Upload,
//     ChevronDown,
// } from "lucide-react";

// const industries = [
//     "Technology",
//     "Fintech",
//     "Healthcare",
//     "Education",
// ];

// const employeeRanges = [
//     "1-10 employees",
//     "11-50 employees",
//     "51-200 employees",
//     "201-500 employees",
//     "500+ employees",
// ];

// export default function CompanyRegisterModal({
//     isOpen,
//     onClose,
// }) {
//     return (
//         <Modal
//             isOpen={isOpen}
//             onClose={onClose}
//             size="5xl"
//             hideCloseButton
//             classNames={{
//                 base: "bg-[#111111] border border-[#2a2a2a] text-white",
//             }}
//         >
//             <ModalContent>
//                 <div>

//                     {/* Header */}
//                     <div className="px-8 py-7 border-b border-[#2a2a2a] flex justify-between items-start">
//                         <div>
//                             <h2 className="text-4xl font-semibold">
//                                 Register New Company
//                             </h2>

//                             <p className="text-gray-400 mt-2">
//                                 Enter your business details to start hiring on HireLoop.
//                             </p>
//                         </div>

//                         <button
//                             onClick={onClose}
//                             className="text-gray-400 hover:text-white"
//                         >
//                             <X size={28} />
//                         </button>
//                     </div>

//                     {/* Body */}
//                     <div className="p-8">

//                         <div className="grid md:grid-cols-2 gap-8">

//                             {/* Company Name */}
//                             <Input
//                                 label="Company Name"
//                                 placeholder="e.g. Acme Corp"
//                                 variant="bordered"
//                                 classNames={{
//                                     inputWrapper:
//                                         "bg-[#1a1a1a] border-[#2a2a2a]",
//                                 }}
//                             />

//                             {/* Industry */}
//                             <Select
//                                 label="Industry / Category"
//                                 placeholder="Technology"
//                                 selectorIcon={<ChevronDown size={18} />}
//                                 variant="bordered"
//                                 classNames={{
//                                     trigger:
//                                         "bg-[#1a1a1a] border-[#2a2a2a]",
//                                 }}
//                             >
//                                 {industries.map((item) => (
//                                     <SelectItem key={item}>
//                                         {item}
//                                     </SelectItem>
//                                 ))}
//                             </Select>

//                             {/* Website */}
//                             <Input
//                                 label="Website URL"
//                                 placeholder="www.company.com"
//                                 startContent={
//                                     <span className="text-gray-500">
//                                         https://
//                                     </span>
//                                 }
//                                 variant="bordered"
//                                 classNames={{
//                                     inputWrapper:
//                                         "bg-[#1a1a1a] border-[#2a2a2a]",
//                                 }}
//                             />

//                             {/* Location */}
//                             <Input
//                                 label="Location"
//                                 placeholder="City, Country"
//                                 startContent={
//                                     <MapPin
//                                         size={18}
//                                         className="text-gray-500"
//                                     />
//                                 }
//                                 variant="bordered"
//                                 classNames={{
//                                     inputWrapper:
//                                         "bg-[#1a1a1a] border-[#2a2a2a]",
//                                 }}
//                             />

//                             {/* Employee Count */}
//                             <Select
//                                 label="Employee Count Range"
//                                 placeholder="1-10 employees"
//                                 selectorIcon={<ChevronDown size={18} />}
//                                 variant="bordered"
//                                 classNames={{
//                                     trigger:
//                                         "bg-[#1a1a1a] border-[#2a2a2a]",
//                                 }}
//                             >
//                                 {employeeRanges.map((item) => (
//                                     <SelectItem key={item}>
//                                         {item}
//                                     </SelectItem>
//                                 ))}
//                             </Select>

//                             {/* Upload */}
//                             <div>
//                                 <label className="block text-sm mb-3">
//                                     Company Logo
//                                 </label>

//                                 <div className="flex items-center gap-4">
//                                     <label className="w-20 h-20 border-2 border-dashed border-[#444] rounded-xl flex items-center justify-center cursor-pointer hover:border-white transition">
//                                         <Upload size={22} />

//                                         <input
//                                             type="file"
//                                             className="hidden"
//                                             accept="image/*"
//                                         />
//                                     </label>

//                                     <div>
//                                         <p className="font-medium">
//                                             Upload image
//                                         </p>

//                                         <p className="text-sm text-gray-500">
//                                             PNG, JPG up to 5MB
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Description */}
//                         <div className="mt-8">
//                             <Textarea
//                                 label="Brief Description"
//                                 placeholder="Tell us about your company's mission and culture..."
//                                 minRows={6}
//                                 variant="bordered"
//                                 classNames={{
//                                     inputWrapper:
//                                         "bg-[#1a1a1a] border-[#2a2a2a]",
//                                 }}
//                             />
//                         </div>
//                     </div>

//                     {/* Footer */}
//                     <div className="border-t border-[#2a2a2a] p-8 flex justify-end gap-4">

//                         <button
//                             onClick={onClose}
//                             className="h-12 px-8 rounded-xl border border-[#2a2a2a]"
//                         >
//                             Cancel
//                         </button>

//                         <button
//                             className="h-12 px-8 rounded-xl bg-white text-black font-semibold"
//                         >
//                             Register Company
//                         </button>

//                     </div>
//                 </div>
//             </ModalContent>
//         </Modal>
//     );
// }

import React from 'react';

const CompanyRegisterModal = () => {
    return (
        <div>
            asdc
        </div>
    );
};

export default CompanyRegisterModal;