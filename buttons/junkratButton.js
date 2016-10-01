var junkratsrc = "junkrat.png";

function junkratButton()
{
  if (junkratsrc === "junkrat.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/junkrat.png";
    junkratsrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, junkratArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/junkrat.png";
    junkratsrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, junkratArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/junkrat.png";
    junkratsrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, junkratArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/junkrat.png";
    junkratsrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, junkratArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/junkrat.png";
    junkratsrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, junkratArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

else
  {
    currentTeamScore = arrayNeg(currentTeamScore, junkratArray);
    if (junkratsrc === "empty_select1.png")
    {
      document.images.pos1.src = "./images/empty_select.png";
      junkratsrc = "junkrat.png";
    }

    else if (junkratsrc === "empty_select2.png")
    {
      document.images.pos2.src = "./images/empty_select.png";
      junkratsrc = "junkrat.png";
    }

    else if (junkratsrc === "empty_select3.png")
    {
      document.images.pos3.src = "./images/empty_select.png";
      junkratsrc = "junkrat.png";
    }

    else if (junkratsrc === "empty_select4.png")
    {
      document.images.pos4.src = "./images/empty_select.png";
      junkratsrc = "junkrat.png";
    }

    else if (junkratsrc === "empty_select5.png")
    {
      document.images.pos5.src = "./images/empty_select.png";
      junkratsrc = "junkrat.png";
    }
    checkEmptyState();
  }
}
