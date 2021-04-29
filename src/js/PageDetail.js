const PageDetail = (argument) => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");

    const fetchGame = (url, argument) => {
      let finalURL = url ;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let { name, background_image, released, description, developers, tags, genres, publishers, platforms, website, rating, metacritic, stores/*, video, 4screens, sameSame, youTube */} = response;

          let articleDOM = document.querySelector(".page-detail .article");

          articleDOM.querySelector("h1.title").innerHTML = name;
          articleDOM.querySelector("p.release-date span").innerHTML = released;
          articleDOM.querySelector("p.background_image").innerHTML = `<img src="${background_image}" alt="poster" style="width: 25rem;">`;
          articleDOM.querySelector("p.description").innerHTML = description;
          articleDOM.querySelector("p.developers").innerHTML = `Developers : ${developers.map(a => " " + a.name)}`;
          articleDOM.querySelector("p.tags").innerHTML = ` Tags : ${tags.map(a => " " + a.name)}`;
          articleDOM.querySelector("p.genres").innerHTML = ` Genres : ${genres.map(a => " " + a.name)}`;
          articleDOM.querySelector("p.publishers").innerHTML = ` Publishers : ${publishers.map(a => " " + a.name)}`;
          articleDOM.querySelector("p.platforms").innerHTML = ` Platforms : ${platforms.map(a => " " + a.platform.name)}`;
          articleDOM.querySelector("p.web").innerHTML = ` Link to ${name}'s website : <a href="${website}">here</a>`;
          articleDOM.querySelector("p.rating").innerHTML = `Ratings : ${rating}`;
          articleDOM.querySelector("p.metacritic").innerHTML = `Metacritics : ${metacritic}`;
          articleDOM.querySelector("p.stores").innerHTML = ` Link(s) to buy ${name} : ${stores.map(a => " " + a.store.name + "<a href= http://" + a.store.domain + "> here</a>" )}`;

        });
    };
    
    fetchGame(`https://api.rawg.io/api/games/${cleanedArgument}?key=4213f27351ba43b8a9f008de6de62a91`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
        <div class="card text-center">
        <div class="card-header">
          <h1 class="title"></h1>
          <p class="background_image"></p>
          <p class="release-date  text-muted">Release date : <span></span></p>
          <p class="description"></p>
          <p class="developers  text-muted"></p>
          <p class="tags"></p>
          <p class="genres  text-muted"></p>
          <p class="publishers"></p>
          <p class="platforms  text-muted"></p>
          <p class="web"></p>
          <p class="rating  text-muted"></p>
          <p class="metacritic"></p>
          <p class="stores  text-muted"></p>
          </div>
          </div>

    </div>
    </section>
      `
    ;

    preparePage();
  };

  render();

  const searchGame = () => {
    document.getElementById("validate").addEventListener("click", function(e){
    e.preventDefault();
    let arg = searchBar.value;
    console.log(arg);
    pageContent.innerHTML = `
    <p> Loading... </P>
    `;
    PageDetail(arg);
  })};
  searchGame();
};

export { PageDetail };