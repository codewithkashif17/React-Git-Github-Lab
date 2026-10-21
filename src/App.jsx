
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Button from "./components/Button";
import UserCard from "./components/UserCard";
import Footer from "./components/Footer";
import Secfooter from "./components/Secfooter";
import About from "./components/About";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <h1>My App</h1>
      <Cards />
      <Button />
      <UserCard />
      <Footer />
      <About />
      <Card />
      <Secfooter />
    </div>
  );
}

export default App;
