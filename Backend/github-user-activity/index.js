import githubUsernameRegex from 'github-username-regex';
import readline from 'node:readline';

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question('Enter your GitHub username : ',username =>{
    const url = `https://api.github.com/users/${username}/events`;
    if(username.length==0 || githubUsernameRegex.test(username)){
                fetch(url)
            .then(response => response.json())
            .then((data)=>{

                // console.log(data);
                const events = new Map();
                data.forEach(elt=>{
                    const key = `${elt.type}::${elt.repo.name}`;
                    const count  = events.get(key) || 0;
                    events.set(key,count+1);
                })

                for(const [key,value] of events){
                    // console.log(key + '---->' + value);
                    const [type,name] = key.split('::');
                    console.log('- '+type + ' ' + value + ' to ' + name);
                }

                rl.close();

            })
            .catch(err => {
                console.log('Error '+ err);
                rl.close();
            })
    }else{
        console.log("Invalid Username");
        rl.close();
    }
})

/* 
in JavaScript, arrays (like [elt.type, elt.repo.name]) are objects, 
and objects (including arrays) are compared by reference,
 not by value when used as keys in a Map.

That means each [elt.type, elt.repo.name] you create is a 
new array object, even if its contents are the same—so they
 won’t be recognized as the same key.
*/