//  Constructor

function Movie(title, genre, description, year, seen, id) {
    this.title = title;
    this.genre = genre;
    this.description = description;
    this.year = year;
    this.seen = seen;
    this.id = id;
  }

// Entries

let filmLibrary = [
    {title: "The Shining", genre: "Horror", description: "Based on based on Stephen King's 1977 novel of the same name; an aspiring writer and recovering alcoholic accepts a position as the off-season caretaker of the isolated historic Overlook Hotel",
year: "1980", seen: "true", id: 1},
    {title: "Big Trouble in Little China", genre: "Fantasy, Action, Comedy", description: "Truck driver Jack Burton helps his friend Wang Chi rescue Wang's green-eyed fiancée from bandits in San Francisco's Chinatown",
year: "1986", seen: "true", id: 2},
    {title: "The Evil Dead", genre: "Horror", description: "Five college students vacationing in an isolated cabin find an audio tape that, when played, releases a legion of demons and spirits",
year: "1981", seen: "true", id: 3},
    {title: "Demolition Man", genre: "Science Fiction, Action", description: "A risk-taking police officer cryogenically frozen is awaken to help capture a extremely dangerous crime lord",
year: "1993", seen: "true", id: 4},
    {title: "Dredd", genre: "Science Fiction, Action", description: "Judge Dredd, a law enforcer, and his apprentice partner, Judge Anderson, are forced to bring order to a 200-storey high-rise block of apartments and deal with its resident drug lord",
year: "2012", seen: "true", id: 5},
    {title: "The Running Man", genre: "Action", description: "An man wrongly accused of a crime must participate in a television show where convicted criminal must escape death at the hands of professional killers",
year: "1987", seen: "true", id: 6},
    {title: "Blade Runner", genre: "Science Fiction", description: "When a fugitive group of syntetic humans, or 'replicants', escapes to Earth, burnt-out cop Rick Deckard reluctantly agrees to hunt them down",
year: "1982", seen: "false", id: 7},
    {title: "Tron", genre: "Science Fiction, Action, Adventure", description: "A computer programmer and video game developer is transported inside the software world, where he interacts with programs in his attempt to escape",
year: "1982", seen: "false", id: 8},
    {title: "Jaws", genre: "Thriller", description: "A police chief, a marine biologist and a professional shark hunter persue a man-eating great white shark that attack beachgoers at a summer resort town",
year: "1975", seen: "false", id: 9}]

const seenBoard = document.getElementById('seen-board');
const unseenBoard = document.getElementById('unseen-board');

function addMovie(object) {
    filmLibrary.push(object);
}

// Create cards

let addMovie = function() {
    for (let i = 0; i < Object.keys(filmLibrary).length; i++) {
    
        // Create card
        let card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('id', `${filmLibrary[i]['id']}`)
    
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
        if (filmLibrary[i]['seen'] === 'true') {
            card.classList.add('seen');
    
            seenBtn.src = 'static/unseen.png';
            seenBtn.classList.add('btn', 'seen-btn', 'seen');
            movieButtons.appendChild(seenBtn);
            
            seenBoard.appendChild(card);
        }
        else if (filmLibrary[i]['seen'] === 'false') {
            card.classList.add('unseen');
            
            seenBtn.src = 'static/seen.png';
            seenBtn.classList.add('btn', 'seen-btn', 'unseen');
            movieButtons.appendChild(seenBtn);
            
            unseenBoard.appendChild(card);
        }
    };
}


function addMovieToList(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let movieEntries = Object.values(Object.fromEntries(formData));
    let values = filmLibrary.map(object => object['id']);
    movieEntries[5] = Number(values.slice(-1)) + 1;
    
    let newMovie = new Movie();
    Object.keys(newMovie).forEach((element, index) => {
        newMovie[element] = movieEntries[index]});
    
    addMovie(newMovie);
    alert('Movie entry added correctly!')

    // Create card
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('id', `${newMovie['id']}`)

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

    let editBtn = document.createElement('img');
    editBtn.classList.add('btn', 'edit');
    editBtn.src = 'static/edit.png';
    let deleteBtn = document.createElement('img');
    deleteBtn.classList.add('btn', 'delete');
    deleteBtn.src = 'static/delete.png';

    // Add content
    movieTitle.textContent = `${newMovie['title']}`;
    movieGenre.textContent = `${newMovie['genre']}`;
    movieYear.textContent = `${newMovie['year']}`;
    movieDesc.textContent = `${newMovie['description']}`;

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
    if (newMovie['seen'] === 'true') {
        card.classList.add('seen');

        seenBtn.src = 'static/unseen.png';
        seenBtn.classList.add('btn', 'seen-btn', 'seen');
        movieButtons.appendChild(seenBtn);
        
        seenBoard.appendChild(card);
    }
    else if (newMovie['seen'] === 'false') {
        card.classList.add('unseen');
        
        seenBtn.src = 'static/seen.png';
        seenBtn.classList.add('btn', 'seen-btn', 'unseen');
        movieButtons.appendChild(seenBtn);
        
        unseenBoard.appendChild(card);
    }
    modal.style.display = 'none';

    seenButtons = document.querySelectorAll('.seen-btn');
    editButtons = document.querySelectorAll('.btn.edit');
    deleteButtons = document.querySelectorAll('.btn.delete');
    cards = document.querySelectorAll('.card');
};


// Event Listeners

let seenButtons = document.querySelectorAll('.seen-btn');
let editButtons = document.querySelectorAll('.btn.edit');
let deleteButtons = document.querySelectorAll('.btn.delete');
let cards = document.querySelectorAll('.card');
let saveMovie = document.getElementById('form');

let toggleSeen = function(element, class0, class1) {
    element.classList.toggle(class0);
    element.classList.toggle(class1);
}

seenButtons.forEach((button) => {
    button.addEventListener('click', function() {
        let id = Number(this.closest('.card').id);
        console.log(id)
        let movie = document.getElementById(id);
        let entry = Object.keys(filmLibrary).find(key => filmLibrary[key].id === id);
        if (filmLibrary[entry]['seen'] === 'true') {
            filmLibrary[entry]['seen'] = 'false';
            toggleSeen(movie, 'seen', 'unseen');
            button.src = 'static/seen.png';
            unseenBoard.appendChild(movie);
        }
        else if (filmLibrary[entry]['seen'] === 'false') {
            filmLibrary[entry]['seen'] = 'true';
            toggleSeen(movie, 'seen', 'unseen');
            button.src = 'static/unseen.png';
            seenBoard.appendChild(movie);
        };
    });
})

deleteButtons.forEach((button) => {
    button.addEventListener('click', function() {
        let id = Number(this.closest('.card').id);
        let movie = document.getElementById(id);
        let entry = Object.keys(filmLibrary).find(key => filmLibrary[key].id === id);
        let board = this.closest('.cards');
        filmLibrary.splice(entry, 1);
        board.removeChild(movie);
    })
})

saveMovie.addEventListener('submit', addMovieToList);

editButtons.forEach((button) => {
    button.addEventListener('click', function() {
        let id = Number(this.closest('.card').id);
        let entry = Object.keys(filmLibrary).find(key => filmLibrary[key].id === id);
        let editMovie = filmLibrary[entry];

        modal.style.display = 'block';

        // Get content
        document.getElementById('entry-title').value = `${editMovie.title}`;
        document.getElementById('entry-genre').value = `${editMovie.genre}`;
        document.getElementById('entry-year').value = `${editMovie.year}`;
        document.getElementById('entry-description').value = `${editMovie.description}`;
        if (editMovie.seen === 'true') {
            document.getElementById('seen-radio').checked = true;
        }
        else if (editMovie.seen === 'false') {
            document.getElementById('unseen-radio').checked = true;
        }

        // Save new values
        saveMovie.addEventListener('click', function() {
            editMovie.title = document.getElementById('entry-title').value;
            editMovie.genre = document.getElementById('entry-genre').value;
            editMovie.year = document.getElementById('entry-year').value;
            editMovie.description = document.getElementById('entry-description').value;

            if (document.getElementById('seen-radio').checked) {
                editMovie.seen === 'true';
            }
            else if (document.getElementById('unseen-radio').checked) {
                editMovie.seen === 'false';
            }
        });
    });
})

// Define modal window

const modal = document.getElementById('movieForm');
const openBtn = document.getElementById('open-form');
const closeBtn = document.getElementById('close-btn');

openBtn.onclick = function() {
    modal.style.display = 'block';
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}
