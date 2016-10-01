var symmetrasrc = "symmetra.png";

function symmetraButton()
{
  if (symmetrasrc === "symmetra.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/symmetra.png";
    symmetrasrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, symmetraArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/symmetra.png";
    symmetrasrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, symmetraArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/symmetra.png";
    symmetrasrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, symmetraArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/symmetra.png";
    symmetrasrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, symmetraArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/symmetra.png";
    symmetrasrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, symmetraArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

  else
  {
    currentTeamScore = arrayNeg(currentTeamScore, symmetraArray);
    if (symmetrasrc === "empty_select1.png")
    {
      document.images.pos1.src = "./images/empty_select.png";
      symmetrasrc = "symmetra.png";
    }

    else if (symmetrasrc === "empty_select2.png")
    {
      document.images.pos2.src = "./images/empty_select.png";
      symmetrasrc = "symmetra.png";
    }

    else if (symmetrasrc === "empty_select3.png")
    {
      document.images.pos3.src = "./images/empty_select.png";
      symmetrasrc = "symmetra.png";
    }

    else if (symmetrasrc === "empty_select4.png")
    {
      document.images.pos4.src = "./images/empty_select.png";
      symmetrasrc = "symmetra.png";
    }

    else if (symmetrasrc === "empty_select5.png")
    {
      document.images.pos5.src = "./images/empty_select.png";
      symmetrasrc = "symmetra.png";
    }
    checkEmptyState();
  }
}
