const navbar = document.querySelector('.FMPlayerNavright');

navbar.innerHTML = `
<div class="FMPlayerNavButton FMPlayerComponent">
<a href="#" class="button get-video">GET VIDEO</a>
</div>
`;

const getVideoButton = document.querySelector('.get-video');

getVideoButton.addEventListener('click', openTab);

function openTab(e) {
  e.preventDefault();
  const video = document.querySelector('.vjs-tech');
  const url = video.getAttribute('src');

  video.pause();

  var win = window.open(url, 'title', 'width=250 height=250');
  win.focus();
}
