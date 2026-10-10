/**
 * ==============================================================================
 * 📦 SINGLE SOURCE OF TRUTH (CLIENT DATA)
 * ==============================================================================
 * Nessa Kamalika — Professional Portfolio Profile
 * Clear, objective, data-backed professional English.
 * ==============================================================================
 */

window.PORTFOLIO_DATA = {
  // 🎨 THEME & STYLE CONFIGURATION
  theme: {
    style: "tech-glossy", // "tech-glossy" | "warm-editorial" | "human-minimal" | "organic-earthy" | "neo-heritage"
    accent: "cyan",       // "cyan" | "emerald" | "purple" | "amber" | "rose" | "gold"
    mode: "dark"
  },

  // 👤 PERSONAL & CONTACT DETAILS
  personal: {
    name: "Nessa Kamalika",
    title: "Performance Advertiser & Customer Service Team Leader",
    badge: "Available for Full-Time Roles & Growth Consulting",
    bio: "Digital marketing and customer operations practitioner specializing in paid advertising (Meta, Shopee, TikTok Ads) and Customer Service sales closing. Experienced in managing ad spend, supervising teams of 5 CS specialists, and turning inbound leads into verified revenue.",
    location: "Yogyakarta, Indonesia",
    avatar: "assets/images/avatar.png",
    cvUrl: "assets/docs/cv.pdf",
    socials: [
      { name: "WhatsApp", url: "https://wa.me/6287834203959", icon: "phone" },
      { name: "Email", url: "mailto:nessakamalika@gmail.com", icon: "mail" },
      { name: "LinkedIn", url: "https://linkedin.com/in/nessa-kamalika", icon: "linkedin" }
    ]
  },

  // 🎛️ SECTION VISIBILITY TOGGLES
  sections: {
    stats: true,
    skills: true,
    portfolio: true,
    certifications: true,
    experience: true,
    contact: true
  },

  // 📊 KEY PERFORMANCE METRICS (VERIFIED HARD DATA)
  stats: [
    { label: "Average Ad ROAS", value: "4.8x – 6.2x", desc: "Meta & TikTok Ads campaign scaling" },
    { label: "Store Revenue Generated", value: "IDR 100M+", desc: "Shopee Ads Pusat Herbal (First 6 months)" },
    { label: "CS Team Closing Rate", value: "87%", desc: "Department record (75% standard benchmark)" },
    { label: "National Certification", value: "BNSP Certified", desc: "Digital Marketing License valid to 2027" }
  ],

  // 🛠️ CORE EXPERTISE & TOOL STACK
  skills: [
    {
      category: "Paid Advertising & Traffic",
      icon: "trending-up",
      items: ["Meta Ads Manager", "Shopee Ads", "TikTok Ads", "A/B Creative Testing", "Audience Segmentation", "Budget Scaling", "ROAS Optimization"]
    },
    {
      category: "Customer Service & Operations",
      icon: "users",
      items: ["Team Leadership (5 Staff)", "Objection Handling Scripts", "Lead Pipeline Management", "WhatsApp Business CRM", "Daily KPI Tracking", "Closing Rate Strategy"]
    },
    {
      category: "Visual Design & Copywriting",
      icon: "layout",
      items: ["Adobe Photoshop", "Canva Pro", "Sports Matchday Posters", "Social Media Graphics", "Direct-Response Copy", "Visual Composition"]
    },
    {
      category: "Public Communication & Media",
      icon: "file-text",
      items: ["Fact-Checking & Field Reporting", "Source Interviews", "Press Article Writing", "Assistant Video Directing", "Ethics of Journalism"]
    }
  ],

  // 🏷️ PORTFOLIO FILTER CATEGORIES
  categories: [
    { id: "all", label: "All Work" },
    { id: "ads", label: "Paid Advertising" },
    { id: "cs", label: "Customer Service" },
    { id: "design", label: "Graphic Design" },
    { id: "media", label: "Media & Journalism" }
  ],

  // 📁 REAL PROJECT CASE REPOSITORIES
  projects: [
    {
      id: "proj-1",
      category: "ads",
      title: "Meta Ads Scaling — Herbal Health Products",
      subtitle: "Paid Traffic Management & Budget Allocation",
      metrics: "ROAS 4.6x – 6.2x • Managed Daily Spend",
      description: "Restructured ad sets into creative testing (video vs static), 1–3% lookalike audiences, and broad geographic targeting to scale sales while maintaining positive return on ad spend.",
      image: "assets/images/ads_meta_1.jpeg",
      tags: ["Meta Ads", "ROAS", "Performance Marketing"]
    },
    {
      id: "proj-2",
      category: "ads",
      title: "Shopee Marketplace Store Launch — Pusat Herbal Indonesia",
      subtitle: "Search Keyword Ads & Fast Chat Operations",
      metrics: "IDR 100M Revenue • 4.8/5.0 Store Rating",
      description: "Managed keyword bids during peak buyer hours and maintained a 92% chat response rate, growing the store from zero to IDR 100M revenue within its first six months.",
      image: "assets/images/ads_shopee_1.png",
      tags: ["Shopee Ads", "Marketplace", "E-Commerce"]
    },
    {
      id: "proj-3",
      category: "ads",
      title: "TikTok Ads Campaign — Hap Hap Snack (F&B)",
      subtitle: "Short-Form Video Ad Campaign for FMCG",
      metrics: "3.4% Link CTR • High Youth Engagement",
      description: "Executed TikTok video ads using user-generated content (UGC) formats and interest targeting to drive direct consumer purchase for packaged snacks.",
      image: "assets/images/ads_tiktok_1.png",
      tags: ["TikTok Ads", "FMCG", "Short Video"]
    },
    {
      id: "proj-4",
      category: "ads",
      title: "Meta Ads Lead Generation — Dewanta Trans Tourism",
      subtitle: "Private Charter & Travel Booking Inquiries",
      metrics: "Low Cost per Lead • Direct WhatsApp Redirect",
      description: "Targeted family and group vacationers in regional cities with direct WhatsApp inquiry ads for tourism shuttle and private transportation services.",
      image: "assets/images/ads_dewanta.jpeg",
      tags: ["Meta Ads", "Lead Generation", "Tourism"]
    },
    {
      id: "proj-5",
      category: "cs",
      title: "Customer Service Team Supervision — CV Creaidea Innovation",
      subtitle: "Daily Lead Management & Closing Optimization",
      metrics: "87% Closing Rate • 25% Monthly Revenue Lift",
      description: "Supervised 5 CS specialists handling 80–120 daily WhatsApp inquiries. Developed structured objection-handling scripts to answer common pricing and shipping questions.",
      image: "assets/images/cs_dashboard_1.jpeg",
      tags: ["Leadership", "Closing Rate", "SOP"]
    },
    {
      id: "proj-6",
      category: "cs",
      title: "Operational Timetable & Shift Coordination",
      subtitle: "Workflow Management for 5 CS Specialists",
      metrics: "Zero Unanswered Chats • 92% Response Rate",
      description: "Designed shift schedules, follow-up timetables, and whiteboard task allocations to prevent inquiry bottlenecks during peak traffic hours.",
      image: "assets/images/cs_timetable.jpeg",
      tags: ["Workflow", "Operations", "Team Management"]
    },
    {
      id: "proj-7",
      category: "design",
      title: "Premier League Matchday Sports Poster",
      subtitle: "Athletic Editorial Graphic Design",
      metrics: "High-Resolution • Print & Social Media Ready",
      description: "Commercial sports poster exploring high-contrast bold typography, dynamic athlete lighting, and professional football match announcement layout.",
      image: "assets/images/design_poster_1.jpg",
      tags: ["Graphic Design", "Photoshop", "Sports Poster"]
    },
    {
      id: "proj-8",
      category: "design",
      title: "Championship Celebration Poster — Triple Winner Stadium",
      subtitle: "Multi-Competition Trophy Celebration Artwork",
      metrics: "Gold Palette Grading • Event Branding",
      description: "Commemorative poster artwork blending stadium lighting, celebratory gold tones, and clear typographic hierarchy for football tournament winners.",
      image: "assets/images/design_poster_2.jpg",
      tags: ["Branding", "Creative Composition", "Editorial"]
    },
    {
      id: "proj-9",
      category: "design",
      title: "Champions Borcelle Football Club Poster",
      subtitle: "Minimalist Club Honor Artwork",
      metrics: "Official Social Media Format",
      description: "Clean vector layout and athlete photo manipulation celebrating tournament victory for Borcelle Football Club.",
      image: "assets/images/design_poster_3.jpg",
      tags: ["Visual Design", "Sports Branding", "Poster"]
    },
    {
      id: "proj-10",
      category: "media",
      title: "Published Field Journalism — Harian Republika",
      subtitle: "10 Verified Articles on Education, Economy & Social Affairs",
      metrics: "10 Published Reports • Republika Jogja & TV",
      description: "Conducted field interviews, source verification, and published 10 articles in Harian Republika, covering regional economic relocation, educational conferences, and public affairs.",
      image: "assets/images/sertifikat_bnsp.jpg",
      tags: ["Journalism", "Field Research", "Published Media"]
    }
  ],

  // 📜 PROFESSIONAL LICENSES & ACCREDITATIONS
  certifications: [
    {
      title: "National Competency Certificate in Digital Marketing",
      issuer: "National Professional Certification Board (BNSP)",
      year: "2024 – 2027",
      desc: "Registration No. M 1962 01525 2024. Official national certification verifying competencies in integrated digital marketing strategy and execution.",
      image: "assets/images/sertifikat_bnsp.jpg"
    },
    {
      title: "Professional Online Marketing Training Certificate",
      issuer: "LPK GeTI Incubator",
      year: "2024",
      desc: "Completed professional vocational training in marketplace store optimization, marketing funnels, and performance reporting.",
      image: "assets/images/sertifikat_geti.jpg"
    }
  ],

  // 💼 WORK & EDUCATION HISTORY
  experience: [
    {
      period: "Jun 2025 — Mar 2026",
      role: "Customer Service Team Leader & Advertiser",
      company: "CV. Creaidea Innovation",
      desc: "Supervised 5 CS specialists, tracked daily closing metrics (achieving a record 87% rate), and managed ad spend for health and wellness products."
    },
    {
      period: "Feb 2024 — Aug 2024",
      role: "Journalist & Field Reporter (Internship)",
      company: "Harian Republika DIY",
      desc: "Reported on regional education, social issues, and public policies. Published 10 articles on the national Republika news platform."
    },
    {
      period: "Sep 2023 — Aug 2024",
      role: "Customer Service Specialist & Digital Marketer",
      company: "Retail Commerce & Agency",
      desc: "Managed customer consultations on WhatsApp and chat marketplaces, with direct responsibility for order closing and repeat purchases."
    },
    {
      period: "Graduated 2024",
      role: "Bachelor of Communication Science (S.I.Kom)",
      company: "Universitas Amikom Yogyakarta",
      desc: "Graduated Cum Laude with a 3.81 GPA. Recognized as Best Graduate in the Department of Communication Science."
    }
  ],

  // 📬 DIRECT CALL TO ACTION
  contact: {
    heading: "Let's Work Together",
    subheading: "Open to full-time roles, paid advertising management, and customer service operations consulting.",
    email: "nessakamalika@gmail.com",
    whatsapp: "+62 878-3420-3959",
    ctaText: "Chat on WhatsApp",
    ctaLink: "https://wa.me/6287834203959"
  }
};
