export const playVideo = () => {
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
}