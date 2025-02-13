import Carrousal from "./components/Carrousal";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Home from "./components/Home";
import Snap from "./components/Snap";

const App = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[2.5em]">
      <Header />
      <Gallery />
      <Carrousal />
      <Home />
      <Snap />
      <Footer />
    </div>
  );
};

export default App;
