import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
const Form = () => {

const [moviesData,setMoviesData]=useState([]);
const [search, setSearch]=useState("code");
const [sortGoodBad,setSortGoodBad]=useState("badToGood")
  useEffect(() => {
    axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=b8bed0e227972da2924cc120b9dfa8a4&query=${search}&language=fr-FR`
        
    ).then((res)=>setMoviesData(res.data.results));
  }, [search]);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input type="text" placeholder="ENTREZ UN FILM " id="search-input" onChange={(e)=>setSearch(e.target.value)} />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad"onClick={()=>setSortGoodBad("goodToBad")}>
            Top<span>➡️</span>
          </div>
          <div className="btn-sort" id="badToGood" onClick={()=>setSortGoodBad("badToGood")}>
            Flop<span>⬅️</span>
          </div>
        </div>
      </div>
      <div className="result">
          {moviesData.slice(0,12)
          .sort((a,b)=>{
            if   (sortGoodBad==="goodToBad"){
            return b.vote_average-a.vote_average;}else if (sortGoodBad==="badToGood"){return a.vote_average-b.vote_average;}
          }).map((movie)=>
          (<Card key={movie.id} movie={movie}/>))}
      </div>
    </div>
  );
};

export default Form;
