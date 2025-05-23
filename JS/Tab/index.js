document.addEventListener("DOMContentLoaded",function(){
    

    let firstTab = document.getElementById('first');
    let secondTab = document.getElementById('second');
    let thirdTab = document.getElementById('third');
    let fourthTab = document.getElementById('fourth');


    let f = document.getElementsByClassName('firstTab');
    let s = document.getElementsByClassName('secondTab');
    let t = document.getElementsByClassName('thirdTab');
    let fo = document.getElementsByClassName('fourthTab');
    secondTab.addEventListener("click",()=>{
        s[0].classList.remove('hidden');
        f[0].classList.add('hidden');
        t[0].classList.add('hidden');
        fo[0].classList.add('hidden');
    });
    firstTab.addEventListener("click",()=>{
        s[0].classList.add('hidden');
        f[0].classList.remove('hidden');
        t[0].classList.add('hidden');
        fo[0].classList.add('hidden');
    });
    thirdTab.addEventListener("click",()=>{
        s[0].classList.add('hidden');
        f[0].classList.add('hidden');
        t[0].classList.remove('hidden');
        fo[0].classList.add('hidden');
    });
    fourthTab.addEventListener("click",()=>{
        s[0].classList.add('hidden');
        f[0].classList.add('hidden');
        t[0].classList.add('hidden');
        fo[0].classList.remove('hidden');
    });

})