import Article from "./Article";
export default function Articles({ articles }) {
  return (
    <div>
      <h1>Ultimos Articulos</h1>
      {articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          content={article.content}
          readTime={article.readTime}
          topic={article.topic}
        />
      ))}
    </div>
  );
}
