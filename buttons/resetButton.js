function resetButton()
{
  document.images.pos1.src = "./images/empty_select.png";
  document.images.pos2.src = "./images/empty_select.png";
  document.images.pos3.src = "./images/empty_select.png";
  document.images.pos4.src = "./images/empty_select.png";
  document.images.pos5.src = "./images/empty_select.png";

  setAllSuggestionsToBlank();


  //teamScore = [0 0 0 0 0 0 0 0 0];

  anasrc = "ana.png";
  bastionsrc = "bastion.png";
  dvasrc = "dva.png";
  genjisrc = "genji.png";
  hanzosrc = "hanzo.png";
  junkratsrc = "junkrat.png";
  luciosrc = "lucio.png";
  mccreesrc = "mccree.png";
  meisrc = "mei.png";
  mercysrc = "mercy.png";
  pharahsrc = "pharah.png";
  reapersrc = "reaper.png";
  reinsrc = "rein.png";
  roadhogsrc = "roadhog.png";
  soldiersrc = "soldier.png";
  symmetrasrc = "symmetra.png";
  torbjornsrc = "torbjorn.png";
  tracersrc = "tracer.png";
  widowsrc = "widow.png";
  winstonsrc = "winston.png";
  zaryasrc = "zarya.png";
  zenyattasrc = "zenyatta.png";

  setAllSuggestionsToBlank();
  currentTeamScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}
