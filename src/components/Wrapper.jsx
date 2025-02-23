import "./Wrapper.scss";

function Wrapper({ title, children }) {
  return (
    <article className="article-wrapper">
      <h3>{title}</h3>
      {children}
    </article>
  );
}

export default Wrapper;
