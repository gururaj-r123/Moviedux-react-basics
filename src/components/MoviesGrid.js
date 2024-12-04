import React,{useState,useEffect} from 'react';



import '../styles.css';
import MovieCard from './MovieCard';

//When the state value changes, the UI re-renders
//props are used to send data,event handlers and functios to components
//you can pass props to nested components "prop drilling"
export default function MoviesGrid({movies,watchlist,toggleWatchlist})
{
    
    const [searchTerm ,setSearchTerm]=useState("")

    const [genre,setGenre]=useState("All Genres")
    const [rating,setRating]=useState("All")

 

    const handleSearch=(e)=>{
        const value=e.target.value
    setSearchTerm(value)

    }

    const handleGenreChange=(e)=>{
        const value=e.target.value
    setGenre(value)

    

    }

    const handleRatingChange=(e)=>{
        const value=e.target.value
    setRating(value)

    }

    const checkGenre=(movie,genre)=>{
        return genre==="All Genres" || genre.toLowerCase()===movie.genre.toLowerCase();
}
 
const checkRating=(movie,rating)=>{
    
    switch(rating)
    {
        case "Good": 
        if (movie.rating>=8)
        return true;
        break
        
        case "Ok":
            if (movie.rating>=5 && movie.rating <8)
            return true;
            break
        case "Bad":
            if (movie.rating<5)
            return true;
            break
        default : return true;
    }
    return false;
    
}
const checkSearchTerm=(movie,searchTerm)=>
{
   return  movie.title.toLowerCase().includes(searchTerm.toLowerCase())
}
    const filteredMovies=movies.filter((movie)=>{
       return  checkGenre(movie,genre) && checkSearchTerm(movie,searchTerm) && checkRating(movie,rating)
    })
     
    return (
        <div>
            <input
            className='search-input'
        type="text"
        placeholder="Search Movies..."
        value={searchTerm}
        onChange={handleSearch}
            />

            <div className='filter-bar'>
                <div className="filter-slot">
                    <label >Genre</label>
                    <select className="filter-dropdown" value={genre} onChange={handleGenreChange}>
                        <option>All Genres</option>
                        <option>Action</option>
                            <option>Drama</option>
                            <option>Fantasy</option>
                            <option>Horror</option>
                    </select>

                </div>
                <div className="filter-slot">
                    <label >Rating</label>
                    <select className="filter-dropdown" value={rating} onChange={handleRatingChange}>
                    <option>All</option>
                        <option>Good</option>
                            <option>Ok</option>
                            <option>Bad </option>
                            </select>
                            
                    </div>
            </div>
        <div className='movies-grid'>
            {
            filteredMovies.map(movie=>(
                <MovieCard movie={movie} key={movie.id} toggleWatchlist={toggleWatchlist} isWatchlisted={watchlist.includes(movie.id)}></MovieCard>
            ))
            }
            
            </div>
            </div>
    )
}