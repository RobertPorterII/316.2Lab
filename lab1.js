// New code with functions and more user friendly

const randomNum = Math.floor(Math.random() * 100 + 1)

console.log(randomNum);
window.alert(guessNumber(randomNum))

// can make it function to change argument


let returnMessage
function guessNumber(randomNum) { // taking random number
    let guess = parseInt(window.prompt('Guess a number between 1-100 if u dare'))
    console.log(guess);
    
    let attempt = 1
    let returnMessage
// while loop missing was missing to check the number after the init guess
// added 
    if(! isNaN(guess)){ // if its not, not a number number(Nan) is true or false
        // while guess not equal to random number then return
        while (guess !== randomNum && attempt < 10 /*&& guess !== isNaN(guess)*/){ // and made less then 10 attempts
            if(guess < randomNum){
                returnMessage = `Your crawling on the ground, a higher number maybe?, you have ${10-attempt} attempts left`
            }else{
                returnMessage =`You flew too high try, try a lower number maybe?, you have ${10-attempt} attempts left`
            }
            attempt++
            guess = parseInt(window.prompt(`${returnMessage}, Do better pick another number`))
            console.log(returnMessage);
            console.log(attempt);
            
        }

        }else{
            returnMessage = 'Failed try again.. if u got the guts'
        }

        if (guess === randomNum){
            returnMessage = ` Somehow You WON The number was: ${randomNum} won't happen again`
            // guess = parseInt(window.prompt(`${returnMessage}, I can't believe you pulled it off`))
        }else if (attempt === 10){
            returnMessage = `Game Over your outta chances `
        }else{
            returnMessage = `Thats not a real number try again!`
        }
        console.log(returnMessage);
        return returnMessage; // still get undefined msg but it works
    }
    // guess will be moved in to if /while later
    //guess = parseInt(window.prompt(`${returnMessage}, Do better pick another number`)) 
        //console.log(returnMessage);

    