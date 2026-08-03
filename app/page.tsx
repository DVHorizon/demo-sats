import Hero from "@/component/home/Hero";
import SatsInTheNews from "@/component/home/SatsInTheNews";
import OurStories from "@/component/home/OurStories";
import Investors from "@/component/home/Investors";
import GlobalNetwork from "@/component/home/GlobalNetwork";

export default function Home() {
  return (
    <main>
      <Hero />
      <SatsInTheNews />
      <OurStories />
      <Investors />
      <GlobalNetwork />
    </main>
  );
}
