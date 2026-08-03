import Hero from "@/component/home/Hero";
import SatsInTheNews from "@/component/home/SatsInTheNews";
import OurStories from "@/component/home/OurStories";
import Investors from "@/component/home/Investors";

export default function Home() {
  return (
    <main>
      <Hero />
      <SatsInTheNews />
      <OurStories />
      <Investors />
    </main>
  );
}
