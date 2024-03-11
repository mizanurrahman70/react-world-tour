import { useEffect } from "react";
import { useState } from "react";
import Countyy from "./country/Countyy";


const Country = () => {
    const [countys,setCountrys]=useState([])
    const [visitedCounty,setVisitedCountry]=useState([])

    const handleVisitedCountry=country=>{
        console.log(country)
        console.log('already added your sceleted country')
        const newvisitedc=[...visitedCounty,country]
        setVisitedCountry(newvisitedc)
    }


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then (data =>setCountrys(data))
    },[])
    return (
        <div>
            <h1> Total Country : {countys.length}</h1>
            <div>
               <h2>I visited Country {visitedCounty.length}</h2>
               <ul>
                {
                    visitedCounty.map((country,l)=><li key={l}>{country.name.common}</li>)
                }
               </ul>
             </div>
             <div>
             {
                    visitedCounty.map((country,l)=><p key={l}><img src={country.flags.png} alt="" /></p>)
                }
             </div>
          <div className="gap">
         {
            countys.map(data => <Countyy key={data.ccs3} Countyy={data} handleVisitedCountry={handleVisitedCountry}></Countyy>)
         }
          </div>
        </div>
    );
};

export default Country;