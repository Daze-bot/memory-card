const champions = [
  {
    name: 'aatrox',
    id: 0,
  },
  {
    name: 'ahri',
    id: 1,
  },
  {
    name: 'akali',
    id: 2,
  },
  {
    name: 'akshan',
    id: 3,
  },
  {
    name: 'alistar',
    id: 4,
  },
  {
    name: 'amumu',
    id: 5,
  },
  {
    name: 'anivia',
    id: 6,
  },
  {
    name: 'annie',
    id: 7,
  },
  {
    name: 'aphelios',
    id: 8,
  },
  {
    name: 'ashe',
    id: 9,
  },
  {
    name: 'aurelion sol',
    id: 10,
  },
  {
    name: 'azir',
    id: 11,
  },
  {
    name: 'bard',
    id: 12,
  },
  {
    name: "bel'veth",
    id: 13,
  },
  {
    name: 'blitzcrank',
    id: 14,
  },
  {
    name: 'brand',
    id: 15,
  },
  {
    name: 'braum',
    id: 16,
  },
  {
    name: 'caitlyn',
    id: 17,
  },
  {
    name: 'camille',
    id: 18,
  },
  {
    name: 'cassiopeia',
    id: 19,
  },
  {
    name: "cho'gath",
    id: 20,
  },
  {
    name: 'corki',
    id: 21,
  },
  {
    name: 'darius',
    id: 22,
  },
  {
    name: 'diana',
    id: 23,
  },
  {
    name: 'draven',
    id: 24,
  },
  {
    name: 'dr. mundo',
    id: 25,
  },
  {
    name: 'ekko',
    id: 26,
  },
  {
    name: 'elise',
    id: 27,
  },
  {
    name: 'evelynn',
    id: 28,
  },
  {
    name: 'ezreal',
    id: 29,
  },
  {
    name: 'fiddlesticks',
    id: 30,
  },
  {
    name: 'fiora',
    id: 31,
  },
  {
    name: 'fizz',
    id: 32,
  },
  {
    name: 'galio',
    id: 33,
  },
  {
    name: 'gangplank',
    id: 34,
  },
  {
    name: 'garen',
    id: 35,
  },
  {
    name: 'gnar',
    id: 36,
  },
  {
    name: 'gragas',
    id: 37,
  },
  {
    name: 'graves',
    id: 38,
  },
  {
    name: 'gwen',
    id: 39,
  },
  {
    name: 'hecarim',
    id: 40,
  },
  {
    name: 'heimerdinger',
    id: 41,
  },
  {
    name: 'illaoi',
    id: 42,
  },
  {
    name: 'irelia',
    id: 43,
  },
  {
    name: 'ivern',
    id: 44,
  },
  {
    name: 'janna',
    id: 45,
  },
  {
    name: 'jarvan iv',
    id: 46,
  },
  {
    name: 'jax',
    id: 47,
  },
  {
    name: 'jayce',
    id: 48,
  },
  {
    name: 'jhin',
    id: 49,
  },
  {
    name: 'jinx',
    id: 50,
  },
  {
    name: "kai'sa",
    id: 51,
  },
  {
    name: 'kalista',
    id: 52,
  },
  {
    name: 'karma',
    id: 53,
  },
  {
    name: 'karthus',
    id: 54,
  },
  {
    name: 'kassadin',
    id: 55,
  },
  {
    name: 'katarina',
    id: 56,
  },
  {
    name: 'kayle',
    id: 57,
  },
  {
    name: 'kayn',
    id: 58,
  },
  {
    name: 'kennen',
    id: 59,
  },
  {
    name: "kha'zix",
    id: 60,
  },
  {
    name: 'kindred',
    id: 61,
  },
  {
    name: 'kled',
    id: 62,
  },
  {
    name: "kog'maw",
    id: 63,
  },
  {
    name: "k'sante",
    id: 64,
  },
  {
    name: 'leblanc',
    id: 65,
  },
  {
    name: 'lee sin',
    id: 66,
  },
  {
    name: 'leona',
    id: 67,
  },
  {
    name: 'lillia',
    id: 68,
  },
  {
    name: 'lissandra',
    id: 69,
  },
  {
    name: 'lucian',
    id: 70,
  },
  {
    name: 'lulu',
    id: 71,
  },
  {
    name: 'lux',
    id: 72,
  },
  {
    name: 'malphite',
    id: 73,
  },
  {
    name: 'malzahar',
    id: 74,
  },
  {
    name: 'maokai',
    id: 75,
  },
  {
    name: 'master yi',
    id: 76,
  },
  {
    name: 'miss fortune',
    id: 77,
  },
  {
    name: 'mordekaiser',
    id: 78,
  },
  {
    name: 'morgana',
    id: 79,
  },
  {
    name: 'nami',
    id: 80,
  },
  {
    name: 'nasus',
    id: 81,
  },
  {
    name: 'nautilus',
    id: 82,
  },
  {
    name: 'neeko',
    id: 83,
  },
  {
    name: 'nidalee',
    id: 84,
  },
  {
    name: 'nilah',
    id: 85,
  },
  {
    name: 'nocturne',
    id: 86,
  },
  {
    name: 'nunu',
    id: 87,
  },
  {
    name: 'olaf',
    id: 88,
  },
  {
    name: 'orianna',
    id: 89,
  },
  {
    name: 'ornn',
    id: 90,
  },
  {
    name: 'pantheon',
    id: 91,
  },
  {
    name: 'poppy',
    id: 92,
  },
  {
    name: 'pyke',
    id: 93,
  },
  {
    name: 'qiyana',
    id: 94,
  },
  {
    name: 'quinn',
    id: 95,
  },
  {
    name: 'rakan',
    id: 96,
  },
  {
    name: 'rammus',
    id: 97,
  },
  {
    name: "rek'sai",
    id: 98,
  },
  {
    name: 'rell',
    id: 99,
  },
  {
    name: 'renata glasc',
    id: 100,
  },
  {
    name: 'renekton',
    id: 101,
  },
  {
    name: 'rengar',
    id: 102,
  },
  {
    name: 'riven',
    id: 103,
  },
  {
    name: 'rumble',
    id: 104,
  },
  {
    name: 'ryze',
    id: 105,
  },
  {
    name: 'samira',
    id: 106,
  },
  {
    name: 'sejuani',
    id: 107,
  },
  {
    name: 'senna',
    id: 108,
  },
  {
    name: 'seraphine',
    id: 109,
  },
  {
    name: 'sett',
    id: 110,
  },
  {
    name: 'shaco',
    id: 111,
  },
  {
    name: 'shen',
    id: 112,
  },
  {
    name: 'shyvana',
    id: 113,
  },
  {
    name: 'singed',
    id: 114,
  },
  {
    name: 'sion',
    id: 115,
  },
  {
    name: 'sivir',
    id: 116,
  },
  {
    name: 'skarner',
    id: 117,
  },
  {
    name: 'sona',
    id: 118,
  },
  {
    name: 'soraka',
    id: 119,
  },
  {
    name: 'swain',
    id: 120,
  },
  {
    name: 'sylas',
    id: 121,
  },
  {
    name: 'syndra',
    id: 122,
  },
  {
    name: 'tahm kench',
    id: 123,
  },
  {
    name: 'taliyah',
    id: 124,
  },
  {
    name: 'talon',
    id: 125,
  },
  {
    name: 'taric',
    id: 126,
  },
  {
    name: 'teemo',
    id: 127,
  },
  {
    name: 'thresh',
    id: 128,
  },
  {
    name: 'tristana',
    id: 129,
  },
  {
    name: 'trundle',
    id: 130,
  },
  {
    name: 'tryndamere',
    id: 131,
  },
  {
    name: 'twisted fate',
    id: 132,
  },
  {
    name: 'twitch',
    id: 133,
  },
  {
    name: 'udyr',
    id: 134,
  },
  {
    name: 'urgot',
    id: 135,
  },
  {
    name: 'varus',
    id: 136,
  },
  {
    name: 'vayne',
    id: 137,
  },
  {
    name: 'veigar',
    id: 138,
  },
  {
    name: "vel'koz",
    id: 139,
  },
  {
    name: 'vex',
    id: 140,
  },
  {
    name: 'vi',
    id: 141,
  },
  {
    name: 'viego',
    id: 142,
  },
  {
    name: 'viktor',
    id: 143,
  },
  {
    name: 'vladimir',
    id: 144,
  },
  {
    name: 'volibear',
    id: 145,
  },
  {
    name: 'warwick',
    id: 146,
  },
  {
    name: 'wukong',
    id: 147,
  },
  {
    name: 'xayah',
    id: 148,
  },
  {
    name: 'xerath',
    id: 149,
  },
  {
    name: 'xin zhao',
    id: 150,
  },
  {
    name: 'yasuo',
    id: 151,
  },
  {
    name: 'yone',
    id: 152,
  },
  {
    name: 'yorick',
    id: 153,
  },
  {
    name: 'yuumi',
    id: 154,
  },
  {
    name: 'zac',
    id: 155,
  },
  {
    name: 'zed',
    id: 156,
  },
  {
    name: 'zeri',
    id: 157,
  },
  {
    name: 'ziggs',
    id: 158,
  },
  {
    name: 'zilean',
    id: 159,
  },
  {
    name: 'zoe',
    id: 160,
  },
  {
    name: 'zyra',
    id: 161,
  },
]

export default champions;
