var current_player = "O";

var board =[
  [document.getElementById("11"), document.getElementById("12"), document.getElementById("13")], [document.getElementById("21"), document.getElementById("22"), document.getElementById("23")], [document.getElementById("31"), document.getElementById("32"), document.getElementById("33")]
];

function checkRow(row){
  var x = 0;
  for(x = 0; x < 3; x++){
    if(board[row][x].innerText != current_player){
      return false;
    }
  }
  return true;
}

function checkCol(col){
  var x = 0;
  for(x = 0; x < 3; x++){
    if(board[x][col].innerText != current_player){
      return false;
    }
  }
  return true;
}

function checkDiag(){
  var diagonal1 = board[0][0].innerHTML === current_player && board[1][1].innerHTML === current_player && board[2][2].innerHTML === current_player;
  var diagonal2 = board[0][2].innerHTML === current_player && board[1][1].innerHTML === current_player && board[2][0].innerHTML === current_player;
  return diagonal1 || diagonal2

}

function checkWin(){
  var i = 0;
  for(i = 0; i < 3; i++){
    console.log(checkRow(i))
    if (checkCol(i) || checkRow(i)){
      return true;
    }
  }
  return checkDiag();
}


function turn(){
  if (event.target.innerText === ""){
    event.target.innerText = current_player;
    console.log(checkWin())
    if(checkWin()){
      document.body.innerHTML = `<center id="winner">${current_player} wins!</center>`;
    }
    else{
      current_player = current_player === "X" ? "O" : "X";
    }
  }
}
