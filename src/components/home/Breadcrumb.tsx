export function Breadcrumb() {
  return (
    <nav className="py-3">
      <div className="container mx-auto px-4">
        <div className="md:max-w-4xl md:mx-auto md:pl-8">
          <ol className="flex items-center flex-row-reverse justify-end gap-1 text-sm" style={{ color: "#506491" }}>
            <li className="flex items-center">
              <span className="font-medium">Find a Job</span>
            </li>
            <li className="flex items-center">
              <a href="/en/careers" className="hover:text-rosen-blue transition-colors">
                Careers
              </a>
              <ChevronSvg />
            </li>
            <li className="flex items-center">
              <a href="/" className="hover:text-rosen-blue transition-colors">
                <HomeSvg />
              </a>
              <ChevronSvg />
            </li>
          </ol>
        </div>
      </div>
    </nav>
  );
}

function ChevronSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
      className="w-4 h-4 mx-1"
    >
      <path
        fill="#506491"
        fillRule="evenodd"
        d="M18.732 6.732a2.5 2.5 0 0 1 3.536 0l23 23a2.5 2.5 0 0 1 0 3.536l-23 23a2.5 2.5 0 0 1-3.536-3.536L39.965 31.5 18.732 10.268a2.5 2.5 0 0 1 0-3.536"
        clipRule="evenodd"
      />
    </svg>
  );
}

function HomeSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
      className="w-4 h-4"
    >
      <path
        fill="#506491"
        fillRule="evenodd"
        d="M37 56.5a2.5 2.5 0 0 1 2.5-2.5h20a2.5 2.5 0 0 1 2.5 2.5v33a2.5 2.5 0 0 1-5 0V59H42v30.5a2.5 2.5 0 0 1-5 0zM22.5 43a2.5 2.5 0 0 1 2.5 2.5v44a2.5 2.5 0 0 1-5 0v-44a2.5 2.5 0 0 1 2.5-2.5"
        clipRule="evenodd"
      />
      <path
        fill="#506491"
        fillRule="evenodd"
        d="M47.785 8.681a2.5 2.5 0 0 1 3.43 0l35 33a2.5 2.5 0 1 1-3.43 3.638L49.5 13.936 16.215 45.319a2.5 2.5 0 1 1-3.43-3.638z"
        clipRule="evenodd"
      />
      <path
        fill="#506491"
        fillRule="evenodd"
        d="M76.5 43a2.5 2.5 0 0 1 2.5 2.5v44a2.5 2.5 0 0 1-5 0v-44a2.5 2.5 0 0 1 2.5-2.5"
        clipRule="evenodd"
      />
    </svg>
  );
}
