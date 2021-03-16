var p=prompt("enter the number");
var fib0=0;
var fib1=1;
console.log("1");
console.log("2");
 while(p)
{  document.write(fib0+" ");

  var temp =fib1+fib0;
  console.log(p);

  fib0=fib1;
  fib1=temp;
  p--;
}
