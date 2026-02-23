import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingScreen } from "@/components/LoadingScreen";
import PageTitle from "@/components/PageTitle";
import Index from "./pages/Index";
import EliteLevels from "./pages/EliteLevels";
import EliteExperience from "./pages/EliteExperience";
import WildcardEventsPage from "./pages/WildcardEventsPage";
import DayInTheLife from "./pages/DayInTheLife";
import Trips from "./pages/Trips";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LoadingScreen />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageTitle />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/elite-levels" element={<EliteLevels />} />
          <Route path="/elite-experience" element={<EliteExperience />} />
          <Route path="/events" element={<WildcardEventsPage />} />
          <Route path="/day-in-the-life" element={<DayInTheLife />} />
          <Route path="/trips" element={<Trips />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
