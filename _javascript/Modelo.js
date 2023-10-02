const modelo = document.querySelector('.modelo')
const navegation = document.querySelector('.navegation')

modelo.onclick = function () {
    this.classList.toggle('active')
    navegation.classList.toggle('active')
}

