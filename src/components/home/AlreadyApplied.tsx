function ChevronRightSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" className="w-4 h-4 ml-1">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.732 6.732a2.5 2.5 0 0 1 3.536 0l23 23a2.5 2.5 0 0 1 0 3.536l-23 23a2.5 2.5 0 0 1-3.536-3.536L39.965 31.5 18.732 10.268a2.5 2.5 0 0 1 0-3.536"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function AlreadyApplied() {
  return (
    <section className="already-applied">
      <div className="container mx-auto px-4">
        <div className="md:max-w-4xl md:mx-auto md:pl-8">
          <h2 className="already-applied__title">You've already applied for a job?</h2>
          <p className="already-applied__text">Check your application status in our recruiting portals here:</p>
          <ul className="link-list link-list--guiding">
            <li>
              <a href="/en/careers/find-a-job/recruiting-portals">
                Sign In
                <ChevronRightSvg />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
