import { Link } from "@tanstack/react-router";
import { Search, Globe, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Business Fields", href: "#" },
  { label: "Expertise", href: "#" },
  { label: "Technology & Innovation", href: "#" },
  { label: "Company", href: "#" },
  { label: "Careers", href: "/" },
];

const metaLinks = [
  { label: "Media & Events", href: "#" },
  { label: "Newsletter", href: "#" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Meta Navigation */}
      <div style={{ backgroundColor: "#29333d" }} className="text-white text-sm">
        <div className="container mx-auto px-4 flex justify-end items-center gap-6 py-2">
          <nav className="hidden md:flex items-center gap-6">
            {metaLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-rosen-blue transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <button className="flex items-center gap-2 hover:text-rosen-blue transition-colors">
            <Globe className="w-4 h-4" />
            <span>English</span>
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <svg className="h-6 w-auto" viewBox="0 0 103 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#1395D9">
                ROSEN
              </text>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-rosen-navy hover:text-rosen-blue transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-rosen-blue hover:text-rosen-dark-blue transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="lg:hidden text-rosen-blue"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-rosen-navy hover:text-rosen-blue transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
