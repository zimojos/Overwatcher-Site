var soldiersrc = "soldier.png";

function soldierButton()
{

  if (soldiersrc === "soldier.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/soldier.png";
    soldiersrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, soldierArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/soldier.png";
    soldiersrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, soldierArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/soldier.png";
    soldiersrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, soldierArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/soldier.png";
    soldiersrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, soldierArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/soldier.png";
    soldiersrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, soldierArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

  else
  {
    currentTeamScore = arrayNeg(currentTeamScore, soldierArray);
    if (soldiersrc === "empty_select1.png")
    {
      document.images.pos1.src = "./images/empty_select.png";
      soldiersrc = "soldier.png";
    }

    else if (soldiersrc === "empty_select2.png")
    {
      document.images.pos2.src = "./images/empty_select.png";
      soldiersrc = "soldier.png";
    }

    else if (soldiersrc === "empty_select3.png")
    {
      document.images.pos3.src = "./images/empty_select.png";
      soldiersrc = "soldier.png";
    }

    else if (soldiersrc === "empty_select4.png")
    {
      document.images.pos4.src = "./images/empty_select.png";
      soldiersrc = "soldier.png";
    }

    else if (soldiersrc === "empty_select5.png")
    {
      document.images.pos5.src = "./images/empty_select.png";
      soldiersrc = "soldier.png";
    }
    checkEmptyState();
  }
}
