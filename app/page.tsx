import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Stats from "@/components/Stats";
import Packages from "@/components/Packages";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <Packages />
        <Services />
        <Process />
        <WhyUs />
        <Testimonials />
        <QuoteForm />
        <Faq />
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
