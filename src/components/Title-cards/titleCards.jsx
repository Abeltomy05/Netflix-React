import React, { useEffect, useRef, useState } from "react";
import "./titleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import {Link} from "react-router-dom"

const titleCards = ({title, catogery}) => {

    const [apiData,setApiData]  = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmY2NDE0OTBiNDc0MmM2MTcxNTljNWU0Y2NjMzIwOSIsIm5iZiI6MTcyOTk0NzYzOS4yOTc1MjIsInN1YiI6IjY3MWNlNWI4YjNkNWNiYjg0MmY0MzYyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tD1e6N5VJ5aLKk5_qbAvZlGR6mGKCn6NEjNF5VzbBgI'
    }
  };
  
  

  const handleWheel = (e) => {
    e.preventDefault;
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${catogery ? catogery : "now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <>
      <div className="title-cards">
        <h2>{title ? title : "Popular on Netflix"}</h2>
        <div className="card-list" ref={cardsRef}>
          {apiData.map((card, index) => {
            return (
              <Link to={`/player/${card.id}`} key={index} className="card">
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                <p>{card.original_title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default titleCards;
