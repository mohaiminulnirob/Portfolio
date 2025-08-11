/* ===== Competencies Page Rendering ===== */
function renderCompetenciesPage(container) {
  const compWrapper = document.createElement('div');
  compWrapper.className = 'competencies-page';

  compWrapper.innerHTML = `
    <section class="comp-section">
      <h4 class="comp-title"><i class="fa fa-code"></i> Programming Languages & Proficiency</h4>
      <ul class="prog-lang-list">
        <li>
          <span>C & C++</span>
          <div class="prog-bar"><div style="width: 90%;"></div></div>
        </li>
        <li>
          <span>Java</span>
          <div class="prog-bar"><div style="width: 70%;"></div></div>
        </li>
        <li>
          <span>Dart & Flutter</span>
          <div class="prog-bar"><div style="width: 50%;"></div></div>
        </li>
      </ul>
    </section>

   <section class="comp-section cp-section">
  <div class="cp-info">
    <h4 class="comp-title"><i class="fa fa-trophy"></i> Competitive Programming</h4>
    <ul class="cp-list">
      <li>Solved 1100+ problems across online judges.</li>
      <li>Decent understanding of algorithms, data structures, and problem-solving strategies.</li>
      <li>
        GitHub repos for practice: 
        <a href="https://github.com/mohaiminulnirob/Competitive_Programming" target="_blank" class="custom-link">Competitive_Programming</a>, 
        <a href="https://github.com/mohaiminulnirob/SWE-222_CP" target="_blank" class="custom-link">SWE-222_CP</a>, 
        <a href="https://github.com/mohaiminulnirob/SWE-230_Algorithm" target="_blank" class="custom-link">SWE-230_Algorithm</a>
      </li>
    </ul>
  </div>
  <div class="cp-img-wrapper">
    <p class="cp-profile">
      <i class="fa fa-line-chart icon"></i> A consolidated profile of my CP activity on 
      <a href="https://www.stopstalk.com/user/profile/mohaiminul2002" target="_blank" class="custom-link">StopStalk</a>.
    </p>
    <div class="cp-image-container">
      <img src="assets/cp-profile.jpg" alt="Competitive Programming Profile" class="cp-image">
      <div class="cp-image-overlay">
        <a href="https://www.stopstalk.com/user/profile/mohaiminul2002" target="_blank">View Profile</a>
      </div>
    </div>
  </div>
</section>

    <section class="comp-section projects-section">
      <h4 class="comp-title"><i class="fa fa-folder-open"></i> Projects</h4>
      <div class="projects-grid">
        <div class="project-card" style="background-image: url('assets/project_thumbnails/snake_game.png');">
          <div class="proj-info">
            <h5>Snake Game</h5>
            <p>Classic snake game developed in C using SDL2.</p>
            <a href="https://github.com/mohaiminulnirob/SWE_150_Snake_Game" target="_blank" class="custom-link">GitHub Repo</a>
          </div>
        </div>
        <div class="project-card" style="background-image: url('assets/project_thumbnails/astro_adventure.png');">
          <div class="proj-info">
            <h5>Astro Adventure Game</h5>
            <p>2D space adventure game using LIBGDX.</p>
            <a href="https://github.com/mohaiminulnirob/SWE224_GAME" target="_blank" class="custom-link">GitHub Repo</a>
          </div>
        </div>
        <div class="project-card" style="background-image: url('assets/project_thumbnails/sust_spot_booking.png');">
          <div class="proj-info">
            <h5>SUST Spot Booking App</h5>
            <p>Flutter & Firebase app for spot booking.</p>
            <a href="https://github.com/mohaiminulnirob/SWE-250_Android_App" target="_blank" class="custom-link">GitHub Repo</a>
          </div>
        </div>
        <div class="project-card" style="background-image: url('assets/project_thumbnails/calculator_app.png');">
          <div class="proj-info">
            <h5>Calculator Application</h5>
            <p>Basic calculator with Java Swing GUI.</p>
            <a href="https://github.com/mohaiminulnirob/CalculatorApp_SWE224" target="_blank" class="custom-link">GitHub Repo</a>
          </div>
        </div>
      </div>
    </section>
  `;

  const nextArrow = createNextArrow('contact');
  nextArrow.style.marginTop = '20px';
  nextArrow.style.alignSelf = 'flex-end';
  compWrapper.appendChild(nextArrow);
  container.appendChild(compWrapper);
}