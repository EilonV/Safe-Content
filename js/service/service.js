'use strict'

var gUsers = []

_createUsers()
console.log('Users:', gUsers)
getUsersToShow()

function getUsers() {
    return gUsers
}

function _createUsers() {

    var users = loadFromStorage('usersDB')
    if (!users || !users.length) {
        users = [
            _createUser('Eilon', 123123, true),
            _createUser('kingEilon', 145145, false),
            _createUser('2Eilon4U', 'asdf23', false)
        ]
    }

    gUsers = users

    _saveUsers()
}

function _createUser(uName, pass, admin) {
    const user = {
        id: makeId(),
        username: uName,
        password: pass,
        lastLoginTime: 0,
        isAdmin: admin
    }
    return user
}

function _saveUsers() {
    saveToStorage('usersDB', gUsers)
}

function onLogIn(ev) {
    ev.preventDefault()

    const elUsername = document.querySelector('[name=user-name]')
    console.log('Username entered:', elUsername.value)
    const elPass = document.querySelector('[name=user-pass]')
    console.log('Paswsword entered: ', elPass.value)

    doLogIn(elUsername.value, elPass.value)
}

function doLogIn(username, password) {
    var user2Find = gUsers.find(user => user.username == username)
    console.log(user2Find)

    if (password == user2Find.password) {
        if (user2Find.isAdmin) {
            window.location = 'admin.html'
            user2Find.lastLoginTime = Date.now()
            _saveUsers()
        }
        else {
            console.log('Successfully logged in!')
            hideLogIn(user2Find.username)
            user2Find.lastLoginTime = Date.now()
            console.log(gUsers)
            _saveUsers()
        }
    }
    else
        console.log('Incorrect password!')
}

function getUsersToShow() {
    console.table(gUsers)
}

function doLogout() {
    clearStorage('')
    showLogIn()
}