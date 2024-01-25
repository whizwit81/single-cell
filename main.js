
//Create an Array of Strings - Each string represents the name of a contender

const contendersNames = ["Alex", "Emily", "Ben", "Olivia", "Chris", "Sophia"]

// Create empty Array for Objects (contenders)
const contendersArray= [];


//makes the contenders object
for (const name of contendersNames) {
    const contenders= {
        id:contendersArray.length+1,
        name:name,
        size:1
    }
    contendersArray.push(contenders)
}


// Chooses Random Contender Object
const chooseRandomContender = (contendersList) => {
    const contenderId = Math.floor((Math.random() * contendersList.length))

    return contendersList[contenderId]    
}


let matchCount = 1
let deathCount = 0
const gameLogic = () => {
    while (contendersArray.length > 1) {
        let firstContender = chooseRandomContender(contendersArray)
        let secondContender = chooseRandomContender(contendersArray)
        while (firstContender === secondContender) {
            secondContender = chooseRandomContender(contendersArray)
        }
        
        
        if (firstContender.size > secondContender.size) {
            console.log(`${secondContender.name} lost to ${firstContender.name} in a heated battle in match ${matchCount}`)
            firstContender.size++
            matchCount++
            // delete contendersArray[contendersArray.indexOf(secondContender)]
            contendersArray.splice(contendersArray.indexOf(secondContender), 1)

        } else if (firstContender.size < secondContender.size) {
            console.log(`${firstContender.name} lost to ${secondContender.name} in a heated battle in match ${matchCount}`)
            secondContender.size++
            matchCount++
            // delete contendersArray[contendersArray.indexOf(firstContender)]
            contendersArray.splice(contendersArray.indexOf(firstContender), 1)
            
        } else {
            const loser = chooseRandomContender([firstContender, secondContender])
            if (loser === firstContender){
                console.log(`${firstContender.name} lost to ${secondContender.name} in a heated battle in match ${matchCount}`)
                secondContender.size++
                matchCount++
                // delete contendersArray[contendersArray.indexOf(firstContender)]
                contendersArray.splice(contendersArray.indexOf(firstContender), 1)
            }
            else {
                console.log(`${secondContender.name} lost to ${firstContender.name} in a heated battle in match ${matchCount}`)
                firstContender.size++
                matchCount++
                // delete contendersArray[contendersArray.indexOf(secondContender)]
                contendersArray.splice(contendersArray.indexOf(secondContender), 1)
            }
        }

    }
    console.log(`The winner is ${contendersArray[0].name}`)
}
    

    gameLogic()
    
    
    // Something like the below to remove dead contender
    //contendersArray.splice(contenders)

    

   /*  
    Iterate through Array of Strings
        Create Object with following properties
            id: (Array of Objects).length + 1
            name: String
            size: 1
            alive: true
        Push Object to Array of contenders


    Set matchCount = 1
    Loop until only 1 contender remains
        Randomly select 2 contender Objects from the Array of contenders
            firstContender = randomNum
                if contender.alive = false, reroll contender
            secondContender = randomNum
                if contender.alive = false, reroll contender
                If contender 1 = contender 2, reroll contender 2
            Compare their size, bigger one wins 
                If tie, we choose how to break the tie
                    Contender with greater id wins ties
            Increase winner.size by 1
            Set loser.alive to false
            
        Console log "blank lost fight to blank in a heated battle in match 'matchCount'". 

        matchCount++

    
    Console log the last one remaining as the winner.
        Find sole contender Object where Object.alive = true
    
    
*/


/* NEEDED FUNCTIONS
    Choose random Integer between 0 (inclusive) and length of the array (exclusive)
        So that two random contenders can be selected

    Create a contender Object based on a passed in String and push to Array contenders

*/
