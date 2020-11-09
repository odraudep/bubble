let hamb = document.querySelector('#hamb')
let hambc = document.querySelector('#hambc')
let container = document.querySelector('.container')
let menu = document.querySelector('.menu')


hamb.addEventListener('click', () => {
  menu.classList.add('open')
})

hambc.addEventListener('click', () => {
  menu.classList.remove('open')
})

container.addEventListener('click', () => {
  menu.classList.remove('open')
})
