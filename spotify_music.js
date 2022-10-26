/*const music=document.querySelector('.music')
//const MUSIC=document.querySelector('music')

const musiclength = music.querySelectorAll('.MUSIC').length
console.log(musiclength)
let index=0
//music.style.top=`${(musiclength - 1)*100}vh`
//console.log(`-${(musiclength - 1)*100}`)*/
const btn = document.querySelector('.btn')
const music = new Audio('music/perfect.mp3');
let i = 0
btn.addEventListener('click', function handleClick() {
    i++
    if (i % 2 === 0) {
        btn.innerHTML = '<i class="bi-play"></i>'
        console.log(i)
        music.pause()
    } else {
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

})
rangeInput = document.getElementById('range');

container = document.getElementsByClassName('container')[0];
//let userList = document.querySelector('#users')
rangeInput.addEventListener("click", function() {

    music.volume = scale(rangeInput.value, 0, 100, 0, 1)
    console.log(music.currentTime)
});

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}





const btn1 = document.querySelector('.btn1')
const music1 = new Audio('music/love_me_like_you_do.mp3');
let i1 = 0
btn1.addEventListener('click', function handleClick() {
    i1++
    if (i1 % 2 === 0) {
        btn1.innerHTML = '<i class="bi-play"></i>'
        console.log(i1)
        music1.pause()
    } else {
        btn1.innerHTML = '<i class="bi-pause"></i>'
            //console.log(i)
            // console.log(music.currentTime)
        music1.play();
        //for (; i % 2;) {
        // console.log(music.currentTime)
        //}

        /*music.loop =true;
        music.playbackRate = 2;
        music.pause();qqazszdgfbgtyj*/
    }

})
rangeInput1 = document.getElementById('range1');

container = document.getElementsByClassName('container')[0];
//let userList = document.querySelector('#users')
rangeInput1.addEventListener("click", function() {

    music1.volume = scale1(rangeInput1.value, 0, 100, 0, 1)
    console.log(music1.currentTime)
});

function scale1(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}







const btn2 = document.querySelector('.btn2')
const music2 = new Audio('music/Let Me Love You(PaglaSongs) (1).mp3');
let i2 = 0
btn2.addEventListener('click', function handleClick() {
    i2++
    if (i2 % 2 === 0) {
        btn2.innerHTML = '<i class="bi-play"></i>'
        console.log(i2)
        music2.pause()
    } else {
        btn2.innerHTML = '<i class="bi-pause"></i>'
            //console.log(i)
            // console.log(music.currentTime)
        music2.play();
        //for (; i % 2;) {
        // console.log(music.currentTime)
        //}

        /*music.loop =true;
        music.playbackRate = 2;
        music.pause();qqazszdgfbgtyj*/
    }

})
rangeInput2 = document.getElementById('range2');

container = document.getElementsByClassName('container')[0];
//let userList = document.querySelector('#users')
rangeInput2.addEventListener("click", function() {

    music2.volume = scale2(rangeInput2.value, 0, 100, 0, 1)
    console.log(music2.currentTime)
});

function scale2(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}