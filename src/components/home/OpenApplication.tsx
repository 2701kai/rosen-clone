import { ChevronRight } from "lucide-react";

export function OpenApplication() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-stretch max-w-5xl mx-auto">
          {/* Image */}
          <div className="md:w-1/2 relative min-h-[300px] md:min-h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
              alt="A woman sitting at a table and shaking hands"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-rosen-navy mb-4">
              Haven't discovered your ideal match yet?
            </h3>
            <p className="text-rosen-gray mb-6">
              Submit your open application and register your interest in a role with ROSEN.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-rosen-blue hover:text-blue-600 font-medium transition-colors"
            >
              Apply now
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* AI Notice */}
        <p className="text-xs text-rosen-gray italic mt-8 max-w-5xl mx-auto">
          <em>
            <sub>
              Please note that during the recruitment process, ROSEN may use artificial intelligence (AI) tools to
              support certain activities such as candidate sourcing and interview documentation. These tools assist
              our recruiters and do not make any automated decisions.
            </sub>
          </em>
        </p>
      </div>
    </section>
  );
}
