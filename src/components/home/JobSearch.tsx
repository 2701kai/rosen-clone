import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { ChevronRight } from "../icons";
import { Select } from "../ui";
import { regions, cities, jobFields, experienceLevels } from "../../constants";
import { fadeInDown, hoverScaleSmall, hoverSlideRight } from "@/lib/animations";

export function JobSearch() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState(regions[0]);
  const [city, setCity] = useState(cities[0]);
  const [jobField, setJobField] = useState(jobFields[0]);
  const [experience, setExperience] = useState(experienceLevels[0]);

  const handleClearAll = () => {
    setSearchQuery("");
    setRegion(regions[0]);
    setCity(cities[0]);
    setJobField(jobFields[0]);
    setExperience(experienceLevels[0]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <motion.div
      className="search__filter-form py-6 bg-[image:var(--gradient-search-form)]"
      variants={fadeInDown}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.4 }}
    >
      <form onSubmit={handleSubmit}>
        <div className="container mx-auto px-4">
          <h5 className="job-search__heading">{t("jobs.openVacancies")}</h5>
        </div>

        <div className="search__filter-form__input">
          <div className="container mx-auto px-4">
            <div className="suggestion-box">
              <div className="suggestion-box__input flex gap-3 mb-4">
                <div className="flex-1 relative">
                  <input
                    name="search"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t("jobs.searchPlaceholder")}
                    autoComplete="off"
                    className="search__input w-full bg-white text-gray-700 placeholder-gray-500"
                  />
                </div>
                <motion.button
                  type="button"
                  className="search__btn whitespace-nowrap"
                  variants={hoverScaleSmall}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => window.open("https://elita.dev/what-we-do.mp4", "_blank")}
                >
                  {t("jobs.findJob")}
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <Select value={region} onChange={setRegion} options={regions} />
            <Select value={city} onChange={setCity} options={cities} />
            <Select value={jobField} onChange={setJobField} options={jobFields} />
            <Select value={experience} onChange={setExperience} options={experienceLevels} />
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-right">
            <motion.button
              type="reset"
              onClick={handleClearAll}
              className="text-white hover:text-white/80 transition-colors inline-flex items-center gap-1 text-sm font-medium"
              variants={hoverSlideRight}
              whileHover="hover"
            >
              {t("jobs.clearAll")} <ChevronRight />
            </motion.button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
