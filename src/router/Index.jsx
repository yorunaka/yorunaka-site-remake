import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Chatbot from "../pages/Chatbot";
import Admin from "../pages/AdminPage";

const Index = () => (

  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/chatbot" element={<Chatbot />} />
    <Route path="*" element={<Home />} />
  </Routes>

)

export default Index