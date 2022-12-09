// Creating custom hook for animating hero texts
import { useEffect } from "react";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // registering plugin

export const useGsapShutterUnveil = (item, delay = 0, trig) => {
  useEffect(() => {
    const element = item.current;

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
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

// Creating custom hook for animating navbar content
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

// Creating custom hook for dropping hero images
export const useGsapPhotoDropping = (photos) => {
  useEffect(() => {
    const el = photos.map((photo) => photo.current);

    gsap.fromTo(
      el,
      {
        y: "-100vh",
        scale: 0, // used in order to scale down photos
      },
      {
        y: 0,
        scale: 1, // used in order to scale up photos
        duration: 2,
        stagger: 0.2,
        delay: 2.2,
        ease: Expo.easeInOut,
      }
    );
  }, []);
};

// Creating custom hook for levitating hero images(parallax effect)
export const useGsapPhotoLevitate = (photos, trig) => {
  useEffect(() => {
    const el = photos.map((photo) => photo.current);

    gsap.fromTo(
      el,
      {
        y: 0,
      },
      {
        y: "-30%",

        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
