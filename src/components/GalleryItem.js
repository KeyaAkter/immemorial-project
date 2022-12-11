import { useRef } from "react";
import {
  useGsapGalleryTitle,
  useGsapGalleryCategory,
  useGsapGalleryImage,
} from "../hooks/gsap";

const GalleryItem = ({ image }) => {
  // Creating Reference
  const galleryTitleRef = useRef(null);
  const galleryCategoryRef = useRef(null);
  const galleryImageRef = useRef(null);

  // Calling custom hooks
  useGsapGalleryTitle(galleryTitleRef, galleryImageRef);
  useGsapGalleryCategory(galleryCategoryRef, galleryImageRef);
  useGsapGalleryImage(galleryImageRef);

  return (
    <div className="gallery-item">
      <h1 ref={galleryTitleRef} className="gallery-item-title">
        {image.title}
      </h1>
      <p ref={galleryCategoryRef} className="gallery-item-category">
        {image.category}
      </p>
      <div
        ref={galleryImageRef}
        className="gallery-item-img"
        style={{ backgroundImage: `url(${image.src})` }}
      ></div>
    </div>
  );
};

export default GalleryItem;
