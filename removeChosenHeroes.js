//----------------------------------------------
//This function removes heroes that have already been selected from
//consideration for the best 6th hero choice. It checks each hero src variable
//and if the hero has been selected, it sets that hero's stats to 0 in the
// main hero array.
//----------------------------------------------

function removeChosenHeroes()
{
  if (anasrc !== "ana.png") // checks hero src
  {
    for (anacount=0;anacount<11; anacount++) //for loop sets 12 hero values to 0
    {heroes[anacount] = 0;}
  }
  if (bastionsrc !== "bastion.png")
  {
    for (bastcount=12;bastcount<23;bastcount++)
    {heroes[bastcount] = 0;}
  }
  if (dvasrc !== "dva.png")
  {
    for (dvacount=24;dvacount<35;dvacount++)
    {heroes[dvacount] = 0;}
  }
  if (genjisrc !== "genji.png")
  {
    for (genjicount=36;genjicount<47;genjicount++)
    {heroes[genjicount] = 0;}
  }
  if (hanzosrc !== "hanzo.png")
  {
    for (hanzocount=48;hanzocount<59;hanzocount++)
    {heroes[hanzocount] = 0;}
  }
  if (junkratsrc !== "junkrat.png")
  {
    for (junkratcount=60;junkratcount<71;junkratcount++)
    {heroes[junkratcount] = 0;}
  }
  if (luciosrc !== "lucio.png")
  {
    for (luciocount=72;luciocount<83;luciocount++)
    {heroes[luciocount]=0;}
  }
  if (mccreesrc !== "mccree.png")
  {
    for (mccreecount=84;mccreecount<95;mccreecount++)
    {heroes[mccreecount]=0;}
  }
  if (meisrc !== "mei.png")
  {
    for (meicount=96;meicount<107;meicount++)
    {heroes[meicount]=0;}
  }
  if (mercysrc !== "mercy.png")
  {
    for(mercycount=108;mercycount<119;mercycount++)
    {heroes[mercycount]=0;}
  }
  if (pharahsrc !== "pharah.png")
  {
    for(pharahcount=120;pharahcount<131;pharahcount++)
    {heroes[pharahcount]=0;}
  }
  if (reapersrc !== "reaper.png")
  {
    for(reapercount=132;reapercount<143;reapercount++)
    {heroes[reapercount]=0;}
  }
  if (reinsrc !== "rein.png")
  {
    for(reincount=144;reincount<155;reincount++)
    {heroes[reincount]=0;}
  }
  if (roadhogsrc !== "roadhog.png")
  {
    for(roadhogcount=156;roadhogcount<167;roadhogcount++)
    {heroes[roadhogcount]=0;}
  }
  if (soldiersrc !== "soldier.png")
  {
    for (soldiercount=168;soldiercount<179;soldiercount++)
    {heroes[soldiercount]=0;}
  }
  if (symmetrasrc !== "symmetra.png")
  {
    for(symmetracount=180;symmetracount<191;symmetracount++)
    {heroes[symmetracount]=0;}
  }
  if (torbjornsrc !== "torbjorn.png")
  {
    for(torbjorncount=192;torbjorncount<203;torbjorncount++)
    {heroes[torbjorncount]=0;}
  }
  if (tracersrc !== "tracer.png")
  {
    for(tracercount=204;tracercount<215;tracercount++)
    {heroes[tracercount]=0;}
  }
  if (widowsrc !== "widow.png")
  {
    for(widowcount=216;widowcount<227;widowcount++)
    {heroes[widowcount]=0;}
  }
  if (winstonsrc !== "winston.png")
  {
    for(winstoncount=228;winstoncount<239;winstoncount++)
    {heroes[winstoncount]=0;}
  }
  if (zaryasrc !== "zarya.png")
  {
    for(zaryacount=240;zaryacount<251;zaryacount++)
    {heroes[zaryacount]=0;}
  }
  if (zenyattasrc !== "zenyatta.png")
  {
    for(zenyattacount=252;zenyattacount<263;zenyattacount++)
    {heroes[zenyattacount]=0;}
  }
}
