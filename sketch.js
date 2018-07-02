/**
 * @author Shyam Hari
 * Date: Tuesday November 7th
 * @version 2.1 Added a time counter to see the difference between the two times
 * About: This program takes an input and determines if it is a palindrome or not
 * It determines this using a for loop and recursion
 */


var palindromeObject;
var word1;
var editedWord;

function setup() {
     createCanvas(100, 100);
     word1 = "racecar";
     editedWord = word1.toLowerCase(); //makes the word lowercase so that it can read from the string
     palindromeObject = new Palindrome();
     background(0);

}

function draw() {
     console.log(palindromeObject.recursivePalindrome(editedWord));
    // console.log(palindromeObject.forLoopPalindrome(editedWord));
     //console.log(palindromeObject.iterate(editedWord));
   }
