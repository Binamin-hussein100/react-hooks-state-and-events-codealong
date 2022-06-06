import React,{useState} from "react";


function Toggle() {
  // declaring new state variable and function
  let [power,switchPower] = useState(false)

  function switcher(){
    // switchPower(power = "ON")
    // // switchPower(power = "OFF")
    switchPower((power) => !power )

  }

  return (
    <button style={{background : "red"}} onClick={switcher}>{power ? "ON" : "OFF"}</button>
  )
}

export default Toggle;
