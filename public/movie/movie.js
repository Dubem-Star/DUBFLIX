const body = document.body;
const movieContainer = document.getElementById("movieContainer");
const movieDiv = document.getElementById("singleDiv");
const backBtn = document.getElementById("backBtn");
const movieDetail = document.getElementById("movieDetails");
const movieImage = document.getElementById("movieImg");
const movieTitle = document.getElementById("movieTitle");
const movieDescription = document.getElementById("movieDescription");
const movieGenre = document.getElementById("movieGenre");
const movieDuration = document.getElementById("movieDuration");
const movieRating = document.getElementById("movieRating");
const movieDirector = document.getElementById("movieDirector");
const searchInput = document.querySelector(".search-input");
const nothingFound = document.getElementById("nothingFound");
const hamBurger = document.getElementById("hamBurger");
const navLinks = document.querySelector(".nav-links");
const searchIcon = document.getElementById("searchIcon");
const logout = document.getElementById("logout");
const msg = document.getElementById("msg");
const flashMsg = document.getElementById("flashMsg");
const detailsSection = document.getElementById("detailsSection");

const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description: "A mind-bending thriller by Christopher Nolan.",
    genre: "Sci-Fi",
    duration: "2h 28min",
    rating: "8.8/10",
    director: "Christopher Nolan",
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
    description:
      "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    genre: "Crime, Drama",
    duration: "2h 55min",
    rating: "9.2/10",
    director: "Francis Ford Coppola",
  },
  {
    id: 3,
    title: "Pulp Fiction",
    year: 1994,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    description:
      "The lives of two hitmen, a boxer, and others intertwine in a series of darkly comic incidents.",
    genre: "Crime, Drama",
    duration: "2h 34min",
    rating: "8.9/10",
    director: "Quentin Tarantino",
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description:
      "Batman faces his toughest challenge yet as the Joker unleashes chaos on Gotham.",
    genre: "Action, Crime, Drama",
    duration: "2h 32min",
    rating: "9.0/10",
    director: "Christopher Nolan",
  },
  {
    id: 5,
    title: "Fight Club",
    year: 1999,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    description:
      "An office worker forms an underground fight club with a soap maker, leading to unexpected consequences.",
    genre: "Drama, Thriller",
    duration: "2h 19min",
    rating: "8.8/10",
    director: "David Fincher",
  },
  {
    id: 6,
    title: "Forrest Gump",
    year: 1994,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    description:
      "The story of a man with a low IQ who influences major historical events in 20th century America.",
    genre: "Drama, Romance",
    duration: "2h 22min",
    rating: "8.8/10",
    director: "Robert Zemeckis",
  },
  {
    id: 7,
    title: "The Matrix",
    year: 1999,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    description:
      "A computer hacker learns the true nature of his reality and his role in the war against its controllers.",
    genre: "Sci-Fi, Action",
    duration: "2h 16min",
    rating: "8.7/10",
    director: "Lana & Lilly Wachowski",
  },
  {
    id: 8,
    title: "The Shawshank Redemption",
    year: 1994,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    description:
      "Two imprisoned men bond over years, finding hope and eventual redemption through acts of decency.",
    genre: "Drama",
    duration: "2h 22min",
    rating: "9.3/10",
    director: "Frank Darabont",
  },
  {
    id: 9,
    title: "Interstellar",
    year: 2014,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description:
      "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
    genre: "Sci-Fi, Adventure, Drama",
    duration: "2h 49min",
    rating: "8.6/10",
    director: "Christopher Nolan",
  },
  {
    id: 10,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    description:
      "A meek Hobbit and eight companions set out to destroy a powerful ring and save Middle-earth.",
    genre: "Fantasy, Adventure",
    duration: "2h 58min",
    rating: "8.8/10",
    director: "Peter Jackson",
  },
  {
    id: 11,
    title: "Star Wars: Episode IV – A New Hope",
    year: 1977,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    description:
      "Luke Skywalker joins forces with a Jedi Knight to save the galaxy from the Empire.",
    genre: "Sci-Fi, Adventure",
    duration: "2h 1min",
    rating: "8.6/10",
    director: "George Lucas",
  },
  {
    id: 12,
    title: "Gladiator",
    year: 2000,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    description:
      "A betrayed Roman general seeks vengeance as a gladiator against the corrupt emperor.",
    genre: "Action, Drama",
    duration: "2h 35min",
    rating: "8.5/10",
    director: "Ridley Scott",
  },
  {
    id: 13,
    title: "The Avengers",
    year: 2012,
    posterUrl: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    description:
      "Earth’s mightiest heroes unite to stop Loki and his alien army from enslaving humanity.",
    genre: "Action, Sci-Fi",
    duration: "2h 23min",
    rating: "8.0/10",
    director: "Joss Whedon",
  },
  {
    id: 14,
    title: "Titanic",
    year: 1997,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    description:
      "A young couple from different classes fall in love aboard the ill-fated Titanic ship.",
    genre: "Drama, Romance",
    duration: "3h 14min",
    rating: "7.9/10",
    director: "James Cameron",
  },
  {
    id: 15,
    title: "Jurassic Park",
    year: 1993,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/9i3plLl89DHMz7mahksDaAo7HIS.jpg",
    description:
      "Scientists clone dinosaurs to populate a theme park which quickly spirals out of control.",
    genre: "Sci-Fi, Adventure",
    duration: "2h 7min",
    rating: "8.2/10",
    director: "Steven Spielberg",
  },
  {
    id: 16,
    title: "The Lion King",
    year: 1994,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
    description:
      "A lion cub flees his kingdom only to return and claim his rightful place as king.",
    genre: "Animation, Drama",
    duration: "1h 28min",
    rating: "8.5/10",
    director: "Roger Allers & Rob Minkoff",
  },
  {
    id: 17,
    title: "Blade Runner 2049",
    year: 2017,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    description:
      "A new blade runner uncovers a secret that could plunge society into chaos.",
    genre: "Sci-Fi, Drama",
    duration: "2h 44min",
    rating: "8.0/10",
    director: "Denis Villeneuve",
  },
  {
    id: 18,
    title: "Mad Max: Fury Road",
    year: 2015,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    description:
      "In a post-apocalyptic wasteland, a drifter and a warrior rebel against a tyrant.",
    genre: "Action, Adventure",
    duration: "2h",
    rating: "8.1/10",
    director: "George Miller",
  },
  {
    id: 19,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    description:
      "Teenager Miles Morales becomes Spider-Man and meets counterparts from other universes.",
    genre: "Animation, Action",
    duration: "1h 57min",
    rating: "8.4/10",
    director: "Bob Persichetti, Peter Ramsey",
  },
  {
    id: 20,
    title: "Nope",
    year: 2022,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    description:
      "Residents of a lonely gulch in California witness a mysterious and chilling discovery.",
    genre: "Horror, Mystery, Sci-Fi",
    duration: "2h 10min",
    rating: "6.8/10",
    director: "Jordan Peele",
  },
];

if (logout) {
  logout.addEventListener("click", async (e) => {
    e.preventDefault();
    const res = await fetch("/logout", {
      method: "post",
      credentials: "include",
    });

    window.location.href = "/login";
  });
}

if (flashMsg) {
  setTimeout(() => {
    flashMsg.style.opacity = "0";
    setTimeout(() => {
      flashMsg.remove();
    }, 500);
  }, 2000);
}

if (body.id === "homePage") {
  localStorage.removeItem("selectedMovie");
  for (let movie of movies) {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img");
    movieImg.src = movie.posterUrl;

    const movieTitle = document.createElement("p");
    movieTitle.textContent = movie.title;
    movieTitle.classList.add("movie-title");

    movieCard.appendChild(movieImg);
    movieCard.appendChild(movieTitle);
    movieContainer.append(movieCard);

    movieCard.addEventListener("click", () => {
      localStorage.setItem("selectedMovie", JSON.stringify(movie));
      window.location.href = "/movieDetails";
    });
  }
}

if (body.id === "detailsPage") {
  const selectedMovie = JSON.parse(localStorage.getItem("selectedMovie"));

  if (selectedMovie) {
    movieImage.src = selectedMovie.posterUrl;
    movieYear.innerHTML = `<strong> Year: </strong> ${selectedMovie.year}`;
    movieTitle.textContent = selectedMovie.title;
    movieDescription.innerHTML = `<strong> Description: </strong> ${selectedMovie.description}`;
    movieGenre.innerHTML = `<strong> Genre: </strong> ${selectedMovie.genre}`;
    movieDuration.innerHTML = `<strong> Duration: </strong> ${selectedMovie.duration}`;
    movieRating.innerHTML = `<strong> Rating: </strong> ${selectedMovie.rating}`;
    movieDirector.innerHTML = `<strong> Director: </strong> ${selectedMovie.director}`;
  } else {
    movieImage.src = "/movie/notfound.png";
    detailsSection.innerHTML =
      "<span>No Movie Selected, Please go <a href = '/movieDashboard' class = 'back-link'> back</a>  and select a movie</span>";
  }
}

if (body.id === "homePage") {
  searchInput.addEventListener("input", () => {
    const search = searchInput.value.trim().toLowerCase();
    const movieCards = document.querySelectorAll(".movie-card");

    let anyVisible = false;
    let notfound = false;
    for (let movieCard of movieCards) {
      const singleMovie = movieCard.querySelector(".movie-title");
      const movieText = singleMovie.textContent.toLowerCase();

      if (movieText.includes(search)) {
        movieCard.style.display = "flex";
        anyVisible = true;
      } else {
        movieCard.style.display = "none";
        notfound = true;
      }
    }

    if (search !== "" && anyVisible) {
      notfound = false;
      movieContainer.classList.add("searchinggg");
    } else {
      movieContainer.classList.remove("searchinggg");
      movieContainer.style.gap = "";
      movieContainer.style.alignItems = "";
      movieContainer.style.justifyContent = "";
    }

    if (notfound) {
      nothingFound.style.display = "flex";
      movieContainer.style.alignItems = "";
      movieContainer.style.justifyContent = "";
    } else {
      nothingFound.style.display = "none";
    }
  });
}

if (hamBurger && navLinks) {
  hamBurger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

if (searchIcon && searchInput) {
  searchIcon.addEventListener("click", () => {
    searchInput.classList.add("show-input");
    searchIcon.style.display = "none";
  });
}
