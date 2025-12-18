import { ChevronRight, Home } from "lucide-react";

export function Breadcrumb() {
  return (
    <nav className="py-3">
      <div className="container mx-auto px-4">
        <div className="md:max-w-4xl md:mx-auto">
          <ol className="flex items-center flex-wrap gap-1 text-sm text-rosen-dark-blue">
            <li className="flex items-center">
              <span className="font-medium">Find a Job</span>
            </li>
            <li className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-1 rotate-180" />
              <a href="#" className="hover:text-rosen-blue transition-colors">
                Careers
              </a>
            </li>
            <li className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-1 rotate-180" />
              <a href="/" className="hover:text-rosen-blue transition-colors">
                <Home className="w-4 h-4" />
              </a>
            </li>
          </ol>
        </div>
      </div>
    </nav>
  );
}
