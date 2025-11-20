import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import LaSerie from "./pages/LaSerie";
import Calendrier from "./pages/Calendrier";
import PrepareTaCourse from "./pages/PrepareTaCourse";
import RaceDetail from "./pages/RaceDetail"; // Importez la nouvelle page RaceDetail

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/la-serie" element={<LaSerie />} />
          <Route path="/calendrier" element={<Calendrier />} />
          <Route path="/prepare-ta-course" element={<PrepareTaCourse />} />
          <Route path="/races/:raceSlug" element={<RaceDetail />} /> {/* Nouvelle route pour les détails de course */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;