import datepicker from 'https://cdn.skypack.dev/js-datepicker'
import {DateTime} from 'https://cdn.jsdelivr.net/npm/luxon@3.4.4/+esm';
document.addEventListener('DOMContentLoaded',function(){
    let month=0 ;
    let year=0;
    let d=0;
    const picker = datepicker('.datepicker',{ position: 'tr' ,formatter:(input,date,instance)=>{
        const value = date.toLocaleDateString();
        // let temp = new Date().getDate();
        // const [m,d2,y] = temp.split('/');
        // console.log(temp);
        // console.log("cYear = "+picker.currentYear ,"cMonth = "+ (picker.currentMonth+1) , "cDate = "+(temp))

        // console.log(value)
        d = parseInt(date.getDate());
        month = parseInt(date.getMonth()+1);
        year =parseInt( date.getFullYear());
        let p = document.getElementsByTagName('p');
            // console.log("Check tis "+DateTime.now());
        
            let btn  = document.getElementsByTagName('button');
            btn[0].addEventListener('click',function(){
            // let age = DateTime.now().diff(DateTime.local(parseInt(year), parseInt(month), parseInt(d)), ['years', 'months', 'days', 'hours']);
            // console.log('month = '+month,'year = '+year,'date = '+d);
            // console.log(age);


                const birthDate = DateTime.local(year, month, d);
                const today = DateTime.now();

                if (birthDate > today) {
                    p[0].innerHTML = '<b>You are not born yet.<b>';
                } else {
                    let age = today.diff(birthDate, ['years', 'months', 'days']);
                    // p[0].innerText = `You are ${age.years} years, ${Math.floor(age.months)} months and ${Math.floor(age.days)} days old.`;
                    p[0].innerHTML =  `You are <b>${age.years} years</b>, <b>${Math.floor(age.months)} months</b> and <b>${Math.floor(age.days)} days</b> old.`
                }
        })
        
        
        input.value = value;
    }});
})