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
          <div class="pop-tag-float pop-tag-1">📈 3.5x–5.0x ROAS Multi-Channel</div>
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
    'META & TIKTOK ADS SCALING',
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
        <span class="section-tag">Work Showcase</span>
        <h2 class="section-title">Projects & Portfolio</h2>
        <p class="section-subtitle">Tangible campaign deliverables, lead management workflows, commercial design compositions, and verified reporting.</p>
      </div>

      <div class="filter-tabs" id="portfolio-tabs">
        ${tabsHtml}
      </div>

      <div class="portfolio-grid" id="portfolio-grid">
        <!-- Rendered via interactions.js -->
      </div>

      <div id="portfolio-actions-slot">
        <!-- Rendered via interactions.js -->
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
        <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
          <a href="${contact.ctaLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 14px 30px; font-size: 1rem;">
            <i class="fa-brands fa-whatsapp"></i> ${contact.ctaText}
          </a>
          <a href="mailto:${contact.email}" class="btn btn-outline" style="padding: 14px 30px; font-size: 1rem;">
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
