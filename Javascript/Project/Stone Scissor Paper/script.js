let userScore = 0;
let compScore = 0;

const choices =  document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")
const getComp = () =>{
    const option = ["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
};
const drawGame = () =>{
    msg.innerText="Game has been draw, Play again ";
    msg.style.backgroundColor="#081b31";
}
const showWinner = (userWin,Userchoice,computerChoice)=>{
    if(userWin){
        msg.innerText=`You win !,Your ${Userchoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScorePara.innerText=userScore;
    }
    else{
        msg.innerText=`You loss !,Your ${computerChoice} beats Your  ${Userchoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText=compScore;
    }
};
const playGame = (Userchoice) =>{
    //generated computer choice
    const computerChoice = getComp();
    // console.log("User Choice : ",Userchoice);
    // console.log("Computer choice : ",computerChoice);
    if(Userchoice==computerChoice){
        //Draw.........Condition
        drawGame(); 
    }
    else{
        let userWin = true;
        if(Userchoice=="rock"){
            userWin = computerChoice=="paper"?false:true;
        }else if(Userchoice=="paper"){
            userWin = computerChoice=="rock"?true:false;
        }else{
            userWin = computerChoice=="rock"?false:true;
        }
        showWinner(userWin,Userchoice,computerChoice);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const Userchoice = choice.getAttribute("id");
        playGame(Userchoice)
    });
});