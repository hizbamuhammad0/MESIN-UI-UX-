/**
 * ==============================================================================
 * 🎯 INTERACTIONS & EVENT LISTENERS (NESSA KAMALIKA)
 * ==============================================================================
 * Smart category filtering, flagship showcase mode, rich modal with live links,
 * image-optional editorial card rendering, and accessible keyboard handlers.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  // Render Editorial & Published Media Showcase (Opsi A)
  renderEditorialShowcase();

  // 3-Layer Navigation Smooth Scroll & Active Indicator
  const layerNavBtns = document.querySelectorAll('.layer-nav-btn');
  layerNavBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = btn.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          layerNavBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        }
      }
    });
  });

  // Setup Lightbox Modal Close Event
  setupModalEvents();
});

const categoryNameMap = {
  all: 'All Works',
  ads: 'Paid Advertising',
  leader: 'Customer Operations & Leadership',
  cs: 'Customer Service Specialist',
  design: 'Commercial Graphic Design'
};

const pillarSummaryMap = {
  all: 'Displaying complete portfolio deliverables: Multi-channel paid ads acquisition (Meta, TikTok, Shopee), customer operations leadership & IDR 746M revenue recap, 87% peak sales closing rate, and commercial graphic design.',
  ads: 'Displaying performance marketing & ad scaling portfolio: Meta Ads large-scale budget allocation (IDR 200M/month), multi-store Shopee Ads, Agency 7-Brand TikTok GMV Max, Dewanta Trans Travel, and ROAS selective scaling.',
  leader: 'Displaying customer operations & leadership deliverables: IDR 746M revenue verification with 3,612 successful orders, 5-staff CS monitoring dashboard, whiteboard shift timetable, and daily strategy briefings.',
  cs: 'Displaying customer service specialist achievements: Best CS Performance Award 2024 (closing rate 87%, revenue IDR 400M–600M), management chat proof, redirect closing accuracy, and operational readiness.',
  design: 'Displaying commercial graphic design portfolio: Premier League matchday posters, Borcelle FC branding, championship celebration artworks, football academy promotions, and daily direct-response ad creatives.'
};

function renderFilteredProjects(category) {
  const grid = document.getElementById('portfolio-grid');
  const actionsSlot = document.getElementById('portfolio-actions-slot');
  if (!grid) return;

  const projects = window.PORTFOLIO_DATA?.projects || [];
  
  const filtered = (!category || category === 'all') 
    ? projects 
    : projects.filter(p => p.category === category);

  // Render Project Cards Grid
  grid.innerHTML = (filtered.length > 0 ? filtered : projects).map(p => {
    const categoryLabel = categoryNameMap[p.category] || p.category;
    const safeDesc = (p.description || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    const safeTitle = (p.title || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    const isFeatured = p.featured === true;
    const hasImage = p.image && p.image.trim() !== '';
    const hasLinks = p.links && p.links.length > 0;

    const headerHtml = hasImage
      ? `
        <div class="project-thumb-box">
          <img src="${p.image}" alt="${p.title}" class="project-thumb" loading="lazy" />
          ${isFeatured ? '<div class="flagship-badge">★ Core Deliverable</div>' : ''}
          ${p.metrics ? `<div class="project-pill-metric">${p.metrics}</div>` : ''}
        </div>
      `
      : `
        <div class="editorial-header-bar">
          <div class="editorial-icon-badge">
            <i class="${p.icon || 'fa-solid fa-file-lines'}"></i>
          </div>
          ${p.metrics ? `<div class="editorial-metric-pill">${p.metrics}</div>` : ''}
        </div>
      `;

    return `
      <div class="project-card ${hasImage ? '' : 'editorial-card'} fade-in" onclick="openLightbox('${p.image || ''}', '${safeTitle}', '${safeDesc}', '${p.id}')">
        ${headerHtml}
        <div class="project-content">
          <span class="project-category-tag">${categoryLabel}</span>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-subtitle">${p.subtitle}</p>
          <p class="project-desc">${p.description}</p>
          <div class="project-tags">
            ${(p.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          ${hasLinks ? `
            <div class="project-card-footer">
              <span class="project-links-badge">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> ${p.links.length} Live Links & Works
              </span>
              <span style="font-size: 0.78rem; font-weight: 700; color: var(--accent);">Explore ↗</span>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  // Render Actions & Summary
  if (actionsSlot) {
    actionsSlot.innerHTML = `
      <div class="portfolio-counter">
        <i class="fa-solid fa-circle-check" style="color: var(--accent); margin-right: 6px;"></i>
        ${pillarSummaryMap[category] || `Displaying ${filtered.length} deliverables in this specialization.`}
      </div>
    `;
  }
}

// 📰 Render Seksi Opsi A: Editorial, Published Media & Academic Distinctions
function renderEditorialShowcase() {
  const grid = document.getElementById('editorial-grid');
  if (!grid) return;

  const editorials = window.PORTFOLIO_DATA?.editorialProjects || [];
  grid.innerHTML = editorials.map(e => {
    const safeDesc = (e.description || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    const safeTitle = (e.title || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    const hasLinks = e.links && e.links.length > 0;

    return `
      <div class="project-card editorial-card fade-in" onclick="openLightbox('${e.image || ''}', '${safeTitle}', '${safeDesc}', '${e.id}')">
        <div class="editorial-header-bar">
          <div class="editorial-icon-badge">
            <i class="${e.icon || 'fa-solid fa-file-lines'}"></i>
          </div>
          ${e.metrics ? `<div class="editorial-metric-pill">${e.metrics}</div>` : ''}
        </div>
        <div class="project-content">
          <span class="project-category-tag">Verified Communication Distinctions</span>
          <h3 class="project-title">${e.title}</h3>
          <p class="project-subtitle">${e.subtitle}</p>
          <p class="project-desc">${e.description}</p>
          <div class="project-tags">
            ${(e.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          ${hasLinks ? `
            <div class="project-card-footer">
              <span class="project-links-badge">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> ${e.links.length} Publications & Video Works
              </span>
              <span style="font-size: 0.78rem; font-weight: 700; color: var(--accent);">Explore ↗</span>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// 🔀 Global Tab Switcher Function
window.switchPortfolioTab = function(categoryId) {
  const targetBtn = document.querySelector(`.tab-btn[data-category="${categoryId}"]`);
  if (targetBtn) {
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(b => b.classList.remove('active'));
    targetBtn.classList.add('active');
    
    renderFilteredProjects(categoryId);
  }
};

// 🖼️ MODAL LIGHTBOX WITH CLEAN ADAPTIVE DISPLAY
window.openLightbox = function(imageSrc, title, desc, projectId) {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalExtra = document.getElementById('modal-extra');

  if (!modal) return;

  // Reset scroll to top so content is immediately centered and viewed from the beginning
  const modalCard = modal.querySelector('.modal-card');
  if (modalCard) modalCard.scrollTop = 0;

  // Adaptive Image Display: Hide completely if no image or empty string
  if (modalImg) {
    if (imageSrc && imageSrc.trim() !== '') {
      modalImg.src = imageSrc;
      modalImg.style.display = 'block';
    } else {
      modalImg.src = '';
      modalImg.style.display = 'none';
    }
  }

  if (modalTitle) modalTitle.textContent = title || '';
  if (modalDesc) modalDesc.textContent = desc || '';

  // Render Rich Media Links if available
  if (modalExtra) {
    modalExtra.innerHTML = '';

    if (projectId) {
      const project = window.PORTFOLIO_DATA?.projects?.find(p => p.id === projectId)
        || window.PORTFOLIO_DATA?.editorialProjects?.find(p => p.id === projectId);
      if (project && project.links && project.links.length > 0) {
        const typeIconMap = {
          news: 'fa-solid fa-newspaper',
          video: 'fa-solid fa-circle-play',
          award: 'fa-solid fa-award'
        };
        const typeActionMap = {
          news: 'Read Article ↗',
          video: 'Watch Video ↗',
          award: 'View Recognition ↗'
        };

        const linksHtml = project.links.map(item => `
          <div class="modal-link-item">
            <div class="modal-link-info">
              <div class="modal-link-publisher">
                <i class="${typeIconMap[item.type] || 'fa-solid fa-link'}"></i>
                <span>${item.publisher}</span>
              </div>
              <div class="modal-link-title">${item.title}</div>
            </div>
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="modal-link-btn">
              ${typeActionMap[item.type] || 'Visit ↗'}
            </a>
          </div>
        `).join('');

        modalExtra.innerHTML = `
          <div class="modal-links-section">
            <h4 class="modal-links-heading">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Verified Publications & Direct Links (${project.links.length})
            </h4>
            <div class="modal-links-list">
              ${linksHtml}
            </div>
          </div>
        `;
      }
    }
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;

  modal.classList.remove('active');
  document.body.style.overflow = '';
};

function setupModalEvents() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      window.closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      window.closeLightbox();
    }
  });
}
