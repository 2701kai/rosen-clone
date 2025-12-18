import { ChevronDown } from "../icons";

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  className?: string;
}

export function Select({ value, onChange, options, className = "" }: SelectProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 pr-10 border-0 rounded focus:outline-none focus:ring-2 focus:ring-white/50 bg-white text-sm appearance-none cursor-pointer text-gray-600 ${className}`}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <ChevronDown />
      </div>
    </div>
  );
}
