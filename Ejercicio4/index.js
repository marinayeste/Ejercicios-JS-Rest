let salida = document.getElementById('salida')

fetch('https://rickandmortyapi.com/api/location')
    .then((res) => res.json())
    .then((datos) => {
        let salida = ""
        datos.results.forEach(planeta => {
            salida += `<option value="${planeta.id}">${planeta.name}</option>`
        });

        document.getElementById('planetas').innerHTML = salida
    })

function pedirPersonajes(event) {
    console.log(event)
    fetch(`https://rickandmortyapi.com/api/location/${event.target.value}`)
        .then((res) => res.json())
        .then((datos) => {
            let salida = ""
            Promise.all(datos.residents.map((url) => fetch(url)))
                .then((res2) => Promise.all(res2.map((personaje) => personaje.json())))
                .then((datos2) => {
                    datos2.forEach((personajeFinal) => {
                        salida += `
                            <div class="card">
                                <img src="${personajeFinal.image}" alt="${personajeFinal.name}" style="max-width:300px">
                                <div class="container">
                                    <h4><b>${personajeFinal.name}</b></h4>
                                    <p>${personajeFinal.status}</p>
                                </div>
                            </div>`
                    })
                    document.getElementById('salida').innerHTML = salida

                })
        })
}