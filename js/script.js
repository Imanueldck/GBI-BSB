<script>
  const contactInfo = document.querySelector('.contact-info');
  const offcanvasContactInfo = document.getElementById('offcanvasContactInfo');

  function handleResize() {
    if (window.innerWidth <= 991.98) {
      offcanvasContactInfo.appendChild(contactInfo);
    } else {
      document.body.insertBefore(contactInfo, document.body.firstChild);
    }
  }

  window.addEventListener('resize', handleResize);
  document.addEventListener('DOMContentLoaded', handleResize);
</script>
