import { useState } from "react";

function SortIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M13.1 9.4c.2.2.2.526 0 .726L8.363 14.85c-.201.2-.527.2-.728 0l-4.735-4.724a.51.51 0 0 1 0-.726c.2-.2.527-.2.728 0L8 13.76l4.371-4.36c.201-.2.527-.2.728 0M2.9 6.6a.51.51 0 0 1 0-.726L7.637 1.15c.201-.2.527-.2.728 0l4.735 4.724c.201.2.201.525 0 .726-.2.2-.527.2-.728 0L8 2.24 3.629 6.6c-.201.2-.527.2-.728 0"
        clipRule="evenodd"
      />
    </svg>
  );
}

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
    url: "https://jobs.rosen-group.com/job/5017?referrer=jobs.rosen-group.com",
  },
  {
    id: 4969,
    title: "Elektroniker (m/w/d)",
    location: "Lingen (DE)",
    experienceLevel: "Professionals",
    url: "https://jobs.rosen-group.com/job/4969?referrer=jobs.rosen-group.com",
  },
  {
    id: 5023,
    title: "Assistant Manager - Finance",
    location: "Kuala Lumpur (MY)",
    experienceLevel: "Professionals",
    url: "https://jobs.rosen-group.com/job/5023?referrer=jobs.rosen-group.com",
  },
  {
    id: 4697,
    title: "Ausbildungsplatz: Fachinformatiker Digitale Vernetzung (m/w/d) 2026",
    location: "Lingen (DE)",
    experienceLevel: "Apprenticeship & Dual Studies",
    url: "https://jobs.rosen-group.com/job/4697?referrer=jobs.rosen-group.com",
  },
  {
    id: 4735,
    title: "Ingenieur (m/w/d) als System Integration Engineer",
    location: "Lingen (DE)",
    experienceLevel: "Professionals",
    url: "https://jobs.rosen-group.com/job/4735?referrer=jobs.rosen-group.com",
  },
  {
    id: 4967,
    title: "Asset and Shipment Coordinator",
    location: "Bergen (NO)",
    experienceLevel: "Professionals",
    url: "https://jobs.rosen-group.com/job/4967?referrer=jobs.rosen-group.com",
  },
  {
    id: 4671,
    title: "Projektleiter (m/w/d) in der Softwareentwicklung für den Bereich Applikationssoftware",
    location: "Lingen (DE)",
    experienceLevel: "Professionals",
    url: "https://jobs.rosen-group.com/job/4671?referrer=jobs.rosen-group.com",
  },
  {
    id: 4140,
    title: "Werkstudent (m/w/d) im Bereich Corporate Marketing & Communications",
    location: "Lingen (DE)",
    experienceLevel: "Students & Graduates",
    url: "https://jobs.rosen-group.com/job/4140?referrer=jobs.rosen-group.com",
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
    <div className="job-list">
      <div className="job-list__container">
        <div className="job-list__table">
          {/* Table Header */}
          <div className="job-list__header">
            <button onClick={() => handleSort("title")} className="job-list__header-btn" title="Job Title">
              <span>Job Title</span>
              <SortIcon />
            </button>
            <button onClick={() => handleSort("location")} className="job-list__header-btn" title="Location">
              <span>Location</span>
              <SortIcon />
            </button>
            <button onClick={() => handleSort("experience")} className="job-list__header-btn" title="Experience Level">
              <span>Experience Level</span>
              <SortIcon />
            </button>
          </div>

          {/* Job Rows */}
          <div className="job-list__rows">
            {visibleJobs.map((job) => (
              <a key={job.id} href={job.url} className="job-list__row">
                <div className="job-list__col-title" title={job.title}>
                  {job.title}
                </div>
                <div className="job-list__col-location" title={job.location}>
                  {job.location}
                </div>
                <div className="job-list__col-experience" title={job.experienceLevel}>
                  {job.experienceLevel}
                </div>
              </a>
            ))}
          </div>

          {/* Load More Button */}
          <div className="job-list__load-more">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="job-list__load-more-btn"
            >
              Load more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
