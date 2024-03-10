import RelatedPostComponent from "./RelatedPostComponent";
import "./AsideMenuComponent.css";

function AsideMenuComponent({ posts }) {
  return (
    <>
      <aside>
        <h4 className="related-posts-header">Related posts</h4>
        <ul className="related">
          {posts.map((post) => (
            <RelatedPostComponent
              key={post.postId}
              {...post}
            ></RelatedPostComponent>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default AsideMenuComponent;
