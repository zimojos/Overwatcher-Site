var mercysrc = "mercy.png";

function mercyButton()
{
  if (mercysrc === "mercy.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/mercy.png";
    mercysrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, mercyArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/mercy.png";
    mercysrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, mercyArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/mercy.png";
    mercysrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, mercyArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/mercy.png";
    mercysrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, mercyArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/mercy.png";
    mercysrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, mercyArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

  else
  {
    currentTeamScore = arrayNeg(currentTeamScore, mercyArray);
    if (mercysrc === "empty_select1.png")
    {
      document.images.pos1.src = "./images/empty_select.png";
      mercysrc = "mercy.png";
    }

    else if (mercysrc === "empty_select2.png")
    {
      document.images.pos2.src = "./images/empty_select.png";
      mercysrc = "mercy.png";
    }

    else if (mercysrc === "empty_select3.png")
    {
      document.images.pos3.src = "./images/empty_select.png";
      mercysrc = "mercy.png";
    }

    else if (mercysrc === "empty_select4.png")
    {
      document.images.pos4.src = "./images/empty_select.png";
      mercysrc = "mercy.png";
    }

    else if (mercysrc === "empty_select5.png")
    {
      document.images.pos5.src = "./images/empty_select.png";
      mercysrc = "mercy.png";
    }
    checkEmptyState();
  }
}
