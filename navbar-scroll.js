document.querySelectorAll('.link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault()

    const id = this.getAttribute('href')
    const section = document.querySelector(id)

    const headerHeight = document.querySelector('header').offsetHeight;
    const elementPosition = section.offsetTop;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
})