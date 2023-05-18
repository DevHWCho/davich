// main.js

window.addEventListener('load',function(){
const slide = document.querySelectorAll(".slide_wrap>.slide");
const btnPrev = document.querySelector(".btn_prev");
const btnNext = document.querySelector(".btn_next");
const slideBtns = document.querySelectorAll(".slide_select_btn>li");
const btnPlay = document.querySelector(".btn_play");
const btnPause = document.querySelector(".btn_pause");


let activation = (list, i) =>{
  list.forEach(el => {
    el.classList.remove('on','active');
  })
  list[i].classList.add('on','active')
}

let activation2 = (index) => {
    vidDuration = slide[bnnNum].querySelector('video').duration;
    progressBar[index].style.transition =  `width ${vidDuration}s linear`
    activation(slide, index);
    activation(slideBtns, index);
}

// #################### 오토배너 ##############################
const progressBar = document.querySelectorAll('span.progress_bar');
let autoMBnn;
let bnnNum = 0;
const lastNum = slide.length - 1;
let currentVideo;
let vidDuration = 0;

function loadVideoAndPlayNextSlide() {
  bnnNum++;
  if (bnnNum > lastNum) bnnNum = 0;
  activation(slide, bnnNum);
  activation(slideBtns, bnnNum);
  currentVideo = slide[bnnNum].querySelector("video");
  vidDuration = currentVideo.duration;
  progressBar[bnnNum].style.transition = `width ${vidDuration}s linear`;

  // Play current video
  currentVideo.play();

  autoMBnn = setTimeout(loadVideoAndPlayNextSlide, vidDuration * 1000);
}

function autoMainBanner() {
  // Play first video
  currentVideo = slide[bnnNum].querySelector("video");
  vidDuration = currentVideo.duration;
  progressBar[bnnNum].style.transition = `width ${vidDuration}s linear`;

  // Play current video
  currentVideo.play();

  autoMBnn = setTimeout(loadVideoAndPlayNextSlide, vidDuration * 1000);
}

autoMainBanner();



// 비디오 재생/멈춤
btnPlay.addEventListener("click",e=>{
  btnPlay.parentElement.classList.add('on');
  btnPause.parentElement.classList.remove('on');
  currentVideo.play();

  let vidElapsed = currentVideo.currentTime;

  progressBar[bnnNum].style.width = `${(vidElapsed/vidDuration) * 100}%`;
  progressBar[bnnNum].style.width = `60px`;
  progressBar[bnnNum].style.transition = `width ${vidDuration - vidElapsed}s linear`;
  autoMBnn = setTimeout(autoMainBanner, (vidDuration - vidElapsed) * 1000);
})
btnPause.addEventListener("click",e=>{
  clearTimeout(autoMBnn);
  btnPause.parentElement.classList.add('on');
  btnPlay.parentElement.classList.remove('on');
  currentVideo.pause();

  let vidElapsed = currentVideo.currentTime;

  progressBar[bnnNum].style.transitionDuration = `0s`;
  progressBar[bnnNum].style.width = `${(vidElapsed/vidDuration) * 100}%`;
})
activation2(bnnNum);

// 이전, 다음 슬라이드로 이동
// 0->1->2->3->4->5->0->1...
btnNext.addEventListener("click",e=>{
  e.preventDefault();
  bnnNum++;
  if(bnnNum>lastNum) bnnNum=0;
  activation2(bnnNum);
})
btnPrev.addEventListener("click",e=>{
  e.preventDefault();
  bnnNum--;
  if(bnnNum<0) bnnNum = lastNum;
  activation2(bnnNum);
})

// 슬라이드 번호로 이동
slideBtns.forEach((slideBtn, i)=>{
  slideBtn.addEventListener("click",e=>{
    e.preventDefault();
    activation2(i);
    clearTimeout(autoMBnn);
  })
})


// 원스크롤 페이지
const scrollPositions = document.querySelectorAll('.scroll-position');
const footer = document.querySelector('#footer');
let currentIndex = 0;
function scrollToPosition(index) {
  if (index >= 0 && index < scrollPositions.length) { // Check if index is within valid range
    window.scroll({
      top: scrollPositions[index].offsetTop - window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
}
window.addEventListener('wheel', e => {
  e.preventDefault();
  if (e.deltaY > 0 && currentIndex < scrollPositions.length - 1) {
    currentIndex++;
    scrollToPosition(currentIndex);
  } else if (e.deltaY < 0 && currentIndex > 0) {
    currentIndex--;
    scrollToPosition(currentIndex);
  } else if (currentIndex === scrollPositions.length - 1) {
    window.scroll({
      top: footer.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }
});

// content7 오토배너
let storeBnn = document.querySelector(".store_banner_wrap");
let storeList = document.querySelectorAll(".store_banner_wrap>li");
let firstNum = 0;
let lastNumber = storeList.length - 1;
let autoBnn;

function autoBanner() {
  firstNum++;
  if (firstNum > 10) {
    firstNum = 0;
    storeBnn.style.transitionDuration = `0s`;
    storeBnn.style.transitionDelay = `0s`;
  } else if (firstNum ==1){
    storeBnn.style.transitionDuration = `1.0s`;
    storeBnn.style.transitionDelay = `0s`;
  } else {
    storeBnn.style.transitionDuration = `1.0s`;
    storeBnn.style.transitionDelay = `1.0s`;
  }
  storeBnn.style.transform = `translateX(${- 9.09* firstNum}%)`;
  clearTimeout(autoBnn);
  autoBnn = setTimeout(autoBanner, 2000);
}
autoBanner();
})