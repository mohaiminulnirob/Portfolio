/* Education and leadership progression. Dates and results follow the supplied CV. */
function renderLearningPathPage(container) {
  const wrapper = document.createElement('div');
  wrapper.className = 'learning-path-page';
  wrapper.innerHTML = `
    <header class="page-heading">
      <p class="eyebrow">02 / Learning & growth</p>
      <h2 id="pageTitle" tabindex="-1">A foundation to <span class="accent-text">build on.</span></h2>
      <p class="page-lead">Academic learning, hands-on practice, and growing with a community.</p>
    </header>
    <section class="education-card" aria-labelledby="universityTitle">
      <div class="card-topline"><span class="badge">Education</span><span class="date-label">2023–Present</span></div>
      <h3 id="universityTitle">BSc in Software Engineering</h3>
      <p>Shahjalal University of Science and Technology, Sylhet</p>
      <div class="academic-result"><strong>3.96 <span>/ 4.00</span></strong><div><p>CGPA through the sixth semester</p><p class="muted">Highest CGPA among 50 students · SWE 2021–22 cohort</p></div></div>
    </section>
    <section class="content-section" aria-labelledby="courseworkTitle">
      <div class="section-heading"><h3 id="courseworkTitle">Academic foundations</h3><span class="section-caption">Explore my lab work ↗</span></div>
      <div class="course-grid">
        <a href="https://github.com/mohaiminulnirob/DATA_STRUCTURE_LAB" target="_blank" rel="noopener noreferrer">Data Structures <span aria-hidden="true">↗</span></a>
        <a href="https://github.com/mohaiminulnirob/OOP_PREPARATIONS" target="_blank" rel="noopener noreferrer">Object-Oriented Programming <span aria-hidden="true">↗</span></a>
        <a href="https://github.com/mohaiminulnirob/os-lab-tasks" target="_blank" rel="noopener noreferrer">Operating Systems <span aria-hidden="true">↗</span></a>
        <a href="https://github.com/mohaiminulnirob/socket-assignment" target="_blank" rel="noopener noreferrer">Computer Networking <span aria-hidden="true">↗</span></a>
        <a href="https://github.com/mohaiminulnirob/design-pattern-lab-practices" target="_blank" rel="noopener noreferrer">Design Patterns <span aria-hidden="true">↗</span></a>
        <a href="https://github.com/mohaiminulnirob/AI_Lab" target="_blank" rel="noopener noreferrer">Artificial Intelligence <span aria-hidden="true">↗</span></a>
        <a href="https://github.com/mohaiminulnirob/VnV-LAB" target="_blank" rel="noopener noreferrer">Software Verification & Validation <span aria-hidden="true">↗</span></a>
        <a href="https://github.com/mohaiminulnirob/distributed-system-hadoop-practice" target="_blank" rel="noopener noreferrer">Distributed Systems <span aria-hidden="true">↗</span></a>
      </div>
    </section>
    <section class="content-section" aria-labelledby="leadershipTitle">
      <div class="section-heading"><h3 id="leadershipTitle">Growing through leadership</h3></div>
      <p class="section-intro">Over two years helping lead technical, cultural, and sports events with the <a href="https://www.facebook.com/swesocietysust" target="_blank" rel="noopener noreferrer">Software Engineering Society, SUST</a>.</p>
      <ol class="timeline">
        <li><div class="timeline-meta"><span class="date-label">September 2026–Present</span><span class="badge badge-green">Current role</span></div><h4>Vice-President</h4><p>7th Committee · SWE Society, SUST</p></li>
        <li><span class="date-label">July 2025–August 2026</span><h4>Organizing Secretary</h4><p>6th Committee · SWE Society, SUST</p></li>
        <li><span class="date-label">July 2024–June 2025</span><h4>Assistant Organizing Secretary</h4><p>5th Committee · SWE Society, SUST</p></li>
      </ol>
    </section>
    <section class="content-section" aria-labelledby="earlierEducation">
      <div class="section-heading"><h3 id="earlierEducation">Earlier education</h3></div>
      <div class="earlier-grid">
        <article class="small-card"><span class="date-label">2018–2020</span><h4>Birshreshtha Noor Mohammad Public College</h4><p>College · Dhaka</p><p><strong>HSC GPA: 5.00/5.00</strong></p></article>
        <article class="small-card"><span class="date-label">2013–2018</span><h4>Mollarhat High School</h4><p>High school · Kalkini, Madaripur</p><p><strong>SSC GPA: 5.00/5.00</strong></p></article>
      </div>
    </section>
    <section class="beyond-classroom" aria-labelledby="beyondTitle"><h3 id="beyondTitle">Beyond the classroom</h3><p>Football, cricket, and badminton keep me active, including representing my department in football tournaments. I also enjoy cultural programs and poem recitation, with awards for my performances.</p></section>
  `;
  wrapper.appendChild(createNextArrow('learnings', 'Next: Competencies'));
  container.appendChild(wrapper);
}
