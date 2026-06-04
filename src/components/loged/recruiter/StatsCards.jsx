import {
  FileText,
  Users,
  Zap,
  CheckCircle,
} from "lucide-react";

const stats = [
  {
    icon: FileText,
    title: "Total Job Posts",
    value: "48",
  },
  {
    icon: Users,
    title: "Total Applicants",
    value: "1,284",
  },
  {
    icon: Zap,
    title: "Active Jobs",
    value: "18",
  },
  {
    icon: CheckCircle,
    title: "Jobs Closed",
    value: "32",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {stats.map((item, index) => (
        <div
          key={index}
          className="border border-[#2d2d2d] rounded-xl p-6 bg-[#111]"
        >
          <item.icon
            size={20}
            className="mb-8 text-gray-400"
          />

          <p className="text-sm text-gray-500">
            {item.title}
          </p>

          <h2 className="text-4xl mt-2">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}