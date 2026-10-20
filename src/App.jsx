import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Button from "./components/Button";
import "./index.css";
import Secfooter from "./components/Secfooter";
// import Form from "./components/Form";
import UserCard from "./components/usercard";
import Footer from "./components/footer";



function App() {
  return (
    <div>
      <Navbar />
      <h1>My App</h1>
      <Cards />
      <Button />
      <UserCard />
      <Footer />
    <Secfooter/>
    {/* <Form/> */}
    </div>
  );
}

export default App;
