// Creating custom hook for hero section
import { useEffect } from "react";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // registering plugin
// must be named export
export const useGsapShutterUnveil = (item, delay = 0, trigger) => {
  useEffect(() => {
    const element = item.current; // html element

    gsap.fromTo(
      element,
      {
        height: "100%",
      },
      {
        height: "0",
        duration: 2,
        ease: Expo.easeInOut,
        delay: delay,
        scrollTrigger: {
          trigger: trigger.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

// Creating custom hook for navbar
export const useGsapDownStagger = (items, delay = 0) => {
  useEffect(() => {
    // creating element
    const el = items.map((item) => item.current);

    // creating twin
    gsap.fromTo(
      el,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2, // restricted duration
        stagger: 0.1, // stagger delay:comes one after another
        ease: Expo.easeInOut, // timing function
        delay: delay,
      }
    );
  }, []);
};
