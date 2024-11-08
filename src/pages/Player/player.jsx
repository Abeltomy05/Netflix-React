import React, { useEffect, useState } from 'react'
import "./player.css"
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useNavigate, useParams } from 'react-router-dom'

const player = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const [apiData,setApiData] = useState({
        name:"",
        key:"",
        published_at:"",
        type:""
    });
     
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmY2NDE0OTBiNDc0MmM2MTcxNTljNWU0Y2NjMzIwOSIsIm5iZiI6MTcyOTk0NzYzOS4yOTc1MjIsInN1YiI6IjY3MWNlNWI4YjNkNWNiYjg0MmY0MzYyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tD1e6N5VJ5aLKk5_qbAvZlGR6mGKCn6NEjNF5VzbBgI'
        }
      };
      
      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))
        .catch(err => console.error(err));
      },[id])
      

  return (

    <>
     <div className='player'>
          <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
          <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title='Trailer' frameBorder="0" allowFullScreen></iframe>
          <div className="player-info">
            <p>{apiData.published_at.slice(0,10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
          </div>
     </div>
    </>
   
  )
}

export default player