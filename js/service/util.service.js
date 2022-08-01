'use strict'

function makeId(length=4){
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var txt = ''
    for(var i=0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

// w/o ms
function getTimeNow(){
    return Math.floor(Date.now()/1000)
}
