import { describe, it, expect } from "vitest";
import { jobs, type Job } from "./jobs";

describe("Jobs Data", () => {
  it("exports an array of jobs", () => {
    expect(Array.isArray(jobs)).toBe(true);
    expect(jobs.length).toBeGreaterThan(0);
  });

  it("each job has required fields", () => {
    jobs.forEach((job: Job) => {
      expect(job).toHaveProperty("id");
      expect(job).toHaveProperty("title");
      expect(job).toHaveProperty("location");
      expect(job).toHaveProperty("experienceLevel");
      expect(job).toHaveProperty("url");
    });
  });

  it("job IDs are unique", () => {
    const ids = jobs.map((job) => job.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("all job URLs are valid", () => {
    jobs.forEach((job) => {
      expect(job.url).toMatch(/^https:\/\/jobs\.rosen-group\.com\/job\/\d+/);
    });
  });
});
