import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* one flexible route: /project/hotel-booking, /project/invoice-builder, etc. */}
      <Route path="/project/:slug" element={<CaseStudy />} />
    </Routes>
  );
}
