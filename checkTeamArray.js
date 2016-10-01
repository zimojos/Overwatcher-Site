function checkTeamArray()
{
  var heroesToPick = [];
  if (currentTeamScore[0] < attributeTriggers[0])
  {
    document.getElementById("suggestion1").innerHTML = "The team is lacking long range DPS.";
  }
  if (currentTeamScore[1] < attributeTriggers[1])
  {
    document.getElementById("suggestion2").innerHTML = "The team is lacking mid range DPS.";
  }
  if (currentTeamScore[2] < attributeTriggers[2])
  {
    document.getElementById("suggestion3").innerHTML = "The team is lacking short range DPS.";
  }
  if (currentTeamScore[3] < attributeTriggers[3])
  {
    document.getElementById("suggestion4").innerHTML = "The team is lacking mobility.";
  }
  if (currentTeamScore[4] < attributeTriggers[4])
  {
    document.getElementById("suggestion5").innerHTML = "The team is lacking healing.";
  }
  if (currentTeamScore[4] > attributeTriggers[4])
  {
    document.getElementById("suggestion5").innerHTML = "The team has too many healers.";
  }
  if (currentTeamScore[5] < attributeTriggers[5])
  {
    document.getElementById("suggestion6").innerHTML = "The team is lacking sustainability.";
  }
  if (currentTeamScore[6] < attributeTriggers[6])
  {
    document.getElementById("suggestion7").innerHTML = "The team is lacking synergy.";
  }
  if (currentTeamScore[7] < attributeTriggers[7])
  {
    document.getElementById("suggestion8").innerHTML = "The team is lacking tankability.";
  }
  if (currentTeamScore[7] > attributeTriggers[7]+1)
  {
    document.getElementById("suggestion8").innerHTML = "The team has too many tanks.";
  }
  if (currentTeamScore[8] < attributeTriggers[8])
  {
    document.getElementById("suggestion9").innerHTML = "The team is lacking area control.";
  }
  if (currentTeamScore[9] > attributeTriggers[9])
  {
    document.getElementById("suggestion10").innerHTML = "The team has too many snipers.";
  }
  if (currentTeamScore[10] > attributeTriggers[10])
  {
    document.getElementById("suggestion11").innerHTML = "The team has too many flankers.";
  }

  heroesToPick = determineBestHero();
  return(heroesToPick);
}
