/* ===== About Page Rendering ===== */
function renderAboutPage(container) {
  const aboutWrapper = document.createElement('div');
  aboutWrapper.className = 'about-page';

  // Introduction section
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
      <img src="assets/Nirob_img.jpg" alt="Mohaiminul Islam Nirob">
    </div>
  `;

  // Passion section
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
  aboutWrapper.appendChild(createNextArrow('life'));
  container.appendChild(aboutWrapper);
}