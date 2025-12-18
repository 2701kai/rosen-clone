import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Breadcrumb } from "@/components/home/Breadcrumb";
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
      <Breadcrumb />
      <Intro />
      <section className="pb-8">
        <JobSearch />
        <JobList />
      </section>
      <OpenApplication />
      <AlreadyApplied />
    </>
  );
}
