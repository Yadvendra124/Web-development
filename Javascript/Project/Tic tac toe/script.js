let boxes = document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newbtn = document.querySelector(".new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO = true;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const checkWinner = () =>{
    for( let pattern of winPattern){

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val !== ""  &&  pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(winnerplayer(pos1Val));
                return;
                
            }
        }
    }
    const isDraw = [...boxes].every((box) => box.innerText !== "");
    if (isDraw) {
        showWinner("Draw");
    }
};
const winnerplayer = (pos1Val) =>{
    if(pos1Val==="O"){
        return "Player 1"
    }
    else if(pos1Val==="X") {
        return "Player 2"
    }
    else{
        return "Draw"
    }
}
const disabledboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enabledboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText=""
    }
};
const showWinner = (winner) => {
    if(winner==="Player 1"||winner==="Player 2"){
        msg.innerText = 'Congratulation , Winner is '+winner;
    }
    else{
        msg.innerText='It is Draw';
    }
    msgContainer.classList.remove("hide");
    disabledboxes();
};
const resetGame = () =>{
    turnO=true;
    enabledboxes();
    msgContainer.classList.add("hide");
};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
