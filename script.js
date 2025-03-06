let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;//playerX, playerO
const winPatterns=[[0,1,2],[0,3,6 ],[0,4,8],[1,4,7],[2,4,8],[2,4,6],[3,4,5],[6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        // box.innerText="ABCD";
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner(); 
    });
});

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disable=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disable=false;
        box.innerText="";
    }
};

const showWinner=(pos1val)=>{
          msg.innerText='Congratulations!';
          msgContainer.classList.remove("hide");
          disableBoxes();

};

const checkWinner=()=>{
    for(let patterns of winPatterns){
       let pos1val= boxes[patterns[0]].innerText;
       let pos2val=boxes[patterns[1]].innerText;
       let pos3val=boxes[patterns[2]].innerText;

       if(pos1val != "" && pos2val != "" && pos3val != "" ){
        if(pos1val===pos2val &&pos2val===pos3val){
            console.log("WINNER",pos1val);
            showWinner(pos1val);

        }
       }
    }
};


newgamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
