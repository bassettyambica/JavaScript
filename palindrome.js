function palindrome(str1) {
  var str2 = str1.split('').reverse().join('');
  if (str1 === str2) {
    alert("String is Palindrome: " + str1);
  } else {
    alert("not a palindrome");
  }
  return true;
}

function palindromeOfString(str) {
	var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }

  }
  return true;
}

palindrome("umu");
console.log(palindromeOfString("madam"));
