// howto.js

window.addEventListener('load',function(){

// 1층 모델, 2층 모델 선택
const store_model = document.querySelectorAll(".store_model>ul>li");
const model_select = document.querySelectorAll(".model_select>ul>li");

model_select.forEach((model, i)=>{
  model.addEventListener("click",e=>{
    e.preventDefault();
    selection(store_model, i);
    selection(model_select, i);
  })
})

let selection = (list, i)=>{
  for(let el of list){
    el.classList.remove("on");
  }
  list[i].classList.add("on");
}

// 스크롤 시 해당 컨텐츠에 애니메이션 작동
const contents = document.querySelectorAll('#container>div')
// console.log(contents)
// contents.forEach(content =>{
//   content.addEventListener('wheel',e=>{
//     if(!e.currentTarget.classList.contains('on')){
//       e.currentTarget.classList.add('on');
//     }
//   })
// })

var scrollY = window.pageYOffset;
  console.log(scrollY)
window.addEventListener('scroll',e=>{
  scrollY = window.pageYOffset;
  if(scrollY>100 && scrollY <= 800){
    contents[0].classList.add('on')
    // contents[3].classList.remove('on')
  }else if(scrollY>800 && scrollY <= 1600){
    // contents[0].classList.remove('on')
    contents[1].classList.add('on')
  }else if(scrollY>2100 && scrollY <= 2400){
    // contents[1].classList.remove('on')
    contents[2].classList.add('on')
  }else if(scrollY>3600 && scrollY <= 4000){
    // contents[2].classList.remove('on')
    contents[3].classList.add('on')
  }
})

// 점포 모델 오토 배너
let cornerWrap = document.querySelector(".corner_wrap");
let cornerList = document.querySelectorAll(".corner_wrap > li");
let firstNum = 0;
let lastNum = cornerList.length - 1;
let autoBnn;

function autoBanner() {
  firstNum++;
  if (firstNum > 11) {
    firstNum = 0
    cornerWrap.style.transition = `none`;
  } else {
    cornerWrap.style.transition = `all`;
    cornerWrap.style.transitionDuration = `1s`;
  }
  cornerWrap.style.transform = `translateX(${-480 * firstNum}px)`;
  clearTimeout(autoBnn);
  autoBnn = setTimeout(autoBanner, 1000);
}
autoBanner();

// 지역 선택 - 테이블
const loca_slt = document.querySelectorAll(".location_select>ul>li>a");
const all = document.querySelectorAll('.content5>.content_inner>div');
const seoul = document.querySelector('div.seoul');
const youngnam = document.querySelector('div.youngnam');
const gyeonggi = document.querySelector('div.gyeonggi');
const etcs = document.querySelector('div.etcs');

loca_slt.forEach((loca, i)=>{
  loca_slt[0].addEventListener('click',e=>{
    all.forEach(el=>{
      el.style.display = `block`;
    })
  })
  loca.addEventListener("click", e=>{
    e.preventDefault();
    selection(loca_slt, i);

    all.forEach(item =>{
      item.style.display = `none`;
    })
    
    let classValue = e.currentTarget.parentElement.getAttribute("class");
    console.log(classValue);
    switch (classValue) {
      case 'seoul':
        show(seoul);
        break;
      case 'youngnam':
        show(youngnam);
        break;
      case 'gyeonggi':
        show(gyeonggi);
        break;
      case 'etcs':
        show(etcs);
        break;
    }
    function show(classValue){
      classValue.style.display = `block`;
    }
    })
});
})