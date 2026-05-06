# 360° Virtual Campus Tour

A modern, highly scalable, and fully serverless 360-degree Web-GIS virtual tour for the Indian Institute of Information Technology, Design and Manufacturing (IIITDM) Jabalpur.

This project allows users to seamlessly navigate the campus environment through high-resolution panoramic environments, augmented with interactive mapping, time-aware dynamic UI widgets, and a custom edge-computing architecture.

🌐 **[Live Demo: Check out the official deployment here](https://360-tour.iiitdmj.ac.in)**

---

## Key Features

* **Immersive 360° Navigation:** High-fidelity panoramic scenes linked via custom interactive hotspots, powered by Pannellum.
* 🌙 **Real-Time Day/Night Mode:** The environment dynamically syncs with the user's local clock. If the tour is accessed between 7:00 PM and 5:00 AM, the interface and environments automatically transition into a custom-designed Night Mode.
* **Smart Transit Widgets:** Interactive UI modules located at virtual campus bus stops fetch the current real-world time and dynamically display the schedule for the next arriving bus (e.g., if checking at 11:00 AM, the module automatically updates to show "Next Bus: 3:30 PM").
* **Interactive GIS Mapping:** Integrated 2D campus maps (via Leaflet.js) to provide spatial context and instant teleportation across different zones of the institute.
* **Dynamic UI & Glassmorphism Design:** A sleek, modern user interface featuring custom CSS styling that overlays directly inside the 360 viewer.
* **Ultra-Fast Global Delivery:** Heavy visual assets are served through a custom CDN architecture, ensuring sub-second load times globally without traditional server bottlenecks.

---

## Technology Stack

**Frontend (Interface & Engine)**
* **Core:** HTML5, Vanilla JavaScript, CSS3 (Custom Glassmorphism UI)
* **Time-Aware Logic:** Native JS Date/Time APIs for dynamic rendering
* **360° Rendering:** Pannellum (WebGL-based panorama viewer)
* **GIS Mapping:** Leaflet.js

**Backend (Serverless Edge Architecture)**
* **Hosting & Delivery:** Cloudflare Pages
* **Asset Storage:** Cloudflare R2 Object Storage (Master Bucket)
* **DNS & Routing:** Cloudflare for SaaS & Edge Caching

---

## Deployment Architecture

This project bypasses traditional server hosting (like AWS EC2 or Heroku) in favor of a Serverless Edge Computing Architecture, ensuring zero maintenance, infinite scalability, and virtually no hosting costs.

1. **Frontend Delivery (Cloudflare Pages):** The HTML, CSS, and JS files are deployed on Cloudflare Pages, ensuring the initial UI loads instantly via global edge nodes.
2. **Heavy Asset Storage (Cloudflare R2):** To prevent bandwidth throttling, all 360° high-res images are hosted in a centralized Cloudflare R2 Object Storage bucket. These are cached and delivered via a dedicated asset subdomain (`360-assets.iiitdmj.ac.in`).
3. **DNS & Routing:** Managed via GoDaddy and Cloudflare, routing the official `360-tour.iiitdmj.ac.in` domain directly to the Edge network.

---

## Controls & Keyboard Usage

The tour is fully optimized for both desktop and mobile web browsers.

### Mouse / Touch Controls
* **Look Around:** Click and drag (or swipe on mobile) anywhere on the screen.
* **Interact:** Click on the custom icons/hotspots to move to the next area, open the map, or view dynamic widgets (like the bus schedule).
* **Zoom:** Use the mouse scroll wheel (or pinch-to-zoom on mobile).

### Keyboard Shortcuts
For accessibility and power users, the viewer supports standard Pannellum keyboard bindings:

* `↑` / `W` : Pan Up
* `↓` / `S` : Pan Down
* `←` / `A` : Pan Left
* `→` / `D` : Pan Right
* `Shift` : Zoom In
* `Ctrl` : Zoom Out
* `Esc` : Exit Fullscreen mode

### Development Team 

* [Anubhav Sharma](https://github.com/Sunraku28)
* [Pujan Mirani](https://github.com/PujanMirani)
* [Abhinav Parmar](https://github.com/Levi-acker07man)
* [Ashutosh Verma](https://github.com/ashutoshvrm05)
