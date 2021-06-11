import React from 'react';
import { render } from 'react-dom';


//While this function for a list will work,
// it will generate an error in the browser (not displayed, use developer tools)
// map must generate a "key" for each item in the mapped list
function List() {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((numbers => numbers * 2));

    return (
        <div>
            <ul>{doubled}</ul>
        </div>
    );

}
export { List };


function List1() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );

    return (
        <ul>{listItems}</ul>
    );

}
export { List1 };

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );

    return (
        <ul>{listItems}</ul>
    );
}
export { NumberList };

function NumberListIndexed(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}
export { NumberListIndexed };

//Best Method for identifying keys in list arrays
//Not the same as the lesson because I don't have a prewritten ListItem component
function NumberListKeyed(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()} value={number}>{number}</li>
    );

    return (
        <ul>
            {listItems}
        </ul>
    );
}
export { NumberListKeyed };


function indexExample() {
    //Normally, you choose the key to be an item ID of some type
    //embedded in your data (e.g.  id, todoitem)
    const todoItems = todos.map((todo) =>
        <li key={todo.id}>
            {todo.text}
        </li>
    );

    //However, at minimum, you can use the item index (e.g. todo[index_number])
    //If you change the order of items in the list passed to the function,
    //your index becomes meaningless as item indexes are the order in the array
    const todoItems1 = todos.map((todo, index) =>
        // Only do this if items have no stable IDs
        <li key={index}>
            {todo.text}
        </li>
    );
}

//Keys need to be unique inside the list array,
//but not unique (as a name) globally
//Both "post.id" represent different keys in different lists
function Blog(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
  export {Blog};
