import React from 'react'
import './Popup.css';

function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)} style={{width: "70px", height: "70px"}}>Close</button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup