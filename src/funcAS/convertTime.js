function convertTime(d) {
    console.log(d.match(/[0-20-9:]{5}/g)[0].split(':'))
    return[
        d.match(/[0-20-9:]{5}/g)[0].split(':')
    ]
}