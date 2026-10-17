import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome To My React App</h1>
        <p>
          My First React App.
          <code>npm install react react-dom</code>
          <br />
          <code>npm start</code>
          <br />
          <code>npm run build</code>
          <br />
          <code>npm run preview</code>
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
