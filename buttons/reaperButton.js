var reapersrc = "reaper.png";

function reaperButton()
{
  if (reapersrc === "reaper.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/reaper.png";
    reapersrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, reaperArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/reaper.png";
    reapersrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, reaperArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/reaper.png";
    reapersrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, reaperArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/reaper.png";
    reapersrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, reaperArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/reaper.png";
    reapersrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, reaperArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

  else
    {
      currentTeamScore = arrayNeg(currentTeamScore, reaperArray);
      if (reapersrc === "empty_select1.png")
      {
        document.images.pos1.src = "./images/empty_select.png";
        reapersrc = "reaper.png";
      }

      else if (reapersrc === "empty_select2.png")
      {
        document.images.pos2.src = "./images/empty_select.png";
        reapersrc = "reaper.png";
      }

      else if (reapersrc === "empty_select3.png")
      {
        document.images.pos3.src = "./images/empty_select.png";
        reapersrc = "reaper.png";
      }

      else if (reapersrc === "empty_select4.png")
      {
        document.images.pos4.src = "./images/empty_select.png";
        reapersrc = "reaper.png";
      }

      else if (reapersrc === "empty_select5.png")
      {
        document.images.pos5.src = "./images/empty_select.png";
        reapersrc = "reaper.png";
      }
      checkEmptyState();
    }
}
