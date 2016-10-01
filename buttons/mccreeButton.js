var mccreesrc = "mccree.png";

function mccreeButton()
{
  if (mccreesrc === "mccree.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/mccree.png";
    mccreesrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, mccreeArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/mccree.png";
    mccreesrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, mccreeArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/mccree.png";
    mccreesrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, mccreeArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/mccree.png";
    mccreesrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, mccreeArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/mccree.png";
    mccreesrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, mccreeArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

  else
  {
    currentTeamScore = arrayNeg(currentTeamScore, mccreeArray);
    if (mccreesrc === "empty_select1.png")
    {
      document.images.pos1.src = "./images/empty_select.png";
      mccreesrc = "mccree.png";
    }

    else if (mccreesrc === "empty_select2.png")
    {
      document.images.pos2.src = "./images/empty_select.png";
      mccreesrc = "mccree.png";
    }

    else if (mccreesrc === "empty_select3.png")
    {
      document.images.pos3.src = "./images/empty_select.png";
      mccreesrc = "mccree.png";
    }

    else if (mccreesrc === "empty_select4.png")
    {
      document.images.pos4.src = "./images/empty_select.png";
      mccreesrc = "mccree.png";
    }

    else if (mccreesrc === "empty_select5.png")
    {
      document.images.pos5.src = "./images/empty_select.png";
      mccreesrc = "mccree.png";
    }
    checkEmptyState();
  }

}
