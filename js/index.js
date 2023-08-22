let links = document.querySelectorAll(".nav-link");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    let linkCat = e.target.innerHTML;
    getNews(`${linkCat}`);
  });
}

var finallynews = [];

async function getNews(spacificCat = "general") {
  var news = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${spacificCat}&apiKey=beac07a459ef412284498cf5be72c514`
  );
  finallynews = (await news.json()).articles;
  displayData();
}

getNews(`general`);

function displayData() {
  var cartona = ``;
  for (var i = 0; i < finallynews.length; i++) {
    cartona += `
          <div class="col-md-4 mt-5">
          <img src="${
            finallynews[i].urlToImage == null
              ? `images/default.jpg`
              : `${finallynews[i].urlToImage}`
          }" class="w-100 h-50">
          <h1 mb-2>${
            finallynews[i].title == null
              ? "person"
              : `${finallynews[i].title}`.slice(0, 50)
          } </h1>
          <p>${
            finallynews[i].description == null
              ? "that what i need"
              : `${finallynews[i].description}`.slice(0, 100)
          } </p>
      </div>
      `;
  }
  document.getElementById("post").innerHTML = cartona;
}

    
if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}

