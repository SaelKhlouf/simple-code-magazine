import "./RelatedPostComponent.css";

function RelatedPostComponent({ postId, alt, title, author }) {
  return (
    <>
      <li className="related-post">
        <img src={`/related-${postId}.jpg`} alt={alt} width="75" height="75" />
        <div>
          <a href="#" className="related-link">
            {title}
          </a>
          <p className="related-author">{author}</p>
        </div>
      </li>
    </>
  );
}

export default RelatedPostComponent;
