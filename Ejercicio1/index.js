let lista = document.getElementById('list-th')

fetch('http://gutendex.com/books')
    .then(res => res.json())
    .then(data =>
        data.results.forEach(libro => {

            lista.innerHTML += `
    <div class="book read" >
<div class="cover">
 <img src="${libro.formats["image/jpeg"]}">
</div>
                <div class="description">
                    <p class="title">${libro.title}<br>
                        <span class="author">${libro.authors[0].name}</span>
                    </p>
                </div>
            </div>
    `
        })
    )