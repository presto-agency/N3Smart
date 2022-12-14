export const callTabs = () => {
  let tabsBtns = document.querySelectorAll('.management__title>ul>li');
  if (tabsBtns.length > 0) {
    let elementsLink = document.querySelectorAll('.trigger-tab');
    const tabs = document.querySelector('.persons-list__list');
    const menu = document.querySelector('.management__title>ul');
    const all = document.querySelector('[data-all]');
    elementsLink.forEach(link => link.addEventListener('click', function () {
      let attr = this.getAttribute('data-attr');
      let activeBtns = tabs.querySelectorAll('.active');
      let subWindows = document.querySelectorAll(`[data-tab = ${attr}]`);
      activeBtns.forEach(
        el => {
          el.classList.remove('active')
        }
      )
      subWindows.forEach(
        el => {
          el.classList.add('active')
        }
      )
    }))
    tabsBtns.forEach(btn => btn.addEventListener('click', function () {
      const activeBtn = menu.querySelector('.active');
      if (!!activeBtn) {
        activeBtn.classList.remove('active')
        btn.classList.add('active')
      } else {
        btn.classList.add('active')
      }
    }))
    all.onclick = () => {
      document.querySelectorAll('.persons-list__list>li').forEach(
        el => el.classList.add('active')
      )
    }
  }
}