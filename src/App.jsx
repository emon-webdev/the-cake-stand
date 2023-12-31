import { Button } from "@chakra-ui/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
// Import css files
import 'react-fancybox/lib/fancybox.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import viteLogo from "/vite.svg";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.refresh();
  }, []);
  return (

    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
      <Button colorScheme="blue">Button</Button>
    </>
  );
}

export default App;
