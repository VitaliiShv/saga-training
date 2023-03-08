import css from "./News.module.css";

const News = ({ news, title, error }) => {
  if (!news || news.length === 0) {
    return error ? <h2>{error}</h2> : null;
  }

  return (
    <div>
      <h2>{`${title}:`}</h2>
      <ul className={css.newsList}>
        {news.map(
          ({
            objectID,
            url,
            title,
            points,
            num_comments,
            created_at,
            author,
          }) => (
            <li key={objectID} className={css.news}>
              <div className={css.description}>
                <a href={url} className={css.newsTitle}>
                  {title || "No title"}
                </a>
                <span className={css.text}>{`${points || 0} points`}</span>
                <span className={css.comments}>{`${
                  num_comments || 0
                } comments`}</span>
                <span className={css.text}>
                  {new Date(created_at).toLocaleDateString()}
                </span>
                <span className={author}>{author || "No author"}</span>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default News;
