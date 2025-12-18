import openApplicationImg from "@/assets/images/open-application.jpg";

function ChevronRightSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.732 6.732a2.5 2.5 0 0 1 3.536 0l23 23a2.5 2.5 0 0 1 0 3.536l-23 23a2.5 2.5 0 0 1-3.536-3.536L39.965 31.5 18.732 10.268a2.5 2.5 0 0 1 0-3.536"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function OpenApplication() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="content-teaser">
          <div className="content-teaser__inside">
            {/* Image */}
            <div className="content-teaser__image">
              <img
                src={openApplicationImg}
                alt="A woman sitting at a table and shaking hands"
              />
            </div>

            {/* Content */}
            <div className="content-teaser__body">
              <h3 className="content-teaser__heading">Haven't discovered your ideal match yet?</h3>
              <p className="content-teaser__text">
                Submit your open application and register your interest in a role with ROSEN.
              </p>
            </div>

            {/* Link - outside body, direct child of inside */}
            <a href="https://elita.dev/what-we-do.mp4" target="_blank" rel="noopener noreferrer" className="content-teaser__link">
              Apply now
              <ChevronRightSvg />
            </a>
          </div>
        </div>

        {/* AI Notice */}
        <div className="ai-notice">
          <p className="ai-notice__text">
            <i>
              <sub>
                Please note that during the recruitment process, ROSEN may use artificial intelligence (AI) tools to
                support certain activities such as candidate sourcing and interview documentation. These tools assist
                our recruiters and do not make any automated decisions.
              </sub>
            </i>
          </p>
        </div>
      </div>
    </section>
  );
}
