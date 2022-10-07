import React, { Component } from 'react';
import EndangeredAnimals from "./EndangeredAnimals";

import ExtinctAnimals from "./ExtinctAnimals";
import ExtinctBirds from "./ExtinctBirds";
import EndangeredBirds from "./EndangeredBirds";
import "./Demo.css";





const Demo =({getcate}) =>{

    const {id,url,info,type}=getcate;

        return (

            <div>

            <div className="Demo">

                <img class="abc" src={url} alt="Demo"/>

                <p className="head_desc-type"><small>{type}</small></p>
                <div className="Demo-head-desc">

                    <p className="head_desc-name">{EndangeredAnimals}</p>
                    <p className="head_desc-name">{EndangeredBirds}</p>
                    <p className="head_desc-name">{ExtinctBirds}</p>
                    <p className="head_desc-name">{ExtinctAnimals}</p>

                    


                    <p className="head_desc-info"><small>{info}</small></p>


                
</div>
            </div>

         </div>   

        );

}



export default Demo;