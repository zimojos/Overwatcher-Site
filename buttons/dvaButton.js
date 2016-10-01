var dvasrc = "dva.png";

function dvaButton()
{
  if (dvasrc === "dva.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/dva.png";
    dvasrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, dvaArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/dva.png";
    dvasrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, dvaArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/dva.png";
    dvasrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, dvaArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/dva.png";
    dvasrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, dvaArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/dva.png";
    dvasrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, dvaArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

  else
  {
    currentTeamScore = arrayNeg(currentTeamScore, dvaArray);
    if (dvasrc === "empty_select1.png")
    {
      document.images.pos1.src = "./images/empty_select.png";
      dvasrc = "dva.png";
    }

    else if (dvasrc === "empty_select2.png")
    {
      document.images.pos2.src = "./images/empty_select.png";
      dvasrc = "dva.png";
    }

    else if (dvasrc === "empty_select3.png")
    {
      document.images.pos3.src = "./images/empty_select.png";
      dvasrc = "dva.png";
    }

    else if (dvasrc === "empty_select4.png")
    {
      document.images.pos4.src = "./images/empty_select.png";
      dvasrc = "dva.png";
    }

    else if (dvasrc === "empty_select5.png")
    {
      document.images.pos5.src = "./images/empty_select.png";
      dvasrc = "dva.png";
    }
    checkEmptyState();
  }
}
