import {useEffect, useState} from "react";
import CircularProgress from '@mui/material/CircularProgress'; 
import "./Astros.css"

function Astrocard ({name, craft}) {
  return (
    <div className= "card">
            <h3 className='astro-name'>{name}</h3>
            <h4 className="astro-craft">{craft}</h4>
          </div>
  );
}


function Astros() {
  const API_URL = "http://api.open-notify.org/astros.json";
  const [astros, setAstros] = useState(null);

  

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(API_URL);
      const res = await data.json();
      setAstros(res.people);
    };

  fetchData().catch((err) => console.error(err));  
  },  []);

  console.log(astros);

  return (
    <div className="astrocard">
      {!astros ? (
        <CircularProgress id="progress" sx={{ color: "#ffffff" }} />
      ) : (
      astros.map((astro, idx) => (<Astrocard key={idx} {...astro} />)
      ))}:
    </div>    
  );
}


export default Astros;