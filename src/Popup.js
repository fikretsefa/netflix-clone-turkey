import React, {useState, useEffect} from 'react'
import './Popup.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_url = "https://image.tmdb.org/t/p/original";

function Popup({visible,setVisible,movie,trailerUrl}) {


    const opts= {
        width:"100%",
        playerVars:{autoplay:1},
    }

    const isAdult = (adult) => {
        if(adult){
            return "+18"
        }else{
            return "+13"
        }
    }



    console.log(movie);
    console.log(trailerUrl);
    // const getTrailerURL = (movie) => {         
    //     console.log(movie)
    //     movieTrailer(movie?.original_title || movie?.original_name ||"")
    //     .then((url) => {
    //         //console.log(url)
    //         const urlParams = new URLSearchParams(new URL(url).search);
    //         setTrailerUrl(urlParams.get("v"));
    //         //console.log(urlParams.get("v"))            
    //         setVideoFound(true);
    //         return urlParams.get("v");
    //     }).catch((error) => {
    //         console.log(error)
    //         setVideoFound(false);
    //     })
    
    // }

    return (
        <div>
        {visible && 
        <div className="popup_outside" onClick={setVisible}>
            <div className="popup">
                {/* <img
                 className="popup_image"
                src="https://image.tmdb.org/t/p/original/Wu8kh7oyvaIfkNyMJyJHCamh5L.jpg"/> */}
                {/* <YouTube className="popup_image" videoId={"9c52Z5sMuTQ"} opts={opts}/> */}
                {trailerUrl ? 
                <YouTube className="popup_image" videoId={trailerUrl} opts={opts}/>
                :
                <img className="popup_image"  src={`${base_url}${movie?.backdrop_path}`} />
                }
                
                <div className="popup_icons">
                <div className="popup_icon"><ion-icon name="play"></ion-icon></div>
                <div className="popup_icon"><ion-icon name="add"></ion-icon></div>
                <div className="popup_icon"><ion-icon name="thumbs-up-outline"></ion-icon></div>
                <div className="popup_icon"><ion-icon name="thumbs-down-outline"></ion-icon></div>
                <div className="popup_icon exit" onClick={setVisible}><ion-icon name="close-outline"></ion-icon></div>
                </div>

                <div className="popup_row">                    
                <div className="popup_age"><h2>{isAdult(movie?.adult)}</h2></div>
                <h2 className="popup_vote">{movie.vote_average} TMDB</h2>
                </div>

                <h2 className="popup_name">{movie?.name || movie?.title}</h2>

            </div>
            </div>
        }
        </div>
    )
}

export default Popup
