const catImage = document.getElementById("catPhoto");
const getCatPhotoBtn = document.getElementById("getCatPhoto");

function generateCatPhoto() {
  let xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://api.thecatapi.com/v1/images/search?limit=1&size=full"
  );

  xhr.onload = function () {
    let data = JSON.parse(xhr.response);
    console.log(data[0].url);
    catImage.src = data[0].url;
  };

  xhr.send();
}

getCatPhotoBtn.addEventListener("click", generateCatPhoto);

generateCatPhoto();
