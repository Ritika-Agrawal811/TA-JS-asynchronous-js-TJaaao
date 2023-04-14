const imagesContainer = document.querySelector(".images-container");
const inputTitle = document.getElementById("searchTitle");

const { client_id } = config;

function createImageUI(imageData) {
  imagesContainer.innerHTML = "";
  for (let item of imageData) {
    console.log(item);
    let figure = document.createElement("figure");
    figure.innerHTML = `<img src=${item.urls.small}/>`;

    imagesContainer.append(figure);
  }
}

function searchImages(title) {
  let xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    `https://api.unsplash.com/search/photos/?client_id=${client_id}&query=${title}`
  );

  xhr.onload = function () {
    let imageData = JSON.parse(xhr.response);
    imageData = imageData.results;

    createImageUI(imageData);
  };

  xhr.send();
}

inputTitle.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    let title = event.target.value;

    searchImages(title);

    event.target.value = "";
  }
});
