// header.js

window.addEventListener('load',function(){
  
var winWidth = 0;
const header = document.querySelector("#header");
const subMenu = document.querySelectorAll(".sub_menu");
const gnb = document.querySelector(".gnb");
const gnbMenu = document.querySelectorAll(".gnb>ul>li");
const main_ham_btn = document.querySelector(".main_hamburger_btn");
const main_close = document.querySelector(".main_close");

// ResizeObserver - 실시간 winWidth 값 띄우기
const body = document.querySelector("body");
const observer = new ResizeObserver((entries, observer) => {
  var scrollWidth = 17
  for (const entry of entries) {
    const {width, height, top, left} = entry.contentRect;
    winWidth = width+scrollWidth
  }
})
observer.observe(body);

// classOn 함수
let classOn = (list, i)=>{
  for(let el of list){
    el.classList.remove("on","active");
  }
  list[i].classList.add("on","active");
}

// mobile/pc 반응형 주 메뉴 기능 변경
// <mobile용>
main_ham_btn.addEventListener('click',e=>{
  if(winWidth<=1550)
   gnb.classList.add('on');
})
main_close.addEventListener('click',e=>{
  if(winWidth<=1550){
    gnb.classList.remove('on');
    gnbMenu.forEach(menu=>{
      menu.classList.remove('on')
    })
  }
})
gnbMenu.forEach(menu=>{
  menu.addEventListener('click',e=>{
    if(winWidth<=1550)
    menu.classList.toggle('on');
  })
})

// <pc용>
header.addEventListener('mouseover',()=>{
  if(winWidth>1550){
    header.classList.add('on');
  }
})
header.addEventListener('mouseout',()=>{
  var scrollY = window.pageYOffset;
  if(winWidth>1550){
    (scrollY>0)? header.classList.add('on') : header.classList.remove('on')
  }
})
gnbMenu.forEach((menu, i)=>{
  menu.addEventListener('mouseover',e=>{
    if(winWidth>1550){
      header.classList.add('active');
      classOn(gnbMenu, i);
    }
  })
  menu.addEventListener('mouseout',e=>{
    if(winWidth>1550){
      header.classList.remove('on');
      header.classList.remove('active');
      menu.classList.remove('on');
    }
  })
})
// 공통
window.addEventListener('wheel',e=>{
  if(e.deltaY > 0){
    header.classList.add('on');
    header.style.position = `fixed`;
  }
})
window.addEventListener('scroll',e=>{
  if(scrollY<=10){
    header.classList.remove('on')
    header.style.position = `absolute`;
  }
})
})