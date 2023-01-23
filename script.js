let filmLibrary = [];

function Movie(title, genre, description, director, year) {
  this.title = title;
  this.genre = genre;
  this.description = description;
  this.director = director;
  this.year = year;
}

function addMovie(object) {
  filmLibrary.push(object);
  alert("Entry added correctly to Library");
}

// Entries

const movie1 = new Movie(
  "The Shining",
  "Psycological Horror",
  "Based on based on Stephen King's 1977 novel of the same name; an aspiring writer and recovering alcoholic accepts a position as the off-season caretaker of the isolated historic Overlook Hotel",
  "Stanley Kubrick",
  "1980"
);

addMovie(movie1);

const movie2 = new Movie(
  "Big Trouble in Little China",
  "Fantasy, Action, Comedy",
  "Truck driver Jack Burton helps his friend Wang Chi rescue Wang's green-eyed fiancée from bandits in San Francisco's Chinatown",
  "John Carpenter",
  "1986"
);

addMovie(movie2);

const movie3 = new Movie(
    "The Evil Dead",
    "Supernatural Horror",
    "Five college students vacationing in an isolated cabin find an audio tape that, when played, releases a legion of demons and spirits",
    "Sam Raimi",
    "1981"
  );
  
addMovie(movie3);

const movie4 = new Movie(
    "Demolition Man",
    "Science Fiction, Action",
    "A risk-taking police officer cryogenically frozen is awaken to help capture a extremely dangerous crime lord",
    "Marco Brambilla",
    "1993"
);

addMovie(movie4);

const movie5 = new Movie(
    "Dredd",
    "Science Fiction, Action",
    "Judge Dredd, a law enforcer, and his apprentice partner, Judge Anderson, are forced to bring order to a 200-storey high-rise block of apartments and deal with its resident drug lord",
    "Pete Travis",
    "2012"
);

addMovie(movie5);

const movie6 = new Movie(
    "The Running Man",
    "Action",
    "An man wrongly accused of a crime must participate in a television show where convicted criminal must escape death at the hands of professional killers",
    "Paul Michael Glaser",
    "1987"
);

addMovie(movie6);