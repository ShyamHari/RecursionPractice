/**
 * This object will receive a string and determine whether it is a palindrome or not.
 * @class
 * @constructor
 */
function Palindrome() {

     /**
      * This function takes a string from draw and checks if it is a palindrome. It checks the first and last letters of
      * the function and if they are the same, it slices it from the array, and it recurs and starts again.
      *
      * @param    {String} wordRecursive    This parameter takes a string from the called object draw.
      * @return   {boolean}                 Returns a sliced word back to be checked for a palindrome. If there is one or 0 letters left
      *                                     then it is a palindrome and returns true, if it is not a palindrome, then it returns false.
      */
     this.recursivePalindrome = function(wordRecursive) {
               //if the word length is less than or equal to 1 then return true because that means it was
               //successful ran through slicing the original word
               if (wordRecursive.length <= 1) {
                    return true;
               }
               //slices the first and last letter of the string which is an array, then returns the function with the 2 letter and the 2nd last letter
               if (wordRecursive[0] === wordRecursive[wordRecursive.length - 1]) {
                    return this.recursivePalindrome(wordRecursive.slice(1, wordRecursive.length - 1));
               }
                    //if it doesn't get through the word, that means its not a palindrome, so return false
                    return false;
               }

     /**
      * This function takes a string from draw and checks if it is a palindrome. It checks the letters of the word by moving forward
      * in the string with i and backwards with i. It checks if the if the letters are the same, starting from one the end of the string
      * and starting from the other. It will check the letters twice, since i needs to go through the length of the string.
      *
      * @param      {String} wordForLoop     This parameter takes a string from the called object in draw.
      * @return     {boolean}                This returns if the word is a palindrome or not with a true for yes it is a palindrome
      *                                      or returns false if it is not a palindrome.
      */
     this.forLoopPalindrome = function(wordForLoop) {
          //starts from the beginning of the word and increases its iteration to move forward to the string length
          for (var i = 0; i <= wordForLoop.length/2; i++) {
               //if the first run through the word is not equal to the run starting from the opposite side, it will return false
               if (wordForLoop[i] != wordForLoop[wordForLoop - i - 1]) {
                    return false;
               }
          }
          //if the function is a Palindrome, it will return true
          return true;
        }
    /**
    * This function splits a string into individual letters, each taking a slot in an array. It reverses the array and then rejoins it. It then
    * returns the word back when reversed in a boolean to check if the initial word equals the final word.
    *
    * @param  {String} wordIterate This parameter takes a string from the called object in draw.
    * @return {boolean}            This returns the string after it is reversed to check if the inputted word equals itself when reversed.
    */
     this.iterate = function (wordIterate){
      return wordIterate.split('').reverse().join('')===wordIterate;
     }
}
