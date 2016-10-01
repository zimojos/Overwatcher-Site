function checkEmptyState()
{
  heroes = anaArray.concat(bastionArray,dvaArray,genjiArray,hanzoArray,junkratArray,lucioArray,mccreeArray,meiArray,mercyArray,pharahArray,
  reaperArray,reinArray,roadhogArray,soldierArray,symmetraArray,torbjornArray,tracerArray,widowArray,winstonArray,zaryaArray,zenyattaArray);
  //the above resets the hero array in the case that it was modified with the below removeChosenHero function.
  if (document.getElementById("pos1").src !== "http://localhost:8080/images/empty_select.png" &&
      document.getElementById("pos2").src !== "http://localhost:8080/images/empty_select.png" &&
      document.getElementById("pos3").src !== "http://localhost:8080/images/empty_select.png" &&
      document.getElementById("pos4").src !== "http://localhost:8080/images/empty_select.png" &&
      document.getElementById("pos5").src !== "http://localhost:8080/images/empty_select.png")
      {
        heroesToSuggest = checkTeamArray();
        for (i=0; i<heroesToSuggest.length; i++)
        {
          if(i === 0)
          {
            suggestedHero0 = heroes[((heroesToSuggest[i])*12)+11];
            if (window[suggestedHero0+"src"] === suggestedHero0+".png")
            {
            document.getElementById("heroSuggestText0").innerHTML = heroes[((heroesToSuggest[i])*12)+11];
            document.getElementById("heroSuggest0").src = ("http://localhost:8080/images/"+heroes[((heroesToSuggest[i])*12)+11]+".png");
            }
          }
          else if (i === 1)
          {
            suggestedHero1 = heroes[((heroesToSuggest[i])*12)+11];
            if (window[suggestedHero1+"src"] === suggestedHero1+".png")
            {
            document.getElementById("heroSuggestText1").innerHTML = heroes[((heroesToSuggest[i])*12)+11];
            document.getElementById("heroSuggest1").src = ("http://localhost:8080/images/"+heroes[((heroesToSuggest[i])*12)+11]+".png");
            }
          }
          else if (i === 2)
          {
            suggestedHero2 = heroes[((heroesToSuggest[i])*12)+11];
            if (window[suggestedHero2+"src"] === suggestedHero2+".png")
            {
            document.getElementById("heroSuggestText2").innerHTML = heroes[((heroesToSuggest[i])*12)+11];
            document.getElementById("heroSuggest2").src = ("http://localhost:8080/images/"+heroes[((heroesToSuggest[i])*12)+11]+".png");
            }
          }
          else if (i === 3)
          {
            suggestedHero3 = heroes[((heroesToSuggest[i])*12)+11];
            if (window[suggestedHero3+"src"] === suggestedHero3+".png")
            {
            document.getElementById("heroSuggestText3").innerHTML = heroes[((heroesToSuggest[i])*12)+11];
            document.getElementById("heroSuggest3").src = ("http://localhost:8080/images/"+heroes[((heroesToSuggest[i])*12)+11]+".png");
            }
          }
          else if (i === 4)
          {
            suggestedHero4 = heroes[((heroesToSuggest[i])*12)+11];
            if (window[suggestedHero4+"src"] === suggestedHero4+".png")
            {
            document.getElementById("heroSuggestText4").innerHTML = heroes[((heroesToSuggest[i])*12)+11];
            document.getElementById("heroSuggest4").src = ("http://localhost:8080/images/"+heroes[((heroesToSuggest[i])*12)+11]+".png");
            }
          }
          else if (i === 5)
          {
            suggestedHero5 = heroes[((heroesToSuggest[i])*12)+11];
            if (window[suggestedHero5+"src"] === suggestedHero5+".png")
            {
            document.getElementById("heroSuggestText5").innerHTML = heroes[((heroesToSuggest[i])*12)+11];
            document.getElementById("heroSuggest5").src = ("http://localhost:8080/images/"+heroes[((heroesToSuggest[i])*12)+11]+".png");
            }
          }
          else if (i === 6)
          {
            suggestedHero6 = heroes[((heroesToSuggest[i])*12)+11];
            if (window[suggestedHero6+"src"] === suggestedHero6+".png")
            {
            document.getElementById("heroSuggestText6").innerHTML = heroes[((heroesToSuggest[i])*12)+11];
            document.getElementById("heroSuggest6").src = ("http://localhost:8080/images/"+heroes[((heroesToSuggest[i])*12)+11]+".png");
            }
          }
          else if (i === 7)
          {
            suggestedHero7 = heroes[((heroesToSuggest[i])*12)+11];
            if (window[suggestedHero7+"src"] === suggestedHero7+".png")
            {
            document.getElementById("heroSuggestText7").innerHTML = heroes[((heroesToSuggest[i])*12)+11];
            document.getElementById("heroSuggest7").src = ("http://localhost:8080/images/"+heroes[((heroesToSuggest[i])*12)+11]+".png");
            }
          }
          else if (i === 8)
          {
            suggestedHero8 = heroes[((heroesToSuggest[i])*12)+11];
            if (window[suggestedHero8+"src"] === suggestedHero8+".png")
            {
            document.getElementById("heroSuggestText8").innerHTML = heroes[((heroesToSuggest[i])*12)+11];
            document.getElementById("heroSuggest8").src = ("http://localhost:8080/images/"+heroes[((heroesToSuggest[i])*12)+11]+".png");
            }
          }
          else if (i === 9)
          {
            suggestedHero9 = heroes[((heroesToSuggest[i])*12)+11];
            if (window[suggestedHero9+"src"] === suggestedHero9+".png")
            {
            document.getElementById("heroSuggestText9").innerHTML = heroes[((heroesToSuggest[i])*12)+11];
            document.getElementById("heroSuggest9").src = ("http://localhost:8080/images/"+heroes[((heroesToSuggest[i])*12)+11]+".png");
            }
          }
          else if (i === 10)
          {
            suggestedHero10 = heroes[((heroesToSuggest[i])*12)+11];
            if (window[suggestedHero10+"src"] === suggestedHero10+".png")
            {
            document.getElementById("heroSuggestText10").innerHTML = heroes[((heroesToSuggest[i])*12)+11];
            document.getElementById("heroSuggest10").src = ("http://localhost:8080/images/"+heroes[((heroesToSuggest[i])*12)+11]+".png");
            }
          }
          else if (i === 11)
          {
            suggestedHero11 = heroes[((heroesToSuggest[i])*12)+11];
            if (window[suggestedHero11+"src"] === suggestedHero11+".png")
            {
            document.getElementById("heroSuggestText11").innerHTML = heroes[((heroesToSuggest[i])*12)+11];
            document.getElementById("heroSuggest11").src = ("http://localhost:8080/images/"+heroes[((heroesToSuggest[i])*12)+11]+".png");
            }
          }
        }
      }
      else {
        setAllSuggestionsToBlank();
      }
}
