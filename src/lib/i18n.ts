import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        businessAreas: "Business Areas",
        expertise: "Expertise",
        technology: "Technology & Innovation",
        company: "Company",
        careers: "Careers",
        search: "Search",
        mediaEvents: "Media & Events",
        newsletter: "Newsletter",
      },
      hero: {
        breadcrumb: {
          home: "Home",
          careers: "Careers",
          findJob: "Find a Job",
        },
      },
      jobs: {
        title: "Jobs at ROSEN",
        intro:
          "Whether you are looking for a new challenge, your next career move, or your first job ever, we are able to offer a variety of roles, entry levels and career opportunities across all of our global locations. As part of the diverse ROSEN family, you will have the opportunity each day to grow with us and help us do great things, together. Browse the wide variety of jobs we offer below.",
        openVacancies: "Open vacancies",
        searchPlaceholder: "Search for Title or Job Number",
        findJob: "Find your Job",
        clearAll: "Clear All",
        jobTitle: "Job Title",
        location: "Location",
        experienceLevel: "Experience Level",
        loadMore: "Load more",
      },
      filters: {
        regionCountry: "Region & Country",
        city: "City",
        jobField: "Job Field",
        experienceLevel: "Experience Level",
      },
      openApplication: {
        title: "Haven't discovered your ideal match yet?",
        description:
          "Submit your open application and register your interest in a role with ROSEN.",
        applyNow: "Apply now",
        aiNotice:
          "Please note that during the recruitment process, ROSEN may use artificial intelligence (AI) tools to support certain activities such as candidate sourcing and interview documentation. These tools assist our recruiters and do not make any automated decisions.",
      },
      alreadyApplied: {
        title: "You've already applied for a job?",
        description: "Check your application status in our recruiting portals here:",
        signIn: "Sign In",
      },
      footer: {
        quickLinks: "Quicklinks",
        moreAbout: "More about ROSEN",
        getInTouch: "Get in touch",
        stayInformed: "Stay informed",
        newsletterText: "Join our newsletter to stay up to date with our biennale technologies.",
        signUp: "Sign Up",
        productsServices: "Products & Services",
        experienceCenter: "Experience Center",
        governance: "Governance & Compliance",
        findJob: "Find a Job",
        aboutUs: "About us",
        integrityAnalytics: "Integrity Analytics",
        artificialIntelligence: "Artificial Intelligence",
        researchDevelopment: "Research & Development",
        contactUs: "Contact us",
        pressContact: "Press Contact",
        regionsLocations: "Regions & Locations",
        events: "Events",
        termsConditions: "Terms & Conditions",
        privacyPolicy: "Privacy Policy",
        cookieSettings: "Cookie Settings",
        legalNotice: "Legal Notice",
      },
    },
  },
  de: {
    translation: {
      nav: {
        businessAreas: "Geschäftsbereiche",
        expertise: "Expertise",
        technology: "Technologie & Innovation",
        company: "Unternehmen",
        careers: "Karriere",
        search: "Suche",
        mediaEvents: "Medien & Events",
        newsletter: "Newsletter",
      },
      hero: {
        breadcrumb: {
          home: "Startseite",
          careers: "Karriere",
          findJob: "Job finden",
        },
      },
      jobs: {
        title: "Jobs bei ROSEN",
        intro:
          "Ob Sie eine neue Herausforderung suchen, den nächsten Karriereschritt machen oder Ihren ersten Job antreten möchten – wir bieten eine Vielzahl von Positionen, Einstiegsmöglichkeiten und Karrierechancen an all unseren globalen Standorten. Als Teil der vielfältigen ROSEN-Familie haben Sie jeden Tag die Möglichkeit, mit uns zu wachsen und gemeinsam Großartiges zu erreichen. Entdecken Sie unten die breite Palette an Jobs, die wir anbieten.",
        openVacancies: "Offene Stellen",
        searchPlaceholder: "Suche nach Titel oder Stellennummer",
        findJob: "Job finden",
        clearAll: "Alle löschen",
        jobTitle: "Stellenbezeichnung",
        location: "Standort",
        experienceLevel: "Erfahrungslevel",
        loadMore: "Mehr laden",
      },
      filters: {
        regionCountry: "Region & Land",
        city: "Stadt",
        jobField: "Berufsfeld",
        experienceLevel: "Erfahrungslevel",
      },
      openApplication: {
        title: "Noch nicht das Richtige gefunden?",
        description:
          "Reichen Sie Ihre Initiativbewerbung ein und bekunden Sie Ihr Interesse an einer Stelle bei ROSEN.",
        applyNow: "Jetzt bewerben",
        aiNotice:
          "Bitte beachten Sie, dass ROSEN während des Rekrutierungsprozesses künstliche Intelligenz (KI) zur Unterstützung bestimmter Aktivitäten wie Kandidatensuche und Interviewdokumentation einsetzen kann. Diese Tools unterstützen unsere Recruiter und treffen keine automatisierten Entscheidungen.",
      },
      alreadyApplied: {
        title: "Sie haben sich bereits beworben?",
        description:
          "Überprüfen Sie hier Ihren Bewerbungsstatus in unseren Recruiting-Portalen:",
        signIn: "Anmelden",
      },
      footer: {
        quickLinks: "Schnellzugriff",
        moreAbout: "Mehr über ROSEN",
        getInTouch: "Kontakt",
        stayInformed: "Bleiben Sie informiert",
        newsletterText:
          "Abonnieren Sie unseren Newsletter, um über unsere Technologien auf dem Laufenden zu bleiben.",
        signUp: "Anmelden",
        productsServices: "Produkte & Dienstleistungen",
        experienceCenter: "Experience Center",
        governance: "Governance & Compliance",
        findJob: "Job finden",
        aboutUs: "Über uns",
        integrityAnalytics: "Integritätsanalyse",
        artificialIntelligence: "Künstliche Intelligenz",
        researchDevelopment: "Forschung & Entwicklung",
        contactUs: "Kontakt",
        pressContact: "Pressekontakt",
        regionsLocations: "Regionen & Standorte",
        events: "Veranstaltungen",
        termsConditions: "AGB",
        privacyPolicy: "Datenschutz",
        cookieSettings: "Cookie-Einstellungen",
        legalNotice: "Impressum",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
