var torbjornsrc = "torbjorn.png";

function torbjornButton()
{
  if (torbjornsrc === "torbjorn.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/torbjorn.png";
    torbjornsrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, torbjornArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/torbjorn.png";
    torbjornsrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, torbjornArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/torbjorn.png";
    torbjornsrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, torbjornArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/torbjorn.png";
    torbjornsrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, torbjornArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/torbjorn.png";
    torbjornsrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, torbjornArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

  else
  {
    currentTeamScore = arrayNeg(currentTeamScore, torbjornArray);
    if (torbjornsrc === "empty_select1.png")
    {
      document.images.pos1.src = "./images/empty_select.png";
      torbjornsrc = "torbjorn.png";
    }

    else if (torbjornsrc === "empty_select2.png")
    {
      document.images.pos2.src = "./images/empty_select.png";
      torbjornsrc = "torbjorn.png";
    }

    else if (torbjornsrc === "empty_select3.png")
    {
      document.images.pos3.src = "./images/empty_select.png";
      torbjornsrc = "torbjorn.png";
    }

    else if (torbjornsrc === "empty_select4.png")
    {
      document.images.pos4.src = "./images/empty_select.png";
      torbjornsrc = "torbjorn.png";
    }

    else if (torbjornsrc === "empty_select5.png")
    {
      document.images.pos5.src = "./images/empty_select.png";
      torbjornsrc = "torbjorn.png";
    }
    checkEmptyState();
  }
}
