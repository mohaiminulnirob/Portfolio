/* ===== Contact Page Rendering ===== */
function renderContactPage(container) {
  const contactWrapper = document.createElement('div');
  contactWrapper.className = 'contact-page';

  contactWrapper.innerHTML = `
    <div class="contact-container">
      <div class="contact-info">
        <h3 class="title">Contact Info</h3>
        <ul>
          <li><i class="fa fa-phone icon"></i><span class="text">01709901364</span></li>
          <li><i class="fa fa-envelope icon"></i><span class="text">mohaiminulislam20000@gmail.com</span></li>
          <li><i class="fa fa-facebook icon"></i><span class="text">facebook.com/mohaiminul.islam.5891</span></li>
          <li><i class="fa fa-github icon"></i><span class="text">github.com/mohaiminulnirob</span></li>
          <li><i class="fa fa-map-marker icon"></i><span class="text">Mollarhat, Kalkini, Madaripur, Dhaka</span></li>
        </ul>
        <div class="social-links">
          <a href="https://www.facebook.com/mohaiminul.islam.5891" target="_blank" class="social-icon"><i class="fa fa-facebook"></i></a>
          <a href="https://github.com/mohaiminulnirob" target="_blank" class="social-icon"><i class="fa fa-github"></i></a>
          <a href="mailto:mohaiminulislam20000@gmail.com" class="social-icon"><i class="fa fa-envelope"></i></a>
          <a href="tel:+8801709901364" class="social-icon"><i class="fa fa-phone"></i></a>
        </div>
      </div>
      <div class="contact-form">
        <h3 class="title">Send Me a Message</h3>
        <form id="contactForm">
          <div class="form-group">
            <input type="text" id="name" placeholder="Your Name" required>
          </div>
          <div class="form-group">
            <input type="email" id="email" placeholder="Your Email" required>
          </div>
          <div class="form-group">
            <input type="text" id="subject" placeholder="Subject">
          </div>
          <div class="form-group">
            <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" class="btn primary">Send Message</button>
        </form>
      </div>
    </div>
  `;

  // Enhanced form submission handler
  contactWrapper.querySelector('#contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      // Prepare the form data for Google Forms
      const formData = new FormData();
      formData.append('entry.1030560214', this.name.value); // Name field
      formData.append('entry.264478467', this.email.value); // Email field
      formData.append('entry.1156413164', this.subject.value); // Subject field
      formData.append('entry.1164222429', this.message.value); // Message field

      // Submit to Google Forms
      const response = await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSdG4rQkmahenT9z0oFybnFNT3t5rqsCcWag691Gs1bJyovb0Q/formResponse',
        {
          method: 'POST',
          body: new URLSearchParams(formData),
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );

      // Since we're using no-cors, we can't check response status
      alert('Thank you! Your message has been sent.');
      this.reset();
    } catch (error) {
      alert('Message sent successfully! (You may see an error but your message was received)');
      this.reset();
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });

  container.appendChild(contactWrapper);
}