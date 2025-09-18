import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import WhyHireMe from "../components/WhyHireMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-slate-900">
      <Navbar />

      {/* Hero - Gradient */}
      <div className="bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100">
        <Hero />
      </div>

      {/* About - White */}
      <div className="bg-white">
        <About />
      </div>

      {/* Skills - Soft lilac */}
      <div className="bg-indigo-50">
        <Skills />
      </div>

      {/* Projects - White */}
      <div className="bg-white">
        <Projects />
      </div>

      {/* Why Hire Me - Light indigo */}
      <div className="bg-indigo-50">
        <WhyHireMe />
      </div>

      {/* Contact - White (to alternate again) */}
      <div className="bg-white">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
