
// LRDPS, MRDPS, SRDPS, MOB, THEAL, SHEAL, TSUPP, TNK, ACTL, SNIP, FLNK
var LRDPS = 0;
var MRDPS = 0;
var SRDPS = 0;
var MOB = 0;
var THEAL = 0;
var SHEAL = 0;
var TSUPP = 0;
var TNK = 0;
var ACTL = 0;
var SNIP = 0;
var FLNK = 0;
var LRDPSarray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var MRDPSarray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var SRDPSarray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var MOBarray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var THEALarray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var SHEALarray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var TSUPParray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var TANKarray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var ACTLarray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var SNIParray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var FLNKarray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var lackingArray = [LRDPS, MRDPS, SRDPS, MOB, THEAL, SHEAL, TSUPP, TNK, ACTL, SNIP, FLNK];
var LRDPSforward = 0;
var MRDPSforward = 0;
var SRDPSforward = 0;
var MOBforward = 0;
var THEALforward = 0;
var SHEALforward = 0;
var TSUPPforward = 0;
var TNKforward = 0;
var ACTLforward = 0;
var SNIPforward = 0;
var FLNKforward = 0;
var forwardArray = [0,0];
var anaCount = 0;
var bastionCount = 0;
var dvaCount = 0;
var genjiCount = 0;
var hanzoCount = 0;
var junkratCount = 0;
var lucioCount = 0;
var mccreeCount = 0;
var meiCount = 0;
var mercyCount = 0;
var pharahCount = 0;
var reaperCount = 0;
var reinCount = 0;
var roadhogCount = 0;
var soldierCount = 0;
var symmetraCount = 0;
var torbjornCount = 0;
var tracerCount = 0;
var widowCount = 0;
var winstonCount = 0;
var zaryaCount = 0;
var zenyattaCount = 0;
var countArray = [anaCount,bastionCount,dvaCount,genjiCount,hanzoCount,junkratCount,
lucioCount,mccreeCount,meiCount,mercyCount,pharahCount,reaperCount,reinCount,
roadhogCount,soldierCount,symmetraCount,torbjornCount,tracerCount,widowCount,
winstonCount,zaryaCount,zenyattaCount];

//CONTINUE ADDING HERO COUNTS

function checkEmptyState()
{
  if(
      document.getElementById("pos1").src !== "http://localhost:8080/images/empty_select.png" &&
      document.getElementById("pos2").src !== "http://localhost:8080/images/empty_select.png" &&
      document.getElementById("pos3").src !== "http://localhost:8080/images/empty_select.png" &&
      document.getElementById("pos4").src !== "http://localhost:8080/images/empty_select.png" &&
      document.getElementById("pos5").src !== "http://localhost:8080/images/empty_select.png"
    )
    {
    {
      if (currentTeamScore[0] <= 15)
      {
        document.getElementById("suggestion1").innerHTML = "The team is lacking long range DPS.";
        LRDPS = currentTeamScore[0];
        LRDPSarray = LRDPSCheck(LRDPS);
        LRDPSforward = 1;
        document.getElementById("heroSuggestText1").innerHTML = LRDPSarray;
      }
      else
      {
        document.getElementById("suggestion1").innerHTML = "<br>";
        document.getElementById("heroSuggestText1").innerHTML = "N/A";
        LRDPSforward = 0;
      }
    }
    {
      if (currentTeamScore[1] <= 15)
      {
        document.getElementById("suggestion2").innerHTML = "The team is lacking mid range DPS.";
        MRDPS = currentTeamScore[1];
        MRDPSarray = MRDPSCheck(MRDPS);
        MRDPSforward = 1;
        document.getElementById("heroSuggestText2").innerHTML = MRDPSarray;
      }
      else
      {
        document.getElementById("suggestion2").innerHTML = "<br>";
        document.getElementById("heroSuggestText2").innerHTML = "N/A";
        MRDPSforward = 0;
      }
    }
    {
      if (currentTeamScore[2] <= 15)
      {
        document.getElementById("suggestion3").innerHTML = "The team is lacking short range DPS.";
        SRDPS = currentTeamScore[2];
        SRDPSarray = SRDPSCheck(SRDPS);
        SRDPSforward = 1;
        document.getElementById("heroSuggestText3").innerHTML = SRDPSarray;
      }
      else
      {
        document.getElementById("suggestion3").innerHTML = "<br>";
        document.getElementById("heroSuggestText3").innerHTML = "N/A";
        SRDPSforward = 0;
      }
    }
    {
      if (currentTeamScore[3] <= 15)
      {
        document.getElementById("suggestion4").innerHTML = "The team is lacking mobility.";
        MOB = currentTeamScore[3];
        MOBarray = MOBCheck(MOB);
        MOBforward = 1;
        document.getElementById("heroSuggestText4").innerHTML = MOBarray;
      }
      else
      {
        document.getElementById("suggestion4").innerHTML = "<br>";
        document.getElementById("heroSuggestText4").innerHTML = "N/A";
        MOBforward = 0;
      }
    }
    {
      if (currentTeamScore[4] <= 15)
      {
        document.getElementById("suggestion5").innerHTML = "The team is lacking healing.";
        THEAL = currentTeamScore[4];
        THEALarray = THEALCheck(THEAL);
        THEALforward = 1;
        document.getElementById("heroSuggestText5").innerHTML = THEALarray;
      }
      else
      {
        document.getElementById("suggestion5").innerHTML = "<br>";
        document.getElementById("heroSuggestText5").innerHTML = "N/A";
        THEALforward = 0;
      }
    }
    {
      if (currentTeamScore[5] <= 15)
      {
        document.getElementById("suggestion6").innerHTML = "The team is lacking sustainability.";
        SHEAL = currentTeamScore[5];
        SHEALarray = SHEALCheck(SHEAL);
        SHEALforward = 1;
        document.getElementById("heroSuggestText6").innerHTML = SHEALarray;
      }
      else
      {
        document.getElementById("suggestion6").innerHTML = "<br>";
        document.getElementById("heroSuggestText6").innerHTML = "N/A";
        SHEALforward = 0;
      }
    }
    {
      if (currentTeamScore[6] <= 15)
      {
        document.getElementById("suggestion7").innerHTML = "The team is lacking synergy.";
        TSUPP = currentTeamScore[6];
        TSUPParray = TSUPPCheck(TSUPP);
        TSUPPforward = 1;
        document.getElementById("heroSuggestText7").innerHTML = TSUPParray;
      }
      else
      {
        document.getElementById("suggestion7").innerHTML = "<br>";
        document.getElementById("heroSuggestText7").innerHTML = "N/A";
        TSUPPforward = 0;
      }
    }
    {
      if (currentTeamScore[7] <= 15)
      {
        document.getElementById("suggestion8").innerHTML = "The team is lacking tankability.";
        TANK = currentTeamScore[7];
        TANKarray = TNKCheck(TANK);
        TANKforward = 1;
        document.getElementById("heroSuggestText8").innerHTML = TANKarray;
      }
      else
      {
        document.getElementById("suggestion8").innerHTML = "<br>";
        document.getElementById("heroSuggestText8").innerHTML = "N/A";
        TANKforward = 0;
      }
    }

    {
      if (currentTeamScore[8] <= 15)
      {
        document.getElementById("suggestion9").innerHTML = "The team is lacking area control.";
        ACTL = currentTeamScore[8];
        ACTLarray = ACTLCheck(ACTL);
        ACTLforward = 1;
        document.getElementById("heroSuggestText9").innerHTML = ACTLarray;
      }
      else
      {
        document.getElementById("suggestion9").innerHTML = "<br>";
        document.getElementById("heroSuggestText9").innerHTML = "N/A";
        ACTLforward = 0;
      }
    }

    {
      if (currentTeamScore[9] >= 15)
      {
        document.getElementById("suggestion10").innerHTML = "The team has too many snipers.";
        SNIP = currentTeamScore[9];
        SNIParray = SNIPCheck(SNIP);
        SNIPforward = 1;
        document.getElementById("heroSuggestText10").innerHTML = SNIParray;
      }
      else
      {
        document.getElementById("suggestion10").innerHTML = "<br>";
        document.getElementById("heroSuggestText10").innerHTML = "N/A";
        SNIPforward = 0;
      }
    }

    {
      if (currentTeamScore[10] >= 15)
      {
        document.getElementById("suggestion11").innerHTML = "The team has too many flankers.";
        FLNK = currentTeamScore[10];
        FLNKarray = FLNKCheck(FLNK);
        FLNKforward = 1;
        document.getElementById("heroSuggestText11").innerHTML = FLNKarray;
      }
      else
      {
        document.getElementById("suggestion11").innerHTML = "<br>";
        document.getElementById("heroSuggestText11").innerHTML = "N/A";
        FLNKforward = 0;
      }
    }

    if (LRDPSforward === 1)
    {
      forwardArray = forwardArray.concat(LRDPSarray);
    }
    if (MRDPSforward === 1)
    {
      forwardArray = forwardArray.concat(MRDPSarray);
    }
    if (SRDPSforward === 1)
    {
      forwardArray = forwardArray.concat(SRDPSarray);
    }
    if (MOBforward === 1)
    {
      forwardArray = forwardArray.concat(MOBarray);
    }
    if (THEALforward === 1)
    {
      forwardArray = forwardArray.concat(THEALarray);
    }
    if (SHEALforward === 1)
    {
      forwardArray = forwardArray.concat(SHEALarray);
    }
    if (TSUPPforward === 1)
    {
      forwardArray = forwardArray.concat(TSUPParray);
    }
    if (TNKforward === 1)
    {
      forwardArray = forwardArray.concat(TNKarray);
    }
    if (ACTLforward === 1)
    {
      forwardArray = forwardArray.concat(ACTLarray);
    }
    if (SNIPforward === 1)
    {
      forwardArray = forwardArray.concat(SNIParray);
    }
    if (FLNKforward === 1)
    {
      forwardArray = forwardArray.concat(FLNKarray);
    }

    for(u = 0; u<forwardArray.length; u++)
    {

    if (forwardArray[u] === "ana")
    {
      if(document.getElementById("pos1").src === "http://localhost:8080/images/Ana.png" ||
          document.getElementById("pos2").src === "http://localhost:8080/images/Ana.png" ||
          document.getElementById("pos3").src === "http://localhost:8080/images/Ana.png" ||
          document.getElementById("pos4").src === "http://localhost:8080/images/Ana.png" ||
          document.getElementById("pos5").src === "http://localhost:8080/images/Ana.png")
          {
            anaCount = 0;
          }
      else {
        anaCount = anaCount + 1;
      }
    }

    if (forwardArray[u] === "bastion")
    {
      if(document.getElementById("pos1").src === "http://localhost:8080/images/Bastion.png" ||
          document.getElementById("pos2").src === "http://localhost:8080/images/Bastion.png" ||
          document.getElementById("pos3").src === "http://localhost:8080/images/Bastion.png" ||
          document.getElementById("pos4").src === "http://localhost:8080/images/Bastion.png" ||
          document.getElementById("pos5").src === "http://localhost:8080/images/Bastion.png")
          {
            bastionCount = 0;
          }
      else {
        bastionCount = bastionCount + 1;
      }
    }

    if (forwardArray[u] === "dva")
    {
      if(document.getElementById("pos1").src === "http://localhost:8080/images/Dva.png" ||
        document.getElementById("pos2").src === "http://localhost:8080/images/Dva.png" ||
        document.getElementById("pos3").src === "http://localhost:8080/images/Dva.png" ||
        document.getElementById("pos4").src === "http://localhost:8080/images/Dva.png" ||
        document.getElementById("pos5").src === "http://localhost:8080/images/Dva.png")
        {
          dvaCount = 0;
        }
        else {
          dvaCount = dvaCount + 1;
        }
      }

    if (forwardArray[u] === "genji")
    {
      if(
      document.getElementById("pos1").src === "http://localhost:8080/images/Genji.png" ||
      document.getElementById("pos2").src === "http://localhost:8080/images/Genji.png" ||
      document.getElementById("pos3").src === "http://localhost:8080/images/Genji.png" ||
      document.getElementById("pos4").src === "http://localhost:8080/images/Genji.png" ||
      document.getElementById("pos5").src === "http://localhost:8080/images/Genjipng")
      {
        genjiCount = 0;
      }
      else {
        genjiCount = genjiCount + 1;
      }
    }

    if (forwardArray[u] === "hanzo")
    {
      if(
        document.getElementById("pos1").src === "http://localhost:8080/images/Hanzo.png" ||
        document.getElementById("pos2").src === "http://localhost:8080/images/Hanzo.png" ||
        document.getElementById("pos3").src === "http://localhost:8080/images/Hanzo.png" ||
        document.getElementById("pos4").src === "http://localhost:8080/images/Hanzo.png" ||
        document.getElementById("pos5").src === "http://localhost:8080/images/Hanzo.png")
        {
          hanzoCount = 0;
        }
        else{
          hanzoCount = hanzoCount + 1;
        }
      }

    if (forwardArray[u] === "junkrat")
    {
      if(
        document.getElementById("pos1").src === "http://localhost:8080/images/junkrat.png" ||
        document.getElementById("pos2").src === "http://localhost:8080/images/junkrat.png" ||
        document.getElementById("pos3").src === "http://localhost:8080/images/junkrat.png" ||
        document.getElementById("pos4").src === "http://localhost:8080/images/junkrat.png" ||
        document.getElementById("pos5").src === "http://localhost:8080/images/junkrat.png")
        {
          junkratCount = 0;
        }
        else {
          junkratCount = junkratCount + 1;
        }
      }

    if (forwardArray[u] === "lucio")
    {
      if(
        document.getElementById("pos1").src === "http://localhost:8080/images/lucio.png" ||
        document.getElementById("pos2").src === "http://localhost:8080/images/lucio.png" ||
        document.getElementById("pos3").src === "http://localhost:8080/images/lucio.png" ||
        document.getElementById("pos4").src === "http://localhost:8080/images/lucio.png" ||
        document.getElementById("pos5").src === "http://localhost:8080/images/lucio.png")
        {
          lucioCount = 0;
        }
        else {
          lucioCount = lucioCount + 1;
        }
      }

    if (forwardArray[u] === "mccree")
    {
      if(document.getElementById("pos1").src === "http://localhost:8080/images/mccree.png" ||
      document.getElementById("pos2").src === "http://localhost:8080/images/mccree.png" ||
      document.getElementById("pos3").src === "http://localhost:8080/images/mccree.png" ||
      document.getElementById("pos4").src === "http://localhost:8080/images/mccree.png" ||
      document.getElementById("pos5").src === "http://localhost:8080/images/mccree.png")
      {
        mccreeCount = 0;
      }
      else {
        mccreeCount = mccreeCount + 1;
      }
    }

    if (forwardArray[u] === "mei")
    {
      if (
        document.getElementById("pos1").src === "http://localhost:8080/images/mei.png" ||
        document.getElementById("pos2").src === "http://localhost:8080/images/mei.png" ||
        document.getElementById("pos3").src === "http://localhost:8080/images/mei.png" ||
        document.getElementById("pos4").src === "http://localhost:8080/images/mei.png" ||
        document.getElementById("pos5").src === "http://localhost:8080/images/mei.png")
        {
          meiCount = 0;
        }
      else {
        meiCount = meiCount + 1;
      }
    }

    if (forwardArray[u] === "mercy")
    {
      if(document.getElementById("pos1").src === "http://localhost:8080/images/mercy.png" ||
        document.getElementById("pos2").src === "http://localhost:8080/images/mercy.png" ||
        document.getElementById("pos3").src === "http://localhost:8080/images/mercy.png" ||
        document.getElementById("pos4").src === "http://localhost:8080/images/mercy.png" ||
        document.getElementById("pos5").src === "http://localhost:8080/images/mercy.png")
        {
          mercyCount = 0;
        }
      else {
        mercyCount = mercyCount+1;
      }
    }

    if (forwardArray[u] === "pharah")
    {
      if(document.getElementById("pos1").src === "http://localhost:8080/images/pharah.png" ||
    document.getElementById("pos2").src === "http://localhost:8080/images/pharah.png" ||
    document.getElementById("pos3").src === "http://localhost:8080/images/pharah.png" ||
    document.getElementById("pos4").src === "http://localhost:8080/images/pharah.png" ||
    document.getElementById("pos5").src === "http://localhost:8080/images/pharah.png")
    {
      pharahCount = 0;
    }
    else {
      pharahCount = pharahCount+1;
    }
    }

    if (forwardArray[u] === "reaper")
    {
      if(
    document.getElementById("pos1").src === "http://localhost:8080/images/reaper.png" ||
    document.getElementById("pos2").src === "http://localhost:8080/images/reaper.png" ||
    document.getElementById("pos3").src === "http://localhost:8080/images/reaper.png" ||
    document.getElementById("pos4").src === "http://localhost:8080/images/reaper.png" ||
    document.getElementById("pos5").src === "http://localhost:8080/images/reaper.png")
      {
        reaperCount = 0;
      }
      else {
        reaperCount = reaperCount + 1;
      }
    }

    if (forwardArray[u] === "rein")
    {
      if(
    document.getElementById("pos1").src === "http://localhost:8080/images/rein.png" ||
    document.getElementById("pos2").src === "http://localhost:8080/images/rein.png" ||
    document.getElementById("pos3").src === "http://localhost:8080/images/rein.png" ||
    document.getElementById("pos4").src === "http://localhost:8080/images/rein.png" ||
    document.getElementById("pos5").src === "http://localhost:8080/images/rein.png")
    {
      reinCount = 0;
    }
    else {
      reinCount = reinCount + 1;
    }
    }

    if (forwardArray[u] === "roadhog")
    {
    if(
    document.getElementById("pos1").src === "http://localhost:8080/images/roadhog.png" ||
    document.getElementById("pos2").src === "http://localhost:8080/images/roadhog.png" ||
    document.getElementById("pos3").src === "http://localhost:8080/images/roadhog.png" ||
    document.getElementById("pos4").src === "http://localhost:8080/images/roadhog.png" ||
    document.getElementById("pos5").src === "http://localhost:8080/images/roadhog.png")
    {
      roadhogCount = 0;
    }
    else {
      roadhogCount = roadhogCount+1;
    }
    }

    if (forwardArray[u] === "soldier")
    {
      if(
    document.getElementById("pos1").src === "http://localhost:8080/images/soldier.png" ||
    document.getElementById("pos2").src === "http://localhost:8080/images/soldier.png" ||
    document.getElementById("pos3").src === "http://localhost:8080/images/soldier.png" ||
    document.getElementById("pos4").src === "http://localhost:8080/images/soldier.png" ||
    document.getElementById("pos5").src === "http://localhost:8080/images/soldier.png")
    {
      soldierCount = 0;
    }
    else {
      soldierCount = soldierCount + 1;
    }
    }

    if (forwardArray[u] === "symmetra")
    {
      if(
    document.getElementById("pos1").src === "http://localhost:8080/images/symmetra.png" ||
    document.getElementById("pos2").src === "http://localhost:8080/images/symmetra.png" ||
    document.getElementById("pos3").src === "http://localhost:8080/images/symmetra.png" ||
    document.getElementById("pos4").src === "http://localhost:8080/images/symmetra.png" ||
    document.getElementById("pos5").src === "http://localhost:8080/images/symmetra.png")
      {
        symmetraCount = 0;
      }
      else {
        symmetraCount = symmetraCount + 1;
      }
    }

    if (forwardArray[u] === "torbjorn")
    {
      if(
    document.getElementById("pos1").src === "http://localhost:8080/images/torbjorn.png" ||
    document.getElementById("pos2").src === "http://localhost:8080/images/torbjorn.png" ||
    document.getElementById("pos3").src === "http://localhost:8080/images/torbjorn.png" ||
    document.getElementById("pos4").src === "http://localhost:8080/images/torbjorn.png" ||
    document.getElementById("pos5").src === "http://localhost:8080/images/torbjorn.png")
      {
        torbjornCount = 0;
      }
      else {
        torbjornCount = torbjornCount + 1;
      }
    }

    if (forwardArray[u] === "tracer")
    {
      if(
    document.getElementById("pos1").src === "http://localhost:8080/images/tracer.png" ||
    document.getElementById("pos2").src === "http://localhost:8080/images/tracer.png" ||
    document.getElementById("pos3").src === "http://localhost:8080/images/tracer.png" ||
    document.getElementById("pos4").src === "http://localhost:8080/images/tracer.png" ||
    document.getElementById("pos5").src === "http://localhost:8080/images/tracer.png")
      {
        tracerCount = 0;
      }
      else {
        tracerCount = tracerCount + 1;
      }
    }

    if (forwardArray[u] === "widow")
    {
      if(
        document.getElementById("pos1").src === "http://localhost:8080/images/widow.png" ||
        document.getElementById("pos2").src === "http://localhost:8080/images/widow.png" ||
        document.getElementById("pos3").src === "http://localhost:8080/images/widow.png" ||
        document.getElementById("pos4").src === "http://localhost:8080/images/widow.png" ||
        document.getElementById("pos5").src === "http://localhost:8080/images/widow.png")
        {
          widowCount = 0;
        }
        else {
          widowCount = widowCount + 1;
        }
      }

    if (forwardArray[u] === "winston")
    {
      if(document.getElementById("pos1").src === "http://localhost:8080/images/winston.png" ||
        document.getElementById("pos2").src === "http://localhost:8080/images/winston.png" ||
        document.getElementById("pos3").src === "http://localhost:8080/images/winston.png" ||
        document.getElementById("pos4").src === "http://localhost:8080/images/winston.png" ||
        document.getElementById("pos5").src === "http://localhost:8080/images/winston.png")
        {
          winstonCount = 0;
        }
      else {
        winstonCount = winstonCount + 1;
      }
    }

    if (forwardArray[u] === "zarya")
    {
      if(
    document.getElementById("pos1").src === "http://localhost:8080/images/zarya.png" ||
    document.getElementById("pos2").src === "http://localhost:8080/images/zarya.png" ||
    document.getElementById("pos3").src === "http://localhost:8080/images/zarya.png" ||
    document.getElementById("pos4").src === "http://localhost:8080/images/zarya.png" ||
    document.getElementById("pos5").src === "http://localhost:8080/images/zarya.png")
      {
        zaryaCount = 0;
      }
      else {
        zaryaCount = zaryaCount + 1;
      }
    }

    if (forwardArray[u] === "zenyatta")
    {
      if(document.getElementById("pos1").src === "http://localhost:8080/images/zenyatta.png" ||
        document.getElementById("pos2").src === "http://localhost:8080/images/zenyatta.png" ||
        document.getElementById("pos3").src === "http://localhost:8080/images/zenyatta.png" ||
        document.getElementById("pos4").src === "http://localhost:8080/images/zenyatta.png" ||
        document.getElementById("pos5").src === "http://localhost:8080/images/zenyatta.png")
        {
          zenyattaCount = 0;
        }
        else {
          zenyattaCount = zenyattaCount + 1;
        }
    }
  }

    countArray = [anaCount,bastionCount,dvaCount,genjiCount,hanzoCount,junkratCount,
    lucioCount,mccreeCount,meiCount,mercyCount,pharahCount,reaperCount,reinCount,
    roadhogCount,soldierCount,symmetraCount,torbjornCount,tracerCount,widowCount,
    winstonCount,zaryaCount,zenyattaCount];
    largest = indexofLargest(countArray);

    console.log(largest);
    console.log(countArray);
    if (largest === 0)
    {
      document.images.heroSuggest.src="./images/Ana.png";
    }
    else if (largest === 1)
    {
      document.images.heroSuggest.src="./images/Bastion.png";
    }
    else if (largest === 2)
    {
      document.images.heroSuggest.src="./images/Dva.png";
    }
    else if (largest === 3)
    {
      document.images.heroSuggest.src="./images/Genji.png";
    }
    else if (largest === 4)
    {
      document.images.heroSuggest.src="./images/Hanzo.png";
    }
    else if (largest === 5)
    {
      document.images.heroSuggest.src="./images/Junkrat.png";
    }
    else if (largest === 6)
    {
      document.images.heroSuggest.src="./images/Lucio.png";
    }
    else if (largest === 7)
    {
      document.images.heroSuggest.src="./images/Mccree.png";
    }
    else if (largest === 8)
    {
      document.images.heroSuggest.src="./images/Mei.png";
    }
    else if (largest === 9)
    {
      document.images.heroSuggest.src="./images/Mercy.png";
    }
    else if (largest === 10)
    {
      document.images.heroSuggest.src="./images/Pharah.png";
    }
    else if (largest === 11)
    {
      document.images.heroSuggest.src="./images/Reaper.png";
    }
    else if (largest === 12)
    {
      document.images.heroSuggest.src="./images/Rein.png";
    }
    else if (largest === 13)
    {
      document.images.heroSuggest.src="./images/Roadhog.png";
    }
    else if (largest === 14)
    {
      document.images.heroSuggest.src="./images/Soldier.png";
    }
    else if (largest === 15)
    {
      document.images.heroSuggest.src="./images/Symmetra.png";
    }
    else if (largest === 16)
    {
      document.images.heroSuggest.src="./images/Torbjorn.png";
    }
    else if (largest === 17)
    {
      document.images.heroSuggest.src="./images/Tracer.png";
    }
    else if (largest === 18)
    {
      document.images.heroSuggest.src="./images/Widow.png";
    }
    else if (largest === 19)
    {
      document.images.heroSuggest.src="./images/Winston.png";
    }
    else if (largest === 20)
    {
      document.images.heroSuggest.src="./images/Zarya.png";
    }
    else if (largest === 21)
    {
      document.images.heroSuggest.src="./images/Zenyatta.png";
    }
  }

else
{
  document.getElementById("suggestion1").innerHTML ="<br>";
  document.getElementById("suggestion2").innerHTML ="<br>";
  document.getElementById("suggestion3").innerHTML ="<br>";
  document.getElementById("suggestion4").innerHTML ="<br>";
  document.getElementById("suggestion5").innerHTML ="<br>";
  document.getElementById("suggestion6").innerHTML ="<br>";
  document.getElementById("suggestion7").innerHTML ="<br>";
  document.getElementById("suggestion8").innerHTML ="<br>";
  document.getElementById("suggestion9").innerHTML ="<br>";
  document.getElementById("suggestion10").innerHTML ="<br>";
  document.getElementById("suggestion11").innerHTML ="<br>";
}
}
