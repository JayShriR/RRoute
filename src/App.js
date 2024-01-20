import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length===0){
    return (
      <div className="Refresh">
        <h2 className=" font-bold text-xl">No Tours Left</h2>
        <button className="mt-[18px] px-20 py-2 border-4	divide-solid divide-white transition-all duration-200 cursor-pointer hover:text-black hover:bg-white" onClick={()=>setTours(data)}>Refresh</button>
      </div>
      
    )
  }
  return (
    <div className="App">
     
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;