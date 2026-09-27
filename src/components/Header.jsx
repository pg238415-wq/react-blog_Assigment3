function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top">Prachi's Blog</a>
        <nav>
          <a href="#posts">Posts</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
