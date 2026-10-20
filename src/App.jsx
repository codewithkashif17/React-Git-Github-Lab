
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Button from "./components/Button";

import Footer from "./components/Footer";
import Usercard from "./components/usercard";
import "./index.css";
import UserCard from "./components/usercard";

function App() {
  return (
    <div>
      <Navbar />
      <h1>My App</h1>
      <Cards />
      <Button />
      <UserCard />
      <Footer />
      <Usercard />
    </div>
  );
}

export default App;
