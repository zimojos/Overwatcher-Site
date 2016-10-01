var pharahsrc = "pharah.png";

function pharahButton()
{

  if (pharahsrc === "pharah.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/pharah.png";
    pharahsrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, pharahArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/pharah.png";
    pharahsrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, pharahArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/pharah.png";
    pharahsrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, pharahArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/pharah.png";
    pharahsrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, pharahArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/pharah.png";
    pharahsrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, pharahArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

  else
    {
      currentTeamScore = arrayNeg(currentTeamScore, pharahArray);
      if (pharahsrc === "empty_select1.png")
      {
        document.images.pos1.src = "./images/empty_select.png";
        pharahsrc = "pharah.png";
      }

      else if (pharahsrc === "empty_select2.png")
      {
        document.images.pos2.src = "./images/empty_select.png";
        pharahsrc = "pharah.png";
      }

      else if (pharahsrc === "empty_select3.png")
      {
        document.images.pos3.src = "./images/empty_select.png";
        pharahsrc = "pharah.png";
      }

      else if (pharahsrc === "empty_select4.png")
      {
        document.images.pos4.src = "./images/empty_select.png";
        pharahsrc = "pharah.png";
      }

      else if (pharahsrc === "empty_select5.png")
      {
        document.images.pos5.src = "./images/empty_select.png";
        pharahsrc = "pharah.png";
      }
      checkEmptyState();
    }
}
