import React from 'react';
import { Jumbotron } from 'reactstrap';

function Header(props){
    return(
        <Jumbotron>
          <div className="container">
              <div className="row row-header">
                  <div className="col-12 col-sm-6">
                      <h1>Severly Assignment</h1>
                      <p>We take great pride on our servers prices!</p>
                  </div>
              </div>
          </div>
      </Jumbotron>
    )
}

export default Header;