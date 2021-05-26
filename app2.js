let container2 = document.querySelector('.container-two')
let container3 = document.querySelector('.container-three')
let checkIcon = document.getElementById('check-icon')
let xIcon = document.getElementById('x-icon')
let i = 0

function typeNote () {
    if (container3.style.display == 'none') {
        container3.style.display = 'block'
    } else {
        container3.style.display = 'none'
    }
}
xIcon.addEventListener('click', function () {
    typeNote ()
})




function createNote () {
    let noteText = document.getElementById('note-text').value
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    h1.innerHTML = noteText
    h1.setAttribute('style',
    "word-break: break-all; width: 250px; height: 250px; font-size: 26px; padding: 25px; display: flex; justify-content: flex-center; flex-wrap: wrap; margin-top: 10px; overflow: hidden;  box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75)")
    h1.style.margin = margin()
    h1.style.transform = rotate()
    h1.style.backgroundColor = color()
    div.appendChild(h1)
    container2.insertAdjacentElement('beforeend', div)
    div.addEventListener('mouseenter', function () {
        div.style.transform = 'scale(1.1)'
    })
    div.addEventListener('mouseleave', function () {
        div.style.transform = 'scale(1)'
    })
    div.addEventListener('dblclick', function () {
        div.remove()
    })
}
checkIcon.addEventListener('click', function () {
    createNote ()
})

function margin() {
    let random_margin = ["5px", "10px", "15px"]
    return random_margin[Math.floor(Math.random() * random_margin.length)] 
}

function rotate() {
    let random_rotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)"]
    return random_rotate[Math.floor(Math.random() * random_rotate.length)] 


}
function color() {
    let random_color = ["#c2ff3d", "#ff3de8", "3dc2ff", "#04e022", "#bc83e6", "#ebb328"]
    if(i > random_color.length - 1) {
        i = 0
    }
    return random_color[i++]
}