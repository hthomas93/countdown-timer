import React from 'react';
import Countdown from "./components/Countdown";
import Datefield from "./components/Datefield";
// import Namefield from "./components/Namefield";
import Startbtn from "./components/Startbtn";

function App() {
  return (
    <div>
      <header>
        <h1>Countdown Timer</h1>
      </header>
      <Countdown></Countdown>
      <Datefield></Datefield>
      {/* <Namefield></Namefield> */}
      <Startbtn></Startbtn>
    </div>
  );
}

export default App;
