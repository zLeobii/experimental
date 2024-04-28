import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Info from "./pages/Info";
import Projects from "./pages/Projects";
import Experimental from "./pages/Experimental";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/info" element={<Info />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experimental" element={<Experimental />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;