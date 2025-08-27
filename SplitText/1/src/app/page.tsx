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
      <footer className="w-screen bg-black text-gray-200 py-10">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Column 1 */}
    <div>
      <h2 className="text-xl font-bold mb-4">My Website</h2>
      <p className="text-gray-400">
        Building modern web experiences with Tailwind and React. 🚀
      </p>
    </div>

    {/* Column 2 */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-white">Home</a></li>
        <li><a href="#" className="hover:text-white">About</a></li>
        <li><a href="#" className="hover:text-white">Services</a></li>
        <li><a href="#" className="hover:text-white">Contact</a></li>
      </ul>
    </div>

    {/* Column 3 */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
      <form className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Your email"
          className="px-4 py-2 rounded-lg text-gray-900 w-full sm:w-auto"
        />
        <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
          Subscribe
        </button>
      </form>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
    © {new Date().getFullYear()} My Website. All rights reserved.
  </div>
</footer>
    </main>
  );
}
