import readline from 'node:readline';
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
const max = 101 ,min=1;
const guessedNum = Math.floor(Math.random()*(max-min+1))+min;
console.log('Welcome to the Number Guessing Game!');
console.log('I m thinking of a number between 1 and 100.');
console.log('You have certain number of chances to guess the number');
// console.log(' ');
console.log(' ');
console.log('Please select the difficulty level:\n 1. Easy (10 chances) \n 2. Medium (5 chances) \n 3. Hard (3 chances)')
let chance ;
rl.question('Enter your choice: ',choice=>{
    if(parseInt(choice) ==1){
        console.log('Great! You have selected the Easy difficulty level. \n Lets start the game!');
        chance=10;
    }
    else if(parseInt(choice)==2){
        console.log('Great! You have selected the Medium difficulty level. \n Lets start the game!');
        chance=5;
        
    }
    else if(parseInt(choice)==3){
        console.log('Great! You have selected the Hard difficulty level. \n Lets start the game!');
        chance=3
    }
    else {
        console.log('Choice does not exist , Exiting...');
        rl.close();
        return;
    }
    ask();
});


function ask(){
    if(chance==0){
        rl.close();
        console.log('The number was : '+guessedNum);
        return;
    }
    rl.question('Enter your guess: ',num=>{
                if(num==guessedNum){
                    console.log('Congratulations you guessed the number!!');
                    console.log('Attempts used ' + chance)
                    rl.close();
                    return;
                }
                else{
                    chance-=1;
                    if(num > guessedNum){
                        console.log('Incorrect! The number is less than '+num);
                    }
                    else{
                        console.log('Incorrect! The number is greater than '+num);
                    }
                    console.log("Remaining Chances = "+chance)
                    //  rl.close()  ;
                    ask();
                }
        
        });
        
}
// rl.close();