import React from 'react'
import './MovieContent.css';
import titleImg from '../images/transformer-title.png'

const MovieContent = () => {
  return (
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
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Commodi provident magni aliquid aspernatur quia modi tempora 
              sapiente ipsa rerum! Nobis magnam deleniti fugit ratione, 
              impedit quasi quod placeat quas? Repudiandae.
              </p>
          <div className="button">Button</div>
       </div>
  )
}

export default MovieContent
