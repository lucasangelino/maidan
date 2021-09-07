import Article from "./Article";
import styles from "./article.module.css";

export default function Articles({ articles }) {
  const { article_container } = styles;
  return (
    <div>
      <h1>Ultimos Articulos</h1>
      <div className={article_container}>
        {articles.map((article) => {
          const { id, title, comments, summary, tags, date } = article;
          return (
            <Article
              key={id}
              id={id}
              title={title}
              content={summary}
              readTime={"10 min"}
              topic={undefined || "react"}
              icon={undefined || "react"}
              difficulty={"easy"}
            />
          );
        })}
      </div>
    </div>
  );
}
