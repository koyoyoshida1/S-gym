document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const navLinks = document.querySelectorAll('.mobile-nav a');

  if (!hamburger || !mobileNav) {
    return;
  }

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
    document.body.classList.toggle('no-scroll');
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('is-active');
      mobileNav.classList.remove('is-active');
      document.body.classList.remove('no-scroll');
    });
  });
});
