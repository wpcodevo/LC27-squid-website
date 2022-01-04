/* ========== sticky menu =========== */
const menu = document.querySelector('.navigation');

document.querySelector('.hamburger').onclick = function () {
  menu.classList.add('show');
};

document.querySelector('.close').onclick = function () {
  menu.classList.remove('show');
};

addEventListener('scroll', function () {
  const header = document.querySelector('.nav-bar');
  header.classList.toggle('sticky', window.scrollY > 0);
});

/* ========== Video PopUp =========== */
const video = document.querySelector('.video');
const button = document.querySelector('.video-control');
const videoWrapper = document.querySelector('.video-wrapper');

['.watch-button', '.actor-video'].forEach((el) => {
  document.querySelector(el).onclick = () => {
    videoWrapper.classList.add('active');
  };
});

document.querySelector('.close-video').onclick = () => {
  videoWrapper.classList.remove('active');
};

function playpausevideo() {
  if (video.paused) {
    button.innerHTML = "<i class='bx bx-pause' ></i>";
    video.play();
  } else {
    button.innerHTML = "<i class='bx bx-play' ></i>";
    video.pause();
  }
}

button.addEventListener('click', playpausevideo);

/* ========== review slide =========== */

var swiper = new Swiper('.review-slide', {
  direction: 'vertical',

  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },
});
