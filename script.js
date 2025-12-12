// JavaScript source code
<script>
  const elements = document.querySelectorAll('.scroll-element');

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.9; // 90% down the screen

    elements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;

      if (elTop < triggerBottom) {
        el.classList.add('visible'); // show it
      } else {
        el.classList.remove('visible'); // optional: hide if scrolled back up
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('load', checkVisibility); // check on load too
</script>
