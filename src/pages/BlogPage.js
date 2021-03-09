import axios from "axios";
import React, { useEffect, useState } from "react";
import ArticlePreview from "../components/article/ArticlePreview";

export default function BlogPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        `http://traveldestinations.dd:8083/jsonapi/node/article`
      );

      setArticles(response.data.data);
    }
    fetchArticles();
  }, []);

  return (
    <div className="blog">
      <h1>All articles</h1>
      {articles.map((article) => {
        return (
          <ArticlePreview
            key={article.id}
            id={article.id}
            title={article.attributes.title}
            description={article.attributes.body.processed}
          />
        );
      })}
    </div>
  );
}
