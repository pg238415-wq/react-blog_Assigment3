import Header from "./components/Header";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <p className="eyebrow">React Blog UI</p>
            <h1>Ideas, tutorials and frontend notes.</h1>
            <p className="hero-text">
              A responsive blog interface built with React components and JSON data.
            </p>
          </div>
        </section>
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
