 let movies = [
     {  
       name:"Avengrs Endgame",
       poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNaWy37YeXoPFtUKNs96Is26MOeWCCdbv5mNWKXuBj-5C91C7qMshTefDHMWpRSCn35Sk&usqp=CAU",
       rating:8.8
    },
   
    {
        name:"Jocker",
       poster : "https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500",
       rating:9.1
    },
    {
        name:"Spider Man",
        poster : "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg",
        rating:9.5
    },
    {
        name:"Vikranth Rona",
        poster :"https://assetscdn1.paytm.com/images/cinema/Vikrant-Rona1--fd2be8c0-db2c-11ec-a298-e50df7f56a2b.jpg",
        rating:9.8
    },
    {
        name:"Javaan",
        poster :"https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/0/m/w/medium-jawan-movie-poster-srk-poster-300-gsm-12x18-unframed-j-1-original-imagtern4egzhyym.jpeg?q=90",
        rating:8.8 
    },
    {
        name:"Lord War",
        poster :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU_wxZiWl-QfmE01TfFA0QNbsOeywva6aI1A&usqp=CAU",
        rating:7.8  
    },
    {
        name:"Oppenheimer",
        poster :"https://www.tallengestore.com/cdn/shop/products/Oppenheimer-CillianMurphy-ChristopherNolan-HollywoodMoviePoster_1_0d1586b1-e2a3-48ea-84a0-fd76268635f4.jpg?v=1647424462",
        rating:9.2 
    },
    {
        name:"Jailer",
        poster :"https://i.pinimg.com/originals/49/34/6c/49346c240d7f3698da3c898ac2cd32aa.jpg",
        rating:9
    },
    {
        name:"Charlie 777",
        poster :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLFwV7OgkQ5bN3T7kUFWWu73igjfZAsdnJI3pmcTUCtPe1Z86ieTnVVB3mIGwtF8zInEQ&usqp=CAU",
        rating: 9.7,
    },
    {
        name:"Ghost",
        poster :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_RtVg0iBhTmNy9mvhwzi28ooHMUJ3cay8RA&usqp=CAU",
        rating: 10, 
    },
    {
        name:"Leo",
        poster :"https://m.media-amazon.com/images/M/MV5BYTAzYzVlYmItMWI1Yi00ZGRjLTkwYWUtYWM3ZDIwOGFiODk4XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg",
        rating: 7.8, 
    }

 ];


function searchMovie()
{
  let movieName =    document.getElementById("search").value;


  if(movieName!=="")
  {
       let result =  movies.filter(function(movie)
            {
                 return movie.name.toUpperCase().includes(movieName.toUpperCase())
            })

            displayMovies(result);
  } 
  else
  {
    displayMovies(movies);
  }
//    movies.filter(function(movie)
//    {
      
//    });  // to search movie

};

function displayMovies(data)
{
     
    document.getElementById("movies").innerHTML = "";

  let htmlString =``;

  for(let i=0; i<data.length; i++)
  {

      htmlString = htmlString+`
  <div class="movie">
  <div class="overlay">

      <div class="video">
      </div>
           
        <div class="deatails">

           <h1>${data[i].name}</h1>
           <h2> IMDB:${data[i].rating}</h2>
           <p>dr.Shivarajkumar  .Gangstar  inspiration. pavan </p>

        </div>


  </div>
  <img class="poster" src="${data[i].poster}" alt="">
</div>
  ` 
  };


 document.getElementById("movies").innerHTML= htmlString;
};
displayMovies(movies);



// let movie = document.createElement("div");
//    movie.classList.add("movie")


//    let overlay = document.createElement("div");
//    overlay.classList.add("overlay");

//   movie.appendChild(overlay)

//    console.log(movie);





 
