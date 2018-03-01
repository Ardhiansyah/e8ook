'use strict'

function formatSinopsis(string) {
    let maxWord = 20;

    string = string.split(' ').splice(0, maxWord)
    string.push('...')

    return string.join(' ')
}

// console.log(formatSinopsis('apakadaskdnaksjbdkjasbdjkabsjkdbaskjdbkjasbdkjabsjkdbakjsbdjkasbdjkbasjkdbas'));

module.exports = {
    formatSinopsis:formatSinopsis
}