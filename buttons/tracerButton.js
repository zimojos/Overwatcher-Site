var tracersrc = "tracer.png";

function tracerButton()
{
  if (tracersrc === "tracer.png")
  {
    if(document.images.pos1.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos1.src = "./images/tracer.png";
    tracersrc = "empty_select1.png";
    currentTeamScore = arraySum(currentTeamScore, tracerArray);
    }
    else if(document.images.pos2.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos2.src = "./images/tracer.png";
    tracersrc = "empty_select2.png";
    currentTeamScore = arraySum(currentTeamScore, tracerArray);
    }
    else if(document.images.pos3.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos3.src = "./images/tracer.png";
    tracersrc = "empty_select3.png";
    currentTeamScore = arraySum(currentTeamScore, tracerArray);
    }
    else if(document.images.pos4.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos4.src = "./images/tracer.png";
    tracersrc = "empty_select4.png";
    currentTeamScore = arraySum(currentTeamScore, tracerArray);
    }
    else if(document.images.pos5.getAttribute('src') === "./images/empty_select.png")
    {
    document.images.pos5.src = "./images/tracer.png";
    tracersrc = "empty_select5.png";
    currentTeamScore = arraySum(currentTeamScore, tracerArray);
    }
    else
    {
      alert("Team is full");
    }
    checkEmptyState();
  }

  else
  {
    currentTeamScore = arrayNeg(currentTeamScore, tracerArray);
    if (tracersrc === "empty_select1.png")
    {
      document.images.pos1.src = "./images/empty_select.png";
      tracersrc = "tracer.png";
    }

    else if (tracersrc === "empty_select2.png")
    {
      document.images.pos2.src = "./images/empty_select.png";
      tracersrc = "tracer.png";
    }

    else if (tracersrc === "empty_select3.png")
    {
      document.images.pos3.src = "./images/empty_select.png";
      tracersrc = "tracer.png";
    }

    else if (tracersrc === "empty_select4.png")
    {
      document.images.pos4.src = "./images/empty_select.png";
      tracersrc = "tracer.png";
    }

    else if (tracersrc === "empty_select5.png")
    {
      document.images.pos5.src = "./images/empty_select.png";
      tracersrc = "tracer.png";
    }
    checkEmptyState();
  }
}
