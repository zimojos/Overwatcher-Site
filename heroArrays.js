// LRDPS, MRDPS, SRDPS, MOB, THEAL, SHEAL, TSUPP, TANK, ACTL, SNIP, FLNK
var anaArray = [1, 1, 1, 0, 2, 1, 2, 0, 0, 2, 0, "ana"];
var bastionArray = [1, 1, 1, 0, 0, 1, 0, 0, 2, 0, 0, "bastion"];
var dvaArray = [0, 1, 1, 2, 0, 1, 2, 1, 1, 0, 2, "dva"];
var genjiArray = [2, 1, 1, 2, 0, 0, 0, 0, 0, 0, 2, "genji"];
var hanzoArray = [1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, "hanzo"];
var junkratArray = [1, 2, 1, 2, 0, 0, 0, 0, 2, 0, 1, "junkrat"];
var lucioArray = [0, 0, 1, 2, 2, 2, 2, 0, 0, 0, 0, "lucio"];
var mccreeArray = [2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 1, "mccree"];
var meiArray = [0, 1, 1, 0, 0, 2, 0, 0, 2, 0, 0, "mei"];
var mercyArray = [0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 1, "mercy"];
var pharahArray = [2, 2, 1, 2, 0, 0, 0, 0, 1, 0, 2, "pharah"];
var reaperArray = [0, 1, 2, 2, 0, 1, 0, 0, 0, 0, 2, "reaper"];
var reinArray = [0, 0, 2, 1, 0, 0, 2, 1, 1, 0, 0, "rein"];
var roadhogArray = [0, 1, 2, 0, 0, 2, 0, 1, 0, 0, 0, "roadhog"];
var soldierArray = [2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 1, "soldier"];
var symmetraArray = [0, 1, 1, 0, 0, 1, 2, 0, 2, 0, 0, "symmetra"];
var torbjornArray = [1, 1, 1, 0, 0, 0, 1, 0, 2, 0, 0, "torbjorn"];
var tracerArray = [0, 0, 2, 2, 0, 1, 0, 0, 0, 0, 2, "tracer"];
var widowArray = [0, 0, 2, 1, 0, 0, 1, 0, 1, 1, 0, "widow"];
var winstonArray = [0, 1, 1, 2, 0, 0, 1, 1, 1, 0, 2, "winston"];
var zaryaArray = [0, 2, 1, 0, 0, 1, 1, 1, 0, 0, 0, "zarya"];
var zenyattaArray = [1, 1, 1, 0, 2, 1, 2, 0, 0, 0, 0, "zenyatta"];

var currentTeamScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var heroes = anaArray.concat(bastionArray,dvaArray,genjiArray,hanzoArray,junkratArray,lucioArray,mccreeArray,meiArray,mercyArray,pharahArray,
reaperArray,reinArray,roadhogArray,soldierArray,symmetraArray,torbjornArray,tracerArray,widowArray,winstonArray,zaryaArray,zenyattaArray);

var attributeTriggers = [4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 4];
