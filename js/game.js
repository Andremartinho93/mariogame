const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOver = document.querySelector('.over');

const jump = () => {

    mario.classList.add('jump')

    setTimeout(()=>{

        mario.classList.remove('jump');

    }, 500)
}

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');


    if(pipePosition <= 150 && pipePosition > 50 && marioPosition < 75) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "imgs/game-over.png";
        mario.style.width = '60px';
        mario.style.left = '90px';
        
        gameOver.style.display = 'block';



    } 


} , 10)



document.addEventListener('keydown', jump);
document.addEventListener('keyup', function(e){
  if(e.keyCode == 13)
    window.location.reload();
})

