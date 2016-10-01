var winstonsrc = "winston.png";

function winstonButton()
{
  if (winstonsrc === "winston.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/winston.png";
    winstonsrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, winstonArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/winston.png";
    winstonsrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, winstonArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/winston.png";
    winstonsrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, winstonArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/winston.png";
    winstonsrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, winstonArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/winston.png";
    winstonsrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, winstonArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

  else
  {
    currentTeamScore = arrayNeg(currentTeamScore, winstonArray);
    if (winstonsrc === "empty_select1.png")
    {
      document.images.pos1.src = "./images/empty_select.png";
      winstonsrc = "winston.png";
    }

    else if (winstonsrc === "empty_select2.png")
    {
      document.images.pos2.src = "./images/empty_select.png";
      winstonsrc = "winston.png";
    }

    else if (winstonsrc === "empty_select3.png")
    {
      document.images.pos3.src = "./images/empty_select.png";
      winstonsrc = "winston.png";
    }

    else if (winstonsrc === "empty_select4.png")
    {
      document.images.pos4.src = "./images/empty_select.png";
      winstonsrc = "winston.png";
    }

    else if (winstonsrc === "empty_select5.png")
    {
      document.images.pos5.src = "./images/empty_select.png";
      winstonsrc = "winston.png";
    }
    checkEmptyState();
  }
}
