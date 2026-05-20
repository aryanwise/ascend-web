import React from 'react';
import { Bot, Mail, ShieldAlert, FileText, Search, ArrowRight, Check } from 'lucide-react';

export default function TasksAgent() {
  const agentCapabilities = [
    { 
      icon: <Mail className="w-5 h-5 text-[#547A66]" />, 
      title: 'Draft & Send Emails', 
      desc: 'Just say: "Draft an email to team@example.com about our project update and send it." The agent writes it in your style, lets you review, and sends it directly.' 
    },
    { 
      icon: <Search className="w-5 h-5 text-[#5C6E91]" />, 
      title: 'Quick Topic Research', 
      desc: 'Ask: "Research competitor pricing models for me." The agent searches top web sources, pulls the key facts, and writes a neat summary in seconds.' 
    },
    { 
      icon: <FileText className="w-5 h-5 text-[#D96C4A]" />, 
      title: 'Create Clean PDFs', 
      desc: 'Tell the agent: "Convert my weekly notes into a PDF guide." It automatically packages your text and research into a beautifully formatted local PDF file.' 
    },
    { 
      icon: <ShieldAlert className="w-5 h-5 text-[#A32D2D]" />, 
      title: 'Do the Boring Work', 
      desc: 'Outsource repetitive tasks like "Format this list into a clean table" or "Write a template for follow-up texts." The agent executes it instantly in the background.' 
    },
  ];

  return (
    <section id="tasks-agent" className="py-24 bg-white border-b border-[#EBEAE5]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF0EC] text-[#547A66] text-xs font-bold uppercase tracking-wider mb-4">
            <Bot className="w-3.5 h-3.5" />
            Background Execution Engine - Coming Soon
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-[#2D2D2A]">
            Delegate Your Daily Priorities
          </h2>
          <p className="text-[#7A7A75] text-lg leading-relaxed">
            Don’t let busywork slow your momentum. Delegate research, document summaries, proposal drafts, and PDF generation to a secure local agent that works quietly in the background.
          </p>
        </div>

        {/* Feature Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: The Capability Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {agentCapabilities.map((capability, idx) => (
              <div 
                key={idx} 
                className="bg-[#F9F8F6] p-6 rounded-[24px] border border-[#EBEAE5] transition-all duration-300 hover:shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-[#EBEAE5] shadow-xs mb-4">
                  {capability.icon}
                </div>
                <h3 className="font-bold text-base mb-1.5 text-[#2D2D2A]">{capability.title}</h3>
                <p className="text-xs text-[#7A7A75] leading-relaxed">{capability.desc}</p>
              </div>
            ))}
          </div>

          {/* Right: UI Execution Mockup Box */}
          <div className="lg:col-span-5 bg-[#F9F8F6] p-6 rounded-[32px] border border-[#EBEAE5] font-mono text-xs text-[#2D2D2A] shadow-inner relative overflow-hidden">
            <div className="absolute top-3 right-4 flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
            </div>
            
            <div className="border-b border-[#EBEAE5] pb-3 mb-4">
              <span className="text-[#7A7A75]">AscendOS // TasksAgent v1.0</span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[#547A66] font-bold">❯ INPUT DELEGATION:</span>
                <p className="bg-white p-2.5 rounded-lg border border-[#EBEAE5] mt-1 font-sans text-gray-700">
                  "Draft an email to partners@ascend.app summarizing our MVP progress, attach the research PDF, and send it."
                </p>
              </div>

              <div className="space-y-1.5 text-gray-500">
                <p className="flex items-center gap-2 text-[#5C6E91]">
                  <Check className="w-3.5 h-3.5" /> Compiling mvp_overview.pdf...
                </p>
                <p className="flex items-center gap-2 text-[#5C6E91]">
                  <Check className="w-3.5 h-3.5" /> Drafting personalized overview email...
                </p>
                <p className="flex items-center gap-2 text-[#D96C4A]">
                  <span className="animate-pulse">●</span> Delivering email via secure client...
                </p>
              </div>

              <div className="pt-2 border-t border-[#EBEAE5] flex items-center justify-between">
                <span className="text-[#547A66] font-bold">✉️ Sent to partners@ascend.app</span>
                <span className="text-[10px] bg-[#EAF0EC] text-[#547A66] px-2 py-0.5 rounded-md font-sans font-bold">SENT (SUCCESS)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}