import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

//This is the only place you'll see the ReactDOM call
//Everything else is sent to the "App" component to be
// rendered by this one call
ReactDOM.render(
    <App />,
    document.getElementById('app')
);

// This is the main JSX react file.  It gets called first (I think)
// Its purpose is to "render" to the browser the "App" we imported
// from ./App.jsx
