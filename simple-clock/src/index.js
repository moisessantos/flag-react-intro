import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './FunctionalClock';
// import Clock from './Clock';

ReactDOM.render(
  <React.StrictMode>
    <Clock startPlaying={false} />
  </React.StrictMode>,
  document.getElementById('root')
);
