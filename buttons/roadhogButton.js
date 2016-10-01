var roadhogsrc = "roadhog.png";

function roadhogButton()
{
  if (roadhogsrc === "roadhog.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/roadhog.png";
    roadhogsrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, roadhogArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/roadhog.png";
    roadhogsrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, roadhogArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/roadhog.png";
    roadhogsrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, roadhogArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/roadhog.png";
    roadhogsrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, roadhogArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/roadhog.png";
    roadhogsrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, roadhogArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

  else
  {
    currentTeamScore = arrayNeg(currentTeamScore, roadhogArray);
    if (roadhogsrc === "empty_select1.png")
    {
      document.images.pos1.src = "./images/empty_select.png";
      roadhogsrc = "roadhog.png";
    }

    else if (roadhogsrc === "empty_select2.png")
    {
      document.images.pos2.src = "./images/empty_select.png";
      roadhogsrc = "roadhog.png";
    }

    else if (roadhogsrc === "empty_select3.png")
    {
      document.images.pos3.src = "./images/empty_select.png";
      roadhogsrc = "roadhog.png";
    }

    else if (roadhogsrc === "empty_select4.png")
    {
      document.images.pos4.src = "./images/empty_select.png";
      roadhogsrc = "roadhog.png";
    }

    else if (roadhogsrc === "empty_select5.png")
    {
      document.images.pos5.src = "./images/empty_select.png";
      roadhogsrc = "roadhog.png";
    }
    checkEmptyState();
  }
}
