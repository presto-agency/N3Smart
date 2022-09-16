window.addEventListener('DOMContentLoaded', function () {
  addClassHeader()
  showSubmenu()
})

const addClassHeader = () => {
  const btn = document.querySelector('.header__content-cross');
  const header = document.querySelector('.header__content');
  if (!!btn) {
    btn.onclick = () => {
      header.classList.toggle('active')
    }
  }
}

const showSubmenu = () => {
  if (window.screen.width < 1200) {
    setTimeout(setHeight, 500)

    function setHeight() {
      let itemsLinks = document.querySelectorAll('.content-navigation__links>.submenu');
      if (itemsLinks.length > 0) {
        itemsLinks.forEach(item => {
          let itemsMenu = item.querySelectorAll('ul>li');
          let submenuHeight = Array.from(itemsMenu).reduce((sum, current) => sum + current.offsetHeight, 0);
          item.onclick = () => {
            itemsMenu[0].parentNode.style.maxHeight = itemsMenu[0].parentNode.style.maxHeight === submenuHeight + 'px' ?
              '' : submenuHeight + 'px';
            itemsMenu[0].parentNode.parentNode.classList.toggle('active')
          }
        })
      }
    }
  }
}
