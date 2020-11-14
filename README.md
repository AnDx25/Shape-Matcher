# Shape-Matcher
It is a basic game to match the random shapes coming over the screen and more the number of matches more the score will be. Limit is on time under which you have to match maximum shapes to get maximum score. Live Url : https://andx25.github.io/Shape-Matcher/


# Table of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Setup](#setup)

## General Info
* Game starts as soon as player clicks on play button and got restart using corresponding button.
* This game consist of an array which contains 10 different shape property each having three property colour, height and width.
* There is a function called randomSelection() which is responsible for selecting a value from the array in a random fashion
* A function called repeatRandomShape() which calls the randomSelection() two times after every one second.
* When a match button is clicked then both the two shape is matched using an inbuilt functionality of Javascript called Object.is(shape1,shape2) which returns true if both the shape are of same colour, same height and same width and then the current score of player gets incremented else the current score will be decremented.

## Technologies Used
* HTML5
* CSS
* Javascript

## Setup
* Clone the repository
* Run the file index.html
