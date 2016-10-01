var widowsrc = "widow.png";

function widowButton()
{
  if (widowsrc === "widow.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/widow.png";
    widowsrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, widowArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/widow.png";
    widowsrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, widowArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/widow.png";
    widowsrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, widowArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/widow.png";
    widowsrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, widowArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/widow.png";
    widowsrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, widowArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

  else
  {
    currentTeamScore = arrayNeg(currentTeamScore, widowArray);
    if (widowsrc === "empty_select1.png")
    {
      document.images.pos1.src = "./images/empty_select.png";
      widowsrc = "widow.png";
    }

    else if (widowsrc === "empty_select2.png")
    {
      document.images.pos2.src = "./images/empty_select.png";
      widowsrc = "widow.png";
    }

    else if (widowsrc === "empty_select3.png")
    {
      document.images.pos3.src = "./images/empty_select.png";
      widowsrc = "widow.png";
    }

    else if (widowsrc === "empty_select4.png")
    {
      document.images.pos4.src = "./images/empty_select.png";
      widowsrc = "widow.png";
    }

    else if (widowsrc === "empty_select5.png")
    {
      document.images.pos5.src = "./images/empty_select.png";
      widowsrc = "widow.png";
    }
    checkEmptyState();
  }
}
