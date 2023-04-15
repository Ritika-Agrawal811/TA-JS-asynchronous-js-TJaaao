const newsContainer = document.querySelector(".news-container");
const newsCategories = document.querySelector(".news-categories");

function displayNews(item) {
  let newsCard = document.createElement("div");
  newsCard.classList.add("news-card");
  newsCard.innerHTML = `
     <div class="news-image">
        <figure>
            <img src="${item.imageUrl}" alt="${item.title}"/>
        </figure>
     </div>

     <div class="news-content">
        <div>
            <span class="category">${item.newsSite}</span> 
            <time>${item.publishedAt}</time>
        </div>
        <div class="news-info">
            <h2>${item.title}</h2>
            <p>${item.summary}</p>
        </div>
        <a href="${item.url}">
            <button class="read-more-btn">
                Read More
            </button>
        </a>
     </div>
    `;

  newsContainer.append(newsCard);
}

function getCategory(event) {
  let category = event.target.value;

  fetchData((item) => {
    if (item.newsSite === category) {
      displayNews(item);
    }
  });
}

function fetchData(callback) {
  let news = fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=30")
    .then((response) => response.json())
    .then((res) => {
      newsContainer.innerHTML = "";
      res.forEach((item) => {
        callback(item);
      });
    });
}

fetchData(displayNews);

newsCategories.addEventListener("change", getCategory);
