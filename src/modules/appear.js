import { isInViewport } from '@/modules/utils'

const appear = () => {
  var fadeInElements = Array.from(document.getElementsByClassName('appear'))
  for (var i = 0; i < fadeInElements.length; i++) {
    var elem = fadeInElements[i]
    if (isInViewport(elem).visible) {
      elem.classList.add('is-in-viewport')
    }else{
      elem.classList.remove('is-in-viewport')
    }
  }
}

const initAppear = () => {
  window.onload = appear
  document.addEventListener('scroll', appear, { passive: true });
}

export { initAppear, appear }