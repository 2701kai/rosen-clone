export function AlreadyApplied() {
  return (
    <section
      className="py-16"
      style={{
        background: "#f0f4f8",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-rosen-navy mb-4">You've already applied for a job?</h2>
          <p className="text-rosen-gray mb-6">Check your application status in our recruiting portals here:</p>
          <a
            href="#"
            className="inline-block bg-white border-2 border-rosen-navy text-rosen-navy hover:bg-rosen-navy hover:text-white px-8 py-3 rounded-full transition-colors font-medium"
          >
            Sign In
          </a>
        </div>
      </div>
    </section>
  );
}
