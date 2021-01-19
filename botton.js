const Log = document.querySelector(".Log");
const Sign = document.querySelector(".Sign");


const Log_Out = "LogOverOut";
const Log_in = "LogOver";
const Sign_Out = "SignOverOut";
const Sign_in = "SignOver";

function Log_over(){
const CheckLog = Log.classList.contains(Log_Out);
if(!CheckLog){
    Log.classList.remove(Log_in);
    Log.classList.add(Log_Out);
}
}

function Log_out(){
    const CheckLogout = Log.classList.contains(Log_in);
if(!CheckLogout){
    Log.classList.remove(Log_Out);
    Log.classList.add(Log_in);

}
}

function Sign_over(){
    const CheckSign = Sign.classList.contains(Sign_Out);
    if(!CheckSign) {
        Sign.classList.remove(Sign_in);
        Sign.classList.add(Sign_Out);

    }
}

function Sign_out(){
    const CheckSignout = Sign.classList.contains(Sign_in);
    if(!CheckSignout) {
        Sign.classList.remove(Sign_Out);
        Sign.classList.add(Sign_in);

    }
}









function printIt (){
Log.addEventListener("mouseover",Log_over);
Log.addEventListener("mouseout",Log_out);
Sign.addEventListener("mouseover",Sign_over);
Sign.addEventListener("mouseout",Sign_out);

}

printIt();

