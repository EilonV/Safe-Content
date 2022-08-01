'use strict'
var gSortBy = 'TEXT'

function redirect2Login() {
    window.location = 'index.html'
}

function setSort(sortBy) {
    gSortBy = sortBy
}

function sortUsers() {
    console.log(gSortBy)
    if (gSortBy === 'TEXT') {
        const users = gUsers.sort((a, b) => a.username.localeCompare(b.username))
        return users
    }
    if (gSortBy === 'LASTLOGIN') {
        const users = gUsers.sort((a, b) => (a.lastLoginTime - b.lastLoginTime))
        return users
    }
    renderTable()
}