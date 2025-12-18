import { memo } from "react";

interface SortIconProps {
  className?: string;
}

export const SortIcon = memo(function SortIcon({ className }: SortIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={className}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.1 9.4c.2.2.2.526 0 .726L8.363 14.85c-.201.2-.527.2-.728 0l-4.735-4.724a.51.51 0 0 1 0-.726c.2-.2.527-.2.728 0L8 13.76l4.371-4.36c.201-.2.527-.2.728 0M2.9 6.6a.51.51 0 0 1 0-.726L7.637 1.15c.201-.2.527-.2.728 0l4.735 4.724c.201.2.201.525 0 .726-.2.2-.527.2-.728 0L8 2.24 3.629 6.6c-.201.2-.527.2-.728 0"
        clipRule="evenodd"
      />
    </svg>
  );
});
