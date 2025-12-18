import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";

function GlobeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-4 h-4">
      <path
        stroke="currentColor"
        d="M8.051 14.422c3.386 0 6.131-2.906 6.131-6.49 0-3.586-2.745-6.492-6.13-6.492-3.387 0-6.132 2.906-6.132 6.491s2.745 6.491 6.131 6.491"
      />
      <path
        stroke="currentColor"
        d="M8.051 14.422c1.726 0 3.125-2.906 3.125-6.49 0-3.586-1.399-6.492-3.125-6.492S4.926 4.346 4.926 7.931s1.4 6.491 3.125 6.491M8.051 1.44v12.982M2.272 6.006h11.635M2.272 9.718h11.635"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 32 32">
      <path
        stroke="#1395D9"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.736 19.02a8.39 8.39 0 1 1 0-16.78 8.39 8.39 0 0 1 0 16.78M29.76 27.44l-9.334-9.526-2.432 2.432 9.33 9.53z"
      />
    </svg>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "de" : "en");
  };

  const navLinks = [
    { label: t("nav.businessAreas"), href: "#" },
    { label: t("nav.expertise"), href: "#" },
    { label: t("nav.technology"), href: "#" },
    { label: t("nav.company"), href: "#" },
    { label: t("nav.careers"), href: "/" },
  ];

  const metaLinks = [
    { label: t("nav.mediaEvents"), href: "#" },
    { label: t("nav.newsletter"), href: "#" },
  ];

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
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 hover:text-rosen-blue transition-colors"
          >
            <GlobeIcon />
            <span>{i18n.language === "en" ? "English" : "Deutsch"}</span>
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.svg
              className="h-6 w-auto"
              viewBox="0 0 103 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#1395D9">
                ROSEN
              </text>
            </motion.svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-rosen-blue hover:text-rosen-blue-dark transition-colors font-medium text-sm"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-rosen-blue hover:text-rosen-blue-dark transition-colors">
              <SearchIcon />
              <span className="text-sm font-medium">{t("nav.search")}</span>
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
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="lg:hidden py-4 border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block py-3 text-rosen-navy hover:text-rosen-blue transition-colors font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
