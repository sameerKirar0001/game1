let boxes = document.querySelectorAll(".box");
console.log(boxes);

let resetbtn = document.querySelector(".reset");

let turn0 = true;
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

boxes.forEach((b) =>{       //b====any variable name in()
    b.addEventListener("click" ,()=>{
        if(turn0){
          b.innerText = "0";
          turn0 = false;
        }else{
            b.innerText = "X";
            turn0 = true;
        }
        b.disabled = true; //by this text value will not change on dbclick 
        count++;
        checkwinner();
    });
});

// access parageaph for show winner
let show=document.querySelector(".msg-hide");

const showwinner=(winner)=>{
    show.style.display="flex";
    show.innerText = `Congratulations, Winner is ${winner}`;
}

const checkwinner = ()=>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !=="" && pos2 !=="" && pos3!==""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1)
                showwinner(pos1);
                
            }
        }
    }
}

const rstbtn = ()=>{
    turn0 = false;
    count=0;
    enableBoxes();
    show.style.display="none"; ///to remove the winner text again
};
const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };





