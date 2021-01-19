const body = document.querySelector("body")


const img_Number = 5;



function backImgPrint(imgNumber){
    const image = new Image();
image.src = `image/${imgNumber + 1}.jpg`;
const bgImage = "bgImage";
image.classList.add('bgImage');
body.appendChild(image);


}


function ranNumber(){
    const Number = Math.floor(Math.random()*img_Number);
    return Number;
}



function printit() {
const printBgImg =  ranNumber();
backImgPrint(printBgImg);

}


printit();
