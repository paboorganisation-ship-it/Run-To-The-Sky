import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Navbar } from "./components/Navbar"; // Importez le nouveau composant Navbar
import LaSerie from "./pages/LaSerie"; // Importez la nouvelle page LaSerie
import Calendrier from "./pages/Calendrier"; // Importez la nouvelle page Calendrier

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar /> {/* Placez la Navbar ici pour qu'elle apparaisse sur toutes les pages */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/la-serie" element={<LaSerie />} /> {/* Nouvelle route */}
          <Route path="/calendrier" element={<Calendrier />} /> {/* Nouvelle route */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;