var zaryasrc = "zarya.png";

function zaryaButton()
{
  if (zaryasrc === "zarya.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/zarya.png";
    zaryasrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, zaryaArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/zarya.png";
    zaryasrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, zaryaArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/zarya.png";
    zaryasrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, zaryaArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/zarya.png";
    zaryasrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, zaryaArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/zarya.png";
    zaryasrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, zaryaArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

  else
  {
    currentTeamScore = arrayNeg(currentTeamScore, zaryaArray);
    if (zaryasrc === "empty_select1.png")
    {
      document.images.pos1.src = "./images/empty_select.png";
      zaryasrc = "zarya.png";
    }

    else if (zaryasrc === "empty_select2.png")
    {
      document.images.pos2.src = "./images/empty_select.png";
      zaryasrc = "zarya.png";
    }

    else if (zaryasrc === "empty_select3.png")
    {
      document.images.pos3.src = "./images/empty_select.png";
      zaryasrc = "zarya.png";
    }

    else if (zaryasrc === "empty_select4.png")
    {
      document.images.pos4.src = "./images/empty_select.png";
      zaryasrc = "zarya.png";
    }

    else if (zaryasrc === "empty_select5.png")
    {
      document.images.pos5.src = "./images/empty_select.png";
      zaryasrc = "zarya.png";
    }
    checkEmptyState();
  }
}
