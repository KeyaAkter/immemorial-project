import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const footerHeadlineRef = useRef(null);

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
