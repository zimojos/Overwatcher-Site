var teamAddScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var teamNegScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


function arraySum(array1, array2)
{
  for (var i=0; i<11; i++)
  {
    teamAddScore[i] = array1[i] + array2[i];
  }
  return teamAddScore;
}

function arrayNeg(array1, array2)
{
  for (var i=0; i<11; i++)
  {
    teamNegScore[i] = array1[i] - array2[i];
  }
  return teamNegScore;
}
