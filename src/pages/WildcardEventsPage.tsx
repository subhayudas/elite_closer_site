import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WildcardEvents from "@/components/WildcardEvents";

const WildcardEventsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <WildcardEvents />
      <Footer />
    </div>
  );
};

export default WildcardEventsPage;
