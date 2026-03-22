const favoriteMovies = ['Shrek', 'Shrek 2', 'Shrek 3', 'Shrek: Forever After', 'Kung Fu Panda'];

console.log(favoriteMovies)

favoriteMovies[1] = 'Devil Wears Prada';
favoriteMovies[4] = 'Bridesmaids';

console.log(favoriteMovies)

favoriteMovies.unshift('Inside Out');
favoriteMovies.pop();

console.log(favoriteMovies)

//[favoriteMovies[0], favoriteMovies[3]] = [favoriteMovies[3], favoriteMovies[0]];
let temp = favoriteMovies[3];
favoriteMovies[3] = favoriteMovies [0];
favoriteMovies[0] = temp;

console.log(favoriteMovies);