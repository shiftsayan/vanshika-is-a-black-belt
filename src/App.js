import React from 'react';

import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import { flex_count } from './flex'
import { choice } from './util'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={choice([image1, image2, image3, image4])} className="App-face" alt="face" />
        <p>
          "I am a black belt <span role="img">💪</span>."
        </p>
        <p>
          Flexed { flex_count } {flex_count === 1 ? "time" : "times" }.
        </p>
      </header>
    </div>
  );
}

export default App;
