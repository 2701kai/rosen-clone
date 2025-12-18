interface ChevronRightProps {
  className?: string;
}

export function ChevronRight({ className = "w-4 h-4" }: ChevronRightProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" className={className}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.732 6.732a2.5 2.5 0 0 1 3.536 0l23 23a2.5 2.5 0 0 1 0 3.536l-23 23a2.5 2.5 0 0 1-3.536-3.536L39.965 31.5 18.732 10.268a2.5 2.5 0 0 1 0-3.536"
        clipRule="evenodd"
      />
    </svg>
  );
}
