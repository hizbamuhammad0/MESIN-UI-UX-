# 🛠️ Panduan Operasional Mesin Portofolio UI/UX (Plug & Play)

Mesin ini dirancang untuk memproses data profil/portofolio klien mana pun menjadi website landing page profesional yang siap tayang di **Vercel** hanya dalam hitungan menit tanpa perlu menulis ulang kode HTML atau CSS.

Mesin ini telah dilengkapi **5 Preset Art Style Profesional Terkurasi (Gen-Z & Enterprise Approved)** yang dapat diganti secara instan.

---

## 📂 Struktur Direktori Mesin

```text
UI:UX DESIGNER/
├── 📂 assets/
│   ├── images/              # Wadah foto profil, gambar proyek, dan sertifikat
│   └── docs/                # Wadah dokumen PDF (CV, resume, proposal)
├── 📂 data/
│   └── profile.js           # 🌟 SINGLE SOURCE OF TRUTH (Data Klien & Pilihan Art Style)
├── 📂 styles/
│   ├── tokens.css           # Variabel 5 Art Style, warna tema, tipografi, dan spasi
│   ├── base.css             # Layout dasar dan reset CSS
│   ├── components.css       # Komponen kartu proyek, modal, tombol, timeline
│   └── animations.css       # Micro-interactions dan transisi
├── 📂 scripts/
│   ├── engine.js            # Mesin render dinamis & interactive style switcher
│   └── interactions.js      # Filter kategori dan modal lightbox
├── 📄 index.html             # Shell web (<75 baris, zero-hardcode)
├── 📄 vercel.json            # Konfigurasi caching dan routing Vercel
└── 📄 PANDUAN_PENGGUNAAN_MESIN.md # Dokumen panduan ini
```

---

## 🎨 5 Pilihan Preset Art Style Profesional

Anda dapat memilih gaya visual di dalam file [`data/profile.js`](file:///Users/hizbamuhammadabror/UI:UX%20DESIGNER/data/profile.js) pada properti `theme.style`:

| Nilai `style` | Nama Gaya | Ciri Khas Visual | Sangat Cocok Untuk |
| :--- | :--- | :--- | :--- |
| **`"tech-glossy"`** *(Default)* | **Tech Glossy** | Apple HIG / Linear / Vercel style. Dark mode pekat, kartu glass transparan, border glow halus, font modern sans-serif (*Outfit*). | Tech Founder, UI/UX Designer, Performance Marketer, Fintech |
| **`"warm-editorial"`** | **Warm Editorial** | Kinfolk / Substack modern. Tipografi Serif prestisius (*Playfair Display*), latar hangat, garis pembatas elegan, minim bayangan. | Jurnalis, Penulis, Konsultan Strategis, Creative Director |
| **`"human-minimal"`** | **Human Minimal** | Stripe Press / Notion. Layout super bersih, *whitespace* lapang, ramah, font sans-serif modern (*Plus Jakarta Sans*). | Product Manager, HR/Talent, Startup Founder, Educator |
| **`"organic-earthy"`** | **Organic Earthy** | Aesop / Scandinavian wellness. Palet alam (*sage, matcha, sand*), sudut kartu membulat lembut (*radius 22px*), menenangkan. | Skincare, Wellness, F&B Consultant, Sustainable Fashion |
| **`"neo-heritage"`** | **Neo Heritage** | Indonesian Culture Berstandar Global. Latar royal navy, tipografi prestisius (*Cinzel*), aksen emas/perunggu, berwibawa. | Brand Lokal, Ekspor, Pariwisata, Event Kebudayaan, PR |

---

## ⚡ Alur Kerja 3 Langkah Menangani Klien Baru

### Langkah 1: Kumpulkan & Masukkan Aset Klien
Salin berkas media klien ke folder `assets/`:
* Letakkan foto profil di: `assets/images/avatar.png`
* Letakkan file resume di: `assets/docs/cv.pdf`
* Letakkan screenshot/poster proyek di: `assets/images/`

---

### Langkah 2: Atur & Isi Data di `data/profile.js`
Buka file [`data/profile.js`](file:///Users/hizbamuhammadabror/UI:UX%20DESIGNER/data/profile.js) dan sesuaikan:

1. **Pilih Gaya & Warna Aksen:**
   ```javascript
   theme: {
     style: "tech-glossy", // "tech-glossy" | "warm-editorial" | "human-minimal" | "organic-earthy" | "neo-heritage"
     accent: "cyan",       // "cyan" | "emerald" | "purple" | "amber" | "rose" | "gold"
     mode: "dark"
   }
   ```
2. **Informasi Profil:**
   Isi `name`, `title`, `badge`, `bio`, `location`, dan tautan sosial media.
3. **Pencapaian & Metrik (Key Stats):**
   Isi 4 angka pencapaian penting (misal: ROAS, Omzet, Jumlah Proyek, dll).
4. **Daftar Portofolio (`projects`):**
   Tambahkan proyek baru dengan format:
   ```javascript
   {
     id: "proj-1",
     category: "ads", // ID kategori
     title: "Judul Proyek",
     subtitle: "Subjudul Ringkas",
     metrics: "ROAS 4.8x",
     description: "Penjelasan studi kasus...",
     image: "assets/images/nama_gambar.jpg",
     tags: ["Tag 1", "Tag 2"]
   }
   ```
5. **Aktifkan / Nonaktifkan Bagian:**
   Jika klien belum memiliki sertifikasi, cukup ubah `certifications: false` di blok `sections`.

---

### Langkah 3: Preview & Deploy ke Vercel

#### A. Preview Lokal (Langsung):
Buka berkas `index.html` langsung di browser, atau gunakan floating switcher di pojok kanan bawah untuk menguji ke-5 Art Style secara *real-time*.

#### B. Deploy ke Vercel:
Jalankan perintah di terminal:
```bash
npx vercel
```
Atau hubungkan repositori Git ini ke akun [Vercel](https://vercel.com) untuk *continuous deployment* otomatis.
