import { ArrowUpDown } from "lucide-react";
import { useState } from "react";

interface Job {
  id: number;
  title: string;
  location: string;
  experienceLevel: string;
  url: string;
}

const jobs: Job[] = [
  {
    id: 5017,
    title: "Software Developer Python DevOps (all genders welcome)",
    location: "Lingen (DE), Osnabrück (DE)",
    experienceLevel: "Professionals",
    url: "#",
  },
  {
    id: 4969,
    title: "Elektroniker (m/w/d)",
    location: "Lingen (DE)",
    experienceLevel: "Professionals",
    url: "#",
  },
  {
    id: 5023,
    title: "Assistant Manager - Finance",
    location: "Kuala Lumpur (MY)",
    experienceLevel: "Professionals",
    url: "#",
  },
  {
    id: 4697,
    title: "Ausbildungsplatz: Fachinformatiker Digitale Vernetzung (m/w/d) 2026",
    location: "Lingen (DE)",
    experienceLevel: "Apprenticeship & Dual Studies",
    url: "#",
  },
  {
    id: 4735,
    title: "Ingenieur (m/w/d) als System Integration Engineer",
    location: "Lingen (DE)",
    experienceLevel: "Professionals",
    url: "#",
  },
  {
    id: 4967,
    title: "Asset and Shipment Coordinator",
    location: "Bergen (NO)",
    experienceLevel: "Professionals",
    url: "#",
  },
  {
    id: 4671,
    title: "Projektleiter (m/w/d) in der Softwareentwicklung für den Bereich Applikationssoftware",
    location: "Lingen (DE)",
    experienceLevel: "Professionals",
    url: "#",
  },
  {
    id: 4140,
    title: "Werkstudent (m/w/d) im Bereich Corporate Marketing & Communications",
    location: "Lingen (DE)",
    experienceLevel: "Students & Graduates",
    url: "#",
  },
];

type SortField = "title" | "location" | "experience";
type SortOrder = "asc" | "desc";

export function JobList() {
  const [sortField, setSortField] = useState<SortField>("title");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [visibleCount, setVisibleCount] = useState(8);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const sortedJobs = [...jobs].sort((a, b) => {
    let aValue: string, bValue: string;
    switch (sortField) {
      case "title":
        aValue = a.title;
        bValue = b.title;
        break;
      case "location":
        aValue = a.location;
        bValue = b.location;
        break;
      case "experience":
        aValue = a.experienceLevel;
        bValue = b.experienceLevel;
        break;
    }
    const comparison = aValue.localeCompare(bValue);
    return sortOrder === "asc" ? comparison : -comparison;
  });

  const visibleJobs = sortedJobs.slice(0, visibleCount);

  return (
    <div className="bg-white rounded-b-lg overflow-hidden border border-t-0 border-gray-200">
      {/* Table Header */}
      <div className="hidden md:grid md:grid-cols-12 text-white text-sm font-medium" style={{ backgroundColor: "#375578" }}>
        <button
          onClick={() => handleSort("title")}
          className="col-span-6 px-4 py-3 text-left flex items-center gap-2 hover:bg-opacity-90 transition-colors"
        >
          Job Title <ArrowUpDown className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleSort("location")}
          className="col-span-3 px-4 py-3 text-left flex items-center gap-2 hover:bg-opacity-90 transition-colors"
        >
          Location <ArrowUpDown className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleSort("experience")}
          className="col-span-3 px-4 py-3 text-left flex items-center gap-2 hover:bg-opacity-90 transition-colors"
        >
          Experience Level <ArrowUpDown className="w-4 h-4" />
        </button>
      </div>

      {/* Job Rows */}
      <div className="divide-y divide-gray-100">
        {visibleJobs.map((job) => (
          <a
            key={job.id}
            href={job.url}
            className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-0 p-4 hover:bg-gray-50 transition-colors group border-b border-gray-100"
          >
            <div className="md:col-span-6">
              <span className="md:hidden text-xs text-rosen-gray uppercase mb-1 block font-medium">Job Title</span>
              <span className="text-rosen-navy font-semibold group-hover:text-rosen-blue transition-colors">
                {job.title}
              </span>
            </div>
            <div className="md:col-span-3">
              <span className="md:hidden text-xs text-rosen-gray uppercase mb-1 block font-medium">Location</span>
              <span className="text-rosen-gray">{job.location}</span>
            </div>
            <div className="md:col-span-3">
              <span className="md:hidden text-xs text-rosen-gray uppercase mb-1 block font-medium">Experience Level</span>
              <span className="text-rosen-gray">{job.experienceLevel}</span>
            </div>
          </a>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < jobs.length && (
        <div className="p-6 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="bg-white border-2 border-rosen-dark-blue text-rosen-dark-blue hover:bg-gray-50 px-8 py-2 rounded transition-colors font-medium"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
