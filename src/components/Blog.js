const Blog = ({ needFullHeight }) => {
  return (
    <section
      className={`blog wrapper ${needFullHeight ? "min-h-100vh" : null}`}
    >
      <h2 className="section-title">Blog</h2>
    </section>
  );
};

export default Blog;
