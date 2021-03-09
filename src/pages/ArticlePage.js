import React from "react";
import { useParams } from "react-router";

export default function ArticlePage() {
  const params = useParams();

  return (
    <div className="article">
      <h1>hi i'm articlepage</h1>
    </div>
  );
}
