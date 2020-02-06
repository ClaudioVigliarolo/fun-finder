import React from 'react';
import styled from 'styled-components'


   
const Background = styled.div`
  
    background-color:#622b6e;
  
`

function Footer() {
    return (
     
        <Background className="main-block ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
         
              <div className="copyright">
              <h4 className="header"> The best way for finding events and knowing new people</h4>
              <p>  Built by Claudio Vigliarolo<br/>
              Copyright © by Claudio Vigliarolo. The creation of this site is not for commercial reasons, but just for the sake 
              of learning and helping people in finding the activities they like most.</p>
              </div>
            </div>
          </div>
        </div>
      </Background>
    
    )
}

export default Footer;

//why this site?
//This site for created for the increasing difficulty in our globalized world

/*

        <footer className="footer">
        <div className="footer__title">
     
            <h2 style={{textAlign:'center'}}>The best way for finding events and knowing new people</h2>
          
        </div>
        <div className="row">
          <div className="col-1-of-2">
           
         
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Built by <a href="#" className="footer__link">Claudio Vigliarolo</a> <a href="#" className="footer__link"></a>.
              Copyright © by Claudio Vigliarolo. The creation of this site is not for commercial reasons, but just for the sake 
              of learning and helping people in finding the activity the like most.
            </p>
          </div>
     
      </footer>
*/