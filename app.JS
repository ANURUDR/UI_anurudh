let boxes =document.querySelectorAll(".box");

// console.log(boxes);

let resetBtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgConatiner=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach( (box)  =>{

box.addEventListener("click",() =>
{
    // console.log("box was clicked");
     if(turnO)
     {
        box.innerText ="0";
        turnO = false;
     }
     else
     {
        box.innerText ="X";
        turnO = true;
     }
     box.disabled = true;

    checkWinner();

    });

});



const resetGame =() =>
{
    turnO = true;
 enableBoxes();
 msgConatiner.classList.add("hide");
}

const disableBoxes = () =>
{
    for (let box of boxes)
    {
        box.disabled=true;

    }
}
const enableBoxes = () =>
    {
        for (let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
    }
const showWinner = (winnner) =>
{
    msg.innerText= ` Congatulations, winner is ${winnner} `   ;
    msgConatiner.classList.remove("hide");
    disableBoxes();

};

const showDraw = () =>
    {
        msg.innerText= ` Oops,We have a Draw `   ;
        msgConatiner.classList.remove("hide");
        disableBoxes();
    
    };


const checkWinner = () => {
    let count=1;
    for (let pattern of winPatterns)
               
        {
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != ""  &&  pos3Val != "")
            {
                if (pos1Val === pos2Val  && pos2Val === pos3Val)
                {
                    
                    showWinner(pos1Val);
                }
                // else if (pos1Val.concat(" ", pos2Val, " ", pos3Val) != "X X X"  || pos1Val.concat(" ", pos2Val, " ", pos3Val) != "0 0 0" )
                    else
                { 
                  count++;  
                //    console.log(count);
                    if (count==9)
                    {
                        showDraw();
                    }

                }
            
          
        }
            }
        }
    ;

    const checkDraw = () => {
        for (let pattern of winPatterns)
                   
            {
                let pos1Val = boxes[pattern[0]].innerText;
                let pos2Val = boxes[pattern[1]].innerText;
                let pos3Val = boxes[pattern[2]].innerText;
    
                if(pos1Val != "" && pos2Val != ""  &&  pos3Val != "")
                {
                    if (pos1Val != pos2Val  || pos2Val != pos3Val)
                    {
                        
                        showWinner(pos1Val);
                    }
                
              
            }
                }
            }
        ;

 
    newGamebtn.addEventListener("click",resetGame);
    resetBtn.addEventListener("click",resetGame);