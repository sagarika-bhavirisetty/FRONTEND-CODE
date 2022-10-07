import React from "react";

import "./Footer.css";



function Footer() {

  return (

    <div className="main-footer">

      <div className="container">

        <div className="row">

          {/* Column1 */}

          <div className="col">


            <h3 className="list-unstyled">

              <li>91+9124509750</li>

              <li>BANGOLRE, INDIA</li>


            </h3>

          </div>  

        </div>

        <hr />

        <div className="row">

          <p className="col-sm">

            &copy;{new Date().getFullYear()} SAVE ANIMALS AND BIRDS | All rights reserved |

            Terms Of Service | Privacy

          </p>

        </div>

      </div>

    </div>

  );

}



export default Footer;