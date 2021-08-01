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
  222726, 240005, 257284, 274562, 291841, 309118, 326395, 343673, 360952,
  378231, 395507, 412786, 430064, 447343, 464620, 481896, 499173, 516446,
  533723, 551002, 568280, 585560, 602840, 620120, 637397, 654677, 671955,
  689234, 706513, 723767, 741045, 758317, 775596, 792875, 810155, 827434,
  844699, 861977, 879257, 896536, 913815, 931086, 947564, 964146, 981421,
  998694, 1015968, 1033178, 1050453, 1067726, 1085002, 1102278, 1119554,
  1136833, 1154089, 1171366, 1188644, 1205919, 1223193, 1240465, 1257742,
  1275015, 1292295, 1309565, 1326835, 1344111, 1361293, 1378571, 1395837,
  1412397, 1428813, 1445228, 1461643, 1478384, 1495644, 1512916, 1530194,
  1547472, 1564751, 1582029, 1599308, 1616585, 1633864, 1651136, 1668410,
  1685686, 1702961, 1720238, 1737511, 1754787, 1772066, 1789341, 1806619,
  1823897, 1841175, 1858450, 1875727, 1893003, 1910281, 1927554, 1944834,
  1962114, 1979393, 1996661, 2013938, 2031213, 2048492, 2065762, 2083033,
  2100303, 2117573, 2134843, 2152116, 2169387, 2186665, 2203936, 2221209,
  2238485, 2255759, 2273754, 2291028, 2308302, 2325580, 2342857, 2360134,
  2377411, 2394683, 2411958, 2429237, 2446514, 2463791, 2481067, 2498345,
  2515621, 2532896, 2550156, 2567436, 2584715, 2601994, 2619274, 2636553,
  2653831, 2670852, 2687413, 2703974, 2720926, 2738205, 2755484, 2772761,
  2790039, 2807306, 2824583, 2841862, 2859142, 2876422, 2893701, 2910977,
  2928257, 2945535, 2962811, 2980090, 2997369, 3014640, 3031919, 3049197,
  3066257, 3082599, 3099155, 3115713, 3132279, 3148865, 3165453, 3182041,
  3198629, 3215215, 3231803, 3248389, 3264978, 3281565, 3298153, 3314742,
  3331331, 3347917, 3364506, 3381093, 3397681, 3414275, 3430896, 3447173,
  3463173, 3478858, 3495267, 3512267, 3529547, 3546827, 3564107, 3581372,
  3598482, 3615171, 3632450, 3649726, 3667005, 3684284, 3701563, 3718842,
  3736120, 3753390, 3770666, 3787946, 3805223, 3822448, 3839726, 3857006,
  3874264, 3891543, 3908432, 3925016, 3941600, 3958187, 3974769, 3991358,
  4007466, 4023358, 4039255, 4055150, 4071092, 4088095, 4105132, 4122410,
  4139688, 4156968, 4174246, 4191524, 4208793, 4226070, 4243349, 4260626,
  4277905, 4295182, 4312444, 4329724, 4347003, 4364281, 4381558, 4398835,
  4416115, 4433370, 4450650, 4467929, 4485208, 4502486, 4519764, 4537040,
  4554317, 4571296, 4588249, 4605525, 4622805, 4640085, 4657358, 4674634,
  4691913, 4709186, 4726459, 4743733, 4761007, 4778281, 4795557, 4812832,
  4830105, 4847380, 4864649, 4881929, 4898486, 4915764, 4932662, 4949608,
  4966880, 4984154, 5001433, 5018712, 5035988, 5053239, 5070504, 5087782,
  5105061, 5122338, 5139612, 5156890, 5174166, 5191429, 5208702, 5225977,
  5243256, 5260531, 5277805, 5295069, 5312345, 5329622, 5346901, 5364178,
  5381457, 5398736, 5416015, 5433277, 5450551, 5467830, 5485110, 5502386,
  5519665, 5536945, 5554223, 5571502, 5588771, 5606050, 5623328, 5640607,
  5657884, 5675163, 5692443, 5709720, 5726998, 5744275, 5761549, 5778827,
  5796107, 5813385, 5830663, 5847940, 5865218, 5882497, 5899773, 5917048,
  5934325, 5951598, 5968875, 5986153, 6003429, 6020705, 6037977, 6055255,
  6072528, 6089806, 6107086, 6124362, 6141637, 6158915, 6176194, 6193471,
  6210751, 6228030, 6245308, 6262577, 6279841, 6297118, 6314393, 6331666,
  6348934, 6366206, 6383480, 6400759, 6418038, 6435314, 6452593, 6469870,
  6487141, 6504420, 6521694, 6538971, 6556250, 6573526, 6590806, 6608078,
  6625356, 6642626, 6659902, 6677180, 6694454, 6711727, 6728999, 6746269,
  6763539, 6780810, 6798065, 6815336, 6832607, 6849879, 6867148, 6884419,
  6901688, 6918960, 6936229, 6953499, 6970770, 6988033, 7005305, 7022579,
  7039848, 7057123, 7074392, 7091663, 7108902, 7126175, 7143450, 7160720,
  7177991, 7195260, 7212533, 7229807, 7247079, 7264346, 7281616, 7298889,
  7316159, 7333430, 7350703, 7367971, 7384864, 7401081, 7417743, 7434406,
  7451069, 7467728, 7484403, 7501080, 7517756, 7534432, 7567778, 7584409,
  7601084, 7617759, 7634437, 7651113, 7667791, 7684470, 7701148, 7717824,
  7734499, 7751174, 7767850, 7784528, 7801206, 7818063, 7834767, 7851471,
  7868175, 7884879, 7901275, 7917968, 7934672, 7951376, 7968080, 7984779,
  8001483, 8017907, 8034076, 8050215, 8066319, 8082475, 8098720, 8114854,
  8130977, 8146769, 8162330, 8177813, 8193070, 8208554, 8224038, 8239521,
  8255028, 8270661, 8287071, 8303718, 8320390, 8337062, 8353733, 8370305,
  8386983, 8403680, 8420340, 8437042, 8453746, 8471145, 8487846, 8504539,
  8521150, 8537838, 8554551, 8571250, 8587963, 8604665, 8621177, 8637591,
  8653723, 8669750, 8685664, 8701778, 8717937, 8734131, 8750329, 8766530,
  8782763, 8798998, 8815205, 8831424, 8847643, 8863865, 8880504, 8897049,
  8913478, 8929698, 8945869, 8961516, 8976985, 8992466, 9007814, 9023372,
  9038965, 9054587, 9070259, 9085769, 9101399, 9117365, 9133490, 9149614,
  9165766, 9181332, 9197001, 9212397, 9227978, 9243594, 9259245, 9274941,
  9290684, 9306272, 9321790, 9336884, 9351644, 9366383, 9381308, 9396738,
  9413407, 9430125, 9446843, 9463423, 9479930, 9496241, 9512516, 9528796,
  9545086, 9561378, 9577610, 9593859, 9610139, 9626390, 9642673, 9658901,
  9675007, 9691171, 9707352, 9723518, 9739766, 9756019, 9772400, 9789132,
  9806089, 9823241, 9840315, 9857474, 9874673, 9891839, 9908964, 9926191,
  9943422, 9960621, 9977551, 9994689, 10011905, 10029111, 10046163, 10063351,
  10080566, 10097677, 10114689, 10131688, 10148143, 10164462, 10180778,
  10197088, 10213562, 10230341, 10247134, 10263922, 10280708, 10297494,
  10314326, 10331595, 10348869, 10366136, 10383403, 10400670, 10417927,
  10435164, 10452419, 10469672, 10486940, 10504204, 10521471, 10538736,
  10555999, 10573262, 10590494, 10607760, 10625025, 10642284, 10659550,
  10676815, 10693929, 10711057, 10728325, 10745596, 10762862, 10780136,
  10797401, 10814674, 10831946, 10849221, 10866490, 10883758, 10901030,
  10918308, 10935548, 10952821, 10970090, 10987365, 11004640, 11021196,
  11038451, 11055725, 11072995, 11090267, 11107541, 11124805, 11142071,
  11159339, 11176602, 11193867, 11211144, 11228417, 11245687, 11262966,
  11280235, 11297510, 11314777, 11332039, 11349253, 11366108, 11382975,
  11399936, 11417212, 11434484, 11451727, 11468996, 11486264, 11503530,
  11520796, 11538062, 11555324, 11572590, 11589857, 11607119, 11624374,
  11641637, 11658884, 11676144, 11693400, 11710675, 11727954, 11745230,
  11762495, 11779760, 11797037, 11814311, 11831583, 11848860, 11866133,
  11883028, 11899115, 11915218, 11931943, 11949220, 11966499, 11983772,
  12001043, 12018313, 12035581, 12052858, 12070133, 12087407, 12104671,
  12121673, 12138612, 12155352, 12171841, 12187828, 12203512, 12219213,
  12235033, 12250329, 12265165, 12279750, 12293560, 12307086, 12320417,
  12333792, 12346379, 12358777, 12371395, 12384469, 12397894, 12411618,
  12425471, 12439823, 12454615, 12469028, 12484143, 12499456, 12515057,
  12530689, 12546369, 12562028, 12577442, 12592844, 12608711, 12625001,
  12641452, 12658004, 12675270, 12692525, 12709778, 12727035, 12744296,
  12761543, 12778798, 12796033, 12813266, 12830363, 12847184, 12864005,
  12880818, 12897872, 12915082, 12932288, 12949508, 12966724, 12983618,
  13000625, 13017856, 13034954, 13051799, 13068703, 13085962,
];

module.exports = { PUBLICKEYS, NETWORKS, BLOCKS };
