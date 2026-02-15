import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const CodeSection: React.FC = () => {
  return (
    <section id="developers" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built for developers, <br />
              <span className="text-primary-400">loved by businesses.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Integrate our API in minutes, not days. We provide simple, clean, and well-documented endpoints that just work.
            </p>
            
            <div className="space-y-4">
              {[
                '99.99% Uptime SLA',
                'Real-time Webhooks',
                'Detailed Error Logs',
                'Sandbox Environment'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary-400" size={24} />
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 px-8 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-primary-50 transition-colors">
              Read Documentation
            </button>
          </div>

          {/* Code Block Visual */}
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-xl bg-slate-800 border border-slate-700 shadow-2xl overflow-hidden font-mono text-sm">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/50 border-b border-slate-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-slate-400 text-xs">send-message.js</div>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre>
<code><span className="text-purple-400">const</span> client = <span className="text-blue-400">require</span>(<span className="text-green-400">'z-clone-sdk'</span>);

<span className="text-slate-400">// Initialize with your API Key</span>
<span className="text-purple-400">const</span> api = <span className="text-purple-400">new</span> client.API(<span className="text-green-400">'sk_live_123...'</span>);

<span className="text-slate-400">// Send a WhatsApp message</span>
<span className="text-purple-400">await</span> api.messages.<span className="text-blue-400">create</span>({`{`}
  to: <span className="text-green-400">'+1234567890'</span>,
  channel: <span className="text-green-400">'whatsapp'</span>,
  content: {`{`}
    text: <span className="text-green-400">'Hello! Your order #9921 is confirmed.'</span>
  {`}`}
{`}`})
.<span className="text-blue-400">then</span>(response <span className="text-purple-400">=></span> {`{`}
  console.<span className="text-blue-400">log</span>(<span className="text-green-400">'Message ID:'</span>, response.id);
{`}`});</code>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CodeSection;