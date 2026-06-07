# CarMax Pre-Trip Assistant

A mobile-friendly, offline-capable Progressive Web Application (PWA) designed to guide CarMax two-car hauler drivers through their daily pre-trip commercial vehicle inspections.

---

## 📱 Live App & Installation
The live application is hosted via GitHub Pages at:
**[https://gus16126.github.io/carmax-pre-trip-inspection-2-car-haulers/](https://gus16126.github.io/carmax-pre-trip-inspection-2-car-haulers/)**

### How to Install on your Mobile Device:
* **iOS (Safari)**: Open the link, tap the **Share** button (arrow pointing up at the bottom of the screen), and select **"Add to Home Screen"**.
* **Android (Chrome)**: Open the link, tap the three vertical dots menu, and select **"Install App"** or **"Add to Home Screen"**.

Once added, the app runs in full-screen standalone mode and functions **completely offline** (no Wi-Fi or cellular signal required).

---

## ✨ Key Features
- **12-Step Structured Checklist**: Follows official CDL and FMCSA pre-trip inspection procedures.
- **Auto-Save Drafts**: Automatically saves active checklist progress to `localStorage` in real-time. Drafts expire after 7 days.
- **Inline Photo Gallery (Lightbox)**: Tap **See Photo** on any inspection item to view the reference image in a smooth overlay modal. Swipe or cycle through all 13 reference photos without leaving your checklist page.
- **System-Aware Dark Mode**: Responsive layout that adjusts automatically to light or dark system themes.
- **7-Day History Log**: Save completed checklists with truck numbers and restore past inspections. Maintains a rolling history of up to 50 logs.
- **PDF Report Generation**: Print-specific stylesheet formats the checked list into a clean grid, letting drivers save/share their checklist as a PDF.

---

## 🛠️ Technical Specifications
This project is built as a lightweight, zero-dependency single-page application (SPA).

- **HTML5 & CSS3**: Core application structure and variables styling. Includes CSS-only accordion logic using input toggles.
- **Vanilla JavaScript**: Handles state persistence (`localStorage`), lightbox modal galleries, print bindings, and Service Worker registration.
- **PWA Capabilities**: Powered by a Service Worker (`sw.js`) and a web app manifest (`manifest.json`). Caches all code, styles, and CDL reference images locally.

---

## 🔄 How to Push Updates
When you make changes to the checklist or add new photos, you must notify user browsers to download the updates:

1. Add any new reference image filenames to the `ASSETS` array inside [sw.js](sw.js).
2. Increment the `CACHE_NAME` version string at the top of [sw.js](sw.js):
   ```javascript
   const CACHE_NAME = 'pre-trip-cache-v2'; // Increment v1 to v2, v3, etc.
   ```
3. Commit and push the changes to GitHub:
   ```bash
   git add -A
   git commit -m "update: add new inspection checks and photos"
   git push origin main
   ```
On the drivers' phones, the browser will download the new files in the background and activate them the next time the app is restarted.

---

## 📖 Creation History & Evolution
This utility was originally built as a simple offline HTML file to help transport drivers verify safety checks. It was subsequently refactored and upgraded to meet modern web app standards:
1. **PWA Transformation**: Added web app manifest, custom icons, service worker caching, and offline capability to allow use in remote areas without signal.
2. **UX Modernization**: Designed system-aware Dark Mode matching iOS system aesthetics, integrated premium typography, and replaced external photo links with an interactive inline lightbox modal.
3. **Data Integrity**: Added draft auto-saving to `localStorage` and a rolling 7-day completed history log.

---

## 📄 File Structure
* [index.html](index.html) - Application interface, styles, and JS logic.
* [sw.js](sw.js) - Service Worker handling offline asset caching.
* [manifest.json](manifest.json) - Web application configuration manifest.
* [icon.svg](icon.svg) - App icon badge.
* [PROJECT_MEMORY.md](PROJECT_MEMORY.md) - Project context and guidelines for AI coding assistants.
