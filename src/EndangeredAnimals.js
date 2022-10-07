import React, { useState, useEffect } from "react";

import Demo from "./Demo";
import "./EndangeredAnimals.css";
function EndangeredAnimals() {
const [category, setCategory] = useState([]);

  useEffect(() => {

    const getcategory = async () => {

      const res = await fetch("http://localhost:8080/api/auth/animals/type/Endangered-Animal");

      const getdata = await res.json();

      setCategory(getdata);

    };

    getcategory();

   

  },[]);  

  return (

    <div>

    <React.Fragment>

      <main>

              {category.map((getcate) => (

                <Demo  getcate={getcate} />

              ))}

      </main>

    </React.Fragment>

  </div>

  );}



export default EndangeredAnimals;