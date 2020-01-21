function convertDate(d) {
    console.log(d);

    console.log(
        // [d.origin, d.destination],
        // d.date.match(/[0-20-9:]{5}/g)[0].split(':')),
        [Math.floor(d.duration / 60), d.duration % 60]
    )
}

export default convertDate