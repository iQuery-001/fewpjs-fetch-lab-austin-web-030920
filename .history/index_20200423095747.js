function fetchBooks() {
  let books = fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => console.log(json));
  return books;
}

function renderBooks(json) {
  var main = document.querySelector('main')
  json.forEach(book => {
    var h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
