import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./componants/Header";
import Main from "./componants/Main";
import Footer from "./componants/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
    <Header />
    <Main />
    <Footer />

    </>
  );
}

export default App;
