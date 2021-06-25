import React from 'react';                                                    //Required imported module
import Welcome from './Components';                                           //import a simple Component
import Welcome1 from './Components';                                          //import a second module from same JSX file
import Welcome_list from './Children';                                        //import the Welcome_List from ./Welcome.JSX
import Comment from './Extractions';                                          //import Comment without function extraction
import Comment1 from './Extractions';                                         //import Comment1 that's had functions extracted
import Clock from './States_LifeCycle'                                        //import Clock Component showing how to use state/lifecycle
import Toggle from './Event_Handlers'                                         //import Toggle button component to show event handlers
import Condition1, { Condition_Null, Condition_Best } from './Conditions'     //import first conditional from Conditions (not the same as reactjs.org)
//import List functions, non-keyed, keyed, Indexed, etc
import { List, List1, NumberList, NumberListIndexed, NumberListKeyed, Blog } from './List';
import { NameForm, EssayForm, FlavorForm, Reservation, NameForm2, FileInput } from './Forms';
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
// below, in List and List2 component, we pass it to 
// that component
const numbers = [1, 2, 3, 4, 5];


//This is a JavaScript list for use in the blog post component below
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];


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
      <p>A button with an event handler.</p>
      <Toggle />
      <p>Selectable Components (Conditional).</p>
      <Condition1 />
      <p>Hiding something using Null in a return.</p>
      <Condition_Null />
      <p>Hiding something using conditional statement.</p>
      <Condition_Best />
      <p>How to correctly use .map() function.</p>
      <h1>How to Display Lists</h1>
      <p>Incorrectly formatted types. No Index/key</p>
      <List />
      <List1 />
      <NumberList numbers={numbers} />
      <p>Properly Formatted Lists with an Index.</p>
      <NumberListIndexed numbers={numbers} />
      <NumberListKeyed numbers={numbers} />
      <p>List Keys unique in array, but not globally.  Both have a post.id key.</p>
      <Blog posts={posts} />
      <p>Basic HTML form</p>
      <p>Will open a new page with the form tag added in URL.</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
      <input type="submit" value="Submit" />
      </form>
      <p>A Controlled Component containing a Form.</p>
      <NameForm />
      <p>A textarea form component.</p>
      <EssayForm />
      <p>A select form component (drop down list).</p>
      <FlavorForm />
      <p>A Form with multiple inputs</p>
      <Reservation />
      <p>An uncontrolled Form where we give the value here in the DOM</p>
      <NameForm2 />
      <p>A File Input Form, which is always an uncontrolled Component</p>
      <FileInput />
      <p>This is the end of the primary tutorial.</p>
      <p>All additional tutorials will be in standalone React Apps.</p>
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
