const mainTitleColor = document.querySelector(".mainTitle");

const Main_inColor = "inTitle";
const Main_outColor = "outTitle";


function MainTitleCange(){
const checkClass = mainTitleColor.classList.contains(Main_inColor)
if (!checkClass ){
    mainTitleColor.classList.remove(Main_outColor);  
    mainTitleColor.classList.add(Main_inColor);
        
}else{
    mainTitleColor.classList.remove(Main_inColor);
    mainTitleColor.classList.add(Main_outColor);
}
}






function changeColor(){
mainTitleColor.addEventListener("mouseover",MainTitleCange);
}
changeColor();
