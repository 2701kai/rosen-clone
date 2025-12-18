import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { JobSearch } from "@/components/home/JobSearch";
import { JobList } from "@/components/home/JobList";
import { OpenApplication } from "@/components/home/OpenApplication";
import { AlreadyApplied } from "@/components/home/AlreadyApplied";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <JobSearch />
            <JobList />
          </div>
        </div>
      </section>
      <OpenApplication />
      <AlreadyApplied />
    </>
  );
}
