const hex=['#C0C0C0','#808080','#000000','#FF0000','#800000','#FFFF00','#808000','#00FF00','#008000','#00FFFF'];
const btn=document.getElementById('main-button');
const color=document.querySelector('.color');
btn.addEventListener('click',function(){
const rndmnum=getRandomNum();
document.body.style.backgroundColor=hex[rndmnum];
color.textContent=hex[rndmnum];
});
function getRandomNum(){
    return Math.floor(Math.random()*hex.length);
}