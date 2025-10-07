import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Gradient hero stays */}
      <header className="bg-hero">
        <Hero />
      </header>

      {/* Alternate surfaces for a cohesive rhythm */}
      <main>
        <section className="section">
          <About />
        </section>

        <section className="section-alt">
          <Projects />
        </section>

        <section className="section">
          <Skills />
        </section>

        <section className="section-alt">
          <Certifications />
        </section>

        <section className="section">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
