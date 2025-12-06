
---

# **QubTick Core **

### *Enabling Metered, Automated, Machine-to-Machine Payments on Qubic*

---

## **Overview**

**QubTick Core** is the backend engine powering QubTick’s mission:
to provide a unified payment and usage-metering layer for the emerging **machine economy** — where applications, AI agents, IoT devices, and connected systems transact autonomously.

The system makes it possible for machines and software services to:

* Pay for usage in real time
* Charge for access based on consumption
* Enforce spending limits and policies
* Automate settlement on the **Qubic Network**
* Verify and log every machine event transparently

This repo implements the server-side components for running these flows reliably at scale.

QubTick Core is designed to be:
**fast**, **deterministic**, **modular**, and ready to evolve into a full M2M financial rail.

---

## **What We Are Building in Phase 1**

Phase 1 focuses on creating the **core infrastructure** required to demonstrate automated usage-based payments between machines and services. In hackathon scope, this includes:

### **1. Machine Session Management**

* Devices/services authenticate via API keys.
* The backend registers a session with parameters (rate, limits, timeouts).
* Each session tracks:

  * Start time
  * Live usage metrics
  * Pending payment amount
  * Status (active, paused, closed)

### **2. Real-Time Usage Metering**

Devices and apps can report usage:

```
/usage/report
```

The backend aggregates:

* Compute units
* API calls
* Requests per second
* Bandwidth units
* Any model the integrator defines

Phase 1 includes default metering rules + a simple extensible interface.

### **3. Automated Payment Calculation**

Each usage event is processed through the rate engine:

* Supports fixed rates
* Supports unit-based metering
* Supports time-based sessions
* Supports upper/lower spending boundaries

The engine produces a **pending settlement** amount.

### **4. Smart Contract Integration (Qubic Testnet)**

Although simple in Phase 1, the contract layer supports:

* Creating a payment channel
* Locking funds
* Updating balances
* Settling after session completion

The backend interacts through:

* Event listeners
* Contract state polling
* Transaction broadcasting

### **5. API Key & Access Control**

Includes:

* Project-level keys
* Machine-level keys
* Rotating credentials
* Optional signature verification

### **6. Observability & Event Logging**

Critical for debugging and transparency:

* Session logs
* Usage logs
* Payment logs
* Contract execution logs
* Error reports

Delivered over WebSocket + REST.

---

## **System Architecture (Phase 1)**

**Components inside this repo:**

* REST API
* Usage Metering Engine
* Payment Calculator
* Contract Interaction Service
* Account/Project/Machine Manager
* WebSocket Notifications
* Database Models (PostgreSQL or MongoDB)
* Rate Configuration Engine
* Validation & Throttling Middleware

**External components (other repos):**

* `qubtick-contracts` (smart contracts)
* `qubtick-dashboard` (UI)

QubTick Core acts as the **central coordinator** between the UI, the machines, and the Qubic blockchain.

---

## **Tech Stack (Phase 1)**

**Backend:**

* Node.js + TypeScript
* Express or Fastify (Fastify recommended for speed)

**Database:**

* PostgreSQL (primary)
* Redis (optional, for metering bursts or caching)

**Blockchain:**

* Qubic Testnet
* Contract interactions via Qubic’s SDK / RPC layer

**Communication:**

* REST
* WebSockets (for real-time updates)

**Testing:**

* Jest / Supertest

**Deployment:**

* Docker-based container
* Vercel/Render/Cloudflare Workers for light endpoints
* Railway/Fly.io for full backend

---

## **Core API Endpoints (Phase 1)**

### **Project & Key Management**

```
POST /project/create
POST /keys/generate
GET  /keys/list
```

### **Machine Session**

```
POST   /session/start
POST   /session/pause
POST   /session/resume
POST   /session/end
GET    /session/:id
```

### **Usage Metering**

```
POST /usage/report
GET  /usage/:sessionId
```

### **Settlement & Payments**

```
POST /settlement/initiate
POST /settlement/commit
GET  /settlement/:id
```

### **Status & Events**

```
GET /events/:sessionId
WS  /stream
```

---

## **Phase 1 Goal for the Hackathon**

Deliver a **working, clean, predictable** backend that demonstrates:

### ✔ Machines/services can connect

### ✔ Usage can be recorded

### ✔ Costs can be calculated automatically

### ✔ Funds can be locked on Qubic

### ✔ Settlements can be triggered

### ✔ Everything updates in real time on the dashboard

This proves QubTick’s thesis:
**Micro-metered machine payments are possible, fast, and practical on Qubic.**

---

## **Long-Term Vision**

QubTick Core is the foundation for a broader platform enabling:

* AI agents paying each other per inference
* API providers monetizing per request
* IoT devices transacting autonomously
* Autonomous compute networks
* Real-time bandwidth, storage, or compute markets
* Secure machine-vs-machine contracts

As machine transactions grow exponentially, QubTick aims to provide the **financial base layer** for that ecosystem.

---

## **Folder Structure**

```
qubtick-core/
│
├── src/
│   ├── api/
│   ├── core/
│   ├── services/
│   ├── contracts/
│   ├── db/
│   ├── events/
│   ├── utils/
│   └── config/
│
├── test/
│
├── docker/
│
├── README.md
└── package.json
```

---

## **Status**

**Phase 1 (Hackathon) — ACTIVE DEVELOPMENT**

* Core session engine: ✓
* Usage metering: ✓
* Rate calculator: ✓
* Contract integration (testnet): partial
* WebSockets: partial
* Dashboard integration: in progress

---

## **License**

Open source for the hackathon.
Future licensing decisions will be documented post-evaluation.

---

## **Contributing**

Pull requests welcome.
During hackathon window, features are prioritized based on demo readiness.

---

If you want, I can also generate:
✅ README for the **contracts repo**
✅ README for the **dashboard repo**
✅ Diagrams (architecture, user flow)
Or even a **landing page copy** for the hackathon judges.
