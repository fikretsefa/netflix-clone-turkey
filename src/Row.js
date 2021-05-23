import React, {useState, useEffect} from 'react'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import {isMobile} from 'react-device-detect';
import axios from './axios';
import './Row.css';
import Popup from './Popup';


const base_url = "https://image.tmdb.org/t/p/original";

function Row({title,fetchUrl,isLargeRow,isNetflix,isTopRow}) {
    
    const [movies,setMovies] = useState([]);    
    const [trailerUrl,setTrailerUrl] = useState("");
    const [visible,setVisible] = useState(false);
    const [movie,setMovie] = useState([]);    

    useEffect(() => {
       async function fetchData(){
           const request = await axios.get(fetchUrl);
           setMovies(request.data.results);
           return request;
       }
       fetchData(fetchUrl);
    }, [])

   // console.table(movies);
   //console.log(movies)

   const opts= {
       height:"390",
       width:"95%",
       playerVars:{autoplay:1,},
   }

   const handleClick = (movie) =>{
    if(trailerUrl){
        setTrailerUrl("");
    }else{
        movieTrailer(movie?.original_title || movie?.original_name ||"")
        .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
        }).catch((error) => {console.log(error)})
    }
    setMovie(movie);
    setVisible(true);
   }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map((movie,index) => (
                    
                    <div 
                    className="row_div"
                    onClick={() => handleClick(movie)}
                    >                        
                    {isNetflix &&  
                    <img 
                    key={movie.key}
                    className="netflix_icon"
                    src="favicon.ico" 
                    alt="Netflix"/>}
                    {isTopRow && <h1 className={`row_number ${isMobile && "row_numberMobile"}`}>{index+1}</h1>}
                    <img 
                    key={movie.key}
                    className={`row_poster ${isLargeRow && "row_posterLarge"} ${isTopRow && "row_posterTop"} ${index > 8 && isTopRow && "row_posterTopNumber"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}/>                    
                    {isTopRow &&  
                    <img 
                    key={movie.key}
                    className="top_icon"
                    src="top10.png" 
                    alt="Top 10"/>}
                   
                    </div>
                    
                    // <img 
                    // key={movie.key}
                    // className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    // src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    // alt={movie.name}/>
                ))} 
            </div>
            
            <Popup visible={visible} movie={movie} trailerUrl={trailerUrl} setVisible={() => setVisible(false)}/>
           {/* {trailerUrl && <YouTube className="youtube" videoId={trailerUrl} opts={opts}/>}  */}
        </div>
    )
}

export default Row;
