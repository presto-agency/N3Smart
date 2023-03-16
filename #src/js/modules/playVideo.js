export const playVideo = () => {
  const iframes = document.querySelectorAll('.iframe-bg');
  if (iframes.length > 0) {
    for (let i = 0; i < iframes.length; i++) {
      let video_iframe = iframes[i].querySelector('iframe');
      let reg = /\//g;
      let video_wrapper = iframes[i].querySelector('.iframe-bg__content_substrate');
      let video_attribute = video_iframe.getAttribute('data-src').split(reg);
      let video_id = video_attribute[video_attribute.length - 1]

      let video_src = `https://player.vimeo.com/video/${video_id}?title=0&byline=0&portrait=0&transparent=1&controls=0&loop=1&responsive=1`;
      video_iframe.setAttribute('src', video_src)
      switch (i) {
        case 0:
          const player1 = new Vimeo.Player(video_iframe);
          video_wrapper.onclick = () => {
            if (video_wrapper.classList.contains('active')) {
              video_wrapper.classList.remove('active')
              player1.pause()
            } else {
              video_wrapper.classList.add('active')
              player1.play()
            }
          }
          break;
        case 1:
          const player2 = new Vimeo.Player(video_iframe);
          video_wrapper.onclick = () => {
            if (video_wrapper.classList.contains('active')) {
              video_wrapper.classList.remove('active')
              player2.pause()
            } else {
              video_wrapper.classList.add('active')
              player2.play()
            }
          }
          break;
      }
    }
  }
}