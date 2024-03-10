import "./MainHeaderComponent.css";

function MainHeaderComponent() {
  return (
    <>
      <header className="main-header">
        <h1 className="main-header-title">📘 The Code Magazine</h1>

        <nav className="main-header-nav">
          <a href="#">Blog</a>
          <a href="#">Challenges</a>
          <a href="#">Flexbox</a>
          <a href="#">CSS Grid</a>
        </nav>
      </header>
    </>
  );
}

export default MainHeaderComponent;
