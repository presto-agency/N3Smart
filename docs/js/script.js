window.addEventListener('DOMContentLoaded', function () {
  addClassHeader()
  showSubmenu()
})

const addClassHeader = () => {
  const btn = document.querySelector('.header__content-cross');
  const header = document.querySelector('.header__content');
  if (!!btn) {
    btn.onclick = () => {
      if (header.classList.contains('active')) {
        isActive()
      } else {
        header.classList.add('active')
      }
    }
  }

  function isActive() {
    header.classList.remove('active')
    document.querySelectorAll('.submenu>ul').forEach(item => {
      item.style.maxHeight = '0';
    })
    document.querySelectorAll('.submenu').forEach(item => {
      item.classList.remove('active')
    })
  }

  window.addEventListener('resize', function () {
    isActive()
  })
}

const showSubmenu = () => {
  if (window.screen.width < 1200) {

    function setHeight() {
      let itemsLinks = document.querySelectorAll('.submenu');
      if (itemsLinks.length > 0) {
        itemsLinks.forEach(item => {
          item.onclick = () => {
            let itemsMenu = item.querySelectorAll('ul>li');
            let submenuHeight = getHeight(itemsMenu)
            checkHeight(itemsMenu[0], submenuHeight)
            itemsMenu[0].parentNode.parentNode.classList.toggle('active')
          }
        })
      }
    }

    function getHeight(items) {
      let subHeight = Array.from(items).reduce((sum, current) =>
        sum + current.offsetHeight, 0);
      return subHeight
    }

    function checkHeight(item, height) {
      item.parentNode.style.maxHeight = item.parentNode.style.maxHeight === height + 'px' ? '0' : height + 'px';
    }

    setHeight()
  }
}
;






