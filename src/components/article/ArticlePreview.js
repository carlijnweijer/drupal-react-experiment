import React from "react";
import { Link } from "react-router-dom";
import Html from "../html";

export default function ArticlePreview({ id, title, description }) {
  return (
    <div className="blog__preview">
      <Link to={`/blog/${id}`}>
        <h2>{title}</h2>
      </Link>
      <Html>{description}</Html>
    </div>
  );
}
