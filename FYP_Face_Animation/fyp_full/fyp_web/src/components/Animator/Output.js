import React, { useState, useEffect } from 'react'

function Output() {
  const [ outputImg, setOutputImg ] = useState([{}])

  const fetchImg = async () => {
    const res = await fetch()
  }

  return (
    <div className="output-area">
      <div style={{border: "3px solid black", height:"300px", width:"250px", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <p className="outputBox">Output area</p>
      </div>
    </div>
  )
}

export default Output