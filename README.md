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

## ⚡ Features

### 🎯 1. End-to-End Event Management
- **Full Lifecycle CRUD**: Create, edit, inspect, and archive corporate summits, royal weddings, hackathons, and product launches.
- **Search & Multi-Filter Engine**: Instant search across titles, venues, and types with real-time status sorting (`Upcoming`, `Draft`, `Completed`).
- **Interactive Workspaces**: 5 specialized views per event:
  - **Overview**: Executive scope, pax metrics, and financial burn rate.
  - **Run-of-Show**: Minute-by-minute cues with dedicated role assignments.
  - **Milestone Checklist**: Prioritized task tracking (`High`, `Medium`, `Low`) with visual progress indicators.
  - **RSVP Tracker**: Attendee seating, roles, and guest list management.
  - **Invoices**: Linked event-specific financial receipts.

### 💰 2. Fiscal Budget & Ledger Engine (INR ₹)
- **Zero Mock Statistics**: Dynamic calculations driven purely by live application data.
- **Real-Time Recalculations**: Automatic tracking of Total Planned Outlay, Incurred Expenses, Capital Reserves, and Utilization Percentage.
- **Threshold Safeguards**: Smart visual warnings when spending exceeds planned ceilings.
- **One-Click CSV Export**: Download complete client/vendor budget briefs instantly.

### 🤖 3. Google Gemini AI Event Architect
- **Autonomous Blueprint Synthesis**: Generates end-to-end production timelines, task lists, and itemized Indian Rupee expense forecasts from natural language prompts.
- **1-Click Workspace Import**: Converts AI blueprints into active database entities without manual data entry.
- **Offline Simulation Support**: Automatically falls back to realistic event templates when an API key is not configured.

### 🏢 4. Verified Vendor Directory
- Centralized index for sound, staging, catering, venue, and production contractors.
- Track contracts, phone contacts, email leads, and negotiated quotation baselines.

---

## 🛠 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 16.4.3](https://nextjs.org/) (Turbopack, App Router) |
| **Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 3.4.1](https://tailwindcss.com/) (Obsidian Dark Theme) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **AI Integration** | [Google Gemini 2.5 Flash API](https://ai.google.dev/) |
| **Persistence** | Browser Storage (`localStorage`) with Firebase-ready schema |

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone [https://github.com/Mrunal-dev05/aura-events-enterprise.git](https://github.com/Mrunal-dev05/aura-events-enterprise.git)
cd aura-events-enterprise
