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
* Letakkan screenshot/poster proyek di: `assets/images/`

---

### Langkah 2: Isi Data di `data/profile.js`
Buka file [`data/profile.js`](file:///Users/hizbamuhammadabror/UI:UX%20DESIGNER/data/profile.js) dan sesuaikan:

1. **Pilih Warna Aksen:**
   ```javascript
   theme: {
     accent: "cyan", // Pilihan: "cyan" | "emerald" | "purple" | "amber" | "rose"
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
Cukup klik dua kali berkas `index.html` untuk membuka di browser apa pun tanpa perlu konfigurasi server tambahan!

#### B. Deploy ke Vercel:
Jalankan perintah di terminal:
```bash
npx vercel
```
Atau hubungkan repositori Git ini ke akun [Vercel](https://vercel.com) untuk *continuous deployment* otomatis.
