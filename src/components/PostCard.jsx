import { useState } from "react";

function PostCard({ post }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className="post-card">
      <div className="post-category">{post.category}</div>

      <h2>{post.title}</h2>

      <p>{post.excerpt}</p>

      {showMore && (
        <div className="full-content">
          <p>
            This article is part of the React Blog UI project. It explains
            important frontend concepts and provides practical information
            that can help you improve your web development skills.
          </p>
        </div>
      )}

      <div className="post-meta">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>

      <button
        className="read-button"
        type="button"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less" : "Read More"}
      </button>
    </article>
  );
}

export default PostCard;