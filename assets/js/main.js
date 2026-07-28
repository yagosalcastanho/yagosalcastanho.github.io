import { initTypewriter } from './typewriter.js';
import { initScrollReveal } from './scroll-reveal.js';
import { initNav } from './nav.js';
import { initCounters } from './counter.js';

const TITLES = [
  'Data Engineer',
  'Data Analyst',
  'ETL Pipeline Builder',
  'BI Developer',
  'Python Enthusiast',
];

const SKILLS = [
  {
    title: '// linguagens',
    tags: ['Python', 'SQL', 'Bash'],
    green: false,
  },
  {
    title: '// análise & BI',
    tags: ['Power BI', 'DAX', 'Power Query', 'KPI Development', 'Data Cleansing', 'Reporting'],
    green: true,
  },
  {
    title: '// engenharia de dados',
    tags: ['Apache Airflow', 'Apache Kafka', 'ETL / ELT', 'Data Pipelines', 'Data Warehouse', 'Modelagem de Dados'],
    green: true,
  },
  {
    title: '// python & libs',
    tags: ['Pandas', 'PySpark', 'scikit-learn', 'Hadoop', 'APIs REST', 'Flask'],
    green: false,
  },
  {
    title: '// bancos de dados',
    tags: ['PostgreSQL', 'SQL Server', 'MySQL', 'MariaDB'],
    green: false,
  },
  {
    title: '// cloud & infra',
    tags: ['AWS', 'Docker', 'Linux', 'Git', 'GitHub', 'N8N'],
    green: false,
  },
  {
    title: '// metodologias',
    tags: ['Scrum', 'Kanban'],
    green: true,
  },
];

const FILTER_LABELS = {
  all: 'Todos',
  pipelines: 'Pipelines',
  bi: 'BI',
  streaming: 'Streaming',
  ml: 'ML',
};

async function loadProjects() {
  const response = await fetch('./data/projects.json');
  if (!response.ok) throw new Error('Failed to load projects');
  return response.json();
}

function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  grid.innerHTML = SKILLS.map((group) => `
    <div class="skill-group reveal">
      <p class="skill-group-title">${group.title}</p>
      <div class="skill-tags">
        ${group.tags.map((tag) =>
          `<span class="tag${group.green ? ' green' : ''}">${tag}</span>`
        ).join('')}
      </div>
    </div>
  `).join('');
}

function renderProjectCard(project) {
  const badge = project.featured
    ? '<span class="project-badge">Featured</span>'
    : '';

  return `
    <a class="project-card reveal reveal-stagger"
       href="${project.url}"
       target="_blank"
       rel="noopener noreferrer"
       data-category="${project.category}">
      <div class="project-header">
        <span class="project-icon">${project.icon}</span>
        <div style="display:flex;gap:0.5rem;align-items:center;">
          ${badge}
          <span class="project-link-icon" aria-hidden="true">↗</span>
        </div>
      </div>
      <div>
        <p class="project-name">${project.name}</p>
        <p class="project-desc">${project.description}</p>
      </div>
      <div class="project-stack">
        ${project.stack.map((tech) => `<span class="stack-tag">${tech}</span>`).join('')}
      </div>
    </a>
  `;
}

function renderProjects(projects) {
  const grid = document.getElementById('projects-grid');
  const filters = document.getElementById('project-filters');
  if (!grid || !filters) return;

  const categories = ['all', ...new Set(projects.map((p) => p.category))];

  filters.innerHTML = categories.map((cat) => `
    <button class="filter-btn${cat === 'all' ? ' active' : ''}"
            data-filter="${cat}"
            type="button">
      ${FILTER_LABELS[cat] ?? cat}
    </button>
  `).join('');

  grid.innerHTML = projects.map(renderProjectCard).join('');

  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    filters.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    grid.querySelectorAll('.project-card').forEach((card) => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.style.display = show ? '' : 'none';
    });
  });
}

function initRevealTargets() {
  document.querySelectorAll('.stat-card, .exp-card').forEach((el) => {
    el.classList.add('reveal');
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  initTypewriter('typed-title', TITLES);
  initNav();
  renderSkills();

  try {
    const projects = await loadProjects();
    renderProjects(projects);
    document.getElementById('stat-projects')?.setAttribute('data-count', String(projects.length));
  } catch (err) {
    console.error(err);
    const grid = document.getElementById('projects-grid');
    if (grid) {
      grid.innerHTML = '<p class="project-desc">Não foi possível carregar os projetos.</p>';
    }
  }

  initRevealTargets();
  initScrollReveal('.reveal');
  initCounters('[data-count]');
});
