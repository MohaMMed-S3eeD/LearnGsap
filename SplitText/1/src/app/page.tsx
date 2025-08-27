"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger, ScrollSmoother);

export default function Home() {
  useGSAP(() => {
    // let smoother = ScrollSmoother.create({
    //   smooth: 1,
    //   effects: true,

    // });

    const split = SplitText.create("h1", {
      type: "words",
      wordsClass: "word",
    });

    gsap.from(split.words, {
      opacity: 0.3,
      // x: 100,
      delay: 1,
      stagger: 1,
      ease: "power2.inOut",
      duration: 0.1,
      scrollTrigger: {
        trigger: "#page",
        start: "top top",
        end: "+=300%",
        scrub: true,
        // markers: true,
        pin: true,
      },
    });
  }, []);

  return (
    <main>
      <div
        id="page"
        className="h-[100dvh] w-screen flex items-center justify-center clip-path-polygon-100"
      >
        <h1 className=" text-white text-xl font-light w-full p-2 md:p-0 md:max-w-[50%]">
          Modern web development requires a deep understanding of advanced
          technologies and cutting-edge tools. By utilizing libraries like GSAP
          and React, we can create stunning interactive experiences and
          captivating visual effects. Smooth animations and seamless transitions
          help make user interfaces more engaging and intuitive to use.
          Continuous development and learning are the keys to success in this
          field.
        </h1>
      </div>
      <div className="h-[100dvh] w-screen bg-black flex items-center justify-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    </main>
  );
}
