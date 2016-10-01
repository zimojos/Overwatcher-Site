var hanzosrc = "hanzo.png";

function hanzoButton()
{
  if (hanzosrc === "hanzo.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/hanzo.png";
    hanzosrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, hanzoArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/hanzo.png";
    hanzosrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, hanzoArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/hanzo.png";
    hanzosrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, hanzoArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/hanzo.png";
    hanzosrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, hanzoArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/hanzo.png";
    hanzosrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, hanzoArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

  else
  {
    currentTeamScore = arrayNeg(currentTeamScore, hanzoArray);
    if (hanzosrc === "empty_select1.png")
    {
      document.images.pos1.src = "./images/empty_select.png";
      hanzosrc = "hanzo.png";
    }

    else if (hanzosrc === "empty_select2.png")
    {
      document.images.pos2.src = "./images/empty_select.png";
      hanzosrc = "hanzo.png";
    }

    else if (hanzosrc === "empty_select3.png")
    {
      document.images.pos3.src = "./images/empty_select.png";
      hanzosrc = "hanzo.png";
    }

    else if (hanzosrc === "empty_select4.png")
    {
      document.images.pos4.src = "./images/empty_select.png";
      hanzosrc = "hanzo.png";
    }

    else if (hanzosrc === "empty_select5.png")
    {
      document.images.pos5.src = "./images/empty_select.png";
      hanzosrc = "hanzo.png";
    }
    checkEmptyState();
  }
}
