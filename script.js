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
    
    
    return {
        spaces
        
    };
})();

gameboard.spaces[1]; // 1


function createPlayer(symbol) {
    return {
        symbol:symbol
    }
}

let player1 = createPlayer('X')
let player2 = createPlayer('O')

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

for (spaces in gameboard.spaces) {

    let newButton = document.createElement('button') ;
    newButton.className='spaces';
    newButton.id = `space${gameboard.spaces[spaces]}`
    console.log(gameboard.spaces[spaces])
    document.querySelector('#gameboard').appendChild(newButton)

}


//displayController: difficulty, x o buttons
//gameboardDiv footer: restart button










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



