import { useRef } from "react";
import { useGsapFooterHeadline } from "../hooks/gsap";

const Footer = () => {
  // Creating reference
  const footerRef = useRef(null);
  const footerHeadlineRef = useRef(null);

  // Calling custom hook
  useGsapFooterHeadline(footerHeadlineRef, footerRef);

  return (
    <section ref={footerRef} className="footer wrapper">
      <h1 ref={footerHeadlineRef}>Bonjour</h1>
      <p>
        &copy; {new Date().getFullYear()} Immemorial. Crafted by yours truly
      </p>
    </section>
  );
};

export default Footer;
