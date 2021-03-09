import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Html from "../components/html";

export default function ArticlePage() {
  const params = useParams();
  const [article, setArticle] = useState("");

  useEffect(() => {
    async function getArticle() {
      const response = await axios.get(
        `http://traveldestinations.dd:8083/jsonapi/node/article/${params.articleId}`
      );
      console.log("what is response ", response.data.data);
      setArticle(response.data.data);
    }
    getArticle();
  }, [params.articleId]);

  const { title, body, changed } = article.attributes || {};

  return (
    <div className="article">
      <h1>{title}</h1>
      <Html>{body?.processed}</Html>
    </div>
  );
}
