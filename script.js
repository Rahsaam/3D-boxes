const boxesContainer = document.querySelector('#boxes')
const btn = document.querySelector('#btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

let createBoxes = () => {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div')
            box.classList.add('box')
            boxesContainer.appendChild(box)
        }
    }
}

createBoxes()