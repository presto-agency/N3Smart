import {playVideo} from "./playVideo";
import {addClassHeader} from "./addClassHeader";
import {showSubmenu} from "./showSubmenu";
import {changeBg} from "./changeBg";
import {checkInputFile} from "./checkInputFile";

window.addEventListener('DOMContentLoaded', function () {
  playVideo()
  addClassHeader()
  if (window.screen.width < 1200) {showSubmenu(document.querySelectorAll('.submenu'))}
  showSubmenu(document.querySelectorAll('.submenu-faq'))
  changeBg()
  checkInputFile()
})