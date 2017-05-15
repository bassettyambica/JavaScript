function intersect_safe(a, b)
{
  var i=0, j=0;
  var result = [];

  while( i < a.length && j < b.length )
  {
     if      (a[i] < b[j] ){ i++; }
     else if (a[i] > b[j] ){ j++; }
     else /* they're equal */
     {
       result.push(a[i]);
       i++;
       j++;
     }
  }

  console.log(result);
}

intersect_safe([10,20,30,40],[30,40,60]);