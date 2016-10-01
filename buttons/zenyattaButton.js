var zenyattasrc = "zenyatta.png";

function zenyattaButton()
{
  if (zenyattasrc === "zenyatta.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/zenyatta.png";
    zenyattasrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, zenyattaArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/zenyatta.png";
    zenyattasrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, zenyattaArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/zenyatta.png";
    zenyattasrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, zenyattaArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/zenyatta.png";
    zenyattasrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, zenyattaArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/zenyatta.png";
    zenyattasrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, zenyattaArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }
  else
  {
    currentTeamScore = arrayNeg(currentTeamScore, zenyattaArray);
    if (zenyattasrc === "empty_select1.png")
    {
      document.images.pos1.src = "./images/empty_select.png";
      zenyattasrc = "zenyatta.png";
    }

    else if (zenyattasrc === "empty_select2.png")
    {
      document.images.pos2.src = "./images/empty_select.png";
      zenyattasrc = "zenyatta.png";
    }

    else if (zenyattasrc === "empty_select3.png")
    {
      document.images.pos3.src = "./images/empty_select.png";
      zenyattasrc = "zenyatta.png";
    }

    else if (zenyattasrc === "empty_select4.png")
    {
      document.images.pos4.src = "./images/empty_select.png";
      zenyattasrc = "zenyatta.png";
    }

    else if (zenyattasrc === "empty_select5.png")
    {
      document.images.pos5.src = "./images/empty_select.png";
      zenyattasrc = "zenyatta.png";
    }
    checkEmptyState();
  }
}
