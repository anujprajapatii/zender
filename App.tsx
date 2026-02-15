import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CodeSection from './components/CodeSection';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        
        {/* Trusted By Strip */}
        <div className="py-10 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">
              Powering communication for
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholder Logos */}
              {['Acme Corp', 'GlobalBank', 'TechSoft', 'HealthPlus', 'EduLearn'].map((brand, i) => (
                <span key={i} className="text-xl md:text-2xl font-black text-slate-800">{brand}</span>
              ))}
            </div>
          </div>
        </div>

        <Features />
        <CodeSection />
        <Testimonials />
        <Pricing />
        
        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
             {/* Abstract circles */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
             <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full translate-y-1/3 -translate-x-1/4"></div>
             
             <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to transform your messaging?</h2>
             <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto relative z-10">
               Join 10,000+ businesses using ConnectFlow to reach their customers instantly.
             </p>
             <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 relative z-10">
               <button className="px-8 py-4 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg">
                 Get Started Now
               </button>
               <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                 Contact Sales
               </button>
             </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;