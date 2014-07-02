## Functions - Problem Set

#### Say Hello

Write a function called ```sayHello```.  The function should console log 

```
Hello World
```

#### Say Hello, Name.

Write a function called ```sayHelloFriend```.  The function should take a person's name as a parameter and console log 

```
Hello, [name]
```

#### Return Hello, Name.

Write a function called ```returnHello```.  The function should take a person's name as a paramter and __return__ the string:

```
"Hello, [name]"
```

#### Greet And Reply

Write a function called ```greetAndReply```.  The function should take a person's name as a parameter, and take your name as a second parameter also.  The function should then return the following string: 

```
"Hello, [name1].  My name is [name2]."
```

Make sure to write this function using the previous function.  That way, we don't have to write the same code twice.


#### Merge

Write a function called ```merge```.  The function should take two sorted arrays of numbers as input and return a merged array of the sorted numbers from the input.  For example, if the input arrays were `var arr1 = [3,6,11]; var arr2 = [2,4,5,8,9];`  Then the returned array would be: `[2,3,4,5,6,8,9,11]`.

#### Letter Count

Given a string, write a function that finds out how many times a character occurs.  For example, the string "apple" would print the following:

```
a - 1
p - 2
l - 1
e - 1
```


__BONUS__: Make sure that lower case letters and upper case letters count for the same character.  Also, ignore spaces and punctuation.

#### Guessing Game

Write a guessing game in which the program picks a number between 1 and 100.  Have the user submit guesses.  The program should tell the user if he is correct, if the actual number is higher, or if the actual number is lower.

__HINT__:  Your program will need to generate a random number or it won't be that fun.  Look up how to do that in the MDN docs for [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random).

__HINT__: You will need to get input from the user.  Look at the [readline docs](http://nodejs.org/api/readline.html) to see how it can be done in node.

__HINT__: Try to break this up into functions so that your code is logically separated and nothing gets repeated.  For example, it would probably be nice to have a function that gets input from the user given a prompt.