function download() {
  openTab($('.vjs-tech').getAttribute('src'));

  function openTab(url) {
    var win = window.open(url, 'title', 'width=250 height=250');
    win.focus();
  }
}
