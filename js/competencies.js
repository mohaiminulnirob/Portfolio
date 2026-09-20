/* Project and skill data is kept here so updates stay within the existing structure. */
const portfolioProjects = [
  {
    title: 'SUST Spot Booking System', type: 'Featured web application', date: 'Jan–Aug 2026',
    description: 'A centralized platform for booking SUST campus spots, with availability tracking and administrative controls.',
    role: 'Team lead · 3-member team',
    stack: ['React', 'Vite', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Cloudinary', 'SMTP'],
    details: ['Led a three-member team to build the campus booking platform.', 'Developed REST APIs, JWT authentication, role-based access control, and MySQL integration.', 'Implemented multi-stage admin approvals, email notifications, and role-specific booking authorization.'],
    repo: 'https://github.com/mohaiminulnirob/swe350-sust-spot-booking',
    demo: 'https://swe350-sust-spot-booking.vercel.app/'
  },
  {
    title: 'FixMate', type: 'Featured web application', date: 'Oct–Dec 2025',
    description: 'A full-stack household service platform connecting users with verified local professionals.',
    role: 'Full-stack development',
    stack: ['Node.js', 'Express.js', 'MySQL', 'JavaScript', 'JWT', 'Cloudinary', 'SMTP'],
    details: ['Built workflows for finding and assigning local service professionals.', 'Implemented geographic worker assignment, job tracking, ratings, and secure authentication.'],
    repo: 'https://github.com/mohaiminulnirob/smart-household-service-system',
    demo: 'https://fixmate-gci6.onrender.com/'
  },
  {
    title: 'Astro Run Save Planet', type: 'Desktop game', date: 'Jun–Sep 2024',
    description: 'A 2D space adventure with shooting, enemies, collectibles, and multiple game modes.',
    role: 'Game development',
    stack: ['Java', 'LibGDX', 'Gradle', 'LWJGL3', 'Box2D'],
    details: ['Developed gameplay with collision detection, game-state management, and scoring.', 'Implemented audio, interface elements, and particle effects.'],
    repo: 'https://github.com/mohaiminulnirob/SWE224_GAME'
  }
];

const portfolioResearch = [
  {
    title: 'Explainable Machine Learning Framework', type: 'ML · Deep learning · XAI', date: 'Jan 2026–Present',
    description: 'Studying the relationship between social media use and academic performance across four independent, cross-country datasets.',
    role: 'First author', status: 'Manuscript in revision at Heliyon',
    stack: ['Machine learning', 'Deep learning', 'Explainable AI', 'SHAP'],
    details: ['Developed a leakage-free ML/DL evaluation framework with SHAP-based interpretability.', 'Led conceptualization, methodology design, software implementation, and manuscript writing.'],
    repo: 'https://github.com/mohaiminulnirob/explainable-ml-social_media-academic_performance',
    materials: 'https://drive.google.com/drive/folders/112iF6B_HWzLZTgTAaPpnBkPnN_hkgIwH?usp=sharing'
  },
  {
    title: 'Legal-RAG-BD', type: 'Bangladesh-focused legal AI', date: 'Jul 2026–Present',
    description: 'Developing a legal AI system that combines evidence-grounded retrieval with multi-step legal reasoning.',
    role: 'Research & development', status: 'In development',
    stack: ['LLMs', 'RAG', 'Agent orchestration'],
    details: ['Combining retrieval with clarification and uncertainty-aware responses.', 'Exploring ways to improve the reliability of assistance with Bangladesh legal information.'],
    repo: 'https://github.com/mohaiminulnirob/Legal-RAG-BD'
  }
];

const portfolioSkills = [
  ['Languages', ['C', 'C++', 'Java', 'JavaScript', 'Python', 'Dart', 'SQL']],
  ['Web & APIs', ['React', 'Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'WebSockets', 'JWT']],
  ['Databases', ['MySQL', 'PostgreSQL', 'MongoDB']],
  ['AI & machine learning', ['TensorFlow', 'Keras', 'RAG', 'LangChain', 'LangGraph', 'LLMs']],
  ['Data analysis', ['NumPy', 'Pandas', 'Matplotlib', 'EDA']],
  ['Testing & automation', ['JUnit', 'Selenium']],
  ['Deployment', ['Docker', 'Vercel', 'Render']],
  ['Tools', ['Git / GitHub', 'Postman', 'Jupyter Notebook', 'Hadoop']],
  ['Mobile', ['Flutter', 'Firebase']]
];

function projectCard(project) {
  return `
    <article class="project-card">
      <div class="card-topline"><span class="project-type">${project.type}</span><span class="date-label">${project.date}</span></div>
      <h4>${project.title}</h4>
      <p class="project-role">${project.role}</p>
      ${project.status ? '<p class="project-status"><span class="status-dot" aria-hidden="true"></span>' + project.status + '</p>' : ''}
      <p class="project-description">${project.description}</p>
      <ul class="tags" aria-label="Technologies">${project.stack.map(skill => '<li>' + skill + '</li>').join('')}</ul>
      <details class="project-details"><summary>My contributions<span class="sr-only"> to ${project.title}</span></summary><ul>${project.details.map(detail => '<li>' + detail + '</li>').join('')}</ul></details>
      <div class="project-links">
        <a href="${project.repo}" target="_blank" rel="noopener noreferrer" aria-label="${project.title}: GitHub repository"><i class="fa fa-github" aria-hidden="true"></i> Repository <span aria-hidden="true">↗</span></a>
        ${project.demo ? '<a href="' + project.demo + '" target="_blank" rel="noopener noreferrer" aria-label="' + project.title + ': Live demo">Live Demo <span aria-hidden="true">↗</span></a>' : ''}
        ${project.materials ? '<a href="' + project.materials + '" target="_blank" rel="noopener noreferrer">Research Materials <span aria-hidden="true">↗</span></a>' : ''}
      </div>
    </article>
  `;
}

function renderCompetenciesPage(container) {
  const wrapper = document.createElement('div');
  wrapper.className = 'competencies-page';
  wrapper.innerHTML = `
    <header class="page-heading">
      <p class="eyebrow">03 / Work & capabilities</p>
      <h2 id="pageTitle" tabindex="-1">Ideas put into <span class="accent-text">practice.</span></h2>
      <p class="page-lead">Selected software, ongoing research, and the skills behind them.</p>
    </header>
    <nav class="section-nav" aria-label="Competencies sections"><a href="#projects">Projects</a><a href="#research">Research</a><a href="#skills">Technical Skills</a><a href="#achievements">Achievements</a></nav>
    <section class="content-section" aria-labelledby="projects">
      <div class="section-heading"><h3 id="projects" tabindex="-1">Selected projects</h3><span class="section-caption">Built to solve real problems</span></div>
      <div class="projects-grid">${portfolioProjects.map(projectCard).join('')}</div>
      <div class="additional-projects"><h4>More things I've built</h4><div class="additional-grid">
        <a href="https://github.com/mohaiminulnirob/CalculatorApp_SWE224" target="_blank" rel="noopener noreferrer"><span>Calculator Application<small>Java Swing</small></span><span aria-hidden="true">↗</span></a>
        <a href="https://github.com/mohaiminulnirob/SWE_150_Snake_Game" target="_blank" rel="noopener noreferrer"><span>Snake Game<small>C · SDL2</small></span><span aria-hidden="true">↗</span></a>
        <a href="https://github.com/mohaiminulnirob/task03-swe330" target="_blank" rel="noopener noreferrer"><span>Task Manager<small>Application project</small></span><span aria-hidden="true">↗</span></a>
        <a href="https://github.com/mohaiminulnirob/SWE-250_Android_App" target="_blank" rel="noopener noreferrer"><span>Spot Booking · Android<small>Flutter · Firebase</small></span><span aria-hidden="true">↗</span></a>
      </div></div>
    </section>
    <section class="content-section" aria-labelledby="research">
      <div class="section-heading"><h3 id="research" tabindex="-1">Research & exploration</h3><span class="section-caption">Work in progress</span></div>
      <div class="research-grid">${portfolioResearch.map(projectCard).join('')}</div>
    </section>
    <section class="content-section" aria-labelledby="skills">
      <div class="section-heading"><h3 id="skills" tabindex="-1">Technical toolkit</h3></div>
      <p class="section-intro">Technologies I've worked with across projects, research, and coursework.</p>
      <div class="skills-grid">${portfolioSkills.map(([title, skills]) => '<article class="skill-group"><h4>' + title + '</h4><ul class="tags">' + skills.map(skill => '<li>' + skill + '</li>').join('') + '</ul></article>').join('')}</div>
    </section>
    <section class="content-section" aria-labelledby="achievements">
      <div class="section-heading"><h3 id="achievements" tabindex="-1">Co-Curricular Activities</h3></div>
      <div class="cp-card">
        <div><p class="eyebrow">Problem solving</p><div class="cp-stats"><p><strong>1,400+</strong><span>Problems solved</span></p><p><strong>1,329</strong><span>Codeforces max rating</span></p></div><p class="section-intro">Practicing algorithms, data structures, and problem-solving across online judges.</p><div class="project-links"><a href="https://codeforces.com/profile/MohaiMinul2002" target="_blank" rel="noopener noreferrer">Codeforces · MohaiMinul2002 ↗</a><a href="https://www.stopstalk.com/user/profile/mohaiminul2002" target="_blank" rel="noopener noreferrer">StopStalk ↗</a></div></div>
        <details class="practice-links"><summary>Practice repositories</summary><ul><li><a href="https://github.com/mohaiminulnirob/Competitive_Programming" target="_blank" rel="noopener noreferrer">Competitive Programming</a></li><li><a href="https://github.com/mohaiminulnirob/SWE-222_CP" target="_blank" rel="noopener noreferrer">SWE 222 · Competitive Programming</a></li><li><a href="https://github.com/mohaiminulnirob/SWE-230_Algorithm" target="_blank" rel="noopener noreferrer">SWE 230 · Algorithms</a></li></ul></details>
      </div>
      <article class="award-card"><span class="award-icon" aria-hidden="true">★</span><div><p class="eyebrow">Regional award · 2024</p><h4>2nd Runner-Up · NASA Space Apps Challenge</h4><p>Team SUST-Brainstormers · Sylhet Region</p><a class="text-link" href="https://drive.google.com/file/d/1w14yuK4erugCkcvb9Lh5mCsNv89zvOVa/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Certificate <span aria-hidden="true">↗</span></a></div></article>
      <h4 class="participation-title">Competition participation</h4>
      <ul class="participation-list">
        <li><span>Intra SUST Programming Contest</span><span class="date-label">2024</span></li>
        <li><span>ICPC Asia Dhaka Regional · Preliminary</span><span class="date-label">2025</span></li>
        <li><span>SUST CSE Carnival · Hackathon · Preliminary Round</span><span class="date-label">2026</span></li>
        <li><span>IUT 12th ICT Fest · Preliminary Round</span><span class="date-label">2026</span></li>
      </ul>
    </section>
  `;
  wrapper.appendChild(createNextArrow('contact', 'Next: Contact Me'));
  container.appendChild(wrapper);
}
