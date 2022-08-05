function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let ab=document.querySelector('#ab')
rangeInput = document.getElementById('range');

let cnt = 0
let cnt1 = [0]
container = document.getElementsByClassName('container')[0];
let userList = document.querySelector('#users')
rangeInput.addEventListener("click", function () {
    let menu = document.getElementById('users')
    let li = document.createElement('li')
    li.textContent = ''
    li.appendChild(document.createTextNode(`${rangeInput.value}`))
    menu.replaceChild(li, menu.firstElementChild)

});

let password = [0]
const switch1 = document.querySelector('.switch1')
switch1.addEventListener('click', (e) => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet1 = alpha.map((x) => String.fromCharCode(x));
    password = alphabet1
    console.log(password)
    cnt1[cnt] = password.length
})
const switch2 = document.querySelector('.switch2')
switch2.addEventListener('click', (e) => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 97);
    const alphabet2 = alpha.map((x) => String.fromCharCode(x));
    password = password.concat(alphabet2)
    console.log(password)
    cnt++
    cnt1[cnt] = password.length
})
const switch3 = document.querySelector('.switch3')
switch3.addEventListener('click', (e) => {
    const alpha = Array.from(Array(10)).map((e, i) => i + 48);
    const alphabet3 = alpha.map((x) => String.fromCharCode(x));
    password = password.concat(alphabet3)
    console.log(password)
    cnt++
    cnt1[cnt] = password.length
})
const switch4 = document.querySelector('.switch4')
switch4.addEventListener('click', (e) => {
    const alpha = Array.from(Array(15)).map((e, i) => i + 33);
    const alphabet4 = alpha.map((x) => String.fromCharCode(x));
    password = password.concat(alphabet4)
    console.log(password)
    console.log(password[getRandomInt(1, password.length)])
    cnt++
    cnt1[cnt] = password.length
    console.log(cnt1)
})
const btn = document.querySelector('.btn')
btn.addEventListener('click', (e) => {
   //ab.removeChild()
  // ab.replaceWith('hi')
   
    let cnt2 = 0, cnt3 = 0
    for (let i = 0; i < rangeInput.value; i++) {
        cnt2 = getRandomInt(0, cnt1.length - 1)
        if (cnt2 !== 0) {
            cnt3 = getRandomInt(cnt1[cnt2 - 1], cnt1[cnt2])
            //check the undefined ness
            //also check is the limit ok[]
            //console.log(password[cnt3])
            //ab.replace(`${password[cnt3]}`)
            ab.append(`${password[cnt3]}`)
        }
        else {
            cnt3 = getRandomInt(0, cnt1[cnt2])
           // console.log(password[cnt3])
           ab.append(`${password[cnt3]}`)
           //ab.replace(`${password[cnt3]}`)
        }
    }
    
})
//li.appendChild(document.createTextNode(`${(arr_a.sort()).join('')}`))
