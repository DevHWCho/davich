// ask.js

window.addEventListener('load',function(){

const email_value = document.querySelector('.email_value');
const email_select = document.querySelector('#email_select');

// #################### 이메일 선택 ##############################
function changeSelection(){
  var selectedElement = document.getElementById("email_select");
  var optionVal = selectedElement.options[selectedElement.selectedIndex].value;
  var optionTxt = selectedElement.options[selectedElement.selectedIndex].text;
  if(optionVal==0){
    email_value.type = `text`;
    email_select.style.width = `13.5vw`;
  }else{
    email_value.type = `hidden`;
    email_value.value = optionVal;
    email_select.style.width = `30vw`;
  }
}

// 파일 첨부 (첨부파일 란에 파일명 보이기)
var fileName = document.querySelector(".attFile");
var attFile = document.querySelector("#attach_file") 

attFile.addEventListener("change",()=>{
  var name = attFile.files[0].name;
  fileName.value = name;
})
})