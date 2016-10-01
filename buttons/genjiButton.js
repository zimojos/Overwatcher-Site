var genjisrc = "genji.png";

function genjiButton()
{
  if (genjisrc === "genji.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/genji.png";
    genjisrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, genjiArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/genji.png";
    genjisrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, genjiArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/genji.png";
    genjisrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, genjiArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/genji.png";
    genjisrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, genjiArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/genji.png";
    genjisrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, genjiArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

else
{
    currentTeamScore = arrayNeg(currentTeamScore, genjiArray);
    if (genjisrc === "empty_select1.png")
    {
      document.images.pos1.src = "./images/empty_select.png";
      genjisrc = "genji.png";
    }

    else if (genjisrc === "empty_select2.png")
    {
      document.images.pos2.src = "./images/empty_select.png";
      genjisrc = "genji.png";
    }

    else if (genjisrc === "empty_select3.png")
    {
      document.images.pos3.src = "./images/empty_select.png";
      genjisrc = "genji.png";
    }

    else if (genjisrc === "empty_select4.png")
    {
      document.images.pos4.src = "./images/empty_select.png";
      genjisrc = "genji.png";
    }

    else if (genjisrc === "empty_select5.png")
    {
      document.images.pos5.src = "./images/empty_select.png";
      genjisrc = "genji.png";
    }
    checkEmptyState();
  }
}
