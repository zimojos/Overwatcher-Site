function indexofLargest(a)
{
var largestIndeces = [];
var k = 0;
var largest = -100;

for (i = 0; i < a.length; i++)
{
  if (a[i] >= largest)
  {
  largest = a[i];
  }
}

for (var j = 0; j < a.length; j++)
{
  if (a[j] === largest)
  {
    largestIndeces[k] = j;
    k = k + 1;
  }
}

return largestIndeces;

}
