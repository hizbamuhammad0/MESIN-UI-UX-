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

  // 💼 1. CAREER HISTORY (EXPERIENCE & EDUCATION) — 1 BISNIS SENDIRI + 6 PENGALAMAN KERJA + PENDIDIKAN
  experience: [
    // 🏢 1 BISNIS SENDIRI
    {
      period: "Mar 2026 — Sekarang",
      role: "Founder & Head of Operations (Bisnis Sendiri)",
      company: "Pusat Herbal Indonesia (E-Commerce Shopee)",
      desc: "Mendirikan dan memimpin operasional e-commerce obat herbal di platform Shopee hingga meraih omzet Rp100.000.000 dalam 6 bulan pertama, serta mempersiapkan ekspansi cabang ke-2 (Pusat Herbal Asia). Merancang strategi digital marketing Meta Ads pasar domestik dan internasional dengan akumulasi omzet penjualan ~Rp300.000.000, serta mempertahankan chat respons Shopee 92% dan rating toko 4.8/5.0."
    },
    // 💼 6 PENGALAMAN KERJA
    {
      period: "Jul 2026 — Sep 2026",
      role: "Advertiser (Agency)",
      company: "CV. Hasbuna Artha Niaga",
      desc: "Mengelola 7 brand klien dari berbagai industri (fashion, F&B, herbal, packaging). Mengeksekusi kampanye Marketplace Ads dan TikTok Ads (GMV Max) dari 0 hingga menghasilkan kestabilan performa ROAS 3.5x sesuai target proyeksi KPI brand."
    },
    {
      period: "Des 2025 — Feb 2026",
      role: "Advertiser (Freelance)",
      company: "Dewanta Trans Travel",
      desc: "Merancang dan mengeksekusi strategi marketing kampanye digital melalui Meta Ads yang meningkatkan penjualan pelanggan baru sebesar 20%. Melakukan A/B testing materi kreatif harian (5–10 konten) dan pengujian CTA form vs WhatsApp yang meningkatkan conversion rate dari 65% menjadi 80%."
    },
    {
      period: "Jun 2025 — Mar 2026",
      role: "Leader Customer Service",
      company: "CV. Creaidea Innovation Yogyakarta",
      desc: "Mengarahkan dan memimpin 5 orang staf Customer Service, merancang strategi SOP penjualan baru, serta mengontrol anggaran operasional divisi. Meningkatkan penjualan bulanan divisi secara konsisten sebesar 20%–25% (peningkatan omzet Rp200–Rp300 juta/bulan)."
    },
    {
      period: "Sep 2024 — Jun 2025",
      role: "Advertiser",
      company: "CV. Creaidea Innovation Yogyakarta",
      desc: "Mengelola 20–35 kampanye aktif harian pada 3–5 akun Meta Ads dengan rata-rata alokasi budget bulanan Rp200 juta yang menghasilkan omzet terverifikasi Rp600–Rp800 juta/bulan. Mencapai performa ROAS hingga 50x pada kampanye tertentu melalui selective budget scaling."
    },
    {
      period: "Sep 2023 — Agu 2024",
      role: "Customer Service Specialist",
      company: "CV. Creaidea Innovation Yogyakarta",
      desc: "Mengelola 80–120 customer inquiries per hari via WhatsApp dan telepon. Meraih penghargaan bergengsi 'Best Customer Service Performance 2024' dengan perolehan omzet tertinggi (Rp400–Rp600 juta) dan closing rate tertinggi divisi mencapai 87%."
    },
    {
      period: "Feb 2024 — Agu 2024",
      role: "Reporter (Magang)",
      company: "Harian Republika DIY",
      desc: "Meliput dan menulis berita sebanyak 10–15 pemberitaan investigasi lapangan dan berita aktual terbit resmi di media nasional Republika Jogja, Republika TV, dan RM.id sesuai kode etik jurnalistik dan standar redaksional."
    },
    // 🎓 PENDIDIKAN
    {
      period: "Sep 2021 — Des 2024",
      role: "S1 Ilmu Komunikasi (S.I.Kom) — Wisudawan Terbaik",
      company: "Universitas Amikom Yogyakarta",
      desc: "Lulus Predikat Cum Laude dengan IPK 3.81 / 4.00 dan dinobatkan sebagai Wisudawan Terbaik Periode 93 Universitas Amikom Yogyakarta dengan konsentrasi Media Komunikasi, Produksi Kreatif, dan Periklanan."
    }
  ],

  // 📜 2. VERIFIED CREDENTIALS (LICENSES & CERTIFICATIONS — HANYA 2 LISENSI RESMI)
  certifications: [
    {
      title: "Sertifikat Profesi Digital Marketing (BNSP)",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      year: "2024 – 2027",
      desc: "No. Reg: M 1962 01525 2024 / No. Sertifikat: 78422 2431 2 0201436 2024. Lisensi kompetensi profesi resmi tingkat nasional dalam strategi digital marketing, analisis data, optimasi ROAS, dan eksekusi kampanye online.",
      image: "assets/images/sertifikat_bnsp.jpg"
    },
    {
      title: "Sertifikat Kompetensi Klaster Pemasaran Daring",
      issuer: "LSP P1 LPK GeTI Incubator",
      year: "2024 – 2026",
      desc: "Pelatihan dan sertifikasi kompetensi intensif dalam menjalankan aktivitas pemasaran daring, pengelolaan produk digital, strategi penjualan online, hingga optimalisasi platform e-commerce.",
      image: "assets/images/sertifikat_geti.jpg"
    }
  ],

  // 📁 3. WORK SHOWCASE (ALL PORTFOLIO & CATEGORY LAYERS)
  categories: [
    { id: "all", label: "✨ All Portfolio" },
    { id: "ads", label: "🚀 Advertiser" },
    { id: "leader", label: "👑 Leader CS" },
    { id: "cs", label: "💬 Customer Service" },
    { id: "design", label: "🎨 Desain Grafis" }
  ],
  projects: [
    // =========================================================================
    // 👑 LAYER LEADER CS (TERMASUK OMSET 700-800 JUTA & SUPERVISI TIM)
    // =========================================================================
    {
      id: "leader-1",
      category: "leader",
      featured: true,
      title: "Laporan Performa Harian Omzet ROAS Tim CS — OMSET 700-800 JUTA",
      subtitle: "CV. Creaidea Innovation • Rekapitulasi Finansial & ROAS Tim CS",
      metrics: "Omzet Rp 746 Juta • 3.612 Closing • ROAS 2.8x",
      description: "Spreadsheet rekapitulasi performa harian operasional tim CS yang dipimpin Nessa: Total alokasi budget iklan Rp267 Juta menghasilkan 6.190 inbound lead, 3.612 closing transaksi sukses, total omzet terverifikasi Rp746 Juta (range 700-800 Juta), dan efisiensi ROAS divisi 2.8x.",
      image: "assets/images/omset_700_800_juta.jpeg",
      tags: ["Leader CS", "Omzet 700-800 Juta", "6.190 Leads", "3.612 Closing", "ROAS 2.8x"]
    },
    {
      id: "leader-2",
      category: "leader",
      featured: true,
      title: "Dashboard Monitoring Lead Closing & Evaluasi Harian CS",
      subtitle: "CV. Creaidea Innovation • Lead Tracking & Objection Matrix",
      metrics: "Supervisi 5 Staf CS • Closing 87% Peak",
      description: "Sistem pelaporan performa harian tim CS: evaluasi individual per staf CS (Dinda, Feby, Lova, Billa), analisa jam prime time lead masuk, breakdown kendala lead per produk, dan pemetaan objection handling harga & pengiriman.",
      image: "assets/images/cs_dashboard_1.jpeg",
      tags: ["Team Leadership", "Lead Analysis", "Objection Handling", "Closing Matrix"]
    },
    {
      id: "leader-3",
      category: "leader",
      title: "Papan Whiteboard Time Table & Pembagian Shift Operasional Tim",
      subtitle: "CV. Creaidea Innovation • SOP & Shift Management",
      metrics: "0 Delay Reporting • Zero Missed Chat",
      description: "Pengaturan jadwal shift kerja tim CS, alokasi penanganan live chat, target omzet harian divisi, serta sinkronisasi alur redirect kontak lead masuk berbasis whiteboard fisik di ruang operasional.",
      image: "assets/images/cs_timetable.jpeg",
      tags: ["Operational Management", "Shift Timetable", "SOP Discipline"]
    },
    {
      id: "leader-4",
      category: "leader",
      title: "Briefing Strategi Penjualan & Target Harian Tim CS (Whiteboard)",
      subtitle: "CV. Creaidea Innovation • Daily Motivational & Target Alignment",
      metrics: "Target Harian Tercapai • Tim 5 Staf",
      description: "Dokumentasi briefing harian di whiteboard kantor: evaluasi target penjualan harian, penentuan strategi closing produk prioritas, dan evaluasi respon pelanggan.",
      image: "assets/images/Dokumentasi_Koordinasi_Tim_Whiteboard_1.jpeg",
      tags: ["Team Briefing", "Sales Strategy", "Leadership"]
    },
    {
      id: "leader-5",
      category: "leader",
      title: "Catatan Performa Mingguan & Pembagian Lead Tim CS (Whiteboard)",
      subtitle: "CV. Creaidea Innovation • Weekly Review & Follow-Up System",
      metrics: "+20% - 25% Revenue Growth",
      description: "Dokumentasi rekapitulasi mingguan dan alur follow-up lead yang tertunda, memastikan setiap inquiry tertangani tuntas dengan konversi optimal.",
      image: "assets/images/Dokumentasi_Koordinasi_Tim_Whiteboard_3.jpeg",
      tags: ["Weekly Review", "Lead Allocation", "Performance Tracking"]
    },

    // =========================================================================
    // 💬 LAYER CUSTOMER SERVICE (TERMASUK BEST CS PERFORMANCE AWARD)
    // =========================================================================
    {
      id: "cs-1",
      category: "cs",
      featured: true,
      title: "Best Customer Service Performance Award 2024",
      subtitle: "CV. Creaidea Innovation • Corporate Performance Recognition",
      metrics: "Omzet Rp 400M–600M • Closing Rate 87%",
      description: "Penghargaan resmi atas pencapaian performa Customer Service terbaik tahun 2024 di CV. Creaidea Innovation: membukukan total omzet tertinggi (Rp400–Rp600 juta) dan rekor tingkat closing rate tertinggi mencapai 87% (target divisi 75%).",
      image: "assets/images/cs_dashboard_1.jpeg",
      tags: ["Best CS Award", "Closing Rate 87%", "Omzet Rp400M-600M", "High Performer"]
    },
    {
      id: "cs-2",
      category: "cs",
      featured: true,
      title: "Bukti Chat Apresiasi Manajemen — Rekor Closing Rate Tinggi",
      subtitle: "CV. Creaidea Innovation • Validated Customer Satisfaction",
      metrics: "Closing Rate 87% • Apresiasi Manajemen",
      description: "Tangkapan layar komunikasi apresiasi resmi manajemen internal perusahaan atas konsistensi pencapaian closing rate tertinggi dan pelayanan pelanggan yang responsif.",
      image: "assets/images/Bukti_Chat_Apresiasi_Closing_Rate_Tinggi.jpeg",
      tags: ["Chat Proof", "Management Appreciation", "High Closing Rate"]
    },
    {
      id: "cs-3",
      category: "cs",
      title: "Pencatatan Transparansi Redirect Closing Harian CS",
      subtitle: "CV. Creaidea Innovation • Financial Reconciliation",
      metrics: "100% Data Accuracy • Zero Leakage",
      description: "Bukti ketelitian administrasi dan transparansi pencatatan transaksi closing harian pada grup koordinasi operasional perusahaan.",
      image: "assets/images/Bukti_Chat_Pencatatan_Redirect_Closing_CS.jpeg",
      tags: ["Redirect Closing", "Data Accuracy", "Financial Discipline"]
    },
    {
      id: "cs-4",
      category: "cs",
      title: "Jadwal Piket & Kedisiplinan Operasional Layanan CS",
      subtitle: "CV. Creaidea Innovation • 24/7 Coverage Readiness",
      metrics: "Respons Chat Cepat • Disiplin Operasional",
      description: "Papan jadwal piket operasional customer service untuk menjaga responsivitas penanganan chat pelanggan tetap prima dan tanpa jeda.",
      image: "assets/images/Jadwal_Piket_Operasional_CS.jpeg",
      tags: ["Operational Schedule", "Customer Experience", "Response Time"]
    },
    {
      id: "cs-5",
      category: "cs",
      title: "Validasi Database Pelanggan & Rekonsiliasi Logistik",
      subtitle: "Chefpreneur Vania Wijaya • Data Accuracy & CRM",
      metrics: "95% Data Accuracy • 30–50 Orders/Day",
      description: "Mengelola penginputan dan verifikasi 30–50 data transaksi pelanggan per hari ke sistem logistik dan jasa kirim. Menjaga akurasi data hingga 95% guna menekan tingkat retur paket dan mempercepat perputaran pesanan.",
      image: "assets/images/cs_dashboard_1.jpeg",
      tags: ["Data Validation", "CRM Entry", "Logistics", "Operational Accuracy"]
    },

    // =========================================================================
    // 🚀 LAYER ADVERTISER (META, TIKTOK & MARKETPLACE ADS SCALING)
    // =========================================================================
    {
      id: "ads-1",
      category: "ads",
      featured: true,
      title: "Meta Ads Scaling — Herbal Health Products (Rp200M/Bln)",
      subtitle: "CV Creaidea Innovation • Scale & Budget Allocation",
      metrics: "3.5x–10.0x ROAS • IDR 600M–800M/Mo",
      description: "Mengelola 20–35 kampanye harian pada 3–5 akun Meta Ads Manager dengan rata-rata alokasi budget bulanan hingga Rp200 juta. Menerapkan segmentasi broad, lookalike 1–3%, dan selective budget scaling yang menghasilkan omzet stabil Rp600M–800M/bulan.",
      image: "assets/images/ads_meta_1.jpeg",
      tags: ["Meta Ads", "Selective Scaling", "ROAS", "Performance Marketing"]
    },
    {
      id: "ads-2",
      category: "ads",
      featured: true,
      title: "Multi-Brand Agency Advertising — 7 Client Brands",
      subtitle: "CV. Hasbuna Artha Niaga • Agency Advertiser",
      metrics: "7 Client Brands • TikTok GMV Max & Shopee",
      description: "Mengelola 7 brand klien dari industri fashion, herbal, dan packaging dari 0. Merancang forecasting budget, eksekusi TikTok Ads (GMV Max) dan Marketplace Ads dengan pencapaian ROAS 3.5x sesuai target proyeksi brand.",
      image: "assets/images/ads_tiktok_1.png",
      tags: ["Agency", "TikTok Ads", "GMV Max", "Marketplace Ads", "Client Management"]
    },
    {
      id: "ads-3",
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
      id: "ads-4",
      category: "ads",
      title: "Meta Ads Scaling — Health Campaign Dashboard 2",
      subtitle: "CV. Creaidea Innovation • Selective Scaling Strategy",
      metrics: "ROAS hingga 50x • Selective Scaling",
      description: "Dashboard kampanye Meta Ads produk herbal kesehatan yang menghasilkan performa ROAS hingga 50x melalui optimasi targeting dan segmentasi audiens yang presisi.",
      image: "assets/images/Meta_Ads_Klien_Herbal_Health_Dashboard_2.jpeg",
      tags: ["Meta Ads", "High ROAS", "Healthcare", "Audience Targeting"]
    },
    {
      id: "ads-5",
      category: "ads",
      title: "Meta Ads Performance Report — Spend & ROAS Herbal",
      subtitle: "CV. Creaidea Innovation • Daily Ad Spend & Return",
      metrics: "Spend Rp200M/Bln • Selective Scaling",
      description: "Laporan resmi rekapitulasi spend dan ROAS kampanye Meta Ads produk kesehatan herbal dengan pembuktian omzet harian stabil dan performa konversi tinggi.",
      image: "assets/images/Meta_Ads_Klien_Herbal_Health_Laporan_Spend_ROAS.jpeg",
      tags: ["Ad Spend Report", "ROAS", "Analytics", "Scaling"]
    },
    {
      id: "ads-6",
      category: "ads",
      title: "Lead Generation & WhatsApp Funnel — Dewanta Trans Travel",
      subtitle: "Dewanta Trans Travel • A/B Creative Testing",
      metrics: "80% Conversion Rate • +20% New Customer",
      description: "Mengeksekusi kampanye Meta Ads untuk reservasi travel dan pariwisata. Menjalankan pengujian A/B materi kreatif harian (5–10 konten) serta perbandingan form vs tombol WhatsApp yang mendongkrak conversion rate dari 65% menjadi 80%.",
      image: "assets/images/ads_dewanta.jpeg",
      tags: ["Lead Gen", "Meta Ads", "A/B Testing", "WhatsApp Funnel", "Tourism"]
    },
    {
      id: "ads-7",
      category: "ads",
      title: "Meta Ads Scaling — Food & Beverage Client Campaign",
      subtitle: "F&B Industry • Brand Scaling & Direct Sales",
      metrics: "Akurat Targeting • ROAS Positive",
      description: "Kampanye Meta Ads untuk klien industri makanan dan minuman (F&B) dengan strategi visual engagement tinggi dan retargeting pelanggan setia.",
      image: "assets/images/Meta_Ads_Klien_FB_Dashboard.jpeg",
      tags: ["Meta Ads", "F&B", "Direct Response", "Retargeting"]
    },
    {
      id: "ads-8",
      category: "ads",
      title: "Meta Ads Performance Report — F&B Industry Client",
      subtitle: "Analytics & Budget Allocation Report",
      metrics: "Conversion Tracking • Budget Optimization",
      description: "Rekapitulasi data spend, reach, dan konversi harian kampanye periklanan klien F&B guna memastikan alokasi anggaran tepat sasaran.",
      image: "assets/images/Meta_Ads_Klien_FB_Laporan.png",
      tags: ["F&B Report", "Conversion Tracking", "Budget Allocation"]
    },
    {
      id: "ads-9",
      category: "ads",
      title: "TikTok Ads Campaign — Raraya Scarf Fashion Brand",
      subtitle: "CV. Hasbuna Artha Niaga • TikTok GMV Max",
      metrics: "Creative Video Testing • GMV Max",
      description: "Eksekusi iklan berbayar TikTok Ads untuk brand fashion hijab Raraya Scarf menggunakan format video kreatif direct response dan optimasi GMV Max.",
      image: "assets/images/TikTok_Ads_Fashion_Raraya_Scarf.png",
      tags: ["TikTok Ads", "Fashion", "GMV Max", "Video Creative"]
    },
    {
      id: "ads-10",
      category: "ads",
      title: "TikTok Ads Campaign — Hap Hap Snack Series (Part 1)",
      subtitle: "CV. Hasbuna Artha Niaga • Food Snack Scaling",
      metrics: "High Click-Through & Engagement",
      description: "Strategi TikTok Ads untuk produk camilan Hap Hap Snack yang mengoptimalkan konten kuliner interaktif dan click-through rate tinggi.",
      image: "assets/images/TikTok_Ads_FB_Hap_Hap_Snack_1.png",
      tags: ["TikTok Ads", "Snack F&B", "Viral Creative", "CTR Optimization"]
    },
    {
      id: "ads-11",
      category: "ads",
      title: "TikTok Ads Campaign — Hap Hap Snack Series (Part 2)",
      subtitle: "CV. Hasbuna Artha Niaga • Scalable Audience",
      metrics: "Scalable Audience Targeting",
      description: "Pengembangan kampanye TikTok Ads fase scaling untuk produk Hap Hap Snack dengan segmentasi minat generasi muda dan impulsive buying.",
      image: "assets/images/TikTok_Ads_FB_Hap_Hap_Snack_2.png",
      tags: ["TikTok Ads", "F&B", "Scaling", "Audience Targeting"]
    },
    {
      id: "ads-12",
      category: "ads",
      title: "Shopee Ads Dashboard — Toko Herbal Mandiri (Akun 1)",
      subtitle: "Pusat Herbal Indonesia • Search & Discovery Ads",
      metrics: "Keyword Bidding • ROAS Optimization",
      description: "Pengelolaan kata kunci pencarian berbayar dan iklan produk serupa di Shopee yang menjaga rasio biaya iklan terhadap omzet tetap sangat menguntungkan.",
      image: "assets/images/Shopee_Ads_Pusat_Herbal_Dashboard_Iklan_1.png",
      tags: ["Shopee Ads", "Keyword Bidding", "Discovery Ads", "E-Commerce"]
    },
    {
      id: "ads-13",
      category: "ads",
      title: "Shopee Ads Dashboard — Toko Herbal Mandiri (Akun 2)",
      subtitle: "Pusat Herbal Indonesia • Secondary Store Scaling",
      metrics: "Discovery Ads Management",
      description: "Pengelolaan iklan Shopee Ads pada toko cabang ke-2 guna memperluas penetrasi pasar produk herbal dengan penawaran bundle menarik.",
      image: "assets/images/Shopee_Ads_Pusat_Herbal_Dashboard_Iklan_2.png",
      tags: ["Shopee Ads", "Store 2", "Bundle Offers", "Marketplace"]
    },
    {
      id: "ads-14",
      category: "ads",
      title: "Shopee Ads Optimization — Packaging Print House",
      subtitle: "CV. Hasbuna Artha Niaga • B2B & Retail Clients",
      metrics: "B2B & Retail Order Scaling",
      description: "Optimasi kampanye Shopee Ads untuk produsen kemasan packaging dan print house, membidik pemilik UMKM dan pengusaha makanan.",
      image: "assets/images/Shopee_Ads_Klien_Packaging_Print_House_1.png",
      tags: ["Shopee Ads", "Packaging", "B2B UMKM", "Print House"]
    },
    {
      id: "ads-15",
      category: "ads",
      title: "Shopee Ads Campaign — Buku Resep Vania Wijaya",
      subtitle: "CV. Hasbuna Artha Niaga • Culinary Niche Books",
      metrics: "Niche Audience Targeting • 30% Sales Lift",
      description: "Pemasaran buku resep memasak Chefpreneur Vania Wijaya di marketplace Shopee dengan targeting komunitas hobi masak dan pembaca buku kuliner.",
      image: "assets/images/Shopee_Ads_Klien_Buku_Resep_Vania_Wijaya.png",
      tags: ["Shopee Ads", "Culinary Book", "Niche Community", "Conversion"]
    },
    {
      id: "ads-16",
      category: "ads",
      title: "Shopee Ads Management — Fashion Brand Client",
      subtitle: "CV. Hasbuna Artha Niaga • Marketplace Algorithm",
      metrics: "Marketplace Algorithm Optimization",
      description: "Penerapan strategi marketplace advertising untuk brand fashion klien agensi, mengoptimalkan flash sale dan broadcast chat.",
      image: "assets/images/Shopee_Ads_Klien_Fashion.png",
      tags: ["Shopee Ads", "Fashion Client", "Marketplace Algorithm"]
    },
    {
      id: "ads-17",
      category: "ads",
      title: "Shopee Ads Campaign — F&B Client Scaling",
      subtitle: "CV. Hasbuna Artha Niaga • Daily Budget Control",
      metrics: "Daily Budget Control & ROAS",
      description: "Manajemen kampanye iklan toko makanan dan minuman di Shopee dengan pengawasan ketat terhadap return on ad spend harian.",
      image: "assets/images/Shopee_Ads_Klien_FB_1.png",
      tags: ["Shopee Ads", "F&B Client", "Daily ROAS", "Agency"]
    },

    // =========================================================================
    // 🎨 LAYER DESAIN GRAFIS (COMMERCIAL GRAPHIC DESIGN)
    // =========================================================================
    {
      id: "design-1",
      category: "design",
      featured: true,
      title: "Produksi Materi Iklan Harian (Ads Visual & Video Hook)",
      subtitle: "High-Converting Direct Response Creative Assets",
      metrics: "8–16 Creatives/Day • Image & Short Video",
      description: "Memproduksi 8–16 materi visual dan video pendek setiap hari menggunakan Adobe Photoshop, Canva, dan CapCut untuk kebutuhan A/B testing kampanye iklan digital berbayar (Meta & TikTok Ads). Mengutamakan visual hook kuat dan readability optimal.",
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
      description: "Desain poster komersial sepak bola yang mengeksplorasi hierarki tipografi tegas, efek pencahayaan atletik dramatis, dan komposisi visual bertenaga tinggi untuk materi promosi laga kompetisi olahraga.",
      image: "assets/images/design_poster_1.jpg",
      tags: ["Graphic Design", "Photoshop", "Sports Poster", "Typography"]
    },
    {
      id: "design-3",
      category: "design",
      title: "Championship Celebration Poster — Triple Winner Larana Stadium",
      subtitle: "Multi-Competition Trophy Celebration Artwork",
      metrics: "Trophy Graphic Design • Creative Artwork",
      description: "Karya seni visual perayaan gelar juara turnamen dengan perpaduan tata cahaya stadion megah, grading warna emas eksklusif, dan penataan elemen grafis monumental yang memancarkan aura kemenangan.",
      image: "assets/images/Desain_Poster_Champion_Triple_Winner_Larana_Stadium.jpg",
      tags: ["Visual Art", "Gold Grading", "Event Branding", "Photoshop"]
    },
    {
      id: "design-4",
      category: "design",
      title: "Champions Borcelle Football Club Poster Identity",
      subtitle: "Minimalist Club Honor & Identity Artwork",
      metrics: "Vector & Photo Manipulation • Social Media",
      description: "Komposisi visual modern menggabungkan elemen vektor minimalis dan manipulasi foto atlet untuk perayaan kemenangan klub sepak bola Borcelle dalam format media sosial resmi.",
      image: "assets/images/design_poster_2.jpg",
      tags: ["Vector Layout", "Sports Branding", "Poster", "Creative"]
    },
    {
      id: "design-5",
      category: "design",
      title: "Premier Kickoff Matchday Sports Poster",
      subtitle: "High-Contrast Match Art & Athletic Composition",
      metrics: "Sports Editorial • Composition",
      description: "Perancangan poster kickoff pertandingan sepak bola bertaraf profesional dengan kontras warna tajam dan penonjolan figur bintang lapangan.",
      image: "assets/images/design_poster_3.jpg",
      tags: ["Sports Poster", "Kickoff Art", "Athletic", "Photoshop"]
    },
    {
      id: "design-6",
      category: "design",
      title: "Final Match Showdown Poster — Larana Stadium",
      subtitle: "Match Preview • Color Grading & Atmosphere",
      metrics: "Match Preview • Color Grading",
      description: "Poster promosi laga puncak partai final stadion dengan nuansa dramatis, tata pencahayaan atmosferik, dan tipografi komersial modern.",
      image: "assets/images/Desain_Poster_Final_Match_Larana_Stadium.jpg",
      tags: ["Final Match", "Atmospheric Art", "Stadium Visual", "Color Grading"]
    },
    {
      id: "design-7",
      category: "design",
      title: "Football Club Red Team Visual Branding Poster",
      subtitle: "Club Atmosphere & Dynamic Sports Layout",
      metrics: "Brand Atmosphere • Dynamic Layout",
      description: "Eksplorasi visual identitas warna merah klub sepak bola dengan tata letak dinamis untuk materi promosi digital dan cetak.",
      image: "assets/images/Desain_Poster_Football_Club_RedTeam.jpg",
      tags: ["Red Team Branding", "Dynamic Layout", "Sports Club", "Identity"]
    },
    {
      id: "design-8",
      category: "design",
      title: "Goal Announcement & Player Milestone Poster",
      subtitle: "Live Match Feed Graphic & Social Update",
      metrics: "Social Media Match Update",
      description: "Format grafis feed media sosial instan untuk pengumuman gol dan rekor milestone pemain selama jalannya pertandingan.",
      image: "assets/images/Desain_Poster_Goal_Announcement.jpg",
      tags: ["Goal Announcement", "Player Milestone", "Social Media Feed"]
    },
    {
      id: "design-9",
      category: "design",
      title: "Player Contract Extension — Official Announcement Art",
      subtitle: "Sports Social Graphics • Official Club Press",
      metrics: "Official Announcement • Adobe Photoshop",
      description: "Desain pengumuman resmi perpanjangan kontrak pemain bintang klub dengan sentuhan visual prestisius dan kredibel.",
      image: "assets/images/Desain_Poster_Player_Contract_Extension.jpg",
      tags: ["Contract Extension", "Official Press", "Sports Graphics"]
    },
    {
      id: "design-10",
      category: "design",
      title: "Triple Winner Celebration Poster — Spanyol Stadium",
      subtitle: "Victory Celebration Visual & Trophy Display",
      metrics: "Celebration Visual • Poster Art",
      description: "Poster perayaan raihan tiga trofi bergengsi sekaligus dengan komposisi panggung juara yang megah dan berkelas.",
      image: "assets/images/Desain_Poster_Champion_Triple_Winner_Spanyol_Stadium.jpg",
      tags: ["Triple Winner", "Trophy Celebration", "Victory Artwork"]
    },
    {
      id: "design-11",
      category: "design",
      title: "Football Academy Open Registration Promotional Series",
      subtitle: "Marketing Poster Series • Canva & Photoshop",
      metrics: "Marketing Poster • Canva & Photoshop",
      description: "Rangkaian materi poster promosi pendaftaran akademi sepak bola usia muda dengan alur informasi registrasi yang jelas dan persuasif.",
      image: "assets/images/Desain_Poster_Open_Registration_Football_Academy_1.jpg",
      tags: ["Academy Registration", "Youth Football", "Marketing Series"]
    },
    {
      id: "design-12",
      category: "design",
      title: "Season Title Matchday & Half Time Match Updates",
      subtitle: "Matchday Digital Feed Visual Series",
      metrics: "Live Match Feed Graphic",
      description: "Rangkaian aset visual live update jeda babak pertama dan penentuan gelar juara musim kompetisi untuk engagement audiens.",
      image: "assets/images/Desain_Poster_Season_Title_Matchday.jpg",
      tags: ["Matchday Update", "Half Time Feed", "Digital Assets"]
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
