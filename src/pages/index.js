import { gsap } from "gsap/dist/gsap";
import Hero from "@/components/Hero";
import Trending from "@/components/Trending";
import Categories from "@/components/Categories";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll("#section").forEach((section) =>
      gsap.to(section, {
        opacity: 1,
        delay: 0.1,
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
        },
      })
    );
    gsap.to("#hero", {
      height: "auto",
      marginBottom: 40,
      marginTop: 124,
      duration: 1,
      scrollTrigger: {
        trigger: "#section",
        start: "top 90%",
      },
    });
  }, []);
  return (
    <>
      <Hero />
      <Trending />
      <Categories />
    </>
  );
}
