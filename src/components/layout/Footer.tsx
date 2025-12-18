import { Facebook, Linkedin, Youtube, Mail } from "lucide-react";

const quicklinks = [
  { label: "Products & Services", href: "#" },
  { label: "Experience Center", href: "#" },
  { label: "Governance & Compliance", href: "#" },
  { label: "Find a Job", href: "/" },
];

const moreAbout = [
  { label: "About us", href: "#" },
  { label: "Integrity Analytics", href: "#" },
  { label: "Artificial Intelligence", href: "#" },
  { label: "Research & Development", href: "#" },
];

const getInTouch = [
  { label: "Contact us", href: "#" },
  { label: "Press Contact", href: "#" },
  { label: "Regions & Locations", href: "#" },
  { label: "Events", href: "#" },
];

const bottomLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Settings", href: "#" },
  { label: "Legal Notice", href: "#" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/ROSENGroupGlobal/", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/rosen/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/user/ROSENGroupOfficial", label: "YouTube" },
];

export function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div
        className="text-white py-12 relative"
        style={{
          background: "linear-gradient(315deg, #232a3c 0%, #375578 70.88%)",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quicklinks */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quicklinks</h4>
              <ul className="space-y-2">
                {quicklinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* More about ROSEN */}
            <div>
              <h4 className="font-bold text-lg mb-4">More about ROSEN</h4>
              <ul className="space-y-2">
                {moreAbout.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in touch */}
            <div>
              <h4 className="font-bold text-lg mb-4">Get in touch</h4>
              <ul className="space-y-2">
                {getInTouch.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stay informed */}
            <div>
              <h4 className="font-bold text-lg mb-4">Stay informed</h4>
              <p className="text-gray-300 mb-4 text-sm">
                Join our newsletter to stay up-to-date with our innovative technologies.
              </p>
              <button className="border border-white text-white hover:bg-white hover:text-rosen-navy px-6 py-2 rounded text-sm transition-colors">
                Sign Up
              </button>
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-rosen-blue transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={{ backgroundColor: "#1e2730" }} className="text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm">
            {bottomLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Contact Button */}
      <button
        className="fixed bottom-6 right-6 bg-rosen-blue hover:bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-colors z-40"
        aria-label="Get in touch"
      >
        <Mail className="w-5 h-5" />
        <span className="hidden sm:inline">Get in touch</span>
      </button>
    </footer>
  );
}
