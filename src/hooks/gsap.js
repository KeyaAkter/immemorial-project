// Creating custom hook
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
