import React from 'react'
import '../styles.css';
import MovieCard from './MovieCard';




export const Watchlist = ({movies,watchlist,toggleWatchlist}) => {
  return (<>
      <h1 className="title">Your WatchList</h1>
    <div className='watchlist'>
        {
     movies.map((movie)=>{
         if(watchlist.includes(movie.id))
         return <MovieCard movie={movie} isWatchlisted={true} toggleWatchlist={toggleWatchlist}/>
     })}
     </div>
     </>
  )
}
