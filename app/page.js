import Navbar from "@/components/services/Navbar";
import Hero from "@/components/main/Hero";
import About from "@/components/main/About";
import Services from "@/components/main/services";
import Projects from "@/components/main/projects";
import Contact from "@/components/main/contact";
import Footer from "@/components/services/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section id="home">
        <Navbar />
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
