// Get DOM Elements
const modal = document.querySelector('.contact-form');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}


document.addEventListener("DOMContentLoaded", function() {
  var lazyImgs = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImgObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersceting) {
          let lazyImg = entry.target;
          lazyImg.src = lazyImage.dataset.src;
          lazyIma.classlist.remove("lazy");
          lazyImgObserver.unobserve(lazyImg);
        }
      });
    });
    lazyImgs.forEach(function(lazyImg) {
      lazyImgObserver.observe(lazyImg);
    });
  }
});
