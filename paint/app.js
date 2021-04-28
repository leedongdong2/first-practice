const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange")
//캔버스는 css캔버스와 픽셀을 다룰수 있는 js캔버스 사이즈가 2개로 만들어진다
//그러므로 내가 원하는 지점에 그림을 딱 그릴려면
//js에서 사이즈를 지정해주어야함
canvas.width = 500;
canvas.height = 500;
ctx.strokeStyle= "#2c2c2c";

ctx.lineWidth = 2.5;
let painting = false;


function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMousemove(ev){
    //clientX,Y는 윈도우 전체의 범위 내에서  좌표값을 나타내는 거고
    //offsetx,y는 이벤트범위내에서의 좌표값을 나타낸다.
    const x= ev.offsetX;
    const y = ev.offsetY;

     if(!painting){
         ctx.beginPath();//선을생성
         ctx.moveTo(x,y);//선을 옮긴다 
         //내가 움직일떄마다 ... 같이 선이 옮겨다니다가
         //클릭을하게되면 페인팅이 true가 되어
     }else{
         //클릭된곳의 선의 좌표부터 선이 lineto로 시작된다
         ctx.lineTo(x,y);//선의시작좌표부터 선을 계속 이어줌
         ctx.stroke();//누르고 움직일떄만 선에 스타일이 적용됨
     }
}

function onMouseDown(ev){
    painting = true;
}

function changeColor(ev){
                  //타겟은 이벤트가 발생한 타겟
                
    const color = ev.target.style.backgroundColor;
   console.log(color);
   ctx.strokeStyle= color;
}



if(canvas){                //마우스가 움직일때
    canvas.addEventListener("mousemove",onMousemove);
                          //마우스가 다운중일떄 클릭됫을때
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
}
     //배열처리가 된 클라스들을 한번에 이벤트 처리한다
Array.from(colors).forEach(colors =>colors.addEventListener("click",changeColor))
console.log(Array.from(colors))

if(range){
    
}