import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Blog from "./components/Blog";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
