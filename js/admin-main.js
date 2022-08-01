'use strict'
renderTable()

function renderTable() {
    gUsers = sortUsers()
    var strHTML =`<tr>
    <th>Username</th>
    <th>Password</th>
    <th>Last Login Time</th>
    <th>Is an admin?</th>
    </tr>`
    gUsers.forEach(property => {
        strHTML+='<tr>'
        strHTML += `<td>${property.username}</td>
        <td>${property.password}</td>
        <td>${property.lastLoginTime}</td>
        <td>${property.isAdmin}</td>`
        strHTML += '</tr>'
    })
    var elInject = document.querySelector('table')
    elInject.innerHTML = strHTML
}

function onSetSort(elSelVal){
    gSortBy = elSelVal.value
}