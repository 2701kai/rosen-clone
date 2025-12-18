import { useState } from "react";
import { SortIcon } from "../icons";
import { jobs } from "../../constants";

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
          <div className="job-list__header">
            <button onClick={() => handleSort("title")} className="job-list__header-btn job-list__header-col--title" title="Job Title">
              <span>Job Title</span>
              <SortIcon />
            </button>
            <button onClick={() => handleSort("location")} className="job-list__header-btn job-list__header-col--location" title="Location">
              <span>Location</span>
              <SortIcon />
            </button>
            <button onClick={() => handleSort("experience")} className="job-list__header-btn job-list__header-col--experience" title="Experience Level">
              <span>Experience Level</span>
              <SortIcon />
            </button>
          </div>

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
