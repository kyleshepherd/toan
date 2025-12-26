import type { Story } from "./stories";

export const stories1100: Record<number, Story> = {
	1100: {
		index: 1100,
		text: `<p>Far from any traveled roads, you come across a fascinating scene: behind a towering, grim 'efreet, you can make out a brass statue. You want to get a closer look, but your only chance is to sneak up behind the 'efreet and slip away without being noticed.</p>
<p><b>No Skill:</b> Before you can get close, the 'efreet spots you and bellows fearsomely; you retreat in haste. [S1]</p>
<p><b>Stealth and Stealing, Luck:</b> You manage to avoid the 'efreet. On close inspection, you realize that this is the brass horseman said to point to the fabled City of Brass. [D1/S1/<b>Brass Horseman</b>]</p>`,
	},
	1101: {
		index: 1101,
		text: `<p>You come upon a roc's nest filled with splendid gems. The roc guards the nest vigilantly.</p>
<p><b>No Skill:</b> You are daunted by the difficulty of the task. The treasure must go unexamined. [D-1/S1]</p>
<p><b>Enduring Hardship:</b> You reckon the risks against the gains and resolve to chance it. You dash for the nest and, as you had hoped, she cannot shift her tremendous bulk quickly enough to stop you. You make off with several gems. [D1/S1/W+1 (Max: Rich)/Luck]</p>
<p><b>Envious</b> (mandatory): You are more than willing to risk the creature for the treasures you see, but your shaking hands are unable to manage it. You snatch a gem away as the Roc snaps at you and misses, but the second gem you grab is unexpectedly large. You hesitate, and the bird snaps off your head with a single clack. Your head remains aware throughout an interminable trip through the Roc's digestive system, and you perceive many rare and valuable gems in its crop before you finally go on to your reward. [Death]</p>`,
	},
	1102: {
		index: 1102,
		text: `<p>In a strange temple, a fabulous treasure is guarded by hundreds of priests. You yearn to own this treasure and teach the infidels a lesson.</p>
<p><em>You may attempt the robbery yourself or seek help:</em></p>
<p><em>If you seek help:</em> You hire a band of robbers to assist you. [Go to paragraph 1103]</p>
<p><em>If you attempt it yourself:</em> You fail, and in the woods outside the temple, you are captured by guards.</p>
<p><b>No Skill:</b> Disbelieving your protests of innocence, they bring you before a priest, who punishes you with mystic rituals. [D1/<em>Ensorcelled</em>]</p>
<p><b>Beguiling:</b> The captain believes your protests of innocence and lets you go. You realize you will need help if you are to succeed in this robbery. [D1/Go to paragraph 1103]</p>`,
	},
	1103: {
		index: 1103,
		text: `<p>You plan to rob an infidel temple, and begin hiring useful people.</p>
<p><b>No Skill:</b> One of the men, a disguised infidel, betrays your plans; you are taken captive. In a series of bizarre rituals, your memory of all that has occurred is erased. [D1/<em>Ensorcelled</em>]</p>
<p><b>Brass Trumpet:</b> Allah reveals a spy among the men you hired. You remove him; the others are strong in their faith and want to punish the infidels. You set out for the temple. [Go to paragraph 1104]</p>`,
	},
	1104: {
		index: 1104,
		text: `<p>You plan to plunder an infidel temple and have gathered a number of people you trust. You are ready to steal the fabulous treasure within. In the inner chambers of the temple, you discover a number of traps and hindrances set to foil burglars.</p>
<p><b>No Skill:</b> Prudently, you abandon the project. [D-1/S1/Wisdom]</p>
<p><b>Quick Thinking:</b> The traps inside make you think. Do the priests disarm them every day? Why are they dust-covered, as though unused? You search the outer chamber and discover a secret panel—the fabulous treasure is "concealed" in plain sight! [D2/S1/W+3 (Max: Princely)/Quick Thinking]</p>`,
	},
	1105: {
		index: 1105,
		text: `<p>In this land, it is said that the foul Vizier has a diamond he would ransom for all the rest of his treasure. He amasses such wealth by denying aid to needy people. Locals ask you to steal the diamond to ransom for food for the needy, and you undertake a daring plan with assistance from some of the victims.</p>
<p><b>No Skill, Envious</b> (mandatory), <b>Wealth: Poor</b> or less (mandatory): The theft is relatively easy. However, greed fills your heart, and you decide to keep the diamond for yourself. [D-1/Lose Piety/<em>Pursued</em> (BEGGAR)/Choice of W+4 (Max: Princely) or <b>Giant Diamond</b>]</p>
<p><b>Enduring Hardship:</b> The theft is an easy matter, and, deeply moved by the sufferings of others, you gladly give the diamond to local merchants to sell for alms. [D3/S1/Piety/<em>Respected</em>]</p>`,
	},
	1106: {
		index: 1106,
		text: `<p>You find a scroll describing the process of obtaining a magical lamp; unfortunately, you need an accomplice. You find a cooperative youth and take him to the site described. You perform the necessary spells, and he enters the magical pit.</p>
<p><b>No Skill:</b> When he returns, you demand the lamp before helping him out of the pit. Suspicious, he refuses. Frustrated, you cease your magical work, trapping him (and the lamp) within. Damn that child! The lamp should be yours! [D1/S1/<em>Envious</em>]</p>
<p><b>Beguiling:</b> The trusting youth hands up the lamp before you help him out of the pit. You then end the spell, trapping him inside. [D-1/S1/<b>Magic Lamp</b>]</p>`,
	},
	1107: {
		index: 1107,
		text: `<p>Around a chest of gems and coins is a sleeping serpent. Its girth is as an ancient tree trunk, and its jaws bristle with sword-length teeth.</p>
<p><b>No Skill:</b> There is no way to reach the treasure without scrambling over the serpent; to wake it is certain death. [D-1/S1/<em>Envious</em> (1 turn)]</p>
<p><b>Wilderness Lore:</b> You notice a massive bulge in the serpent's body and, knowing that snakes sleep soundly after meals, you scramble over the serpent, fill your pockets with valuables, and escape without injury. [D1/S1/W+2 (Max: Rich)]</p>`,
	},
	1108: {
		index: 1108,
		text: `<p>Rumors of fabulous wealth draw you to the tower of Abdallah, the famed astrologer. You find the tower deserted and unguarded. Within, you discover a marvelous device. Suddenly, Abdallah steps from out of thin air to stand before you.</p>
<p><b>No Skill, Weapon Use</b> (mandatory): In desperation you attack. Abdallah murmurs and gestures, and you find yourself on four legs braying like a donkey. [D1/<em>Beast Form</em>]</p>
<p><b>Acting and Disguise:</b> You pose as a sage come to visit Abdallah. You comment on the amazing rumors that he can disappear into thin air. Flattered, Abdallah demonstrates. While he is gone, you run like mad. [D1/S1/<b>Celestial Planisphere</b>]</p>`,
	},
	1109: {
		index: 1109,
		text: `<p>A beggar tells you a tale of a nearby cave filled with marvels. Investigating, you find the cave where you were told. Deep inside is a jet black pool and at its center is a small island. On the island are two chests of gold.</p>
<p><b>No Skill:</b> You cautiously probe the pool. Suddenly, a skeletal hand explodes from the inky waters and draws you down! Terrified, you struggle, barely managing to escape. You run screaming from the cave. [D1/<em>Insane</em> (1 turn)]</p>
<p><b>Stealth and Stealing:</b> A guardian must lurk in the pool—so you rig ropes from the cave roof and swing to the island and back without touching the water. The chests are filled with gold and silver, and one also holds a most remarkable lance. [D2/S1/W+2 (Max: Rich)/<b>Sparkling Spear</b>]</p>`,
	},
	1110: {
		index: 1110,
		text: `<p>A dervish promises you "great wealth" if you accompany him. He leads you to a hidden oasis and points to a large dune. There, at the top, is a fabulous array of jewels, gold, and gems. "It could be yours," he whispers.</p>
<p><b>No Skill, Wealth: Poor</b> or less (mandatory): You rush forward, your heart consumed by greed. As you climb the dune, it collapses on you, burying you and toppling the chest down the far side. You hear the dervish laughing as you extricate yourself, but when you are free, he is long gone with all the goods. [D1/<em>Envious</em>]</p>
<p><b>Wisdom:</b> The dervish would not have shown you this were it easy to take. You ignore his whispers, and fill your eyes with the beauty of the treasure. The dervish is furious, and eventually storms off. [D1/S1/Wisdom]</p>`,
	},
	1111: {
		index: 1111,
		text: `<p>An old, run-down house stands before you. The door is open and you spy within a fabulous treasure! The locals tell you the house is haunted—those who tried for the treasure met death.</p>
<p><b>No Skill:</b> You don't dare to test the tales. [D1]</p>
<p><b>Fated</b> (mandatory): You decide to see for yourself. As soon as you touch the treasure, a voice speaks your name. You call out, "Who asks for me?" An enormous 'efreet bows before you, saying "Take the treasure, for it is yours." [D2/S1/<b>Treasure</b>]</p>`,
	},
	1112: {
		index: 1112,
		text: `<p>The walls of this place are shaped and inscribed with precision and artistry. The features are so crisp they might have been carved yesterday, but the dunes heaped at the gate indicate none have passed this way in years.</p>
<p><em>You may pass on or enter the city:</em></p>
<p><em>If you pass on:</em> You decide that any city which has been deserted so long must be deserted for a reason, and move on. [S1]</p>
<p><em>If you enter the city:</em> [Go to paragraph 1128]</p>`,
	},
	1113: {
		index: 1113,
		text: `<p>Through the streets of this deserted city, howling winds drive swirling sands against you. Skeletons lie shrouded in decaying cloth.</p>
<p><b>No Skill:</b> Your heart contracts with melancholy as you reflect on those gone to dust and on the futility of human ambitions. [D1/S1/<em>Grief Stricken</em> (1 turn)]</p>
<p><b>Wisdom:</b> This ancient city is an admonishment to man's pride. You return to civilization and tell others of what you saw; they are abashed and enlightened. [D1/S2/Storytelling]</p>`,
	},
	1114: {
		index: 1114,
		text: `<p>You are excited to discover the gold-topped tower rising above the deserted city.</p>
<p><b>No Skill:</b> Once inside, the narrow streets and towering walls obscure your vision; you cannot find the tower. You waste many a day here before moving on. [D-1/S1]</p>
<p><b>Magic:</b> You realize the tower's location is magically concealed. You use your skills to locate the spell itself. When you find the spell, you find the tower, decorated with sheets of gold. [D2/S1/W+3 (Max: Princely)]</p>`,
	},
	1115: {
		index: 1115,
		text: `<p>You circle the great walls of the city but find only one gate; it will not open. The walls are too smooth and tall to climb.</p>
<p><b>No Skill:</b> You discover no entrance to the city and go on your way. [S1]</p>
<p><b>Determined</b> (mandatory), <b>Stealth and Stealing:</b> The walls present an almost insurmountable obstacle, but you refuse to accept defeat. At last you reach the top. [Go to paragraph 1113]</p>`,
	},
	1116: {
		index: 1116,
		text: `<p>You catch a faint odor of cooking fires and scorched flesh as you approach the hillside dotted with dark, cave-like openings. Suddenly, an alarmed shriek splits the air, and dark figures scurry into the caves.</p>
<p><b>No Skill:</b> You are sure you have been seen, and are alone and unable to defend yourself. Regretfully you withdraw. [D-1/S1]</p>
<p><b>Determined</b> (mandatory), <b>Wilderness Lore, Weapon Use:</b> Confident you can outwit or outfight whatever you encounter, you decide to enter the settlement. [D1/Go to paragraph 1130]</p>`,
	},
	1117: {
		index: 1117,
		text: `<p>You come to an ancient road, overgrown with weeds and grass. Curious, you follow it to the walls of an ancient city. Though the walls are crumbling in places, you see activity within.</p>
<p><b>No Skill:</b> Soldiers of the city find you and bring you before their magistrate. He mentions the wisdom of Solomon; your comment that Solomon has been dead for thousands of years is greeted with disbelief. You are judged to be insane and are confined for your own protection. [D1/S2/<em>Imprisoned</em>]</p>
<p><b>Stealth and Stealing:</b> You avoid being seen, and learn many things about this lost culture. [D1/S1/Storytelling]</p>`,
	},
	1118: {
		index: 1118,
		text: `<p>You discover old ruins in a secluded spot and explore them for relics. Suddenly a group of gools appear; you deem it wise to avoid them.</p>
<p><b>No Skill:</b> Their conversation reveals they are mightily hungry for human flesh. Moans of fear escape your lips. They discover your hiding place, and you flee in terror. [D1/<em>Insane</em> (1 turn)]</p>
<p><b>Enduring Hardship:</b> You do not flinch from their smell or the grotesqueries of their conversation; they pass you by in ignorance. What wondrous and fearsome tales they tell among themselves! [D1/S1/Storytelling]</p>`,
	},
	1119: {
		index: 1119,
		text: `<p>The sun makes you dizzy from heat, so you go to a grove of trees for shade. Behind the trees a misty city shimmers. Thinking it a mirage, you wander its streets, marveling that the people cannot see you.</p>
<p><b>No Skill:</b> Later, when recounting this experience, your audience is impressed. [S1/Storytelling]</p>
<p><b>Wisdom:</b> You realize it is real—a city caught between your world and another. You converse with a sage from another time and learn fabulous things. [D2/S2/Scholarship/Opportunity to enter any Place of Power]</p>
<p><b>Insane</b> (mandatory): Unencumbered by sanity, your intellect is able to embrace the paradoxes involved, and you realize the true nature of the misty city. In the blinding flash of inspiration which accompanies this realization, you understand that you will never be able to convey its meaning to your fellow mortals. You decide, therefore, to go and dwell in the city, and each day the city itself is more and more real, even as the world you left behind fades, until at last you have become one of the most respected citizens of the mirage kingdom. The concerns of the world become like unto a mere story, one you heard long ago and of which you cannot recall the details. [Death]</p>`,
	},
	1120: {
		index: 1120,
		text: `<p>They lash you to a wooden stake and let the sun and insects do their work on you.</p>
<p><b>No Skill:</b> When you pass out, they realize you are a weakling and leave you to your fate. You come face to face with the Despoiler of Mansions before you manage to free yourself. For days you drag yourself forward until you come to a camp of nomads. You collapse before explaining your presence. When you awaken, your pains are abated, though you are still battered and bruised. They know of the bandits in the area and treat you as best as they can. [D2/Enduring Hardship/<em>Crippled</em>/Lose <em>Lost</em>]</p>
<p><b>Enduring Hardship:</b> You refuse to let these bandits see your suffering, and you sneer, laugh, and tell ribald jokes. Impressed with your fortitude, they take you into their band. [S1/D2/W+1 (Max: Respect.)/Lose <em>Lost</em>/Opportunity to enter the Cave of Wonders]</p>`,
	},
	1122: {
		index: 1122,
		text: `<p>You find wagon tracks where there should be few travelers. You follow the tracks and discover a long-abandoned city, and a band of grave-robbers carting off many of the city's treasures. After stuffing your own pockets, you rush off to hire helpers.</p>
<p><b>No Skill:</b> When you return, you cannot find the tracks nor the city. [D1/W+1 (Max: Respectable)/<em>Envious</em> (1 turn)]</p>
<p><b>Scholarship:</b> Before you go, you carefully note important landmarks to guide you back. You return with an expedition to begin investigations into the wonders of this place, and the spectacular discoveries you uncover make you wealthy and well-known. [D1/W+2 (Max: Rich)/Scholarship/<em>Respected</em>]</p>`,
	},
	1123: {
		index: 1123,
		text: `<p>You have come across a city long hidden from the rest of the world; the inhabitants are hostile to outsiders. They do not resemble your people, but the natives of the region do resemble the city dwellers.</p>
<p><b>No Skill:</b> You hire a local to act as a slaver, with you as his slave. Together, you enter the city. Your "companion" likes the society, and likes having you as his slave—he decides to stay here. You barely manage to escape, without any of the treasure you had hoped to obtain. [D1/S2/<em>Envious</em>]</p>
<p><b>Acting and Disguise:</b> Modeling yourself on one of the strange natives, you devise an effective disguise. Together, you enter the lost city and make many fascinating discoveries. [D1/S2/Scholarship]</p>`,
	},
	1124: {
		index: 1124,
		text: `<p>Your group has come upon the ruins of an ancient city. The caravan leader wishes to push ahead, but you want to stay and investigate.</p>
<p><b>No Skill:</b> You ask that someone stay and aid you, but the others are afraid; the caravan leaves without you. You cannot undertake this task alone, and journey on, though the call of untold riches fills your ears. [D1/<em>Envious</em>]</p>
<p><b>Appearance:</b> Several in the caravan are devoted to your beauty, and agree to remain with you. Well-equipped for the challenges, you discover fabulous treasures. [D2/S1/W+3 (Max: Princely)/Wilderness Lore/Scholarship]</p>`,
	},
	1125: {
		index: 1125,
		text: `<p>You meet an old dervish living in the wilderness. After speaking with him, you travel on and discover the ruins of an ancient city! There is much writing on stone pedestals in a language that you cannot read. Perhaps the old man can help.</p>
<p><b>No Skill:</b> You bring him a chunk of rock with samples of the writing. "Desecrator!" he screams. Brandishing a scimitar, he deals you several cruel wounds before you escape. [D1/<em>Wounded</em>]</p>
<p><b>Wisdom:</b> You carefully copy some of the inscriptions and ask him what they mean. They are mostly blessed verses and familiar sayings, but one passage reveals the route to a city of great repute. [D1/S1/Opportunity to enter the City of Brass]</p>`,
	},
	1126: {
		index: 1126,
		text: `<p>Near the city of King Shehyal, the ruins of a city from Solomon's time are discovered. You join in the investigation and search the ruins. Among your companions are agents of King Shehyal.</p>
<p><b>No Skill:</b> Your group is plagued by a series of accidents. Finally, the King orders you to leave the site "for your own safety." You go away empty-handed, certain that the King will not leave the ruins unmolested. [D-1/S1]</p>
<p><b>Courtly Graces:</b> You seek an audience with the King to assure him that he will receive a most generous share of any discovery you make. Thus, all are happy and the expedition is a success. [D1/W+1 (Max: Rich)]</p>`,
	},
	1127: {
		index: 1127,
		text: `<p>Before you is a magnificent city with towering spires, exquisite ornamentation, and enduring craftsmanship. Not a soul has viewed this scene for centuries.</p>
<p><b>No Skill:</b> You feel a slight uneasiness, a sense of a disapproving presence. The enticement of the riches, however, is too strong to resist, and you help yourself to what you can find. Even when you depart, though, the foul feeling lingers. [D1/W+2 (Max: Rich)/<em>Accursed</em>]</p>
<p><b>Scholarship:</b> On the walls are engraved many admonishments to those who dishonor the dead, warning that the Destroyer of Delights comes to us all. You copy the inscriptions rather than loot the city, and collect them into a book of verse. The beauty of your translation brings you great honor. [D2/S2/Wisdom/<b>Robe of Honor</b>]</p>`,
	},
	1128: {
		index: 1128,
		text: `<p>As you clear the sand from the gate of the city and enter, you feel a chill certainty that you are watched, though there is no sign of life. You step into a dark building...</p>
<p><b>No Skill:</b> ...and emerge slack-jawed and staring, stumbling forward without knowledge or awareness of purpose. [D1/<em>Ensorcelled</em>]</p>
<p><b>Magic:</b> ... and sense the potent sorcery protecting the city. With difficulty, you tear yourself away and forsake your search. [D2/Wisdom]</p>`,
	},
	1129: {
		index: 1129,
		text: `<p>Among the deserted dwellings are many objects that might interest a scholar.</p>
<p><b>No Skill:</b> You collect them and, when you return to civilization, recount the circumstances of their discovery to a group of scholars. They are profusely thankful for your efforts. [D1/S1/Scholarship]</p>
<p><b>Luck:</b> As you are cleaning a ring and examining it, a towering 'efreet suddenly appears before you. "You ask, and I obey," he says. [D2/S2/<b>Seal Ring</b>]</p>`,
	},
	1130: {
		index: 1130,
		text: `<p>Ape-like humans emerge from their dark refuges. They give you gifts and treat you to a meal. The main dish is meat of a most unusual and suspicious nature.</p>
<p><b>No Skill:</b> To avoid offending them, you eat, but afterwards are quite ill. You learn a great deal from the ape-men, but the illness causes you no end of unhappiness. [D1/S2/Choice of Scholarship or Storytelling/<em>Diseased</em>]</p>
<p><b>Wilderness Lore:</b> You know something of primitive peoples. You manage to avoid eating the strange meat without giving offense, and learn of a place of mystery from the ape-like folk. [D1/S2/Scholarship/Opportunity to enter the Lake of Colors]</p>`,
	},
	1131: {
		index: 1131,
		text: `<p>In the wild, far from the nearest civilization, you find a surprising set of human footprints leading off the established trail into a barren waste. Intrigued, you follow them and discover, hidden within a canyon, an entire city—a hidden colony of lepers. You come among them and ask if there is any help you can give to them.</p>
<p><b>No Skill:</b> You give them gifts from your traveling supplies—leather goods and spices and paper. In gratitude, they teach you some of their secrets of living off the land. [D1/S1/Wilderness Lore]</p>
<p><b>Wilderness Lore:</b> You recognize half-a-dozen edible plants that they could easily cultivate, to make their lives easier. In gratitude, they show you how they travel unnoticed to and from their city. [D1/S1/Acting and Disguise]</p>`,
	},
	1132: {
		index: 1132,
		text: `<p>You have come across an interesting discovery, but something tells you to turn your back on it and continue with your quest. [Wisdom]</p>`,
	},
	1133: {
		index: 1133,
		text: `<p>The wondrous mystery of your discovery does not attract you, and you go on your way rather than tarry longer. [S1]</p>`,
	},
	1134: {
		index: 1134,
		text: `<p>When you find the other, you decide not to explore further, but rather turn and go in another direction. [D-1]</p>`,
	},
	1135: {
		index: 1135,
		text: `<p>You know the other to be quite powerful. This does not discourage you, for the most powerful have the best treasure. You sneak into the other's chambers while he is away—ready to take whatever you find of interest. A servant finds you snooping and catches you by the clothes.</p>
<p><em>You may either attack him or plea for leniency:</em></p>
<p><em>If you attack:</em></p>
<p><b>No Skill:</b> The servant is not ready for a fight. His authoritative demeanor does not withstand an actual encounter; he immediately cowers to the floor. Before you can press your advantage you hear guards approaching. You flee empty-handed. [S1]</p>
<p><b>Weapon Use:</b> You quickly turn on the servant and lock his arm behind him—your knife at his throat. "Please don't kill me! Please don't kill me!" he cries—apparently unschooled in the custom of being quiet when under a knife. You shove him down and grab the nearest thing as you rush out of the palace. [S1/<b>Treasure</b>]</p>
<p><em>If you plea for leniency:</em></p>
<p><b>No Skill:</b> The servant boxes your ears and says as if to a two-year-old, "Now you've been very bad and you know it." You see that the servant is no match for you and decide to rise up against him. As you do you meet the hilt of a sword at the back of your head. [D1/<em>Imprisoned</em>]</p>
<p><b>Bargaining and Evaluation:</b> You make a case to the servant that he is unappreciated by his master—that he deserves more and should help you to steal some of his master's possessions. He gives the proposal serious thought—turning from you long enough for you knock him over the head with a brass statue... a very nice brass statue. [S1/W+2 (Max: Rich)/<b>Brass Horseman</b>]</p>`,
	},
	1136: {
		index: 1136,
		text: `<p>You are forced to bed down in an abandoned house for the night. As you prepare your bed, you find a particularly interesting trinket in the detritus and decide to be off with it. The trouble is, while the house was abandoned, you were not the only person to choose it as a shelter—and as you turn, the other looms before you.</p>
<p><em>You may either attack the other or plea for leniency:</em></p>
<p><em>If you attack:</em></p>
<p><b>No Skill:</b> The other is a skilled swordsman and cuts you several times. You begin to wonder why he does not just finish you. You drop your sword and fall to your knees, ready to die. The other says, "Oh no—I will not kill you. I will let you live to repent your wrong-doings in the world. Now get out!" And he grabs you and tosses you out in the street, slamming the door behind you. [D1/<em>Wounded</em>]</p>
<p><b>Weapon Use:</b> The other is quite skillful and you each see that the fight is going to last some time. After a riposte he steps back and says, "Wait. We will destroy this house. I will make a bargain with you. I will let you go if you will stop fighting." Not sure that you would defeat him, you take your chance to escape. [S1]</p>
<p><em>If you plea for leniency:</em></p>
<p><b>No Skill:</b> "Your kind should have their hands cut off—and sewn back on to be cut off again!" The other takes you by sword-point to the city guards. [D1/<em>Imprisoned</em>]</p>
<p><b>Appearance:</b> The other melts when looking deep into your eyes. He cannot harm one such as you. He cannot have you stealing from him either. He blindfolds you and has you taken deep into the woods—where, exactly, you do not know. [D1/S1/<em>Lost</em>]</p>`,
	},
	1137: {
		index: 1137,
		text: `<p>In the floor of the other's hovel you find a jeweled trapdoor beneath dusty floorboards. It is locked.</p>
<p><b>No Skill:</b> The lock is beyond your ability to open. Sighing with longing, you leave. [S1]</p>
<p><b>Stealth and Stealing, One Hundred Keys:</b> You easily slip the lock and struggle along interminable passages in the dark. At last you come to an open space. You light a torch and behold a room full of treasure! [D2/S1/W+2 (Max: Princely)/<em>Determined</em>]</p>`,
	},
	1138: {
		index: 1138,
		text: `<p>While aiding a farmer plowing his fields, you stumble across a trapdoor.</p>
<p><em>You may tell the farmer of your discovery or explore it yourself:</em></p>
<p><em>If you tell the farmer:</em> [Go to paragraph 1139]</p>
<p><em>If you open the door:</em> It creaks loudly. The farmer immediately comes running, bearing a club. You catch a glimpse of several corpses in the hidden vault before he is upon you, trying to add you to his collection. Wounded, you flee. [D1/<em>Wounded</em>]</p>`,
	},
	1139: {
		index: 1139,
		text: `<p>You tell a farmer you have found a trapdoor in his field. He asks you to investigate; you open the door. You glimpse many corpses, then hear the swish of a club behind you!</p>
<p><em>Roll two dice, adding one each for Weapon Use and Luck:</em></p>
<p>❖ 2–7: He wounds you, but you escape. This man may be a gool, and you waste no time in putting distance between yourself and him. [D1/<em>Wounded</em>]</p>
<p>❖ 8+: You slay him in a brief fight and report his crimes to the Sultan. You are bathed in honor for your good deeds. [D1/S1/<b>Robe of Honor</b>]</p>`,
	},
	1140: {
		index: 1140,
		text: `<p>Far away from anywhere else, you come across an old stone tower. You notice weird inscriptions and lines on one side. Close investigation reveals a trapdoor! However, you cannot open it.</p>
<p><b>No Skill:</b> You are sure the inscription gives the clue, but cannot read it. You move on, unfulfilled. [S1]</p>
<p><b>Scholarship:</b> Careful study of the runes reveals how to open the door. You find an enchanter's chamber full of magic books and wonderful artifacts. [D1/<b>Treasure</b>]</p>`,
	},
	1141: {
		index: 1141,
		text: `<p>One night, as you lay in camp, you hear voices. You investigate and see several slaves approach a large rock and begin to sing. A trapdoor in the rock opens of its own accord, and the slaves go inside. When the it shuts, the singing stops.</p>
<p><b>No Skill:</b> You prudently decide not to risk your life in further investigation. [D-1/S1/Wisdom]</p>
<p><b>Acting and Disguise:</b> You cloak yourself like a slave and sing before the rock. The door opens, and you stride in boldly. Once inside, you overhear the slaves' plan to slay their masters! You escape and warn the locals, who capture and execute the ringleaders. They thank you greatly for your help. [D2/S1/<em>Respected</em>]</p>`,
	},
	1142: {
		index: 1142,
		text: `<p>A wealthy man invites you to his home. That night, you hear strange noises in his library. Investigating, you find a locked trapdoor. It must lead to his treasure chamber! You carefully open the trapdoor; you find fabulous gems—and the red turban of the evil Magian fire-worshipper! You cheerfully rob the infidel blind. [D1/S1/W+2 (Max: Rich)]</p>`,
	},
	1143: {
		index: 1143,
		text: `<p>You discover a trapdoor in the sand. Curious (but fearful), you open it and find a stairway. At the bottom, a beautiful maiden sleeps amidst a sumptuously decorated apartment.</p>
<p><em>You may descend or remove yourself from this place:</em></p>
<p><em>If you descend the stairs:</em> [Go to paragraph 1144]</p>
<p><em>If you retreat:</em> Coward that you are, you bolt up the stairs like a timid camel. Too late! Before you stands a horrible 'efreet brandishing a sword! "You have betrayed me with my woman," he roars.</p>
<p><b>No Skill:</b> Despite your protests of innocence, he wounds you cruelly before casting you out. [D1/<em>Wounded</em>]</p>
<p><b>Female</b> (mandatory): You cry out, "How could I betray you, when I too am a woman?" He sheepishly admits the truth of this and lets you go. You do not stop running until night falls. [D1/S1/Quick Thinking]</p>`,
	},
	1144: {
		index: 1144,
		text: `<p>A hidden trapdoor leads you to a sumptuous apartment where sleeps a beautiful maiden. Gently you awaken her and learn her plight: enslaved by a powerful 'efreet, she dares not leave. Suddenly, dishes begin to rattle—"Hide!" she cries. With a bang, a horrible-looking 'efreet with a terrible sword appears. "I smell the presence of a human," he roars. He advances on the maiden. "You have betrayed me!"</p>
<p><b>No Skill:</b> You watch in horror as he slays her with his sword, then vanishes. [D-1/<em>Grief Stricken</em>]</p>
<p><b>Determined</b> (mandatory): You cannot stand by and see her suffer, and step forward. [D2/Go to paragraph 1145]</p>
<p><b>Envious, Outlaw</b> (All mandatory): You cannot sit by while this 'efreet slays her: she must be yours alone! You leap from hiding and attack the 'efreet with your sword.</p>
<p><em>Roll two dice, adding one for Magic:</em></p>
<p>❖ 2–8: Your end is brief, but interesting. The 'efreet eats your sword, then takes hold of your arms and legs and rends you limb from limb until your soul escapes your body and commends itself unto Allah. [Death]</p>
<p>❖ 9+: You slay the 'efreet, and a thunderclap demolishes the underground palace around you. You are scarcely able to escape with your life, and the maiden and the bounteous treasures are all lost, to your great sorrow. [D1/S2/<em>Grief Stricken</em>]</p>`,
	},
	1145: {
		index: 1145,
		text: `<p>In a secret chamber you have discovered a beautiful maiden, the slave of a wicked 'efreet. Suddenly she cries for you to hide, and the 'efreet appears. "I smell the presence of another," he roars. "You have betrayed me!" You confront the 'efreet.</p>
<p><b>No Skill:</b> "Perhaps I shall take you captive," he says.</p>
<p><em>Roll one die, adding two each for Sparkling Spear and Protective Talisman:</em></p>
<p>❖ 1–3: You cannot match powers with an 'efreet, and are quickly overwhelmed. [D1/<em>Enslaved</em>]</p>
<p>❖ 4+: With a remarkable effort of powerful magic, you slay him and liberate the woman—and do not hesitate to take his treasure as well. [D2/S2/W+2 (Max: Rich)/<em>Beloved</em> (if you are male and not <em>Married</em>)]</p>
<p><b>Appearance:</b> You quickly spin a tale of how your love for the maiden has brought you here, and how not miles, nor privation, nor the fear of death could keep you apart. Finally, you fling yourself at the maiden's feet, proclaiming that you would gladly serve a life of eternal torment to be together with the soul of your heart. The 'efreet cannot bear to slay you. "You have been faithful to me," he says to the maiden. "You deserve one such as this." The maiden bows deeply before the 'efreet, and arm in arm you flee the cavern. The scent of her hair is most enchanting as you come again into the open air, and you celebrate your victory together. [D2/S2/Appearance/<em>Beloved</em> (if you are male and not <em>Married</em>)]</p>`,
	},
	1146: {
		index: 1146,
		text: `<p>In the side of a hill, you discover a jeweled trapdoor. Cautiously you enter, and see within is a fabulous treasure! You greedily pick up the treasure, and the door slams shut. Surprised, you drop your spoils—and the door opens. It seems you may gaze at the treasure but cannot steal it.</p>
<p><b>No Skill, Wealth: Poor</b> or less (mandatory): Your greed holds you prisoner. You do not leave until almost dead with hunger, and still you cannot remove the thoughts of the gold from your mind. [D-1/<em>Envious</em>]</p>
<p><b>Wealth: Princely</b> or greater (mandatory): Treasure isn't worth starving over. You leave behind the treasure and walk out safely. [D1/Wisdom]</p>
<p><b>One Hundred Keys:</b> You think of your keys and wonder... Taking them out you try one of the keys. It works! You dash out with your loot. [W+3 (Max: Princely)]</p>`,
	},
	1147: {
		index: 1147,
		text: `<p>While traveling in the land of King Omar, you notice a trapdoor in the side of a jeweled statue. You curiously open it and enter. Following a long, dark corridor for hours, you see two individuals standing before the king's underground treasure-house.</p>
<p><b>No Skill:</b> They must be Omar's guards—you dare not let yourself be seen. You prudently withdraw. [S1]</p>
<p><b>Stealth and Stealing:</b> From their demeanor, you realize these two are thieves of the local guild. They must have tunneled into King Omar's treasure vault. They continue collecting treasure for a while, then leave. You manage to obtain a few small items before the guards come for inspection. [D1/W+1 (Max: Respectable)]</p>`,
	},
	1148: {
		index: 1148,
		text: `<p>You found a small trapdoor in a jeweled statue. Behind it was a winding corridor, which you followed to King Omar's treasure vault. There you surprised two thieves!</p>
<p><b>No Skill:</b> Before you can say a word, they jump you and knock you senseless. When you come to, King Omar's guards have imprisoned you for robbery. [D1/<em>Imprisoned</em>]</p>
<p><b>Weapon Use:</b> You approach them, sword drawn. With one glance at your threatening demeanor, they volunteer a three-way split of the goods, to which you readily agree. [D2/W+2 (Max: Rich)]</p>`,
	},
	1149: {
		index: 1149,
		text: `<p>You are pursued by the king's guards. They are closing fast—you must find a place to hide! A sparkle in the darkness draws your attention, and you find a trapdoor in the middle of a thicket! The door is decorated with cut glass and the handle is cast iron. You quickly open it to hide within. You suddenly realize the abandoned chamber within is filled with ants!</p>
<p><b>No Skill:</b> You let out a shriek that would wake the dead. Traduced by yourself, you are captured. [D1/<em>Imprisoned</em>]</p>
<p><b>Enduring Hardship:</b> Ants are better than prison or beheading, so you keep still. After the guards pass, you open the door. When you do—praise Allah!—the ants turn to gold! [D2/S1/W+2 (Max: Rich)]</p>`,
	},
	1150: {
		index: 1150,
		text: `<p>A muffled cry attracts your attention to a bare patch of ground where you find a beautiful diamond! Fearing some devilment, you examine it carefully.</p>
<p><b>No Skill:</b> There is no sign of danger; you touch it, a trapdoor opens beneath you, and you fall in a well with several others. After a cold and miserable day, a mad prophet lets you all out, saying, "Beware avarice!" [D-1/S1]</p>
<p><b>Stealth and Stealing:</b> A fine wire leads from the diamond to a cleverly concealed latch—there is a trapdoor beneath your feet! You take the diamond and free several less cautious than you from the trap. [D2/W+1 (Max: Rich)]</p>
<p><b>Envious</b> (mandatory): You see no hint of danger, and the size of the diamond dispels all caution. When your grasping fingers reach the gem, a trapdoor opens below you and you fall into a pit. Your greed is such that you maintain your grip on the gem, and the other victims caught in the pit tear you limb from limb in their desire to attain it. [Death]</p>`,
	},
	1151: {
		index: 1151,
		text: `<p>While spending the night as a guest of a rich recluse, you are awakened by a menacing figure emerging from a hidden trapdoor.</p>
<p><em>You may shout a warning or watch and wait:</em></p>
<p><em>If you shout a warning:</em> [Go to paragraph 1152]</p>
<p><em>If you watch and wait:</em></p>
<p><b>No Skill:</b> The figure moves toward the master bedroom. Petrified, you do nothing. Soon the figure returns to the trapdoor and disappears; in the morning you are arrested for the murder of your host. [D1/<em>Imprisoned</em>]</p>
<p><b>Quick Thinking:</b> As the figure moves to your host's room, you slam shut the trapdoor behind him and attack. With no escape, he surrenders and is revealed as an assassin. The owner of the house is most grateful. [D1/S1/W+1 (Max: Respectable)]</p>`,
	},
	1152: {
		index: 1152,
		text: `<p>While sleeping in the house of a rich recluse, you see a shadowy figure emerge from a trapdoor and move menacingly toward your host's room. You shout a warning and the figure leaps at you.</p>
<p><b>No Skill:</b> He wounds you severely before disappearing through the trapdoor, never to return. [D1/<em>Wounded</em>]</p>
<p><b>Weapon Use:</b> You strike the assassin's head from his body. Your host is most grateful. [D2/S1/W+1 (Max: Respectable)]</p>`,
	},
	1153: {
		index: 1153,
		text: `<p>You intended to rob the wicked Vizier Kafour, but his gates are well locked and guarded. Now, a greasy thief offers to sell you a secret way into the vaults.</p>
<p><b>No Skill:</b> You agree, but his information leads through a trapdoor—into the arms of waiting guards! [D1/W-1 (Min: Poor)/<em>Imprisoned</em>]</p>
<p><b>Bargaining and Evaluation:</b> You refuse to pay until after the robbery. He decides to go with you and leads you through a trapdoor into a maze of corridors leading to the treasure vault! "We have two minutes before the guard comes," he hisses. You stuff your pockets quickly and make good your escape. [D2/W+1 (Max: Rich)]</p>`,
	},
	1154: {
		index: 1154,
		text: `<p>A violent storm washes the mud and sand off a huge, jewel-studded trapdoor. You try to lift it, but it is too heavy. You need a trustworthy soul to help you.</p>
<p><b>No Skill:</b> Sadly, your judgment is poor. The man you choose loots the treasure chamber before you get there, leaving you holding nothing but air. [D-1/S1/<em>Envious</em>]</p>
<p><b>Appearance, Seduction:</b> Your beauty and charm have won you many devoted admirers, and you choose one to whom you entrust your secret; together you lift the door and discover an ancient tomb, laden with gold. [D1/S1/W+2 (Max: Rich)/<em>Beloved</em> (if not <em>Married</em>)]</p>`,
	},
	1155: {
		index: 1155,
		text: `<p>A large door, guarding a secret treasure chamber, stands before you. The key to opening it is contained in the arcane writings covering the door, so you brought a wise man who reads the ancient language. You kept him blindfolded, so that he would not learn the chamber's location.</p>
<p><b>No Skill:</b> The old one opens the door, revealing a huge chamber filled with gold! You leave the man to fetch a mule, but when you return, you find that the old man counted his footsteps, retraced his route, and emptied the chamber. [<em>Envious</em>]</p>
<p><b>Storytelling, Courtly Graces, Quick Thinking:</b> Not only did you blindfold him, but you chattered constantly while walking so that he could not memorize the route. You make a fortune. [D3/S1/W+3 (Max: Princely)]</p>`,
	},
	1156: {
		index: 1156,
		text: `<p>On a stormy night, a strange, rickety house suddenly appears in an empty field. The Sultan employs you to investigate, but as you approach it, you step on a trapdoor and fall headlong into a dark chamber. Later, you hear footsteps and call for help. "I will aid you," says the other, "but the reward shall be mine!"</p>
<p><b>No Skill:</b> You have no choice but to agree. Together you learn the secret of the house (a fascinating story of an enchanter who tried to hoodwink a djinn and ended up losing his house in a sandstorm), but the other fellow collects the reward. [S1]</p>
<p><b>Bargaining and Evaluation:</b> You hold out for a cut of the reward, observing that your aid will improve his chances of survival. Together, you discover the secret of the house (a fascinating tale of a foolish washerwoman granted three wishes), and you split the reward. [D1/S1/W+1 (Max: Respectable)]</p>`,
	},
	1157: {
		index: 1157,
		text: `<p>By the request of the Sultan, you are investigating a mysterious house which appeared in the middle of an open field. Alas, you fall into a secret trapdoor and are stuck! Later, another enters the house and offers to save you for the reward. You decline and begin looking for your own way out.</p>
<p><b>No Skill:</b> You cannot find a exit. You languish for days, until the house vanishes once again, and (fortunately) you are left sitting in the open field. [D-1/S1]</p>
<p><b>Enduring Hardship:</b> You search diligently. Finally, you find a concealed latch! You open another secret door and find your way to a chamber filled with magical items and treasure (as well as a way out!). You help yourself, and leave the other to his measly reward. [D2/S1/W+2 (Max: Rich)/<b>Treasure</b>]</p>`,
	},
	1158: {
		index: 1158,
		text: `<p>On Ape Island, you devise a scheme to aid the city dwellers: during the day they will build giant "scarecrows" and, at dusk, put them at the edges of the city to scare the apes away.</p>
<p><b>No Skill:</b> Much gold and time is spent constructing the dummies, but alas, the apes are not frightened. They destroy the scarecrows and continue their rampage. The people are furious at you, and you wisely travel on. [D1/<em>Scorned</em>]</p>
<p><b>Wilderness Lore:</b> You survey the scarecrows and feel an additional touch is needed. Ah! You tell the people to set fire to the dummies, and the apparitions blazing through the night succeed in scaring away the apes for good. [D2/S1/<em>Respected</em>]</p>`,
	},
	1159: {
		index: 1159,
		text: `<p>You bring a plan to the prince, calling for lions and tigers to be imported to the island. When all is prepared, the predators are to be let loose to battle the apes.</p>
<p><b>No Skill:</b> Once this is done, indeed, the apes are no longer a problem. Now the lions and tigers are a problem. Your suggestion to import elephants is ignored, and you move on to solve other problems. [D-1/S1]</p>
<p><b>Scholarship:</b> At the last minute, you realize the just sight and smell of the great cats will be enough to scare the apes, and have them set out in vast cages on the beaches. The plan works, and you are showered with honors. [D2/S1/Wisdom/<b>Robe of Honor</b>]</p>`,
	},
	1160: {
		index: 1160,
		text: `<p>You suggest placing itching powder in the streets to deter the ape hordes.</p>
<p><b>No Skill:</b> Since most of the citizens are too poor to afford shoes, your plan is of little practical use. [D-1/S1]</p>
<p><b>Courtly Graces:</b> You add that shoes might be provided for the poor. The prince suggests that YOU pay for them. You observe that money can be raised by selling boats formerly used to escape the apes. This brilliant combination nets you many honors. [D2/S1/Quick Thinking/<b>Robe of Honor</b>]</p>`,
	},
	1161: {
		index: 1161,
		text: `<p>You want to view the apes to study the problem. You discover why the apes come down: at night the mountains are extremely cold.</p>
<p><b>No Skill:</b> Even with this insight, you have no idea what to recommend, and depart by another route. [S1]</p>
<p><b>Wisdom:</b> You propose that fire-pots be placed on the mountain and maintained by towns people. The apes are well satisfied and plague the town no more. [D2/S1/<em>Respected</em>]</p>`,
	},
	1162: {
		index: 1162,
		text: `<p>You suggest great hunts to reduce the ape population.</p>
<p><b>No Skill:</b> The first hunting group is caught on the mountain at night and is decimated by the apes. You feel responsible for the deaths; others feel that way as well. [D-1/S1/<em>Scorned</em>/<em>Grief Stricken</em>]</p>
<p><b>Wilderness Lore, Weapon Use:</b> Since you are well-prepared, no one in the hunting party is injured, and the apes are decimated. They will pose no threat to the village this year—your plan worked! [D2/S1/<em>Respected</em>]</p>`,
	},
	1163: {
		index: 1163,
		text: `<p>You wish to remain in the city at night to observe the hordes of apes that plague it, but the prince's Vizier denies you permission.</p>
<p><b>No Skill:</b> You have no choice but to comply with the Vizier's orders, and decide to go where your help will be better-appreciated. [S1]</p>
<p><b>Determined</b> (mandatory), <b>Stealth and Stealing:</b> You sneak into town and discover not apes but the Vizier's men are looting houses (though in the poor light it is hard to tell them apart). You reveal this to the prince and the Vizier is stoned to death; the grateful prince makes you the new Vizier. [D2/S1/<em>Vizier</em>]</p>`,
	},
	1164: {
		index: 1164,
		text: `<p>You are in a hurry to keep an assignation with your love, but must first have your hair cut. You engage an old barber who studies the stars to see if the time is propitious. He refuses to cut your hair!</p>
<p><b>No Skill, Weapon Use</b> (mandatory): After heated argument, you go wild and nearly chop him to ribbons. The prince's guards drag you off, and you miss your tryst. [D2/<em>Grief Stricken</em>/<em>Imprisoned</em>]</p>
<p><b>Enduring Hardship:</b> You forebear to batter the old man, despite the provocation. Finally you bid him to leave, and hurry to catch your lover, unkempt as you are. [D2/S1/<em>Beloved</em> (if not <em>Married</em>)]</p>`,
	},
	1165: {
		index: 1165,
		text: `<p>You call a barber to cut your hair before you meet your love. The barber, who calls himself The Silent, proceeds to vaunt his knowledge of alchemy, astrology, white magic, grammar, rhetoric, arithmetic, and the Traditions of the Prophet. He somehow omits to cut your hair.</p>
<p><b>No Skill:</b> You chase him all about, but the old coot is surprisingly spry; you manage to fall and break a leg. Needless to say, you miss your rendezvous with your love. [D-1/<em>Insane</em> (1 turn)]</p>
<p><b>Quick Thinking:</b> You challenge him to demonstrate his powers by getting out of a locked trunk, and he agrees. Your friends carry the trunk to the river and toss it in while you hurry to meet your love. [D2/S1/Quick Thinking/<em>Beloved</em> (if not <em>Married</em>)]</p>
<p><b>Outlaw</b> (mandatory): Finally at the end of your patience, you snatch up his razor and cut out his tongue. You regret your rash action, as he turns out to be an especial favorite of the Caliph. Your head is removed, and placed up on a pole as a warning to other impetuous travelers. [Death]</p>`,
	},
	1166: {
		index: 1166,
		text: `<p>You engage a barber. In five hours he cuts only half your hair, and he will not stop giving you the benefit of his wisdom. Finally you strike him and dash off into the street—but despite your blow, the man is right at your heels spouting advice.</p>
<p><b>No Skill:</b> You become the laughing stock of the neighborhood. [D-1/S1/<em>Scorned</em>]</p>
<p><b>Courtly Graces:</b> You stop and engage him in conversation, hoping to reveal him as a fool. Oddly, he turns out to be intelligent and well-versed. Your conversation is noticed by the Sultan, who invites both of you to his palace for a banquet. [D2/S1/Luck/<em>Respected</em>]</p>`,
	},
	1167: {
		index: 1167,
		text: `<p>No matter where you go, the old barber drives you mad with his incessant chatter. Finally you challenge him to a contest of magical spells—he must leave if he is the loser. At last you'll get peace!</p>
<p><b>No Skill:</b> Unfortunately, the old barber's boasts are not exaggerated—he is a master of magic. You are forced to continue listening to him, which brings sorrow under your eaves. [<em>Grief Stricken</em>]</p>
<p><b>Magic:</b> You win the contest, but he is quite good. You change your mind and decide to keep him with you as a teacher. [D2]</p>`,
	},
	1168: {
		index: 1168,
		text: `<p>You beg Allah for deliverance from this chattering old man—in return you vow to observe your devotions and to be charitable to all.</p>
<p><b>No Skill:</b> Allah must feel you are in need of a trial. You offer the old man a handful of coins to leave you alone but he swears to stay by you and give you advice on the proper conduct of the Faith. You weep. [D-1/<em>Grief Stricken</em>]</p>
<p><b>Luck:</b> A beggar comes by. You take this as a test from the Supreme One and fill his cup with coins. The Barber speaks to the beggar, and discovers him to be his long lost brother! They leave together. Praise the One Lord! [D1/W-1 (Min: Respectable)/Piety]</p>`,
	},
	1169: {
		index: 1169,
		text: `<p>The Barber has been chattering for hours, and has hardly cut a hair. You are already late for a rendezvous with your lover and offer to pay him double if he finishes in the next few minutes when he admonishes you that the time for prayer is almost here.</p>
<p><b>No Skill:</b> You grudgingly permit him to stay through the prayer time, then boot him out. [D1]</p>
<p><b>Piety:</b> You are impressed with his piety, and see that behind the blather is a wise and devout man. You invite him to be your companion. [D2/Scholarship/Storytelling]</p>`,
	},
	1170: {
		index: 1170,
		text: `<p>You have listened to the old man go on and on about this and that and he hasn't even started cutting your hair. Finally your patience runs out and you let loose a blistering oath fit to singe the ears of a dockworker.</p>
<p><b>No Skill:</b> The old man properly chastises you, then resumes his rambling without missing a beat. You flee, screaming, and your hair never gets cut. [D-1]</p>
<p><b>Scholarship:</b> "By the beard of Al-Musif, let me alone!" you cry. Taken aback, the Barber quotes Al-Musif by heart, intoning passages you have never heard. Amazed, you converse enthusiastically with him all through the night—how could you have ever thought him a fool? He is truly among the most learned of men! [D2/Scholarship]</p>`,
	},
	1171: {
		index: 1171,
		text: `<p>Standing before the Crystal Palace, you stare in awe at its beauty. It appears untouched by time, and you wonder if the legends are true. One glance at the fearsome guards tells you that the king within is certainly capable of cruelty.</p>
<p><b>No Skill:</b> Having feasted your eyes on the wondrous facade of the palace, you continue with your journey. [D1/S1]</p>
<p><b>Determined</b> (mandatory), <b>Scholarship:</b> You must learn more, and you approach the palace. The guards bar your way, but you refuse to be denied. Suspecting you are an assassin, the guards deal cruelly with you, though you are still able to walk when they are finished. [D1/S1/<em>Wounded</em>]</p>`,
	},
	1172: {
		index: 1172,
		text: `<p>You gaze adoringly on the shimmering palace before you—a vision of loveliness!</p>
<p><b>No Skill:</b> You are drawn by the vision. Coming too close, you are enslaved by the Sultan's men. [D1/S1/<em>Enslaved</em>]</p>
<p><b>Wisdom:</b> Recognizing the danger of the Sultan's guard, you prudently observe the palace from afar. [D1/S1/Wisdom]</p>`,
	},
	1173: {
		index: 1173,
		text: `<p>The outside of the palace is so splendid that you yearn to view the wonders inside.</p>
<p><b>No Skill:</b> The guards catch you trying to enter the palace. They beat and send you away with a warning. [D1/S1/<em>Wounded</em>]</p>
<p><b>Acting and Disguise:</b> You study the guards' routine and manage to enter the palace in disguise. The marvels within are a feast for the eyes, the heart, and the mind. [D2/S2/Wisdom/<em>Blessed</em>]</p>`,
	},
	1174: {
		index: 1174,
		text: `<p>As you approach the gates of the Crystal Palace, you note the grim, forbidding guards. You despair of entering to view its wonders, but must try.</p>
<p><b>No Skill:</b> As you expected, the guards turn you away. [<em>Grief Stricken</em> (1 turn)]</p>
<p><b>Piety:</b> Your earnest and devout entreaties move the guards to compromise their orders. They give you a tour of its splendors. [D1/<em>Blessed</em> (1 turn)]</p>`,
	},
	1175: {
		index: 1175,
		text: `<p>You hear cries of distress from a person standing in the uppermost window. Looking up, you see her visage is like unto the sun upon water!</p>
<p><b>No Skill:</b> You are turned aside by the guard at every attempt to enter, and never manage to enter the palace. [D-1/S1]</p>
<p><b>Ebony Horse, Flying Carpet:</b> You fly over the walls of the palace and rescue the distressed one from such a vile plight.</p>
<p><em>If you are not Married:</em> The beauty of the one you have saved seems even greater as you hold tightly to each other in the air, and when you are safely on the ground again, you remain in each other's arms for a long while. [D2/S2/<em>Beloved</em>]</p>
<p><em>If you are Married:</em> The one you have rescued leads you across the lands to the palace of a powerful Sultan. He showers you with honors and gifts for rescuing his oldest child, and offers you the child's hand in marriage. You must decline, though, for the love of your spouse. [D2/S2/W+3 (Max: Rich)/<b>Robe of Honor</b>]</p>`,
	},
	1176: {
		index: 1176,
		text: `<p>From within the palace come cries of distress, which draw you nearer.</p>
<p><b>No Skill:</b> The guards are too numerous and vigilant for you. They repulse your every attempt to enter the palace and, at last, become impatient with you, giving you a beating and a warning not to bother them again. [D-1/<em>Wounded</em>]</p>
<p><b>Acting and Disguise:</b> You observe those who go through the gates and impersonate them. The guards do not pierce your deception. Once inside, you find the one in distress; together you escape in the costume of a donkey.</p>
<p><em>If you are not Married:</em> When you are far away, you remove the costume, and discover the beneficiary of your kindness to be of consummate beauty, and the costume is not the last of your clothing to be shed. [D2/S1/<em>Beloved</em>]</p>
<p><em>If you are Married:</em> The person you have saved was unjustly imprisoned for the crimes of another. With your help, he manages to prove his innocence, and your wisdom and kindness are shown to all. [D2/S1/Wisdom/<em>Respected</em>]</p>`,
	},
	1177: {
		index: 1177,
		text: `<p>A passing dendan rocks your ship so badly that you are swept over the side. You are desperate with fear, and call out, hoping the merfolk will hear.</p>
<p><b>No Skill:</b> You panic, swallowing so much water you can't even cry for help; you grasp a bit of flotsam and drift with it until you are picked up by another ship. [D1/Have another player move you to any sea space]</p>
<p><b>Enduring Hardship:</b> You endure the cold water until—miracle of God!—the merfolk do arrive and convey you back to the ship. [D1/S1/Luck]</p>`,
	},
	1178: {
		index: 1178,
		text: `<p>A passing dendan rocks your ship so badly that you are tossed overboard; you have seen merfolk in this region and call out to them.</p>
<p><b>No Skill:</b> Unfortunately the dendan finds you first. You are swallowed, living in the creature's inner cupboards until, at last, you are spat up on a distant shore. [D1/Have another player move you to any sea space]</p>
<p><b>Wilderness Lore, Scholarship:</b> The sound of a human voice is said to stop the dendan; you cry out, and it dies. The merfolk arrive in time to save you and return you to your vessel. Before you return to the ship, you gather some oil from the beast. [D2/S1/<b>Dendan Oil</b>]</p>`,
	},
	1179: {
		index: 1179,
		text: `<p>As you sail the seas, you spy a group of merfolk. You steer their way and descend into the water to speak with them. Suddenly a great dendan comes upon you, and the merfolk flee.</p>
<p><b>No Skill:</b> You shout to kill the dendan, but are so buffeted by waves that you cannot manage it. You are swallowed, imprisoned in the creature's insides, and tossed up long after on strange shores. [D-1/Move to any coastal space]</p>
<p><b>Appearance:</b> One of the merfolk stays with you; seeing you struggle in the water, she supports you. You shout and slay the creature.</p>
<p><em>If you are not Married:</em> You do not return directly to the ship, though, but remain in the water in the arms of the Sea-Born who has saved you. Together, you explore the differences between her race and yours. When finally you do return to the ship, she comes aboard with you, professing her undying love. [D2/S1/<em>Beloved</em>]</p>
<p><em>If you are Married:</em> You return to the ship in the company of the sea-dweller, and converse with her long into the night, discoursing on the differences between your peoples. When finally she departs, she grants you a gift. [D2/S1/<b>Dendan Oil</b>]</p>`,
	},
	1180: {
		index: 1180,
		text: `<p>You take a lifeboat and fish at some distance from your vessel. Suddenly a dendan appears, making for the ship. You have heard that the shout of a human can kill a dendan. You cry out to Allah and, if prayer doesn't work, you also draw your sword.</p>
<p><em>Roll two dice, adding one for Luck:</em></p>
<p>❖ 2–7: The dendan must not have heard you, for it is not slain. You are swallowed and finally spat up on a distant shore. You should have put more faith in your prayers than your sword. [D1/S1/Have another player move you to any coastal space]</p>
<p>❖ 8+: What luck! The dendan is slain by your cry. You are a hero, and manage to gather some of its oil. [D2/S1/<em>Respected</em>/<b>Dendan Oil</b>]</p>`,
	},
	1181: {
		index: 1181,
		text: `<p>A mad scholar wants someone to swim around as bait so he can examine the dendan. He offers one dinar for the task. You pray for guidance.</p>
<p><b>No Skill:</b> Not surprisingly, Allah does not wish you to risk your life for such a mad task. [S1]</p>
<p><b>Bargaining and Evaluation:</b> You reason with him. The scholar is so eager for a sight of the dendan that he agrees to give you a marvelous magical device as payment, if he gets to see one. You descend into the water. When a dendan appears, the scholar is rapturous with delight. [D1/S1/<b>Celestial Planisphere</b>]</p>`,
	},
	1182: {
		index: 1182,
		text: `<p>While far out to sea, you spy a dead dendan floating on the surface. Lots are drawn, and you are chosen to go collect the oil of the creature. You row out to the carcass, praying fervently.</p>
<p><b>No Skill:</b> While you are carving the carcass, a giant squid rises from the deep and enfolds you in its tentacles. You are dragged down and barely manage to struggle free. [Go to paragraph 315]</p>
<p><b>Luck:</b> As you carve, a flying fish smacks you in the face. Startled, you look up—into the eye of a giant squid, its tentacles reaching for you. You dash for the boat and escape the monster's grasp. [D1/S1/Luck/<b>Dendan Oil</b>]</p>`,
	},
	1183: {
		index: 1183,
		text: `<p>You meet another ship whose captain says he has found a dead dendan and is willing to sell the magic oil.</p>
<p><b>No Skill:</b> You cheerfully pay the price but soon discover you were cheated. [W-1 (Min: Poor)]</p>
<p><b>Wilderness Lore, Scholarship:</b> You quickly deduce that the creature he is selling is not a dendan. You punish the infidel for his perfidy. [D1/S1]</p>`,
	},
	1184: {
		index: 1184,
		text: `<p>You have come to view that creature of legend—the elephant. You engage a guide who promises you a glimpse of this marvelous creature.</p>
<p><b>No Skill:</b> Your guide turns out to be a fraud. He brings you to a band of brigands who rob you completely. [D-1/S1/W-2 (Min: Poor)]</p>
<p><b>Wilderness Lore:</b> You quickly realize that your guide is not as skilled as he claimed; you know almost as much about the area as he does. However, he is not useless: by supplementing your knowledge with his, you manage to find an elephant. Truly it is a magnificent beast! [D1/S2]</p>`,
	},
	1185: {
		index: 1185,
		text: `<p>In your explorations, you discover an elephant carcass stripped of its tusks—the work of poachers! You fear that they will kill you if they find you here.</p>
<p><b>No Skill:</b> You flee, but the poachers find you and, assuming you will reveal them to the prince, beat and confine you as incentive to keep your mouth shut. [D1/<em>Imprisoned</em>]</p>
<p><b>Quick Thinking:</b> The poachers return but you scramble into a tall tree to avoid them. When they have gone, you report immediately to the prince. He captures them and praises your good deeds. [D1/S1/<em>Respected</em>]</p>`,
	},
	1186: {
		index: 1186,
		text: `<p>While hunting elephants, you and your companion, Omar, are very fortunate; you gather many valuable tusks. However, Omar betrays you and moves to take all the tusks. Silently, you invoke Allah the Supreme, asking for justice.</p>
<p><b>No Skill:</b> Alas, Omar still has you at his mercy. You are forced to give up the tusks which were rightfully yours. [D1/<em>Envious</em>]</p>
<p><b>Piety:</b> An elephant steps out of the forest at that moment and tramples the perfidious Omar. All praise the Merciful God! [D1/S1/Piety]</p>`,
	},
	1187: {
		index: 1187,
		text: `<p>You wish to hunting elephants, but you know it is not a job for a novice. You hire several locals as your guides. In the brush on your first day, your guides spot a huge one. You are chosen to make the first attack—a great honor. You pray that your spear might find its mark.</p>
<p><b>No Skill:</b> Nervous, you jab at the great beast, but you miss the mark. The elephant is enraged, and rampages. Your weak nerve has endangered your friends. [D-1/<em>Scorned</em>]</p>
<p><b>Weapon Use:</b> You stand firm and deliver your attack with force and accuracy. The others congratulate you on your courage and skill. [D1/S1/Piety/<em>Respected</em>]</p>`,
	},
	1188: {
		index: 1188,
		text: `<p>You wish to hunt elephants, but know you will need aid in such an endeavor.</p>
<p><b>No Skill:</b> You hire a number of willing individuals. However, when you come upon an elephant, your companions scatter in terror, and you realize you should have sought better trained helpers; you are fortunate to escape unharmed. [D-1/Wisdom]</p>
<p><b>Wilderness Lore:</b> You travel from place to place seeking the right men, and when you finish you have found a group you can rely on. You seek the mighty elephant and conquer him with minimal risk. [D2/S2/W+1 (Max: Respectable)]</p>`,
	},
	1189: {
		index: 1189,
		text: `<p>You are alone in the forest when you are suddenly confronted by a rogue elephant. It charges!</p>
<p><b>No Skill:</b> You set your spear, but in your terror your aim is not true, and the animal is only wounded. Again and again it attacks, and if it did not abruptly lose interest and walk away, you would be dead. [D1/S1/<em>Crippled</em>]</p>
<p><b>Luck:</b> You stand firm and hope for the best. Fortunately your puny spear wounds the creature mortally; it withdraws. [D1/Go to paragraph 1190]</p>
<p><b>Golden Bridle:</b> In a burst of inspiration, you produce the Golden Bridle. The elephant bows down before its power, and you ride upon it in the manner of kings. [D2/S1/W+2 (Max: Princely)]</p>`,
	},
	1190: {
		index: 1190,
		text: `<p>You track a wounded elephant, hoping to find the fabled Elephant's Graveyard. Indeed, the trail leads to a great cliff—down below you see the carcass of the wounded animal, and the bones and tusks of generations.</p>
<p><b>No Skill:</b> You are overcome with greed and scramble down. The way down is treacherous, and you slip and fall. Your injuries are painful; only through determination do you manage to drag yourself out. [D-1/<em>Determined</em>]</p>
<p><b>Wisdom:</b> Even if you could get down safely, you could never bear out anything of value. You're content observing this marvel, and returning to tell of it. [D1/S2/Storytelling]</p>`,
	},
	1191: {
		index: 1191,
		text: `<p>You follow a wounded elephant, hoping to discover the Elephant's Graveyard. You come upon another one, apparently mortally wounded, blocking your path.</p>
<p><b>No Skill:</b> You try to slip past, but the elephant is a guardian. It rises and charges nimbly. Later, a band of merchants find you in the forest, far from the Graveyard, walking in a daze. [D1/S1/<em>Insane</em>]</p>
<p><b>Scholarship:</b> You know the legends of a deadly guardian before the Graveyard; you prudently cease your search, and return to safer lands. [D1/Wisdom]</p>`,
	},
	1192: {
		index: 1192,
		text: `<p>Standing above the Elephant's Graveyard, you marvel at the heaps of bones and tusks spread out before you. Suddenly, you are grasped from behind! A great bull elephant has rolled you in his trunk and is bearing you off through the forest.</p>
<p><b>No Skill:</b> You are carried for hours. You become dizzy, disoriented, and lose all sense of direction; finally you lose consciousness. When you awake, you have no idea where you are. [D1/<em>Lost</em>]</p>
<p><b>Quick Thinking:</b> You play dead. After you have been limp and motionless for a while, the elephant drops you and moves off silently into the forest. Fortunately you have been able to maintain your sense of direction, and return quickly to civilization. [D2/S1]</p>`,
	},
	1193: {
		index: 1193,
		text: `<p>You discover the Elephant's Graveyard. With its confines are true mountains of ivory, and you are dazzled by the wealth. You cannot possibly carry all the tusks from the forest yourself. You return to notify the prince of this land.</p>
<p><b>No Skill:</b> The prince is a good man, but his vizier is a scheming cur! In a trice, you are seized, borne away by the palace guards, and abandoned in the desert. [Go to paragraph 1202]</p>
<p><b>Courtly Graces:</b> You know that the wicked vizier will council treachery; therefore, you choose to speak to the prince before an open audience, so that all may know that you are the one who discovered the treasure, and thus deserve a handsome reward. The return expedition is a success. [D1/S1/W+2 (Max: Rich)]</p>`,
	},
	1194: {
		index: 1194,
		text: `<p>You stumble across the Elephant's Graveyard. There is a fortune in ivory there, but you can scarcely carry a single tusk.</p>
<p><b>No Skill, Wealth: Poor</b> or less (mandatory): You abandon your other possessions to carry a tusk. Alas, while crossing a river, the tusk is lost. Without gear or provisions, you return home. [D1/W-2 (Min: Beggar)]</p>
<p><b>Wisdom:</b> Your chances of making it back with even one tusk are very poor. You resign yourself to returning later with an expedition. When you return, you hope to bear away a princely treasure. [Go to paragraph 1195]</p>`,
	},
	1195: {
		index: 1195,
		text: `<p>You have learned the location of the Elephant's Graveyard and are assembling an expedition to go there and bear away a fortune.</p>
<p><b>No Skill:</b> In the end, the journey proves too perilous and exhausting. Many die, others desert, and those who stay do so only out of greed. The expedition ends in disaster, nearly bankrupting you. [D1/S1/W-2 (Min: Poor)/<em>Grief Stricken</em>]</p>
<p><b>Wilderness Lore:</b> Your excellent reputation draws the finest men to the mission. When you emerge from the forest once again, you are a wealthy man. [D2/S1/W+3 (Max: Princely)/<em>Respected</em>]</p>
<p><b>Envious</b> (mandatory): Slipping and stumbling in your greedy haste, you manage to reach the bottom of the valley with only a few injuries. Choosing only the choicest tusks, you soon collect a sizable pile of the priceless ivory, knowing that your fortune will be made forevermore. As darkness begins to fall, you reluctantly tear yourself from the pleasant task of gathering your pillage and start up the cliff-side toward freedom. Unfortunately, you selected too great a burden in your greed, and lose your grasp on the treacherous cliff. You fall, and your remains mingle with those of the elephants whom you sought to plunder. [Death]</p>`,
	},
	1196: {
		index: 1196,
		text: `<p>Prince Taj el Mulouk has fallen in love with Dunya, the daughter of the King of the Camphor Islands, but Dunya spurns his love poems, for she is said to be averse to men.</p>
<p><b>No Skill:</b> You cannot discover the reason for Dunya's dislike of men, and cannot aid the young prince. [S1]</p>
<p><b>Acting and Disguise, Quick Thinking:</b> Disguised as an old wise-woman, you converse with Dunya to learn from Dunya her thoughts. She tells you of her dream: "A male dove caught by a fowler's net was a female, but when the female was caught, the male dove did not help. This shows the worthlessness of males." You report this to the prince, and he praises you for your aid. He then asks your advice on making her see that men are not without virtue. [D1/S2/<em>Respected</em>/Go to paragraph 1197]</p>`,
	},
	1197: {
		index: 1197,
		text: `<p>Prince Taj el Mulouk has learned that his intended love, Princess Dunya, distrusts men on account of a dream she has had. In the dream a male dove failed to rescue a female dove from a fowler's net.</p>
<p><b>No Skill:</b> You have no idea how to disabuse the woman of her odd notions, and you can't help the prince. [S1]</p>
<p><b>Storytelling:</b> You suggest a solution, which the prince turns into a verse: the male dove did not come, for he was slain by a hawk while struggling to return to his love. Dunya reads the verse and is deeply moved. Soon after, Prince Taj asks you to help him approach the Princess to press his suit. [D1/S1/Go to paragraph 1198]</p>`,
	},
	1198: {
		index: 1198,
		text: `<p>Prince Taj el Mulouk hopes that Dunya, Princess of the Camphor Isles, has turned aside from her unreasoning hatred of men. He wishes to stand before her that he might cause her to love him. You accompany the prince to palace of her father to aid in the negotiations for his marriage.</p>
<p><b>No Skill:</b> The palace is too well guarded, and you can find no way to sneak the prince in. [D1]</p>
<p><b>Courtly Graces:</b> You bribe the palace guards to allow your passage. When dawn comes, Dunya steps to the window. Seeing the prince, she is smitten with love. The prince is very grateful to you and promises you great honors. However, the affairs of the heart do not always flow with the smoothness of a gentle river. [D2/S2/<b>Robe of Honor</b>/Go to paragraph 1199]</p>`,
	},
	1199: {
		index: 1199,
		text: `<p>Prince Taj el Mulouk has secretly entered the palace of the King of the Camphor Isles to profess his love to Princess Dunya. The two lovers are discovered by the king, and the headsman is summoned. You declare yourself their advocate and undertake to argue their case.</p>
<p><b>No Skill:</b> The Sultan believes Prince Taj is a commoner, and Taj (wishing Dunya to love him as a man) will not declare his noble birth. After the trial, he is banished and returns to his father's palace. So great is his sorrow that it afflicts you, as well. [D-1/S1/<em>Grief Stricken</em>]</p>
<p><b>Quick Thinking:</b> You hurry to the prince's father, who arrives in haste with his armies. He proclaims Taj his son, the two kings confer, and a magnificent wedding is undertaken. In gratitude, the couple make you a Vizier over a small province. [D3/S2/<em>Vizier</em>/Go to paragraph 1200]</p>`,
	},
};
