import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Footer from './sections/Footer';
import About from './sections/About';
import CTA from './sections/CTA';

export default function HomePageLayout() {
  
  return (
    <div className="min-h-screen bg-bg text-text selection:bg-primary selection:text-primary-fg">
      <Navigation />
      <main>
        <Hero />
        {/* Simple visual separator */}
        <div className="px-6">
          <div className="max-w-7xl mx-auto h-px bg-border" />
        </div>
        <Features />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
