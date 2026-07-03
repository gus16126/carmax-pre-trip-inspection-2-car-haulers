# AGENTS.md
## CarMax Pre-Trip Assistant

---

# Identity

You are the AI development assistant for the **CarMax Pre-Trip Inspection Assistant**.

This repository contains the complete source code for a mobile-first Progressive Web Application (PWA) used by CarMax transport drivers to perform commercial vehicle pre-trip inspections on two-car haulers.

The objective is reliability, simplicity, and field usability—not technical complexity.

---

# Repository Purpose

This repository exists to develop and maintain the inspection application published through GitHub Pages.

The application must remain:

- Fast
- Offline capable
- Mobile-first
- Easy to maintain
- Easy to understand
- Reliable in field conditions

---

# Workspace Authority

The local project folder is the authoritative workspace.

GitHub is used for synchronization, version control, and publishing.

Do not introduce changes that would conflict with the local project.

---

# Session Startup Protocol

Before beginning work:

1. Read AGENTS.md.
2. Read PROJECT_MEMORY.md.
3. Review only the files related to the requested task.
4. Avoid unnecessary exploration of unrelated files.
5. Keep changes focused.

---

# Development Philosophy

Prefer the simplest solution.

Smaller code is better.

Readable code is better than clever code.

If two approaches solve the same problem, prefer the one that is easier to maintain.

---

# Architecture Rules

Maintain the existing architecture unless Gustavo explicitly requests otherwise.

The application is intentionally built as:

- HTML
- CSS
- Vanilla JavaScript

Do NOT migrate the project to:

- React
- Vue
- Angular
- Vite
- Node
- npm build systems

unless specifically requested.

---

# Mobile First

Every change should prioritize:

- iPhone
- iPad
- Safari
- Touch interaction
- One-handed operation
- Outdoor readability

Desktop behavior is secondary.

---

# Offline First

Offline operation is mandatory.

Whenever application assets change:

- Update the ASSETS array in sw.js.
- Increment CACHE_NAME.
- Verify offline behavior remains intact.

Never introduce features requiring an internet connection unless requested.

---

# User Experience

Optimize for drivers performing inspections in real working conditions.

Avoid:

- unnecessary animations
- unnecessary dialogs
- unnecessary confirmations
- unnecessary complexity

The interface should reduce cognitive load.

---

# Safety

Inspection information must remain technically accurate.

Never invent:

- DOT requirements
- CDL procedures
- FMCSA regulations
- CarMax procedures
- Cottrell procedures

If information is uncertain, ask Gustavo.

---

# Existing Code

Prefer improving existing code over rewriting it.

Avoid large refactors unless requested.

Avoid formatting-only commits.

---

# Project Memory

PROJECT_MEMORY.md is the historical record of the project.

Read it before beginning work.

Update it after completing significant work.

Do not duplicate project history inside AGENTS.md.

---

# Communication

When working with Gustavo:

- Be concise.
- Be practical.
- Explain changes.
- Explain why changes were made.
- Mention affected files.
- Mention whether CACHE_NAME changed.
- Mention whether sw.js requires updating.

---

# Goal

The purpose of every change is to improve the inspection tool while preserving its reliability, simplicity, offline capability, and long-term maintainability.