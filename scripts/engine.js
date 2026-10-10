/**
 * ==============================================================================
 * ⚙️ UI/UX RENDERING ENGINE (PLUG & PLAY CORE WITH MULTI-STYLE SUPPORT)
 * ==============================================================================
 * Membaca window.PORTFOLIO_DATA dan membangun seluruh antarmuka secara dinamis.
 * Mendukung 5 Art Style terkurasi dengan peralihan instan.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error('Data profil tidak ditemukan. Pastikan data/profile.js dimuat.');
    return;
  }

  // 1. Terapkan Art Style & Warna Aksen
  const initialStyle = data.theme?.style || 'tech-glossy';
  const initialAccent = data.theme?.accent || 'cyan';
  const initialMode = data.theme?.mode || 'dark';

  document.documentElement.setAttribute('data-style', initialStyle);
  document.documentElement.setAttribute('data-accent', initialAccent);
  document.documentElement.setAttribute('data-theme', initialMode);

  // 2. Set Page Title & Meta
  if (data.personal && data.personal.name) {
    document.title = `${data.personal.name} — ${data.personal.title || 'Portofolio Profesional'}`;
  }

  // 3. Render Navbar
  renderNavbar(data);

  // 4. Render Hero Section
  renderHero(data);

  // 5. Render Sections Kondisional
  if (data.sections?.stats && data.stats) renderStats(data.stats);
  if (data.sections?.skills && data.skills) renderSkills(data.skills);
  if (data.sections?.portfolio && data.projects) renderPortfolio(data.categories, data.projects);
  if (data.sections?.certifications && data.certifications) renderCertifications(data.certifications);
  if (data.sections?.experience && data.experience) renderExperience(data.experience);
  if (data.sections?.contact && data.contact) renderContact(data.contact);

  // 6. Inisialisasi Floating Style & Accent Switcher
  initStyleAndThemeSwitcher(initialStyle, initialAccent);
});

function renderNavbar(data) {
  const navContainer = document.getElementById('navbar-slot');
  if (!navContainer) return;

  navContainer.innerHTML = `
    <div class="container navbar-inner">
      <a href="#" class="brand-logo">
        <span class="brand-dot"></span>
        <span>${data.personal.name}</span>
      </a>
      <ul class="nav-links">
        <li><a href="#portfolio" class="nav-link">Portofolio</a></li>
        <li><a href="#skills" class="nav-link">Keahlian</a></li>
        <li><a href="#certifications" class="nav-link">Sertifikasi</a></li>
        <li><a href="#experience" class="nav-link">Pengalaman</a></li>
      </ul>
      <div class="nav-actions">
        ${data.personal.cvUrl ? `<a href="${data.personal.cvUrl}" target="_blank" class="btn btn-outline btn-sm">Unduh CV</a>` : ''}
        <a href="#contact" class="btn btn-primary btn-sm">Kontak</a>
      </div>
    </div>
  `;
}

function renderHero(data) {
  const p = data.personal;
  const heroSlot = document.getElementById('hero-slot');
  if (!heroSlot) return;

  const socialLinksHtml = (p.socials || []).map(s => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-link">
      <span>${s.name}</span>
      <span style="font-size: 0.7rem;">↗</span>
    </a>
  `).join('');

  heroSlot.innerHTML = `
    <div class="container hero-section">
      ${p.avatar ? `
        <div class="hero-avatar-wrapper">
          <img src="${p.avatar}" alt="${p.name}" class="hero-avatar" />
        </div>
      ` : ''}

      ${p.badge ? `
        <div class="badge-pill">
          <span class="badge-status-dot"></span>
          <span>${p.badge}</span>
        </div>
      ` : ''}

      <h1 class="hero-title">${p.name}</h1>
      <p class="hero-subtitle">${p.title}</p>
      <p class="hero-bio">${p.bio}</p>

      <div class="hero-actions">
        <a href="#portfolio" class="btn btn-primary">Lihat Hasil Proyek</a>
        ${p.cvUrl ? `<a href="${p.cvUrl}" target="_blank" class="btn btn-outline">Lihat Resume (PDF)</a>` : ''}
      </div>

      <div class="hero-socials">
        ${socialLinksHtml}
      </div>
    </div>
  `;
}

function renderStats(stats) {
  const slot = document.getElementById('stats-slot');
  if (!slot) return;

  slot.innerHTML = `
    <div class="container section">
      <div class="stats-grid">
        ${stats.map(s => `
          <div class="stat-card">
            <div class="stat-value">${s.value}</div>
            <div class="stat-label">${s.label}</div>
            <div class="stat-desc">${s.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSkills(skills) {
  const slot = document.getElementById('skills-slot');
  if (!slot) return;

  slot.innerHTML = `
    <div class="container section" id="skills">
      <div class="section-header">
        <span class="section-tag">Kompetensi Utama</span>
        <h2 class="section-title">Keahlian & Tool Stack</h2>
        <p>Spesialisasi teknis dan alur operasional kerja yang dikuasai secara profesional.</p>
      </div>
      <div class="skills-grid">
        ${skills.map(c => `
          <div class="skill-card">
            <h3 class="skill-card-title">${c.category}</h3>
            <div class="skill-chips">
              ${c.items.map(item => `<span class="chip">${item}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderPortfolio(categories, projects) {
  const slot = document.getElementById('portfolio-slot');
  if (!slot) return;

  const tabsHtml = (categories || []).map((cat, idx) => `
    <button class="tab-btn ${idx === 0 ? 'active' : ''}" data-category="${cat.id}">
      ${cat.label}
    </button>
  `).join('');

  slot.innerHTML = `
    <div class="container section" id="portfolio">
      <div class="section-header">
        <span class="section-tag">Portofolio Karya</span>
        <h2 class="section-title">Proyek & Hasil Eksekusi</h2>
        <p>Kumpulan studi kasus kampanye iklan, kepemimpinan tim, dan karya desain pilihan.</p>
      </div>

      <div class="filter-tabs" id="portfolio-tabs">
        ${tabsHtml}
      </div>

      <div class="portfolio-grid" id="portfolio-grid">
        <!-- Rendered via interactions.js -->
      </div>
    </div>
  `;
}

function renderCertifications(certs) {
  const slot = document.getElementById('certifications-slot');
  if (!slot) return;

  slot.innerHTML = `
    <div class="container section" id="certifications">
      <div class="section-header">
        <span class="section-tag">Kredensial Profesional</span>
        <h2 class="section-title">Sertifikasi Kompetensi</h2>
        <p>Bukti legalitas dan sertifikasi keahlian terstandarisasi lembaga resmi.</p>
      </div>
      <div class="cert-grid">
        ${certs.map(c => `
          <div class="cert-card" onclick="openLightbox('${c.image}', '${c.title}', '${c.desc}')">
            ${c.image ? `<img src="${c.image}" alt="${c.title}" class="cert-thumb" />` : ''}
            <div class="cert-info">
              <h4>${c.title}</h4>
              <p class="cert-issuer">${c.issuer} • ${c.year}</p>
              <span class="btn btn-outline btn-sm" style="margin-top: 6px; padding: 3px 8px;">Lihat Dokumen ↗</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderExperience(exp) {
  const slot = document.getElementById('experience-slot');
  if (!slot) return;

  slot.innerHTML = `
    <div class="container section" id="experience">
      <div class="section-header">
        <span class="section-tag">Rekam Jejak</span>
        <h2 class="section-title">Pengalaman Kerja</h2>
      </div>
      <div class="timeline">
        ${exp.map(e => `
          <div class="timeline-item">
            <span class="timeline-dot"></span>
            <div class="timeline-period">${e.period}</div>
            <h3 class="timeline-role">${e.role}</h3>
            <div class="timeline-company">${e.company}</div>
            <p class="project-desc">${e.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderContact(contact) {
  const slot = document.getElementById('contact-slot');
  if (!slot) return;

  slot.innerHTML = `
    <div class="container section" id="contact">
      <div class="cta-box">
        <h2 style="font-size: 2.2rem; margin-bottom: 12px;">${contact.heading}</h2>
        <p style="max-width: 580px; margin: 0 auto 28px; font-size: 1.05rem;">${contact.subheading}</p>
        <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
          <a href="${contact.ctaLink}" target="_blank" class="btn btn-primary" style="padding: 14px 28px; font-size: 1rem;">
            ${contact.ctaText} ↗
          </a>
          <a href="mailto:${contact.email}" class="btn btn-outline" style="padding: 14px 28px; font-size: 1rem;">
            Kirim Email
          </a>
        </div>
      </div>
    </div>
  `;
}

/**
 * 🎛️ FLOATING STYLE & ACCENT SWITCHER BAR
 * Memungkinkan pratinjau instan untuk 5 Art Style terkurasi
 */
function initStyleAndThemeSwitcher(currentStyle, currentAccent) {
  const switcher = document.createElement('div');
  switcher.className = 'theme-picker';
  switcher.title = 'Ubah Preset Art Style & Aksen Warna';

  const styles = [
    { id: 'tech-glossy', label: 'Tech Glossy (Vercel)' },
    { id: 'warm-editorial', label: 'Warm Editorial (Kinfolk)' },
    { id: 'human-minimal', label: 'Human Minimal (Stripe)' },
    { id: 'organic-earthy', label: 'Organic Earthy (Aesop)' },
    { id: 'neo-heritage', label: 'Neo Heritage (Lokal)' }
  ];

  const accents = [
    { id: 'cyan', color: '#38bdf8' },
    { id: 'emerald', color: '#10b981' },
    { id: 'purple', color: '#a855f7' },
    { id: 'amber', color: '#f59e0b' },
    { id: 'rose', color: '#f43f5e' },
    { id: 'gold', color: '#d4af37' }
  ];

  const styleOptionsHtml = styles.map(s => `
    <option value="${s.id}" ${s.id === currentStyle ? 'selected' : ''}>
      ${s.label}
    </option>
  `).join('');

  const accentDotsHtml = accents.map(a => `
    <span class="theme-dot ${a.id === currentAccent ? 'active' : ''}" 
          style="background: ${a.color};" 
          onclick="setAccentColor('${a.id}', this)"
          title="Aksen ${a.id}">
    </span>
  `).join('');

  switcher.innerHTML = `
    <select class="style-select" onchange="setArtStyle(this.value)" title="Pilih Art Style">
      ${styleOptionsHtml}
    </select>
    <div style="width: 1px; height: 18px; background: var(--border-medium); margin: 0 4px;"></div>
    ${accentDotsHtml}
  `;

  document.body.appendChild(switcher);
}

window.setArtStyle = function(styleId) {
  document.documentElement.setAttribute('data-style', styleId);
};

window.setAccentColor = function(accentId, el) {
  document.documentElement.setAttribute('data-accent', accentId);
  document.querySelectorAll('.theme-dot').forEach(d => d.classList.remove('active'));
  if (el) el.classList.add('active');
};
