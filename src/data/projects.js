export const projects = [
    {
        id: "screen-my-cv",
        title: "Screen My CV",
        category: "AI & Automation",
        clientType: "Client Product (HRTech)",
        description: "Full-scale recruitment intelligence platform featuring automated job postings, AI-powered bulk resume screening, and automated candidate interview evaluations.",
        fullDescription: "Engineered an end-to-end recruitment platform for client hiring workflows. Recruiters define roles and publish openings while the backend handles asynchronous bulk resume parsing and multi-criteria candidate ranking via Gemini API. Includes asynchronous task orchestration with BullMQ & Redis, automated candidate video/audio interview evaluations, and real-time candidate suitability scoring.",
        tags: ["Next.js", "Node.js", "MongoDB", "Redis", "BullMQ", "Gemini API", "AI Agents"],
        highlights: [
            "Automated multi-criteria candidate resume parsing and semantic ranking with Gemini API",
            "Scalable asynchronous background job queue built with Redis and BullMQ",
            "Comprehensive interview evaluation engine with candidate scoring analytics"
        ],
        year: "2024",
        link: "#",
        isLive: true,
        featured: true
    },
    {
        id: "vectova",
        title: "Vectova",
        category: "Full Stack Web",
        clientType: "IT Consulting Agency",
        description: "Interactive 3D digital transformation and IT consulting website crafted with Three.js 3D models, GSAP scroll animations, and modern UI/UX.",
        fullDescription: "Designed and developed an immersive digital agency website. Integrates interactive 3D WebGL scenes using Three.js, seamless scroll-driven animation timelines using GSAP ScrollTrigger, and clean dark-mode responsive layouts powered by Next.js and Tailwind CSS.",
        tags: ["Next.js", "Three.js", "GSAP ScrollTrigger", "Node.js", "MongoDB", "Tailwind CSS"],
        highlights: [
            "Immersive 3D interactive graphics and custom WebGL models via Three.js",
            "Silky 60fps scroll-triggered animations and cinematic timelines with GSAP",
            "High-performance asset optimization and responsive enterprise branding"
        ],
        year: "2024",
        link: "#",
        isLive: true,
        featured: true
    },
    {
        id: "vastra-labs",
        title: "Vastra Labs",
        category: "AI & Automation",
        clientType: "Fashion Tech Innovation",
        description: "Generative AI virtual fitting platform that transforms raw fabric and clothing photos into realistic studio-quality images of human models wearing the garments.",
        fullDescription: "Solved one of apparel e-commerce's biggest challenges: showing prospective buyers how raw fabrics and clothing look on diverse human models without expensive studio photo shoots. Users upload raw clothing or fabric textures, and a custom generative AI pipeline powered by Gemini image models synthesizes realistic model photography with accurate drapery, textures, and lighting. Stores processed high-resolution assets in AWS S3.",
        tags: ["React", "Node.js", "MongoDB", "Gemini Image Models", "AWS S3", "Express"],
        highlights: [
            "Generative AI pipeline converting flat fabric textures into realistic model photography",
            "Secure high-throughput asset ingestion and delivery pipeline with AWS S3",
            "Interactive before/after clothing visualization interface for apparel brands"
        ],
        year: "2024",
        link: "#",
        isLive: false,
        featured: true
    },
    {
        id: "on-demand-service-marketplace",
        title: "On-Demand Service Marketplace",
        category: "Mobile Apps",
        clientType: "On-Demand Services (Confidential)",
        description: "Dual-sided on-demand services mobile application (Customer & Vendor) built with React Native. Users post requirements (plumbing, garage repair, AC services) and verified vendors bid in real-time.",
        fullDescription: "Architected a full Upwork-style marketplace ecosystem consisting of two separate mobile apps: a Customer app and a Service Vendor app. Customers post home and trade service jobs (plumbing, automotive, electrical, HVAC). Local vendors receive instant push notifications and place real-time competitive bids. Features quote negotiations, in-app messaging, milestone tracking, and geo-radius filtering.",
        tags: ["React Native", "Node.js", "MongoDB", "Socket.IO", "Express", "Push Notifications"],
        highlights: [
            "Dual-app ecosystem: dedicated Customer & Vendor mobile applications",
            "Real-time competitive bidding and quote negotiation engine via Socket.IO",
            "Location-based service discovery with categorized trades (Plumbing, Garage, AC, Electrical)"
        ],
        year: "2024",
        link: "#",
        isLive: false,
        featured: true
    },
    {
        id: "djpl-tournament-app",
        title: "DJPL - Digamber Jain Premiere League",
        category: "Mobile Apps",
        clientType: "Sports & Community Org",
        description: "Official tournament management and live scoring mobile application suite (Admin & User) for community cricket leagues with ball-by-ball updates and statistics.",
        fullDescription: "End-to-end sports mobile application system engineered for the Digamber Jain Premiere League. Features an Admin mobile app for scorers and match officials to log ball-by-ball actions, dismissals, extras, and overs in real time, alongside a high-traffic User app for community members to follow live scorecards, match commentary, points tables, and player awards.",
        tags: ["React Native", "Node.js", "MongoDB", "WebSockets", "Express", "Tailwind"],
        highlights: [
            "Admin scoring console for umpires with instantaneous ball-by-ball sync",
            "Public follower app with live cricket commentary, tournament brackets, and player leaderboards",
            "Custom sports statistics engine calculating run rates, bowling figures, and player MVP scores"
        ],
        year: "2024",
        link: "#",
        isLive: false,
        featured: false
    },
    {
        id: "smart-expense-bill-manager",
        title: "Smart Expense & Bill OCR Manager",
        category: "Mobile Apps",
        clientType: "FinTech Utility",
        description: "Automated mobile expense and income management app. Users upload receipts and bills, and the app automatically parses merchant, taxes, line items, and totals into budgets using AI vision.",
        fullDescription: "Eliminates tedious manual bookkeeping. Users photograph physical receipts or upload PDF bills; the app processes the images using Gemini Vision / OCR intelligence to automatically extract vendor names, transaction dates, tax breakdowns, and total amounts. Automatically classifies purchases into expense and income ledgers, updates monthly budget limits, and provides visual spending graphs.",
        tags: ["React Native", "Gemini Vision OCR", "Node.js", "MongoDB", "Data Analytics"],
        highlights: [
            "Automated OCR extraction: snapshot a receipt to auto-log income and expenses",
            "Intelligent categorization of purchases with monthly budget threshold alerts",
            "Interactive financial health dashboards and exportable expense summaries"
        ],
        year: "2024",
        link: "#",
        isLive: false,
        featured: false
    },
    {
        id: "ai-hiring-platform",
        title: "AI Interview & Voice Agent System",
        category: "AI & Automation",
        clientType: "HRTech Enterprise",
        description: "An intelligent HR tech platform powered by autonomous AI interview agents. Automatically parses candidate resumes in bulk, generates tailored job descriptions, and conducts interactive voice/video interviews with real-time transcription and scoring.",
        fullDescription: "Built an end-to-end recruitment automation pipeline. The platform allows hiring managers to generate AI-crafted job specifications, bulk-ingest hundreds of candidate resumes with instant parsing, and trigger automated candidate interviews using LiveKit WebRTC and OpenAI audio models. Evaluates responses and provides objective candidate scoring reports.",
        tags: ["React", "LiveKit WebRTC", "AI Agents", "OpenAI API", "Node.js"],
        highlights: [
            "Automated audio/video interview conducting with AI voice agents",
            "Bulk resume semantic parsing and candidate skill extraction",
            "Real-time transcript generation and objective scoring matrix"
        ],
        year: "2024",
        link: "#",
        isLive: false,
        featured: false
    },
    {
        id: "edtech-automation",
        title: "EdTech Automation System",
        category: "AI & Automation",
        clientType: "EdTech Enterprise",
        description: "An automated multi-channel training and session management system. Ingests spreadsheet data and automates scheduled reminders via Meta WhatsApp API & Twilio with real-time response tracking.",
        fullDescription: "Architected a high-throughput communication and batch scheduling engine for education providers. Administrators upload participant lists via Excel/CSV, and the system orchestrates automated multi-touch reminder sequences over WhatsApp and SMS. Includes real-time delivery status, participant responses, and automated attendance logging via WebSockets.",
        tags: ["Node.js", "WhatsApp Cloud API", "Socket.IO", "Twilio", "Express"],
        highlights: [
            "Batch scheduling engine handling thousands of automated alerts",
            "Bi-directional WhatsApp messaging with automated webhook processing",
            "Real-time interactive dashboard with live participant response telemetry"
        ],
        year: "2024",
        link: "#",
        isLive: false,
        featured: false
    },
    {
        id: "rivoogen",
        title: "Rivoogen Corporate Platform",
        category: "Full Stack Web",
        clientType: "IT Consulting Firm",
        description: "High-performance digital presence and corporate platform for an AI and IT solutions consultancy, built with modern UI/UX principles, fast load speeds, and lead conversion funnels.",
        fullDescription: "Designed and developed a corporate web application showcasing enterprise AI and digital transformation capabilities. Implemented clean dark-mode aesthetics, responsive micro-interactions, SEO optimization, and interactive service inquiry forms.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO Optimization", "Responsive Design"],
        highlights: [
            "99+ Google Lighthouse performance score with optimized assets",
            "Modern glassmorphism visual design with interactive service catalogs",
            "Integrated lead capture pipeline with automated email notifications"
        ],
        year: "2024",
        link: "https://www.rivoogen.com/",
        isLive: true,
        featured: false
    },
    {
        id: "eteon-international",
        title: "Eteon International Logistics",
        category: "Full Stack Web",
        clientType: "Global Logistics Client",
        description: "Global import and export logistics platform featuring interactive product catalogs, international trade tracking, and client inquiry management.",
        fullDescription: "Engineered an international logistics and trade website to showcase export commodities, shipping capabilities, and worldwide supply chains. Provides prospective international buyers with interactive product inquiries and compliance documentation.",
        tags: ["React", "Global Trade Logistics", "Tailwind CSS", "Client Management"],
        highlights: [
            "Dynamic product catalog with multi-category filtering",
            "Direct international trade inquiry and RFQ (Request for Quote) system",
            "Fully responsive across all mobile, tablet, and desktop viewports"
        ],
        year: "2024",
        link: "https://vishesh-ashwin.vercel.app/",
        isLive: true,
        featured: false
    },
    {
        id: "panisho-ecommerce",
        title: "Panisho E-Commerce & Admin",
        category: "E-Commerce",
        clientType: "Fashion & Retail Brand",
        description: "Full-scale fashion e-commerce storefront with a custom business analytics dashboard for tracking daily sales, inventory levels, order pipelines, and revenue trends.",
        fullDescription: "Created an end-to-end shopping experience coupled with a proprietary merchant management portal. Features product variant selections, cart and checkout flows, automated order tracking, and an analytics suite displaying gross revenue, average order value, and order fulfillment metrics.",
        tags: ["React", "Node.js", "MongoDB", "Redux Toolkit", "Express", "REST APIs"],
        highlights: [
            "Complete cart, checkout, and order status workflow",
            "Custom merchant dashboard with real-time revenue analytics charts",
            "Optimized database schema for inventory management and high query speed"
        ],
        year: "2024",
        link: "https://www.panisho.in/",
        isLive: true,
        featured: true
    },
    {
        id: "health-nexus",
        title: "Health Nexus Platform",
        category: "Full Stack Web",
        clientType: "Healthcare Provider",
        description: "Hospital management and patient information system featuring department listings, specialist doctor directories, and streamlined appointment scheduling.",
        fullDescription: "Developed a modern healthcare portal designed to improve patient onboarding and appointment management. Allows patients to browse hospital departments, view physician credentials, and request appointments with minimal friction.",
        tags: ["React", "Healthcare Tech", "UI/UX Architecture", "Tailwind CSS"],
        highlights: [
            "Streamlined doctor scheduling and patient appointment request flow",
            "Accessible, HIPAA-considerate interface architecture",
            "Fast load times and clean mobile-friendly design"
        ],
        year: "2024",
        link: "https://health-nexus-five.vercel.app/",
        isLive: true,
        featured: false
    },
    {
        id: "filmy-bowl",
        title: "Filmy Bowl Media Portal",
        category: "Media & Portals",
        clientType: "Media Publisher",
        description: "High-traffic entertainment news and editorial portal delivering breaking stories, film reviews, and media updates with ad optimization and SEO indexing.",
        fullDescription: "Built a high-traffic entertainment news portal engineered for fast page loads under heavy traffic surges. Optimized for search engine discoverability, AMP compliance, dynamic social sharing cards, and responsive reading layouts.",
        tags: ["CMS", "SEO Architecture", "High Traffic Optimization", "Media Publishing"],
        highlights: [
            "Engineered to sustain high concurrent reader traffic spikes",
            "Extensive SEO schema implementation for instant Google News indexing",
            "Optimized content delivery with CDN caching and minimal DOM overhead"
        ],
        year: "2024",
        link: "https://filmybowl.com/",
        isLive: true,
        featured: false
    },
    {
        id: "south-filmy-nagri",
        title: "South Filmy Nagri",
        category: "Media & Portals",
        clientType: "Regional Media Publisher",
        description: "Specialized regional cinema publication platform focused on viral entertainment updates, celebrity spotlights, and reviews with dedicated mobile readership.",
        fullDescription: "Designed and launched an entertainment media platform catered to regional cinema followers. Emphasizes instant image rendering, infinite scroll feeds, and reader engagement metrics.",
        tags: ["Web Architecture", "Content Syndication", "Analytics", "Audience Growth"],
        highlights: [
            "Mobile-first responsive reading experience with rapid feed loading",
            "Integrated analytics tracking reader engagement and trending topics",
            "Lightweight code bundle for smooth browsing on slower mobile connections"
        ],
        year: "2024",
        link: "https://southfilmynagri.wuaze.com/?i=2",
        isLive: true,
        featured: false
    }
];
