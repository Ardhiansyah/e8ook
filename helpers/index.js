'use strict';

function formatDate(arr) {
	let month = '';
	switch(arr[1]) {
		case "Jan": month = '01'; break;
		case "Feb": month = '02'; break;
		case "Mar": month = '03'; break;
		case "Apr": month = '04'; break;
		case "Mei": month = '05'; break;
		case "Jun": month = '06'; break;
		case "Jul": month = '07'; break;
		case "Aug": month = '08'; break;
		case "Sep": month = '09'; break;
		case "Oct": month = '10'; break;
		case "Nov": month = '11'; break;
		case "Dec": month = '12'; break;
	}
	return `${arr[3]}-${month}-${arr[2]}`
}

function dateNow() {
	let date = new Date();
	let splitDate = date.toString().split(' ');
	
	return formatDate(splitDate);
}

function returnDate(readingDays) {
	console.log(readingDays);
	let date = new Date();
	date.setDate(date.getDate() + Number(readingDays));
	let splitDate = date.toString().split(' ');
	// console.log(date)
	return formatDate(splitDate);
}

function sessionChecker(req, res, next) {
    if (!req.session.isLogin) {
        res.redirect('/login');
    } else {
        next();
    }
};

function formatSinopsis(string) {
    let maxWord = 20;

    string = string.split(' ').splice(0, maxWord)
    string.push('...')

    return string.join(' ')
}

module.exports = {
	dateNow,
	sessionChecker,
	returnDate,
  formatSinopsis
}