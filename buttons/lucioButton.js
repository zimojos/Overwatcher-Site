var luciosrc = "lucio.png";

function lucioButton()
{
  if (luciosrc === "lucio.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/lucio.png";
    luciosrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, lucioArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/lucio.png";
    luciosrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, lucioArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/lucio.png";
    luciosrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, lucioArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/lucio.png";
    luciosrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, lucioArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/lucio.png";
    luciosrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, lucioArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

else
  {
    currentTeamScore = arrayNeg(currentTeamScore, lucioArray);
    if (luciosrc === "empty_select1.png")
    {
      document.images.pos1.src = "./images/empty_select.png";
      luciosrc = "lucio.png";
    }

    else if (luciosrc === "empty_select2.png")
    {
      document.images.pos2.src = "./images/empty_select.png";
      luciosrc = "lucio.png";
    }

    else if (luciosrc === "empty_select3.png")
    {
      document.images.pos3.src = "./images/empty_select.png";
      luciosrc = "lucio.png";
    }

    else if (luciosrc === "empty_select4.png")
    {
      document.images.pos4.src = "./images/empty_select.png";
      luciosrc = "lucio.png";
    }

    else if (luciosrc === "empty_select5.png")
    {
      document.images.pos5.src = "./images/empty_select.png";
      luciosrc = "lucio.png";
    }
    checkEmptyState();
  }
}
