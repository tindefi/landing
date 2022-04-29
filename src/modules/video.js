const scrollPlay = (video, container, playbackConst = 500) => {
  // https://codepen.io/Maltsbier/pen/dyYmGGq?editors=1010
  container = document.querySelector(container);
	video = document.querySelector(video);

  // dynamically set the page height according to video length
  video.addEventListener('loadedmetadata', function() {
    container.style.height = Math.floor(video.duration) * playbackConst + "px";
  });

	const scrollVideo = () => {
		if(video.duration) {
			const distanceFromTop = window.scrollY + container.getBoundingClientRect().top;
			const rawPercentScrolled = (window.scrollY - distanceFromTop) / (container.scrollHeight - window.innerHeight);
			const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

			video.currentTime = video.duration * percentScrolled;
		}
		requestAnimationFrame(scrollVideo);
	}
	requestAnimationFrame(scrollVideo);
}

export { scrollPlay }