import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import Footer from "@/components/Footer";
import Process from "@/components/Process";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <div
  style={{
    height: "3px",
    width: "100%",
    background:
      "linear-gradient(90deg,#dc2626,#f59e0b,#dc2626)",
  }}
/>
      <Courses />
      <Process />
      <WhyChooseUs />
      <ContactForm />
      <MapEmbed />
      <Footer />
      
    </main>
  );
}