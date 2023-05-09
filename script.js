        /* Define playerPoints and computerPoints to start at 0 */
        let playerPoints = 0;
        let computerPoints = 0;


        /* The computer will select from this array */
        const array = ["Rock", "Paper", "Scissors"];

        /* Using the Math function to select position in Array */
        function getComputerChoice(){
            const randomChoice = Math.floor(Math.random() * array.length);
            return array[randomChoice];
        }    

        function playRound(playerSelection) {
            /* Set all prompt answers to lowercase */
            /*let playerSelection = prompt("Choose rock, paper, or scissors. First to five points win.", ''.toLowerCase());*/
            let computerSelection = getComputerChoice();
            if(playerSelection === computerSelection) {
                return ("You tied!");
            }else if ((playerSelection === "Rock" && computerSelection === "Paper") || 
                (playerSelection === "Paper" && computerSelection === "Scissors") || 
                (playerSelection === "Scissors" && computerSelection === "Rock")) {
                    computerPoints ++;
                    return ("You lose! " + computerSelection + " beats " + playerSelection);
            }else if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
                (playerSelection === "Paper" && computerSelection === "Rock") || 
                (playerSelection === "Scissors" && computerSelection === "Paper")) {
                    playerPoints ++;
                    return ("You win! " + playerSelection + " beats " + computerSelection);
                }
        }
        

        function game(e) {
            /* Loop round until player or computer reaches 5 points */
            const playerSelection = event.target.id;
            const result = playRound(playerSelection);                
            document.getElementById("result").innerHTML = result;
            document.getElementById("player-score").innerHTML = playerPoints;
            document.getElementById("computer-score").innerHTML = computerPoints;

            if(playerPoints === 5){
                document.getElementById("result").innerHTML = "Congrats! You beat the computer!";
                playerPoints = 0;
                computerPoints = 0;
            }else if(computerPoints ===5){
                document.getElementById("result").innerHTML = "Sorry you lose!";
                playerPoints = 0;
                computerPoints = 0; 
            }   

        }            
            
        
        const buttons = document.querySelectorAll("#buttons button");
        buttons.forEach((button) => {
            button.addEventListener('click', game)
    });
