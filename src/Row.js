import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios'
import Youtube from 'react-youtube'
import movieTrailer from "movie-trailer"

function Row({title, fetchUrl,isLargeRow=false}) {
    const [movies, setMovies] = useState([]);
    const base_url="https://image.tmdb.org/t/p/original/"
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
   const handleClick=(movie)=>{
     
        if (trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie?.name || movie?.title ||"")
            .then((url)=>{ //console.log(movieTrailer(movie?.name || movie?.title ||""))
           // movieTrailer(movie?.name || movie?.title ||"")
                const urlPrams= new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlPrams.get("v")) ;
                console.log(trailerUrl);
            })
            .catch((error) => console.log(error));       
        }

    }
    
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },}
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters" >
            {movies.map(movie=>(
                ((isLargeRow && movie.poster_path)|| (!isLargeRow && movie.backdrop_path)) && (
                
                <img className={`row_poster ${isLargeRow &&'row_posterLarge'}`}
                key={movie.id}
                onClick={()=> handleClick(movie)}
                src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} alt={movie.name}/>
                
                ))
            )}
            </div>
           {trailerUrl &&<Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row
