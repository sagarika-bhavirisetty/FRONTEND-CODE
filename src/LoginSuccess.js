
import React,{ Component }  from 'react'
import { useNavigate } from 'react-router-dom';
import "./LoginSuccess.css";

export default function LoginSuccess() {
    let navigate=useNavigate();
    
        return (
            <div>
                
                <center>
                <button class="testing" onClick={()=>{navigate("/animals")}}>ANIMALS</button>
                  <button class="testing" onClick={()=>{navigate("/birds")}}>BIRDS</button>
                  </center>
                  
                <center>
                    <h1>Welcome, You Are Successfully Logged In ! ! </h1>
                    {/* <img src="https://us.123rf.com/450wm/maxborovkov/maxborovkov1809/maxborovkov180900067/110330061-autumn-welcome-sign-with-colorful-maple-leaves-vector-background-.jpg?ver=6" alt='welcome' /> */
                    <img src="https://3.bp.blogspot.com/-nlV-lrReT-Q/UZDwOUnTMKI/AAAAAAAAJho/3MtHh5WsJaI/s640/welcomebird.png" alt='welcome'/>}
                </center>
                
            </div>
        )
}