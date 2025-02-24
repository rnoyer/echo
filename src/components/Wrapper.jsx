import "./Wrapper.scss";

function Wrapper({ title, children, classCustom = "" }) {
  return (
    <article className={ `article-wrapper ${classCustom}`}>
      <h3>{title}</h3>
      {children}
    </article>
  );
}

export default Wrapper;
