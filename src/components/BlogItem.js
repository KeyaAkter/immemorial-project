import { useRef } from "react";
import { useGsapBlogPhotoReveal } from "../hooks/gsap";

const BlogItem = ({ image }) => {
  // Creating reference
  const blogItemRef = useRef(null);
  const blogTitleRef = useRef(null);
  const blogImgRef = useRef(null);

  // Calling custom hooks

  // useGsapBlogPhotoReveal(blogImgRef);

  return (
    <div ref={blogItemRef} className="blog-item">
      <div ref={blogImgRef} className="blog-img">
        <img src={image.src} alt={image.title} />
      </div>
      <h2 ref={blogTitleRef} className="blog-title">
        {image.title}
      </h2>
      <p className="blog-description">{image.description}</p>
    </div>
  );
};

export default BlogItem;
