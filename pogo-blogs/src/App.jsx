import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Create from "../pages/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogRoute from "../components/BlogRoute";
import NotFound from "../pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pl-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogRoute />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
