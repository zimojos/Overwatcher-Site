//----------------------------------
//This function tallies each unselected hero's 'benefits' to the already chosen
//team of 5 heroes. This function can be tweaked to put higher value over certain
//attribute requirements being met. For instance, a team with no healer is given
//a much lower score than a team with low long range dps. i.e. it's better to add
//a healer than to add a mccree to a team with no dps and no healing.
//----------------------------------


function determineBestHero()
{
  var compareArray = [0,0,0,0,0,0,0,0,0,0,0,0]; //this array is used to compare individual heroes to the team score.
  var j=0; //secondary counter for loop
  var benefitCounter = 0; //the variable where a hero's contribution to the team is tallied.
  var benefitCounterArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //The index of this array determines what
  //hero will be suggested. Increase the size of this array to add new heroes (sombra?)
  var heroCount = 0; //a counter that shifts assignment index of benefitCounterArray.
  var heroSuggestArray = []; //allows for the suggestion of multiple heroes with the same benefit score.
  var heroesToSuggest = []; //translates the above numbers into hero strings to return.
  removeChosenHeroes(); //function that removes heroes already chosen from consideration.

  for (i=0; i<heroes.length; i++) //works with indeces along the main hero array.
  {
    if ((i-11)%12 === 0 && i !== 0) //every hero takes up 12 consecutive indeces of the hero array. If the 12th position
    //is reached, it computes below and starts the count over. && exception is for when the position is 0.
    {
      benefitCounterArray[heroCount] = benefitCounter; //sets each value of the array to the number of positive aspects
      //of that hero on the team
      j = 0; //resets the compare array index for a new hero.
      benefitCounter = 0; //variable to store positive aspects of hero pick
      heroCount = heroCount + 1; //keeps track of benefitCounterArray position
    }
    //for every non-final position of the hero array, it calculates benefit differently
    else
    {
      compareArray[j] = currentTeamScore[j] + heroes[i];
      if (j === 0 || j === 1 || j === 2 || j === 5) //SRDPS, MRDPS, LRDPS, and sustainability are calculated the same
      {
        if (compareArray[j] >= attributeTriggers[j]) { //if the team score with this hero is above a trigger...
          benefitCounter=benefitCounter+(compareArray[j]/2); //it adds half the team score's value with the hero to
          //the benefit counter
        }
      }
      else if (j === 3 || j === 6 || j === 8) //mobility, team support abilities, and area control
      {
        if (compareArray[j] >= attributeTriggers[j]) {
          benefitCounter=benefitCounter+2; //flat +2 for meeting the requirements
        }
      }
      else if (j === 4) //healing
      {
        if(compareArray[j] === attributeTriggers[j]) {
          benefitCounter=benefitCounter+5; //if the team has 2 main healers, +5
        }
        else if(compareArray[j] === attributeTriggers[j]/2) {
          benefitCounter=benefitCounter+1; //if the team has 1 healer, it's not ideal, but still +1
        }
        else if(compareArray[j] === attributeTriggers[j]-1) {
          benefitCounter=benefitCounter+3; //if the team has a main healer, and a secondary healer like soldier +3
        }
        else if(compareArray[j]<attributeTriggers[j]) {
          benefitCounter=benefitCounter-6; //if the team has NO healer, -6
        }
        else if(compareArray[j]>(attributeTriggers[j])) {
          benefitCounter=benefitCounter-5; //if the team has too many healers, -5
          // this really only exists to not suggest a 3rd healer to a team with 2 selected.
        }
      }
      else if (j === 7) //tanking
      {
        if(compareArray[j] === attributeTriggers[j]) {
          benefitCounter=benefitCounter+4; // if the team  has 2 tanks +4
        }
        else if(compareArray[j] === attributeTriggers[j]/2) {
          benefitCounter=benefitCounter+1; // if the team has 1 tank +1
        }
        else if(compareArray[j] < (attributeTriggers[j])) {
          benefitCounter=benefitCounter-3; // if the team has no tanks -3
        }
        else if(compareArray[j]>(attributeTriggers[j])) {
          benefitCounter=benefitCounter-5; // if the team has too many tanks -5
        }
      }
      else if (j === 9 || j === 10) //sniping and flanking
      {
        if (compareArray[j] === attributeTriggers[j]+1) {
          benefitCounter=benefitCounter-5; // if the team has 1 too many snipers or flankers -5
        }
        else if (compareArray[j] > attributeTriggers[j]+4) {
          benefitCounter=benefitCounter-7; // if the team has way too many snipers or flankers -7
        }
        else if (compareArray[j] > attributeTriggers[j]+3) {
          benefitCounter=benefitCounter-6; // if the team has too many snipers or flankers -5
        }
      }
      j = j+1; //moves the attribute counter.
    }
  }
  heroSuggestArray = indexofLargest(benefitCounterArray); //determines what index has the highest benefit.
  return(heroSuggestArray);
}
