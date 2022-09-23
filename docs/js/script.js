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

  if (window.screen.width < 1200) {
    window.addEventListener('resize', function () {
      isActive()
    })
  }
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
window.addEventListener('DOMContentLoaded', function () {
  playVideo()
})

let playVideo = () => {
  let video_iframe = document.querySelector('.iframe-bg__content>iframe[data-src]');
  if(!!video_iframe){
    let reg = /\//g;
    let video_wrapper = document.querySelector('.iframe-bg__content_substrate');
    let video_attribute = video_iframe.getAttribute('data-src').split(reg);
    let video_id = video_attribute[video_attribute.length-1]

    let video_src = `https://player.vimeo.com/video/${video_id}?title=0&byline=0&portrait=0&transparent=1&controls=0&loop=1&responsive=1`;
    video_iframe.setAttribute('src', video_src)

    const player = new Vimeo.Player(video_iframe);

    video_wrapper.onclick = () => {
      if(video_wrapper.classList.contains('active')){
        video_wrapper.classList.remove('active')
        player.pause()
      }
      else{
        video_wrapper.classList.add('active')
        player.play()
      }
    }
  }
};






