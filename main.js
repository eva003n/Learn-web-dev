const navBar=document.querySelector('.navbar');
const menuBtn=document.querySelector('.menu');
const hometab=document.querySelector('.navbar .home');
const okBtn=document.querySelector('.okay');
const screenImg=document.querySelector('.screen img')

function showNav(){
  navBar.classList.add('next');
  
  
}
menuBtn.addEventListener('click',showNav);
okBtn.addEventListener('click',()=>{
  hideNav();
})
function hideNav() {
  screenImg.src='/images/img4.jpeg';
  navBar.classList.add('exit');
  
  setTimeout(()=>{
  navBar.classList.remove('exit')
    navBar.classList.remove('next')
    

},2000)
}



const downloadingTxt=document.querySelector('.downloadtxt');

function downloading() {
  const txt = document.createElement('p');
  txt.textContent='downloading...'
  txt.setAttribute('class','text')
  downloadingTxt.appendChild(txt)
setTimeout(()=>{
  downloadingTxt.removeChild(txt);
},2000)
}
setInterval(downloading,5000);

/*setInterval(() => {
  showNav();
}, 2000);
setInterval(() => {
 hideNav();
}, 4000);*/


