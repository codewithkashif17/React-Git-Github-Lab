
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Button from "./components/Button";
import Usercard from "./components/Usercard";
import Footer from "./components/Footer";
import Secfooter from "./components/Secfooter";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <h1>My App</h1>
      <Cards />
      <Button />
      <Usercard />
      <Footer />
      <Secfooter />
    </div>
  );
}

export default App;
