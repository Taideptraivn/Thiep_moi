const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "010101AI-DS-2026";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix(){

    ctx.fillStyle='rgba(10,25,47,0.05)';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle='#00d4ff';
    ctx.font=fontSize+'px monospace';

    for(let i=0;i<drops.length;i++){

        const text=
            chars[Math.floor(Math.random()*chars.length)];

        ctx.fillText(
            text,
            i*fontSize,
            drops[i]*fontSize
        );

        if(
            drops[i]*fontSize>canvas.height
            &&
            Math.random()>0.975
        ){
            drops[i]=0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix,35);