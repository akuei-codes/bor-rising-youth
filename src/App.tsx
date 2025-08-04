import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Profiles from "./pages/Profiles";
import Map from "./pages/Map";
import Projects from "./pages/Projects";
import Opportunities from "./pages/Opportunities";
import SignIn from "./pages/SignIn";
import JoinCommunity from "./pages/JoinCommunity";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/map" element={<Map />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/join" element={<JoinCommunity />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
