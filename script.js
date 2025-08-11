// === Variables ===
const navLinks = document.querySelectorAll('.nav-link');
const contactBtn = document.getElementById('contactBtn');
const downloadBtn = document.getElementById('downloadBtn');
const pageColumn = document.getElementById('pageColumn');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const mobileNav = document.getElementById('mobileNav');
const menuToggle = document.getElementById('menuToggle');

let currentPage = 'about';

// Reusable function to create the arrow button
function createNextArrow(targetPageId) {
  const arrow = document.createElement('div');
  arrow.className = 'next-arrow';
  arrow.innerHTML = `<i class="fa fa-arrow-right"></i>`;
  arrow.style.marginTop = '10px';
  arrow.style.alignSelf = 'flex-end';

  arrow.addEventListener('click', () => {
    const targetLink = document.querySelector(`.nav-link[data-page="${targetPageId}"]`);
    if (targetLink) {
      targetLink.click();
    }
  });

  return arrow;
}

function renderPage(pageId) {
  currentPage = pageId;
  pageColumn.innerHTML = ''; // Clear previous

  if (pageId === 'about') {
    const aboutWrapper = document.createElement('div');
    aboutWrapper.className = 'about-page';

    // Introduction section (half text, half image)
    const introSection = document.createElement('section');
    introSection.className = 'about-intro';
    introSection.innerHTML = `
      <div class="intro-text">
        <h2 class="underline">About</h2>
        <p>
          I am an enthusiastic undergraduate student of Software Engineering with a strong interest in 
          problem-solving, competitive programming, and software development. I enjoy exploring algorithms, 
          building practical projects, and writing clean, maintainable code.
        </p>
      </div>
      <div class="intro-image">
        <img src="files/Nirob_img.jpg" alt="Mohaiminul Islam Nirob">
      </div>
    `;

    // Passion section (full width)
    const passionSection = document.createElement('section');
    passionSection.className = 'about-passion';
    passionSection.innerHTML = `
      <h3 class="underline">Passion</h3>
      <p>
        I enjoy logical thinking and solving challenging problems that require deep analysis and precision. 
        Competitive programming, algorithmic puzzles, and software design fascinate me. I'm driven by curiosity, 
        a desire to improve, and a passion for creating meaningful solutions through code.
      </p>
    `;

    aboutWrapper.appendChild(introSection);
    aboutWrapper.appendChild(passionSection);

    // Add next arrow button leading to 'life' page
    const arrow = createNextArrow('life');
    aboutWrapper.appendChild(arrow);

    pageColumn.appendChild(aboutWrapper);

  } else if (pageId === 'life') {
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

    pageColumn.appendChild(lifeWrapper);

    // Add next arrow button leading to 'learnings' page
    const arrow = createNextArrow('learnings');
    lifeWrapper.appendChild(arrow);

  } else if (pageId === 'learnings') {
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
      </div>
    </section>

    <section class="comp-section projects-section">
      <h4 class="comp-title"><i class="fa fa-folder-open"></i> Projects</h4>
      <div class="projects-grid">
        <div class="project-card" style="background-image: url('project_thumbnails/snake_game.png');">
          <div class="proj-info">
            <h5>Snake Game</h5>
            <p>Classic snake game developed in C using SDL2.</p>
            <a href="https://github.com/mohaiminulnirob/SWE_150_Snake_Game" target="_blank" class="custom-link">GitHub Repo</a>
          </div>
        </div>
        <div class="project-card" style="background-image: url('project_thumbnails/astro_adventure.png');">
          <div class="proj-info">
            <h5>Astro Adventure Game</h5>
            <p>2D space adventure game using LIBGDX.</p>
            <a href="https://github.com/mohaiminulnirob/SWE224_GAME" target="_blank" class="custom-link">GitHub Repo</a>
          </div>
        </div>
        <div class="project-card" style="background-image: url('project_thumbnails/sust_spot_booking.png');">
          <div class="proj-info">
            <h5>SUST Spot Booking App</h5>
            <p>Flutter & Firebase app for spot booking.</p>
            <a href="https://github.com/mohaiminulnirob/SWE-250_Android_App" target="_blank" class="custom-link">GitHub Repo</a>
          </div>
        </div>
        <div class="project-card" style="background-image: url('project_thumbnails/calculator_app.png');">
          <div class="proj-info">
            <h5>Calculator Application</h5>
            <p>Basic calculator with Java Swing GUI.</p>
            <a href="https://github.com/mohaiminulnirob/CalculatorApp_SWE224" target="_blank" class="custom-link">GitHub Repo</a>
          </div>
        </div>
      </div>
    </section>
  `;

  // After appending compWrapper to pageColumn
pageColumn.appendChild(compWrapper);

// Add bottom arrow leading to 'contact' page
const nextArrow = createNextArrow('contact');
nextArrow.style.marginTop = '20px';
nextArrow.style.alignSelf = 'flex-end';


compWrapper.appendChild(nextArrow);

 } else if (pageId === 'contact') {
    const contactWrapper = document.createElement('div');
    contactWrapper.className = 'contact-page';

    contactWrapper.innerHTML = `
        <div class="contact-container">
            <!-- Contact Info Section -->
            <div class="contact-info">
                <h3 class="title">Contact Info</h3>
                <ul>
                    <li><i class="fa fa-phone icon"></i><span class="text">01709901364</span></li>
                    <li><i class="fa fa-envelope icon"></i><span class="text">mohaiminulislam20000@gmail.com</span></li>
                    <li><i class="fa fa-facebook icon"></i><span class="text">facebook.com/mohaiminul.islam.5891</span></li>
                    <li><i class="fa fa-github icon"></i><span class="text">github.com/mohaiminulnirob</span></li>
                    <li><i class="fa fa-map-marker icon"></i><span class="text">Mollarhat, Kalkini, Madaripur, Dhaka</span></li>
                </ul>
                
                <!-- Social Media Links -->
                <div class="social-links">
                    <a href="https://www.facebook.com/mohaiminul.islam.5891" target="_blank" class="social-icon"><i class="fa fa-facebook"></i></a>
                    <a href="https://github.com/mohaiminulnirob" target="_blank" class="social-icon"><i class="fa fa-github"></i></a>
                    <a href="mailto:mohaiminulislam20000@gmail.com" class="social-icon"><i class="fa fa-envelope"></i></a>
                    <a href="tel:+8801709901364" class="social-icon"><i class="fa fa-phone"></i></a>
                </div>
            </div>
            
            <!-- Contact Form Section -->
            <div class="contact-form">
                <h3 class="title">Send Me a Message</h3>
                <form id="contactForm">
                    <div class="form-group">
                        <input type="text" id="name" name="name" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" name="email" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <input type="text" id="subject" name="subject" placeholder="Subject">
                    </div>
                    <div class="form-group">
                        <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" class="btn primary">Send Message</button>
                </form>
            </div>
        </div>
        

    `;

    // Add form submission handler
    contactWrapper.querySelector('#contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would normally send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });

    pageColumn.appendChild(contactWrapper);
}
}

// Navigation handling
navLinks.forEach(link => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    const pageId = link.getAttribute('data-page');
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    renderPage(pageId);
    mobileNav.classList.add('hidden');
  });
});

// Contact button
contactBtn.addEventListener('click', () => {
  document.querySelector('.nav-link[data-page="contact"]').click();
});

// Download CV
downloadBtn.addEventListener('click', () => {
  const pdfUrl = 'files/Mohaiminul_Nirob_CV.pdf'; 
  const a = document.createElement('a');
  a.href = pdfUrl;
  a.download = 'Mohaiminul_Nirob_CV.pdf';
  document.body.appendChild(a);
  a.click();
  a.remove();
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});

// Theme toggle
function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.className = 'fa fa-sun-o';
  } else {
    document.body.classList.remove('dark-mode');
    themeIcon.className = 'fa fa-moon-o';
  }
  localStorage.setItem('portfolioTheme', theme);
}

themeToggle.addEventListener('click', () => {
  const current = localStorage.getItem('portfolioTheme') || 'light';
  applyTheme(current === 'light' ? 'dark' : 'light');
});

// Init
(function init() {
  applyTheme(localStorage.getItem('portfolioTheme') || 'light');
  renderPage('about');
  document.querySelector('.nav-link[data-page="about"]').classList.add('active');
})();
