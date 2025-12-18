import { useState, useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { SortIcon } from "../icons";
import { jobs } from "../../constants";
import { listItem, hoverScaleSmall, jobRowHover, getStaggerDelay } from "@/lib/animations";

type SortField = "title" | "location" | "experience";
type SortOrder = "asc" | "desc";

export function JobList() {
  const { t } = useTranslation();
  const [sortField, setSortField] = useState<SortField>("title");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [visibleCount, setVisibleCount] = useState(8);

  const handleSort = useCallback((field: SortField) => {
    setSortField((prevField) => {
      if (prevField === field) {
        setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
        return prevField;
      }
      setSortOrder("asc");
      return field;
    });
  }, []);

  const sortedJobs = useMemo(() => {
    return [...jobs].sort((a, b) => {
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
  }, [sortField, sortOrder]);

  const visibleJobs = useMemo(
    () => sortedJobs.slice(0, visibleCount),
    [sortedJobs, visibleCount]
  );

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => prev + 8);
  }, []);

  return (
    <div className="job-list">
      <div className="job-list__container">
        <div className="job-list__table">
          <div className="job-list__header">
            <button onClick={() => handleSort("title")} className="job-list__header-btn job-list__header-col--title" title={t("jobs.jobTitle")}>
              <span>{t("jobs.jobTitle")}</span>
              <SortIcon />
            </button>
            <button onClick={() => handleSort("location")} className="job-list__header-btn job-list__header-col--location" title={t("jobs.location")}>
              <span>{t("jobs.location")}</span>
              <SortIcon />
            </button>
            <button onClick={() => handleSort("experience")} className="job-list__header-btn job-list__header-col--experience" title={t("jobs.experienceLevel")}>
              <span>{t("jobs.experienceLevel")}</span>
              <SortIcon />
            </button>
          </div>

          <div className="job-list__rows">
            <AnimatePresence mode="popLayout">
              {visibleJobs.map((job, index) => (
                <motion.a
                  key={job.id}
                  href={job.url}
                  className="job-list__row"
                  variants={listItem}
                  initial="initial"
                  animate="animate"
                  exit={{ opacity: 0, y: -20 }}
                  transition={getStaggerDelay(index)}
                  whileHover={jobRowHover}
                >
                  <div className="job-list__col-title" title={job.title}>
                    {job.title}
                  </div>
                  <div className="job-list__col-location" title={job.location}>
                    {job.location}
                  </div>
                  <div className="job-list__col-experience" title={job.experienceLevel}>
                    {job.experienceLevel}
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>

          <div className="job-list__load-more">
            <motion.button
              type="button"
              onClick={handleLoadMore}
              className="job-list__load-more-btn"
              variants={hoverScaleSmall}
              whileHover="hover"
              whileTap="tap"
            >
              {t("jobs.loadMore")}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
