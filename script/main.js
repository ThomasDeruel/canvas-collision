const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.setAttribute('width',window.innerWidth)
canvas.setAttribute('height',window.innerHeight);
canvas.setAttribute('style', "background:black");

window.addEventListener('resize', function(){
    canvas.setAttribute('width',window.innerWidth)
    canvas.setAttribute('height',window.innerHeight) 
})


    

let dx = 12;
let dy = 8;
let x = Math.round(Math.random()*(window.innerWidth-50-dx));
let y = Math.round(Math.random()*(window.innerHeight-50-dy));

action()
function action(){

    requestAnimationFrame(action);

    c.clearRect(0,0,window.innerWidth,window.innerHeight);

    //text
    c.beginPath();
    c.font = "120px sans-serif";
    c.textAlign='center';
    c.fillStyle="red";
    c.fillText('collision', window.innerWidth/2,window.innerHeight/2);
    c.closePath();

    //square
    c.beginPath();
    c.fillStyle="white";
    c.fillRect(x,y,50,50);
    c.fill();
    c.closePath();

    if(x+50 > window.innerWidth || x  < 0 ){
        dx = -dx;
    }
    if(y+50 > window.innerHeight || y  < 0 ){
        dy = -dy;
    }
    x += dx;
    y += dy;
}
