/**
 * ==============================================================================
 * 🎯 INTERACTIONS & EVENT LISTENERS (NESSA KAMALIKA)
 * ==============================================================================
 * Category filtering, lightbox previews, and accessible keyboard handlers.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data || !data.projects) return;

  // Render initial projects (category: all)
  renderFilteredProjects('all');

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
  ads: 'Paid Traffic & Growth',
  cs: 'Customer Operations',
  design: 'Commercial Design',
  media: 'Media & Journalism'
};

function renderFilteredProjects(category) {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  const projects = window.PORTFOLIO_DATA?.projects || [];
  const filtered = category === 'all' 
    ? projects 
    : projects.filter(p => p.category === category);

  grid.innerHTML = filtered.map(p => {
    const categoryLabel = categoryNameMap[p.category] || p.category;
    const safeDesc = (p.description || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    const safeTitle = (p.title || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');

    return `
      <div class="project-card fade-in" onclick="openLightbox('${p.image}', '${safeTitle}', '${safeDesc}')">
        <div class="project-thumb-box">
          <img src="${p.image}" alt="${p.title}" class="project-thumb" loading="lazy" />
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
        </div>
      </div>
    `;
  }).join('');
}

// 🖼️ MODAL LIGHTBOX
window.openLightbox = function(imageSrc, title, desc) {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');

  if (!modal || !modalImg) return;

  modalImg.src = imageSrc;
  modalTitle.textContent = title || '';
  modalDesc.textContent = desc || '';

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
