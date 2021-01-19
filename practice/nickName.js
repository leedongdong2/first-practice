const sendName = document.querySelector(".sendname");
const writeName = sendName.querySelector(".writename");
const showName = document.querySelector(".showname");
const rename = document.querySelector(".rename");

const savename = "username";
const showe = "show";
const hide = "hide";


function userName(text){
    localStorage.setItem(savename,text);
}


function showname(event){
    event.preventDefault();
const usernameVlaue = writeName.value;
showingName(usernameVlaue);
userName(usernameVlaue);

}


function makeuser(){
rename.classList.add(hide);  
sendName.classList.remove(hide);
sendName.addEventListener("submit",showname);
    }
    


function showingName(text){
sendName.classList.add(hide);
showName.classList.remove(hide);
showName.classList.add(showe);
rename.classList.remove(hide);
showName.innerText = `Hello ${text}`;

}




function lodaName(){
    const showing_name = localStorage.getItem(savename);
    if(showing_name === null) {
        makeuser();
    } else {
        showingName(showing_name);
    }
 }



function reName(){
    localStorage.removeItem(savename);
    showName.classList.remove(showe);
    showName.classList.add(hide);
    sendName.classList.remove(hide);
    sendName.classList.add(showe);
    rename.classList.add(hide);

}




function printname(){
    lodaName();
    rename.addEventListener("click",reName);

}
printname();


