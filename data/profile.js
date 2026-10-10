/**
 * ==============================================================================
 * 📦 SINGLE SOURCE OF TRUTH (DATA KLIEN)
 * ==============================================================================
 * Untuk mengganti data klien, cukup ubah data di dalam berkas ini.
 * Mesin UI/UX akan secara otomatis me-render seluruh tampilan landing page.
 * ==============================================================================
 */

window.PORTFOLIO_DATA = {
  // 🎨 PENGATURAN TEMA & PRESET ART STYLE
  theme: {
    // 🌟 5 PILIHAN ART STYLE PROFESIONAL TERKURASI:
    // • "tech-glossy"    -> Modern Apple / Linear style (Dark mode, glass, glow accent)
    // • "warm-editorial"  -> Majalah Intelektual Kinfolk/Substack (Serif, hangat, elegan)
    // • "human-minimal"   -> Notion / Stripe Press (Bersih, ramah, cerdas, terstruktur)
    // • "organic-earthy"  -> Skincare/Wellness Aesop (Palet alam, menenangkan, natural)
    // • "neo-heritage"    -> Indonesian Culture Modern (Berwibawa, mewah, aksen gold)
    style: "tech-glossy",

    // Pilihan warna aksen: "cyan" | "emerald" | "purple" | "amber" | "rose" | "gold"
    accent: "cyan",
    mode: "dark"
  },

  // 👤 INFORMASI PROFIL UTAMA
  personal: {
    name: "Nessa Kamalika",
    title: "Performance Advertiser & CS Team Leader",
    badge: "Tersedia untuk Pekerjaan Full-Time & Proyek",
    bio: "Profesional multifaset dengan keahlian terintegrasi di bidang Digital Marketing (Meta, Shopee, TikTok Ads), kepemimpinan operasional Customer Service, dan perancangan desain komunikasi visual kreatif.",
    location: "Yogyakarta, Indonesia",
    avatar: "assets/images/avatar.png",
    cvUrl: "assets/docs/cv.pdf",
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
      { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
      { name: "WhatsApp", url: "https://wa.me/6281234567890", icon: "phone" },
      { name: "Email", url: "mailto:nessa.kamalika@example.com", icon: "mail" }
    ]
  },

  // 🎛️ SAKLAR BAGIAN (Bisa dinonaktifkan dengan set false)
  sections: {
    stats: true,
    skills: true,
    portfolio: true,
    certifications: true,
    experience: true,
    contact: true
  },

  // 📊 METRIK & ANGKA PENCAPAIAN UTAMA (KEY STATS)
  stats: [
    { label: "Rata-Rata ROAS Iklan", value: "4.8x", desc: "Scale campaign multi-platform" },
    { label: "Omzet Toko Dikelola", value: "Rp 1.2M+", desc: "Shopee & Marketplace Ads" },
    { label: "Closing Rate Tim CS", value: "85%+", desc: "Optimasi flow & evaluasi harian" },
    { label: "Sertifikasi Resmi", value: "BNSP & GeTI", desc: "Digital Marketing Kompeten" }
  ],

  // 🛠️ KELOMPOK KEAHLIAN / SKILL MATRIX
  skills: [
    {
      category: "Digital Advertising",
      icon: "trending-up",
      items: ["Meta Ads Manager", "Shopee Ads", "TikTok Ads", "Scale Budget ROAS", "A/B Testing Kreatif", "Audience Segmentation"]
    },
    {
      category: "Operations & Leadership",
      icon: "users",
      items: ["CS Team Leadership", "Lead Funnel Management", "CRM & Closing Strategy", "SOP Development", "Daily Performance KPI"]
    },
    {
      category: "Creative & Graphic Design",
      icon: "layout",
      items: ["Adobe Photoshop", "Canva Pro", "Matchday Sports Poster", "Typography & Layout", "Visual Branding", "Copywriting"]
    }
  ],

  // 🏷️ KATEGORI FILTER PORTOFOLIO
  categories: [
    { id: "all", label: "Semua Proyek" },
    { id: "ads", label: "Digital Advertising" },
    { id: "cs", label: "Customer Service" },
    { id: "design", label: "Desain Grafis" }
  ],

  // 📁 DAFTAR PROYEK PORTOFOLIO
  projects: [
    {
      id: "proj-1",
      category: "ads",
      title: "Optimasi Campaign Meta Ads — Herbal Health",
      subtitle: "Skala Iklan Berbayar dengan Konsistensi ROAS Tinggi",
      metrics: "ROAS 4.6x • Spend Terkendali",
      description: "Perancangan strategi iklan Meta Ads dari fase testing audience interest, lookalike 1-3%, hingga scaling broad targeting untuk lini produk kesehatan herbal.",
      image: "assets/images/ads_meta_1.jpeg",
      tags: ["Meta Ads", "ROAS", "Performance Marketing"]
    },
    {
      id: "proj-2",
      category: "ads",
      title: "Pusat Herbal Marketplace Scaling — Shopee Ads",
      subtitle: "Dominasi Pencarian Kata Kunci & Toko Serupa",
      metrics: "Omzet Ratusan Juta • Biaya Iklan Efisien",
      description: "Manajemen iklan kata kunci dan iklan produk serupa di Shopee, menghasilkan pertumbuhan omzet penjualan organik dan berbayar yang stabil setiap bulannya.",
      image: "assets/images/ads_shopee_1.png",
      tags: ["Shopee Ads", "Marketplace", "E-Commerce"]
    },
    {
      id: "proj-3",
      category: "ads",
      title: "TikTok Ads Campaign — F&B Hap Hap Snack",
      subtitle: "Creative-Driven Ads untuk FMCG Snack",
      metrics: "CTR 3.4% • Konversi Tinggi",
      description: "Eksekusi kampanye TikTok Ads berbasis konten video UGC dan penargetan audiens anak muda untuk produk camilan siap santap.",
      image: "assets/images/ads_tiktok_1.png",
      tags: ["TikTok Ads", "F&B", "Short Video"]
    },
    {
      id: "proj-4",
      category: "cs",
      title: "Monitoring & Supervisi Tim Customer Service",
      subtitle: "Dashboard Harian Penanganan Lead & Closing Rate",
      metrics: "Closing Rate 85%+ • Zero Lead Leakage",
      description: "Kepemimpinan operasional tim CS: pembagian jadwal piket, perancangan SOP penanganan komplain, serta evaluasi rasio redirect lead dari kampanye iklan ke WhatsApp.",
      image: "assets/images/cs_dashboard_1.jpeg",
      tags: ["Leadership", "CRM", "Closing Rate"]
    },
    {
      id: "proj-5",
      category: "design",
      title: "Desain Poster Premier League Matchday",
      subtitle: "Visual Komunikasi Olahraga Dinamis & Energik",
      metrics: "High Resolution • Print & Digital Ready",
      description: "Eksplorasi tipografi bold, manipulasi pencahayaan foto atlet, dan komposisi grafis matchday berstandar klub sepak bola profesional.",
      image: "assets/images/design_poster_1.jpg",
      tags: ["Graphic Design", "Photoshop", "Sports Poster"]
    },
    {
      id: "proj-6",
      category: "design",
      title: "Desain Poster Juara — Triple Winner Stadium",
      subtitle: "Komposisi Perayaan Juara Multi-Kompetisi",
      metrics: "Emas & Efek Cahaya Dinamis",
      description: "Perancangan grafis perayaan kemenangan kejuaraan dengan palet warna emas mewah, tipografi hirarkis, dan efek visual atmosfer stadion.",
      image: "assets/images/design_poster_2.jpg",
      tags: ["Branding", "Creative Composition", "Editorial"]
    }
  ],

  // 📜 SERTIFIKASI KOMPETENSI RESMI
  certifications: [
    {
      title: "Sertifikat Kompetensi Digital Marketing (BNSP)",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      year: "2024",
      desc: "Lulus uji kompetensi standar industri nasional untuk perancangan dan eksekusi pemasaran digital terintegrasi.",
      image: "assets/images/sertifikat_bnsp.jpg"
    },
    {
      title: "Pelatihan Pemasaran Daring Profesional (GeTI)",
      issuer: "LPK GeTI Incubator",
      year: "2024",
      desc: "Pelatihan intensif manajemen toko daring, optimasi funnel pemasaran, dan analitik performa.",
      image: "assets/images/sertifikat_geti.jpg"
    }
  ],

  // 💼 RIWAYAT PENGALAMAN KERJA / TIMELINE
  experience: [
    {
      period: "2023 — Sekarang",
      role: "Performance Advertiser & CS Team Leader",
      company: "Digital Commerce & Agency",
      desc: "Bertanggung jawab atas alokasi budget iklan digital (Meta, Shopee, TikTok) dan memimpin tim Customer Service dalam memaksimalkan konversi penjualan dari lead yang masuk."
    },
    {
      period: "2021 — 2023",
      role: "Digital Marketer & Creative Designer",
      company: "Studio Kreatif Mandiri",
      desc: "Menangani perancangan aset grafis media sosial, pembuatan materi promosi, dan uji coba kampanye iklan berbayar untuk beragam UMKM lokal."
    }
  ],

  // 📬 AJAKAN BERTINDAK (CALL TO ACTION / CONTACT)
  contact: {
    heading: "Mari Berkolaborasi!",
    subheading: "Saya selalu terbuka untuk mendiskusikan peluang kerja penuh waktu, proyek iklan berbayar, atau konsultasi optimasi konversi tim Anda.",
    email: "nessa.kamalika@example.com",
    whatsapp: "+62 812-3456-7890",
    ctaText: "Hubungi via WhatsApp",
    ctaLink: "https://wa.me/6281234567890"
  }
};
