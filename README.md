# fortune-js
fortune-mod, but in javascript. kinda. its not as robust and its kinda bodged together but its my baby so youre not allowed to insult it




## fortune.js
basically the file picks a random number and then picks from an array and writes the result to an html element. you can change the elementid to whatever id you want to use
the quotepath variable is the path to the quotes file. ill address those in a moment. it can be relative or absolute.

### quote files
fortune-js cannot currently parse the quote files fortune-mod uses. however, feeding the plaintext documents (quotes seperated by '%') into txttojson will spit out a json file consisting of the appropriate table-format file. just point the js file there and you should be good to go. **this may have issues dealing with quotes with certain characters**. ive done what i can think of to sanitize inputs, but i can make no guaruntees. 


To see this project at work, check out my [development page](https://zeroslab.github.io/fortune-js/test.html)! its quite volatile. 
