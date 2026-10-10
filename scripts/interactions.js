/**
 * ==============================================================================
 * 🎯 INTERACTIONS & EVENT LISTENERS (NESSA KAMALIKA)
 * ==============================================================================
 * Smart category filtering, flagship showcase mode, rich modal with live links,
 * and accessible keyboard event handlers.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data || !data.projects) return;

  // Render initial projects: Default to 'featured' (Top 3 Flagship Highlights)
  renderFilteredProjects('featured');

  // Category Filter Tabs Event Listeners
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');
      renderFilteredProjects(category);
    });
  });

  // Setup Lightbox Modal Close Event
  setupModalEvents();
});

const categoryNameMap = {
  featured: 'Flagship Highlights',
  ads: 'Paid Traffic & Growth',
  cs: 'Customer Operations',
  design: 'Commercial Design',
  media: 'Media & Journalism',
  all: 'All Projects'
};

function renderFilteredProjects(category) {
  const grid = document.getElementById('portfolio-grid');
  const actionsSlot = document.getElementById('portfolio-actions-slot');
  if (!grid) return;

  const projects = window.PORTFOLIO_DATA?.projects || [];
  
  let filtered = [];
  if (category === 'featured') {
    filtered = projects.filter(p => p.featured === true);
  } else if (category === 'all') {
    filtered = projects;
  } else {
    filtered = projects.filter(p => p.category === category);
  }

  // Render Project Cards Grid
  grid.innerHTML = filtered.map(p => {
    const categoryLabel = categoryNameMap[p.category] || p.category;
    const safeDesc = (p.description || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    const safeTitle = (p.title || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    const isFeatured = p.featured === true;
    const hasLinks = p.links && p.links.length > 0;

    return `
      <div class="project-card fade-in" onclick="openLightbox('${p.image}', '${safeTitle}', '${safeDesc}', '${p.id}')">
        <div class="project-thumb-box">
          <img src="${p.image}" alt="${p.title}" class="project-thumb" loading="lazy" />
          ${isFeatured ? '<div class="flagship-badge">★ Flagship Impact</div>' : ''}
          ${p.metrics ? `<div class="project-pill-metric">${p.metrics}</div>` : ''}
        </div>
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

  // Render Actions & Counter Slot
  if (actionsSlot) {
    if (category === 'featured') {
      actionsSlot.innerHTML = `
        <div class="portfolio-actions">
          <button class="btn btn-primary" onclick="switchPortfolioTab('all')">
            <i class="fa-solid fa-layer-group"></i> Browse All Projects (${projects.length}) ↓
          </button>
        </div>
        <div class="portfolio-counter">
          Showing 3 flagship case studies with highest revenue & conversion impact.
        </div>
      `;
    } else if (category === 'all') {
      actionsSlot.innerHTML = `
        <div class="portfolio-actions">
          <button class="btn btn-outline" onclick="switchPortfolioTab('featured')">
            <i class="fa-solid fa-star"></i> Collapse to Flagship Highlights (3) ↑
          </button>
        </div>
        <div class="portfolio-counter">
          Showing all ${projects.length} verified project deliverables across all disciplines.
        </div>
      `;
    } else {
      actionsSlot.innerHTML = `
        <div class="portfolio-actions">
          <button class="btn btn-outline btn-sm" onclick="switchPortfolioTab('featured')">
            <i class="fa-solid fa-arrow-left"></i> Back to Flagship Highlights
          </button>
          <button class="btn btn-outline btn-sm" onclick="switchPortfolioTab('all')">
            View All Projects (${projects.length}) →
          </button>
        </div>
        <div class="portfolio-counter">
          Showing ${filtered.length} deliverables under "${categoryNameMap[category] || category}".
        </div>
      `;
    }
  }
}

// 🔀 Global Tab Switcher Function
window.switchPortfolioTab = function(categoryId) {
  const targetBtn = document.querySelector(`.tab-btn[data-category="${categoryId}"]`);
  if (targetBtn) {
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(b => b.classList.remove('active'));
    targetBtn.classList.add('active');
    
    renderFilteredProjects(categoryId);

    // Smooth scroll to portfolio section header
    const portfolioSec = document.getElementById('portfolio');
    if (portfolioSec) {
      portfolioSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

// 🖼️ MODAL LIGHTBOX WITH RICH MEDIA LINKS SUPPORT
window.openLightbox = function(imageSrc, title, desc, projectId) {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalExtra = document.getElementById('modal-extra');

  if (!modal) return;

  if (modalImg) modalImg.src = imageSrc || '';
  if (modalTitle) modalTitle.textContent = title || '';
  if (modalDesc) modalDesc.textContent = desc || '';

  // Render Rich Media Links if available
  if (modalExtra) {
    modalExtra.innerHTML = '';

    if (projectId) {
      const project = window.PORTFOLIO_DATA?.projects?.find(p => p.id === projectId);
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
