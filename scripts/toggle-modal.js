// Bekijk afbeeldingen groter wanneer je erop klikt (modal)

var modal = document.querySelector('.modal');
var modalImage = document.querySelector('.modal__image');
var modalCaption = document.querySelector('.modal__caption');
var modalClose = document.querySelector('.modal__close-btn');
var images = document.querySelectorAll('.gallery__image');

images.forEach(
  image => {
    image.addEventListener('click', () => {
      modalImage.src = image.src;
      imageCaption = image.alt.replace('(^.*?)(?= \()', '<strong>$1</strong>')
      imageCaption = image.alt
      imageCaptionPieces = imageCaption.split(' (')
      imageCaptionFormatted = '<strong>' + imageCaptionPieces[0] + '</strong> (' + imageCaptionPieces[1];
      modalCaption.innerHTML = imageCaptionFormatted;
      modal.style.display = 'flex';
    })
  }
)

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
})

modal.addEventListener('click', (e) => {
  if (!(e.target !== e.currentTarget)) {
    modal.style.display = 'none';
  }
})

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    modal.style.display = 'none';
  }
});