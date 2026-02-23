import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Curriculum from "@/components/Curriculum";
import FAQ from "@/components/FAQ";
import SuccessStories from "@/components/SuccessStories";
import TheOpportunity from "@/components/TheOpportunity";
import EliteTravelExperience from "@/components/EliteTravelExperience";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling when navigating from other pages
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the # symbol
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <TheOpportunity />
      <EliteTravelExperience />
      <SuccessStories />
      <Curriculum />
      <FAQ />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
