import React, { useState } from "react";
import  { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard";

//26ebb955
const API_DATA ='http://www.omdbapi.com/?apikey=26ebb955';

const movie = {
    
        "Title": "Batman Begins",
        "Year": "2005",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    
}


const App = ()=> {
    const [movies,setMovies] =useState([])
    const [searchTerm, setSearchTerm] =useState("");


    const findMovies = async (title) =>{
        const response= await fetch(`${API_DATA}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
        useEffect (() => {
            findMovies('Batman');
        },[]);
    
    return(
       <>
       <div className="app">
        <h1>MovieSpace</h1>
        <div className="search">
            <input placeholder="search for movies"
           value={searchTerm}
           onChange={(e) => {setSearchTerm(e.target.value) }}/>

           <img src={SearchIcon} alt="search" onClick={() =>findMovies(searchTerm) } />

        </div>
        {movies?.length > 0 ?(
            <div className="container">
                {movies.map((movie) =>(
                 <MovieCard movie={movie} />   
                ))}
                </div>
        ):(
            <div className="empty">
                <h2>No Movies Found</h2>
                </div>
        )}


    
       </div>
       </>
    );
}
export default App;