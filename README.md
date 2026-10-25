<div align="center">

# ✦ AuraEvents Enterprise AI ✦
### Autonomous Event Planning & Fiscal Orchestration Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Gemini AI](https://img.shields.io/badge/Google_Gemini-2.5_Flash-8E75C4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Vercel Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
  A high-performance SaaS platform built for event managers, producers, and enterprise organizers. Features live Indian Rupee (INR ₹) budget ledgers, run-of-show scheduling, RSVP guest tracking, verified vendor networks, and 1-click autonomous event synthesis powered by Google Gemini.
</p>

[Explore Demo](#-quick-start) • [Features](#-features) • [Deployment](#-one-click-deployment) • [Architecture](#-tech-stack)

</div>


---

## 🚀 Live Demo & Links

🌐 **[Open AuraEvents Live Demo](https://aura-events-enterprise.vercel.app)** *(Deploy link)*

💻 **[View Source Code](https://github.com/Mrunal-dev05/aura-events-enterprise)**

---

## 🎯 The Problem

Large-scale event operations (conferences, hackathons, galas, luxury weddings) suffer from disjointed workflows:

- Fragmented budgets across manual Excel sheets
- Uncoordinated minute-by-minute run-of-show schedules
- Untracked vendor contract states and invoice overruns
- Manual milestone tracking with no centralized accountability
- Lack of intelligent, instant initial event architectural blueprints

### 💡 The Solution

AuraEvents establishes an end-to-end execution pipeline:

**Synthesize → Schedule → Allocate → Audit → Reconcile**

Instead of static checklists, the system dynamically calculates fiscal utilization, tracks milestone priorities, logs itemized vendor liabilities in Indian Rupees (₹), and integrates directly with Gemini AI to generate production-ready event frameworks in seconds.

---

## ✨ Key Features

### 📌 Full Event Lifecycle Management
- **Structured Onboarding**: Event category, pax capacity, multi-location tags, and baseline capital ceiling.
- **Run-of-Show Engine**: Minute-by-minute cue scheduling with assigned operational leads (Audio/Visual, PR, Hospitality).
- **Prioritized Milestones**: Critical-path task checklists (`High`, `Medium`, `Low`) with live completion tracking.
- **RSVP & Seating Matrix**: Attendee role allocations, delegate badges, and VIP table assignments.
- **Brief Exporting**: One-click formatted `.csv` brief generation for offline stakeholder review.

### 💰 Real-Time Fiscal Ledger (INR ₹)
The fiscal engine performs real-time arithmetic calculations with no hardcoded stats:

| Fiscal Metric | Formula / Logic |
|---|---|
| **Planned Capital** | Sum of all event target budgets |
| **Incurred Liabilities** | Dynamic sum of all itemized invoices |
| **Reserve Margin** | $\text{Planned Capital} - \text{Incurred Outlay}$ |
| **Utilization Rate** | $(\text{Total Spent} / \text{Total Budget}) \times 100$ |

- **Threshold Alerts**: Visual alerts when spending crosses 80% and over-budget triggers if utilization exceeds 100%.
- **Currency Compliance**: Formatted using the Indian Numbering System (`Intl.NumberFormat('en-IN')`).
- **Payment Lifecycle**: Multi-state tracking (`Paid`, `Pending`, `Overdue`).

### 🤖 Gemini AI Event Architect
- Direct integration with **Google Gemini 2.5 Flash**.
- Natural language parameter synthesis (Pax, location, budget ceiling, theme).
- Generates complete JSON blueprints containing event scope, run-of-show cues, and realistic line-item budget allocations.
- **1-Click Workspace Import**: Converts generated AI schemas directly into active operational records without manual re-entry.

### 🏢 Vendor & Partner Directory
- Centralized tracking of production, AV, venue, catering, and PR contractors.
- Real-time contact directories, contract statuses (`Signed`, `In Discussion`, `Shortlisted`), and standardized base quotations.

---

## 🔄 Core Platform Workflow

```text
         Event Concept / Client Brief
                      │
        ┌─────────────┴─────────────┐
        │                           │
  Manual Entry               Gemini AI Architect
        │                           │
        └─────────────┬─────────────┘
                      ↓
           Active Event Workspace
                      │
        ┌─────────────┼─────────────┐
        │             │             │
   Run-of-Show    Milestones    RSVP List
  (Minute Cues)   (Priority)    (Delegates)
        │             │             │
        └─────────────┼─────────────┘
                      ↓
            Fiscal Budget Engine
          (Invoices & Disbursements)
                      │
        ┌─────────────┴─────────────┐
        │                           │
   Within Budget              Over-Budget
   (Normal Flow)            (Warning Alert)
        │                           │
        └─────────────┬─────────────┘
                      ↓
               Event Execution
                      ↓
              Final Reconciliation
---

## 🏗️ Architecture

```text
                            AuraEvents Platform
                                      │
              ┌───────────────────────┴───────────────────────┐
              │                                               │
       Frontend Core (SaaS)                          Intelligence Layer
              │                                               │
      ┌───────┼───────┐                                       │
      │       │       │                                       ↓
  Dashboard Events  Ledger                             Gemini 2.5 Flash
      │       │       │                                       │
      └───────┼───────┘                                       │
              │                                               │
              ↓                                               │
    Persistence & State Engine                                │
  (localStorage / React 19 Context) ←── 1-Click Import Schema ┘

The system is architected as an ultra-responsive single-page dashboard with zero heavy external UI dependencies, maximizing rendering performance and build speeds.
---

## 📁 Project Structure

aura-events-enterprise/
│
├── app/
│   ├── globals.css         # Global dark slate theme & Tailwind utilities
│   ├── layout.jsx          # Root HTML/Body shell & metadata config
│   └── page.jsx            # Core SaaS platform, state engine & AI architect
│
├── public/                 # Static brand assets and icons
├── tailwind.config.js      # Custom theme color extensions & plugins
├── postcss.config.js       # PostCSS processor configuration
├── package.json            # Next.js 16.4.3, React 19, Lucide dependencies
├── .gitignore              # Node & build artifact exclusion
└── README.md



---

## 🛠️ Built With

**Next.js 16.4.3 (Turbopack) · React 19 · Tailwind CSS · Lucide React · Google Gemini API**

### Technology Roles

| Technology | Purpose |
|---|---|
| **Next.js 16.4.3** | Turbopack compilation, modern App Router architecture |
| **React 19** | Client-side reactive state management and modal workflows |
| **Tailwind CSS** | Dark-slate `#07080c` editorial design system |
| **Google Gemini API** | Autonomous structured blueprint & run-of-show synthesis |
| **Lucide Icons** | Accessible, consistent interface iconography |

---
## ⚙️ Run Locally

### Prerequisites

- **Node.js 18+** or **Node.js 20+**
- Git

### 1. Clone the Repository

```bash
git clone [https://github.com/Mrunal-dev05/aura-events-enterprise.git](https://github.com/Mrunal-dev05/aura-events-enterprise.git)
cd aura-events-enterprise

###2. Install Dependencies

```bash
npm install

###3. Run Development Server
```bash
npm run dev
Open http://localhost:3000 in your browser.

---

## 📊 Product Highlights

```text
                   AuraEvents
                        │
        ┌───────────────┼───────────────┐
        │               │               │
    Blueprint       Schedule         Audit
        │               │               │
        ↓               ↓               ↓
    Gemini AI      Run-of-Show     INR Ledger
        │               │               │
        └───────────────┼───────────────┘
                        ↓
                 Execution Ready
                        ↓
                 Solvent & Closed
###AuraEvents solves one clear objective: eliminate fiscal ambiguity and scheduling chaos in enterprise event operations.
---
## 🎓 Academic & Engineering Value

AuraEvents demonstrates how modern full-stack development, strict fiscal calculation algorithms, and generative AI can converge into a production-grade software product:

- **State Synchronization**: Immediate cross-component updates between budgets, events, and metrics.
- **Enterprise UI/UX**: Elimination of generic AI aesthetics in favor of a dark-slate, high-density editorial interface.
- **API Guardrails & Graceful Degradation**: Dual-mode Gemini architecture that falls back to structured simulations when offline.
- **Data Persistence**: Resilient local-state synchronization across browser reloads.

---
## 🔮 Future Improvements

- 🗄️ Multi-tenant PostgreSQL / Supabase remote persistence
- 🔐 NextAuth / Clerk
- 💳 Razorpay / Stripe automated payment gateway reconciliation
-📱 WhatsApp Business API automated attendee RSVP confirmations
-📄 Direct PDF contract parsing for instant invoice population
###Built an Enterprise SaaS Event Planner and Fiscal Orchestrator using Next.js 16, React 19, and Gemini 2.5 Flash, featuring dynamic INR budget tracking, run-of-show scheduling, and verified vendor directories.

---
## 👨‍💻 Developer

**Mrunal Pimpale**  
Computer Engineering Student | Full-Stack & Systems Development

🔗 **GitHub:** [@Mrunal-dev05](https://github.com/Mrunal-dev05)

---
## 📄 License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

This project is developed for **academic learning, portfolio development, and demonstration purposes**.
