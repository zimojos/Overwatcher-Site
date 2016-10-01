var anasrc = "ana.png";

function anaButton()
{
  if (anasrc === "ana.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/ana.png";
    anasrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, anaArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/ana.png";
    anasrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, anaArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/ana.png";
    anasrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, anaArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/ana.png";
    anasrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, anaArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/ana.png";
    anasrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, anaArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

  else
  {
    currentTeamScore = arrayNeg(currentTeamScore, anaArray);
    if (anasrc === "empty_select1.png")
    {
      document.images.pos1.src = "./images/empty_select.png";
      anasrc = "ana.png";
    }

    else if (anasrc === "empty_select2.png")
    {
      document.images.pos2.src = "./images/empty_select.png";
      anasrc = "ana.png";
    }

    else if (anasrc === "empty_select3.png")
    {
      document.images.pos3.src = "./images/empty_select.png";
      anasrc = "ana.png";
    }

    else if (anasrc === "empty_select4.png")
    {
      document.images.pos4.src = "./images/empty_select.png";
      anasrc = "ana.png";
    }

    else if (anasrc === "empty_select5.png")
    {
      document.images.pos5.src = "./images/empty_select.png";
      anasrc = "ana.png";
    }
    checkEmptyState();
  }
}
