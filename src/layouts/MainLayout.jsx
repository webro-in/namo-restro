import Navbar from "../components/Navbar";
import Home from "../pages/Home";

function MainLayout() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default MainLayout;