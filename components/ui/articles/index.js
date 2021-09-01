import Article from "./Article";
export default function Articles({ articles }) {
  return (
    <div>
      <h1>Ultimos Articulos</h1>
      {articles.map((article) => {
        const { id, title, content, readTime, topic, icon, difficulty } =
          article;
        return (
          <Article
            key={id}
            title={title}
            content={content}
            readTime={readTime}
            topic={topic}
            icon={icon}
            difficulty={difficulty}
          />
        );
      })}
    </div>
  );
}
