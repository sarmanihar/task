/*const music=document.querySelector('.music')
//const MUSIC=document.querySelector('music')

const musiclength = music.querySelectorAll('.MUSIC').length
console.log(musiclength)
let index=0
//music.style.top=`${(musiclength - 1)*100}vh`
//console.log(`-${(musiclength - 1)*100}`)*/
const btn = document.querySelector('.btn')
const music = new Audio('music/perfect.mp3');
let i = -1
btn.addEventListener('click', function handleClick() {
    i++
    if (i % 2 === 0) {
        btn.innerHTML = '<i class="bi-play"></i>'
        console.log(i)
        music.pause()
    }
    else {
        btn.innerHTML = '<i class="bi-pause"></i>'
        //console.log(i)
        // console.log(music.currentTime)
        music.play();
        //for (; i % 2;) {
       // console.log(music.currentTime)
        //}

        /*music.loop =true;
        music.playbackRate = 2;
        music.pause();qqazszdgfbgtyj*/
    }

}
)
rangeInput = document.getElementById('range');

container = document.getElementsByClassName('container')[0];
let userList = document.querySelector('#users')
rangeInput.addEventListener("click", function () {
    
    music.volume=scale(rangeInput.value,0,100,0,1)
    console.log(music.currentTime)
});
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
