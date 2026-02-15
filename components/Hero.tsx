import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-200 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-200 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-8">
            <span className="bg-primary-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">NEW</span>
            <span className="text-sm text-primary-800 font-medium">WhatsApp Gateway API v2.0 is live!</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Connect with customers <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              on any channel.
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            The all-in-one communication platform for modern businesses. 
            Automate SMS, WhatsApp, and Email workflows with our developer-friendly API.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <button className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold text-lg shadow-lg shadow-primary-500/30 transition-all flex items-center justify-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-full font-semibold text-lg transition-all flex items-center justify-center space-x-2">
              <PlayCircle size={20} />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Dashboard Preview / Abstract Image */}
        <div className="relative mx-auto max-w-5xl">
          <div className="relative rounded-2xl bg-slate-900 p-2 shadow-2xl ring-1 ring-slate-900/10">
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-secondary-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
            
            <div className="rounded-xl overflow-hidden bg-slate-800 aspect-[16/9] relative group">
                <img 
                    src="https://picsum.photos/seed/dashboard/1200/675" 
                    alt="App Dashboard" 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                {/* Floating UI Elements Simulation */}
                <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/10 w-64 shadow-lg">
                    <div className="h-2 w-20 bg-primary-400 rounded mb-2"></div>
                    <div className="h-2 w-32 bg-slate-400/50 rounded"></div>
                </div>
                <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/10 w-48 shadow-lg">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-green-400"></div>
                        <div>
                            <div className="h-2 w-16 bg-white/80 rounded mb-1"></div>
                            <div className="h-2 w-10 bg-white/50 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;