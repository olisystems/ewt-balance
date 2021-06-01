const PUBLICKEYS = [
  "0x86a5A44CFf58638784c2028e7181CEDe57933321",
  "0x54809eA74BECdD734d2C4329729835ab39BB23F3",
  "0x5084Da4C19315883eaFCA786C14e045c6944459d",
];

// publickeys bindings
const NETWORKS = {
  "0x54809eA74BECdD734d2C4329729835ab39BB23F3": "TWL",
  "0x5084Da4C19315883eaFCA786C14e045c6944459d": "OLI_Cold",
  "0x86a5A44CFf58638784c2028e7181CEDe57933321": "OLI_Validator",
};

let BLOCKS = [
  12121673, 12104671, 12087407, 12070133, 12052858, 12035581, 12018313,
  12001043, 11983772, 11966499, 11949220, 11931943, 11899115, 11883028,
  11866133, 11848860, 11831583, 11814311, 11797037, 11779760, 11762495,
  11745230, 11727954, 11710675, 11693400, 11676144, 11658884, 11641637,
  11624374, 11607119, 11589857, 11572590, 11555324, 11538062, 11520796,
  11503530, 11486264, 11468996, 11451727, 11434484, 11417212, 11399936,
  11382975, 11366108, 11349253, 11332039, 11314777, 11297510, 11280235,
  11262966, 11245687, 11228417, 11211144, 11193867, 11176602, 11159339,
  11142071, 11124805, 11107541, 11090267, 11072995, 11055725, 11038451,
  11021196, 11004640, 10987365, 10970090, 10952821, 10935548, 10918308,
  10901030, 10883758, 10866490, 10849221, 10831946, 10814674, 10797401,
  10780136, 10762862, 10745596, 10728325, 10711057, 10693929, 10676815,
  10538736, 10063351, 9545086, 9054587, 8571250, 8066319, 7567778, 7039848,
  6504420, 5986153, 5450551, 4932662, 4398835, 3908432, 3381093, 2859142,
  2342857, 1806619, 1292295, 758317, 412786, 395507, 378231, 360952, 343673,
  326395, 309118, 291841, 274562, 257284, 240005, 222726,
];

module.exports = { PUBLICKEYS, NETWORKS, BLOCKS };
