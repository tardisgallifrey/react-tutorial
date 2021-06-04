import React from 'react';


//While this function for a list will work,
// it will generate an error in the browser (not displayed, use developer tools)
// map must generate a "key" for each item in the mapped list
function List()
{
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => <li>{number}</li> );

    return(
        <ol>{listItems}</ol>
    );
}
export default List

