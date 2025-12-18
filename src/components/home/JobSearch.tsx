import { useState } from "react";
import { ChevronRight } from "../icons";
import { Select } from "../ui";
import { regions, cities, jobFields, experienceLevels } from "../../constants";

export function JobSearch() {
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
    <div
      className="search__filter-form py-6"
      style={{
        background: "linear-gradient(108.59deg, #375578 8.33%, #1395D9 77.6%)",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="container mx-auto px-4">
          <h5 className="job-search__heading">Open vacancies</h5>
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
                    placeholder="Search for Title or Job Number"
                    autoComplete="off"
                    className="search__input w-full bg-white text-gray-700 placeholder-gray-500"
                  />
                </div>
                <button type="submit" className="search__btn whitespace-nowrap">
                  Find your Job
                </button>
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
            <button
              type="reset"
              onClick={handleClearAll}
              className="text-white hover:text-white/80 transition-colors inline-flex items-center gap-1 text-sm font-medium"
            >
              Clear All <ChevronRight />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
