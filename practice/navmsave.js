const savename = document.querySelector(".savename");
const inputname = document.querySelector(".inputname");

const NickName = "Nickname" 




function saveuser (text) {
    localStorage.setItem(NickName,text);
}

function username(event){
event.preventDefalut();
const userNick = inputname.Value;
saveuser(userNick);
}





function saveit(){
savename.addEventListener("submit",username);
}

saveit();