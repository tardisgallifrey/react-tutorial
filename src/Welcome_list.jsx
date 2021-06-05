import React from 'react';
import Welcome from './Welcome';

//A component that uses another component
function Welcome_list() {
    return (
        <div>
      <Welcome name="Janice" />
      <Welcome name="Heather" />
      <Welcome name="Krys" />
      </div>
    );
  }
  export default Welcome_list;

  //Do not know the reason, but this type of
  //Component would not completely work from 
  //the Welcome.jsx file
  //
  //When I put it in its own file, it worked