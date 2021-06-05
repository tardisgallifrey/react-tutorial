<h1>The ReactJS Tutorial They Missed</h1>

<h2>A <a href="https://reactjs.org/docs/hello-world.html">ReactJS</a> project built with <a href="https://www.snowpack.dev/tutorials/react">Snowpack</a> that follows most of the Reactjs.org lessons</h2>
<hr />
<p>I had real problems trying to learn ReactJS because the main React.org website didn't seem to explain 
anything about how to formulate JSX Component files into an App. Fortunately, I've been able to figure that out 
somewhat and the result is the tutorial I am currently working on.</p>

<p>This project builds from the <a href="https://docs.microsoft.com/en-us/learn/paths/react/">Microsoft Learn lessons on ReactJS</a>, which uses Snowpack bundler.  If you wish, you should try going through some of those lessons (there are only three) before embarking here. The Microsoft Learn lessons do give provide some information on the structure of a Reactjs application, but I'll describe it in detail here.</p>

<p>The following is the basic folder structure of a Reactjs app as I understand it.  This comes from the Microsoft Learn React lessons.  Please note: what you are working on here is a development environment.  This is not how your publilshed build will look.</p>


<pre>MyAppFolder______
    |            |__package.json
    |            |__snowpack.config.js
    |
    |____public
    |          |__index.html
    |
    |
    |____src
            |__index.css
            |__index.jsx
            |__App.jsx
            |__(all other Component JSX files)</pre>

<p>Most of what I've learned, I am trying to write in as comments in the JSX files. Please note: These aren't identified by any kind of lesson numbering system.  If you start at the top of App.jsx and work down, it should follow things as presented in order from the <bold>Main Concepts</bold> lessons, beginning with <bold>3. Rendering Elements</bold>.</p>

<p>I'll include more helps on application structure here as well, time permitting.</p>

<h3>Some things I've learned so far.</h3>

<ol>
<li>In a React App, you ony use the ReactDOM function one time, and that is in index.jsx to call the 'App' Component.</li>
<li>Most of the work to display your app gets done in the 'App.jsx' file. </li>
<li>Most components wil go in their own JSX files.  You can combine components in a file. Good practice would mean they are related.</li>
<li>Componet files must begin with an import of the React module <code>import React from 'react';</code>. </li>
<li>Components are recognized in "App.jsx" when you export them from their JSX file to "App.jsx" (see code files above).</li>
<li>Component files can have only one <code>export default name-of-componet;</code>.</li>
</ol>
