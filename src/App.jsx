import React from 'react';                  //Required imported module
import Welcome from './Welcome';            //import a simple Component
import Welcome1 from './Welcome';           //import a second module from same JSX file
import Welcome_list from './Welcome_list';  //import the Welcome_List from ./Welcome.JSX
import Comment from './Comment';            //import Comment without function extraction
import Comment1 from './Comment';           //import Comment1 that's had functions extracted
import Clock from './Clock'
import List2 from './List2';                //import correctly formatted array list
import List from './List2';                 //import incorrectly formatted array list
import './index.css'

//A simple JSX element (it could be named anything)
// When the name is put between braces in the function below,
// it will render out the "Hello World" in HTML
const element = <h1>Hello, world!</h1>;

//How to use a variable in another element
const name = 'Dave Vest';
const tag = <h1>Hello, {name}</h1>;

//Use of function to combine elements and pass into functions
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

//THis is an object declaration, BTW
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

  //Combines function call in element and 
  //passing in an element as variable
const user_greeting = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );

//Elements can have children. Note parentheses
const greeting = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  );


  //This is an element that is equal to the object below
const greeting1 = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );

  //This is an object declaration
  //It is the same as the declaration above
// Note: this structure is simplified
const greeting1_object = {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world!'
    }
  };

//Calling a component and adding it to an element
  const welcome_message = <Welcome name="Sara" />;


  //A comment object for extracting components
  //At this state of learning, Date() objects cannot go
  //in as React Children.  Best to convert to String in the
  //object creation before passing to functions or components
  const comment = {
    date: new Date().toString(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    }
  };

  //All React components must act like pure functions with respect to their props

  //good form - the function doesn't alter the input parameters
  function sum(a, b) {
    return a + b;
  }

  //bad form -- function is altering input parameter
  function withdraw(account, amount) {
    account.total -= amount;
  }

const mytime = {
  date: new Date().toString(),
  text: 'Today\'s Clock',
}

// This is just a JavaScript array of numbers
// below, in List2 component, we pass it to 
// that component
const numbers = [1, 2, 3, 4, 5];

//The function we call "App" provides the method
//to call all or some of our components
// and return them to make a web page
function App() {
    return (
        <article>
          <h1>Output from a ReactJS Tutorial.</h1>
            <p>A simple element.</p>
            {element}
            <p>Another element style.</p>
            {tag}
            <p>Variable and function use in an element</p>
            {user_greeting}
            <p>Element with children.</p>
            {greeting}
            <p>A Simple component sending Dave as a prop.</p>
            <Welcome name="Dave" />
            <p>Another component from the same JSX fie.</p>
            <Welcome1 name="Janice" />
            <p>Calling a Component and adding it to an element for display.</p>
            {welcome_message}
            <p>A Component that uses other Components (the Welcome Component).</p>
            <Welcome_list />
            <p>Before Component Extraction (see Comment.jsx).</p>
            <Comment
              date={comment.date}
              text={comment.text}
              author={comment.author}
            />
            <p>After Component Extraction (Comment1 in Comment.jsx).</p>
            <Comment1
              date={comment.date}
              text={comment.text}
              author={comment.author}
            />
            <p>A clock component in the upper right corner</p>
            <Clock />
            <p>How to correctly use .map() function.</p>
            <h1>How to Display Lists</h1>
            <p>Correctly formatted.</p>
            <List2 numbers={numbers} />
            <p>Incorrectly formatted (no index/key).</p>
            <List numbers={numbers} />
        </article>
    )
}

export default App;

//This is where most of the work gets done in react
// it imports all the components needed to run this React app
// on a browser
//
// Its main function (there is only one, usually per component)

//Our React/JS compiler converts all our JSX to JavaScript that it 
//bundles in the the basic HTML file in /public and then sends that
//to the user's browser
