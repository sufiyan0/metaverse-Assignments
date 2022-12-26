import inquirer from "inquirer";

async function first() {

    const guess: {
        guessNum: number
    }
        = await inquirer.prompt([
            {
                type: "list",
                name: "guessNum",
                choices: ["1", "2", "3", "4", "5"],
                message: "Enter a number between 1 to 5: "
            }
        ])
    const random = Math.floor(Math.random() * 4 + 1)


    const { guessNum } = guess;
    console.log(guessNum)
    if (guessNum > 0 && guessNum <= 10) {
        if (guessNum == random) {
            console.log("You win!")
        } else {
            console.log("You Loss the game try again")
            console.log(`The answer is ${random}`)
        }
    } else {
        console.log("Plese Enter a valid number")
    }
}



async function startAgain() {

    do{
        await first();
        
         var start
            = await inquirer.prompt(
                {
                    type: "list",
                    name: "restart",
                    choices: ["Yes", "No"],
                    message: "Do you want to play again "
                }
            )

            

    } while(start.restart == "Yes");
}
startAgain()

// const { restart } = start;

export {};
