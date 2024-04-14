import React, { useEffect, useState } from 'react'
import './banner.css'

const Banner = () => {
    const [movies, setMovies] = useState ([]);

        const fetchData = () => {

            fetch('http://localhost:3000/data/movieData.json')
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(e => console.log(e.message));
        };

        useEffect ( () =>{
            fetchData();
        }, []);
    
  return (
    <div className="banner">
        <div className="movie">
            
        </div>
    </div>
  )
}

export default Banner