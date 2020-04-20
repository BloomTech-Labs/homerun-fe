import React from 'react';

import { button, Icon, Header, input, Modal } from 'semantic-ui-react';



const PinNumber  = () => { 

  return(
    <Modal trigger={
          <button className="header-btns">
            <Icon size="big" aria-hidden="true" className="map pin"/>
          </button>
        }>   
          <div className="container-contact100">
                      <div className="wrap-container">
                      <span className="contact100-form-symbol">
                           <Icon size="huge" className="map pin"/>
                      </span>
  {/* <Modal.Header>Enter Pin</Modal.Header> */}
  <div className="form-title">
                  Enter Pin
              </div>
    <Modal.Content image>
      <input 
      className="wrap-input" 
      placeholder= 'Pin' 
      type='password'/>
    </Modal.Content>
    <div className="container-contact100-form-btn">
        <button className="submit"> Submit </button>
                  </div>
  
  </div>
  </div>
  </Modal>
  )

}

export default PinNumber;



