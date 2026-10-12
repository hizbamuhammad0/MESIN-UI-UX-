/**
 * ==============================================================================
 * ⚙️ UI/UX RENDERING ENGINE (NESSA KAMALIKA — POP-TECH GROWTH EDITION)
 * ==============================================================================
 * Dynamically builds the DOM from window.PORTFOLIO_DATA in the exact order:
 * 1. Hero & Split Avatar
 * 2. Pop Ticker Marquee
 * 3. Key Performance Metrics (Stats)
 * 4. Career History (Experience & Education)
 * 5. Verified Credentials (Licenses & Certifications)
 * 6. Selected Work (Projects & Case Studies)
 * 7. Core Competencies (Skills & Tools)
 * 8. Contact CTA
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error('Profile data not found. Ensure data/profile.js is loaded.');
    return;
  }

  // 1. Apply Theme Style, Accent & Mode
  const initialStyle = data.theme?.style || 'tech-glossy';
  const initialAccent = data.theme?.accent || 'cyan';
  const initialMode = data.theme?.mode || 'dark';

  document.documentElement.setAttribute('data-style', initialStyle);
  document.documentElement.setAttribute('data-accent', initialAccent);
  document.documentElement.setAttribute('data-theme', initialMode);

  // 2. Set Page Title
  if (data.personal && data.personal.name) {
    document.title = `${data.personal.name} — ${data.personal.title || 'Growth & Performance Marketing'}`;
  }

  // 3. Render Navbar
  renderNavbar(data);

  // 4. Render Hero Section
  renderHero(data);

  // 5. Render Pop Ticker Marquee
  renderTicker();

  // 6. Render Stats (Key Performance Metrics)
  if (data.sections?.stats && data.stats) {
    renderStats(data.stats);
  }

  // 7. Render Career History (Experience & Education) — User Priority 1
  if (data.sections?.experience && data.experience) {
    renderExperience(data.experience);
  }

  // 8. Render Verified Credentials (Licenses & Certifications) — User Priority 2
  if (data.sections?.certifications && data.certifications) {
    renderCertifications(data.certifications);
  }

  // 9. Render Selected Work (Projects & Case Studies) — User Priority 3
  if (data.sections?.portfolio && data.projects) {
    renderPortfolio(data.categories, data.projects);
  }

  // 10. Render Core Competencies (Skills & Tools) — User Priority 4
  if (data.sections?.skills && data.skills) {
    renderSkills(data.skills);
  }

  // 11. Render Contact CTA
  if (data.sections?.contact && data.contact) {
    renderContact(data.contact);
  }

  // 12. Initialize Theme & Style Switcher
  initStyleAndThemeSwitcher(initialStyle, initialAccent);
});

/* ==============================================================================
 * 🧭 1. NAVBAR
 * ============================================================================== */
function renderNavbar(data) {
  const navContainer = document.getElementById('navbar-slot');
  if (!navContainer) return;

  navContainer.innerHTML = `
    <div class="container navbar-inner">
      <a href="#" class="brand-logo">
        <span>${data.personal.name}</span>
        <span class="brand-badge">Growth</span>
      </a>
      <ul class="nav-links">
        <li><a href="#experience" class="nav-link">Career History</a></li>
        <li><a href="#certifications" class="nav-link">Credentials</a></li>
        <li><a href="#portfolio" class="nav-link">Projects & Portfolio</a></li>
        <li><a href="#skills" class="nav-link">Competencies</a></li>
      </ul>
      <div class="nav-actions">
        ${data.personal.cvUrl ? `<a href="${data.personal.cvUrl}" target="_blank" class="btn btn-outline btn-sm"><i class="fa-solid fa-file-pdf"></i> Resume (PDF)</a>` : ''}
        <a href="#contact" class="btn btn-primary btn-sm"><i class="fa-brands fa-whatsapp"></i> Contact</a>
      </div>
    </div>
  `;
}

/* ==============================================================================
 * 🌟 2. HERO SECTION (SPLIT GRID WITH FLOATING POP TAGS)
 * ============================================================================== */
function renderHero(data) {
  const p = data.personal;
  const heroSlot = document.getElementById('hero-slot');
  if (!heroSlot) return;

  const socialIconsMap = {
    WhatsApp: 'fa-brands fa-whatsapp',
    Email: 'fa-solid fa-envelope',
    Instagram: 'fa-brands fa-instagram',
    LinkedIn: 'fa-brands fa-linkedin-in'
  };

  const socialLinksHtml = (p.socials || []).map(s => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-link" title="${s.name}">
      <i class="${socialIconsMap[s.name] || 'fa-solid fa-link'}"></i>
    </a>
  `).join('');

  heroSlot.innerHTML = `
    <div class="container hero">
      <div class="hero-grid">
        <!-- Left: Pitch & Bio -->
        <div class="hero-content">
          <div class="pop-speech-bubble">
            💬 Growth & Performance Marketer
          </div>

          <h1 class="hero-title">
            Nessa <span class="pop-art-highlight">Kamalika</span>
          </h1>

          <p class="hero-subtitle">${p.title}</p>
          <p class="hero-bio">${p.bio}</p>

          <div class="hero-cta">
            <a href="#portfolio" class="btn btn-primary">
              <i class="fa-solid fa-chart-line"></i> View Projects & Portfolio
            </a>
            ${p.cvUrl ? `
              <a href="${p.cvUrl}" target="_blank" class="btn btn-outline">
                <i class="fa-solid fa-arrow-down-to-bracket"></i> Download Resume (PDF)
              </a>
            ` : ''}
          </div>

          <div class="hero-socials">
            ${socialLinksHtml}
          </div>
        </div>

        <!-- Right: Avatar Card with Floating Pop Tags -->
        <div class="hero-avatar-wrapper">
          <div class="hero-avatar-card">
            <img src="${p.avatar || 'assets/images/avatar.png'}" alt="${p.name}">
          </div>
          <div class="pop-tag-float pop-tag-1">📈 3.5x–10.0x ROAS Multi-Channel</div>
          <div class="pop-tag-float pop-tag-2">🎯 87% Sales Closing Rate</div>
          <div class="pop-tag-float pop-tag-3">🏆 BNSP Licensed Digital Marketer</div>
        </div>
      </div>
    </div>
  `;
}

/* ==============================================================================
 * ⚡ 3. POP TICKER MARQUEE
 * ============================================================================== */
function renderTicker() {
  const tickerSlot = document.getElementById('ticker-slot');
  if (!tickerSlot) return;

  const items = [
    'GROWTH & PERFORMANCE MARKETING',
    'META, TIKTOK & MARKETPLACE ADS SCALING',
    '87% PEAK SALES CLOSING RATE',
    'IDR 600M–800M/MO DELIVERED',
    'BNSP LICENSED DIGITAL MARKETER',
    'CUSTOMER OPERATIONS LEADERSHIP',
    'MULTI-CHANNEL FUNNEL EXECUTION'
  ];

  const contentHtml = items.map(text => `<span>★ ${text}</span>`).join(' • ');

  tickerSlot.innerHTML = `
    <div class="pop-ticker">
      <div class="pop-ticker-content">
        ${contentHtml} • ${contentHtml}
      </div>
    </div>
  `;
}

/* ==============================================================================
 * 📊 4. STATS BANNER / KEY PERFORMANCE METRICS
 * ============================================================================== */
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

/* ==============================================================================
 * 💼 5. CAREER HISTORY (EXPERIENCE & EDUCATION) — USER ORDER 1
 * ============================================================================== */
function renderExperience(exp) {
  const slot = document.getElementById('experience-slot');
  if (!slot) return;

  slot.innerHTML = `
    <div class="container section" id="experience">
      <div class="section-header">
        <span class="section-tag">Career History</span>
        <h2 class="section-title">Experience & Education</h2>
        <p class="section-subtitle">Chronological progression across performance advertising, customer team leadership, field journalism, and academic achievement.</p>
      </div>
      <div class="timeline">
        ${exp.map(e => `
          <div class="timeline-item">
            <span class="timeline-dot"></span>
            <div class="timeline-card">
              <span class="timeline-period">${e.period}</span>
              <h3 class="timeline-role">${e.role}</h3>
              <div class="timeline-company">${e.company}</div>
              <p class="timeline-desc">${e.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ==============================================================================
 * 📜 6. VERIFIED CREDENTIALS (LICENSES & CERTIFICATIONS) — USER ORDER 2
 * ============================================================================== */
function renderCertifications(certs) {
  const slot = document.getElementById('certifications-slot');
  if (!slot) return;

  slot.innerHTML = `
    <div class="container section" id="certifications">
      <div class="section-header">
        <span class="section-tag">Verified Credentials</span>
        <h2 class="section-title">Licenses & Certifications</h2>
        <p class="section-subtitle">Official certifications verified by national competency boards and vocational institutions.</p>
      </div>
      <div class="cert-grid">
        ${certs.map(c => `
          <div class="cert-card" onclick="openLightbox('${c.image}', '${c.title}', '${c.desc.replace(/'/g, "\\'")}')">
            ${c.image ? `<img src="${c.image}" alt="${c.title}" class="cert-thumb" loading="lazy" />` : ''}
            <div class="cert-info">
              <h4>${c.title}</h4>
              <p class="cert-issuer">${c.issuer} • ${c.year}</p>
              <span class="cert-view-btn">View Document <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ==============================================================================
 * 📁 7. SELECTED WORK (PROJECTS & CASE STUDIES) — USER ORDER 3
 * ============================================================================== */
/* ==============================================================================
 * 📁 7. SELECTED WORK (3-LAYER WORK SHOWCASE ARCHITECTURE) — USER ORDER 3
 * ============================================================================== */
function renderProjectCardHtml(p) {
  const safeDesc = (p.description || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
  const safeTitle = (p.title || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
  const isFeatured = p.featured === true;
  const hasImage = p.image && p.image.trim() !== '';

  return `
    <div class="project-card ${hasImage ? '' : 'editorial-card'} fade-in" onclick="openLightbox('${p.image || ''}', '${safeTitle}', '${safeDesc}', '${p.id}')">
      ${hasImage ? `
        <div class="project-thumb-box">
          <img src="${p.image}" alt="${p.title}" class="project-thumb" loading="lazy" />
          ${isFeatured ? '<div class="flagship-badge">★ Core Deliverable</div>' : ''}
          ${p.metrics ? `<div class="project-pill-metric">${p.metrics}</div>` : ''}
        </div>
      ` : `
        <div class="editorial-header-bar">
          <div class="editorial-icon-badge">
            <i class="${p.icon || 'fa-solid fa-file-lines'}"></i>
          </div>
          ${p.metrics ? `<div class="editorial-metric-pill">${p.metrics}</div>` : ''}
        </div>
      `}
      <div class="project-info">
        <h3 class="project-title">${p.title}</h3>
        ${p.subtitle ? `<div class="project-client">${p.subtitle}</div>` : ''}
        <p class="project-desc">${p.description}</p>
        <div class="project-tags">
          ${(p.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderPortfolio(categories, projects) {
  const slot = document.getElementById('portfolio-slot');
  if (!slot) return;

  const projs = projects || window.PORTFOLIO_DATA?.projects || [];

  // Groupings for Layer 1 (Paid Advertising)
  const metaAds = projs.filter(p => p.category === 'ads' && (p.title.includes('Meta') || p.tags?.includes('Meta Ads') || p.tags?.includes('Lead Gen')));
  const shopeeAds = projs.filter(p => p.category === 'ads' && (p.title.includes('Shopee') || p.tags?.includes('Shopee Ads')));
  const tiktokAds = projs.filter(p => p.category === 'ads' && (p.title.includes('TikTok') || p.tags?.includes('TikTok Ads')));

  // Groupings for Layer 2 (Customer Operations & Leadership)
  const leaderCS = projs.filter(p => p.category === 'leader');
  const staffCS = projs.filter(p => p.category === 'cs');

  // Groupings for Layer 3 (Commercial Graphic Design)
  const designProjs = projs.filter(p => p.category === 'design');

  slot.innerHTML = `
    <div class="container section" id="portfolio">
      <div class="section-header">
        <span class="section-tag">Work Showcase</span>
        <h2 class="section-title">3 Core Specialization Layers</h2>
        <p class="section-subtitle">
          Arsitektur portofolio komersial terpadu: Layer 1 Akuisisi Traffic Iklan Berbayar Multi-Channel (Meta, Shopee, TikTok), Layer 2 Operasional Layanan Pelanggan & Supervisi Tim CS (Omzet 700-800 Juta & Rekor Closing 87%), dan Layer 3 Perancangan Materi Visual Grafis Komersial.
        </p>
      </div>

      <!-- Quick Jump Layer Navigation Pills -->
      <div class="layer-nav-pills">
        <a href="#layer-ads" class="layer-nav-btn">
          <i class="fa-solid fa-rocket"></i> Layer 1: Paid Advertising (Meta, Shopee, TikTok)
        </a>
        <a href="#layer-cs" class="layer-nav-btn">
          <i class="fa-solid fa-crown"></i> Layer 2: Customer Operations & Leadership
        </a>
        <a href="#layer-design" class="layer-nav-btn">
          <i class="fa-solid fa-palette"></i> Layer 3: Commercial Graphic Design
        </a>
        <a href="#editorial-showcase-box" class="layer-nav-btn">
          <i class="fa-solid fa-newspaper"></i> Editorial & Academic Distinctions
        </a>
      </div>

      <!-- ==================================================================
       * 🚀 LAYER 1: PAID ADVERTISING & MULTI-CHANNEL ADS SCALING
       * ================================================================== -->
      <div class="layer-section" id="layer-ads">
        <div class="layer-banner">
          <div class="layer-tag">
            <i class="fa-solid fa-rocket"></i> LAYER 1 • PRIMARY SPECIALIZATION
          </div>
          <h3 class="layer-title">Paid Advertising & Multi-Channel Ads Scaling</h3>
          <p class="layer-subtitle">
            Pilar utama pertumbuhan bisnis: Perencanaan forecasting budget, eksekusi kampanye berbayar dari 0 hingga skala besar, serta alokasi anggaran bulanan hingga Rp200 juta yang menghasilkan omzet stabil Rp600M–800M/bulan dengan kestabilan ROAS 3.5x–50x.
          </p>
        </div>

        <!-- 🔷 Sub-Channel: Meta Ads (Facebook & Instagram) -->
        <div class="layer-channel-box">
          <div class="layer-channel-heading">
            <i class="fa-brands fa-meta"></i>
            <span>Meta Ads Manager & Selective Scaling</span>
            <span class="layer-channel-badge">${metaAds.length} Projects</span>
          </div>
          <div class="portfolio-grid">
            ${metaAds.map(renderProjectCardHtml).join('')}
          </div>
        </div>

        <!-- 🛍️ Sub-Channel: Shopee Ads & E-Commerce Store Scaling -->
        <div class="layer-channel-box">
          <div class="layer-channel-heading">
            <i class="fa-solid fa-bag-shopping"></i>
            <span>Shopee Ads & E-Commerce Store Scaling</span>
            <span class="layer-channel-badge">${shopeeAds.length} Projects</span>
          </div>
          <div class="portfolio-grid">
            ${shopeeAds.map(renderProjectCardHtml).join('')}
          </div>
        </div>

        <!-- 🎵 Sub-Channel: TikTok Ads (GMV Max) & Agency Client Campaigns -->
        <div class="layer-channel-box">
          <div class="layer-channel-heading">
            <i class="fa-brands fa-tiktok"></i>
            <span>TikTok Ads (GMV Max) & Agency Multi-Brand Scaling</span>
            <span class="layer-channel-badge">${tiktokAds.length} Projects</span>
          </div>
          <div class="portfolio-grid">
            ${tiktokAds.map(renderProjectCardHtml).join('')}
          </div>
        </div>
      </div>

      <!-- ==================================================================
       * 👑 LAYER 2: CUSTOMER OPERATIONS & TEAM LEADERSHIP
       * ================================================================== -->
      <div class="layer-section" id="layer-cs">
        <div class="layer-banner">
          <div class="layer-tag">
            <i class="fa-solid fa-crown"></i> LAYER 2 • OPERATIONAL EXCELLENCE & CLOSING STRATEGY
          </div>
          <h3 class="layer-title">Customer Operations, Team Leadership & High-Conversion Closing</h3>
          <p class="layer-subtitle">
            Kepemimpinan operasional divisi, supervisi 5 staf CS, mitigasi objection handling, alur kedisiplinan shift whiteboard, serta pencapaian rekor closing rate 87% dan omzet ratusan juta rupiah.
          </p>
        </div>

        <!-- 👑 Sub-Group: Team Leadership (Leader CS) -->
        <div class="layer-channel-box">
          <div class="layer-channel-heading">
            <i class="fa-solid fa-people-roof"></i>
            <span>Leader Customer Service & Supervisi Tim 5 Staf</span>
            <span class="layer-channel-badge">${leaderCS.length} Deliverables</span>
          </div>
          <div class="portfolio-grid">
            ${leaderCS.map(renderProjectCardHtml).join('')}
          </div>
        </div>

        <!-- 💬 Sub-Group: Customer Service Specialist & Closing Performance -->
        <div class="layer-channel-box">
          <div class="layer-channel-heading">
            <i class="fa-solid fa-comments"></i>
            <span>Customer Service Specialist & Closing Performance</span>
            <span class="layer-channel-badge">${staffCS.length} Deliverables</span>
          </div>
          <div class="portfolio-grid">
            ${staffCS.map(renderProjectCardHtml).join('')}
          </div>
        </div>
      </div>

      <!-- ==================================================================
       * 🎨 LAYER 3: COMMERCIAL GRAPHIC DESIGN & CREATIVE ASSETS
       * ================================================================== -->
      <div class="layer-section" id="layer-design">
        <div class="layer-banner">
          <div class="layer-tag">
            <i class="fa-solid fa-palette"></i> LAYER 3 • VISUAL ASSETS & COMMERCIAL BRANDING
          </div>
          <h3 class="layer-title">Commercial Graphic Design & Production Creatives</h3>
          <p class="layer-subtitle">
            Produksi 8–16 materi visual iklan harian (direct-response), poster komersial kompetisi olahraga resolusi tinggi, branding visual turnamen, dan perayaan gelar juara klub.
          </p>
        </div>

        <div class="layer-channel-box">
          <div class="layer-channel-heading">
            <i class="fa-solid fa-brush"></i>
            <span>High-Impact Sports Posters & Direct Response Creatives</span>
            <span class="layer-channel-badge">${designProjs.length} Works</span>
          </div>
          <div class="portfolio-grid">
            ${designProjs.map(renderProjectCardHtml).join('')}
          </div>
        </div>
      </div>

      <!-- 📰 OPSI A: EDITORIAL, PUBLISHED MEDIA & ACADEMIC SHOWCASE -->
      <div class="editorial-showcase-box" id="editorial-showcase-box">
        <div class="editorial-showcase-header">
          <div class="editorial-badge">
            <i class="fa-solid fa-newspaper"></i> Editorial & Communication Distinctions
          </div>
          <h3 class="editorial-showcase-title">Published Field Journalism & Production Works</h3>
          <p class="editorial-showcase-subtitle">
            Bukti kecakapan komunikasi formal: 10 liputan investigasi lapangan terbit resmi di Harian Republika & RM.id, produksi video komersial siar YouTube, serta kehormatan akademik Wisudawan Terbaik Amikom (IPK 3.81).
          </p>
        </div>

        <div class="editorial-grid" id="editorial-grid">
          <!-- Rendered via interactions.js -->
        </div>
      </div>
    </div>
  `;
}

/* ==============================================================================
 * 🛠️ 8. CORE COMPETENCIES (SKILLS & TOOLS) — USER ORDER 4
 * ============================================================================== */
function renderSkills(skills) {
  const slot = document.getElementById('skills-slot');
  if (!slot) return;

  const iconMap = {
    "Growth & Paid Advertising": "fa-solid fa-chart-line",
    "Customer Operations & Leadership": "fa-solid fa-users-gear",
    "Visual Communication & Creative": "fa-solid fa-pen-nib",
    "Public Communication & Journalism": "fa-solid fa-newspaper"
  };

  slot.innerHTML = `
    <div class="container section" id="skills">
      <div class="section-header">
        <span class="section-tag">Core Competencies</span>
        <h2 class="section-title">Skills & Tools</h2>
        <p class="section-subtitle">Operational platforms, analytical systems, and communication skillsets applied daily.</p>
      </div>
      <div class="skills-grid">
        ${skills.map(c => `
          <div class="skill-card">
            <h3 class="skill-card-title">
              <i class="${iconMap[c.category] || 'fa-solid fa-check-circle'}" style="color: var(--accent);"></i>
              ${c.category}
            </h3>
            <div class="skill-chips">
              ${c.items.map(item => `<span class="chip">${item}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ==============================================================================
 * 📬 9. CONTACT CTA BOX
 * ============================================================================== */
function renderContact(contact) {
  const slot = document.getElementById('contact-slot');
  if (!slot) return;

  slot.innerHTML = `
    <div class="container section" id="contact">
      <div class="cta-box">
        <h2 style="font-size: clamp(2rem, 3.5vw, 2.5rem); margin-bottom: 12px; font-weight: 800;">${contact.heading}</h2>
        <p style="max-width: 600px; margin: 0 auto 32px; font-size: 1.05rem; color: var(--text-secondary); line-height: 1.7;">${contact.subheading}</p>
        <div class="cta-actions">
          <a href="${contact.ctaLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-cta-lg">
            <i class="fa-brands fa-whatsapp"></i> ${contact.ctaText}
          </a>
          <a href="mailto:${contact.email}" class="btn btn-outline btn-cta-lg">
            <i class="fa-solid fa-envelope"></i> Send Email
          </a>
        </div>
      </div>
    </div>
  `;
}

/* ==============================================================================
 * 🎨 10. STYLE & ACCENT COLOR SWITCHER
 * ============================================================================== */
function initStyleAndThemeSwitcher(currentStyle, currentAccent) {
  const switcher = document.createElement('div');
  switcher.className = 'theme-picker';
  switcher.title = 'Switch Visual Art Style & Accent Color';

  const styles = [
    { id: 'tech-glossy', label: 'Tech Glossy (Vercel)' },
    { id: 'warm-editorial', label: 'Warm Editorial (Kinfolk)' },
    { id: 'human-minimal', label: 'Human Minimal (Stripe)' },
    { id: 'organic-earthy', label: 'Organic Earthy (Aesop)' },
    { id: 'neo-heritage', label: 'Neo Heritage (Cultural)' }
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
          title="${a.id} Accent">
    </span>
  `).join('');

  switcher.innerHTML = `
    <select class="style-select" onchange="setArtStyle(this.value)" title="Choose Art Style">
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
