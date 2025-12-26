import type { Story } from "./stories";

export const stories100: Record<number, Story> = {
	174: {
		index: 174,
		title: "Stonehenge",
		text: `<p>On a strange and distant island stands Stonehenge, mystic temple of the infidels of the far Northwest. In this place, it is said, men called "Druids" gain great and dangerous powers by striking black covenants with powerful marids.</p>
<p>You approach the circle of stone as a group of figures enter, cowled in black and chanting in a strange tongue. Armed guards before each entrance admit only the priests: gawkers and lookers-on are kept outside.</p>
<p><em>You may (Choose one and then roll the Destiny Die using the chart below):</em></p>`,
		choices: [
			"Disguise yourself as a priest and enter the circle to spy upon the rites.",
			"Knock out a guard and sneak into the ceremonial circle to destroy the infidels.",
			"Remain outside to observe the infidel's ceremonies, so that you can describe them to your Sultan.",
		],
		destinyTable: {
			minus: [1271, 1274, 1277],
			blank: [1272, 1275, 1278],
			plus: [1273, 1276, 1279],
		},
	},
	175: {
		index: 175,
		title: "Cave of Wonders",
		text: `<p>This is the Cave of Wonders (also known as the Cave of Al-Kolo-Ats). It is rumored that within are great treasures: huge rooms filled with gold and silver, a tree which grows jewels, and the infamous Magic Lamp and Seal Ring. Only through great magic may one enter the caves, and only through great luck and determination may one emerge alive...</p>
<p>You stand before the entrance to this fabulous cave. It is blocked by stone and magic, and you cannot easily break through.</p>
<p><em>You may (Choose one and then roll the Destiny Die using the chart below):</em></p>`,
		choices: [
			"Use magical wisdom to gain entrance to the cave. Once inside, trust in your spells to protect you from whatever guardians may lurk within.",
			"Seek another entrance to the cave. Rely on your sharp sword and wits to protect you.",
			"Find a wizard and promise him a share of the treasure within for aiding you in entering the caves.",
		],
		destinyTable: {
			minus: [1280, 1283, 1286],
			blank: [1281, 1284, 1287],
			plus: [1282, 1285, 1288],
		},
	},
	176: {
		index: 176,
		title: "Haunted House",
		text: `<p>This house is known to be haunted. Many have entered, but none who has entered has passed the night in safety—indeed, none has returned alive. The Sultan of this land has promised a great reward to the one who breaks the curse, and you have vowed to do so.</p>
<p>You enter the house at dusk, and the early evening passes peacefully. You are beginning to doubt the stories of the house when a voice calls out your name and asks, "What shall I do with it?"</p>
<p><em>You may (Choose one and then roll the Destiny Die using the chart below):</em></p>`,
		choices: [
			"Say nothing. Wait to see what develops. Hide.",
			`Call out, "Who dares to haunt this house? In the name of Allah, I call you forth!" Use the power of your faith to roust the evil from the house.`,
			`Be polite. Someone has addressed you by name. Say, "Just put it in the corner, thank you."`,
		],
		destinyTable: {
			minus: [1289, 1292, 1295],
			blank: [1290, 1293, 1296],
			plus: [1291, 1294, 1297],
		},
	},
	177: {
		index: 177,
		title: "The City of Brass",
		text: `<p>The fabled City of Brass lies somewhere far to the west. Many search for the city, for it is said to contain the key to great wealth and power. The city's gates are surrounded by marble tablets bearing verses which are testaments to the futility of pride: those who ignore the warnings and enter the city often meet a grisly fate.</p>
<p>Night is falling as you come before the walls of the City. The gates are shut and locked.</p>
<p><em>You may (Choose one and then roll the Destiny Die using the chart below):</em></p>`,
		choices: [
			"Explore the area outside the city, recording the verses when you find them. Do not attempt to enter the city.",
			"Send someone to scale the walls and view the interior of the city. Look for an entrance.",
			"Call upon Allah to make an entrance for you, that you might explore the city.",
		],
		destinyTable: {
			minus: [1325, 1328, 1331],
			blank: [1326, 1329, 1332],
			plus: [1327, 1330, 1333],
		},
	},
	178: {
		index: 178,
		title: "The Jeweled Fortress",
		text: `<p>The Jeweled Fortress is a place out of legend, built by a great king to be a paradise on earth. To punish the presumption of the builders, the day after its completion the Almighty poisoned and made barren the land for hundreds of miles around.</p>
<p>You have traveled far. Before you, amidst the cold, lonely wasteland, stands the fabulous fortress, its glory barely dimmed by the years of dust and rain.</p>
<p><em>You may (Choose one and then roll the Destiny Die using the chart below):</em></p>`,
		choices: [
			"Gaze upon the handiwork of man, then compare it to the handiwork of Allah. Do not try to enter the fortress at all.",
			"Approach and enter the fortress, counting on the grace of Allah to protect you.",
			"Begin looting the fortress. Tear the gems from the walls, then seek entrance to find any hidden treasure chambers.",
		],
		destinyTable: {
			minus: [1334, 1337, 1340],
			blank: [1335, 1338, 1341],
			plus: [1336, 1339, 1342],
		},
	},
	179: {
		index: 179,
		title: "The Lake of Colors",
		text: `<p>Long ago you heard the story of a fisherman who freed an 'efreet from a bottle and in reward was granted four brightly-colored fish. The fisherman sold them to the Sultan to be cooked for his supper. As the fish were placed in a pan, they began to speak, telling of a far-off city, cursed and doomed.</p>
<p>You have come to a high mountain lake filled with huge fish of red, blue, yellow, and white. So many fish are there that the lake itself seems of many hues, and you stand on the shore of the lake, marveling. One of the fish breaks the surface, and says in a clear voice, "You are to be the one to save us!" Before you can respond, the fish is gone beneath the surface of the Lake of Colors.</p>
<p>Along the far shore of the lake stands a grand city, like none you have ever before seen, and you go to it. The city is dark and forbidding: all the buildings are made of black basalt. From deep within one building you hear anguished moans; from another, a woman crying.</p>
<p><em>You may (Choose one and then roll the Destiny Die using the chart below):</em></p>`,
		choices: [
			"Investigate the sounds of moaning to see both what aid you can provide and what mysteries you can unravel.",
			"Investigate the sounds of crying—but move with stealth and caution. Observe and listen.",
			"Investigate, but stay away from the inhabitants. Try to riddle out the mystery without endangering yourself.",
		],
		destinyTable: {
			minus: [1343, 1346, 1349],
			blank: [1344, 1347, 1350],
			plus: [1345, 1348, 1351],
		},
	},
	180: {
		index: 180,
		title: "The Valley of Diamonds",
		text: `<p>You know this place from tales of great antiquity. This valley is known to contain two things: huge diamonds of incalculable value and tiny serpents of incredible deadliness. To get the diamonds, merchants throw animal carcasses into the valley; at sunup, giant rocs carry the carcasses back up the mountainside to eat. The merchants then frighten the rocs away and remove the diamonds stuck in the meat. There are legends of brave men who have walked the valley and lived, but you fear they are only legends.</p>
<p>You have come through secret ways to the lower portion of the valley, where your heart leaps at the sight of the giant diamonds and quails at the sight of the deadly serpents.</p>
<p><em>You may (Choose one and then roll the Destiny Die using the chart below):</em></p>`,
		choices: [
			"Sneak past the serpents, collect as many diamonds as possible, and sneak back the way you came.",
			"Grab whatever diamonds you can, then wait for an animal carcass to fall. Hide in the body until a roc brings you out and a merchant rescues you.",
			"Slay all the serpents that live in the valley, making it safe for men to walk. Perhaps Allah will grant you success in this.",
		],
		destinyTable: {
			minus: [1352, 1355, 1358],
			blank: [1353, 1356, 1359],
			plus: [1354, 1357, 1360],
		},
	},
	181: {
		index: 181,
		title: "The Undersea Kingdom",
		text: `<p>The Undersea Kingdom is a vast and varied empire of mermen (and mermaids) which few land dwellers ever see. It contains cities without number, vast wealth, and inhabitants who have a burning curiosity about and great admiration for the sons of Adam. But the perils of this great land are also great: the dendan swim these waters, and they are the most ferocious creatures in existence.</p>
<p>You are treated as an honored guest by the Sea-Born, and many great sights are shown to you.</p>
<p><em>You may (Choose one and then roll the Destiny Die using the chart below):</em></p>`,
		choices: [
			"Drink deeply of the sights and marvels of the Undersea Kingdom.",
			"Learn as much as you can of the people of this remarkable land, so similar to and yet different from your own people.",
			"Gain the confidence of one of the Kings of this land and persuade him to conquer his neighbors.",
		],
		destinyTable: {
			minus: [1361, 1364, 1367],
			blank: [1362, 1365, 1368],
			plus: [1363, 1366, 1369],
		},
	},
	182: {
		index: 182,
		title: "The Dusky Land",
		text: `<p>The Dusky Land is the dwelling place of the 'efreets and djinn; it is another plane of existence that few of the sons of Adam may visit. A land of mystical places and enchanted powers, there is no telling what you may find here.</p>
<p>You are wandering aimlessly through the white mists when you hear strange and terrifying sounds coming from beyond the next hill. Curious, you investigate.</p>
<p><em>You may (Choose one and then roll the Destiny Die using the chart below):</em></p>`,
		choices: [
			"Go to the hill to investigate, but stay out of sight nor give away your presence in any way.",
			"Advance over the hill with weapons drawn and a thousand words of power on your tongue. Make yourself known to the denizens of this land!",
			"Summon an 'efreet to you by magical means and have him investigate and report to you of the events occurring beyond the hill.",
		],
		destinyTable: {
			minus: [1370, 1373, 1376],
			blank: [1371, 1374, 1377],
			plus: [1372, 1375, 1378],
		},
	},
	184: {
		index: 184,
		text: `<p>Your professions of respect impress your listener, and he stays to listen longer.</p>
<p><b>No Skill:</b> You are told things that fill your heart with wonder. [S1]</p>
<p><b>Scholarship:</b> By comparing his stories with other stories and legends you have heard, you discover an arduous and hazardous route to the fabled Jeweled Fortress. [D1/S1/Opportunity to enter the Jeweled Fortress]</p>
<p><b>Storytelling:</b> You begin a contest of storytelling, and the evening is spent in pleasant discourse. You are honored for your wit and knowledge [he found the tale of The Day Abu-Hasan Farted particularly funny]. [D1/S2/W+1 (Max: Respectable)/<em>Respected</em>]</p>`,
	},
	185: {
		index: 185,
		text: `<p>He says, "Though there is little you can do for me, I nonetheless thank you for your kind and generous spirit."</p>
<p><b>No Skill:</b> "I shall remember you if fortune ever smiles upon me once again." You depart, and long after, the other does you a great service. [D1/Courtly Graces/You may lose one status of your choice]</p>`,
	},
	186: {
		index: 186,
		text: `<p>"You fool," cries the other when you visit kindness upon him, "of what use to me is this?"</p>
<p><b>No Skill:</b> He turns on his heel and storms away. Soon your humiliation is known to all. [D-1/S1/<em>Scorned</em>]</p>
<p><b>Enduring Hardship:</b> Despite the sting of his words, you persevere. You acquaint the other with your own misfortunes, and your methods for surviving them, thus lightening his burden and cheering his soul. [D1/S1]</p>
<p><b>Storytelling:</b> Turning aside his harsh words, you tell him the tragic Tale of the Cuckolded 'Efreet. When you are finished, he says, "If such can befall even a mighty djinn, then our own misfortune is light." Your listener takes heart to endure his own trials. [D2/S1/Choice of Storytelling or Wisdom]</p>`,
	},
	187: {
		index: 187,
		text: `<p>You speak to the other. Before you have finished a sentence, he cries, "Be silent!</p>
<p><b>No Skill:</b> "Get away, worm!" The other seems enraged at your presumption and you make haste to be elsewhere. [D-1/S1]</p>
<p><b>Appearance:</b> "Your words are poorly timed and show want of sense, but the perfection of your form nonetheless gives me some comfort. Let me teach you of proper deference to your superiors." You return to the dwelling of the other, and your lessons continue long into the night. [D1/Courtly Graces]</p>`,
	},
	188: {
		index: 188,
		text: `<p>At your words, the other deeply sighs. "I thank you for your kind words. Ah, if things were but different."</p>
<p><b>No Skill:</b> So saying, the other bids you farewell and departs. [S1]</p>
<p><b>Storytelling:</b> You stay to converse longer with the other and discuss with him his plight. Your fresh evaluation of the other's situation makes clear an obvious solution and a happy conclusion. The other is most pleased by your actions and praises you before the Maker of All Things. [D1/S1/Choice of <em>Beloved</em> (if appropriate) or <em>Blessed</em>]</p>
<p><b>Enduring Hardship:</b> Because of what you have suffered in the past, you greatly desire to bring the other out of his plight. Your dogged determination to relieve the suffering of the other brings a happy conclusion, and a small sum is your reward. However, he is unhappy with some of the things you must do along the way. [D2/S1/W+1 (Max: Poor)]</p>`,
	},
	189: {
		index: 189,
		text: `<p>When you speak, the other cries out, "Quickly! The key hangs there on the wall! Release me before my jailer returns!"</p>
<p><b>No Skill:</b> Alas, no sooner have you opened the door when the guard returns and cries the alarm. You are both easily captured. [D1/<em>Imprisoned</em>]</p>
<p><b>Luck, One Hundred Keys:</b> The jailer's errand keeps him busy, and you get the right key on the first try. The other rewards you handsomely for your assistance. [D1/S1/W+1 (Max: Rich)]</p>`,
	},
	190: {
		index: 190,
		text: `<p>The imprisoned one is quite despairing, and your words do nothing to improve his condition. "You cannot help me, I fear."</p>
<p><b>No Skill:</b> Taking him at his word, you depart. [D-1]</p>
<p><b>Piety:</b> You refuse to despair, saying, "If the One God wills your freedom, nothing can hold you." You discourse from the Koran and on the Sunnah, and your words from the Prophet show the imprisoned one his fate in a new light, and his spirits are lifted. You are now armed with new weapons against despair. [D1/Enduring Hardship]</p>`,
	},
	191: {
		index: 191,
		text: `<p>The other eagerly accepts your profession of love, and suddenly you find yourself married—all in such haste you hardly know what has occurred. You soon realize your spouse is cruel and grasping with no place in his heart for any save himself.</p>
<p><b>No Skill:</b> Allah has decreed your fate, and what the Most High wills, none can put aside. Next to your marriage, all other pains seem minor. [D1/Enduring Hardship/<em>Married</em>]</p>
<p><b>Luck:</b> Fortunately, and to your great relief, your spouse dies suddenly of a mysterious illness—only a short time after the ceremony. You profess great sorrow as you count up the estate. [D1/S1/W+1 (Max: Rich)]</p>
<p><b>Female</b> (mandatory): Your husband dies suddenly, shortly after the ceremony, freeing you from your travails. Unfortunately, the law decrees that wives do not inherit, and all his possessions go to his older brother. [D1/S1]</p>`,
	},
	192: {
		index: 192,
		text: `<p>Your professions of love are met by ones equally strong, and soon you are deep in the planning of your wedding. The night before the ceremony, though, a faithful servant comes and tells you of the cruel jest that has been played upon you—the other intends to humiliate you before your family and the judges by denying the marriage.</p>
<p><b>No Skill:</b> You denounce the faithless other to all around, and call the servant in testimony. You praise fortune for having delivered you from this sham. [D1]</p>
<p><b>Seduction, Acting and Disguise:</b> You go to your intended, and pretend not to know of his wicked plan. Instead, you lavish him with all the praise and flattery you can call to mind, shaming him for his deceit. Chastened by your devotion, he renounces his trickery and becomes in turn a devoted, loving spouse and a joy for your remaining days. [D1/S1/Appearance/<em>Married</em>]</p>`,
	},
	193: {
		index: 193,
		text: `<p>Before you can act upon your decision, you find that the other is not the noble person you thought, but a wicked trickster.</p>
<p><b>No Skill:</b> The false other calls his servants and has you imprisoned, that you may tell none of his deception. [D1/<em>Imprisoned</em>]</p>
<p><b>Enduring Hardship:</b> The false other has you locked away, but your noble bearing and dignity in the face of adversity softens the heart of your hunchbacked jailer, and you are permitted to escape. As you flee, you learn that the false other has you declared an outlaw. [D1/S1/<em>Outlaw</em>]</p>
<p><b>Brass Trumpet</b> (mandatory): As you approach the other, the Brass Trumpet sounds out a note of warning, the sound of which strikes the other with great force. While he recovers from the sound, you flee to safety. [D1/S1]</p>`,
	},
	194: {
		index: 194,
		text: `<p>Although the other seems harmless, something deep within you tells you that he is dangerous! With a cry, you hurl yourself at him with your sword drawn.</p>
<p><b>No Skill:</b> The other shrieks in dismay and flees, and is quickly lost to your sight. [S1]</p>
<p><b>Weapon Use, Brass Trumpet</b> (mandatory): Your quick thrust ends the other's life! Upon examination of his effects, you discover him to be an evil Magian fire-worshipper! You have been the instrument of Allah's will. [D1/S1/<em>Blessed</em>]</p>`,
	},
	195: {
		index: 195,
		text: `<p>Your swift attack is met by a more swift and sure defense, and you are struck a hard blow to the head. When you arise, you are alone. [S1/<em>Wounded</em>]</p>`,
	},
	196: {
		index: 196,
		text: `<p>Your swift attack lays the other at your feet before onlookers can react. Guards for the Sultan are on hand, and take you into custody, demanding to know the reason for your action.</p>
<p><b>No Skill:</b> Your protests that the other radiated "an aura of evil" are considered without merit, and you are imprisoned, as is only right. [S1/<em>Imprisoned</em>]</p>
<p><b>Courtly Graces, Acting and Disguise:</b> You vigorously defend your actions. Your impassioned and skillful rhetoric soon convinces the court that the other was an old enemy of yours who slew your parents and abducted your sister. You are awarded the possessions he was carrying, and are let free. [D1/S2/W+1 (Max: Respectable)]</p>
<p><b>Brass Trumpet</b> (mandatory): You vigorously defend your actions. Your impassioned and skillful rhetoric soon convinces the court that the other was an old enemy of yours who slew your parents and abducted your sister. You produce as further evidence the Brass Trumpet, which sounded when you approached the other, sure proof of his evil intent. You are let free. [D1/S2/Wisdom]</p>`,
	},
	197: {
		index: 197,
		text: `<p>Upon hearing your kind words, the other makes you an offer of employment, which you accept.</p>
<p><b>No Skill:</b> You are paid well, but soon your master is revealed as a wicked liar, and you are caught up in his punishment. You flee to avoid the death penalty. [D1/W+1 (Max: Respectable)/<em>Outlaw</em>]</p>
<p><b>Beguiling:</b> You are paid quite well, but soon your master is revealed as a wicked liar, and you are caught up in his punishment. Your quick tongue convinces the Sultan that you were a blameless dupe. You manage to enrich yourself from your former master's possessions before you leave him to his fate. [D1/S1/W+2 (Max: Respectable)]</p>
<p><b>Brass Trumpet</b> (mandatory): As he counts money into your hands, the Brass Trumpet sounds, revealing him as a wicked liar. You cast the coins onto the ground and denounce him before the guards. Not all of his glib words can save him from punishment. [D2/S1/<em>Respected</em>]</p>`,
	},
	198: {
		index: 198,
		text: `<p>You bow gracefully before the other.</p>
<p><b>No Skill:</b> He takes advantage of your vulnerable position and attacks you. He beats you senseless, robs you, and leaves you for dead. [D1/W-1 (Min: Penniless)]</p>
<p><b>Weapon Use:</b> You happen to look up to see him drawing his sword to attack you. Forewarned by this stroke of luck, you easily parry his blow. Returning the attack upon him, you wound him in one swift stroke. He has not reckoned on your skill with arms and turns on his heels. You give chase, but he is swift of foot and evades you. [D1/S1]</p>
<p><b>Brass Trumpet</b> (mandatory): The Brass Trumpet sounds out its clear note of warning, and the other hesitates in his attack. You draw your sword and defend yourself, driving the other away. [D2/S1]</p>`,
	},
	199: {
		index: 199,
		text: `<p>The other cheerfully accepts your kind words and gifts.</p>
<p><b>No Skill:</b> In hopes of garnering more favor, you add to the value of your gifts with additional items. Unfortunately, once these things are in his hands, the other forgets you instantly. [D1/W-1 (Min: Poor)]</p>
<p><b>Stealth and Stealing:</b> When you realize that the other has no intention of acknowledging your gifts, you skillfully contrive to steal them back, and hasten away from the other. [D1/S1/Stealth and Stealing]</p>
<p><b>Brass Trumpet</b> (mandatory): As your gifts change hands, the Brass Trumpet sounds, warning you of the greed of the other. You manufacture a pretext to take them back, and leave the vicinity quickly. [D1/S1/Quick Thinking]</p>`,
	},
};
