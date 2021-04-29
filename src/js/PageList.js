const PageList = (argument) => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";

    const fetchList = (url, argument) => {
      let finalURL = url;
      if (argument) {
        finalURL = `https://api.rawg.io/api/games?/page_size=9&search=${argument}&key=4213f27351ba43b8a9f008de6de62a91`;
        console.log(finalURL);
      }

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach((article) => {
            articles += `
                  <div class="card" style="width: 18rem;">
                    <img src="${article.background_image}" class="card-img-top" alt=".poster..">
                    <div class="card-body">
                      <h5 class="card-title">${article.name}</h5>
                      <p class="card-text">Release date : ${article.released}</p>
                      <a href="#pagedetail/${article.id}" class="btn btn-dark">More</a>
                    </div>
                  </div>
                `;
          });
          document.querySelector(".page-list .articles").innerHTML = articles;
        });
    };
    fetchList(`https://api.rawg.io/api/games?key=4213f27351ba43b8a9f008de6de62a91`);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">...loading</div>
      </section>
    `;

    preparePage();
  };

  render();

  const searchGame = () => {
    document.getElementById("validate").addEventListener("click", function(e){
      e.preventDefault();
      let arg = searchBar.value;
      console.log(arg);
      pageContent.innerHTML = `
      <p> MES COUILLES </P>
      `;
      PageList(arg);
    })};
    searchGame();

};



export { PageList };
