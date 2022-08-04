const textarea = document.querySelector('.a')
const contacts = document.querySelector('.contacts')
const list1 = document.querySelector('.list1')
let userList = document.querySelector('#users')
textarea.focus()
const arr = ['chintu','bharnav','dipak','bharati','amal','kulen','ambulance','parag','aparna','sumalata','topon','aparajita',
'suman','top services','partha','sumar']
let cnt = 0
let j = 0
let arr_a = [0], cnt1 = -1
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
})
let temp = 0
function createTags(input) {
    contacts.innerHTML = '<h1>Searching</h1'
    cnt++
    cnt1 = -1
    if (input.length > temp) {
        if (cnt === 1) {
            for (let i = 0; i < arr.length; i++)
                if (input[j] === arr[i][j]) {
                    cnt1++
                    arr_a[cnt1] = arr[i]
                } 
            const li = document.createElement('li')
            li.appendChild(document.createTextNode(`${(arr_a.sort())}`))
            userList.appendChild(li)
        }
        else {
            for (let i = 0; i < arr_a.length; i++) {
                let cnt2 = 0
                for (j = 0; j < input.length; j++) {
                    if (input[j] === arr_a[i][j]) {
                        cnt2++
                    }
                    if (cnt2 === input.length) {
                        cnt1++
                        arr_a[cnt1] = arr_a[i]
                    }
                    if (j === input.length - 1 && cnt2 !== input.length)
                        arr_a.splice(i, 1)
                }
            }
            let menu = document.getElementById('users')
            let li = document.createElement('li')
            li.textContent = ''
            li.appendChild(document.createTextNode(`${arr_a.sort()}`))
            menu.replaceChild(li, menu.firstElementChild)
        }
    }
    else {
        if(input.length===0)
        document.location.reload()
        else{
        let arr_a = [0]
        for (let i = 0; i < arr.length; i++) {
            let cnt2 = 0
            for (j = 0; j < input.length; j++) {
                if (input[j] === arr[i][j]) {
                    cnt2++
                }
                if (cnt2 === input.length) {
                    cnt1++
                    arr_a[cnt1] = arr[i]
                }
            }
        }
        let menu = document.getElementById('users')
        let li = document.createElement('li')
        li.textContent = ''
        li.appendChild(document.createTextNode(`${arr_a.sort()}`))
        menu.replaceChild(li, menu.firstElementChild)}
    }
    temp = input.length
}