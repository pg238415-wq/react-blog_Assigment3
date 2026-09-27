import { useMemo, useState } from "react";
import posts from "../data.json";
import PostCard from "./PostCard";

function Blog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(posts.map((post) => post.category))];

  const filteredPosts = useMemo(() => {
    const term = search.toLowerCase().trim();

    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term);

      const matchesCategory =
        category === "All" || post.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <section className="blog-section" id="posts">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Latest articles</p>
            <h1>Explore the Blog</h1>
            <p>Search and filter posts from a JSON data source.</p>
          </div>
        </div>

        <div className="controls">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search posts..."
            aria-label="Search blog posts"
          />

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            aria-label="Filter by category"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <p className="result-count">
          Showing {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}
        </p>

        {filteredPosts.length > 0 ? (
          <div className="posts-grid">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>No posts found</h2>
            <p>Try a different search word or category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Blog;
