import React from "react";
import "./App.css";
function App() {
  const defaultText = document.getElementById("default");
  const debounceText = document.getElementById("debounce");
  const throttleText = document.getElementById("throttle");

  const debounce = (cb, delay = 1000) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };
  const updateDebounceText = debounce((text) => {
    debounceText.textContent = text;
  });
  const throttle = (cb, delay = 1000) => {
    let flag = true;
    return (...args) => {
      console.log("inside throlle");
      if (flag) {
        cb(...args);
        flag = false;
      }
      setTimeout(()=>{
         flag=true
      },delay)
    };
  };

  const updateThrottleText = throttle((text) => {
    throttleText.textContent = text;
  });
  const handleChange = (event) => {
    defaultText.textContent = event.target.value;
    updateDebounceText(event.target.value);
    updateThrottleText(event.target.value);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <div>
        <b>default:</b>
        <span id="default"></span>
      </div>
      <div>
        <b>debounce:</b>
        <span id="debounce"></span>
      </div>
      <div>
        <b>throttle:</b>
        <span id="throttle"></span>
      </div>
    </div>
  );
}

export default App;
