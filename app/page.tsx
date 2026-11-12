import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuoteForm from "@/components/QuoteForm";
import Packages from "@/components/Packages";
import Welcome from "@/components/Welcome";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Tips from "@/components/Tips";
import GuideBand from "@/components/GuideBand";
import Articles from "@/components/Articles";
import Faq from "@/components/Faq";
import AppCta from "@/components/AppCta";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="contenido" tabIndex={-1} className="outline-none">
        <Hero />
        <QuoteForm />
        <Packages />
        <Welcome />
        <Process />
        <Services />
        <Testimonials />
        <Tips />
        <GuideBand />
        <Articles />
        <Faq />
        <AppCta />
      </main>
      <Footer />
      <aside aria-label="Contacto rápido">
        <FloatingWA />
      </aside>
    </>
  );
}
