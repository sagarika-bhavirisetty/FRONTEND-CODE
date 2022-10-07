import React, { Component } from 'react';
import "./Animals.css";
import "./LoginSuccess.css"
import { useNavigate } from 'react-router-dom';

function Animals(){
    let navigate=useNavigate();
        return (
            <div>
                <center>
                <h1 class>     ANIMALS PAGE</h1>
                </center>
                
                <button  class="test" onClick={()=>{navigate("/endangeredanimals")}}> ENDANGERED ANIMALS</button>
                <button  class="test" onClick={()=>{navigate("/extinctanimals")}}> EXTINCT ANIMALS</button>
                <center>
                    
    
                    <img class="a" src="https://th.bing.com/th/id/OIP.Lntu_gX1jR9iXfGlem1MdAHaG8?pid=ImgDet&w=800&h=750&rs=1" alt='welcome'/>
                </center>
            </div>
        );
    }


export default Animals;