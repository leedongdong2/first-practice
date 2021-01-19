const inputId = document.querySelector(".inputId");
const inputPassWard = document.querySelector(".inputPassWard");
const onbody = document.querySelector("body");

const input_Id = "inputId";
const input_IdClick = "inputIdClick";

const input_PassWard = "inputPassWard";
const input_PassWardClick = "inputPassWardClick";


function ChangeId(){
    const IdColor = inputId.classList.contains(input_IdClick);
if (!IdColor){
    inputPassWard.classList.remove(input_PassWardClick);
    inputId.classList.add(input_IdClick);
}
}

function ChangePassWard(){
    const PassWardColor = inputPassWard.classList.contains(input_PassWardClick)
    if(!PassWardColor){
        inputId.classList.remove(input_IdClick);
        inputPassWard.classList.add(input_PassWardClick);
     
    }
}




function printTHE(){

inputId.addEventListener("click",ChangeId);   
inputPassWard.addEventListener("click",ChangePassWard);





}

printTHE();
