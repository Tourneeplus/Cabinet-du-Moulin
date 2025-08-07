import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import Legal from "./components/Legal";
import Privacy from "./components/Privacy";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Basename dynamique selon l'env (production = sous dossier GitHub Pages)
const basename = import.meta.env.PROD ? "/Cabinet-du-Moulin" : "/";

const App = () => {
  return (
    <BrowserRouter basename={basename}>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
