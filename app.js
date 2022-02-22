const colors=['green','red','rgba(133,122,200)','#f15025'];
const btn=document.getElementById('main-button');
const color=document.querySelector('.color');
btn.addEventListener('click',function(){
    // console.log(document.body);
    //get random number between 0-3 
    const rndmnum=getRandomNum();
    document.body.style.backgroundColor=colors[rndmnum];
    color.textContent=colors[rndmnum];
});
//callback func
function getRandomNum(){
    return Math.floor(Math.random()*colors.length); //basically it is used to make it in range
}