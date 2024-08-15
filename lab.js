//const app = document.getElementById('app');
// const gameBox = document.createElement('table')


//const randomNumber = Math.trunc(Math.random()*100+1); //counting starts at 0 so +1 to start at 1
// if u take out trunc u will get random numbers with decimals
// Math.random will always just pick 0-1 so gotta add the *100+1 to get the 1-100

// trunc will round down to base number number
//console.log(Math.trunc(47.12)); // output 47
//console.log(Math.trunc(47.86)); // output 47

//console.log(randomNumber); // will output random number from 0 -100 based on code above

// Create Prompt for user to guess

// Colton didnt like setTimeout method
// setTimeout(()=>){
//     console.log('This is a filler message');
    
// }, 1500)

 //let guess  // created for dowhile
 //console.log(guess);
 //setTimeout(() => {
    //console.log("This is a throwway message");
    
 //},2000) // says 200 but thats really 2sec cause the 2000 is milla sec

 const app = document.getElementById('app');
 // const gameBox = document.createElement('table')

 const randomNumber = Math.trunc(Math.random()*100+1);

 console.log(randomNumber);

let guess
console.log(guess);
let output = ''


window.alert('Good day!Now guess a number between 1 -100 .... or else')

// went with do while instead
do {
    guess = parseInt(window.prompt("Pick a number 1-100"))
    if (randomNumber === guess) {
        output = 'Thats the best you could do'
        
    }else{
        output = `Not even close  the  number was ${randomNumber}, try guessing again`

    }
    window.alert(output)
} while (randomNumber !== guess);




