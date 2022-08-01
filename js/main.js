'use strict'

function onInit(){
    getUsers()
}

function hideLogIn(name){

    var loginDisplay = document.querySelector('.log-in')
    loginDisplay.style.display = 'none'

    loginDisplay = document.querySelector('.classified')
    loginDisplay.style.display = 'block'

    loginDisplay = document.querySelector('.greet-user')
    loginDisplay.innerText = `Welcome back, ${name}`
}

function showLogIn(){
    var loginDisplay = document.querySelector('.log-in')
    loginDisplay.style.display = 'block'

    loginDisplay = document.querySelector('.classified')
    loginDisplay.style.display = 'none'

    loginDisplay = document.querySelector('.greet-user')
    loginDisplay.innerText = ''

    const elForm = document.querySelector('.form')
    elForm.reset()
}