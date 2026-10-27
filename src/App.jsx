
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Button from "./components/Button";
import UserCard from "./components/Usercard.jsx";
import Footer from "./components/Footer";
import Secfooter from "./components/Secfooter";
import About from "./components/About";
import Card from "./components/Card";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <h1>My App</h1>
      <Cards />
      <Button />
      <UserCard />
      <About />
      <Footer />
      <Card />
      <Secfooter />
    </div>
  );
}

export default App;
