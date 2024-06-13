 function isPalindrome(num) {
      // Convert the number to a string
      var numStr = num.toString();

      // Reverse the string
      var reversedStr = numStr.split('').reverse().join('');

      // Check if the original and reversed strings are the same
      return numStr === reversedStr;
    }



function nextPalindrome(num) {
  //your JS code here.
	 // var number = parseFloat(num);

      // Check if the input is a valid number
      // if (isNaN(number)) {
      //   alert("Please enter a valid number.");
      //   return;
      // }

      // Find the next palindrome number
      do {
		  
        num++;
      } while (!isPalindrome(num));
	return num;

}
const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));
