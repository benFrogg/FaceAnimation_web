import React from "react";
import Popup from "./Popup";
import { Button } from "./Button";
import { useState } from "react";

function Proposal() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="testProposal">
      <Button onClick={() => setButtonPopup(true)} className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>PROJECT PROPOSAL</Button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Link to Project Proposal Documentation</h3>
        <br/>
        <a href="https://drive.google.com/file/d/1K1J17BuAT-SnZa_nSlHPGDkXoyTBx3cW/view?usp=sharing" target="_blank" style={{ cursor: "pointer" }}>Bring me to see PDF</a>
      </Popup>
    </div>
  );
}

export default Proposal;
