let numero = document.getElementById('input')

function pedir() {
    fetch(`https://xkcd.com/${numero.value}/info.0.json`, {
        headers: {
            "Accept": "*/*",
            "User-Agent": 'Thunder Client (https://www.thunderclient.com)'
        },
        mode: "no-cors"
    })
        .then((res) => res.json())
        .then((datos) => console.log(datos))
}



