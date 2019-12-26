let min = 0;
let max = 8;
let currentAttemptPrize = 100;
let totalPrise = 0;
let attempts = 3;
let wantPlay = true;
let gameOver=false;
let startGame = confirm('Do you want to play a game?');
if (startGame) {
    while (wantPlay) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        while (attempts > 0) {
            let userNumber = +prompt(`Choose a roulette pocket number from ${min} to ${max}
Attempts left: ${attempts}\nTottal price: ${totalPrise}$
Posible prize in current attempt: ${currentAttemptPrize}$`);
            if (randomNumber === userNumber && attempts === 3) {
                totalPrise += currentAttemptPrize;
                break
            }else if (randomNumber === userNumber && attempts === 2) {
                totalPrise += currentAttemptPrize;
                break
            }else if (randomNumber === userNumber && attempts === 1) {
                totalPrise += currentAttemptPrize;
               
                break
            }
            attempts--;
            currentAttemptPrize = currentAttemptPrize / 2;
                     if(attempts===0) {
                         gameOver=true;
                     }
         
        }
        if (gameOver===true) {
            alert(`Thank you for your participation. Your prize is: ${totalPrise}$`);
            let playAgainAfterLose = confirm('Do you want to play again?');
            if(playAgainAfterLose){
                    max = 8;
                    currentAttemptPrize = 100;
                    totalPrise = 0;
                    attempts = 3;
                gameOver=false;
            }else{
                wantPlay = false;
            }
        }else if (gameOver===false && totalPrise!==0){
            alert(`Congratulation, you won!   Your prize is: ${totalPrise}$`);
            let continueGame = confirm('Do you want to continue?');
            if (continueGame) {
                max = max + 4;
                if(attempts===3){
   currentAttemptPrize = currentAttemptPrize * 2;
                }else if (attempts===2){
                    currentAttemptPrize = currentAttemptPrize * 4;
                                 }else if (attempts===1){
                                    currentAttemptPrize = currentAttemptPrize * 8;
                                                 }
             
                attempts = 3;
                continue;
            }else {
                alert(`Thank you for your participation. Your prize is: ${totalPrise}$`);
                let playAgain = confirm('Do you want to play again?');
                if (playAgain) {
                    max = 8;
                    currentAttemptPrize = 100;
                    totalPrise = 0;
                    attempts = 3;
                    continue;
                }else {
                    wantPlay = false;
                }
            }
            wantPlay = false;
        }
    }
}else {
    alert('You did not become a billionaire, but can.')
}