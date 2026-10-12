/**
 * ==============================================================================
 * 📦 SINGLE SOURCE OF TRUTH (CLIENT DATA)
 * ==============================================================================
 * Nessa Kamalika — Growth & Performance Marketing
 * ==============================================================================
 */

window.PORTFOLIO_DATA = {
  // 🎨 THEME & STYLE CONFIGURATION
  theme: {
    style: "tech-glossy", // Adopted high-energy dark aesthetic
    accent: "cyan",       // Primary growth accent: "cyan" | "emerald" | "purple" | "amber" | "rose" | "gold"
    mode: "dark"
  },

  // 👤 PERSONAL & CONTACT DETAILS
  personal: {
    name: "Nessa Kamalika",
    title: "Growth & Performance Marketing",
    badge: "Available for Roles & Growth Consulting",
    bio: "Growth & Performance Marketer focused on driving sustainable revenue growth through targeted paid advertising and end-to-end funnel execution. Experienced in scaling multi-channel campaigns across Meta, TikTok, and Marketplace Ads from the ground up, delivering IDR 600M–800M/month in revenue with consistent 3.5x–10.0x ROAS on ad budgets up to IDR 200M/month. Combines analytical campaign scaling with customer operations leadership to drive conversion rates and secure an exceptional closing rate of up to 87%.",
    location: "Yogyakarta, Indonesia",
    avatar: "assets/images/avatar.png",
    cvUrl: "assets/docs/cv.pdf",
    socials: [
      { name: "WhatsApp", url: "https://wa.me/6287834203959", icon: "phone" },
      { name: "Email", url: "mailto:nessakamalika@gmail.com", icon: "mail" },
      { name: "Instagram", url: "https://www.instagram.com/nessaalika/", icon: "instagram" },
      { name: "LinkedIn", url: "https://linkedin.com/in/nessa-kamalika", icon: "linkedin" }
    ]
  },

  // 🎛️ SECTION VISIBILITY TOGGLES
  sections: {
    stats: true,
    experience: true,     // 1. Career History (Experience & Education)
    certifications: true, // 2. Verified Credentials (Licenses & Certifications)
    portfolio: true,      // 3. Selected Work (Projects & Case Studies)
    skills: true,         // 4. Core Competencies (Skills & Tools)
    contact: true
  },

  // 📊 KEY PERFORMANCE METRICS
  stats: [
    { label: "Monthly Revenue Delivered", value: "IDR 600M–800M", desc: "Multi-channel store scaling" },
    { label: "Consistent Ad ROAS", value: "3.5x – 10.0x", desc: "On ad budgets up to IDR 200M/month" },
    { label: "Peak Closing Rate", value: "87%", desc: "Customer operations leadership" },
    { label: "National Competency", value: "BNSP Licensed", desc: "Digital Marketing (Valid to 2027)" }
  ],

  // 💼 1. CAREER HISTORY (EXPERIENCE & EDUCATION) — 1 VENTURE + 6 POSITIONS + EDUCATION
  experience: [
    // 🏢 VENTURE / FOUNDER
    {
      period: "Mar 2026 — Present",
      role: "Founder & Head of Operations",
      company: "Pusat Herbal Indonesia (E-Commerce Store)",
      desc: "Founded and scaled an herbal health e-commerce store on Shopee to IDR 100,000,000 in revenue within the first 6 months, expanding to a 2nd branch (Pusat Herbal Asia). Executed domestic and cross-border Meta Ads driving ~IDR 300,000,000 in cumulative revenue, while maintaining a 92% chat response rate and 4.8/5.0 store rating."
    },
    // 💼 PROFESSIONAL EXPERIENCE
    {
      period: "Jul 2026 — Sep 2026",
      role: "Digital Advertiser (Agency)",
      company: "CV. Hasbuna Artha Niaga",
      desc: "Managed multi-channel advertising for 7 client brands across fashion, F&B, herbal, and packaging sectors. Scaled Marketplace Ads and TikTok Ads (GMV Max) campaigns from scratch, maintaining stable 3.5x ROAS in alignment with brand KPI projections."
    },
    {
      period: "Dec 2025 — Feb 2026",
      role: "Digital Advertiser (Freelance)",
      company: "Dewanta Trans Travel",
      desc: "Designed and executed digital marketing campaigns via Meta Ads that increased new customer acquisition by 20%. Conducted daily A/B testing on 5–10 creative variations and optimized lead forms vs. WhatsApp CTAs, lifting conversion rate from 65% to 80%."
    },
    {
      period: "Jun 2025 — Mar 2026",
      role: "Customer Service Team Lead",
      company: "CV. Creaidea Innovation Yogyakarta",
      desc: "Supervised and mentored a team of 5 Customer Service specialists, formulated new standard operating procedures (SOPs), and managed divisional budgets. Consistently grew divisional monthly revenue by 20%–25% (+IDR 200M–300M/month)."
    },
    {
      period: "Sep 2024 — Jun 2025",
      role: "Digital Advertiser",
      company: "CV. Creaidea Innovation Yogyakarta",
      desc: "Managed 20–35 daily active campaigns across 3–5 Meta Ads Manager accounts with a monthly ad budget of IDR 200M, delivering verified revenue of IDR 600M–800M/month. Achieved peak campaign ROAS of up to 50x through selective budget scaling."
    },
    {
      period: "Sep 2023 — Aug 2024",
      role: "Customer Service Specialist",
      company: "CV. Creaidea Innovation Yogyakarta",
      desc: "Handled 80–120 customer inquiries daily via WhatsApp and phone. Awarded 'Best Customer Service Performance 2024' for generating top revenue (IDR 400M–600M) and achieving the department's highest closing rate of 87%."
    },
    {
      period: "Feb 2024 — Aug 2024",
      role: "Journalist Intern",
      company: "Harian Republika DIY",
      desc: "Conducted investigative field reporting and published 10–15 articles in national news outlets including Republika Jogja, Republika TV, and RM.id, adhering to strict journalistic ethics and editorial standards."
    },
    // 🎓 HIGHER EDUCATION
    {
      period: "Sep 2021 — Dec 2024",
      role: "Bachelor of Communication Science (S.I.Kom) — Top Graduate / Valedictorian",
      company: "Universitas Amikom Yogyakarta",
      desc: "Graduated Cum Laude with a 3.81 / 4.00 GPA, awarded Top Graduate (Wisudawan Terbaik) Period 93 at Universitas Amikom Yogyakarta with a concentration in Media Communication, Creative Production, and Advertising."
    }
  ],

  // 📜 2. VERIFIED CREDENTIALS (LICENSES & CERTIFICATIONS — 2 OFFICIAL LICENSES)
  certifications: [
    {
      title: "Certified Digital Marketing Professional (BNSP)",
      issuer: "National Board for Professional Certification (BNSP)",
      year: "2024 – 2027",
      desc: "Official national professional license in digital marketing strategy, performance analytics, ROAS optimization, and multi-channel campaign execution (Reg No: M 1962 01525 2024 / Cert No: 78422 2431 2 0201436 2024).",
      image: "assets/images/sertifikat_bnsp.jpg"
    },
    {
      title: "Certified Online Marketing Competency",
      issuer: "GeTI Incubator Professional Certification Body (LSP P1)",
      year: "2024 – 2026",
      desc: "Comprehensive certification in online marketing operations, digital brand management, e-commerce platform sales strategy, and conversion optimization.",
      image: "assets/images/sertifikat_geti.jpg"
    }
  ],

  // 📁 3. WORK SHOWCASE (ALL PORTFOLIO & CATEGORY MAPPINGS)
  categories: [
    { id: "all", label: "✨ All Works" },
    { id: "ads", label: "🚀 Paid Advertising" },
    { id: "leader", label: "👑 Customer Operations & Leadership" },
    { id: "cs", label: "💬 Customer Service Specialist" },
    { id: "design", label: "🎨 Commercial Graphic Design" }
  ],
  projects: [
    // =========================================================================
    // 👑 CUSTOMER OPERATIONS & TEAM LEADERSHIP
    // =========================================================================
    {
      id: "leader-1",
      category: "leader",
      featured: true,
      title: "Daily Revenue & ROAS Performance Ledger — IDR 700M–800M Scale",
      subtitle: "CV. Creaidea Innovation • Financial Reconciliation & Team ROAS",
      metrics: "IDR 746M Revenue • 3,612 Closings • 2.8x ROAS",
      description: "Daily operational performance spreadsheet for the CS team led by Nessa: IDR 267M total ad spend generated 6,190 inbound leads, 3,612 successful transactions, verified total revenue of IDR 746M (IDR 700M–800M bracket), and 2.8x divisional ROAS.",
      image: "assets/images/omset_700_800_juta.jpeg",
      tags: ["Customer Operations", "IDR 700M-800M Revenue", "6,190 Leads", "3,612 Closings", "2.8x ROAS"]
    },
    {
      id: "leader-2",
      category: "leader",
      featured: true,
      title: "Daily Lead Conversion Tracking & CS Evaluation Dashboard",
      subtitle: "CV. Creaidea Innovation • Lead Pipeline & Objection Matrix",
      metrics: "Supervision of 5 Staff • 87% Peak Closing",
      description: "Daily team performance reporting system: individual staff evaluations (Dinda, Feby, Lova, Billa), peak-hour inbound traffic analysis, product-level friction breakdown, and price/shipping objection handling mapping.",
      image: "assets/images/cs_dashboard_1.jpeg",
      tags: ["Team Leadership", "Lead Analysis", "Objection Handling", "Closing Matrix"]
    },
    {
      id: "leader-3",
      category: "leader",
      title: "Operational Timetable & Shift Management Whiteboard",
      subtitle: "CV. Creaidea Innovation • SOP & Shift Scheduling",
      metrics: "0 Delayed Reports • Zero Missed Inquiries",
      description: "Work shift scheduling, live chat allocation, daily team revenue targets, and physical whiteboard synchronization for inbound lead routing across operational shifts.",
      image: "assets/images/cs_timetable.jpeg",
      tags: ["Operational Management", "Shift Scheduling", "SOP Discipline"]
    },
    {
      id: "leader-4",
      category: "leader",
      title: "Sales Strategy Briefing & Daily Target Alignment",
      subtitle: "CV. Creaidea Innovation • Daily Target & Motivational Briefing",
      metrics: "Daily KPI Achieved • 5-Member Team",
      description: "Office whiteboard daily coordination: daily sales target reviews, prioritized product conversion strategies, and customer sentiment evaluation.",
      image: "assets/images/Dokumentasi_Koordinasi_Tim_Whiteboard_1.jpeg",
      tags: ["Team Briefing", "Sales Strategy", "Leadership"]
    },
    {
      id: "leader-5",
      category: "leader",
      title: "Weekly Performance Review & Lead Distribution System",
      subtitle: "CV. Creaidea Innovation • Weekly Review & Follow-Up System",
      metrics: "+20% to 25% Revenue Growth",
      description: "Weekly recap documentation and pending lead follow-up workflows, ensuring every inquiry is resolved with optimal conversion efficiency.",
      image: "assets/images/Dokumentasi_Koordinasi_Tim_Whiteboard_3.jpeg",
      tags: ["Weekly Review", "Lead Allocation", "Performance Tracking"]
    },

    // =========================================================================
    // 💬 CUSTOMER SERVICE SPECIALIST
    // =========================================================================
    {
      id: "cs-1",
      category: "cs",
      featured: true,
      title: "Best Customer Service Performance Award 2024",
      subtitle: "CV. Creaidea Innovation • Corporate Performance Recognition",
      metrics: "IDR 400M–600M Revenue • 87% Closing Rate",
      description: "Official company recognition for top Customer Service performance in 2024: generated highest revenue (IDR 400M–600M) and recorded highest department closing rate of 87% against a 75% target.",
      image: "assets/images/cs_dashboard_1.jpeg",
      tags: ["Best CS Award", "87% Closing Rate", "IDR 400M-600M Revenue", "Top Performer"]
    },
    {
      id: "cs-2",
      category: "cs",
      featured: true,
      title: "Management Recognition — Record High Closing Rate",
      subtitle: "CV. Creaidea Innovation • Validated Customer Satisfaction",
      metrics: "87% Closing Rate • Management Commendation",
      description: "Documented management praise acknowledging consistent record-high closing performance and highly responsive customer communication.",
      image: "assets/images/Bukti_Chat_Apresiasi_Closing_Rate_Tinggi.jpeg",
      tags: ["Management Commendation", "Closing Rate Proof", "Customer Experience"]
    },
    {
      id: "cs-3",
      category: "cs",
      title: "Daily Sales Closing Reconciliation & Redirect Log",
      subtitle: "CV. Creaidea Innovation • Financial Reconciliation",
      metrics: "100% Data Accuracy • Zero Leakage",
      description: "Administrative ledger ensuring accuracy and transparency in tracking daily closed deals across operational coordination channels.",
      image: "assets/images/Bukti_Chat_Pencatatan_Redirect_Closing_CS.jpeg",
      tags: ["Sales Reconciliation", "Data Accuracy", "Financial Discipline"]
    },
    {
      id: "cs-4",
      category: "cs",
      title: "Customer Service Shift Roster & Operational Discipline",
      subtitle: "CV. Creaidea Innovation • Continuous Coverage Readiness",
      metrics: "Rapid Chat Response • High Operational Uptime",
      description: "Operational shift roster maintaining continuous readiness, rapid response times, and zero-gap customer service coverage.",
      image: "assets/images/Jadwal_Piket_Operasional_CS.jpeg",
      tags: ["Roster Management", "Customer Experience", "Response Time"]
    },
    {
      id: "cs-5",
      category: "cs",
      title: "Customer Database Validation & Logistics Reconciliation",
      subtitle: "Chefpreneur Vania Wijaya • CRM & Order Processing",
      metrics: "95% Data Accuracy • 30–50 Orders/Day",
      description: "Managed verification and entry of 30–50 daily customer orders into logistics platforms. Maintained 95% data accuracy to minimize returns and expedite fulfillment.",
      image: "assets/images/cs_dashboard_1.jpeg",
      tags: ["Data Validation", "CRM Entry", "Logistics", "Operational Accuracy"]
    },

    // =========================================================================
    // 🚀 PERFORMANCE MARKETING & PAID ADVERTISING
    // =========================================================================
    {
      id: "ads-1",
      category: "ads",
      featured: true,
      title: "Meta Ads Scaling — Herbal Healthcare Line (IDR 200M/Mo Spend)",
      subtitle: "CV. Creaidea Innovation • Scale & Budget Allocation",
      metrics: "3.5x–10.0x ROAS • IDR 600M–800M/Mo",
      description: "Managed 20–35 daily active campaigns across 3–5 Meta Ads Manager accounts with monthly ad budgets up to IDR 200M. Implemented broad targeting, 1–3% lookalikes, and selective budget scaling to drive steady IDR 600M–800M monthly revenue.",
      image: "assets/images/ads_meta_1.jpeg",
      tags: ["Meta Ads", "Selective Scaling", "ROAS", "Performance Marketing"]
    },
    {
      id: "ads-2",
      category: "ads",
      featured: true,
      title: "Multi-Brand Agency Advertising — 7 Client Brands",
      subtitle: "CV. Hasbuna Artha Niaga • Agency Account Manager",
      metrics: "7 Client Brands • TikTok GMV Max & Shopee",
      description: "Managed multi-channel ads for 7 brands across fashion, herbal, and packaging. Formulated budget forecasts and executed TikTok Ads (GMV Max) and Marketplace Ads, achieving a 3.5x target ROAS.",
      image: "assets/images/ads_tiktok_1.png",
      tags: ["Agency", "TikTok Ads", "GMV Max", "Marketplace Ads", "Client Management"]
    },
    {
      id: "ads-3",
      category: "ads",
      featured: true,
      title: "E-Commerce Founder & Cross-Border Meta Ads",
      subtitle: "Pusat Herbal Indonesia • Domestic & Global Growth",
      metrics: "IDR 100M 6-Mo Shopee • IDR 300M+ Meta Ads",
      description: "Founded and scaled a Shopee store to IDR 100M revenue in 6 months. Executed Meta Ads campaigns for domestic and international markets generating IDR 300M+ cumulative revenue and expanding to a second branch.",
      image: "assets/images/ads_shopee_1.png",
      tags: ["Shopee Ads", "International Ads", "E-Commerce", "Meta Ads", "Growth"]
    },
    {
      id: "ads-4",
      category: "ads",
      title: "Meta Ads Scaling — Healthcare Campaign Dashboard",
      subtitle: "CV. Creaidea Innovation • Selective Scaling Strategy",
      metrics: "Up to 50x ROAS • Selective Scaling",
      description: "Meta Ads campaign dashboard for healthcare products achieving up to 50x ROAS through precision audience segmentation and disciplined budget scaling.",
      image: "assets/images/Meta_Ads_Klien_Herbal_Health_Dashboard_2.jpeg",
      tags: ["Meta Ads", "High ROAS", "Healthcare", "Audience Targeting"]
    },
    {
      id: "ads-5",
      category: "ads",
      title: "Meta Ads Performance Report — Spend & ROAS Ledger",
      subtitle: "CV. Creaidea Innovation • Daily Ad Spend & Return",
      metrics: "IDR 200M/Mo Spend • High ROAS",
      description: "Official ledger of daily spend and returns for healthcare Meta Ads campaigns, demonstrating consistent daily revenue and high conversion efficiency.",
      image: "assets/images/Meta_Ads_Klien_Herbal_Health_Laporan_Spend_ROAS.jpeg",
      tags: ["Ad Spend Report", "ROAS", "Analytics", "Scaling"]
    },
    {
      id: "ads-6",
      category: "ads",
      title: "Lead Generation & WhatsApp Funnel — Dewanta Trans Travel",
      subtitle: "Dewanta Trans Travel • A/B Creative Testing",
      metrics: "80% Conversion Rate • +20% New Customers",
      description: "Executed Meta Ads for travel reservations. Tested 5–10 daily creative variants and compared lead forms against direct WhatsApp CTAs, boosting conversion rate from 65% to 80%.",
      image: "assets/images/ads_dewanta.jpeg",
      tags: ["Lead Gen", "Meta Ads", "A/B Testing", "WhatsApp Funnel", "Tourism"]
    },
    {
      id: "ads-7",
      category: "ads",
      title: "Meta Ads Scaling — Food & Beverage Campaign",
      subtitle: "F&B Industry • Brand Scaling & Direct Sales",
      metrics: "Targeted Reach • Positive ROAS",
      description: "Meta Ads campaigns for F&B clients combining high-engagement visual assets with targeted customer retargeting.",
      image: "assets/images/Meta_Ads_Klien_FB_Dashboard.jpeg",
      tags: ["Meta Ads", "F&B", "Direct Response", "Retargeting"]
    },
    {
      id: "ads-8",
      category: "ads",
      title: "Meta Ads Analytics Report — F&B Industry Client",
      subtitle: "Analytics & Budget Allocation Report",
      metrics: "Conversion Tracking • Budget Optimization",
      description: "Comprehensive daily spend, reach, and conversion analytics ensuring disciplined ad budget allocation.",
      image: "assets/images/Meta_Ads_Klien_FB_Laporan.png",
      tags: ["F&B Report", "Conversion Tracking", "Budget Allocation"]
    },
    {
      id: "ads-9",
      category: "ads",
      title: "TikTok Ads Campaign — Raraya Scarf Fashion Brand",
      subtitle: "CV. Hasbuna Artha Niaga • TikTok GMV Max",
      metrics: "Creative Video Testing • GMV Max",
      description: "TikTok Ads execution for hijab fashion brand Raraya Scarf utilizing direct-response creative videos and GMV Max optimization.",
      image: "assets/images/TikTok_Ads_Fashion_Raraya_Scarf.png",
      tags: ["TikTok Ads", "Fashion", "GMV Max", "Video Creative"]
    },
    {
      id: "ads-10",
      category: "ads",
      title: "TikTok Ads Campaign — Hap Hap Snack Series (Phase 1)",
      subtitle: "CV. Hasbuna Artha Niaga • Snack Brand Scaling",
      metrics: "High CTR & Engagement",
      description: "TikTok Ads campaign for Hap Hap Snack optimizing interactive culinary content and high click-through rates.",
      image: "assets/images/TikTok_Ads_FB_Hap_Hap_Snack_1.png",
      tags: ["TikTok Ads", "Snack F&B", "Viral Creative", "CTR Optimization"]
    },
    {
      id: "ads-11",
      category: "ads",
      title: "TikTok Ads Campaign — Hap Hap Snack Series (Phase 2)",
      subtitle: "CV. Hasbuna Artha Niaga • Scalable Audience",
      metrics: "Audience Scaling & Impulsive Buying",
      description: "Scaling phase of TikTok Ads for Hap Hap Snack targeting younger demographics with impulsive buying propensity.",
      image: "assets/images/TikTok_Ads_FB_Hap_Hap_Snack_2.png",
      tags: ["TikTok Ads", "F&B", "Scaling", "Audience Targeting"]
    },
    {
      id: "ads-12",
      category: "ads",
      title: "Shopee Ads Dashboard — Herbal E-Commerce (Store 1)",
      subtitle: "Pusat Herbal Indonesia • Search & Discovery Ads",
      metrics: "Keyword Bidding • ROAS Optimization",
      description: "Managed paid search keywords and similar product ads on Shopee, maintaining an optimal cost-to-revenue advertising ratio.",
      image: "assets/images/Shopee_Ads_Pusat_Herbal_Dashboard_Iklan_1.png",
      tags: ["Shopee Ads", "Keyword Bidding", "Discovery Ads", "E-Commerce"]
    },
    {
      id: "ads-13",
      category: "ads",
      title: "Shopee Ads Dashboard — Herbal E-Commerce (Store 2)",
      subtitle: "Pusat Herbal Indonesia • Secondary Store Scaling",
      metrics: "Discovery Ads Management",
      description: "Shopee Ads management for the secondary branch store, expanding market penetration through attractive bundle promotions.",
      image: "assets/images/Shopee_Ads_Pusat_Herbal_Dashboard_Iklan_2.png",
      tags: ["Shopee Ads", "Store 2", "Bundle Offers", "Marketplace"]
    },
    {
      id: "ads-14",
      category: "ads",
      title: "Shopee Ads Optimization — Packaging Print House",
      subtitle: "CV. Hasbuna Artha Niaga • B2B & Retail Clients",
      metrics: "B2B & Retail Order Scaling",
      description: "Shopee Ads optimization for packaging and printing manufacturers targeting SME business owners and food entrepreneurs.",
      image: "assets/images/Shopee_Ads_Klien_Packaging_Print_House_1.png",
      tags: ["Shopee Ads", "Packaging", "B2B SMEs", "Print House"]
    },
    {
      id: "ads-15",
      category: "ads",
      title: "Shopee Ads Campaign — Vania Wijaya Recipe Book",
      subtitle: "CV. Hasbuna Artha Niaga • Culinary Niche Books",
      metrics: "Niche Targeting • 30% Sales Lift",
      description: "Marketplace advertising on Shopee for Chefpreneur Vania Wijaya's recipe book, targeting cooking communities and culinary enthusiasts.",
      image: "assets/images/Shopee_Ads_Klien_Buku_Resep_Vania_Wijaya.png",
      tags: ["Shopee Ads", "Culinary Book", "Niche Community", "Conversion"]
    },
    {
      id: "ads-16",
      category: "ads",
      title: "Shopee Ads Management — Fashion Brand Client",
      subtitle: "CV. Hasbuna Artha Niaga • Marketplace Algorithm",
      metrics: "Marketplace Algorithm Optimization",
      description: "Marketplace advertising for agency fashion clients, optimizing flash sales and broadcast chat funnels.",
      image: "assets/images/Shopee_Ads_Klien_Fashion.png",
      tags: ["Shopee Ads", "Fashion Client", "Marketplace Algorithm"]
    },
    {
      id: "ads-17",
      category: "ads",
      title: "Shopee Ads Campaign — F&B Client Scaling",
      subtitle: "CV. Hasbuna Artha Niaga • Daily Budget Control",
      metrics: "Daily Budget Control & ROAS",
      description: "Advertising management for F&B store clients on Shopee with strict monitoring of daily return on ad spend.",
      image: "assets/images/Shopee_Ads_Klien_FB_1.png",
      tags: ["Shopee Ads", "F&B Client", "Daily ROAS", "Agency"]
    },

    // =========================================================================
    // 🎨 COMMERCIAL GRAPHIC DESIGN & CREATIVE ASSETS
    // =========================================================================
    {
      id: "design-1",
      category: "design",
      featured: true,
      title: "Daily Ad Creative Production (Visuals & Video Hooks)",
      subtitle: "High-Converting Direct Response Creative Assets",
      metrics: "8–16 Creatives/Day • Image & Short Video",
      description: "Produced 8–16 visual creatives and short-form videos daily using Adobe Photoshop, Canva, and CapCut for digital paid advertising campaigns (Meta & TikTok Ads). Focused on strong visual hooks and clear typography.",
      image: "assets/images/design_poster_1.jpg",
      tags: ["Ads Creative", "Photoshop", "Direct Response", "CapCut", "A/B Testing"]
    },
    {
      id: "design-2",
      category: "design",
      featured: true,
      title: "Premier League Matchday Sports Commercial Poster",
      subtitle: "Athletic Editorial Graphic Design & Typography",
      metrics: "High-Resolution • Print & Social Media Ready",
      description: "Football commercial poster design exploring bold typographic hierarchy, dramatic athletic lighting, and dynamic visual composition for competition promotions.",
      image: "assets/images/design_poster_1.jpg",
      tags: ["Graphic Design", "Photoshop", "Sports Poster", "Typography"]
    },
    {
      id: "design-3",
      category: "design",
      title: "Championship Celebration Poster — Triple Winner Larana Stadium",
      subtitle: "Multi-Competition Trophy Celebration Artwork",
      metrics: "Trophy Graphic Design • Creative Artwork",
      description: "Tournament championship artwork combining grand stadium illumination, exclusive gold color grading, and monumental visual elements capturing the spirit of victory.",
      image: "assets/images/Desain_Poster_Champion_Triple_Winner_Larana_Stadium.jpg",
      tags: ["Visual Art", "Gold Grading", "Event Branding", "Photoshop"]
    },
    {
      id: "design-4",
      category: "design",
      title: "Champions Borcelle Football Club Poster Identity",
      subtitle: "Minimalist Club Honor & Identity Artwork",
      metrics: "Vector & Photo Manipulation • Social Media",
      description: "Modern visual composition blending minimalist vector art and athlete photo manipulation celebrating Borcelle FC's victory for official social channels.",
      image: "assets/images/design_poster_2.jpg",
      tags: ["Vector Layout", "Sports Branding", "Poster", "Creative"]
    },
    {
      id: "design-5",
      category: "design",
      title: "Premier Kickoff Matchday Sports Poster",
      subtitle: "High-Contrast Match Art & Athletic Composition",
      metrics: "Sports Editorial • Composition",
      description: "Professional kickoff match poster featuring high-contrast color grading and spotlighting key athletic figures.",
      image: "assets/images/design_poster_3.jpg",
      tags: ["Sports Poster", "Kickoff Art", "Athletic", "Photoshop"]
    },
    {
      id: "design-6",
      category: "design",
      title: "Final Match Showdown Poster — Larana Stadium",
      subtitle: "Match Preview • Color Grading & Atmosphere",
      metrics: "Match Preview • Color Grading",
      description: "Dramatic championship final poster featuring atmospheric lighting and modern commercial typography.",
      image: "assets/images/Desain_Poster_Final_Match_Larana_Stadium.jpg",
      tags: ["Final Match", "Atmospheric Art", "Stadium Visual", "Color Grading"]
    },
    {
      id: "design-7",
      category: "design",
      title: "Football Club Red Team Visual Branding Poster",
      subtitle: "Club Atmosphere & Dynamic Sports Layout",
      metrics: "Brand Atmosphere • Dynamic Layout",
      description: "Visual exploration of club red identity with dynamic layouts for digital promotional feeds and large-format print.",
      image: "assets/images/Desain_Poster_Football_Club_RedTeam.jpg",
      tags: ["Red Team Branding", "Dynamic Layout", "Sports Club", "Identity"]
    },
    {
      id: "design-8",
      category: "design",
      title: "Goal Announcement & Player Milestone Poster",
      subtitle: "Live Match Feed Graphic & Social Update",
      metrics: "Social Media Match Update",
      description: "Instant matchday feed graphic template for live goal announcements and milestone celebrations during matches.",
      image: "assets/images/Desain_Poster_Goal_Announcement.jpg",
      tags: ["Goal Announcement", "Player Milestone", "Social Media Feed"]
    },
    {
      id: "design-9",
      category: "design",
      title: "Player Contract Extension — Official Announcement Art",
      subtitle: "Sports Social Graphics • Official Club Press",
      metrics: "Official Announcement • Adobe Photoshop",
      description: "Official visual announcement for a star player's contract extension designed with an authentic, prestigious club aesthetic.",
      image: "assets/images/Desain_Poster_Player_Contract_Extension.jpg",
      tags: ["Contract Extension", "Official Press", "Sports Graphics"]
    },
    {
      id: "design-10",
      category: "design",
      title: "Triple Winner Celebration Poster — Spanyol Stadium",
      subtitle: "Victory Celebration Visual & Trophy Display",
      metrics: "Celebration Visual • Poster Art",
      description: "Artwork celebrating a historic three-trophy sweep with a grand championship stage composition.",
      image: "assets/images/Desain_Poster_Champion_Triple_Winner_Spanyol_Stadium.jpg",
      tags: ["Triple Winner", "Trophy Celebration", "Victory Artwork"]
    },
    {
      id: "design-11",
      category: "design",
      title: "Football Academy Open Registration Promotional Series",
      subtitle: "Marketing Poster Series • Canva & Photoshop",
      metrics: "Marketing Poster • Canva & Photoshop",
      description: "Promotional poster series for youth football academy enrollment designed with clear, persuasive information flow.",
      image: "assets/images/Desain_Poster_Open_Registration_Football_Academy_1.jpg",
      tags: ["Academy Registration", "Youth Football", "Marketing Series"]
    },
    {
      id: "design-12",
      category: "design",
      title: "Season Title Matchday & Half Time Match Updates",
      subtitle: "Matchday Digital Feed Visual Series",
      metrics: "Live Match Feed Graphic",
      description: "Visual asset series for live halftime scores and title-deciding fixture updates to boost audience engagement.",
      image: "assets/images/Desain_Poster_Season_Title_Matchday.jpg",
      tags: ["Matchday Update", "Half Time Feed", "Digital Assets"]
    }
  ],

  // 📰 EDITORIAL, PUBLISHED MEDIA & ACADEMIC WORKS
  editorialProjects: [
    {
      id: "ed-1",
      title: "Published Field Journalism — Harian Republika & RM.id",
      subtitle: "10 Verified Investigative Articles & Regional Reports",
      metrics: "10 Published Reports • Republika Jogja & TV",
      description: "Conducted field investigations, sourced balanced interviews, and published 10 official news reports across national outlets including Republika Jogja, Republika TV, and RM.id covering Malioboro vendor relocations, higher education policies, and humanitarian solidarity initiatives.",
      image: "",
      icon: "fa-solid fa-newspaper",
      tags: ["Investigative Journalism", "Field Reporting", "Published Media", "Fact-Checking"],
      links: [
        {
          title: "Gelar Aksi Solidaritas Bela Palestina, Mahasiswa UII Sampaikan Lima Sikap Tegas",
          publisher: "Republika Jogja",
          type: "news",
          url: "https://rejogja.republika.co.id/berita/sd9l57291/gelar-aksi-solidaritas-bela-palestina-mahasiswa-uii-sampaikan-lima-sikap-tegas"
        },
        {
          title: "Sekolah Tanpa Gawai — Liputan Khusus Edukasi",
          publisher: "Republika TV",
          type: "video",
          url: "https://tv.republika.co.id/berita/sev4nl313/sekolah-tanpa-gawai"
        },
        {
          title: "Sebanyak 300 Mahasiswa di UGM Peroleh Edukasi untuk Merawat Rambut",
          publisher: "Republika Jogja",
          type: "news",
          url: "https://rejogja.republika.co.id/berita/senxhf291/sebanyak-300-mahasiswa-di-ugm-peroleh-edukasi-untuk-merawat-rambut"
        },
        {
          title: "UGM Jadi Tuan Rumah Konferensi Internasional AAS-in-Asia 2024",
          publisher: "Republika Jogja",
          type: "news",
          url: "https://rejogja.republika.co.id/berita/sf28l7291/ugm-jadi-tuan-rumah-konferensi-internasional-aasinasia-2024"
        },
        {
          title: "Dua Tahun Relokasi, PKL Malioboro Keluhkan Sepinya Pembeli",
          publisher: "Republika Jogja",
          type: "news",
          url: "https://rejogja.republika.co.id/berita/s9p4k0291/dua-tahun-relokasi-pkl-malioboro-keluhkan-sepinya-pembeli"
        },
        {
          title: "Guru Besar UII Suarakan Otoritarianisme Kampus Model Baru",
          publisher: "Republika Jogja",
          type: "news",
          url: "https://rejogja.republika.co.id/berita/sfposp291/guru-besar-uii-suarakan-otoritarianisme-kampus-model-baru"
        },
        {
          title: "Ratusan Warga Ikuti Haflah Ikhtitam Ponpes Afkaaruna",
          publisher: "Republika Jogja",
          type: "news",
          url: "https://rejogja.republika.co.id/berita/s9i83d291/ratusan-warga-ikuti-haflah-ikhtitam-ponpes-afkaaruna"
        },
        {
          title: "Kembali Hadir di Yogyakarta, Semesta Buku Dipadati Ratusan Pengunjung",
          publisher: "Republika Jogja",
          type: "news",
          url: "https://rejogja.republika.co.id/berita/s9cbq8291/kembali-hadir-di-yogyakarta-semesta-buku-dipadati-ratusan-pengunjung"
        },
        {
          title: "Bobby Ardiyanto Kembali Pimpin DPD GIPI DIY Masa Bakti 2024–2029",
          publisher: "Republika Jogja",
          type: "news",
          url: "https://rejogja.republika.co.id/berita/sdvs6a291/bobby-ardiyanto-kembali-pimpin-dpd-gipi-diy-masa-bakti-20242029"
        },
        {
          title: "Gelar Proyek Sosial di Dusun Boyong, Mahasiswa Amikom Kembangkan Potensi Masyarakat",
          publisher: "RM.id",
          type: "news",
          url: "https://rm.id/baca-berita/life-style/205072/gelar-proyek-sosial-di-dusun-boyong-mahasiswa-universitas-amikom-yogyakarta-kembangkan-potensi-masyarakat"
        }
      ]
    },
    {
      id: "ed-2",
      title: "Commercial Film & Video Production",
      subtitle: "Assistant Directing & Commercial Producing",
      metrics: "Commercial Ads & Music Video • YouTube Works",
      description: "Managed production logistics, visual storytelling, talent direction, and post-production for the official music video of LANGIT SORE ('Cinta Hanya Cerita Luka'), short film 'HOPE', commercial advertisement for Dokter Susu, and Public Service Announcement GEGABAH.",
      image: "",
      icon: "fa-solid fa-film",
      tags: ["Video Production", "Assistant Director", "Producer", "YouTube Works"],
      links: [
        {
          title: "LANGIT SORE — Cinta Hanya Cerita Luka (Music Video)",
          publisher: "YouTube (Assistant Director)",
          type: "video",
          url: "https://youtu.be/HlB_VhIKIqk?si=c_x-gqhtJpRT3iIo"
        },
        {
          title: "DOKTER SUSU || Susu Sapi Segar (Commercial Ads)",
          publisher: "YouTube (Producer)",
          type: "video",
          url: "https://youtu.be/XSVOtH2SstQ?si=n5FHeVIg9d0M2BiG"
        },
        {
          title: "GEGABAH — Iklan Layanan Masyarakat",
          publisher: "YouTube (Producer)",
          type: "video",
          url: "https://youtu.be/y-Snh3noCWc?si=gwSnsf3iDpfmrz9K"
        }
      ]
    },
    {
      id: "ed-3",
      title: "Academic Recognition — Top Graduate Award (Cum Laude)",
      subtitle: "Department of Communication Science, Universitas Amikom Yogyakarta",
      metrics: "GPA 3.81 • Best Graduate Honor Period 93",
      description: "Awarded Top Graduate (Wisudawan Terbaik) of the Communication Science Department at Universitas Amikom Yogyakarta with a 3.81 GPA (Cum Laude). Demonstrating rigorous foundation in applied communication research, persuasive messaging, and media ethics.",
      image: "",
      icon: "fa-solid fa-graduation-cap",
      tags: ["Academic Honor", "Top Graduate", "Communication Science", "Amikom"],
      links: [
        {
          title: "Prestasi Gemilang: Inilah Wisudawan Terbaik Wisuda Periode 93 Universitas Amikom Yogyakarta",
          publisher: "Blog Resmi Amikom",
          type: "award",
          url: "https://blog.amikom.ac.id/prestasi-gemilang-inilah-wisudawan-terbaik-wisuda-periode-93-universitas-amikom-yogyakarta/"
        }
      ]
    }
  ],

  // 🛠️ 4. CORE COMPETENCIES (SKILLS & TOOLS)
  skills: [
    {
      category: "Growth & Paid Advertising",
      icon: "trending-up",
      items: ["Meta Ads Manager", "Shopee Ads", "TikTok Ads (GMV Max)", "Multi-Channel Scaling", "A/B Creative Testing", "Audience Segmentation", "ROAS Optimization"]
    },
    {
      category: "Customer Operations & Leadership",
      icon: "users",
      items: ["Team Leadership (5 Staff)", "Objection Handling Scripts", "Lead Pipeline Management", "WhatsApp Business CRM", "Daily KPI Tracking", "Closing Rate Strategy"]
    },
    {
      category: "Visual Communication & Creative",
      icon: "layout",
      items: ["Adobe Photoshop", "Canva Pro", "CapCut Video Editing", "Sports Matchday Posters", "Social Media Graphics", "Direct-Response Copy"]
    },
    {
      category: "Public Communication & Journalism",
      icon: "file-text",
      items: ["Fact-Checking & Field Reporting", "Source Interviews", "Press Article Writing", "Assistant Video Directing", "Ethics of Journalism"]
    }
  ],

  // 📬 CONTACT & CALL TO ACTION
  contact: {
    heading: "Let's Scale Your Revenue",
    subheading: "Available for full-time growth roles, multi-channel ad management, and customer service operations consulting.",
    email: "nessakamalika@gmail.com",
    whatsapp: "+62 878-3420-3959",
    ctaText: "Chat on WhatsApp",
    ctaLink: "https://wa.me/6287834203959"
  }
};
