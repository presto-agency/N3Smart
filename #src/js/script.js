import {playVideo} from "./modules/playVideo";
import {addClassHeader} from "./modules/addClassHeader";
import {showSubmenu} from "./modules/showSubmenu";
import {changeBg} from "./modules/changeBg";
import {checkInputFile} from "./modules/checkInputFile";
import {lottieMen, lottieRobot, lottieVC, lottieVCB} from "./modules/lottie";
import {inputNumber} from "./modules/inputNumber";
import {callTabs} from "./modules/callTabs";

window.addEventListener('DOMContentLoaded', function () {
  playVideo()
  addClassHeader()
  if (window.screen.width < 1200) {showSubmenu(document.querySelectorAll('.submenu'))}
  showSubmenu(document.querySelectorAll('.submenu-faq'))
  changeBg()
  checkInputFile()
  lottieRobot()
  lottieVC()
  lottieMen()
  inputNumber()
  lottieVCB()
  callTabs()
})