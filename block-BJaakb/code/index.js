const categoryInput = document.getElementById("categoryInput");
const quoteContainer = document.getElementById("quote");

const { client_API } = config;

function fetch(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("X-Api-Key", client_API);

    xhr.onload = function () {
      resolve(JSON.parse(xhr.response));
    };

    xhr.onerror = function () {
      reject("Something went wrong!");
    };

    xhr.send();
  });
}

function displayQuote(quote) {
  if (quote.length == 0) {
    alert("No quotes found for this category. Kindly write a new one.");
    return;
  }
  quoteContainer.innerHTML = `<p>${quote[0].quote}</p> <p> - ${quote[0].author}</p>`;
}

function getQuote(category) {
  let quote = fetch(
    `https://api.api-ninjas.com/v1/quotes?category=${category}`
  );

  quote
    .then((response) => {
      displayQuote(response);
    })
    .catch((error) => {
      alert(error);
    });
}

categoryInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    let category = event.target.value;
    getQuote(category);
    event.target.value = "";
  }
});

getQuote("happiness");
