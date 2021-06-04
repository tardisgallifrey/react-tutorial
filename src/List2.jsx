//required to be first in each component JSx file
import React from 'react';


//This is how to create a map-ed list correctly in React
// The key= part is necessary.  You don't have to use it,
//  but you must have it to avoid browser errors

//create a function with an argment called props
function NumberList(props) {

    // create a const variable to receive the array when this
    // component is called
    // props.numbers matches the numbers array you send here
    // when this component is called from App.jsx
    const numbers = props.numbers;

    // Now, create a new array called listItems which gets
    // its array from map-ing numbers from above
    // .map uses a call back function with one or two parameters
    // in "fat arrow" form
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
        // The above says: for each "number" mapped to the output array,
        // put it together with list item tags, the leading one adds a key

    );

    //This function now returns listItems array
    // as an unordered list
    return (
      <ul>{listItems}</ul>
    );
  }//function closed

  //This is all that you put at the end of a component JSX
  //file in order for it to be used correctly
  // You are physically exporting the above function
  export default NumberList;


//This is the incorrect method to use .map() funcion
//But, it will work.  Generates browser errors

function List()
{
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => <li>{number}</li> );

    return(
        <ol>{listItems}</ol>
    );
}
export { List };
  
  