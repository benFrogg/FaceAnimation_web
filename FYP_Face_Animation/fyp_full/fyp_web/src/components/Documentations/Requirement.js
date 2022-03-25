import React from "react";
import Popup from "./Popup";
import { Button } from "./Button";
import { useState } from "react";

function Requirement() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="testProposal">
      <Button onClick={() => setButtonPopup(true)} className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>PROJECT REQUIREMENT</Button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Link to Project Requirement Documentation</h3>
        <br/>
        <a href="https://drive.google.com/file/d/15cc2qWF0mQb1ZorAkpRV0are0nXwP3_4/view?usp=sharing" target="_blank" style={{ cursor: "pointer" }}>Bring me to see PDF</a>
      </Popup>
    </div>
  );
}

export default Requirement;
