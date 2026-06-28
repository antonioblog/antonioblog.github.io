// App.tsx — Antonio Encinas Camacho
// Design: "Ascenso Imparable" — dark theme, orange fire accent
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import ScrollToTopButton from './components/ScrollToTopButton';
import { useScrollToTop } from './hooks/useScrollToTop';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Estadisticas from "./pages/Estadisticas";
import Logros from "./pages/Logros";
import Sobre from './pages/Sobre';
import Galeria from './pages/Galeria';
import Videos from './pages/Videos';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/historia" component={Historia} />
      <Route path="/estadisticas" component={Estadisticas} />
      <Route path="/logros" component={Logros} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/galeria" component={Galeria} />
      <Route path="/videos" component={Videos} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function Layout() {
  useScrollToTop();
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Layout />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
