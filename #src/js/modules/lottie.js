import lottie from "lottie-web";

export const lottieRobot = () => {
  lottie.loadAnimation({
    container: document.getElementById('robot'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'plugins/json/animation-1.json'
  })
}

export const lottieVC = () => {
  lottie.loadAnimation({
    container: document.getElementById('vc'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'plugins/json/animation-3.json'
  })
}

export const lottieMen = () => {
  lottie.loadAnimation({
    container: document.getElementById('men'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'plugins/json/animation-2.json'
  })
}