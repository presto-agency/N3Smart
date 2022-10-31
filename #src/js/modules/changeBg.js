export const changeBg = () => {
  const sections = document.querySelectorAll('.know-more');
  if (!!sections.length > 0) {
    sections.forEach(section => {
      const section_src = section.getAttribute('data-src');
      section.style.backgroundImage = `url("${section_src}")`;
    })
  }
}
