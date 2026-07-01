# Project Memory: CarMax Pre-Trip Assistant
*This document acts as a persistent memory and developer log. Any AI agent modifying this project must read, update, and respect the guidelines in this file.*

---

## 🎯 Project Context & Target User
- **User**: Gustavo Guallar (CarMax Transport Driver)
- **Use Case**: A mobile-friendly inspection guide for two-car haulers (Cottrell models).
- **Core Requirement**: The app **must run completely offline** with zero cell signal (e.g. at highway shoulders, weigh stations, or remote dealership lots).
- **Hosting URL**: `https://gus16126.github.io/carmax-pre-trip-inspection-2-car-haulers/`

---

## ⚙️ AI Coding Guidelines & Architectural Constraints

### 1. Framework Constraint (Keep it lightweight)
* **Do NOT migrate this project to React, Vue, or Vite** unless explicitly requested by the user. 
* Keep it as a single-page application (SPA) centered in `index.html` with vanilla Javascript, HTML5, and CSS3. This ensures near-zero load times and perfect offline capability on older mobile devices.

### 2. Browser Compatibility (Must support Safari)
* The application must be fully tested and compatible with **iOS Safari** (the default browser used by the driver on mobile). 
* Do not use proprietary Chrome APIs. Ensure the app works seamlessly in standalone fullscreen mode when added to the iOS home screen.

### 3. PWA & Service Worker Rules
* **Offline Caching**: Any new reference photos, scripts, or styles added to the project must be manually registered in the `ASSETS` array inside `sw.js` to ensure they are cached locally.
* **Auto-Update Cycle**: Whenever code is updated, increment the `CACHE_NAME` constant (e.g., `pre-trip-cache-v1` to `v2`) in `sw.js`. This notifies client browsers to download the latest files.

### 4. Styling & Accordion Logic
* **No CSS frameworks**: Maintain custom CSS variables in `:root` and styles inside `index.html`.
* **Dark Mode**: Support `@media (prefers-color-scheme: dark)` using custom colors that match Apple's dark system UI (e.g., `#121214` background, `#1c1c1e` cards, and `#0a84ff` primary tint).
* **Pure CSS Accordion**: The expand/collapse checklist steps are controlled using hidden checkbox inputs (`.step-toggle`) and sibling selectors. Avoid JavaScript logic for panel toggles.

---

## 💾 Data Schema & Local Storage Layout

### Active Progress Draft (`preTripData`)
Saves active checkbox states dynamically to prevent data loss. Drafts expire after 7 days.
```json
{
  "truckNumber": "7108",
  "inspectionDate": "2026-06-07",
  "state": {
    "s1-1": true,
    "s1-2": false
  },
  "timestamp": 1780860000000
}
```

### Inspection History (`preTripHistory`)
Stores up to 50 previous completed inspections.
```json
[
  {
    "truckNumber": "7108",
    "inspectionDate": "2026-06-07",
    "timestamp": 1780860000000,
    "completedCount": 115,
    "totalCount": 115,
    "state": { ... },
    "completed": true
  }
]
```

---

## 📜 Changelog & Completed Milestones
* **2026-06-07**: 
  - Copy project files from `Downloads` to the active scratch workspace.
  - Implement PWA Manifest and custom SVG checkmark truck icon (`icon.svg`).
  - Write Cache-First Service Worker (`sw.js`) caching all logic and all 13 reference photos.
  - Upgrade visual styles (Google Fonts `Inter` & `Outfit`, micro-animations, glassmorphism cards).
  - Add native media Lightbox Modal to slide and swipe through photos inline.
  - Add print CSS rules and a **Print Report** button for PDF downloads.
  - Link project to `github.com/gus16126/carmax-pre-trip-inspection-2-car-haulers.git` and save Personal Access Token (PAT) for automatic push commands.
* **2026-06-30**:
  - Pulled updates to synchronize the local computer workspace with the remote repository (including the new `CDL_Wheel_Rim_Inside.jpg` asset).
  - Implemented interactive zoom-and-pan support for lightbox photos (2.5x toggle on tap/click with touch dragging/swiping).
  - Added a visual helper subtitle in the lightbox caption (`🔍 Tap image to zoom / drag to pan`) for user instructions and PWA update confirmation.
  - Incremented PWA cache version to `v4` in `sw.js` and added `CDL_Wheel_Rim_Inside.jpg` to assets cache list.
