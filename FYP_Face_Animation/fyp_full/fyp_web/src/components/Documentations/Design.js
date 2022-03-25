import React from "react";
import Popup from "./Popup";
import { Button } from "./Button";
import { useState } from "react";

function Design() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="testProposal">
      <Button onClick={() => setButtonPopup(true)} className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>PROJECT DESIGN</Button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Link to Project Design Documentation</h3>
        <br/>
        <a href="https://drive.google.com/file/d/1ccxt-PLmmcfsXobnesRcPt2KsshpFF4y/view?usp=sharing" target="_blank" style={{ cursor: "pointer" }}>Bring me to see PDF</a>
      </Popup>
    </div>
  );
}

export default Design;
