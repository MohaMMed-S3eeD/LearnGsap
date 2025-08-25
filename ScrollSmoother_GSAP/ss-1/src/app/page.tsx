"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Home() {
  const smootherRef = useRef<ScrollSmoother | null>(null);
  const scrollTo = () => {
    smootherRef.current?.scrollTo("#box3", true, "center center");
  };
  useGSAP(() => {
    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
    });
    ScrollTrigger.create({
      trigger: "#box3",
      pin: true,
      start: "center center",
      end: "+=300",
      markers: true,
    });
  }, []);

  return (
    <div className="w-full h-full">
      <button
        className="fixed top-10 left-10 bg-blue-500 text-white p-2 rounded-md z-10"
        onClick={() => scrollTo()}
      >
        Go to box teal
      </button>
      <div id="smooth-wrapper" className="w-full h-full overflow-hidden">
        <div
          id="smooth-content"
          className="w-full min-h-[400vh] bg-repeat flex flex-col items-center justify-start gap-8 pt-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.1'%3E%3Crect width='20' height='20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          <div
            id="box1"
            className="w-32 h-32 my-96 bg-purple-600 rounded-lg shadow-xl"
          ></div>
          <div
            id="box2"
            className="w-32 h-32 my-96 bg-orange-500 rounded-lg shadow-xl"
          ></div>
          <div
            id="box3"
            className="w-32 h-32 my-96 bg-teal-500 rounded-lg shadow-xl"
          ></div>
        </div>
      </div>
    </div>
  );
}
