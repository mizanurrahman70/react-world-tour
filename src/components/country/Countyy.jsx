import { useState } from "react";

const Countyy = ({Countyy,handleVisitedCountry}) => {
    const {flags,name,cca3}=Countyy
    const [visited,setVisited]=useState(false)
    const handleVisited=()=>{
        setVisited(!visited)
    }
    return (
        <div className={`box ${visited && "visited"}`}>
            <img src={flags.png} alt="" />
            <h1>{name.common}</h1>
            <p>Code : {cca3}</p>
            <button onClick={handleVisited}>{visited ? "Visited ": 'Going'}</button>
            {visited? 'i visited This Country':'I want to visit'}
            <br />
            <button onClick={()=>handleVisitedCountry(Countyy)}> Mark Visited</button>
        </div>
    );
};

export default Countyy;