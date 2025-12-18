import { memo } from "react";

interface ChevronDownProps {
  className?: string;
}

export const ChevronDown = memo(function ChevronDown({ className = "w-3 h-3" }: ChevronDownProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" className={className}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M56.768 18.232a2.5 2.5 0 0 1 0 3.536l-23 23a2.5 2.5 0 0 1-3.536 0l-23-23a2.5 2.5 0 0 1 3.536-3.536L32 39.465l21.232-21.233a2.5 2.5 0 0 1 3.536 0"
        clipRule="evenodd"
      />
    </svg>
  );
});
