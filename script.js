const topbar = document.querySelector('.topbar');
const menuToggle = document.querySelector('.menu-toggle');
const contactForm = document.querySelector('#contact-form');
const contactNote = document.querySelector('#form-note');

if (menuToggle && topbar) {
  menuToggle.addEventListener('click', () => {
    const isOpen = topbar.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    topbar?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const service = String(formData.get('service') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const recipient = 'hola@bnstudio.ar';
    const subject = encodeURIComponent(`Consulta web - ${service}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\nServicio: ${service}\n\nMensaje:\n${message}`
    );

    if (contactNote) {
      contactNote.textContent = 'Abriendo tu cliente de correo con el mensaje listo para enviar.';
    }

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}
