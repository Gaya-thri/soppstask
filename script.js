var Movie = /** @class */ (function () {
    function Movie(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating = 'PG';
    }
    Movie.prototype.getmovie = function () {
        var obj1 = {
            title: this.title,
            studio: this.studio,
            rating: this.rating
        };
        return obj1;
    };
    return Movie;
}());
var obj = new Movie("Bahubali", "Ramanaidu", "PG13");
console.log(obj.getmovie());
