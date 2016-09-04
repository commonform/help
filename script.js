document.addEventListener('DOMContentLoaded', function () {
  var imgs = [].slice.call(document.getElementsByTagName('IMG'))
  imgs.forEach(function (img) {
    img.addEventListener('click', function (event) {
      var src = event.target.src
      if (src.indexOf('.gif') === -1) {
        event.target.src = src.replace(/\.png/, '.gif')
      } else {
        event.target.src = src.replace(/\.gif/, '.png')
      }
    })
  })
})
