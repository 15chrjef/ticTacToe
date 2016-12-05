var prompt = require('cli-prompt');
console.log('Welcome to Tic Tac Toe!');
var player1;
var player2;
var playerturn;
var arr = ['1:0', '2:0', '3:0', 
'4:0', '5:0', '6:0', 
'7:0', '8:0', '9:0'];

function currentBoard(arr) {
  return ` 
     |   |
  ${arr[0]}|${arr[1]}|${arr[2]}
 ____|___|____
  ${arr[3]}|${arr[4]}|${arr[5]}
 ____|___|____
  ${arr[6]}|${arr[7]}|${arr[8]}
     |   |
`;
}
 
function checkBoard() {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      return false;
    } else {
      if (arr[0] === arr[1] && arr[0] === arr[1]) {
        console.log(`${arr[0]} wins`);
      } else if (arr[3] === arr[4] && arr[3] === arr[5]) {
        console.log(`${arr[3]} wins`);
      } else if (arr[6] === arr[7] && arr[6] === arr[8]) {
        console.log(`${arr[6]} wins`);
      } else if (arr[0] === arr[3] && arr[0] === arr[6]) {
        console.log(`${arr[6]} wins`);
      } else if (arr[1] === arr[4] && arr[1] === arr[7]) {
        console.log(`${arr[1]} wins`);
      } else if (arr[5] === arr[2] && arr[2] === arr[8]) {
        console.log(`${arr[2]} wins`);
      } else if (arr[0] === arr[4] && arr[0] === arr[8]) {
        console.log(`${arr[0]} wins`);
      } else if (arr[2] === arr[4] && arr[2] === arr[6]) {
        console.log(`${arr[6]} wins`);
      }
    }
  }
} 


function myContinue() {
  if (playerturn === 1) {
    playerturn = 2
  } else {
    playerturn = 1
  }
  prompt(`Player${playerturn}, what would you like to do ${currentBoard(arr)}`, function(val) {
    choosePiece(val);
  })
}

function choosePiece (val) {
  val = Number(val);
  console.log(val, typeof val, typeof playerturn);
  if (typeof val === 'number') {
    if (playerturn === 1) {
      arr[val -1] = '1  ';
      console.log('arr', arr);
    } else {
      arr[val -1] = '2  ';
      console.log('arr', arr);
    }
    if (checkBoard() === false) {
      myContinue();
    } else {
      return;
    }
  } else {
    console.log('location not valid!!')
    prompt(`Player${playerturn}, what would you like to do ${currentBoard(arr)}`, function(val) {
      choosePiece(val);
    });
  }
} 

prompt('Player1, enter your name: ', function (val) {
  player1 = val;
  prompt('Player2, enter your name: ', function(val) {
    player2 = val;
    console.log(player1, player2);
    prompt('Ready to play: (Yes or No)', function(val) {
      if (val === 'No') {
        console.log('not playing today');
        return 'not playing today';
      }
      prompt(`we are ready to play!!!!!, the game is simple, available places will 
        be labled with theier position number followed by a "0" like so 1:0, 
        other places will be labled with either just a "1" which means player1 has taken the space, 
        or a "2" which means player2 has taken the space, each turn i will show the board, say who is up and ask where they would like to go.
        you will inpuy yhr location of a free space for for the previous example of 1:0 you would enter "1", you cannot take an already captured space.
        If you get three spaces in a row then you win! the starting board is currently ${currentBoard(arr)}, player1 where would you like to go?`, function(val) {
        playerturn = 1;
        choosePiece(val);
        });
    });
  }, function(err) {
    console.log('error with p2');
  });
}, function(err) {
  console.log('error with p1');
});


