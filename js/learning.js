/* ===== Learning Path Page Rendering ===== */
function renderLearningPathPage(container) {
  const lifeWrapper = document.createElement('div');
  lifeWrapper.className = 'learning-path-page';

  lifeWrapper.innerHTML = `
    <section class="learning-education">
      <h2 class="section-title"><i class="fa fa-graduation-cap"></i> Education Timeline</h2>
      <ul class="timeline">
        <li>
          <span class="timeline-year">2023 - Present</span>
          <div class="timeline-content">
            <h4>B.Sc in Software Engineering</h4>
            <p>Shahjalal University of Science & Technology, Sylhet</p>
          </div>
        </li>
        <li>
          <span class="timeline-year">2018 - 2020</span>
          <div class="timeline-content">
            <h4>College</h4>
            <p>Birshreshtha Noor Mohammad Public College, Dhaka</p>
          </div>
        </li>
        <li>
          <span class="timeline-year">2013 - 2018</span>
          <div class="timeline-content">
            <h4>High School</h4>
            <p>Mollarhat High School, Kalkini, Madaripur</p>
          </div>
        </li>
      </ul>
    </section>

    <section class="learning-academic">
      <h2 class="section-title"><i class="fa fa-book"></i> Academic Learning in CS Subjects</h2>
      <p>
        Strong academic foundation in core CS topics:
      </p>
      <ul class="sublist enhanced-list">
        <li><i class="fa fa-check-circle"></i> Data Structures</li>
        <li><i class="fa fa-check-circle"></i> Object-Oriented Programming (OOP)</li>
        <li><i class="fa fa-check-circle"></i> Software Requirements Engineering (SRE)</li>
        <li><i class="fa fa-check-circle"></i> Operating Systems</li>
      </ul>
      <p>
        Completed lab work and maintain practice repos on GitHub:
        <a href="https://github.com/mohaiminulnirob/OOP_PREPARATIONS" target="_blank" class="custom-link">OOP</a>,
        <a href="https://github.com/mohaiminulnirob/DATA_STRUCTURE_LAB" target="_blank" class="custom-link">Data Structures</a>,
        <a href="https://github.com/mohaiminulnirob/os-lab-tasks" target="_blank" class="custom-link">Operating Systems</a>,
        <a href="https://github.com/mohaiminulnirob/numerical-lab" target="_blank" class="custom-link">Numerical Analysis</a>.
      </p>
    </section>

    <section class="learning-extracurricular">
      <h2 class="section-title"><i class="fa fa-star"></i> Learnings from Extracurricular Activities</h2>
      <ul class="enhanced-list">
        <li><i class="fa fa-futbol-o"></i> Active in sports like football, cricket, badminton; part of departmental football team in tournaments.</li>
        <li><i class="fa fa-users"></i> Organizing Secretary of <strong>SWE Society, SUST</strong>, managing events and student coordination.</li>
        <li><i class="fa fa-music"></i> Passionate about cultural programs, especially poem recitation, awarded multiple times.</li>
      </ul>
    </section>
  `;

  lifeWrapper.appendChild(createNextArrow('learnings'));
  container.appendChild(lifeWrapper);
}