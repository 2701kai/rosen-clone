import { ChevronRight, Users } from "lucide-react";
import { useState } from "react";

const regions = ["Choose...", "Europe", "Americas", "Asia Pacific", "Middle East & Africa"];
const cities = ["Reset filter...", "Lingen (DE)", "Osnabrück (DE)", "Houston (US)", "Kuala Lumpur (MY)", "Bergen (NO)"];
const jobFields = ["Reset filter...", "Engineering", "IT & Software", "Finance", "Marketing", "Operations"];
const experienceLevels = ["Reset filter...", "Professionals", "Students & Graduates", "Apprenticeship & Dual Studies"];

export function JobSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState("Choose...");
  const [city, setCity] = useState("Reset filter...");
  const [jobField, setJobField] = useState("Reset filter...");
  const [experience, setExperience] = useState("Reset filter...");

  const handleClearAll = () => {
    setSearchQuery("");
    setRegion("Choose...");
    setCity("Reset filter...");
    setJobField("Reset filter...");
    setExperience("Reset filter...");
  };

  return (
    <div
      className="rounded-t-lg p-6 mb-0"
      style={{
        background: "linear-gradient(135deg, #1395d9 0%, #0b73bf 100%)",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold text-white">Open vacancies</h5>
        <div className="bg-white/20 rounded-full p-2">
          <Users className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Search Input */}
      <div className="mb-4">
        <div className="relative flex">
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for Title or Job Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-white"
            />
            <label className="absolute left-4 -top-2 bg-white px-1 text-xs text-gray-500">
              Search for Title or Job Number
            </label>
          </div>
          <button className="bg-[#0560bb] hover:bg-[#044a9e] text-white px-6 py-3 rounded-r transition-colors font-medium whitespace-nowrap">
            Find your Job
          </button>
        </div>
      </div>

      {/* Filters Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block text-xs text-white/90 mb-1">Region & Country</label>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rosen-blue focus:border-transparent bg-white text-sm appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%23506491' d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E")`,
              backgroundPosition: "right 8px center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "20px",
            }}
          >
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs text-white/90 mb-1">City</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rosen-blue focus:border-transparent bg-white text-sm appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%23506491' d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E")`,
              backgroundPosition: "right 8px center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "20px",
            }}
          >
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs text-white/90 mb-1">Job Field</label>
          <select
            value={jobField}
            onChange={(e) => setJobField(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rosen-blue focus:border-transparent bg-white text-sm appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%23506491' d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E")`,
              backgroundPosition: "right 8px center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "20px",
            }}
          >
            {jobFields.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs text-white/90 mb-1">Experience Level</label>
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rosen-blue focus:border-transparent bg-white text-sm appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%23506491' d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E")`,
              backgroundPosition: "right 8px center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "20px",
            }}
          >
            {experienceLevels.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Clear All */}
      <div className="text-right">
        <button
          onClick={handleClearAll}
          className="text-white hover:text-white/80 transition-colors inline-flex items-center gap-1 text-sm font-medium"
        >
          Clear All <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
