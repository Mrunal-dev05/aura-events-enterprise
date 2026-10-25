"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Calendar,
  DollarSign,
  Users,
  Sparkles,
  Search,
  Filter,
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  Clock,
  MapPin,
  TrendingUp,
  AlertCircle,
  Download,
  Share2,
  ChevronRight,
  ExternalLink,
  Bot,
  Building2,
  Tag,
  FileText,
  RefreshCw,
  LogOut,
  User,
  ShieldCheck,
  Phone,
  Mail,
  X,
  Database,
  ArrowUpRight,
  CheckSquare,
  Square
} from "lucide-react";

// Initial Comprehensive Mock Data
const INITIAL_EVENTS = [
  {
    id: "evt-01",
    name: "Apex Global Tech Summit 2026",
    category: "Corporate Conference",
    date: "2026-11-14",
    time: "09:00 AM",
    venue: "Jio World Convention Centre, BKC, Mumbai",
    expectedPax: 850,
    budget: 2500000,
    status: "Upcoming",
    description: "Annual multi-track technology symposium exploring frontier agentic systems, quantum architectures, and enterprise AI transformation.",
    runOfShow: [
      { time: "08:00 AM", cue: "Registration & VIP Lounge Networking", owner: "Event Operations Lead" },
      { time: "09:30 AM", cue: "Keynote: Next-Gen Autonomous AI Agents", owner: "Chief Innovation Officer" },
      { time: "11:00 AM", cue: "Parallel Breakout Panels: Quantum & Cloud", owner: "Tech Track Chairs" },
      { time: "01:00 PM", cue: "Networking Luncheon & Demo Floor Open", owner: "Catering Director" },
      { time: "04:30 PM", cue: "Startup Showcase & Awards Ceremony", owner: "Venture Partners" }
    ],
    tasks: [
      { id: "t1", title: "Finalize main keynote audio/visual rider", priority: "High", completed: true },
      { id: "t2", title: "Confirm badge lanyards and delegate welcome kits", priority: "Medium", completed: true },
      { id: "t3", title: "Dry run for 4K curved LED stage backdrop", priority: "High", completed: false },
      { id: "t4", title: "Audit high-density Wi-Fi throughput with IT lead", priority: "High", completed: false }
    ],
    rsvps: [
      { name: "Dr. Arvind Subramanian", email: "arvind.s@techpulse.in", role: "Keynote Speaker", seat: "A-01" },
      { name: "Meera Singhania", email: "meera@vcfirm.com", role: "Panel Moderator", seat: "A-04" },
      { name: "Rahul Deshmukh", email: "r.deshmukh@enterprise.co", role: "VIP Delegate", seat: "B-12" }
    ]
  },
  {
    id: "evt-02",
    name: "Royal Rajputana Heritage Wedding",
    category: "Luxury Wedding",
    date: "2026-12-18",
    time: "04:30 PM",
    venue: "The Leela Palace, Lake Pichola, Udaipur",
    expectedPax: 400,
    budget: 6500000,
    status: "Upcoming",
    description: "Multi-day royal destination celebration blending regal Rajasthani hospitality, bespoke lakeside mandap architecture, and cultural performances.",
    runOfShow: [
      { time: "03:00 PM", cue: "Bespoke Royal Boat Arrival of Guests", owner: "Hospitality Lead" },
      { time: "05:00 PM", cue: "Sunset Pheras at Lake Terrace Mandap", owner: "Priest & Family Lead" },
      { time: "07:30 PM", cue: "Gala Dinner & Rajasthani Folk Recital", owner: "Banquet Director" }
    ],
    tasks: [
      { id: "tw1", title: "Inspect floral consignments arriving from Bengaluru", priority: "High", completed: true },
      { id: "tw2", title: "Coordinate traditional welcome folk troupe", priority: "Medium", completed: true },
      { id: "tw3", title: "Finalize curated multi-course royal thali menu", priority: "High", completed: false }
    ],
    rsvps: [
      { name: "Maharaja Vikramaditya Singh", email: "vikram@royaltrust.org", role: "Honorary Host", seat: "Royal Alcove 1" },
      { name: "Sunita Kapoor", email: "sunita@fashiondelhi.in", role: "Guest of Honor", seat: "Terrace Row 1" }
    ]
  },
  {
    id: "evt-03",
    name: "NexGen AI Hackathon & Pitch Arena",
    category: "Hackathon",
    date: "2026-11-28",
    time: "08:00 AM",
    venue: "IIT Bombay Campus, Powai, Mumbai",
    expectedPax: 350,
    budget: 850000,
    status: "Draft",
    description: "36-hour sprint competition for university developers and early-stage founders tackling sustainability and generative engineering challenges.",
    runOfShow: [
      { time: "08:00 AM", cue: "Hacker check-in & desk allocation", owner: "Campus Ambassador" },
      { time: "10:00 AM", cue: "Hacking begins & mentor rotations", owner: "Technical Mentor Pool" },
      { time: "08:00 PM", cue: "Midnight pizza drop & fun lightning talks", owner: "Logistics Team" }
    ],
    tasks: [
      { id: "th1", title: "Acquire 500 energy drinks and sponsor merch", priority: "High", completed: true },
      { id: "th2", title: "Set up redundant backup 1Gbps fiber uplinks", priority: "High", completed: false },
      { id: "th3", title: "Brief judge panel on standardized scoring rubric", priority: "Medium", completed: false }
    ],
    rsvps: [
      { name: "Tanmay Bhatia", email: "tanmay@devfoundry.io", role: "Head Judge", seat: "J-01" },
      { name: "Priya Nair", email: "priya@venturelab.org", role: "Sponsor Rep", seat: "S-03" }
    ]
  },
  {
    id: "evt-04",
    name: "Horizon Autumn Product Unveil & Gala",
    category: "Product Launch",
    date: "2026-09-20",
    time: "06:00 PM",
    venue: "The St. Regis Mumbai, Lower Parel",
    expectedPax: 220,
    budget: 1800000,
    status: "Completed",
    description: "Flagship hardware unveiling and media gala with live keynote broadcast, immersive demo zones, and executive dinner.",
    runOfShow: [
      { time: "06:00 PM", cue: "Cocktail reception & demo booths open", owner: "PR Lead" },
      { time: "07:15 PM", cue: "Main stage product reveal & live demo", owner: "CEO" },
      { time: "08:30 PM", cue: "Executive dining & press interviews", owner: "Communications Lead" }
    ],
    tasks: [
      { id: "tp1", title: "Press kit distribution across national media", priority: "High", completed: true },
      { id: "tp2", title: "Stage pyrotechnics and laser reveal cues", priority: "High", completed: true },
      { id: "tp3", title: "Collect media coverage clips and metrics", priority: "Medium", completed: true }
    ],
    rsvps: [
      { name: "Ayesha Verma", email: "ayesha@techtimes.com", role: "Senior Tech Journalist", seat: "Press-01" },
      { name: "Kunal Shah", email: "kunal@fintechhub.in", role: "Angel Investor", seat: "VIP-02" }
    ]
  }
];

const INITIAL_EXPENSES = [
  { id: "exp-1", eventId: "evt-01", description: "Venue Advance - Grand Ballroom (50% Deposit)", category: "Venue & Catering", amount: 750000, invoiceNo: "JW-2026-881", status: "Paid", vendor: "Jio World Convention Centre" },
  { id: "exp-2", eventId: "evt-01", description: "Curved P3 LED Wall & Production Trussing", category: "AV & Tech", amount: 380000, invoiceNo: "AURA-AV-902", status: "Paid", vendor: "Sound & Vision India" },
  { id: "exp-3", eventId: "evt-01", description: "High-Density Enterprise Wi-Fi Network Uplinks", category: "AV & Tech", amount: 140000, invoiceNo: "WIFI-MUM-41", status: "Pending", vendor: "Spectra Business Solutions" },
  { id: "exp-4", eventId: "evt-01", description: "Speaker Flights & St. Regis Hospitality Suites", category: "Logistics", amount: 260000, invoiceNo: "TRV-9931", status: "Paid", vendor: "Taj & St. Regis Hotels" },
  { id: "exp-5", eventId: "evt-01", description: "Delegate Badges, RFID Chips & Custom Lanyards", category: "Marketing & Badges", amount: 95000, invoiceNo: "PRN-5542", status: "Pending", vendor: "PrintCraft Corporate" },
  { id: "exp-6", eventId: "evt-02", description: "Leela Palace Island Exclusive Rental Deposit", category: "Venue & Catering", amount: 2500000, invoiceNo: "LEELA-UDR-11", status: "Paid", vendor: "The Leela Palace Udaipur" },
  { id: "exp-7", eventId: "evt-02", description: "Curated Exotic Orchid Mandap & Lake Floral Arch", category: "Decor & Staging", amount: 1200000, invoiceNo: "FLR-UDR-78", status: "Paid", vendor: "Royal Udaipur Floral Arts" },
  { id: "exp-8", eventId: "evt-02", description: "Traditional Rajasthani Folk Ensemble & Dhol Troupes", category: "Decor & Staging", amount: 350000, invoiceNo: "ART-882", status: "Pending", vendor: "Mewar Cultural Academy" },
  { id: "exp-9", eventId: "evt-03", description: "Student Accommodation & Overnight Refreshments", category: "Venue & Catering", amount: 220000, invoiceNo: "IIT-HOSP-09", status: "Paid", vendor: "IIT Hospitality Cell" },
  { id: "exp-10", eventId: "evt-03", description: "High-Capacity Redundant Fiber Internet Infrastructure", category: "AV & Tech", amount: 110000, invoiceNo: "NET-5510", status: "Pending", vendor: "Tata Tele Business" },
  { id: "exp-11", eventId: "evt-04", description: "St. Regis Astral Hall Rental & Banquet Setup", category: "Venue & Catering", amount: 890000, invoiceNo: "REGIS-BOM-002", status: "Paid", vendor: "The St. Regis Mumbai" },
  { id: "exp-12", eventId: "evt-04", description: "Holographic Keynote Launch Staging & Laser Effects", category: "AV & Tech", amount: 550000, invoiceNo: "HOLO-401", status: "Paid", vendor: "Prism Stage Tech" }
];

const INITIAL_VENDORS = [
  { id: "vnd-1", name: "Jio World Convention Centre", category: "Venue", contactPerson: "Rajesh Kulkarni", phone: "+91 98201 12345", email: "events@jioworldcentre.com", status: "Signed", quote: 1500000 },
  { id: "vnd-2", name: "Sound & Vision India", category: "AV & Production", contactPerson: "Vikram Malhotra", phone: "+91 98111 88721", email: "sales@soundvision.in", status: "Signed", quote: 650000 },
  { id: "vnd-3", name: "The Leela Palace Udaipur", category: "Luxury Venue", contactPerson: "Ananya Rathore", phone: "+91 99280 44321", email: "weddings@theleela.com", status: "Signed", quote: 4500000 },
  { id: "vnd-4", name: "Royal Udaipur Floral Arts", category: "Decor & Flowers", contactPerson: "Manish Joshi", phone: "+91 97831 22901", email: "decor@udaipurflorals.com", status: "Signed", quote: 1400000 },
  { id: "vnd-5", name: "PrintCraft Corporate", category: "Collateral & Badges", contactPerson: "Suresh Pillai", phone: "+91 98450 67123", email: "suresh@printcraft.co.in", status: "In Discussion", quote: 120000 },
  { id: "vnd-6", name: "Prism Stage Tech", category: "Special FX & Holograms", contactPerson: "Nikhil Chawla", phone: "+91 98920 45561", email: "contact@prismstage.com", status: "Signed", quote: 750000 }
];

export default function App() {
  // Persistence State
  const [events, setEvents] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("aura_events_v2");
      if (saved) {
        try { return JSON.parse(saved); } catch (e) { console.error(e); }
      }
    }
    return INITIAL_EVENTS;
  });

  const [expenses, setExpenses] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("aura_expenses_v2");
      if (saved) {
        try { return JSON.parse(saved); } catch (e) { console.error(e); }
      }
    }
    return INITIAL_EXPENSES;
  });

  const [vendors, setVendors] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("aura_vendors_v2");
      if (saved) {
        try { return JSON.parse(saved); } catch (e) { console.error(e); }
      }
    }
    return INITIAL_VENDORS;
  });

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem("aura_events_v2", JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem("aura_expenses_v2", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("aura_vendors_v2", JSON.stringify(vendors));
  }, [vendors]);

  // UI Navigation & View State
  const [activeTab, setActiveTab] = useState("dashboard"); // dashboard, events, budget, ai, vendors
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortBy, setSortBy] = useState("date-asc");

  // Modals & Panels
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [eventDetailTab, setEventDetailTab] = useState("overview");

  // User Authentication State (Mockable / Firebase ready)
  const [currentUser, setCurrentUser] = useState({
    name: "Mrunal Pimpale",
    email: "mrunalpimpale@gmail.com",
    role: "Lead Event Architect",
    isEnterprise: true
  });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authName, setAuthName] = useState("");

  // AI Architect State
  const [aiPrompt, setAiPrompt] = useState("");
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const [aiGeneratedPlan, setAiGeneratedPlan] = useState(null);
  const [aiError, setAiError] = useState("");

  // Currency Formatter
  const formatINR = (val) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val || 0);
  };

  // Aggregate Metrics
  const aggregateMetrics = useMemo(() => {
    const totalPlannedBudget = events.reduce((acc, curr) => acc + (Number(curr.budget) || 0), 0);
    const totalActualExpense = expenses.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);
    const remainingBalance = totalPlannedBudget - totalActualExpense;
    const utilizationRate = totalPlannedBudget > 0 ? (totalActualExpense / totalPlannedBudget) * 100 : 0;
    const totalGuests = events.reduce((acc, curr) => acc + (Number(curr.expectedPax) || 0), 0);
    const upcomingCount = events.filter((e) => e.status === "Upcoming").length;
    return { totalPlannedBudget, totalActualExpense, remainingBalance, utilizationRate, totalGuests, upcomingCount };
  }, [events, expenses]);

  // Reset to full demo dataset
  const handleReloadDemoData = () => {
    setEvents(INITIAL_EVENTS);
    setExpenses(INITIAL_EXPENSES);
    setVendors(INITIAL_VENDORS);
  };

  // Clear all workspace data
  const handleClearData = () => {
    if (window.confirm("Are you sure you want to clear all events, expenses, and vendors?")) {
      setEvents([]);
      setExpenses([]);
      setVendors([]);
      setSelectedEvent(null);
    }
  };

  // Export Brief to CSV
  const exportEventCSV = (eventObj) => {
    const eventExpenses = expenses.filter((e) => e.eventId === eventObj.id);
    let csv = `AuraEvents Event Brief\n`;
    csv += `Event Name,"${eventObj.name}"\n`;
    csv += `Category,"${eventObj.category}"\n`;
    csv += `Date,"${eventObj.date}"\n`;
    csv += `Venue,"${eventObj.venue}"\n`;
    csv += `Expected Pax,${eventObj.expectedPax}\n`;
    csv += `Budget (INR),${eventObj.budget}\n\n`;
    csv += `Expense Ledger\nDescription,Category,Vendor,Amount (INR),Status,Invoice\n`;
    eventExpenses.forEach((exp) => {
      csv += `"${exp.description}","${exp.category}","${exp.vendor || "N/A"}",${exp.amount},"${exp.status}","${exp.invoiceNo || ""}"\n`;
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${eventObj.name.replace(/\s+/g, "_")}_Brief.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // AI Architect Generator
  const generateAIEventPlan = async (customPrompt) => {
    const promptToUse = customPrompt || aiPrompt;
    if (!promptToUse.trim()) return;
    setIsGeneratingAi(true);
    setAiError("");
    setAiGeneratedPlan(null);

    try {
      // Direct call to Gemini 3 Flash Preview
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

      const systemInstruction = `You are an elite Senior SaaS Event Producer & Financial Director in India.
When given an event idea or parameters, synthesize a comprehensive, realistic production plan formatted strictly as valid JSON matching this schema:
{
  "name": "string",
  "category": "Corporate Conference | Luxury Wedding | Hackathon | Product Launch | Gala Dinner",
  "expectedPax": number,
  "budget": number (in INR integer),
  "date": "YYYY-MM-DD",
  "venue": "Realistic venue in India with city",
  "description": "Executive summary",
  "runOfShow": [
    { "time": "HH:MM AM/PM", "cue": "Description", "owner": "Role" }
  ],
  "tasks": [
    { "title": "Critical milestone", "priority": "High | Medium | Low" }
  ],
  "expenses": [
    { "description": "Item description", "category": "Venue & Catering | AV & Tech | Decor & Staging | Marketing & Badges | Logistics", "amount": number, "vendor": "Suggested vendor", "status": "Pending" }
  ]
}
Return ONLY valid raw JSON without markdown code fences or backticks.`;

      let responseText = "";
      if (apiKey) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              { role: "user", parts: [{ text: `${systemInstruction}\n\nEvent Details: ${promptToUse}` }] }
            ]
          })
        });
        const data = await res.json();
        responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
      }

      if (!responseText) {
        // Fallback realistic simulation if key is not configured locally
        await new Promise((r) => setTimeout(r, 1200));
        responseText = JSON.stringify({
          name: "Frontier Tech & AI Summit 2027",
          category: "Corporate Conference",
          expectedPax: 600,
          budget: 3200000,
          date: "2027-02-15",
          venue: "Grand Hyatt Mumbai Hotel & Residences, Santacruz",
          description: "A premier summit featuring international keynote talks, agentic robotics booths, and executive roundtables.",
          runOfShow: [
            { time: "08:30 AM", cue: "VIP check-in & breakfast networking", owner: "Guest Relations" },
            { time: "10:00 AM", cue: "Opening Keynote: Autonomous Cloud Agents", owner: "Principal Speaker" },
            { time: "01:00 PM", cue: "Executive Luncheon in Grand Ballroom", owner: "Hospitality Lead" },
            { time: "04:00 PM", cue: "Founder Pitch Finals & Awards", owner: "Judging Director" }
          ],
          tasks: [
            { title: "Review acoustic treatment for keynote auditorium", priority: "High" },
            { title: "Sign banquet service contract and dietary tasting", priority: "High" },
            { title: "Deliver custom attendee lanyards and press kits", priority: "Medium" }
          ],
          expenses: [
            { description: "Ballroom & Banquet 50% Deposit", category: "Venue & Catering", amount: 1500000, vendor: "Grand Hyatt", status: "Pending" },
            { description: "P2.9 Ultra-Fine Pitch LED Wall Stage", category: "AV & Tech", amount: 650000, vendor: "Sound & Vision India", status: "Pending" },
            { description: "Delegate Registration Portal & RFID Badges", category: "Marketing & Badges", amount: 200000, vendor: "PrintCraft", status: "Pending" }
          ]
        });
      }

      const cleanJson = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
      const parsed = JSON.parse(cleanJson);
      setAiGeneratedPlan(parsed);
    } catch (err) {
      console.error(err);
      setAiError("Unable to synthesize AI blueprint. Please review your prompt or network connection.");
    } finally {
      setIsGeneratingAi(false);
    }
  };

  // Import AI Plan into Active Portfolio
  const importAiPlanToWorkspace = () => {
    if (!aiGeneratedPlan) return;
    const newId = `evt-${Date.now()}`;
    const newEvent = {
      id: newId,
      name: aiGeneratedPlan.name || "AI Generated Event",
      category: aiGeneratedPlan.category || "Corporate Conference",
      date: aiGeneratedPlan.date || new Date().toISOString().split("T")[0],
      time: "10:00 AM",
      venue: aiGeneratedPlan.venue || "Convention Centre, Mumbai",
      expectedPax: aiGeneratedPlan.expectedPax || 300,
      budget: aiGeneratedPlan.budget || 1500000,
      status: "Upcoming",
      description: aiGeneratedPlan.description || "Generated via AuraEvents AI Architect.",
      runOfShow: aiGeneratedPlan.runOfShow || [],
      tasks: (aiGeneratedPlan.tasks || []).map((t, idx) => ({
        id: `t-${idx}-${Date.now()}`,
        title: t.title,
        priority: t.priority || "Medium",
        completed: false
      })),
      rsvps: []
    };

    const newExpenses = (aiGeneratedPlan.expenses || []).map((exp, idx) => ({
      id: `exp-${idx}-${Date.now()}`,
      eventId: newId,
      description: exp.description,
      category: exp.category || "General",
      amount: exp.amount || 50000,
      invoiceNo: `AI-${Math.floor(1000 + Math.random() * 9000)}`,
      status: "Pending",
      vendor: exp.vendor || "Designated Vendor"
    }));

    setEvents((prev) => [newEvent, ...prev]);
    setExpenses((prev) => [...prev, ...newExpenses]);
    setSelectedEvent(newEvent);
    setActiveTab("events");
    setAiGeneratedPlan(null);
    setAiPrompt("");
  };

  // Filtered Events
  const filteredEvents = useMemo(() => {
    return events.filter((e) => {
      const matchSearch = e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCat = filterCategory === "All" || e.category === filterCategory;
      const matchStatus = filterStatus === "All" || e.status === filterStatus;
      return matchSearch && matchCat && matchStatus;
    }).sort((a, b) => {
      if (sortBy === "date-asc") return new Date(a.date) - new Date(b.date);
      if (sortBy === "date-desc") return new Date(b.date) - new Date(a.date);
      if (sortBy === "budget-desc") return b.budget - a.budget;
      return 0;
    });
  }, [events, searchQuery, filterCategory, filterStatus, sortBy]);

  return (
    <div className="min-h-screen bg-[#07080c] text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      {/* Top Professional Navigation */}
      <header className="sticky top-0 z-40 bg-[#0c0e17]/90 backdrop-blur-md border-b border-slate-800/80 px-6 py-3.5 flex items-center justify-between shadow-2xl">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab("dashboard")}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-600/30 ring-1 ring-white/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
                AuraEvents
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Enterprise AI
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">Next-Gen SaaS Event & Fiscal Orchestrator</p>
          </div>
        </div>

        {/* Global Action Toolbar */}
        <div className="flex items-center space-x-3">
          <button
            onClick={handleReloadDemoData}
            className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 transition-all shadow-sm"
          >
            <Database className="w-3.5 h-3.5" />
            <span>Populate Mock Data</span>
          </button>

          <button
            onClick={() => {
              setEditingEvent(null);
              setIsEventModalOpen(true);
            }}
            className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Plus className="w-4 h-4" />
            <span>New Event</span>
          </button>

          {/* User Profile / Auth Toggle */}
          <div
            onClick={() => setIsAuthModalOpen(true)}
            className="flex items-center space-x-2.5 pl-3 border-l border-slate-800 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-indigo-400 group-hover:border-indigo-500 transition-colors">
              {currentUser.name.charAt(0)}
            </div>
            <div className="hidden md:block text-left">
              <div className="text-xs font-medium text-slate-200 group-hover:text-indigo-300 transition-colors">
                {currentUser.name}
              </div>
              <div className="text-[10px] text-slate-400">Enterprise Admin</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main App Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar Navigation */}
        <aside className="w-64 bg-[#0a0c13] border-r border-slate-800/80 p-4 hidden lg:flex flex-col justify-between shrink-0">
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === "dashboard"
                  ? "bg-indigo-600/15 text-indigo-400 border border-indigo-500/30 shadow-sm"
                  : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
              }`}
            >
              <TrendingUp className="w-4 h-4 text-indigo-400" />
              <span>Operations Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab("events")}
              className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === "events"
                  ? "bg-indigo-600/15 text-indigo-400 border border-indigo-500/30 shadow-sm"
                  : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
              }`}
            >
              <Calendar className="w-4 h-4 text-indigo-400" />
              <div className="flex-1 flex justify-between items-center">
                <span>Events Portfolio</span>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded-full text-slate-300 font-semibold">
                  {events.length}
                </span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("budget")}
              className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === "budget"
                  ? "bg-indigo-600/15 text-indigo-400 border border-indigo-500/30 shadow-sm"
                  : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
              }`}
            >
              <DollarSign className="w-4 h-4 text-indigo-400" />
              <div className="flex-1 flex justify-between items-center">
                <span>Budget & Ledger</span>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded-full text-slate-300 font-semibold">
                  {expenses.length}
                </span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("vendors")}
              className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === "vendors"
                  ? "bg-indigo-600/15 text-indigo-400 border border-indigo-500/30 shadow-sm"
                  : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
              }`}
            >
              <Building2 className="w-4 h-4 text-indigo-400" />
              <div className="flex-1 flex justify-between items-center">
                <span>Vendor Directory</span>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded-full text-slate-300 font-semibold">
                  {vendors.length}
                </span>
              </div>
            </button>

            <div className="pt-4 pb-1 px-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Intelligence</span>
            </div>

            <button
              onClick={() => setActiveTab("ai")}
              className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === "ai"
                  ? "bg-gradient-to-r from-indigo-900/40 to-violet-900/40 text-violet-300 border border-violet-500/30 shadow-sm"
                  : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
              }`}
            >
              <Bot className="w-4 h-4 text-violet-400" />
              <div className="flex-1 flex justify-between items-center">
                <span>AI Event Architect</span>
                <span className="text-[9px] bg-violet-500/20 text-violet-300 px-2 py-0.5 rounded-full border border-violet-500/30">
                  Gemini
                </span>
              </div>
            </button>
          </nav>

          {/* Quick System Diagnostics */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Fiscal Utilization</span>
              <span className={`font-semibold ${aggregateMetrics.utilizationRate > 90 ? "text-rose-400" : "text-emerald-400"}`}>
                {aggregateMetrics.utilizationRate.toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  aggregateMetrics.utilizationRate > 100
                    ? "bg-rose-500"
                    : aggregateMetrics.utilizationRate > 80
                    ? "bg-amber-400"
                    : "bg-indigo-500"
                }`}
                style={{ width: `${Math.min(aggregateMetrics.utilizationRate, 100)}%` }}
              />
            </div>
            <div className="pt-2 flex justify-between">
              <button
                onClick={handleClearData}
                className="text-[11px] text-rose-400/80 hover:text-rose-400 flex items-center space-x-1"
              >
                <Trash2 className="w-3 h-3" />
                <span>Wipe Workspace</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Dynamic Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8">
          {/* TAB 1: OPERATIONS DASHBOARD */}
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              {/* Top Banner KPI Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-gradient-to-b from-[#111422] to-[#0c0e18] border border-slate-800/80 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-all" />
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Total Planned Budget</div>
                  <div className="text-2xl font-bold text-white tracking-tight">{formatINR(aggregateMetrics.totalPlannedBudget)}</div>
                  <div className="mt-3 flex items-center space-x-2 text-xs text-indigo-400">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Allocated across {events.length} events</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-b from-[#111422] to-[#0c0e18] border border-slate-800/80 shadow-xl relative overflow-hidden group">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Incurred Expenses</div>
                  <div className="text-2xl font-bold text-white tracking-tight">{formatINR(aggregateMetrics.totalActualExpense)}</div>
                  <div className="mt-3 flex items-center space-x-2 text-xs text-amber-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{expenses.filter((e) => e.status === "Pending").length} invoices pending payment</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-b from-[#111422] to-[#0c0e18] border border-slate-800/80 shadow-xl relative overflow-hidden group">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Remaining Capital Reserve</div>
                  <div className={`text-2xl font-bold tracking-tight ${aggregateMetrics.remainingBalance < 0 ? "text-rose-400" : "text-emerald-400"}`}>
                    {formatINR(aggregateMetrics.remainingBalance)}
                  </div>
                  <div className="mt-3 flex items-center space-x-2 text-xs text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{aggregateMetrics.remainingBalance >= 0 ? "Solvent & on budget" : "Warning: Overallocated"}</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-b from-[#111422] to-[#0c0e18] border border-slate-800/80 shadow-xl relative overflow-hidden group">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Registered Delegates</div>
                  <div className="text-2xl font-bold text-white tracking-tight">{aggregateMetrics.totalGuests.toLocaleString("en-IN")}</div>
                  <div className="mt-3 flex items-center space-x-2 text-xs text-violet-400">
                    <Users className="w-3.5 h-3.5" />
                    <span>Across {aggregateMetrics.upcomingCount} active summits</span>
                  </div>
                </div>
              </div>

              {/* Upcoming Highlights & Active Summits */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold tracking-tight text-white flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-indigo-400" />
                      <span>Priority Event Pipeline</span>
                    </h2>
                    <button
                      onClick={() => setActiveTab("events")}
                      className="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center space-x-1"
                    >
                      <span>View All ({events.length})</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {events.slice(0, 4).map((evt) => {
                      const evtExpenses = expenses.filter((e) => e.eventId === evt.id);
                      const totalSpent = evtExpenses.reduce((a, b) => a + Number(b.amount || 0), 0);
                      const percent = evt.budget > 0 ? (totalSpent / evt.budget) * 100 : 0;
                      return (
                        <div
                          key={evt.id}
                          onClick={() => {
                            setSelectedEvent(evt);
                            setEventDetailTab("overview");
                          }}
                          className="p-5 rounded-2xl bg-[#0f121d] border border-slate-800/80 hover:border-indigo-500/50 hover:bg-[#121624] transition-all cursor-pointer shadow-lg group"
                        >
                          <div className="flex items-start justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                              {evt.category}
                            </span>
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                evt.status === "Upcoming"
                                  ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                                  : evt.status === "Completed"
                                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                  : "bg-slate-700 text-slate-300"
                              }`}
                            >
                              {evt.status}
                            </span>
                          </div>

                          <h3 className="mt-3 font-semibold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                            {evt.name}
                          </h3>
                          <p className="mt-1 text-xs text-slate-400 flex items-center space-x-1.5">
                            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="truncate">{evt.venue}</span>
                          </p>

                          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                            <div>
                              <span className="text-slate-400">Budget: </span>
                              <span className="font-semibold text-slate-200">{formatINR(evt.budget)}</span>
                            </div>
                            <div className="text-right">
                              <span className="text-slate-400">Utilized: </span>
                              <span className={`font-semibold ${percent > 100 ? "text-rose-400" : "text-slate-200"}`}>
                                {percent.toFixed(0)}%
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* AI Executive Assistant Widget */}
                <div className="p-6 rounded-2xl bg-gradient-to-b from-[#131728] to-[#0c0e17] border border-indigo-500/30 shadow-2xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-violet-400 mb-2">
                      <Sparkles className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase tracking-wider">Aura AI Architect</span>
                    </div>
                    <h3 className="text-base font-bold text-white">Automate Next Event Blueprint</h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Instant synthesis of multi-track schedules, Indian Rupee vendor budget allocations, and execution checklists using Gemini intelligence.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div
                        onClick={() => {
                          setActiveTab("ai");
                          generateAIEventPlan("Tech Founder Demo Day in Bengaluru for 250 attendees with ₹12 Lakh budget");
                        }}
                        className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 text-xs text-slate-300 cursor-pointer flex items-center justify-between group transition-all"
                      >
                        <span>"Tech Founder Demo Day in Bengaluru (₹12L)"</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-400" />
                      </div>
                      <div
                        onClick={() => {
                          setActiveTab("ai");
                          generateAIEventPlan("Heritage Royal Sangeet night in Jaipur for 350 pax with ₹30 Lakh budget");
                        }}
                        className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 text-xs text-slate-300 cursor-pointer flex items-center justify-between group transition-all"
                      >
                        <span>"Heritage Royal Sangeet in Jaipur (₹30L)"</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-400" />
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveTab("ai")}
                    className="mt-6 w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-xs font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center space-x-2"
                  >
                    <Bot className="w-4 h-4" />
                    <span>Launch AI Co-Pilot</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: EVENTS PORTFOLIO */}
          {activeTab === "events" && (
            <div className="space-y-6">
              {/* Header and Filter Controls */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl font-bold tracking-tight text-white">Events Portfolio</h1>
                  <p className="text-xs text-slate-400 mt-1">Manage corporate summits, luxury weddings, and hackathons.</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleReloadDemoData}
                    className="px-3 py-2 text-xs font-medium rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center space-x-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Reload Demo Data</span>
                  </button>
                  <button
                    onClick={() => {
                      setEditingEvent(null);
                      setIsEventModalOpen(true);
                    }}
                    className="px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white flex items-center space-x-2 shadow-lg shadow-indigo-600/30"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create Event</span>
                  </button>
                </div>
              </div>

              {/* Search & Filter Bar */}
              <div className="p-4 rounded-2xl bg-[#0d0f17] border border-slate-800/80 flex flex-wrap items-center gap-3">
                <div className="relative flex-1 min-w-[240px]">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by event title, venue, or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="bg-slate-900 border border-slate-700/80 text-xs text-slate-300 rounded-xl px-3 py-2 focus:outline-none focus:border-indigo-500"
                  >
                    <option value="All">All Categories</option>
                    <option value="Corporate Conference">Corporate Conference</option>
                    <option value="Luxury Wedding">Luxury Wedding</option>
                    <option value="Hackathon">Hackathon</option>
                    <option value="Product Launch">Product Launch</option>
                  </select>

                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="bg-slate-900 border border-slate-700/80 text-xs text-slate-300 rounded-xl px-3 py-2 focus:outline-none focus:border-indigo-500"
                  >
                    <option value="All">All Statuses</option>
                    <option value="Upcoming">Upcoming</option>
                    <option value="Draft">Draft</option>
                    <option value="Completed">Completed</option>
                  </select>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-slate-900 border border-slate-700/80 text-xs text-slate-300 rounded-xl px-3 py-2 focus:outline-none focus:border-indigo-500"
                  >
                    <option value="date-asc">Date: Earliest First</option>
                    <option value="date-desc">Date: Latest First</option>
                    <option value="budget-desc">Budget: Highest First</option>
                  </select>
                </div>
              </div>

              {/* Event Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredEvents.map((evt) => {
                  const evtExpenses = expenses.filter((e) => e.eventId === evt.id);
                  const totalSpent = evtExpenses.reduce((a, b) => a + Number(b.amount || 0), 0);
                  const percent = evt.budget > 0 ? (totalSpent / evt.budget) * 100 : 0;
                  return (
                    <div
                      key={evt.id}
                      className="p-5 rounded-2xl bg-[#0f121d] border border-slate-800/80 hover:border-slate-700 transition-all shadow-xl flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-800/80 text-indigo-300 border border-slate-700">
                            {evt.category}
                          </span>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              evt.status === "Upcoming"
                                ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                                : evt.status === "Completed"
                                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                : "bg-slate-700 text-slate-300"
                            }`}
                          >
                            {evt.status}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-white hover:text-indigo-300 transition-colors cursor-pointer" onClick={() => { setSelectedEvent(evt); setEventDetailTab("overview"); }}>
                          {evt.name}
                        </h3>
                        <p className="text-xs text-slate-400 mt-2 line-clamp-2">{evt.description}</p>

                        <div className="mt-4 space-y-2 text-xs text-slate-300">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>{evt.date} • {evt.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            <span className="truncate">{evt.venue}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-3.5 h-3.5 text-slate-400" />
                            <span>{evt.expectedPax} Expected Delegates</span>
                          </div>
                        </div>

                        {/* Budget Bar */}
                        <div className="mt-4 pt-3 border-t border-slate-800/80">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-400">Budget Outlay</span>
                            <span className="font-semibold text-slate-200">{formatINR(totalSpent)} / {formatINR(evt.budget)}</span>
                          </div>
                          <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                            <div
                              className={`h-full rounded-full ${percent > 100 ? "bg-rose-500" : percent > 80 ? "bg-amber-400" : "bg-indigo-500"}`}
                              style={{ width: `${Math.min(percent, 100)}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                        <button
                          onClick={() => {
                            setSelectedEvent(evt);
                            setEventDetailTab("overview");
                          }}
                          className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center space-x-1"
                        >
                          <span>Open Workspace</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                        <div className="flex items-center space-x-1">
                          <button
                            onClick={() => exportEventCSV(evt)}
                            title="Export Brief (.csv)"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              setEditingEvent(evt);
                              setIsEventModalOpen(true);
                            }}
                            title="Edit Event"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-300 hover:bg-slate-800"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Delete ${evt.name}?`)) {
                                setEvents((prev) => prev.filter((e) => e.id !== evt.id));
                              }
                            }}
                            title="Delete Event"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: BUDGET & LEDGER */}
          {activeTab === "budget" && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl font-bold tracking-tight text-white">Fiscal Budget & Ledger</h1>
                  <p className="text-xs text-slate-400 mt-1">Live itemized expenses, invoices, and INR disbursement records.</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setIsExpenseModalOpen(true)}
                    className="px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white flex items-center space-x-2 shadow-lg shadow-indigo-600/30"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Expense Line</span>
                  </button>
                </div>
              </div>

              {/* Ledger Table */}
              <div className="rounded-2xl bg-[#0f121d] border border-slate-800/80 overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#0a0c13] text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
                      <tr>
                        <th className="py-3.5 px-4">Expense Description</th>
                        <th className="py-3.5 px-4">Associated Event</th>
                        <th className="py-3.5 px-4">Category</th>
                        <th className="py-3.5 px-4">Vendor Partner</th>
                        <th className="py-3.5 px-4">Invoice #</th>
                        <th className="py-3.5 px-4 text-right">Amount (INR)</th>
                        <th className="py-3.5 px-4">Status</th>
                        <th className="py-3.5 px-4 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      {expenses.map((exp) => {
                        const eventObj = events.find((e) => e.id === exp.eventId);
                        return (
                          <tr key={exp.id} className="hover:bg-slate-800/30 transition-colors">
                            <td className="py-3.5 px-4 font-medium text-white">{exp.description}</td>
                            <td className="py-3.5 px-4 text-slate-400">{eventObj?.name || "General"}</td>
                            <td className="py-3.5 px-4">
                              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">
                                {exp.category}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-slate-400">{exp.vendor || "N/A"}</td>
                            <td className="py-3.5 px-4 text-slate-400 font-mono text-[11px]">{exp.invoiceNo || "—"}</td>
                            <td className="py-3.5 px-4 text-right font-semibold text-white">{formatINR(exp.amount)}</td>
                            <td className="py-3.5 px-4">
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  exp.status === "Paid"
                                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                    : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                                }`}
                              >
                                {exp.status}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-center">
                              <button
                                onClick={() => {
                                  if (window.confirm(`Delete expense line "${exp.description}"?`)) {
                                    setExpenses((prev) => prev.filter((e) => e.id !== exp.id));
                                  }
                                }}
                                className="text-slate-400 hover:text-rose-400 p-1"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: VENDOR DIRECTORY */}
          {activeTab === "vendors" && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl font-bold tracking-tight text-white">Vendor & Partner Directory</h1>
                  <p className="text-xs text-slate-400 mt-1">Verified audio/visual, hospitality, venue, and production contractors.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {vendors.map((v) => (
                  <div key={v.id} className="p-5 rounded-2xl bg-[#0f121d] border border-slate-800/80 shadow-xl space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-indigo-300">
                        {v.category}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        {v.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white">{v.name}</h3>
                      <p className="text-xs text-slate-400 mt-1 flex items-center space-x-1.5">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>POC: {v.contactPerson}</span>
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        <span>{v.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        <span>{v.email}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Standard Contract:</span>
                      <span className="font-semibold text-white">{formatINR(v.quote)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: AI ARCHITECT */}
          {activeTab === "ai" && (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h1 className="text-xl font-bold tracking-tight text-white flex items-center space-x-2">
                  <Bot className="w-6 h-6 text-violet-400" />
                  <span>Aura AI Event Architect</span>
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  Synthesize complete production timelines, INR budget distribution, and task checklists directly from a natural language prompt.
                </p>
              </div>

              {/* Prompt Box */}
              <div className="p-6 rounded-2xl bg-[#0f121d] border border-violet-500/30 shadow-2xl space-y-4">
                <textarea
                  rows={4}
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="Describe your event parameters: (e.g., 'Organize a 2-day AI Healthcare Summit at BKC Mumbai for 500 delegates with a ₹25,00,000 budget, including run of show and AV requirements...')"
                  className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                />

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setAiPrompt("Annual Fintech Innovation Gala at St. Regis Mumbai for 300 delegates with ₹20 Lakh budget")}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                    >
                      💡 Fintech Gala (₹20L)
                    </button>
                    <button
                      onClick={() => setAiPrompt("36-hour National Cyber-Security Hackathon at IIT Bombay for 400 students with ₹9 Lakh budget")}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                    >
                      💡 Cyber Hackathon (₹9L)
                    </button>
                  </div>

                  <button
                    disabled={isGeneratingAi || !aiPrompt.trim()}
                    onClick={() => generateAIEventPlan()}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-xs font-semibold text-white shadow-lg shadow-violet-600/30 flex items-center space-x-2 disabled:opacity-50"
                  >
                    {isGeneratingAi ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Synthesizing Architecture...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Generate Event Plan</span>
                      </>
                    )}
                  </button>
                </div>

                {aiError && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{aiError}</span>
                  </div>
                )}
              </div>

              {/* Generated Plan Preview & Direct Import */}
              {aiGeneratedPlan && (
                <div className="p-6 rounded-2xl bg-gradient-to-b from-[#111425] to-[#0c0e18] border border-violet-500/40 shadow-2xl space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                        {aiGeneratedPlan.category}
                      </span>
                      <h2 className="text-xl font-bold text-white mt-2">{aiGeneratedPlan.name}</h2>
                      <p className="text-xs text-slate-400 mt-1">
                        {aiGeneratedPlan.venue} • {aiGeneratedPlan.expectedPax} Pax • Budget: {formatINR(aiGeneratedPlan.budget)}
                      </p>
                    </div>

                    <button
                      onClick={importAiPlanToWorkspace}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white shadow-lg shadow-emerald-600/30 flex items-center space-x-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Import into Active Workspace</span>
                    </button>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{aiGeneratedPlan.description}</p>

                  {/* Run of Show Grid */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Proposed Run of Show</h3>
                    <div className="space-y-2">
                      {aiGeneratedPlan.runOfShow?.map((cue, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs flex justify-between items-center">
                          <span className="font-semibold text-indigo-400 w-24">{cue.time}</span>
                          <span className="flex-1 text-slate-200">{cue.cue}</span>
                          <span className="text-slate-400 text-[11px]">{cue.owner}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suggested Expenses */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Budget Allocations</h3>
                    <div className="space-y-2">
                      {aiGeneratedPlan.expenses?.map((exp, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs flex justify-between items-center">
                          <span className="text-white font-medium">{exp.description}</span>
                          <span className="text-slate-400">{exp.category}</span>
                          <span className="font-semibold text-emerald-400">{formatINR(exp.amount)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* EVENT WORKSPACE MODAL */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-4xl max-h-[90vh] bg-[#0c0e18] border border-slate-800 rounded-3xl overflow-hidden flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800/80 flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {selectedEvent.category}
                </span>
                <h2 className="text-xl font-bold text-white mt-2">{selectedEvent.name}</h2>
                <p className="text-xs text-slate-400 mt-1 flex items-center space-x-3">
                  <span>{selectedEvent.date}</span>
                  <span>•</span>
                  <span>{selectedEvent.venue}</span>
                  <span>•</span>
                  <span>Budget: {formatINR(selectedEvent.budget)}</span>
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => exportEventCSV(selectedEvent)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 flex items-center space-x-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export Brief</span>
                </button>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Sub-nav Tabs */}
            <div className="px-6 border-b border-slate-800 flex space-x-4">
              {["overview", "runOfShow", "tasks", "rsvps", "invoices"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setEventDetailTab(tab)}
                  className={`py-3 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all ${
                    eventDetailTab === tab
                      ? "border-indigo-500 text-indigo-400"
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {tab === "runOfShow" ? "Run of Show" : tab}
                </button>
              ))}
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1 space-y-4">
              {eventDetailTab === "overview" && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Executive Scope</h4>
                    <p className="text-xs text-slate-200 mt-2 leading-relaxed">{selectedEvent.description}</p>
                  </div>
                </div>
              )}

              {eventDetailTab === "runOfShow" && (
                <div className="space-y-2">
                  {selectedEvent.runOfShow?.map((cue, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs flex justify-between items-center">
                      <span className="font-bold text-indigo-400 w-24">{cue.time}</span>
                      <span className="flex-1 text-slate-200">{cue.cue}</span>
                      <span className="text-slate-400 text-[11px] bg-slate-800 px-2 py-0.5 rounded">{cue.owner}</span>
                    </div>
                  ))}
                </div>
              )}

              {eventDetailTab === "tasks" && (
                <div className="space-y-2">
                  {selectedEvent.tasks?.map((task) => (
                    <div
                      key={task.id}
                      onClick={() => {
                        setEvents((prev) =>
                          prev.map((evt) =>
                            evt.id === selectedEvent.id
                              ? {
                                  ...evt,
                                  tasks: evt.tasks.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t))
                                }
                              : evt
                          )
                        );
                        setSelectedEvent((prev) => ({
                          ...prev,
                          tasks: prev.tasks.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t))
                        }));
                      }}
                      className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs flex items-center justify-between cursor-pointer hover:bg-slate-800/50"
                    >
                      <div className="flex items-center space-x-3">
                        {task.completed ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-500" />
                        )}
                        <span className={task.completed ? "line-through text-slate-500" : "text-slate-200"}>
                          {task.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-indigo-300">
                        {task.priority} Priority
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {eventDetailTab === "rsvps" && (
                <div className="space-y-2">
                  {selectedEvent.rsvps?.map((guest, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs flex justify-between items-center">
                      <div>
                        <div className="font-bold text-white">{guest.name}</div>
                        <div className="text-[11px] text-slate-400">{guest.email}</div>
                      </div>
                      <span className="text-slate-300 bg-slate-800 px-2 py-1 rounded text-[11px]">Seat: {guest.seat}</span>
                    </div>
                  ))}
                </div>
              )}

              {eventDetailTab === "invoices" && (
                <div className="space-y-2">
                  {expenses.filter((e) => e.eventId === selectedEvent.id).map((exp) => (
                    <div key={exp.id} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs flex justify-between items-center">
                      <div>
                        <div className="font-bold text-white">{exp.description}</div>
                        <div className="text-[11px] text-slate-400">{exp.vendor} • {exp.invoiceNo}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-emerald-400">{formatINR(exp.amount)}</div>
                        <span className="text-[10px] text-slate-400">{exp.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CREATE / EDIT EVENT MODAL */}
      {isEventModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-[#0c0e18] border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <h3 className="text-base font-bold text-white">{editingEvent ? "Edit Event" : "Create New Event"}</h3>
              <button onClick={() => setIsEventModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const newEvt = {
                  id: editingEvent ? editingEvent.id : `evt-${Date.now()}`,
                  name: formData.get("name"),
                  category: formData.get("category"),
                  date: formData.get("date"),
                  time: formData.get("time") || "10:00 AM",
                  venue: formData.get("venue"),
                  expectedPax: Number(formData.get("expectedPax")) || 100,
                  budget: Number(formData.get("budget")) || 500000,
                  status: formData.get("status") || "Upcoming",
                  description: formData.get("description") || "",
                  runOfShow: editingEvent ? editingEvent.runOfShow : [],
                  tasks: editingEvent ? editingEvent.tasks : [],
                  rsvps: editingEvent ? editingEvent.rsvps : []
                };
                if (editingEvent) {
                  setEvents((prev) => prev.map((item) => (item.id === editingEvent.id ? newEvt : item)));
                } else {
                  setEvents((prev) => [newEvt, ...prev]);
                }
                setIsEventModalOpen(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block text-slate-400 mb-1">Event Name</label>
                <input
                  name="name"
                  required
                  defaultValue={editingEvent?.name}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Category</label>
                  <select name="category" defaultValue={editingEvent?.category || "Corporate Conference"} className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white">
                    <option value="Corporate Conference">Corporate Conference</option>
                    <option value="Luxury Wedding">Luxury Wedding</option>
                    <option value="Hackathon">Hackathon</option>
                    <option value="Product Launch">Product Launch</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Status</label>
                  <select name="status" defaultValue={editingEvent?.status || "Upcoming"} className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white">
                    <option value="Upcoming">Upcoming</option>
                    <option value="Draft">Draft</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Date</label>
                  <input type="date" name="date" required defaultValue={editingEvent?.date || "2026-11-20"} className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white" />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Budget (INR ₹)</label>
                  <input type="number" name="budget" required defaultValue={editingEvent?.budget || 1000000} className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white" />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Venue Location</label>
                <input name="venue" required defaultValue={editingEvent?.venue || "BKC, Mumbai"} className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white" />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Scope Description</label>
                <textarea name="description" rows={2} defaultValue={editingEvent?.description} className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white resize-none" />
              </div>
              <div className="pt-2 flex justify-end space-x-2">
                <button type="button" onClick={() => setIsEventModalOpen(false)} className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-white">
                  {editingEvent ? "Save Changes" : "Create Event"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ADD EXPENSE MODAL */}
      {isExpenseModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#0c0e18] border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <h3 className="text-base font-bold text-white">Add Expense Line Item</h3>
              <button onClick={() => setIsExpenseModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const newExp = {
                  id: `exp-${Date.now()}`,
                  eventId: formData.get("eventId"),
                  description: formData.get("description"),
                  category: formData.get("category"),
                  amount: Number(formData.get("amount")),
                  vendor: formData.get("vendor"),
                  invoiceNo: formData.get("invoiceNo"),
                  status: formData.get("status")
                };
                setExpenses((prev) => [newExp, ...prev]);
                setIsExpenseModalOpen(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block text-slate-400 mb-1">Associate Event</label>
                <select name="eventId" required className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white">
                  {events.map((e) => (
                    <option key={e.id} value={e.id}>{e.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Expense Description</label>
                <input name="description" required placeholder="e.g. 50% Catering Deposit" className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Category</label>
                  <select name="category" className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white">
                    <option value="Venue & Catering">Venue & Catering</option>
                    <option value="AV & Tech">AV & Tech</option>
                    <option value="Decor & Staging">Decor & Staging</option>
                    <option value="Marketing & Badges">Marketing & Badges</option>
                    <option value="Logistics">Logistics</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Amount (INR ₹)</label>
                  <input type="number" name="amount" required placeholder="50000" className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Vendor Name</label>
                  <input name="vendor" placeholder="e.g. Grand Hyatt" className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white" />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Status</label>
                  <select name="status" className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white">
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Invoice Number</label>
                <input name="invoiceNo" placeholder="INV-2026-001" className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white" />
              </div>
              <div className="pt-2 flex justify-end space-x-2">
                <button type="button" onClick={() => setIsExpenseModalOpen(false)} className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-white">
                  Add Expense
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* AUTHENTICATION MODAL */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-[#0c0e18] border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <h3 className="text-base font-bold text-white">
                {authMode === "login" ? "Account Sign In" : "Register Workspace"}
              </h3>
              <button onClick={() => setIsAuthModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setCurrentUser({
                  name: authName || "Mrunal Pimpale",
                  email: authEmail || "mrunalpimpale@gmail.com",
                  role: "Lead Event Architect",
                  isEnterprise: true
                });
                setIsAuthModalOpen(false);
              }}
              className="space-y-3 text-xs"
            >
              {authMode === "register" && (
                <div>
                  <label className="block text-slate-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={authName}
                    onChange={(e) => setAuthName(e.target.value)}
                    placeholder="Mrunal Pimpale"
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                  />
                </div>
              )}
              <div>
                <label className="block text-slate-400 mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  placeholder="mrunalpimpale@gmail.com"
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Password</label>
                <input
                  type="password"
                  required
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all"
              >
                {authMode === "login" ? "Sign In to Workspace" : "Create Enterprise Account"}
              </button>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => setAuthMode(authMode === "login" ? "register" : "login")}
                  className="text-indigo-400 hover:underline"
                >
                  {authMode === "login" ? "Don't have an account? Sign up" : "Already registered? Sign in"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
