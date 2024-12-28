const container = document.querySelector("#container");




const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
rock.id = 0;
paper.id = 1;
scissors.id = 2;

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.style.margin = "20px";
});



const scoreField = document.createElement("h1");
scoreField.textContent = "0";





buttons.forEach((button) => {
    button.addEventListener("click",()=>{
        const choice = button.id;
        alert(choice);
        

    });
});













