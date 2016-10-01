var meisrc = "mei.png";

function meiButton()
{
  if (meisrc === "mei.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/mei.png";
    meisrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, meiArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/mei.png";
    meisrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, meiArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/mei.png";
    meisrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, meiArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/mei.png";
    meisrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, meiArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/mei.png";
    meisrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, meiArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

  else
  {
    currentTeamScore = arrayNeg(currentTeamScore, meiArray);
    if (meisrc === "empty_select1.png")
    {
      document.images.pos1.src = "./images/empty_select.png";
      meisrc = "mei.png";
    }

    else if (meisrc === "empty_select2.png")
    {
      document.images.pos2.src = "./images/empty_select.png";
      meisrc = "mei.png";
    }

    else if (meisrc === "empty_select3.png")
    {
      document.images.pos3.src = "./images/empty_select.png";
      meisrc = "mei.png";
    }

    else if (meisrc === "empty_select4.png")
    {
      document.images.pos4.src = "./images/empty_select.png";
      meisrc = "mei.png";
    }

    else if (meisrc === "empty_select5.png")
    {
      document.images.pos5.src = "./images/empty_select.png";
      meisrc = "mei.png";
    }
    checkEmptyState();
  }
}
