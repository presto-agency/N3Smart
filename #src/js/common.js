window.addEventListener('DOMContentLoaded', function () {
  addClassHeader()
  if (window.screen.width < 1200) {
    showSubmenu(document.querySelectorAll('.submenu'))
  }
  changeBg()
  checkInputFile()
})

// const setSvgIcon = () => {
//   const items = document.querySelectorAll('.submenu>a');
//   if(items.length > 0){
//     items.forEach(item => {
//       item.innerHTML += "<svg>\n" + "<use xlink:href=\"img/icons/icons.svg#arrow-v\"></use>\n" + "</svg>"
//     })
//   }
// }

// setSvgIcon()

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

  if (window.screen.width < 1200) {
    window.addEventListener('resize', function () {
      isActive()
    })
  }
}

const showSubmenu = (itemsLinks) => {

  function setHeight(itemsLinks) {
    if (itemsLinks.length > 0) {
      itemsLinks.forEach(item => {
        let itemLink = item.querySelector('a') ? item.querySelector('a') : item.querySelector('p');
        if (!!itemLink) {
          itemLink.onclick = (e) => {
            e.preventDefault()
            let itemsMenu = item.querySelectorAll('ul>li');
            let submenuHeight = getHeight(itemsMenu)
            checkHeight(itemsMenu[0], submenuHeight)
            itemsMenu[0].parentNode.parentNode.classList.toggle('active')
          }
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

  setHeight(itemsLinks)
}

const changeBg = () => {
  const sections = document.querySelectorAll('.know-more');
  if (!!sections.length > 0) {
    sections.forEach(section => {
      const section_src = section.getAttribute('data-src');
      section.style.backgroundImage = `url("${section_src}")`;
    })
  }
}

const checkInputFile = () => {
  let inputFile = document.querySelector('.input-file>input');
  let innerText = document.querySelector('.input-file>span');
  if (!!inputFile) {
    inputFile.onchange = () => {
      let filePath = inputFile.value.split('\\');
      let nameFile = filePath[filePath.length - 1];
      innerText.textContent = nameFile;
    }
  }
}
