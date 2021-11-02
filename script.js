//Variables
var flag = "X";

var Player = document.getElementById("Player");
var Message = document.getElementById("Message");

var tr = document.querySelectorAll("tr");
var td = document.querySelectorAll("tr td");

// Player.innerText = "The Player is " + flag;
//Cases of Win
winCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

AddEvents();
//detect and Write X or O 
function ClickHandler(e) {
     
    Write(e);

     if(IsPlayerWin()) {
        RemoveEvents();
        ShowWinMessage();
    }
}

//add event listener to rows
function AddEvents () {

    for (var i = 0; i < tr.length; i++) {
        tr[i].addEventListener('click', ClickHandler, false);
    
    }
}
//remove event listener from rows
function RemoveEvents(){
    for (var i = 0; i < tr.length; i++) {
        tr[i].removeEventListener('click', ClickHandler, false);
    
    }
}

// show win message 
function ShowWinMessage(){
    Player.innerText = ""
    Message.innerText = flag + " is Win";
}

//check if the player is win 
function IsPlayerWin() {

    for (var i = 0; i < winCases.length; i++) {

        if (td[winCases[i][0]].textContent === flag && td[winCases[i][1]].textContent === flag &&
            td[winCases[i][2]].textContent === flag) {
             return true ;
             
        }
    }

    return false
}

// write X or O 
function Write (e){

    if (e.target.innerText === "") {
        Player.innerText = "The Player is " + flag;
        flag = (flag == "X") ? "O" : "X";
        e.target.innerText = flag;
    }
}

// clear 
function Clear(){

    flag="X";
    Player.innerText = "The Player is " + flag;
    Message.innerText = "";
    for (var i = 0; i < td.length; i++) td[i].innerText ="" ;
 
}

// reset 
function Reset() {
 
    AddEvents(); 
    Clear();
   

}


