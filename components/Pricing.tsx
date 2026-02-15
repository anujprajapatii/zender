import React from 'react';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    features: [
      "100 free messages/mo",
      "API Access",
      "Community Support",
      "1 Team Member"
    ],
    buttonText: "Start for Free",
    isPopular: false
  },
  {
    name: "Growth",
    price: "$49",
    period: "per month",
    features: [
      "10,000 messages/mo",
      "Priority API Access",
      "Email Support",
      "5 Team Members",
      "Analytics Dashboard"
    ],
    buttonText: "Get Started",
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Unlimited scaling",
      "Dedicated Account Manager",
      "24/7 Phone Support",
      "SSO & Custom Security",
      "SLA Guarantees"
    ],
    buttonText: "Contact Sales",
    isPopular: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate-600">
            No hidden fees. Change plans or cancel any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl p-8 border ${plan.isPopular ? 'border-primary-500 shadow-2xl scale-105 z-10' : 'border-slate-200 shadow-lg'} transition-all`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  {plan.period && <span className="ml-2 text-slate-500 text-sm">/ {plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="text-green-500 mr-3 shrink-0" size={20} />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-lg font-bold transition-colors ${
                  plan.isPopular 
                    ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;