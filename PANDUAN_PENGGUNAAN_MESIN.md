# 🛠️ Panduan Operasional Mesin Portofolio UI/UX (Plug & Play)

Mesin ini dirancang untuk memproses data profil/portofolio klien mana pun menjadi website landing page profesional yang siap tayang di **Vercel** hanya dalam hitungan menit tanpa perlu menulis ulang kode HTML atau CSS.

---

## 📂 Struktur Direktori Mesin

```text
UI:UX DESIGNER/
├── 📂 assets/
│   ├── images/              # Wadah foto profil, gambar proyek, dan sertifikat
│   └── docs/                # Wadah dokumen PDF (CV, resume, proposal)
├── 📂 data/
│   └── profile.js           # 🌟 SINGLE SOURCE OF TRUTH (Data Klien)
├── 📂 styles/
│   ├── tokens.css           # Variabel warna tema, tipografi, dan spasi
│   ├── base.css             # Layout dasar dan reset CSS
│   ├── components.css       # Komponen kartu proyek, modal, tombol, timeline
│   └── animations.css       # Micro-interactions dan transisi
├── 📂 scripts/
│   ├── engine.js            # Mesin render dinamis (membaca data/profile.js)
│   └── interactions.js      # Filter kategori dan modal lightbox
├── 📄 index.html             # Shell web (<70 baris, zero-hardcode)
├── 📄 vercel.json            # Konfigurasi caching dan routing Vercel
└── 📄 PANDUAN_PENGGUNAAN_MESIN.md # Dokumen panduan ini
```

---

## ⚡ Alur Kerja 3 Langkah Menangani Klien Baru

### Langkah 1: Kumpulkan & Masukkan Aset Klien
Salin berkas media klien ke folder `assets/`:
* Letakkan foto profil di: `assets/images/avatar.png`
* Letakkan file resume di: `assets/docs/cv.pdf`
* Letakkan gambar proyek dan sertifikat di: `assets/images/` *(format: .png, .jpg, .webp)*

---

### Langkah 2: Isi Data di `data/profile.js`
Buka file [data/profile.js](file:///Users/hizbamuhammadabror/UI:UX%20DESIGNER/data/profile.js) dan sesuaikan:

1. **Pilih Warna Aksen & Gaya:**
   ```javascript
   theme: {
     style: "tech-glossy", // Opsi: "tech-glossy" | "warm-editorial" | "human-minimal" | "organic-earthy" | "neo-heritage"
     accent: "cyan",       // Opsi: "cyan" | "emerald" | "purple" | "amber" | "rose" | "gold"
     mode: "dark"
   }
   ```
2. **Informasi Profil:**
   Isi `name`, `title`, `badge`, `bio`, `location`, dan tautan sosial media di objek `personal`.
3. **Pencapaian & Metrik (Key Stats):**
   Isi 4 angka pencapaian penting (misal: ROAS, Omzet, Closing Rate, dll) di array `stats`.
4. **Daftar Portofolio (`projects`):**
   Tambahkan proyek baru dengan format:
   ```javascript
   {
     id: "proj-1",
     category: "ads", // Sesuaikan dengan id kategori di array categories
     title: "Judul Proyek",
     subtitle: "Subjudul Ringkas",
     metrics: "ROAS 4.8x",
     description: "Penjelasan studi kasus...",
     image: "assets/images/nama_gambar.jpg",
     tags: ["Tag 1", "Tag 2"]
   }
   ```
5. **Aktifkan / Nonaktifkan Bagian:**
   Jika klien belum memiliki bagian tertentu, cukup ubah nilainya menjadi `false` di blok `sections`:
   ```javascript
   sections: {
     stats: true,
     skills: true,
     portfolio: true,
     certifications: false, // Disembunyikan otomatis jika tidak ada
     experience: true,
     contact: true
   }
   ```

---

### Langkah 3: Preview & Deploy ke Vercel

#### A. Preview Lokal (Langsung):
Cukup klik dua kali berkas [index.html](file:///Users/hizbamuhammadabror/UI:UX%20DESIGNER/index.html) untuk membuka di browser apa pun tanpa perlu konfigurasi server tambahan!
*(Gunakan widget floating di pojok kanan bawah untuk pratinjau instan ganti warna/gaya).*

#### B. Deploy ke Vercel:
Jalankan perintah di terminal:
```bash
npx vercel
```
Atau hubungkan repositori Git ini ke akun [Vercel](https://vercel.com) untuk *continuous deployment* otomatis.

---

## 🎨 Lampiran: Referensi 5 Preset Art Style (Opsional)

Jika ingin menyesuaikan karakter visual profil klien, cukup ganti nilai `theme.style` di [data/profile.js](file:///Users/hizbamuhammadabror/UI:UX%20DESIGNER/data/profile.js):

* **`"tech-glossy"`** *(Default)*: Apple HIG / Linear / Vercel style. Dark mode pekat, kartu glass transparan, border glow halus. *(Cocok: Tech, UI/UX, Performance Ads)*
* **`"warm-editorial"`**: Kinfolk / Substack modern. Tipografi Serif prestisius, nuansa kertas hangat, garis pembatas elegan. *(Cocok: Penulis, Jurnalis, Creative Director)*
* **`"human-minimal"`**: Stripe Press / Notion. Layout super bersih, *whitespace* lapang, ramah, font sans modern. *(Cocok: Product Manager, HR, Startup Founder)*
* **`"organic-earthy"`**: Aesop / Scandinavian wellness. Palet alam (*sage, sand*), sudut membulat lembut. *(Cocok: Skincare, Wellness, F&B)*
* **`"neo-heritage"`**: Indonesian Culture Modern. Latar royal navy, tipografi prestisius, aksen emas berwibawa. *(Cocok: Brand Lokal, Ekspor, Pariwisata)*
