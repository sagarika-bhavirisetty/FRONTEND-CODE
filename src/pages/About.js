import React from 'react';
// import sparrow from './sparrow.jpeg';
  
const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh'

      }}
    >
      <div>      {/* <img src="sparrow" ></img> */}
      {/* <h1>INDIAN ENDANGERED AND EXTINCT SPECIES </h1> */}
      </div>
      
      
      <ul>
        <h1>ENDANGERED:</h1>
        <li>An animal that is endangered is close to extinction — meaning there aren't very many of that type of animal left in the world.</li>
        <li>An endangered species is a type of organism that is threatened by extinction.</li>
         <li>  Species become endangered for two main reasons: loss of habitat and loss of genetic variation.</li>
         <li>Habitat loss is the primary cause of higher extinction rates</li>
         <li>  Other causes include habitat changes, over-exploitation of wildlife for commercial purposes, the introduction of harmful nonnative species, pollution, and the spread of diseases.</li>
        <h1>EXTINCT:</h1>
        <li>Extinction signifies the permanent loss of an organism from the planet</li>
        <li>Extinction is a natural phenomenon</li>
        <li>  After all, more than 90 percent of all organisms that have ever lived on Earth aren’t alive today.</li>
        <li>But humans have made it worse, accelerating natural extinction rates due to our role in habitat loss, climate change, invasive species, disease, overfishing, and hunting.
        </li>
      </ul>
      
      
    </div>
  );
};
  
export default About;