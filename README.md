# Intro To jQuery

### Objectives
*After this lesson, students will be able to:*

- Describe jQuery and the context to use it
- Include jQuery in your projects
- Practice using jQuery selectors
- Apply jQuery to manipulate, add, and remove DOM elements
- Add event listeners for standard events - click, mouse, keydown - and custom events and respond with an action
- Capture data from specific events and iterate on or manipulate the data


### Preparation
*Before this lesson, students should already be able to:*

- Use vanilla JavaScript to manipulate the DOM
- Use a text editor

## jQuery - Intro

#### What is jQuery?
jQuery is an open source 3rd-party library that is intended to make front-end development tasks — particularly those involving DOM selection and manipulation — easier, faster, and more fun.

##### But wait, what do we mean by 'library'?
**A `library`** is just a collection of reusable methods that serve a particular purpose.


#### So, as a library, what does jQuery offer us?

jQuery helps us manipulate the DOM, allowing us to perform complex manipulations using less code with less hassle.  jQuery's syntax was developed to mimic CSS selector syntax, making code easier to develop, read, and manage; also, the syntax is more concise, and jQuery solves many cross-browser compatibility issues for us.

## Using jQuery

#### Installation
jQuery is a client side library, which means we need to include it in our HTML. To do this, we have two options:

1. Reference jQuery from a server on the internet:

- Directly from jQuery's website (http://code.jquery.com/)
`<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>`
From a CDN (content delivery network) like [CDNJS](https://cdnjs.com/) or [Google Hosted Libraries](https://developers.google.com/speed/libraries/)


`<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>`

2. Download a copy of jQuery to host on your own server:

[CDNJS](http://www.cdnjs.com), [Google Hosted Libraries](https://developers.google.com/speed/libraries/), and the [jQuery site](http://www.jquery.com) will all allow you to download a copy of jQuery to include in your projects.

:eyes: Recommendation: Google Hosted Libraries. Super Reliable, very fast.

#### What's with the 'min.js' in the name of the jQuery file?

`.min.js`, or `.min.anything` is a naming convention that conveys that this is a minified file.

## Minified?

Minification is the process of making a file smaller by:

- removing all line breaks and whitespace
- reducing the length of variable and function names
- stripping out all comments.

Minification reduces the jQuery library's size to 1/3 of its original size.

Minified scripts are not meant to be read by humans, so most servers that host jQuery and other libraries will also offer the original (non-minified) version of the code so developers can understand the code.

**It's a good exercise to visit code.jquery.com and take a look at minified and non-minified jQuery.**

## DOM manipulation with jQuery

### Selecting an element with jQuery

To select an element in the DOM, we use the global jQuery function:

```JavaScript
// This is the basic syntax for jQuery selections
$(' ')

// To select a particular element by tag, you do
$('h2') // selects all h2 elements

// To select by ID, you use the same syntax as CSS selectors
$('#someID') // Would select the element with ID="someID"

// To select all elements of a particular class, use CSS syntax again
$('.someClass') // Selects all elements of the class "someClass"

// This is easier to type and read than:
document.getElementByClassName('someClass');

// And you can use more complicated CSS selectors as well
$('p.anotherClass') // Selects all <p> tags that also have the class "anotherClass" (<p class="anotherClass")

```
:eyes:

- Watch out! Remember to put the `#` or `.` to tell jQuery if you are selecting an id or class!
- When you do the above, a "jQuery" object is returned

```JavaScript

// We prepend '$' to variable names when a variable is going to be a jQuery object to help us remember what that variable is for. This is just a naming convention, the computer cares not what we call it.

var $jqObject = $('p'); // Returns a jQuery object containing all <p> tags on your web page.

// However, we don't have to prepend '$' to our variables. It's just so we can remember what a variable is being used for.
var jqObject = $('p'); // This is functionally identical to the version above that includes the '$' in front of jqObject.
```

#### Selecting a DOM element and changing its content

In this HTML:


```html
<div id="myDiv">Hello world!</div>
```

```JavaScript
var divToManipulate = document.getElementById('myDiv');
divToManipulate.innerHTML = "Goodbye world!";
```

Now the code above isn't too hard to deal with, but even so, in jQuery, this is a one-liner.

```javascript
$('#myDiv').html("Goodbye world!");
```

See it in action [here](http://jsbin.com/wipiwuneho/1/edit?html,js,output)

If we wanted to **save our selection as a jQuery object**, the code would look like this instead:

- First we select the element we want and save it as a jQuery object

```javascript
var $myDiv = $('#myDiv');
```

- Then we use our jQuery object to perform our task

```javascript
$myDiv.html("Goodbye world!");
```

There are three things about the example above that make jQuery easier to use:
  1. jQuery is using the same syntax as CSS to select elements
  2. jQuery allows us easier chaining of methods together to accomplish our goals (i.e., $().html(...) ), making code shorter and easier to understand
  3. jQuery deals with cross-browser compatibility issues which may arise

&#x1F535; **Activity**
```
* Go back to the JSBin above
* In JSBin, write a jQuery selector to select the BYE button
* Save that button in a variable using the proper naming conventions
* Add a click event to that button using jQuery. Note jQuery's simple syntax for creating click events in the example!
* Make that click event change "Goodbye World!" back to "Hello World!"
* 7 minutes

```

#### Appending a DOM element to a web page

If we had the following HTML page...

```html
<html>
<body>

  <div id="container"></div>

</body>
</html>
```

If we want to add a new DIV that provides a nice greeting, our vanilla JavaScript would have to be:

```javascript
  var myDiv = document.getElementById('container');
  var newP = document.createElement('p');
  newP.innerHTML = "Hello complicated, multi-step world of adding an element to the DOM!";
  myDiv.appendChild(newP);
```

And in jQuery, it looks like this:

```javascript
  $('#container').append("<p>").append("Hello simple insertion using jQuery chaining");
```

In the jQuery code example above, we first select the DIV with `id="container"``, then we append a new paragraph element (automatically created using core jQuery selector function), and then we append the text we want to insert to the new paragraph element we just created. In effect, the new HTML looks like this after the jQuery is run:

```html
  <div id="container">
    <p>
      Hello simple insertion using jQuery chaining
    </p>
  </div>
```

You can [see this in action on JSBin](http://jsbin.com/rocabu/1/edit?)

&#x1F535; **Activity**
```
* Using this new JSBin...
* write a new line of jQuery to append an `<address>` element to the page, with an address in it.
* 3 minutes

```


#### Modifying Styles (CSS) Using jQuery

You can do more than select elements and modify content. You can also create or update CSS style attributes in jQuery using the .css() method

```js
$("#myDiv").css("color", "red");
```

The code above will change the color of all text inside the DIV with id="myDiv" to red.

[Check this out here](http://jsbin.com/cupumu/1/edit?html,js,output)

Or, if we have a bunch of elements that all have the same class (in this example, it's class="myClass"), we can use the class selector to modify the color of all of them at once:

```js
$(".myClass").css("color", "blue");
```

[You'll find this example here](http://jsbin.com/yutoyi/1/edit?html,js,output)

But that seems kind of boring. I mean, what if we want to do something with less hard-coding using jQuery.

[Here's a repeat of the last example](http://jsbin.com/wevoti/1/edit?html,js,output) that sets the text in all elements of class="myClass" to a random color. Try to understand how it works before moving on:

```javascript
// TC randColorValue function that returns rounded down product of a random number greater than 0 but less than one and 255
var randColorValue = function() {
  return Math.floor( Math.random() * 255 );
}
// TC randColor function assigns a randomColorValue to a red, green, and blue variables
var randColor = function() {
  var red = randColorValue();
  var green = randColorValue();
  var blue = randColorValue();
// TC randColor function returns "rgb" followed by the randColorValue for each
  return "rgb(" + red + "," + green + "," + blue + ")";

}
// TC modifies color of all elements with the class of myClass to be the value returned by the randColor function
$(".myClass").css("color", randColor() );
```

&#x1F535; **Activity**
```
* Go to [Reddit.com](http://www.reddit.com) and open your dev tools console
* Reddit uses jQuery, so we can use our Chrome developer console to manipulate the site in real time using jQuery!
* Start by typing a '$' into the console to verify jQuery is loaded.
* Go ahead and see what you can do! Can you turn the page different colors? Can you remove elements? Can you insert a photo? Hack it to pieces!
* 10 minutes
```
HINT: Here's a fun way to get started:
```javascript
$('img').hide()
```
- Hit enter. All the images should have dissappeared from the Reddit.com home page. Make sure you understand why before moving on.

- Now try this:
```js
$('img').show()
```
- Can you change the `src` property of all of the images?

## Let's set up a real webpage

:computer: Code Together!

```bash
mkdir first_jquery
cd first_jquery
touch index.html
touch app.js
atom .
```
Drop this boilerplate in your HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome Back to jQuery</title>
    <!-- Here's our CDN or Content Delivery Network for loading jQuery from the web -->
    <script src="https//code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="app.js"></script>
</head>
<body>
  <img src="http://www.publicdomainpictures.net/pictures/220000/nahled/fruit-of-every-nothing.jpg" width="100px";>

</body>
</html>
```

Steps:

1. In our CSS file let's make a CSS class `.big-image` that sets the width to 600px
2. Now in our Javascript file, lets use jQuery to select our image and save it in a variable $geometricImage
3. Next, let's create a click event using jQuery that adds the `.big-image` class to the image when it is clicked
4. Finally, let's modify our click event to remove the class when clicked again.

## Conclusion

- jQuery makes JavaScript super friendly and easy to write. a lot of websites are using jquery, soon you will too.  Remember that it's always good to know how to use what is called vanilla JavaScript, or JavaScript without a library.

- Please spend some time reviewing [the documentation](https://api.jquery.com/).
