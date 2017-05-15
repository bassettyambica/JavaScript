
var a = 0, b = 1,temp=0;
var fib = [0,1];

var looping = function(n) {
   if(n > 1 && temp < n) {
     temp = a + b;
        a = b;
        b = temp;
        
        fib.push(temp);
        looping(n-1);

   }
  }
   
looping(20);
 console.log(fib);
