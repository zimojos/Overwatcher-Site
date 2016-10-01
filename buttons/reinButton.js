var reinsrc = "rein.png";

function reinButton()
{
  if (reinsrc === "rein.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/rein.png";
    reinsrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, reinArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/rein.png";
    reinsrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, reinArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/rein.png";
    reinsrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, reinArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/rein.png";
    reinsrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, reinArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/rein.png";
    reinsrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, reinArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

  else
  {
    currentTeamScore = arrayNeg(currentTeamScore, reinArray);
    if (reinsrc === "empty_select1.png")
    {
    document.images.pos1.src = "./images/empty_select.png";
    reinsrc = "rein.png";
    }

    else if (reinsrc === "empty_select2.png")
    {
      document.images.pos2.src = "./images/empty_select.png";
      reinsrc = "rein.png";
    }

    else if (reinsrc === "empty_select3.png")
    {
      document.images.pos3.src = "./images/empty_select.png";
      reinsrc = "rein.png";
    }

    else if (reinsrc === "empty_select4.png")
    {
      document.images.pos4.src = "./images/empty_select.png";
      reinsrc = "rein.png";
    }

    else if (reinsrc === "empty_select5.png")
    {
      document.images.pos5.src = "./images/empty_select.png";
      reinsrc = "rein.png";
    }
    checkEmptyState();
  }
}
