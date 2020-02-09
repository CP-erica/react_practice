import React from 'react';
import ClickCounter from './components/ClickCounter'
import IncreamentCount from './components/IncreamentCount'
import HoverCounter from './components/HoverCounter'
function App() {
  return (
    <div className="App">
    <IncreamentCount render={(count,increamentCount)=>(
      <ClickCounter count={count} increamentCount={increamentCount}/>
    )}/>
     <IncreamentCount render={(count,increamentCount)=> (
       <HoverCounter count={count} increamentCount = {increamentCount}/>
     )}/>
    </div>
  );
}

export default App;

