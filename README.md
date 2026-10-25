 <div align="center">

# ✦ AuraEvents Enterprise AI ✦

### Autonomous Event Planning & Fiscal Orchestration Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Gemini AI](https://img.shields.io/badge/Google_Gemini-2.5_Flash-8E75C4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Vercel Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A high-performance SaaS platform built for event managers, producers, and enterprise organizers. Features Indian Rupee (INR ₹) budget ledgers, run-of-show scheduling, RSVP guest tracking, vendor management, and AI-assisted event planning powered by Google Gemini.

[**Live Demo**](https://aura-events-enterprise.vercel.app) • [**Source Code**](https://github.com/Mrunal-dev05/aura-events-enterprise)

</div>

---

## 🚀 Live Demo & Links

- 🌐 **Live Demo:** [AuraEvents Enterprise AI](https://aura-events-enterprise.vercel.app)
- 💻 **Source Code:** [GitHub Repository](https://github.com/Mrunal-dev05/aura-events-enterprise)

---

## 🎯 The Problem

Large-scale event operations, including conferences, hackathons, galas, and weddings, often suffer from disconnected workflows:

- Fragmented budgets maintained in manual spreadsheets.
- Uncoordinated, minute-by-minute event schedules.
- Untracked vendor contracts, invoices, and expenses.
- Manual milestone tracking without centralized accountability.
- Time-consuming preparation of initial event plans.

### 💡 The Solution

AuraEvents brings event planning and operational tracking together in one platform.

**Synthesize → Schedule → Allocate → Audit → Reconcile**

The platform is designed to help organizers manage event budgets, track milestones, organize vendor information, coordinate schedules, and generate event-planning blueprints using Google Gemini.

---

## ✨ Key Features

### 📌 Full Event Lifecycle Management

- **Structured Onboarding:** Configure event categories, guest capacity, locations, and budget limits.
- **Run-of-Show Scheduling:** Organize event activities and operational responsibilities.
- **Prioritized Milestones:** Track tasks using High, Medium, and Low priority levels.
- **RSVP & Seating Management:** Organize attendee roles, guest lists, and VIP seating.
- **Brief Exporting:** Export event information as CSV for offline review.

### 💰 Fiscal Ledger (INR ₹)

The fiscal dashboard is designed to track event budgets and expenses dynamically.

| Fiscal Metric | Formula / Logic |
|---|---|
| **Planned Capital** | Sum of planned event budgets |
| **Incurred Liabilities** | Sum of recorded expenses and invoices |
| **Reserve Margin** | Planned Capital − Incurred Outlay |
| **Utilization Rate** | (Total Spent / Total Budget) × 100 |

Additional capabilities:

- **Budget Threshold Alerts:** Highlight spending above 80% and budgets exceeding 100%, where implemented.
- **Currency Formatting:** Use the Indian numbering system through `Intl.NumberFormat('en-IN')`.
- **Payment Lifecycle:** Track payment states such as Paid, Pending, and Overdue.

### 🤖 Gemini AI Event Architect

- Integration with the Google Gemini API for AI-assisted event planning.
- Natural-language inputs for guest capacity, location, budget, and theme.
- Generation of structured event-planning blueprints, schedules, and budget allocations.
- A workflow for importing generated plans into the event workspace, where implemented.

### 🏢 Vendor & Partner Directory

- Organize vendor information for production, audiovisual services, venues, catering, and PR.
- Track contact information and contract statuses.
- Record vendor quotations and related event expenses.

---

## 🔄 Core Platform Workflow

```text
                 Event Concept / Client Brief
                             |
             +---------------+---------------+
             |                               |
        Manual Entry                  Gemini AI Architect
             |                               |
             +---------------+---------------+
                             |
                  Active Event Workspace
                             |
             +---------------+---------------+
             |               |               |
        Run-of-Show       Milestones       RSVP List
        Scheduling        Task Tracking    Guest Records
             |               |               |
             +---------------+---------------+
                             |
                    Fiscal Budget Ledger
                  Expenses & Invoices
                             |
             +---------------+---------------+
             |                               |
       Within Budget                   Over Budget
       Normal Tracking                Warning / Review
             |                               |
             +---------------+---------------+
                             |
                      Event Execution
                             |
                    Final Reconciliation
```

---

## 🏗️ Architecture

```text
                  AuraEvents Platform
                          |
            +-------------+-------------+
            |                           |
       Frontend Core              AI Integration
            |                           |
     +------+------+                     |
     |      |      |                     |
 Dashboard Events Ledger            Gemini API
     |      |      |                     |
     +------+------+                     |
            |                           |
       Application State <---------------+
            |
      Event Data & Metrics
```

The platform uses a dashboard-oriented interface for managing event information. Its frontend, state-management approach, persistence mechanism, and AI integration depend on the implementation in the repository.

---

## 📁 Project Structure

```text
aura-events-enterprise/
│
├── app/
│   ├── globals.css        # Global styles and Tailwind utilities
│   ├── layout.jsx         # Root layout and page metadata
│   └── page.jsx           # Main application interface
│
├── public/                # Static assets and icons
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── package.json           # Dependencies and scripts
├── .gitignore             # Files excluded from Git
└── README.md              # Project documentation
```

---

## 🛠️ Built With

**Next.js · React · Tailwind CSS · Lucide React · Google Gemini API**

### Technology Roles

| Technology | Purpose |
|---|---|
| **Next.js** | Application framework and routing |
| **React** | Component-based user interface |
| **Tailwind CSS** | Utility-first styling |
| **Google Gemini API** | AI-assisted event-planning capabilities |
| **Lucide React** | Interface icons |

---

## ⚙️ Run Locally

### Prerequisites

- Node.js compatible with the version required by the project.
- npm.
- Git.

### 1. Clone the Repository

```bash
git clone https://github.com/Mrunal-dev05/aura-events-enterprise.git
cd aura-events-enterprise
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

If the application uses the Gemini API, create a `.env.local` file in the project root and add the API key variable expected by the application.

For example:

```env
GEMINI_API_KEY=your_api_key_here
```

Use the exact environment-variable name referenced in the project's source code. Never commit real API keys or other secrets to GitHub.

### 4. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📊 Product Highlights

```text
                     AuraEvents
                          |
             +------------+------------+
             |            |            |
         Blueprint     Schedule       Audit
             |            |            |
          Gemini AI   Run-of-Show   INR Ledger
             |            |            |
             +------------+------------+
                          |
                  Event Coordination
                          |
                   Final Reconciliation
```

AuraEvents aims to help event organizers manage planning, scheduling, and budget tracking from a centralized workspace.

---

## 🎓 Academic & Engineering Value

AuraEvents demonstrates concepts relevant to modern full-stack development and AI-assisted application design:

- **State Management:** Keeping related interface components synchronized.
- **Dashboard UI/UX:** Organizing event information in a structured interface.
- **API Integration:** Connecting an application to an AI service.
- **Data Persistence:** Managing application data according to the implemented storage approach.
- **Fiscal Calculations:** Applying arithmetic to budgets, expenses, and utilization metrics.
- **Graceful Degradation:** Supporting fallback behavior where implemented.

---

## 🔮 Future Improvements

Potential improvements include:

- 🗄️ Persistent multi-user storage using PostgreSQL or Supabase.
- 🔐 Authentication and authorization using a solution such as Auth.js or Clerk.
- 💳 Payment gateway integration and automated reconciliation.
- 📱 WhatsApp Business API integration for attendee RSVP notifications.
- 📄 PDF contract and invoice parsing.
- 📈 Advanced analytics and event-performance reporting.
- 🧪 Automated tests for core workflows and budget calculations.

---

## 👨‍💻 Developer

**Mrunal Pimpale**

Computer Engineering Student | Full-Stack & Systems Development

🔗 **GitHub:** [@Mrunal-dev05](https://github.com/Mrunal-dev05)

---

## 📄 License

This project is developed for academic learning, portfolio development, and demonstration purposes.

Distributed under the MIT License. See the [MIT License](https://opensource.org/licenses/MIT) for details.
