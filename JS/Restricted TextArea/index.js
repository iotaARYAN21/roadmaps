document.addEventListener("DOMContentLoaded",function(){
    let obj = document.getElementById("tA");
    console.log(obj);
    obj.addEventListener("input",function(){
        // alert("Hi");
        let content = obj.value;
        // var maxWord;
        // alert(content);
        let container = document.getElementsByClassName('container');
        if(content.length<250){
            container[0].style.border='2px solid white';
            // console.log(content , content.length);
            let p = document.getElementsByClassName('count');
            p[0].innerText = 0;
            p[0].innerText = content.length;
            // maxWord = content;
            // console.log("Maxword: ",maxWord);
        }
        else{
            let p = document.getElementsByClassName('count');
            p[0].innerText = 0;
            p[0].innerText = content.length;
            container[0].style.border='2px solid red';
            // console.log("Maxword is = ",maxWord);
            obj.value = content.substring(0,250);
            p[0].innerText='250';
        }
    })
    // obj.addEventListener('')
})