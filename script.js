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
    alert('Entry added correctly to Library');
}