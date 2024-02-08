let randomCaracter = Math.floor(Math.random() * 500 + 1)
//console.log(randomCaracter)

let lista = document.getElementById('lista')


fetch(`https://api.disneyapi.dev/characters/${randomCaracter}`)
  .then(res => res.json())
  .then(data => {
    console.log(data.data)
    if (!data.data._id) return alert('No existe el personaje')

    lista.innerHTML += `
  <div>
   <img src="${data.data.imageUrl}" alt="">
      <h2><p id="nombre">${data.data.name}</p></h2>
     <p id="id">ID: ${data.data._id}</p>
     <p>Películas donde sale este personaje: ${data.data.films}</p>
  </div>
  `
  }
  )



