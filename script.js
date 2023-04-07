// <!-- 
// step 2:Store the gameboard as an array inside of a Gameboard object
// gameboard----module --
// gameboard.array--
// player1.object--- factory
// player2.object--- factory
// gameFlow.object--- module closure

// Players are also stored in objects


// Goal: Have as little global code as possible.
// Hint: Tuck everything away inside a module or factory
// Hint: If you only every need one of something (gameboard,displayController)
// use a module. 
// Use factories for multiples (i.e. players)


//How to Play Tic-Tac-Toe

// There is a gameboard.array with 9 spaces.
//There are two players
//The first player that clicks is x
//The second player 0
//winner gets 3 in a row
//

const gameboard = (() => {
    spaces= [1,2,3,4,5,6,7,8,9];
    
//Creating grid

for (space in spaces) {

    let newButton = document.createElement('button') ;
    newButton.className='spaces';
    newButton.id = `${spaces[space]}`

    console.log(spaces[space])
    document.querySelector('#gameboard').appendChild(newButton)
    // newButton.addEventListener("click",addMark);
    
}

//Function to be executed when clicked
    


//Event Listener
// const elements = document.getElementsByClassName("spaces");

// for (let i = 0; i < elements.length; i++) {
//     newButton.addEventListener("click",addMark);
//     console.log("jesus")
// }

    return {
        spaces,
        addMark
    };
})();

gameboard.spaces[1]; // 1

// for (spaces in gameboard.spaces) {

//     let newButton = document.createElement('button') ;
//     newButton.className='spaces';
//     newButton.id = `space${gameboard.spaces[spaces]}`
//     console.log(gameboard.spaces[spaces])
//     document.querySelector('#gameboard').appendChild(newButton)

// }

function createPlayer(symbol) {
    return {
        symbol:symbol
    }
}

let player1 = createPlayer('X')
let player2 = [];

player1.symbol


const createGameFlow = (() => {

    let counter = 0;

    return () => {
        if (counter % 2 === 0 ) {
        counter++;
        return 'X';
        }
        else {
        counter++;
        return 'O'}
    }
})

const gameflow = createGameFlow();

console.log(gameflow())



//     Set up html 
//     Write a ftn to put gameboard contents
//     for now manually fill in array with x and 0

//Gameboard

// for (spaces in gameboard.spaces) {

//     let newButton = document.createElement('button') ;
//     newButton.className='spaces';
//     newButton.id = `space${gameboard.spaces[spaces]}`
//     console.log(gameboard.spaces[spaces])
//     document.querySelector('#gameboard').appendChild(newButton)

// }
let clickedButtons = [];
let player2ID = [];
const paths = [ [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];


//displayController: difficulty, x o buttons--
const gameboardSpace = document.querySelectorAll('.spaces');
const winMessage = document.createElement('div');

function addMark() {

    gameboardSpace.forEach(space => {
        space.addEventListener("click",(event) => {
            if (gameflow() == 'X') {
                space.textContent = 'O';
                space.disabled = true;
                const clickedButtonID = space.id;
                // console.log(clickedButtonID)
                clickedButtons.push(parseInt(clickedButtonID));
                // winGame();
                //add win logic storage here
                const winningPath = paths.find(path => {
                    return clickedButtons.length === 3 && path.every(num => clickedButtons.includes(num));
                  });
                console.log(winningPath)
                    if (winningPath) {
                    // const winMessage = document.createElement('div');
                    winMessage.textContent = 'you win'
                    container.appendChild(winMessage)
                    }

                } else {
            space.textContent = 'X'
            space.disabled = true;
            const player2ID = space.id;
            player2.push(parseInt(player2ID));

            const winningPath = paths.find(path => {
                return player2.length === 3 && path.every(num => player2.includes(num));
              });
            if (winningPath) {
                winMessage.textContent = 'player1 you win'
                container.appendChild(winMessage)
            }
            // winGame();
            }
        }, false);
    })

    // if (gameflow() == 'X') {
    //     gameboardSpace.textContent = 'X'
    // } else {
    //     gameboardSpace.textContent = 'O'
    // }
    
}

addMark(gameboardSpace)

//Restart button


    const restartButton = document.getElementById("restart")
    restartButton.addEventListener("click",(event) => {
        gameboardSpace.forEach(space=> {
            space.textContent = '';
            gameflow();
            space.disabled = false;
            winMessage.remove();

        })
                    player2 = [];
            clickedButtons= [];
            gameflow();
            // container.appendChild(winMessage)

    })


//winning paths
//{across1:[1,2,3], across2:[4,5,6], across3[7,8,9]
//down1:[1,4,7], down2:[2,5,8], down3:[3,6,9]
//diag1:[1,5,9], diag2:[3,5,7]




// function winGame () {

    



// }








//     Function that allows players to add marks to specific spot in board
//     tied to dom.


//    -->


//    <!--  -->

//Module

// const Person = (name) => {
//     const sayName = () => console.log(`my name is ${name}`);
//     return {sayName};
//   }
  
//   const Nerd = (name) => {
//     // simply create a person and pull out the sayName function with destructuring assignment syntax!
//     const {sayName} = Person(name);
//     const doSomethingNerdy = () => console.log('nerd stuff');
//     return {sayName, doSomethingNerdy};
//   }
  
//   const jeff = Nerd('jeff');
  
//   jeff.sayName(); // my name is jeff
//   jeff.doSomethingNerdy(); // nerd stuff




//Factory Function

// function createCar(make, model, year) {
//     return {
//       make: make,
//       model: model,
//       year: year,
//       start: function() {
//         console.log(`Starting ${this.make} ${this.model}`);
//       },
//       stop: function() {
//         console.log(`Stopping ${this.make} ${this.model}`);
//       }
//     }
//   }



