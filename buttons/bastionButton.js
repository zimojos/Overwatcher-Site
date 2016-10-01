var bastionsrc = "bastion.png";

function bastionButton()
{
  if (bastionsrc === "bastion.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/bastion.png";
    bastionsrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, bastionArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/bastion.png";
    bastionsrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, bastionArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/bastion.png";
    bastionsrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, bastionArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/bastion.png";
    bastionsrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, bastionArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/bastion.png";
    bastionsrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, bastionArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

  else
  {
    currentTeamScore = arrayNeg(currentTeamScore, bastionArray);
    if (bastionsrc === "empty_select1.png")
    {
      document.images.pos1.src = "./images/empty_select.png";
      bastionsrc = "bastion.png";
    }

    else if (bastionsrc === "empty_select2.png")
    {
      document.images.pos2.src = "./images/empty_select.png";
      bastionsrc = "bastion.png";
    }

    else if (bastionsrc === "empty_select3.png")
    {
      document.images.pos3.src = "./images/empty_select.png";
      bastionsrc = "bastion.png";
    }

    else if (bastionsrc === "empty_select4.png")
    {
      document.images.pos4.src = "./images/empty_select.png";
      bastionsrc = "bastion.png";
    }

    else if (bastionsrc === "empty_select5.png")
    {
      document.images.pos5.src = "./images/empty_select.png";
      bastionsrc = "bastion.png";
    }
    checkEmptyState();
  }
}
