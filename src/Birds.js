import React, { Component } from 'react';
import "./Animals";
import { useNavigate } from 'react-router-dom';


function Birds(){
    let navigate=useNavigate();
   
        return (
            <div>
                <center>
                <h1 class>       BIRDS PAGE</h1>
                <button class="testone" onClick={(()=>{navigate("/extinctbirds") })}> EXTINCT BIRDS</button>
                <button class="test" onClick={()=>{navigate("/endangeredbirds")}}>ENDANGERED BIRDS</button>
                
                </center>
                <center>
                <img class="a" src="https://picfiles.alphacoders.com/293/thumb-1920-293225.jpg" />
                </center>
                
            </div>
        );
    }


export default Birds;