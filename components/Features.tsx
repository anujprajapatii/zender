import React from 'react';
import { MessageSquare, Shield, Zap, Globe, Code2, Smartphone } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "Multi-Channel Messaging",
    description: "Send messages via WhatsApp, SMS, and Email from a single unified dashboard.",
    icon: MessageSquare,
  },
  {
    title: "Developer Friendly API",
    description: "Robust REST APIs with comprehensive documentation and SDKs for major languages.",
    icon: Code2,
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption and GDPR compliance to keep your customer data safe.",
    icon: Shield,
  },
  {
    title: "Global Coverage",
    description: "Reach customers in over 190 countries with our direct carrier connections.",
    icon: Globe,
  },
  {
    title: "Instant Delivery",
    description: "High-throughput architecture ensures your OTPs and alerts arrive in seconds.",
    icon: Zap,
  },
  {
    title: "Mobile Optimized",
    description: "Manage your campaigns on the go with our fully responsive mobile application.",
    icon: Smartphone,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Why Choose Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything you need to scale your communication
          </h3>
          <p className="text-lg text-slate-600">
            We provide the infrastructure so you can focus on building great customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300 border border-slate-100"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary-600 shadow-sm border border-slate-100 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <feature.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;