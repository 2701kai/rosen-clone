export function Hero() {
  return (
    <section className="relative h-[350px] md:h-[450px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
        alt="Three people are sitting in a meeting room made of glass and are talking while some people are walking by in front of the room."
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
}
