"use strict";
// let text =document.querySelector(".text");
// // text.id='text'
// // console.log(text.class);   /// classni  bu xolatda chaqirib bolmaydi Undifend qaytaradi
// // console.log(text.id);
// // console.log(text.getAttribute("class"));

// console.log(text.setAttribute("id","text2"));
// text.setAttribute("style","color:white;background-Color:green")

// text.setAttribute("class","text-danger bg-warning p-5");


let notif=document.querySelector("#notif"),
input=document.querySelectorAll("input"),
sendBtn=document.querySelector('.btn-primary');

let indicator=document.querySelector("#indicator");
let modalWrapper=document.querySelector(".modal-wrapper");
let textTimer=document.querySelector('.text-danger')

input[0].addEventListener('focus',(e)=>{
e.target.setAttribute('style',"border:2px solid green")
e.target.setAttribute('placeholder',"Enter Username")
})

input[0].addEventListener('blur',(e)=>{

   if(e.target.value.trim().length===0){
      e.target.setAttribute('style',"border:2px solid red")
      e.target.setAttribute("placeholder","Please fill input... ")
   }
   else{
      e.target.setAttribute('style',"border:2px solid green")

   }

   })

   

input[1].addEventListener('focus',(e)=>{

e.target.setAttribute('style',"border:2px solid green")
e.target.setAttribute('placeholder',"Enter password")
indicator.setAttribute('class',"ind d-block")

})

input[1].addEventListener('blur',(e)=>{

   
   if(e.target.value.trim().length===0){
      e.target.setAttribute('style',"border:2px solid red")
      e.target.setAttribute("placeholder","Please fill input... ")
      indicator.setAttribute('class',"ind d-none")

   }
   else{
      e.target.setAttribute('style',"border:2px solid green")
      indicator.setAttribute('class',"ind d-block")

   }
   })


   indicator.addEventListener("click",(e)=>{
      if(input[1].getAttribute('type').toLowerCase()==="password"){
         input[1].setAttribute('type','text');
      indicator.innerHTML=`<i class="bi bi-eye-slash-fill"></i>`;
      }

      else{input[1].setAttribute('type','password');
      indicator.innerHTML=` <i class="bi bi-eye-fill"></i>`;}
   })

// //==============form validion
sendBtn.addEventListener('click',()=>{
   if(input[0].value.trim().length===0 ||input[1].value.trim().length===0 ){

   }
   else{
      modalWrapper.setAttribute("class","modal-wrapper d-flex")

      setTimeout(function(){
         modalWrapper.setAttribute("class","modal-wrapper d-none")
      },3000)
   }
})

// ///////=========== date object===========
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

let date=new Date();
console.log(date.getDate());       // bugungi sana
console.log(date.getDay());        //bugungi hafta kuni  

console.log(date.getFullYear());   // yil 

console.log(month[date.getMonth()]);/// oy
console.log(date.getHours());        // soat
console.log(date.getMinutes());      // daqiqa
console.log(date.getSeconds());
console.log(date);

setInterval(() => {
   let date=new Date();
   textTimer.innerHTML=`${date.getFullYear()}.${month[date.getMonth()]}.${date.getDate()} 
   ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} <br>
    ${dayNames[date.getDay()]}`

}, 1000);