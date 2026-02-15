import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechGrowth",
    content: "The API reliability is unmatched. We switched from a major competitor and cut our costs by 40% while improving delivery rates.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "StartUp Inc",
    content: "Integration took less than an afternoon. The documentation is incredibly clear and the support team is responsive.",
    avatar: "https://picsum.photos/seed/michael/100/100"
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director",
    company: "GlobalRetail",
    content: "Our customer engagement has doubled since we started using the multi-channel campaigns. Highly recommended tool.",
    avatar: "https://picsum.photos/seed/elena/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by developers worldwide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
               <div className="flex items-center mb-4">
                 <img 
                   src={item.avatar} 
                   alt={item.name} 
                   className="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-sm"
                 />
                 <div>
                   <h4 className="font-bold text-slate-900">{item.name}</h4>
                   <p className="text-xs text-slate-500 uppercase font-semibold">{item.role}, {item.company}</p>
                 </div>
               </div>
               <p className="text-slate-600 italic leading-relaxed">"{item.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;