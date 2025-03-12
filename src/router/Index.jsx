import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Chatbot from "../pages/Chatbot";

const Index = () => (

  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/chatbot" element={<Chatbot />} />
    <Route path="*" element={<Home />} />
  </Routes>

)

export default Index