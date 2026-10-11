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

  // 📁 3. WORK SHOWCASE (3 CORE COMMERCIAL PILLARS)
  categories: [
    { id: "ads", label: "🚀 Paid Traffic & Ads Growth" },
    { id: "cs", label: "💬 Customer Operations & CRM" },
    { id: "design", label: "🎨 Commercial Design & Creative" }
  ],
  projects: [
    // --- PILAR 1: PAID TRAFFIC & ADS GROWTH (5 PROYEK) ---
    {
      id: "proj-1",
      category: "ads",
      featured: true,
      title: "Meta Ads Scaling — Herbal Health Products",
      subtitle: "CV Creaidea Innovation • Scale & Budget Allocation",
      metrics: "3.5x–10.0x ROAS • IDR 600M–800M/Mo",
      description: "Mengelola 20–35 kampanye harian pada 3–5 akun Meta Ads Manager dengan rata-rata alokasi budget bulanan hingga Rp200 juta. Menerapkan segmentasi broad, lookalike 1–3%, dan selective budget scaling yang menghasilkan omzet stabil Rp600M–800M/bulan.",
      image: "assets/images/ads_meta_1.jpeg",
      tags: ["Meta Ads", "Selective Scaling", "ROAS", "Performance Marketing"]
    },
    {
      id: "proj-2",
      category: "ads",
      featured: true,
      title: "Multi-Brand Agency Advertising — 7 Client Brands",
      subtitle: "CV. Hasbuna Artha Niaga • Agency Advertiser",
      metrics: "7 Client Brands • TikTok GMV Max & Marketplace",
      description: "Mengelola 7 brand klien dari industri fashion, herbal, dan packaging dari 0. Merancang forecasting budget, eksekusi TikTok Ads (GMV Max) dan Marketplace Ads dengan pencapaian ROAS 3.5x sesuai target proyeksi brand.",
      image: "assets/images/ads_tiktok_1.png",
      tags: ["Agency", "TikTok Ads", "GMV Max", "Marketplace Ads", "Client Management"]
    },
    {
      id: "proj-3",
      category: "ads",
      featured: true,
      title: "E-Commerce Founder & Cross-Border Meta Ads",
      subtitle: "Pusat Herbal Indonesia • Domestic & Global Market",
      metrics: "Rp100M 6-Mo Shopee • Rp300M+ Meta Ads",
      description: "Mendirikan operasional toko Shopee dari 0 hingga membukukan omzet Rp100 juta dalam 6 bulan pertama. Menjalankan kampanye Meta Ads untuk pasar Indonesia dan pasar internasional dengan akumulasi omzet Rp300 juta+, serta ekspansi cabang ke-2 (Pusat Herbal Asia).",
      image: "assets/images/ads_shopee_1.png",
      tags: ["Shopee Ads", "International Ads", "E-Commerce", "Meta Ads", "Growth"]
    },
    {
      id: "proj-4",
      category: "ads",
      title: "Selective Scaling Multi-Channel Advertising",
      subtitle: "Chefpreneur Vania Wijaya • Growth Advertiser",
      metrics: "30% Sales Lift • Selective Scaling Strategy",
      description: "Merancang strategi kampanye digital terpadu melalui Meta Ads, TikTok Ads, dan Marketplace Ads (Shopee & Tokopedia). Menerapkan strategi selective scaling untuk mengunci ROAS stabil sepanjang bulan dan meningkatkan penjualan pelanggan baru sebesar 30%.",
      image: "assets/images/ads_meta_1.jpeg",
      tags: ["Selective Scaling", "Multi-Channel", "TikTok Ads", "Shopee Ads"]
    },
    {
      id: "proj-5",
      category: "ads",
      title: "Lead Generation & WhatsApp Funnel Booking",
      subtitle: "Dewanta Trans Travel • A/B Creative Testing",
      metrics: "80% Conversion Rate • A/B Creative Split",
      description: "Mengeksekusi kampanye Meta Ads untuk reservasi travel dan carter pariwisata. Menjalankan pengujian A/B materi kreatif harian (5–10 konten) serta perbandingan form vs tombol WhatsApp yang mendongkrak tingkat konversi dari 65% menjadi 80%.",
      image: "assets/images/ads_dewanta.jpeg",
      tags: ["Lead Gen", "Meta Ads", "A/B Testing", "WhatsApp Funnel", "Tourism"]
    },

    // --- PILAR 2: CUSTOMER OPERATIONS & CRM (4 PROYEK) ---
    {
      id: "proj-6",
      category: "cs",
      featured: true,
      title: "Supervisi Tim 5 CS & Rekor Closing Rate 87%",
      subtitle: "CV Creaidea Innovation • Best CS Performance 2024",
      metrics: "87% Closing Rate • Rp200M–300M Revenue Lift",
      description: "Memimpin 5 staf spesialis CS yang menangani 80–120 pesan WhatsApp harian. Menyusun modul objection handling untuk harga dan pengiriman, mencapai rekor closing rate divisi 87%, meraih penghargaan Best Customer Service Performance 2024, dan menaikkan omzet divisi 20–25%.",
      image: "assets/images/cs_dashboard_1.jpeg",
      tags: ["Leadership", "Closing Rate", "Objection Handling", "Revenue Lift", "WhatsApp CRM"]
    },
    {
      id: "proj-7",
      category: "cs",
      featured: true,
      title: "Marketplace Chat SLA & Order Fulfillment",
      subtitle: "Pusat Herbal Indonesia • E-Commerce CS Operations",
      metrics: "92% Chat Response • 4.8/5.0 Store Rating",
      description: "Mengelola alur customer service toko e-commerce, memproses 20+ pesanan setiap hari dengan respons chat 92% dan kepuasan rating toko 4.8/5.0. Bertanggung jawab atas stock control, fulfillment cepat, dan koordinasi logistik pengiriman se-Indonesia.",
      image: "assets/images/ads_shopee_1.png",
      tags: ["Marketplace SLA", "Order Fulfillment", "Customer Retention", "Logistics"]
    },
    {
      id: "proj-8",
      category: "cs",
      title: "Penyusunan Shift Timetable & Alur Kerja 5 Staf",
      subtitle: "Whiteboard Task Allocation & Zero Inquiry Bottlenecks",
      metrics: "0 Chat Bottlenecks • 5 Staff Shifts",
      description: "Merancang jadwal piket shift operasional dan timetable tindak lanjut (follow-up) berbasis whiteboard koordinasi. Memastikan respon cepat pada jam sibuk traffic iklan berbayar tanpa ada lead yang terabaikan.",
      image: "assets/images/cs_timetable.jpeg",
      tags: ["Timetable", "Workflow SOP", "Resource Planning", "Team Operations"]
    },
    {
      id: "proj-9",
      category: "cs",
      title: "Validasi Database Pelanggan & Rekonsiliasi Logistik",
      subtitle: "Chefpreneur Vania Wijaya • Data Accuracy & CRM",
      metrics: "95% Data Accuracy • 30–50 Orders/Day",
      description: "Mengelola penginputan dan verifikasi 30–50 data transaksi pelanggan per hari ke sistem logistik dan jasa kirim. Menjaga akurasi data hingga 95% guna menekan tingkat retur paket dan mempercepat perputaran pesanan.",
      image: "assets/images/cs_dashboard_1.jpeg",
      tags: ["Data Validation", "CRM Entry", "Logistics", "Operational Accuracy"]
    },

    // --- PILAR 3: COMMERCIAL DESIGN & CREATIVE (4 PROYEK) ---
    {
      id: "proj-10",
      category: "design",
      featured: true,
      title: "Produksi Materi Iklan Harian (Ads Visual & Video)",
      subtitle: "High-Converting Direct Response Creative Assets",
      metrics: "8–16 Creatives/Day • Image & Short Video",
      description: "Memproduksi 8–16 materi visual dan video pendek setiap hari menggunakan Adobe Photoshop, Canva, dan CapCut untuk kebutuhan A/B testing kampanye iklan digital berbayar (Meta & TikTok Ads). Mengutamakan visual hook kuat dan readability optimal.",
      image: "assets/images/design_poster_1.jpg",
      tags: ["Ads Creative", "Photoshop", "Direct Response", "CapCut", "A/B Testing"]
    },
    {
      id: "proj-11",
      category: "design",
      featured: true,
      title: "Premier League Matchday Sports Commercial Poster",
      subtitle: "Athletic Editorial Graphic Design & Typography",
      metrics: "High-Resolution • Print & Social Media Ready",
      description: "Desain poster komersial sepak bola yang mengeksplorasi hierarki tipografi tegas, efek pencahayaan atletik dramatis, dan komposisi visual bertenaga tinggi untuk materi promosi laga kompetisi olahraga.",
      image: "assets/images/design_poster_1.jpg",
      tags: ["Graphic Design", "Photoshop", "Sports Poster", "Typography"]
    },
    {
      id: "proj-12",
      category: "design",
      title: "Championship Celebration Poster — Triple Winner Stadium",
      subtitle: "Multi-Competition Trophy Celebration Artwork",
      metrics: "Gold Palette Grading • Stadium Visual Depth",
      description: "Karya seni visual perayaan gelar juara turnamen dengan perpaduan tata cahaya stadion megah, grading warna emas eksklusif, dan penataan elemen grafis monumental yang memancarkan aura kemenangan.",
      image: "assets/images/design_poster_2.jpg",
      tags: ["Visual Art", "Gold Grading", "Event Branding", "Photoshop"]
    },
    {
      id: "proj-13",
      category: "design",
      title: "Champions Borcelle Football Club Poster",
      subtitle: "Minimalist Club Honor & Identity Artwork",
      metrics: "Vector & Photo Manipulation • Social Media",
      description: "Komposisi visual modern menggabungkan elemen vektor minimalis dan manipulasi foto atlet untuk perayaan kemenangan klub sepak bola Borcelle dalam format media sosial resmi.",
      image: "assets/images/design_poster_3.jpg",
      tags: ["Vector Layout", "Sports Branding", "Poster", "Creative"]
    }
  ],

  // 📰 EDITORIAL, PUBLISHED MEDIA & ACADEMIC WORKS (SEKSI KHUSUS SOCIAL PROOF)
  editorialProjects: [
    {
      id: "ed-1",
      title: "Published Field Journalism — Harian Republika & RM.id",
      subtitle: "10 Verified Investigative Articles & Regional Reports",
      metrics: "10 Published Reports • Republika Jogja & TV",
      description: "Melakukan investigasi lapangan, riset narasumber berimbang, dan mempublikasikan 10 liputan berita resmi di media nasional Republika Jogja, Republika TV, dan RM.id mencakup isu relokasi pedagang Malioboro, kebijakan pendidikan tinggi, dan aksi solidaritas kemanusiaan.",
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
      description: "Mengelola logistik produksi, storytelling visual, penyutradaraan bakat, dan pascaproduksi untuk video musik resmi LANGIT SORE ('Cinta Hanya Cerita Luka'), film pendek 'HOPE', iklan komersial Dokter Susu Sapi, dan Iklan Layanan Masyarakat GEGABAH.",
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
      title: "Academic Recognition — Best Graduate Award (Cum Laude)",
      subtitle: "Department of Communication Science, Universitas Amikom Yogyakarta",
      metrics: "GPA 3.81 • Best Graduate Honor Period 93",
      description: "Dianugerahi predikat Wisudawan Terbaik Program Studi Ilmu Komunikasi Universitas Amikom Yogyakarta dengan IPK 3.81 (Cum Laude). Menunjukkan penguasaan mendalam dalam riset komunikasi terapan, analisis pesan persuasif, dan etika profesi.",
      image: "",
      icon: "fa-solid fa-graduation-cap",
      tags: ["Academic Honor", "Best Graduate", "Communication Science", "Amikom"],
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
