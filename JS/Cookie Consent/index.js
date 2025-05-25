document.addEventListener("DOMContentLoaded",function(){
    let popup = document.getElementsByClassName('popup');
    setTimeout(()=>{
        popup[0].classList.toggle('hidden');
    },3000);
    let p = document.getElementById('cancel');
    p.addEventListener('click',()=>{
        popup[0].classList.toggle('hidden');
    })
    let btn = document.getElementsByTagName('button');
    btn[0].addEventListener('click',()=>{
        popup[0].classList.toggle('hidden');
    })

})