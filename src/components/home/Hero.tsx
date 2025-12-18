import heroImg from "@/assets/images/hero.jpg";

export function Hero() {
  return (
    <section className="relative h-[280px] md:h-[350px] overflow-hidden">
      <img
        src={heroImg}
        alt="Three people are sitting in a meeting room made of glass and are talking while some people are walking by in front of the room."
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
}
