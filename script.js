let filmLibrary = [];
const seenBoard = document.getElementById('seen-board');
const unseenBoard = document.getElementById('unseen-board');

function addMovie(object) {
  filmLibrary.push(object);
}

//  Constructor

function Movie(title, genre, description, year, seen) {
    this.title = title;
    this.genre = genre;
    this.description = description;
    this.year = year;
    this.seen = seen;
  }

// Entries

const movie1 = new Movie(
    "The Shining",
    "Psycological Horror",
    "Based on based on Stephen King's 1977 novel of the same name; an aspiring writer and recovering alcoholic accepts a position as the off-season caretaker of the isolated historic Overlook Hotel",
    "1980",
    true
);

addMovie(movie1);

const movie2 = new Movie(
    "Big Trouble in Little China",
    "Fantasy, Action, Comedy",
    "Truck driver Jack Burton helps his friend Wang Chi rescue Wang's green-eyed fiancée from bandits in San Francisco's Chinatown",
    "1986",
    true
);

addMovie(movie2);

const movie3 = new Movie(
    "The Evil Dead",
    "Supernatural Horror",
    "Five college students vacationing in an isolated cabin find an audio tape that, when played, releases a legion of demons and spirits",
    "1981",
    true
);

addMovie(movie3);

const movie4 = new Movie(
    "Demolition Man",
    "Science Fiction, Action",
    "A risk-taking police officer cryogenically frozen is awaken to help capture a extremely dangerous crime lord",
    "1993",
    true
);

addMovie(movie4);

const movie5 = new Movie(
    "Dredd",
    "Science Fiction, Action",
    "Judge Dredd, a law enforcer, and his apprentice partner, Judge Anderson, are forced to bring order to a 200-storey high-rise block of apartments and deal with its resident drug lord",
    "2012",
    true
);

addMovie(movie5);

const movie6 = new Movie(
    "The Running Man",
    "Action",
    "An man wrongly accused of a crime must participate in a television show where convicted criminal must escape death at the hands of professional killers",
    "1987",
    true
);

addMovie(movie6);
  
// To be seen

const movie7 = new Movie(
    "Blade Runner",
    "Science Fiction",
    "When a fugitive group of syntetic humans, or 'replicants', escapes to Earth, burnt-out cop Rick Deckard reluctantly agrees to hunt them down",
    "1982",
    false
);

addMovie(movie7);

const movie8 = new Movie(
    "Tron",
    "Science Fiction, Action, Adventure",
    "A computer programmer and video game developer is transported inside the software world, where he interacts with programs in his attempt to escape",
    "1982",
    false
);

addMovie(movie8);

const movie9 = new Movie(
    "Jaws",
    "Thriller",
    "A police chief, a marine biologist and a professional shark hunter persue a man-eating great white shark that attack beachgoers at a summer resort town",
    "1975",
    false
);

addMovie(movie9);

// Create cards

for (let i = 0; i < Object.keys(filmLibrary).length; i++) {
    
    // Create card
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('id', `${i}`);

    // Create elements
    let movieTitle = document.createElement('div');
    movieTitle.setAttribute('class', 'movie-title');
    let movieData = document.createElement('div');
    movieData.setAttribute('class', 'movie-data');
    let movieGenre = document.createElement('div');
    movieGenre.setAttribute('class', 'movie-genre');
    let movieYear = document.createElement('div');
    movieYear.setAttribute('class', 'movie-year');
    let movieDesc = document.createElement('div');
    movieDesc.setAttribute('class', 'movie-desc');
    let movieButtons = document.createElement('div');
    movieButtons.setAttribute('class', 'movie-buttons');

    let seenBtn = document.createElement('img');
    // seenBtn.classList.add('btn', 'seen');
    // seenBtn.src = 'static/seen.png';
    // let unseenBtn = document.createElement('img');
    // unseenBtn.classList.add('btn', 'unseen');
    // unseenBtn.src = 'static/unseen.png';
    let editBtn = document.createElement('img');
    editBtn.classList.add('btn', 'edit');
    editBtn.src = 'static/edit.png';
    let deleteBtn = document.createElement('img');
    deleteBtn.classList.add('btn', 'delete');
    deleteBtn.src = 'static/delete.png';

    // Add content
    movieTitle.textContent = `${filmLibrary[i]['title']}`;
    movieGenre.textContent = `${filmLibrary[i]['genre']}`;
    movieYear.textContent = `${filmLibrary[i]['year']}`;
    movieDesc.textContent = `${filmLibrary[i]['description']}`;

    // Append containers
    card.appendChild(movieTitle);
    card.appendChild(movieData);
    card.appendChild(movieDesc);
    card.appendChild(movieButtons);

    movieData.appendChild(movieGenre);
    movieData.appendChild(movieYear);

    movieButtons.appendChild(editBtn);
    movieButtons.appendChild(deleteBtn);

    // Append to board
    if (filmLibrary[i]['seen'] === true) {
        card.classList.add('seen');

        seenBtn.src = 'static/seen.png';
        seenBtn.classList.add('btn', 'seen');
        movieButtons.appendChild(seenBtn);
        
        seenBoard.appendChild(card);
    }
    else if (filmLibrary[i]['seen'] === false) {
        card.classList.add('unseen');
        
        seenBtn.src = 'static/unseen.png';
        seenBtn.classList.add('btn', 'unseen');
        movieButtons.appendChild(seenBtn);
        
        unseenBoard.appendChild(card);
    }
};

// Event Listeners

const seenButtons = document.querySelectorAll('.btn.seen');
const unseenButtons = document.querySelectorAll('.btn.unseen');
const editButtons = document.querySelectorAll('.btn.edit');
const deleteButtons = document.querySelectorAll('.btn.delete');

let toggleSeen = function(element, class0, class1) {
    element.classList.toggle(class0);
    element.classList.toggle(class1);
}

seenButtons.forEach((button) => {
    button.addEventListener('click', function() {
        let movie = document.getElementById(this.closest('.card').id);
        toggleSeen(movie, 'seen', 'unseen');
    })
})

unseenButtons.forEach((button) => {
    button.addEventListener('click', function() {
        let movie = document.getElementById(this.closest('.card').id);
        toggleSeen(movie, 'seen', 'unseen');
    })
})