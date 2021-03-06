import React from 'react';


//Everything is the same as the Reactjs.org
//tutorial except formatDate - it is not defined
//Also, The new Date() returns an object.  React element
//children cannot have objects(?), so, I used the .ToString() method
//That worked. You can see that in the object I created in App.jsx

//Original function - complicated
function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {props.date}
        </div>
      </div>
    );
  }
  export default Comment;

  //Final version version of Comment-simplified
  function Comment1(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  export {Comment1};

  //Extraction of Avatar from Comment
  function Avatar(props) {
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }


  //These functions do not need exports as they are 
  //only called in this file (scope is local/here)
  //Extraction of User-Info from Comment. UserInfo calls Avatar function
  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }