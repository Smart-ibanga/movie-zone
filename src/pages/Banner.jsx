import React, { useEffect, useState } from 'react'
import './banner.css'
import bgImg from '../images/bg-transformer.jpg';
import titleImg from '../images/transformer-title.png'

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
        <img src={bgImg} alt="Background-img" className="bgImg active" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="content active">
                <img src={titleImg} alt="Movie Title" className="movie-title" />
                <h4>
                  <span>Year</span>
                    <span>
                      <i>age</i>
                    </span>
                    <span>length</span>
                    <span>category</span>
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Commodi provident magni aliquid aspernatur quia modi tempora 
                  sapiente ipsa rerum! Nobis magnam deleniti fugit ratione, 
                  impedit quasi quod placeat quas? Repudiandae.
                </p>
                <div className="button">Button</div>
              </div>
                                                                                                                                                                                                                                                                   </div>
           <div className="col-lg-6 col-md-12">
              <div className="date active">
                <h2>On 15th August</h2>
              </div>
              <div className="trailer">
                <a href="#" className="playBtn">
                  <ion-icon name="play-outline"></ion-icon>
                </a>
                <p>Watch Trailer</p>
              </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner