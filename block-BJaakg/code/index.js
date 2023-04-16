const container = document.querySelector(".container");

fetch("https://www.anapioficeandfire.com/api/books")
  .then((res) => res.json())
  .then((res) => {
    res.forEach((book) => {
      addBookCard(book);
    });
  });

function addBookCard(book) {
  let bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");
  bookCard.innerHTML = `
    
    <aside class="book-cover">
      <span class="publisher">${book.publisher}</span>
      <h2>${book.name}</h2>
    </aside>
    <main class="book-content">
      <section>
        <h3>${book.name}</h3>
        <p class="author">${book.authors[0]}</p>
        <p>No of Pages: ${book.numberOfPages}</p>
      </section>
      <button class="show-characters-btn">Show Characters</button>
    </main>
 
    `;

  container.append(bookCard);
}
