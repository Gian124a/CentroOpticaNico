function scrollToSection(Seccion) {
    const section = document.getElementById(Seccion);
    section.scrollIntoView({ behavior: 'smooth' });
}