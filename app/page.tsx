import Hero from "@/component/home/Hero";
import SatsInTheNews from "@/component/home/SatsInTheNews";
import OurStories from "@/component/home/OurStories";
import Investors from "@/component/home/Investors";
import GlobalNetwork from "@/component/home/GlobalNetwork";
import OurServices from "@/component/home/OurServices";
import Sustainability from "@/component/home/Sustainability";

export default function Home() {
  return (
    <main>
      <Hero />
      <SatsInTheNews />
      <OurStories />
      <Investors />
      <GlobalNetwork />
      <OurServices />
      <Sustainability />
    </main>
  );
}
