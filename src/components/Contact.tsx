import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Copy, Check, Send, Sparkles, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [proposalType, setProposalType] = useState('full-time');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mohan.pbi123@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+917981151417');
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSent(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSent(false);
    }, 4500);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 border-t border-slate-900 bg-slate-950/20 relative">
      <div className="absolute top-[80%] left-1/3 w-80 h-80 bg-amber-400/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Call Actions & Brand Statement (Col-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">[ COMMISSIONING ]</p>
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Let's transform data into decisions.
                </h2>
                <p className="text-slate-400 mt-4 text-xs md:text-sm leading-relaxed">
                  Interested in streamlining operational reports, hardening row-level database structures, or setting up persistent Gateway clusters? Submit an interaction inquiry or communicate directly.
                </p>
              </div>

              {/* Direct Communication Channels */}
              <div className="space-y-4 pt-4">
                
                {/* Email container */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase font-semibold">EMAIL COMPLIANCE</span>
                      <a href="mailto:mohan.pbi123@gmail.com" className="text-xs md:text-sm font-bold text-slate-300 hover:text-white transition-colors">
                        mohan.pbi123@gmail.com
                      </a>
                    </div>
                  </div>
                  <button 
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded bg-slate-950 border border-slate-850 hover:border-amber-400/30 text-slate-400 hover:text-white transition-all cursor-pointer"
                  >
                    {emailCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone container */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase font-semibold">TELEPHONY PHONE</span>
                      <a href="tel:+917981151417" className="text-xs md:text-sm font-bold text-slate-300 hover:text-white transition-colors">
                        +91 7981151417
                      </a>
                    </div>
                  </div>
                  <button 
                    onClick={handleCopyPhone}
                    className="p-1.5 rounded bg-slate-950 border border-slate-850 hover:border-amber-400/30 text-slate-400 hover:text-white transition-all cursor-pointer"
                  >
                    {phoneCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* LinkedIn container */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase font-semibold">LINKEDIN CONNECT</span>
                      <span className="text-xs md:text-sm font-bold text-slate-450">
                        Inquire connection
                      </span>
                    </div>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/mohan-kumar-pbi" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-1.5 px-3 rounded bg-slate-950 border border-slate-850 hover:border-amber-400/40 text-slate-400 hover:text-white text-[11px] font-mono font-bold transition-all"
                  >
                    CONNECT
                  </a>
                </div>

              </div>
            </div>

            {/* Bottom branding metadata */}
            <div className="text-[10px] font-mono text-slate-650 mt-12 hidden lg:block">
              <span>DESIGNED FOR RECRUITMENT MATCHES © 2026</span>
              <br />
              <span>STABLE PORT INGRESS: 3000 // VERIFIED</span>
            </div>
          </div>

          {/* Right Column: Interaction Form (Col-7) */}
          <div className="lg:col-span-7">
            <div className="glass-panel border-slate-800/80 rounded-3xl p-6 md:p-8 relative overflow-hidden bg-slate-950/80">
              
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <h3 className="text-base font-mono text-slate-350 font-bold uppercase tracking-wider">Inquiry routing desk</h3>
              </div>

              {/* Proposal types buttons */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {['full-time', 'freelance', 'consult'].map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProposalType(type)}
                    className={`py-2 px-1 text-center font-mono text-[10px] font-bold rounded-lg uppercase tracking-wide transition-all border cursor-pointer ${
                      proposalType === type 
                        ? 'bg-amber-450/15 border-amber-400 text-amber-400' 
                        : 'bg-slate-900/60 border-slate-850 text-slate-500 hover:border-slate-800'
                    }`}
                  >
                    {type === 'full-time' ? 'Full-Time' : type === 'freelance' ? 'Freelance' : 'Consulting'}
                  </button>
                ))}
              </div>

              {formSent ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 animate-bounce">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-mono">Inquiry Successfully Routed!</h4>
                    <p className="text-xs text-slate-500 mt-1 max-w-sm">
                      Thank you for contacting Mohan Kumar! Since this is a portfolio environment, your simulated communication has been logged. Mohan typically responds to {proposalType} invitations within 12 hours.
                    </p>
                  </div>
                  <div className="p-2 px-3.5 bg-slate-900 border border-slate-800 rounded font-mono text-[9px] text-amber-500">
                    DIAGNOSTICS_TETHER_PASS
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono text-slate-500 block uppercase font-bold mb-1.5">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e)=>setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs focus:border-amber-400/50 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-500 block uppercase font-bold mb-1.5">Email *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e)=>setFormData({...formData, email: e.target.value})}
                        placeholder="johndoe@company.com" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs focus:border-amber-400/50 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-slate-500 block uppercase font-bold mb-1.5">Your Message</label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e)=>setFormData({...formData, message: e.target.value})}
                      placeholder="Hi Mohan, I reviewed your Power BI/SQL projects and would love to schedule a technical chat for a role." 
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs focus:border-amber-400/50 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold transition-all duration-300 shadow-[0_4px_15px_rgba(242,200,17,0.2)] hover:shadow-[0_4px_20px_rgba(242,200,17,0.4)] cursor-pointer flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold"
                  >
                    <span>Route message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

              {/* Response SLA marker */}
              <div className="mt-6 pt-4 border-t border-slate-900/60 flex items-center justify-between text-[10px] font-mono text-slate-550">
                <span>ESTIMATED DESK RESPONSE TIME</span>
                <span className="text-emerald-400 font-bold">&lt; 12 HOURS SLA</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
