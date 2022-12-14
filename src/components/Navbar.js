import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsapDownStagger } from "../hooks/gsap";

const Navbar = () => {
  // Creating reference of every element
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const logoRef = useRef(null);
  const blogRef = useRef(null);

  const liArr = [li1, li2, li3];
  const favArr = [blogRef];
  const logoArr = [logoRef];

  // Calling custom hooks
  useGsapDownStagger(liArr, 1.5);
  useGsapDownStagger(logoArr, 2.2);
  useGsapDownStagger(favArr, 2.6);

  return (
    <nav className="navbar wrapper">
      <ul className="links">
        <li ref={li1}>
          <Link to="/featured">Featured</Link>
        </li>
        <li ref={li2}>
          <Link to="/about">About</Link>
        </li>
        <li ref={li3}>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
      <div className="logo" ref={logoRef}>
        <Link to="/">
          <h2>Immemorial</h2>
        </Link>
      </div>
      <div className="blog-link" ref={blogRef}>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
