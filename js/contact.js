/* Google Forms returns an opaque response; never claim confirmed delivery. */
function renderContactPage(container) {
  const wrapper = document.createElement('div');
  wrapper.className = 'contact-page';
  wrapper.innerHTML = `
    <header class="page-heading">
      <p class="eyebrow">04 / Get in touch</p>
      <h2 id="pageTitle" tabindex="-1">Let's start a <span class="accent-text">conversation.</span></h2>
      <p class="page-lead">Have a project, a research idea, or something interesting to share? I'd love to hear from you.</p>
    </header>
    <div class="contact-container">
      <section class="contact-info" aria-labelledby="contactInfoTitle">
        <h3 id="contactInfoTitle">Find me here</h3>
        <p class="section-intro">For collaborations, opportunities, or a simple hello.</p>
        <ul class="contact-list">
          <li><i class="fa fa-envelope-o" aria-hidden="true"></i><div><span class="contact-label">Email</span><a href="mailto:mohaiminulislam20000@gmail.com">mohaiminulislam20000@gmail.com</a></div></li>
          <li><i class="fa fa-linkedin" aria-hidden="true"></i><div><span class="contact-label">LinkedIn</span><a href="https://www.linkedin.com/in/mohaiminul-nirob-853300431/" target="_blank" rel="noopener noreferrer">Mohaiminul Nirob ↗</a></div></li>
          <li><i class="fa fa-github" aria-hidden="true"></i><div><span class="contact-label">GitHub</span><a href="https://github.com/mohaiminulnirob" target="_blank" rel="noopener noreferrer">mohaiminulnirob ↗</a></div></li>
          <li><i class="fa fa-phone" aria-hidden="true"></i><div><span class="contact-label">Phone</span><a href="tel:+8801709901364">+880 1709 901364</a></div></li>
          <li><i class="fa fa-map-marker" aria-hidden="true"></i><div><span class="contact-label">Based in</span><span>Sylhet, Bangladesh</span></div></li>
        </ul>
        <a class="secondary-social" href="https://www.facebook.com/mohaiminul.islam.5891" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook" aria-hidden="true"></i> Also on Facebook ↗</a>
      </section>
      <section class="contact-form" aria-labelledby="contactFormTitle">
        <h3 id="contactFormTitle">Send a message</h3>
        <p class="section-intro" id="formHelp">Fields marked * are required. You can also <a href="mailto:mohaiminulislam20000@gmail.com">email me directly</a>.</p>
        <form id="contactForm" aria-describedby="formHelp">
          <div class="form-group"><label for="name">Your name <span aria-hidden="true">*</span></label><input type="text" id="name" name="name" autocomplete="name" placeholder="Your name" maxlength="120" required></div>
          <div class="form-group"><label for="email">Email address <span aria-hidden="true">*</span></label><input type="email" id="email" name="email" autocomplete="email" placeholder="you@example.com" maxlength="254" required></div>
          <div class="form-group"><label for="subject">Subject <span class="optional">(optional)</span></label><input type="text" id="subject" name="subject" placeholder="What would you like to talk about?" maxlength="200"></div>
          <div class="form-group"><label for="message">Message <span aria-hidden="true">*</span></label><textarea id="message" name="message" rows="6" placeholder="Tell me a little about your idea…" maxlength="5000" required></textarea></div>
          <button type="submit" class="btn primary">Send Message <span aria-hidden="true">↗</span></button>
          <p id="formStatus" class="form-status" role="status" aria-live="polite" aria-atomic="true"></p>
        </form>
      </section>
    </div>
  `;

  const form = wrapper.querySelector('#contactForm');
  const status = wrapper.querySelector('#formStatus');
  form.addEventListener('input', event => {
    event.target.setCustomValidity('');
    status.textContent = '';
    status.removeAttribute('data-state');
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    if (button.disabled) return;
    for (const fieldName of ['name', 'email', 'message']) {
      const field = form.elements.namedItem(fieldName);
      if (!field.value.trim()) {
        field.setCustomValidity('Please fill out this field.');
        field.reportValidity();
        return;
      }
    }
    if (!form.reportValidity()) return;

    button.disabled = true;
    button.textContent = 'Sending…';
    form.setAttribute('aria-busy', 'true');
    status.dataset.state = 'pending';
    status.textContent = 'Submitting your message…';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      const fields = { name: 'entry.1030560214', email: 'entry.264478467', subject: 'entry.1156413164', message: 'entry.1164222429' };
      const body = new URLSearchParams();
      Object.entries(fields).forEach(([field, key]) => body.set(key, form.elements.namedItem(field).value.trim()));
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdG4rQkmahenT9z0oFybnFNT3t5rqsCcWag691Gs1bJyovb0Q/formResponse', {
        method: 'POST', mode: 'no-cors', body, signal: controller.signal
      });
      status.dataset.state = 'notice';
      status.textContent = 'Your submission was sent, but delivery could not be confirmed. For a reply, please email me directly. Your message is still here to copy.';
    } catch (error) {
      status.dataset.state = 'error';
      status.textContent = error.name === 'AbortError'
        ? 'The request timed out, so delivery is uncertain. Your message is saved in this form; please email me directly.'
        : 'Your message could not be sent. Please try again or email me directly. Your text has been kept.';
    } finally {
      clearTimeout(timeout);
      button.disabled = false;
      button.innerHTML = 'Send Message <span aria-hidden="true">↗</span>';
      form.removeAttribute('aria-busy');
    }
  });
  container.appendChild(wrapper);
}
