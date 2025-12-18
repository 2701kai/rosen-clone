import { describe, it, expect } from "vitest";
import i18n from "./i18n";

describe("i18n Configuration", () => {
  it("initializes with English as default language", () => {
    expect(i18n.language).toBe("en");
  });

  it("has English translations", () => {
    expect(i18n.hasResourceBundle("en", "translation")).toBe(true);
  });

  it("has German translations", () => {
    expect(i18n.hasResourceBundle("de", "translation")).toBe(true);
  });

  it("translates navigation keys correctly", () => {
    expect(i18n.t("nav.careers")).toBe("Careers");
    expect(i18n.t("nav.search")).toBe("Search");
  });

  it("can switch to German", async () => {
    await i18n.changeLanguage("de");
    expect(i18n.language).toBe("de");
    expect(i18n.t("nav.careers")).toBe("Karriere");
  });

  it("can switch back to English", async () => {
    await i18n.changeLanguage("en");
    expect(i18n.language).toBe("en");
    expect(i18n.t("nav.careers")).toBe("Careers");
  });
});
