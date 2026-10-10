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
    bio: "Growth & Performance Marketer focused on driving sustainable revenue growth through targeted paid advertising and end-to-end funnel execution. Experienced in scaling multi-channel campaigns across Meta, TikTok, and Marketplace Ads from the ground up, delivering IDR 600M–800M/month in revenue with consistent 3.5x–5.0x ROAS on ad budgets up to IDR 200M/month. Combines analytical campaign scaling with customer operations leadership to drive conversion rates and secure an exceptional closing rate of up to 87%.",
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
    experience: true,     // 1. Career History (Experience & Education)
    certifications: true, // 2. Verified Credentials (Licenses & Certifications)
    portfolio: true,      // 3. Selected Work (Projects & Case Studies)
    skills: true,         // 4. Core Competencies (Skills & Tools)
    contact: true
  },

  // 📊 KEY PERFORMANCE METRICS
  stats: [
    { label: "Monthly Revenue Delivered", value: "IDR 600M–800M", desc: "Multi-channel store scaling" },
    { label: "Consistent Ad ROAS", value: "3.5x – 5.0x", desc: "On ad budgets up to IDR 200M/month" },
    { label: "Peak Closing Rate", value: "87%", desc: "Customer operations leadership" },
    { label: "National Competency", value: "BNSP Licensed", desc: "Digital Marketing (Valid to 2027)" }
  ],

  // 💼 1. CAREER HISTORY (EXPERIENCE & EDUCATION)
  experience: [
    {
      period: "Jun 2025 — Mar 2026",
      role: "Customer Service Team Leader & Growth Advertiser",
      company: "CV. Creaidea Innovation",
      desc: "Supervised 5 CS specialists handling 80–120 daily WhatsApp inquiries. Established structured objection-handling scripts, achieving a record closing rate of 87% and driving a 20%–25% monthly revenue lift."
    },
    {
      period: "Feb 2024 — Aug 2024",
      role: "Journalist & Field Reporter (Internship)",
      company: "Harian Republika DIY",
      desc: "Reported on regional education, public policies, and community economic development. Published 10 verified news reports across Republika Jogja and Republika TV."
    },
    {
      period: "Sep 2023 — Aug 2024",
      role: "Customer Service Specialist & Digital Marketer",
      company: "Retail Commerce & Agency",
      desc: "Executed paid campaign traffic and direct consultative WhatsApp selling, ensuring rapid response times and high customer lifetime value."
    },
    {
      period: "Graduated 2024",
      role: "Bachelor of Communication Science (S.I.Kom)",
      company: "Universitas Amikom Yogyakarta",
      desc: "Graduated Cum Laude with a 3.81 GPA. Conferred the Best Graduate honor in the Department of Communication Science."
    }
  ],

  // 📜 2. VERIFIED CREDENTIALS (LICENSES & CERTIFICATIONS)
  certifications: [
    {
      title: "National Competency Certificate in Digital Marketing",
      issuer: "National Professional Certification Board (BNSP)",
      year: "2024 – 2027",
      desc: "Reg. No. M 1962 01525 2024 / No. 78422 2431 2 0201436 2024. Official national competency certification in digital marketing strategy, campaign execution, and performance analytics.",
      image: "assets/images/sertifikat_bnsp.jpg"
    },
    {
      title: "Professional Online Marketing Vocational Training",
      issuer: "LPK GeTI Incubator",
      year: "2024",
      desc: "Intensive vocational program covering online marketplace algorithms, full-funnel customer journeys, and performance advertising metrics.",
      image: "assets/images/sertifikat_geti.jpg"
    },
    {
      title: "Best Customer Service Performance Award",
      issuer: "CV. Creaidea Innovation",
      year: "2024",
      desc: "Corporate performance recognition awarded for outstanding closing consistency, lead management discipline, and divisional team leadership.",
      image: "assets/images/cs_dashboard_1.jpeg"
    }
  ],

  // 📁 3. SELECTED WORK (PROJECTS & CASE STUDIES)
  categories: [
    { id: "featured", label: "★ Flagship Highlights (3)" },
    { id: "ads", label: "Paid Traffic & Growth" },
    { id: "cs", label: "Customer Operations" },
    { id: "design", label: "Commercial Design" },
    { id: "media", label: "Media & Journalism" },
    { id: "all", label: "All Projects (10)" }
  ],
  projects: [
    {
      id: "proj-1",
      category: "ads",
      featured: true,
      title: "Meta Ads Scaling — Herbal Health Products",
      subtitle: "Paid Traffic Acquisition & Budget Allocation",
      metrics: "3.5x – 5.0x ROAS • Budget Scaling",
      description: "Restructured ad campaigns across creative variations, custom lookalikes, and broad demographic targeting to scale revenue while maintaining stable acquisition margins.",
      image: "assets/images/ads_meta_1.jpeg",
      tags: ["Meta Ads", "ROAS", "Performance Marketing"]
    },
    {
      id: "proj-2",
      category: "ads",
      featured: true,
      title: "Shopee Marketplace Scaling — Pusat Herbal Indonesia",
      subtitle: "Search Keyword Ads & Fast Chat Operations",
      metrics: "IDR 100M Revenue • 4.8/5.0 Rating",
      description: "Managed keyword bids during peak buyer hours and maintained a 92% chat response rate, growing the store from zero to IDR 100M revenue within its first six months.",
      image: "assets/images/ads_shopee_1.png",
      tags: ["Shopee Ads", "Marketplace", "E-Commerce"]
    },
    {
      id: "proj-3",
      category: "ads",
      title: "TikTok Ads Campaign — Hap Hap Snack (FMCG)",
      subtitle: "Short-Form Video Direct Response Ads",
      metrics: "3.4% Link CTR • High Youth Engagement",
      description: "Executed TikTok video ads using user-generated content (UGC) angles and interest segmentation to drive direct consumer purchase for packaged snacks.",
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
      featured: true,
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

  // 🛠️ 4. CORE COMPETENCIES (SKILLS & TOOLS)
  skills: [
    {
      category: "Growth & Paid Advertising",
      icon: "trending-up",
      items: ["Meta Ads Manager", "Shopee Ads", "TikTok Ads", "Multi-Channel Scaling", "A/B Creative Testing", "Audience Segmentation", "ROAS Optimization"]
    },
    {
      category: "Customer Operations & Leadership",
      icon: "users",
      items: ["Team Leadership (5 Staff)", "Objection Handling Scripts", "Lead Pipeline Management", "WhatsApp Business CRM", "Daily KPI Tracking", "Closing Rate Strategy"]
    },
    {
      category: "Visual Communication & Creative",
      icon: "layout",
      items: ["Adobe Photoshop", "Canva Pro", "Sports Matchday Posters", "Social Media Graphics", "Direct-Response Copy", "Visual Composition"]
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
