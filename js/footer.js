// footer.js

window.addEventListener('load',function(){

// footer 패밀리 사이트
const familyBtn = document.querySelector(".family_site");
familyBtn.addEventListener("click",e=>{
  e.preventDefault();
  familyBtn.classList.toggle("on");
})

// 탑버튼
const topBtn = document.querySelector('.top_btn')
topBtn.addEventListener('click',e=>{
  topBtn.classList.remove('active')
  e.preventDefault();
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
})
window.addEventListener('scroll',e=>{
  e.preventDefault();
  if(scrollY<=10){
    topBtn.classList.add('on')
  }else{
    topBtn.classList.remove('on')
  }
})
window.addEventListener('wheel',e=>{
  if(e.deltaY > 0){
    topBtn.classList.add('active')
  }
  if(scrollY<=10){
    topBtn.classList.remove('active')
  }
})
})