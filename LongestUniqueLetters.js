var lengthOfLongestSubstring = function(s) {
	var str = s.split('');
  var result = [];
  for( var i=0; i<str.length-1; i++){
  	if(result.indexOf(str[i]) == -1){
    	result.push(str[i]);
    }
  }
    return result.join('');
};
console.log(lengthOfLongestSubstring("aaabbcccabc"));
console.log(lengthOfLongestSubstring("bbbbbbbbbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));