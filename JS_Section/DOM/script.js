console.log("Połączone");

var moviesList = [
    {
        title:"In brugers",
        rating: 5,
        hasWatched: true
    },
    {
        title:"Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        title:"Mad Max Fury Road",
        rating: 5,
        hasWatched: true
    },
    {
        title:"Les Miserables",
        rating: 3.5,
        hasWatched: false
    }
]



moviesList.forEach(function(movie){
  var result = "You have ";
  if(movie.hasWatched){
      result += "watched ";
  }
  else{
      result += "not seen "
  }
  result +=movie.title;
  result += " - ";
  result += movie.rating;
  result += " star(s)";
  console.log(result);
})