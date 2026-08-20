import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, Bot, User, Sparkles, Search, ArrowRight, RefreshCw, Zap } from "lucide-react";

interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
  time: string;
}

interface AutomationFAQ {
  id: string;
  category: "Voice AI" | "CRM & Pipeline" | "Lead Capture" | "Pricing & ROI";
  question: string;
  summary: string;
  actionText: string;
}

const AUTOMATION_KNOWLEDGE_BASE: AutomationFAQ[] = [
  {
    id: "kb-1",
    category: "Voice AI",
    question: "How does the AI Voice Receptionist handle inbound phone calls?",
    summary: "Our AI Receptionist answers calls in under 2 rings with custom human-like voice models. It qualifies leads, checks calendar availability, and books appointments directly into your CRM 24/7.",
    actionText: "Listen to Voice Demo",
  },
  {
    id: "kb-2",
    category: "Lead Capture",
    question: "What is Missed-Call Text-Back and how fast does it trigger?",
    summary: "When a customer calls and gets no answer, an automated SMS is sent within 5 seconds asking how your team can help, rescuing up to 65% of lost phone leads before they call a competitor.",
    actionText: "View Workflow",
  },
  {
    id: "kb-3",
    category: "CRM & Pipeline",
    question: "Can AI Automation NY integrate with GoHighLevel, Hubspot, or Zapier?",
    summary: "Yes! We build native integrations with GoHighLevel, HubSpot, Salesforce, Clio, Jobber, ServiceTitan, Google Calendar, and 5,000+ apps via webhooks.",
    actionText: "Check Integrations",
  },
  {
    id: "kb-4",
    category: "Pricing & ROI",
    question: "How long does setup take and what is the typical ROI?",
    summary: "Implementation takes 7 to 10 days. Most New York businesses see 3x-5x ROI in the first 30 days through captured missed leads and eliminated receptionist overtime.",
    actionText: "See Pricing Plans",
  },
  {
    id: "kb-5",
    category: "Voice AI",
    question: "Can the AI handle emergency calls or transfer to a live human?",
    summary: "Absolutely. You can define custom escalation rules. If a call is flagged urgent (e.g. burst pipe, emergency legal filing), the AI transfers the live call straight to your cell.",
    actionText: "Try Voice Call",
  },
];

export const DemoChatWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"chat" | "search">("chat");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      text: "Hello! Welcome to AI Automation NY. I'm Sarah, your 24/7 AI Assistant. Ask any question below or search our automation knowledge base!",
      time: "Just now"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "Do you have availability tomorrow?",
    "How much does the AI Grow package cost?",
    "Can you answer calls for contractors?",
    "How does calendar booking work?"
  ];

  useEffect(() => {
    if (activeTab === "chat") {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, activeTab]);

  const sendMessage = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      time: "Just now"
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai-chat-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query, industry: "New York Business" })
      });

      const data = await res.json();
      const replyText = data.reply || "Thanks for asking! We can schedule a free AI Automation Audit for your business. What day works best?";

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "ai",
          text: replyText,
          time: "Just now"
        }
      ]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "ai",
          text: "Thanks for testing! Our AI systems respond instantly, answer FAQs, and book calendar slots directly into your CRM. Would you like to schedule a free live audit?",
          time: "Just now"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKBSelect = (item: AutomationFAQ) => {
    setActiveTab("chat");
    sendMessage(`Tell me more about: "${item.question}"`);
  };

  const categories = ["All", "Voice AI", "CRM & Pipeline", "Lead Capture", "Pricing & ROI"];

  const filteredKnowledge = AUTOMATION_KNOWLEDGE_BASE.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = !searchQuery.trim() || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="glass-panel rounded-2xl p-5 sm:p-6 border border-[#176BFF]/30 bg-[#07152D]/95 shadow-2xl flex flex-col h-[530px] w-full">
      
      {/* Widget Header with Tab Switcher */}
      <div className="flex flex-col gap-3 pb-3 border-b border-white/10 shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#176BFF] to-[#00C2FF] p-0.5 shadow-md">
                <div className="w-full h-full bg-[#07152D] rounded-[10px] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#00C2FF]" />
                </div>
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#70D44B] border-2 border-[#07152D] rounded-full"></span>
            </div>
            <div>
              <div className="font-heading font-bold text-xs sm:text-sm text-white flex items-center gap-1.5">
                <span>Sarah — AI Assistant</span>
                <Sparkles className="w-3.5 h-3.5 text-[#00C2FF]" />
              </div>
              <div className="text-[10px] text-[#8D9AAF]">
                Online 24/7 • AI Automation NY
              </div>
            </div>
          </div>

          <button 
            onClick={() => setMessages([messages[0]])}
            className="text-[11px] text-[#8D9AAF] hover:text-white flex items-center gap-1 px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
            title="Reset chat"
          >
            <RefreshCw className="w-3 h-3" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>

        {/* Tab Toggle: AI Chat vs Context Search */}
        <div className="grid grid-cols-2 p-1 rounded-xl bg-[#030B18] border border-white/10 text-xs font-heading font-semibold">
          <button
            onClick={() => setActiveTab("chat")}
            className={`py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === "chat"
                ? "bg-[#176BFF] text-white shadow-md"
                : "text-[#8D9AAF] hover:text-white"
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>AI Receptionist</span>
          </button>

          <button
            onClick={() => setActiveTab("search")}
            className={`py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === "search"
                ? "bg-gradient-to-r from-[#176BFF] to-[#00C2FF] text-white shadow-md"
                : "text-[#8D9AAF] hover:text-white"
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Context Search</span>
          </button>
        </div>
      </div>

      {/* Tab Content: Live AI Chat */}
      {activeTab === "chat" && (
        <div className="flex-1 flex flex-col min-h-0 pt-2">
          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto py-2 space-y-3 scrollbar-thin pr-1">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div className="flex items-center gap-1.5 text-[10px] text-[#8D9AAF] mb-0.5">
                  {msg.sender === "ai" ? (
                    <span className="text-[#00C2FF] font-semibold flex items-center gap-1">
                      <Bot className="w-3 h-3" /> AI Assistant
                    </span>
                  ) : (
                    <span className="text-white font-semibold flex items-center gap-1">
                      <User className="w-3 h-3 text-[#70D44B]" /> You
                    </span>
                  )}
                </div>

                <div className={`p-3 rounded-2xl text-xs sm:text-sm max-w-[88%] leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-[#176BFF] text-white rounded-tr-none shadow-md"
                    : "bg-[#0D1F3D] border border-[#176BFF]/30 text-[#F7F9FC] rounded-tl-none"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-xs text-[#00C2FF] bg-[#0D1F3D] p-2.5 rounded-2xl w-fit border border-[#176BFF]/30">
                <Bot className="w-3.5 h-3.5 animate-spin" />
                <span>Sarah is typing...</span>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="py-2 flex gap-1.5 overflow-x-auto scrollbar-none shrink-0 border-t border-white/5">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => sendMessage(prompt)}
                className="shrink-0 text-[10px] bg-white/5 hover:bg-[#176BFF]/20 border border-white/10 hover:border-[#00C2FF]/40 text-[#F7F9FC] px-2.5 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="flex items-center gap-2 pt-2 border-t border-white/10 shrink-0"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Sarah anything about AI automation..."
              className="flex-1 bg-[#050D1D] border border-white/15 focus:border-[#00C2FF] rounded-xl px-3.5 py-2 text-xs text-white placeholder-[#8D9AAF] focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2 bg-gradient-to-r from-[#176BFF] to-[#00C2FF] disabled:opacity-50 text-white rounded-xl hover:opacity-95 transition-all shadow-md cursor-pointer shrink-0"
              aria-label="Send Message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Tab Content: Context-Aware Search */}
      {activeTab === "search" && (
        <div className="flex-1 flex flex-col min-h-0 pt-3">
          
          {/* Search Input */}
          <div className="relative shrink-0 mb-2.5">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#00C2FF]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Voice AI, GoHighLevel, CRM, Pricing..."
              className="w-full pl-9 pr-3 py-2 bg-[#050D1D] border border-[#176BFF]/40 focus:border-[#00C2FF] rounded-xl text-xs text-white placeholder-[#8D9AAF] focus:outline-none"
            />
          </div>

          {/* Category Pills */}
          <div className="flex gap-1.5 overflow-x-auto scrollbar-none shrink-0 mb-3 pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-heading font-semibold shrink-0 transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#176BFF] text-white shadow-sm"
                    : "bg-white/5 hover:bg-white/10 text-[#8D9AAF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Results List */}
          <div className="flex-1 overflow-y-auto space-y-2.5 scrollbar-thin pr-1">
            {filteredKnowledge.length === 0 ? (
              <div className="text-center py-8 text-xs text-[#8D9AAF]">
                No answers found for "{searchQuery}". Try asking Sarah in the AI Receptionist chat tab!
              </div>
            ) : (
              filteredKnowledge.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-xl bg-[#0D1F3D]/80 border border-[#176BFF]/30 hover:border-[#00C2FF]/60 transition-all text-left group"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[9px] font-heading font-bold uppercase tracking-wider text-[#00C2FF] bg-[#176BFF]/10 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <button
                      onClick={() => handleKBSelect(item)}
                      className="text-[10px] text-[#70D44B] hover:text-white flex items-center gap-1 font-semibold group-hover:underline cursor-pointer"
                    >
                      <span>Ask Sarah</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  <h4 className="text-xs font-heading font-bold text-white mb-1 leading-snug">
                    {item.question}
                  </h4>

                  <p className="text-[11px] text-[#A1B3D3] leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      )}

    </div>
  );
};

