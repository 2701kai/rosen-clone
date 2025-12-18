import { useState } from "react";

const regions = ["Region & Country", "Europe", "Americas", "Asia Pacific", "Middle East & Africa"];
const cities = ["City", "Lingen (DE)", "Osnabrück (DE)", "Houston (US)", "Kuala Lumpur (MY)", "Bergen (NO)"];
const jobFields = ["Job Field", "Engineering", "IT & Software", "Finance", "Marketing", "Operations"];
const experienceLevels = ["Experience Level", "Professionals", "Students & Graduates", "Apprenticeship & Dual Studies"];

function ChevronRightSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" className="w-4 h-4">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.732 6.732a2.5 2.5 0 0 1 3.536 0l23 23a2.5 2.5 0 0 1 0 3.536l-23 23a2.5 2.5 0 0 1-3.536-3.536L39.965 31.5 18.732 10.268a2.5 2.5 0 0 1 0-3.536"
        clipRule="evenodd"
      />
    </svg>
  );
}

function DropdownSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" className="w-3 h-3">
      <path
        fill="#506491"
        fillRule="evenodd"
        d="M56.768 18.232a2.5 2.5 0 0 1 0 3.536l-23 23a2.5 2.5 0 0 1-3.536 0l-23-23a2.5 2.5 0 0 1 3.536-3.536L32 39.465l21.232-21.233a2.5 2.5 0 0 1 3.536 0"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function JobSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState("Region & Country");
  const [city, setCity] = useState("City");
  const [jobField, setJobField] = useState("Job Field");
  const [experience, setExperience] = useState("Experience Level");

  const handleClearAll = () => {
    setSearchQuery("");
    setRegion("Region & Country");
    setCity("City");
    setJobField("Job Field");
    setExperience("Experience Level");
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
        {/* Title */}
        <div className="container mx-auto px-4">
          <h5 className="text-xl font-semibold text-white mb-4">Open vacancies</h5>
        </div>

        {/* Search Input Row */}
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
                    className="w-full px-4 py-3 border-0 rounded focus:outline-none focus:ring-2 focus:ring-white/50 bg-white text-gray-700 placeholder-gray-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white/10 border border-white/30 hover:bg-white/20 text-white px-6 py-3 rounded transition-colors font-medium whitespace-nowrap"
                >
                  Find your Job
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full px-4 py-3 pr-10 border-0 rounded focus:outline-none focus:ring-2 focus:ring-white/50 bg-white text-sm appearance-none cursor-pointer text-gray-600"
              >
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <DropdownSvg />
              </div>
            </div>
            <div className="relative">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-3 pr-10 border-0 rounded focus:outline-none focus:ring-2 focus:ring-white/50 bg-white text-sm appearance-none cursor-pointer text-gray-600"
              >
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <DropdownSvg />
              </div>
            </div>
            <div className="relative">
              <select
                value={jobField}
                onChange={(e) => setJobField(e.target.value)}
                className="w-full px-4 py-3 pr-10 border-0 rounded focus:outline-none focus:ring-2 focus:ring-white/50 bg-white text-sm appearance-none cursor-pointer text-gray-600"
              >
                {jobFields.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <DropdownSvg />
              </div>
            </div>
            <div className="relative">
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full px-4 py-3 pr-10 border-0 rounded focus:outline-none focus:ring-2 focus:ring-white/50 bg-white text-sm appearance-none cursor-pointer text-gray-600"
              >
                {experienceLevels.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <DropdownSvg />
              </div>
            </div>
          </div>
        </div>

        {/* Clear All */}
        <div className="container mx-auto px-4">
          <div className="text-right">
            <button
              type="reset"
              onClick={handleClearAll}
              className="text-white hover:text-white/80 transition-colors inline-flex items-center gap-1 text-sm font-medium"
            >
              Clear All <ChevronRightSvg />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
