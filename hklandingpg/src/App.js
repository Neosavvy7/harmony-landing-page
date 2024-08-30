import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Service from "./Components/Service";
import HKChatbot from "./Components/Chatbot";


function App() {
  return (
    <>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <HKChatbot/>
      </div>
      <div className="App">
        <Home />
        {/* <About />
        <Work /> */}
        <Service />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
