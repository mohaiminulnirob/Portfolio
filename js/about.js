/* About: a concise overview, with details in the other three sections. */
function renderAboutPage(container) {
  const wrapper = document.createElement('div');
  wrapper.className = 'about-page';
  wrapper.innerHTML = `
    <header class="page-heading">
      <p class="eyebrow">01 / A little about me</p>
      <h2 id="pageTitle" tabindex="-1">Curiosity into <span class="accent-text">creation.</span></h2>
      <p class="page-lead">Software, research, and the drive to keep learning.</p>
    </header>
    <section class="about-intro" aria-labelledby="aboutStory">
      <div class="intro-text">
        <h3 id="aboutStory">Hi, I'm Nirob.</h3>
        <p>I'm a Software Engineering undergraduate at Shahjalal University of Science and Technology. My work spans full-stack web development, competitive programming, and applied AI research.</p>
        <p>I enjoy building practical applications and investigating how AI systems can produce more interpretable, evidence-grounded results. From leading a campus booking project to developing an explainable ML framework, I like turning ideas into work people can explore.</p>
      </div>
      <figure class="intro-image">
        <img src="assets/Nirob_img.jpg" alt="Mohaiminul Islam Nirob outdoors" width="240" height="300">
        <figcaption>Always a student of something new.</figcaption>
      </figure>
    </section>
    <div class="highlights" aria-label="At a glance">
      <a class="highlight-card" href="#life"><strong>3.96<span>/4.00</span></strong><span>CGPA · through 6th semester</span><span class="highlight-link">Academic journey ↗</span></a>
      <a class="highlight-card" href="#achievements"><strong>1,400<span>+</span></strong><span>Problems solved across judges</span><span class="highlight-link">Competitive programming ↗</span></a>
      <a class="highlight-card" href="#achievements"><strong class="award-number">2nd Runner-Up</strong><span>NASA Space Apps 2024 · Sylhet</span><span class="highlight-link">Competition achievements ↗</span></a>
    </div>
    <section class="focus-section" aria-labelledby="currentFocus">
      <div class="section-heading"><h3 id="currentFocus">What I'm focused on</h3><span class="section-caption">Learning by building</span></div>
      <div class="focus-grid">
        <article class="focus-card"><span class="focus-number">01</span><h4>Applied AI & research</h4><p>Developing Legal-RAG-BD and a first-author explainable ML study on social media and academic performance.</p><a class="text-link" href="#research">Explore research <span aria-hidden="true">↗</span></a></article>
        <article class="focus-card"><span class="focus-number">02</span><h4>Practical software</h4><p>Building full-stack applications with thoughtful workflows, secure access, and useful features.</p><a class="text-link" href="#projects">Explore projects <span aria-hidden="true">↗</span></a></article>
        <article class="focus-card"><span class="focus-number">03</span><h4>Community & leadership</h4><p>Serving as Vice-President of SWE Society, SUST, following two years of organizing tech, cultural, and sports events.</p><a class="text-link" href="#life">My learning path <span aria-hidden="true">↗</span></a></article>
      </div>
    </section>
    <div class="about-cta"><p>Take a closer look at the things I've built.</p><a class="btn primary" href="#projects">View Projects & Research <span aria-hidden="true">↗</span></a></div>
  `;
  wrapper.appendChild(createNextArrow('life', 'Next: Learning Path'));
  container.appendChild(wrapper);
}
