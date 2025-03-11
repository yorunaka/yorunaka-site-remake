import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";

const Index = () => (

  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="*" element={<Home />} />
  </Routes>

)

export default Index