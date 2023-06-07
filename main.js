window.onload = function () {
  window.addEventListener('scroll', function (e) {
    if (window.pageYOffset > 100) {
      this.document.querySelector("header").classList.add('is-scrolling')
    } else {
      this.document.querySelector("header").classList.remove('is-scrolling')
    }
  });
}


var modalBtn = document.getElementById("show");
var modalBg = document.querySelector('.others');
var modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function () {
  modalBg.classList.add('bg-visibility');
});
modalClose.addEventListener('click', function () {
  modalBg.classList.remove('bg-visibility');
});