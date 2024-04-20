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
        <img src="" alt="Background-img" className="bgImg" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="content"></div>
            </div>
           <div className="col-lg-6 col-md-12">

           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner