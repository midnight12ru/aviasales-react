async function getData(url) {
    let res = await fetch(url);

    let json;

    if (res.ok){
        json = await res.json()
    } else {
        console.log('err');
        await getData(url)
    }

    return json
}

export default getData