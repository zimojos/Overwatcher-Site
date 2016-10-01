var teamScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// LRDPS, MRDPS, SRDPS, MOB, THEAL, SHEAL, TSUPP, TNK, ACTL, SNIP, FLNK

if
(
document.getElementById("pos1").src !== "./images/empty select.png" &&
document.getElementById("pos2").src !== "./images/empty select.png" &&
document.getElementById("pos3").src !== "./images/empty select.png" &&
document.getElementById("pos4").src !== "./images/empty select.png" &&
document.getElementById("pos5").src !== "./images/empty select.png"
)
{
  window.scroll(660,0);
  if (teamScore[0] <= 3)
  {document.getElementById("suggestion").innerHTML = "The team is lacking long range DPS.";}
  if (teamScore[1] <= 3)
  {document.getElementById("suggestion").innerHTML = "The team is lacking mid range DPS.";}
  if (teamScore[2] <= 3)
  {document.getElementById("suggestion").innerHTML = "The team is lacking short range DPS.";}
  if (teamScore[3] <= 3)
  {document.getElementById("suggestion").innerHTML = "The team is lacking mobility.";}
  if (teamScore[4] <= 3)
  {document.getElementById("suggestion").innerHTML = "The team is lacking mid range DPS.";}
  if (teamScore[5] <= 3)
  {document.getElementById("suggestion").innerHTML = "The team is lacking healing.";}
  if (teamScore[6] <= 3)
  {document.getElementById("suggestion").innerHTML = "The team is lacking sustainability.";}
  if (teamScore[7] <= 3)
  {document.getElementById("suggestion").innerHTML = "The team is lacking tankability.";}
  if (teamScore[8] <= 3)
  {document.getElementById("suggestion").innerHTML = "The team is lacking area control.";}
  if (teamScore[9] >= 2)
  {document.getElementById("suggestion").innerHTML = "The team has too many snipers.";}
  if (teamScore[10] >= 3)
  {document.getElementById("suggestion").innerHTML = "The team has too many flankers.";}
}
else {
  {
    document.getElementById("suggestion").innerHTML = "";
  }
}
