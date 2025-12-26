import type { Story } from "./stories";

export const stories1200: Record<number, Story> = {
	1200: {
		index: 1200,
		text: `<p>You have aided Prince Taj el Malouk in winning his love, the Princess Dunya. The couple rewards you by making you their vizier. In the midst of your reign, you receive news that your mother is suffering terribly in your native lands.</p>
<p><b>No Skill:</b> You ask Prince Taj to rule your kingdom for a while, but he is far too busy; you must abdicate your position to tend to the needs of your family, as is required of all good people. [D1/Piety/Lose <em>Vizier</em>]</p>
<p><b>Bargaining and Evaluation, Courtly Graces:</b> You offer Prince Taj and his lady a cut of the taxes if they will govern your kingdom while you are away. They accept, and you are able to rescue your aged mother from abject poverty. [D2/S1/<em>Vizier</em>]</p>`,
	},
	1201: {
		index: 1201,
		text: `<p>Never before have you encountered the fearsome lion! With a roar it charges you.</p>
<p><b>No Skill:</b> As you score a deep wound, an almost human wail comes from the beast, chilling you to the bone. You hesitate, and the lion strikes. Strangely it does not finish you off, but instead limps away. [D1/S1/<em>Wounded</em>]</p>
<p><b>Weapon Use, Golden Bridle:</b> You realize the charge is a bluff and you lower your sword. The beast pauses, nods, then turns and stalks regally off. [D2/S1/Wisdom]</p>`,
	},
	1202: {
		index: 1202,
		text: `<p>A pride of lions approaches across the sands. Fearful for your life, you run. Each time you look back, the lions are gaining. You look for a place to make your stand.</p>
<p><b>No Skill:</b> Drawing your sword, you turn to meet your doom. The lions approach, and one gazes at your sword. Finally, they turn and leave! You can truly count yourself among those favored by fortune! [D1/Luck]</p>
<p><b>Enduring Hardship:</b> As the lions close on you, you find deep wells of energy and you force yourself to flee farther. Weakness overtakes you and all goes dark. When you awaken, the lions are nowhere around. [D1/S1]</p>`,
	},
	1203: {
		index: 1203,
		text: `<p>You are fleeing from a pride of hungry lions: your only hope lies in the power of Allah.</p>
<p><b>No Skill:</b> Wishing to sell your life dearly, you turn and attack the lions. They knock you down, but as one is about to slay you, an antelope bounds by, distracting the pride. You praise Allah for His mercy. [D1]</p>
<p><b>Quick Thinking:</b> You charge up a huge dune, kicking sand behind you. This starts a small avalanche down onto the lions, killing several and scattering the rest. The pelts of the slain prove quite valuable. [D1/S1/W+1 (Max: Rich)/Luck]</p>`,
	},
	1204: {
		index: 1204,
		text: `<p>You camp one night in the desert, and wake up surrounded by lions. There is no escape.</p>
<p><b>No Skill:</b> The lions smell your fear. Several take swipes at you; you pass out. To your amazement, you awaken unhurt but greatly shamed. [D-1/S1]</p>
<p><b>Piety:</b> "There is no power but in Allah," you pray as you calmly wait your doom. But as you say the name of Allah, all of the lions bow! These beasts are no threat to the true believer; in fact, they lead you to a place of wondrous beauty. [D2/S1/Opportunity to enter the Jeweled Fortress]</p>`,
	},
	1205: {
		index: 1205,
		text: `<p>You awake to see a mighty lion near you. Such beasts may be tamed by music or soft words. You begin to chant verses from the Koran while carefully watching the lion for its reactions.</p>
<p><b>No Skill:</b> Your raucous voice merely enrages the beast. You grovel and cry out the name of Allah. The lion leaves. [D-1]</p>
<p><b>Courtly Graces, Storytelling:</b> Your pleasing voice lulls the creature. It sits and says, "What brings you here? Ah, you seek adventure, do you?" It gives you directions to a most wondrous place. [D1/S1/Opportunity to enter the Lake of Colors]</p>`,
	},
	1206: {
		index: 1206,
		text: `<p>A lion limps toward you. Even injured, you know, it could slay you before you could act. Controlling your fear, you wait. It sits before you and reveals a paw containing a huge thorn.</p>
<p><b>No Skill, Bargaining and Evaluation</b> (mandatory): You say, "What shall you do for me if I aid you?" With a terrifying roar, the incensed lion limps away. [S1]</p>
<p><b>Scholarship:</b> You remove the thorn. The lion digs in the sand at your feet and reveals a small trapdoor which conceals a fabulous treasure room! Truly good deeds are rewarded by Allah! [D1/S1/W+3 (Max: Princely)]</p>`,
	},
	1207: {
		index: 1207,
		text: `<p>You spot a lion, and decide to tame it in the manner you have heard described.</p>
<p><b>No Skill:</b> You advance, talking and singing in a soothing voice. The lion looks at you fearfully, swipes you with its enormous claws, and runs off. [D1/<em>Wounded</em> (1 turn)]</p>
<p><b>Appearance, Storytelling, Golden Bridle:</b> You calm the great beast, and it sits at your feet. It looks at you and speaks! "If you are stout-hearted, I can show profit beyond your dreams." [D2/S1/Opportunity to enter the Jeweled Fortress]</p>`,
	},
	1208: {
		index: 1208,
		text: `<p>You awaken to a most puzzling sight: all the metal objects in your caravan are moving by themselves toward a distant point.</p>
<p><b>No Skill:</b> Suddenly, the metal flies toward a distant mountain. Your sword, belt, and coins carry you with them! You strike the mountain and fall unconscious. When you awaken, you struggle free from your garments and limp back to your camp, gather what remains, and move away from this strange land. [D1/S1/W-2 (Min: Poor)]</p>
<p><b>Scholarship:</b> You know a strong magnetic force is nearby and quickly shed all your metal objects. Thanking Allah, you move the caravan away from this accursed area before you have lost all you own. [D2/S1/W-1 (Min: Respectable)/Quick Thinking]</p>`,
	},
	1209: {
		index: 1209,
		text: `<p>Something odd is happening to your possessions: they are being drawn towards a distant mountain!</p>
<p><b>No Skill:</b> The force grows; you are dragged forward by your sword and coins! You smash into the mountainside and are grievously injured, though you manage finally to free yourself. [S1/W-1 (Min: Poor)/<em>Wounded</em>]</p>
<p><b>Storytelling:</b> You have heard tales of this mountain. You throw all of your metal belongings towards it, and your companions follow suit. You manage to save a large portion of the caravan. [D2/S1/<em>Respected</em>]</p>`,
	},
	1210: {
		index: 1210,
		text: `<p>You wish to see for yourself the fabulous mountain that draws metal, but you want to do so from a safe distance. Divesting yourself of all your metal possessions, you come only a little closer.</p>
<p><b>No Skill:</b> You forgot your slippers! The tiny metal buckles mercilessly drag you forward, and you crash into the mountain side. [S1]</p>
<p><b>Wisdom:</b> The mountain is fascinating. However, as you gaze about, you hear a faint cry for help! A beautiful youth is stuck to the mountainside. You pick your way amongst the bones and metal bits to accomplish a daring rescue. When you are safely away, you discover that your new companion is most attractive to the eye and comfortable in your arms. [D2/S1/Choice of Seduction or <em>Beloved</em> (if not <em>Married</em>)]</p>`,
	},
	1211: {
		index: 1211,
		text: `<p>The people of this land seek a hero to end the threat of the magnetic mountain. It is said that if the giant brass bell at its top were destroyed, the mountain would lose its power. You volunteer to undertake this deed.</p>
<p><b>No Skill:</b> You approach cautiously. Sadly (and painfully!), the keys of some unfortunate traveler strike you and knock you senseless. You abandon your heroics, but take the keys as you depart. [D1/<b>One Hundred Keys</b>]</p>
<p><b>Brass Bow:</b> [Go to paragraph 1213]</p>
<p><b>Scholarship:</b> After studying the legends of these people, you build yourself a fearsome bow made completely of brass. [<b>Brass Bow</b>/Go to paragraph 1213 and read the Brass Bow paragraph]</p>`,
	},
	1212: {
		index: 1212,
		text: `<p>Your love has disappeared while traveling near the dreaded magnetic mountain. You set out to the rescue.</p>
<p><b>No Skill:</b> Your loved one is pinned to the mountainside. You cannot approach or you may become trapped yourself. Fortunately, another is braver than you, and essays the rescue, but the story of your cowardice is in every ear. [D-1/S1/<em>Scorned</em>]</p>
<p><b>Magic:</b> You cannot end the threat of the mountain forever, but you can rescue your beloved, which you do. [D2/S1/<em>Beloved</em> (if not <em>Married</em>)]</p>
<p><b>Brass Bow:</b> [Go to paragraph 1213]</p>
<p><b>Insane</b> (mandatory): You rush to the assistance of your loved one, unable to bear the sight of her stuck to the face of the mountain like a fly in amber. Alas, your concern, though well-founded, blinds you to the obvious, and soon, you too are trapped beside your beloved. You and she take many days to finally expire from thirst, mere inches from each other, but unable even to touch, so tightly are you both held by the accursed mountain. [Death]</p>`,
	},
	1213: {
		index: 1213,
		text: `<p>The horrible tales of the magnetic mountain impel you to challenge its menace. You go to a local astrologer for advice.</p>
<p><b>No Skill:</b> He foretells disaster. You must give up your ambition. [D1]</p>
<p><b>Fated</b> (mandatory): He foretells success and gives you a thing of power. Armed with the great Brass Bow, you approach the mountain. [<b>Brass Bow</b>/Read the Brass Bow paragraph below]</p>
<p><b>Brass Bow:</b> You approach the mountain until you feel the faintest test of tugs. Then, you carefully aim and fire. The arrow, drawn by the magnet, describes a straight and true course to the giant bell atop the mountain; with a tremendous crash the mountain crumbles, as though Allah's fist destroyed it. Your heroism is hailed throughout the land, and you are showered with wealth recovered from the mountain. [D3/S1/W+2 (Max: Rich)/<em>Respected</em>/<b>Robe of Honor</b>]</p>`,
	},
	1214: {
		index: 1214,
		text: `<p>One evening, you enjoy the hospitality of a rich host. When he must leave for a while, he wishes you to stay and await him. "You may amuse yourself in my rooms," he says, "but don't open the one-hundredth door."</p>
<p><b>No Skill:</b> You obey the wishes of your host. That night you are awakened by a hand over your mouth. You see the turban of the Magian fire-worshipper! You manage to escape their evil rituals but not before you are severely injured. [D1/S1/<em>Crippled</em>]</p>
<p><b>Weapon Use:</b> You cannot resist temptation, and open the one-hundredth door. Within are your host and his spouse, and a great meeting of evil Magian fire-worshippers! Taking them by surprise, you easily slay them all, an act most pleasing to the Most High! [D2/S1/Piety]</p>`,
	},
	1215: {
		index: 1215,
		text: `<p>In this magical place is a hall full of closets. You open the doors in turn: behind each is a treasure more fabulous than the last! When you reach the one-hundredth door, you cannot imagine what lies beyond. You open it; inside is a huge 'efreet, who roars out, "I have been imprisoned by my children, and my possessions taken! Now I want them back!" He gestures and all is gone, including the palace. One item only remains at your feet. [D2/S2/<b>Treasure</b>]</p>`,
	},
	1216: {
		index: 1216,
		text: `<p>You enjoy the hospitality of one of surpassing loveliness. Your host says, "Remain here. I must depart a while, but shall soon return."</p>
<p><b>No Skill:</b> The merchant returns, and you spend a pleasant afternoon in discourse. She speaks highly of you to her friends. [S1/<em>Respected</em>]</p>
<p><b>Appearance:</b> An old serving maid comes to you and says, "You are far too fair to die at the hands of one such as this." She brings you to a locked door. [Go to paragraph 1217 and read the One Hundred Keys paragraph]</p>`,
	},
	1217: {
		index: 1217,
		text: `<p>You enjoy the hospitality of a beautiful merchant. Suddenly, your host arises with excuses and asks you not to stir from the main room. After your host is gone, an old serving maid brings you to a locked door.</p>
<p><b>No Skill:</b> "If you can open this, you will see a thing which will chill your heart." You cannot open it, and go back, puzzled. In the morning, you leave. [S1]</p>
<p><b>One Hundred Keys:</b> You open it and peek in. Your host is conversing with a handsome man—and both have wings! You know that the bird-people become bound to land if they eat seed mixed with sand; you rush to the old woman and have her prepare a seed-cake with sand.</p>
<p><em>If you are not Married:</em> When you feed your host a bit of the cake, it strips away the magic of the bird-people. Chastened, your host agrees to accept Allah as her and you as a spouse. You discover on your wedding bed that feathers have uses beyond flying. [D2/S2/<em>Married</em>]</p>
<p><em>If you are Married:</em> When she bites into the cake, she cries out, and you bind her to your will. In exchange for her freedom, she teaches you many of the mystic secrets of her people. [D2/S2]</p>`,
	},
	1218: {
		index: 1218,
		text: `<p>You enjoy the hospitality of a rich host. He allows you the run of his palace, but warns you not to open the one-hundredth closet.</p>
<p><b>No Skill:</b> You open the first ten closets. Each contains fascinating artifacts. Reluctant to rob your host, you content yourself with gazing. In weeks to come, the memory of the great treasure is not far from your mind. [S2/<em>Envious</em>]</p>
<p><b>Stealth and Stealing:</b> You force the locks on ninety-nine of the one hundred closets. Each contains wealth more fabulous than the last. In the ninety-ninth closet is enough to make you rich, and you depart before you are discovered. [D1/S1/W+2 (Max: Rich)]</p>
<p><b>One Hundred Keys:</b> You open each closet in turn and happily take the enormous wealth revealed within. In the one-hundredth is... a lamp. [D1/S1/W+2 (Max: Rich)/<b>Magic Lamp</b>]</p>`,
	},
	1219: {
		index: 1219,
		text: `<p>Your rich host must leave for a few hours. He has been showing you his one-hundred closets full of rare items. He begs you to continue the tour on your own, but warns against opening the one-hundredth closet door.</p>
<p><b>No Skill:</b> You obey your host's wishes and are well rewarded. [D1/S1/W+1 (Max: Rich)]</p>
<p><b>Stealth and Stealing, Bargaining and Evaluation:</b> Each item is more valuable than the last. Therefore the one-hundredth item must be the best of all! You open the final door rashly, and an enslaved 'efreet leaps out and turns you into an ape. [S1/<em>Beast Form</em>]</p>`,
	},
	1220: {
		index: 1220,
		text: `<p>In your travels, you have met with a foul fate! You and your companions are captured by a grotesque giant. Each day he impales, cooks, and eats one of your party. You rig together some weapons from sticks and stones and exhort those around you to attack the giant.</p>
<p><b>No Skill:</b> The attack fails miserably—three of you are killed outright before the giant herds you into separate cages. You spend days trembling in terror. Finally, you are the only one left. The next day the giant does not return. After two more hungry days, you finally escape, gibbering into the night. [D1/S1/Enduring Hardship/<em>Insane</em>]</p>
<p><b>Weapon Use:</b> The giant is fearsome, but you are many. Though many are slain, by your skill you lead the captives to triumph. [D2/S2/<em>Determined</em>]</p>`,
	},
	1221: {
		index: 1221,
		text: `<p>What a predicament! You and your companions are captured by a hideous giant who, each day, takes one of your group and cooks him on a spit.</p>
<p><b>No Skill:</b> Despairing, you commend your souls to Allah. That night, a huge thunderstorm begins. Lightning strikes the giant's pavilion, and while the giant is trapped under the fallen canopy, you lead the captives to slay him with stones. [D1/Piety]</p>
<p><b>Quick Thinking:</b> You and your companions make a great show of drinking wine from your bottles. The giant snatches them up and drinks them all down in seconds. While he is in a drunken stupor, you slay him and escape. [D1/S1/Acting and Disguise]</p>`,
	},
	1222: {
		index: 1222,
		text: `<p>As you wander through a wilderness, you hear a faint cry for help. Coming nearer, you see a large black pavilion. Within is a horrible giant, and five men in a large cage; the giant has spitted a sixth man and is cooking him over a fire. You attempt to sneak past, but the giant hears you. Maddened at the prospect of joining the others in the food pit, you slash out with your sword, but it is as if you tried to fell a cypress with a feather. When your turn comes, the giant nibbles you, grunts scornfully, and tosses you in the garbage heap. You see a sparkling object in the midden which you take before fleeing. [D1/S1/<em>Crippled</em>/<b>Magic Bead</b>]</p>`,
	},
	1223: {
		index: 1223,
		text: `<p>You survey a strange and forbidding pavilion, noting a vast hoard of coins and treasure scattered among many dried and broken bones. Suddenly a hideous giant appears. You dash inside the pavilion to hide. The dust of the ancient place fills your nose and you pray to Allah to help you remain silent.</p>
<p><b>No Skill:</b> Alas, you sneeze, alerting the giant. You flee in terror, but not before the evil beast's claws rend your flesh. [D1/S1/<em>Wounded</em>]</p>
<p><b>Piety:</b> You suppress the urge to sneeze by reciting verses of the Koran. The giant soon sleeps; you grab an armload of treasure and make good your escape. [D1/S1/W+2 (Max: Rich)/Enduring Hardship]</p>`,
	},
	1224: {
		index: 1224,
		text: `<p>Far from civilization, your party stumbles across a pavilion built by a giant. You implore the others in the name of the Most High to turn and flee, but you are too late—the giant returns and finds you. As he comes near, you try to strike a bargain with the giant.</p>
<p><b>No Skill:</b> Alas, the giant has no interest in what you might offer—with a roar, he attacks. When the battle is over, the giant is driven off, but at grievous cost. [D1/S1/<em>Wounded</em>]</p>
<p><b>Storytelling:</b> You suggest a contest of the fabulous, and the giant (no more eager than you to die) agrees. His story is good, but your tale of the Thief and the Foolish Donkey-Herder sends him into gales of laughter. He lets you go. [D1/S2/Beguiling]</p>`,
	},
	1225: {
		index: 1225,
		text: `<p>In a distant place, a most grotesque scenario develops: you, your beloved, and a companion have been captured by a hideous giant. "I will eat one of you tomorrow," he grunts. "You decide which." You pray to Allah for deliverance; your beloved is so impressed by your faith that she volunteers to sacrifice herself, but you reason with her that fate should decide.</p>
<p><b>No Skill:</b> Leaving nothing to chance, during the night your companion knocks you out and ties you up. The next morning, he gives your beloved to the giant! Even the giant is disgusted by your companion's perfidy; he lets you and your love go and eats the coward. [D1/<em>Blessed</em>]</p>
<p><b>Luck:</b> You draw lots to determine who shall be sacrificed. Your companion loses. You and your beloved are set free. [D1/S1/Luck/<em>Blessed</em>]</p>
<p><b>Accursed</b> (mandatory): You three prisoners discuss further who should be sacrificed, but end up telling one another your lives' stories. When you awaken in the morning, you discover that the love of your life has taken up with your companion, and they have rendered you helpless while you slept. They give you to the giant, and you die with the satisfaction of watching your once-beloved and your erstwhile companion eyeing each other warily: you will be the giant's dinner today, but one of them will be lunch tomorrow, and neither will sleep tonight. [Death]</p>`,
	},
	1226: {
		index: 1226,
		text: `<p>Calamity and peril! You have been captured by a horrible giant. "I cook you tomorrow," he grunts. You offer gold, service, entertainment—he is not interested. Finally you offer to best him in a contest. "If you do that," he says, "I shall free you."</p>
<p><b>No Skill:</b> You do your best, and though he defeats you in every contest, he is so amused by your antics that he decides to keep you as a pet. [S1/<em>Enslaved</em>]</p>
<p><b>Seduction:</b> You declare a contest to see who can be the first to seduce a member of the opposite sex. He sets you in a pit with another of his captives, a most comely young person. You make clear by signs that your "target" should play at being seduced, and you fool the giant completely. As the females of his kind are even more vicious than the males, he concedes the contest and sets you both free. [D1/S1/Quick Thinking/Choice of <em>Beloved</em> or Acting and Disguise]</p>`,
	},
	1227: {
		index: 1227,
		text: `<p>You wish to try your luck at pearl-diving, but you require a guide and diving companion. You select a fellow, but another warns you against the first and suggests himself instead. The first "guide" loudly warns against the second.</p>
<p><b>No Skill:</b> You cannot decide. Rather than make the wrong choice, you simply give up on the idea of diving. [D-1/S1]</p>
<p><b>Beguiling:</b> By a simple riddle, you determine which is the more trustworthy. With his aid and guidance, you are able to snatch three beautiful black pearls from the jaws of the giant oysters. [D1/S1/W+3 (Max: Rich)]</p>`,
	},
	1228: {
		index: 1228,
		text: `<p>The ocean is beautiful, and below are the giant oysters which contain the pearls. You put your hand in one—it shuts! You are trapped.</p>
<p><b>No Skill:</b> Your only hope is to crawl inside the oyster. Soon it is swallowed by a gigantic fish, and the fish is caught by fishermen. When they cut you from the oyster, there is much laughter at your expense. [D2/S2/Lose Courtly Graces/<em>Scorned</em>]</p>
<p><b>Enduring Hardship:</b> You grimly hold your breath until you are rescued. You also grimly hold on to a handful of pearls. [D1/W+3 (Max: Rich)]</p>`,
	},
	1229: {
		index: 1229,
		text: `<p>You dive into the warm water. Suddenly, by the pearl-bed, you see... one of the race of merfolk, whose countenance is of surpassing beauty, collecting pearls from the oysters.</p>
<p><b>No Skill:</b> You make signs that you would share the pearls with her, but she laughs and swims away. [D1/S1]</p>
<p><b>Seduction:</b> You swim to the bottom, then pretend to be stuck in the ooze. After extricating you from the muck, she whisks you off to her dwelling for a night and a day. When you leave, she gives you the pearls as a gift. [D1/S2/W+2 (Max: Rich)/Seduction/<em>Blessed</em>]</p>`,
	},
	1230: {
		index: 1230,
		text: `<p>You rent a small boat and row out. Other divers in the area row over to you.</p>
<p><b>No Skill:</b> Their faces are menacing. "You are not allowed in this area without permission from the Sultan," they say. As you have no such thing, you row politely away. [D1]</p>
<p><b>Appearance:</b> Your noble countenance cows them. They leave you in peace. [D1/Roll one die and gain that many Wealth levels (Max: Princely)]</p>`,
	},
	1231: {
		index: 1231,
		text: `<p>While watching the activity over the pearl beds, you notice one swimmer struggling in the water. Suddenly he goes down. You dive in after him.</p>
<p><b>No Skill:</b> You grab him and try to haul him to the surface, but he panics and drags you under as well. You barely break free. He is not so fortunate, and you feel his death on your hands. [S1/<em>Grief Stricken</em>]</p>
<p><b>Wilderness Lore:</b> Although he panics, you manage to save the diver. In gratitude, he gives you his haul of pearls. [D1/S1/W+2 (Max: Rich)/<em>Respected</em> (1 turn)]</p>`,
	},
	1232: {
		index: 1232,
		text: `<p>Toward evening, you spot an oyster, but a huge shark looms nearby.</p>
<p><em>Roll two dice, adding one each for Wilderness Lore, and Quick Thinking:</em></p>
<p>❖ 2–7: You cannot get past the shark—it is heading right at you! You swim desperately—and leap into the boat just as the jaws slam shut behind you. Praise Allah! [D1/S1/Choice of Luck or Piety]</p>
<p>❖ 8+: You use the blood of a small fish to draw the shark away from the oysters and reward yourself with many fine pearls. [D1/S1/W+3 (Max: Princely)/Quick Thinking]</p>`,
	},
	1233: {
		index: 1233,
		text: `<p>A strange beast approaches, bearing on its nose a gigantic horn resembling the tusk of the elephant.</p>
<p><b>No Skill:</b> You attempt to slay it, but your arrows bounce off its iron-hard hide! However, your little pinpricks anger it. It charges, horn lowered. Screaming in terror, you flee directly into a swamp. The beast is too clever to follow you into the diseased waters. [D1/<em>Diseased</em>]</p>
<p><b>Scholarship, Golden Bridle:</b> You recognize the beast as a rhinoceros and remember tales of how, though gentle if unprovoked, when angered they can slay elephants. You wisely content yourself with gazing from a distance at one of Allah's greatest wonders. [D2/S2/Piety]</p>`,
	},
	1234: {
		index: 1234,
		text: `<p>A strange beast moves amongst the trees. It has tiny eyes and a huge horn on its nose—it is a rhinoceros! These creatures can kill elephants! You would love to take it as a trophy, but you must be careful not to draw its attention before you can prepare a trap.</p>
<p><b>No Skill:</b> Your retreat noisily, and the great beast heads towards you. You leap up a tree to safety, but not before the beast's horn has pinked you in the buttocks. [D1]</p>
<p><b>Wilderness Lore:</b> You quietly trail the beast. Your patience is rewarded a few hours later when the rhino battles an elephant. With the elephant impaled on its horn, the rhino is defenseless; you slay both, taking the elephant's tusks for their ivory. [D2/S1/W+2 (Max: Rich)/Wilderness Lore]</p>`,
	},
	1235: {
		index: 1235,
		text: `<p>While sleeping beneath a tree, you dream of wild natives poking you in the ribs with spears. Suddenly you wake to find a huge rhinoceros prodding you curiously with his horn. You cannot decide whether to panic, slash out with your sword, or make your peace with the Most High.</p>
<p><b>No Skill:</b> Your body decides for you: you faint from fear. When you awake, the rhino is walking slowly away. Were it a human, you would swear it was chuckling. [D-1/S1]</p>
<p><b>Enduring Hardship, Quick Thinking:</b> You pray for delivery, but the rhino charges you! You leap to your feet, shouting, and with a graceful jump you swing into the branches of the tree. Moving too fast to stop, the rhinoceros slams his horn into the tree—and becomes stuck! It is now a simple matter to dispatch the beast and sell its carcass. [D2/S2/W+2 (Max: Rich)/Piety]</p>`,
	},
	1236: {
		index: 1236,
		text: `<p>Woe is you—you have fallen afoul of a huge rhinoceros! As it gives chase through the trees, you beg Allah to save your miserable life. You look back at the great beast chasing you.</p>
<p><b>No Skill:</b> You stumble, and the rhino runs right over you without stopping. Although Allah preserves your life, you are badly hurt. [S1/<em>Crippled</em>]</p>
<p><b>Scholarship, Storytelling, Golden Bridle:</b> Catching sight of the tiny eyes of the rhino brings to mind the story that the beast is nearly blind. You veer off, and the rhino runs right past you. [D1/S1/Quick Thinking]</p>`,
	},
	1237: {
		index: 1237,
		text: `<p>Hoping to view the semi-mythical rhinoceros, you climb a convenient tree and wait. Soon an elephant and a rhinoceros appear and square off for combat. Their conflict shakes the earth! You cry out to the Most High for deliverance!</p>
<p><b>No Skill:</b> You are too terrified to flee. Suddenly both beasts roll over the tree, and you, leaving you barely alive. [D1/<em>Crippled</em>]</p>
<p><b>Luck:</b> You leap away just as the combatants uproot your tree. They roll away and down a hill. Your attention is drawn to the roots of the tree, which have ripped up the earth and exposed a dark cave mouth. Curious, you investigate this wondrous place. [Move to the Cave of Wonders and have an immediate encounter]</p>
<p><b>Golden Bridle:</b> You bring forth the Golden Bridle. Facing its power, the beasts' rage dissipates like mist, and they go their separate ways. [D1/S1]</p>`,
	},
	1238: {
		index: 1238,
		text: `<p>In this land, the Sultan owns a huge forest preserve. He seeks your help to study two things: Some people have reported that a strange beast, the rhinoceros, is present in the forest; and some trees have been stripped bare of their bark.</p>
<p><b>No Skill:</b> You station yourself in the forest, and in time you catch sight of the rhino. Your report delights the Sultan, though the question of the bark goes unanswered. [S2/<em>Respected</em>]</p>
<p><b>Wilderness Lore:</b> You quickly find the rhino and spend a full day observing it. You notice that his skin seems to itch him quite abominably. Finally, you see the rhino rubbing against a tree, stripping its bark. The Sultan is enlightened and delighted by your report. [D1/S2/Scholarship/<em>Respected</em>]</p>`,
	},
	1239: {
		index: 1239,
		text: `<p>High in the mountain crags you find a cave, from which comes a most foul stench. Peeking inside, you see a huge serpent sleeping in great coils, and behind it a sleeping maiden. Quietly you approach and prepare to behead the serpent.</p>
<p><b>No Skill:</b> As you come near, the serpent awakes and bares its fangs, each as long as your sword. Outmatched, you flee. [S1]</p>
<p><b>Weapon Use:</b> With the speed of lightning, you strike. The serpent's head flies from its body, and the maiden runs sobbing to you.</p>
<p><em>If you are male and not Married:</em> You dry her tears with the edge of your garment, and speak to her in soft words to still her fear. But even when her tears are quieted she does not release you, and you stand long in the cave in each other's arms. [D2/S1/<em>Beloved</em>]</p>
<p><em>Otherwise:</em> You give her your arm and lead her from the cave and return her to her family in a nearby village. They shower you with praise, and spread far and wide the story of your triumph. [D2/S1/<em>Respected</em>]</p>`,
	},
	1240: {
		index: 1240,
		text: `<p>While descending a treacherous mountain trail, you spy a lone tree off the path. Its fruit glistens like gems! The ground around it is covered with serpents. Wishing to avoid their venom, you drive them off with your sword before coming closer to the tree.</p>
<p><b>No Skill:</b> As you reach for the fruit, you feel the fangs of a dozen tiny serpents piercing your flesh—they were hiding in the tree as well! As blackness fills your eyes, a wizened old man appears and says, "I offer you the antidote for a small price." You agree and survive. [D1/S1/W-3 (Min: Beggar)/Lose one <b>Treasure</b>]</p>
<p><b>Stealth and Stealing:</b> Wisely, you knock the fruit down with your sword and avoid the reach of the serpents in the tree itself. You collect a prince's ransom in jewels. [D2/S1/W+3 (Max: Princely)]</p>`,
	},
	1241: {
		index: 1241,
		text: `<p>On a worn mountain path, the earth sags beneath you, and you plunge into a shallow pit. The ground feels soft and warm beneath you, and suddenly you realize that you stand on a huge serpent! You drive your sword into it with less effect than a mosquito on a great stallion. You flee, the snake in hot pursuit.</p>
<p><b>No Skill:</b> You manage to escape, but not without a bitter wound. [S1/<em>Wounded</em>]</p>
<p><b>Quick Thinking:</b> As you run, you see two boulders set close together and dart between them. The snake gets stuck between the boulders and you escape. [D1/S1/Luck]</p>`,
	},
	1242: {
		index: 1242,
		text: `<p>You must sleep soon, but along this mountain trail are many large serpents which could swallow you in one bite! What to do? You pray to Allah to help you find a safe hiding space.</p>
<p><b>No Skill:</b> You try sleeping in a tree, but before you even close your eyes, a serpent plucks you from the branches. As he is about to eat you, a gigantic roc swoops down and carries both of you off, and you fall from the serpent's mouth some distance away. Allah be praised, you are unhurt. [D1/Have another player move you up to four spaces in any direction]</p>
<p><b>Wilderness Lore:</b> You gather wood, binding it over your feet, your head, and along your sides. The serpents regard you as an unpleasant mouthful and leave you unmolested. [D1/S1/Quick Thinking]</p>`,
	},
	1243: {
		index: 1243,
		text: `<p>In the high mountains you see many signs of large serpents. As the sun sets, you see two huge glittering eyes staring at you from off the path. Allah save you!</p>
<p><b>No Skill:</b> You run screaming down the mountainside to safety. [D-1/S1]</p>
<p><b>Enduring Hardship:</b> You still the terror in your heart and look more closely: they glitter more like jewels than eyes. Approaching cautiously, you realize that they are huge diamonds embedded in a large serpent statue! [S1/<b>Giant Diamond</b>]</p>`,
	},
	1244: {
		index: 1244,
		text: `<p>A huge serpent sleeps before you, basking in the sun. You admire this example of Allah's handiwork and move quietly away. Suddenly a shadow comes from above, and you see a huge roc descending on the serpent.</p>
<p><b>No Skill:</b> You see the awesome sight of the roc grabbing and eating the huge serpent. What a story! [D1/S1]</p>
<p><b>Quick Thinking:</b> You give a shout and wake the snake, which avoids the roc. The snake moves toward a large cave, stops, looks back at you with a look of strange kindness, and slithers off. [D1/Opportunity to enter the Cave of Wonders]</p>`,
	},
	1245: {
		index: 1245,
		text: `<p>You stand before a crystal pool. Although you are quite thirsty, you are wary of strange water.</p>
<p><b>No Skill:</b> You watch the pool for a while. You see an animal drink from it without harm, so you drink from it too. By the beard of the Prophet! You are changed! [S1/<em>Sex-Changed</em>]</p>
<p><b>Wilderness Lore:</b> You wait and see if animals drink from it; they do. However, the male fox has become a female fox! You avoid drinking from this accursed pool. [D1/Wisdom]</p>`,
	},
	1246: {
		index: 1246,
		text: `<p>A woman runs screaming into your camp. Her story is most marvelous: until she drank from the spring over the next dune, she was a man! Indeed, you find the crystal pool, which looks quite inviting, as you walk around it. However, if it changes your sex, it is best left alone.</p>
<p><b>No Skill:</b> Still, you wonder what it's like to be a member of the opposite sex, and you drink. You fool! The spring only works once. [S1/<em>Sex-Changed</em>]</p>
<p><b>Wisdom:</b> You ask the woman to take another drink. Alas, it seems the pool only works once, and you can discover no solution for her dilemma. [S1]</p>`,
	},
	1247: {
		index: 1247,
		text: `<p>In a narrow ravine is a spring. Subtle clues lead you to believe that this is the spring spoken of in tales, which can change a man's form to that of a woman. You have no wish drink from it, but you do wish to collect a sample of the water for magical use. You make your way carefully down the ravine.</p>
<p><b>No Skill, Fated</b> (mandatory): Suddenly you slip and fall directly into the spring. Alas, your deductions were correct... [S1/<em>Sex-Changed</em>]</p>
<p><b>Stealth and Stealing:</b> You avoid falling in the water and collect a bottle for future use. [D1]</p>`,
	},
	1248: {
		index: 1248,
		text: `<p>As you drink from the beautiful crystal-clear spring, you feel yourself... changing! From behind you hear a chuckle. An old wizard holds a bottle and says, "So, trapped by the spring, eh? I have the antidote here..."</p>
<p><b>No Skill:</b> You pay the exorbitant price and drink the liquid down. Nothing happens! The "wizard" is gone before your lips have left the bottle, with your money lining his pockets. [S1/W-2 (Min: Poor)/<em>Sex-Changed</em>]</p>
<p><b>Beguiling, Brass Trumpet:</b> You read the falsehood in his eyes, so you grab him and force him to drink of the spring. "Fool!" she cries. "There is no antidote—drat!" Caught in the lie, she apologizes, and in shame gives you a gift. [D1/<em>Sex-Changed</em>/<b>Treasure</b>]</p>`,
	},
	1249: {
		index: 1249,
		text: `<p>You drink from a clear pool in the desert, and feel a strange change coming over you. You have changed sex! Frantically you drink again, but this does not reverse the effects.</p>
<p><b>No Skill:</b> You howl and cry and tear your hair, but nothing answers your pleas. [D-1/S1/<em>Sex-Changed</em>]</p>
<p><b>Enduring Hardship:</b> You calmly accept what Allah has decreed for you. When others learn of your plight, they are impressed by your fortitude. [D1/S1/Choice of Enduring Hardship or Piety/<em>Sex-Changed</em>]</p>`,
	},
	1250: {
		index: 1250,
		text: `<p>To reach your destination, you must pass through the dread Valley of Dogs. You tighten your belt and enter the valley.</p>
<p><b>No Skill:</b> At night, howls and gibbering laughter follow you constantly. Though you escape unharmed, your terror confounds your reason. [D1/<em>Insane</em>]</p>
<p><b>Enduring Hardship:</b> Although the trail is plagued by howls of wild animals, and occasional laughter or screams from other sources, you take comfort in the peace of Allah and emerge unscathed. [D1/S1/Piety]</p>`,
	},
	1251: {
		index: 1251,
		text: `<p>Before you lies the dread Valley of Dogs. Concerned for your safety, you spend a day scouting the beginning of the trail.</p>
<p><b>No Skill:</b> When you feel ready, you enter the valley. Not one mile down the road you are attacked by vicious wild dogs. They savage you, and most of your possessions are scattered to the four winds. [S1/W-2 (Min: Penniless)]</p>
<p><b>Wilderness Lore:</b> You discover a hidden path through the upper part of the valley. You traverse the valley in safety. [D1/S1/Wisdom]</p>
<p><b>Golden Bridle:</b> When you feel ready, you enter the valley. Not one mile down the road you are attacked by vicious wild dogs. By the power of the Golden Bridle, you bring the fiercest dog under your control, and command him to lead the pack away from you. You pass through the Valley in peace. [D1/S1]</p>`,
	},
	1252: {
		index: 1252,
		text: `<p>You give special prayers up to Allah for a trip free of animals as you travel through the Valley of Dogs.</p>
<p><b>No Skill:</b> Allah delivers you from the dogs, but not from highwaymen. [W-1 (Min: Poor)]</p>
<p><b>Piety:</b> During your journey you spy highwaymen waylaying a wealthy man. You rush to his aid, and Allah lends strength to your arm. The man you save turns out to be a Sultan, who makes you his trusted advisor. [D2/S1/<em>Vizier</em>]</p>`,
	},
	1253: {
		index: 1253,
		text: `<p>You ask Allah to grant you safety before you cross the Valley of Dogs. As you journey, you come to a wide river spanned by a rope bridge. You prepare to cross it when a band of highwaymen appears!</p>
<p><b>No Skill:</b> They are upon you, and beat you before taking your money. [S1/W-2 (Min: Penniless)/<em>Wounded</em>]</p>
<p><b>Luck:</b> As you dash onto the bridge, it collapses. You plunge into the water and are carried to safety after a long journey underground. You emerge into a lake of many hues. [D1/S1/Move to the Lake of Colors and have an immediate encounter]</p>`,
	},
	1254: {
		index: 1254,
		text: `<p>You declare a holy battle against the evil that lurks in the Valley of Dogs. With prayers on your lips and sword in hand, you go forth in the valley.</p>
<p><b>No Skill:</b> The highwaymen and wild animals descend on you in packs. You are overwhelmed and end up in a ditch. [D1/<em>Wounded</em>]</p>
<p><b>Weapon Use:</b> You meet each threat with the strength of Allah. Where you have passed through the valley, the evil has been scourged. [D2/S1/Piety]</p>`,
	},
	1255: {
		index: 1255,
		text: `<p>You are being chased through the Valley of Dogs by a pack of wolves. You hear their snarling and feel their hot breath on your heels. They are almost on you, and you draw your sword...</p>
<p><b>No Skill, Weapon Use</b> (mandatory): You turn and face them bravely, slaying many before they drag you down. A hunting horn causes them to flee before they slay you. [D1/<em>Wounded</em>]</p>
<p><b>Wilderness Lore, Golden Bridle:</b> Suddenly you see a nearby river, and you dive in. The dogs, afraid of water, refuse to follow. [D1/S1/Quick Thinking]</p>`,
	},
	1256: {
		index: 1256,
		text: `<p>While hurrying through the Valley of Dogs, you are set upon by highwaymen. You draw your weapon and dare them to attack.</p>
<p><b>No Skill:</b> They take you up on your dare and, after overwhelming you, rob you. [S1/W-2 (Min: Penniless)]</p>
<p><b>Determined</b> (mandatory), <b>Appearance:</b> Your grim visage and drawn weapon make them hesitate, and they decide to leave you alone. [D1/S1/Appearance]</p>`,
	},
	1257: {
		index: 1257,
		text: `<p>Your ship is stopped by a large warfleet. The captain of the largest ship calls out, "We are pirates. We demand appropriate tribute or we will attack and sink your vessel."</p>
<p><b>No Skill:</b> You have little choice but to comply with his demands. [S1/W-2 (Min: Poor)]</p>
<p><b>Bargaining and Evaluation, Acting and Disguise:</b> You present your situation in such a pathetic light that the pirate captain accepts a very small tribute. [D1/S1/W-1 (Min: Respectable)/Beguiling]</p>`,
	},
	1258: {
		index: 1258,
		text: `<p>A large fleet bears down on your ship. You try to make out the markings on their ship, but cannot. Their captain calls out to your ship: "We are on a mission of war! What is your allegiance to the city of Gaya?"</p>
<p><em>If you are Sultan of, Vizier of, or Married in Gaya:</em> You proudly announce your allegiance to Gaya. The attackers sink you. [Go to paragraph 315]</p>
<p><em>Otherwise:</em> You take a chance and say that you are against Gaya.</p>
<p><em>Roll one die, adding one each for Luck and Scholarship:</em></p>
<p>❖ 1–3: Bad choice. They are from Gaya. They sink you and you barely make it to shore. [S1/W-2 (Min: Penniless)/Move to any coastal space]</p>
<p>❖ 4+: Good choice, for they are attacking Gaya. You convince them to take you along, and you share in the plunder of the city. [D1/W+2 (Max: Rich)]</p>`,
	},
	1259: {
		index: 1259,
		text: `<p>A large fleet appears on the horizon. You turn the ship to flee, but you are not sure you can outrun them. Their ships fly unfamiliar banners, and you know these are dangerous waters.</p>
<p><b>No Skill, Seamanship</b> (mandatory): You throw some of your cargo overboard to lighten your load, calculating that escaping with half your goods is better than being captured with all of them. Your sailing skill allows you to evade them, and soon you are again alone on the waves. [D1/Seamanship]</p>
<p><b>Luck:</b> You act on a hunch and sail towards them. Lo, they are no pirates, but a huge merchant fleet. You trade with them and make a large profit. [D1/W+2 (Max: Rich)]</p>`,
	},
	1260: {
		index: 1260,
		text: `<p>Your small ship races before a large warfleet. You know they will not hesitate to sink you. You pray for guidance from the Most High and watch them carefully for any sense of their direction, but soon you must decide whether to move to port or starboard.</p>
<p><b>No Skill:</b> You cannot see any reason for a particular choice, so you randomly choose port. Alas! They also veer to port! Casually, on their way to some great contest, they sink you. [Go to paragraph 315]</p>
<p><b>Piety:</b> Allah guides you! A wind drives your ship to starboard, while the fleet veers to port. [D1/S1/Luck]</p>`,
	},
	1261: {
		index: 1261,
		text: `<p>A huge fleet bears down on you. The mere fact that you are in their way guarantees you will be sunk. You beg to Allah to aid you.</p>
<p><b>No Skill:</b> There is no strength or power but in Allah! After your ship is sunk, He aids you to reach shore alive. [D1/Move to any coastal space]</p>
<p><b>Quick Thinking:</b> You set your sails on fire; seeing the flames, the fleet steers wide to avoid them. When they have passed, you douse the fires and use a spare set of sails to continue on your way. [D1/S1/Quick Thinking]</p>`,
	},
	1262: {
		index: 1262,
		text: `<p>A warfleet passes on the way to some great conquest. You ask Allah to grant them speed and strength.</p>
<p><b>No Skill:</b> You hear later that the fleet was destroyed by a freak storm. Truly, no work of man can stand against the will of the Almighty! [D-1/S1]</p>
<p><b>Magic:</b> With your prayers you include a powerful charm to speed their journey. You hear that the victory was a smashing one. [D2]</p>`,
	},
	1263: {
		index: 1263,
		text: `<p>You espy a plume of smoke rising from a nearby island. You sail closer to investigate.</p>
<p><b>No Skill:</b> You expected to find the signal fire of shipwrecked sailors. Instead you find an erupting volcano! Your ship is hit by flaming rocks, and sunk. You drift to shore on floating pumice. [S1/Move to any coastal space]</p>
<p><b>Wilderness Lore:</b> Before you come close, you discern that it is a volcano about to erupt, and steer clear. [D1/S1/Wisdom]</p>`,
	},
	1264: {
		index: 1264,
		text: `<p>Tales of "the mountain of fire" have drawn you to this island. You make your way to the top, and there you find a band of evil Magian fire-worshippers about to sacrifice a victim!</p>
<p><b>No Skill:</b> There are too many of them for you to interfere. You flee in disgrace. [D-1/S1]</p>
<p><b>Weapon Use:</b> You rush out, sword brandished, and lay waste to the Magians. The young prince they were attempting to sacrifice joins in the fray, and together you slay them all.</p>
<p><em>If you are female and not Married:</em> [D2/S1/W+2 (Max: Rich)/<em>Beloved</em>]</p>
<p><em>Otherwise:</em> [D2/S1/W+2 (Max: Rich)]</p>`,
	},
	1265: {
		index: 1265,
		text: `<p>The water all about you begins to boil. Suddenly a mountain looms out of the water ahead of you, spewing fire and ash. You pray to Allah and watch the waters around you carefully.</p>
<p><b>No Skill:</b> Your boat is set afire and sunk. You drift and finally are cast up on an unknown coast. [D1/Move to any coastal space]</p>
<p><b>Piety:</b> All about you chunks of molten rock fall but none strikes you. Your boat sails through to the now-cooling volcano's island. You explore and find a strange cave in the mountain's side. [D1/Move to the Cave of Wonders and have an immediate encounter]</p>`,
	},
	1266: {
		index: 1266,
		text: `<p>From a distance, you see a volcano. Looking closely, you see men climbing up its side!</p>
<p><b>No Skill:</b> Why would anyone do such a dangerous thing? You pray for them before sailing on your way. [D1/S1]</p>
<p><b>Scholarship, Storytelling:</b> They must be Evil Magian fire-worshippers preparing to throw their sacrifice in the volcano's pit! Crying the name of the All-Powerful and All-Compassionate, you rush to the island. The Magians flee before your faith and you save their victim, a young prince who is quite grateful to you.</p>
<p><em>If you are female and not Married:</em> [D2/S1/W+2 (Max: Rich)/<em>Beloved</em>]</p>
<p><em>Otherwise:</em> [D2/S1/W+2 (Max: Rich)]</p>`,
	},
	1267: {
		index: 1267,
		text: `<p>You have landed and are surveying the volcano. Suddenly you hear a woman's cry. Far up you see a band of red-turbaned Magian fire-worshippers carrying a maiden.</p>
<p><b>No Skill:</b> You give chase, but you are too late to save her from being hurled in. With Allah on your side, you soon send the Magians after her, but your heart is heavy from your failure. [D1/S1/<em>Grief Stricken</em>]</p>
<p><b>Piety:</b> You pray that you might reach them in time. To your amazement, the volcano rumbles and shakes, tumbling the entire party of evil ones down to land at your feet. You slay them easily and free their victim, who is both unharmed and grateful.</p>
<p><em>If you are male and not Married:</em> [D2/S1/Piety/<em>Beloved</em>]</p>
<p><em>Otherwise:</em> [D2/S1/Piety]</p>`,
	},
	1268: {
		index: 1268,
		text: `<p>You are over the pearl beds of Heragaya, watching the divers as they leap again and again into the waters. You notice one particular diver leap in with a beautiful dive; however, he does not come up for a very long time.</p>
<p><b>No Skill:</b> Suspecting trouble, you dive down to rescue him. For some reason, he draws a dagger and tries to attack you! You swim away before he can harm you greatly. [D-1/S1]</p>
<p><b>Wisdom:</b> You ask another diver about the man. Laughing, he says, "That one is blessed by Allah. He remains below three times as long as any of us." Great is the glory of the Most High! [D1/S2]</p>`,
	},
	1269: {
		index: 1269,
		text: `<p>A man asks your aid in his pearl-diving endeavors. He offers you a small percentage of the take to sit in his boat and hold the rope.</p>
<p><b>No Skill:</b> You agree. Presently some soldiers row up, and claim you have stolen the boat from the Sultan. "I am just holding this rope for a man," you claim, but when you draw up the rope, no one is there. The guards waste no time in dispensing justice. [S1/<em>Imprisoned</em>]</p>
<p><b>Beguiling:</b> After a few moments, you tie the rope to the boat and slip into the water—he is swimming away with all the pearls! You clout him on the head with some coral and take your share of the loot. [D1/S1/W+2 (Max: Rich)]</p>`,
	},
	1270: {
		index: 1270,
		text: `<p>A young pearl diver asks your help and promises to split his take fairly with you. Your sole duty is to warn the diver of danger.</p>
<p><b>No Skill:</b> You sit in the boat for hours, and the sun and the lapping of the waves put you to sleep. You awaken with a start and see a huge shark! You tug on the rope and pull it in. All you find is the severed end of the rope. What a horrid end for your partner! [D-1/S1/<em>Grief Stricken</em>]</p>
<p><b>Determined</b> (mandatory), <b>Enduring Hardship:</b> Although the job is dull, and sleep tugs at your eyes, you remain awake with the aid of Allah and the force of your will. In time, your partner returns with a handful of the finest pearls! [D1/S1/W+2 (Max: Rich)]</p>`,
	},
	1271: {
		index: 1271,
		text: `<p>You mimic the priest's chants and march bravely past the guards. Within the circle the druids have summoned forth a mighty 'efreet.</p>
<p><b>No Skill:</b> As you enter, his voice booms out, "There is an unbeliever here!" You are seized and beaten senseless. [D2/S2/<em>Wounded</em>]</p>
<p><b>Magic:</b> Within the circle is a terrible 'efreet. By arcane means, you shield your presence from him; the 'efreet is deceived, and the ceremonies continue. The druids summon forth 'efreet after 'efreet, and you attend closely as the master druid speaks the word of command over each. [D3/S3/Piety/<b>Protective Talisman</b>]</p>`,
	},
	1272: {
		index: 1272,
		text: `<p>You don the druid's cowl and pass the guards, but inside a master druid tests all who enter by a ritual of pain.</p>
<p><b>No Skill:</b> You pass out from the pain, and awaken far from that place, in familiar lands. [D1/S1/Enduring Hardship]</p>
<p><b>Enduring Hardship:</b> You bear the pain manfully and pass to the inner circle, where the High Druid begins a sacred chant. A presence forms in the center, and a mighty 'efreet appears and schools you all in arcane matters. [D4/S2/Magic]</p>`,
	},
	1273: {
		index: 1273,
		text: `<p>You march solemnly with the others into the circle where you join a ring of druids and begin a low humming chant. The high druid intones, "One here is not of us, but against us." As a man, the druids turn to attack you.</p>
<p><b>No Skill:</b> Before you can utter a word, their focused power blasts you senseless, leaving your mind a blank. [D1/S1/<em>Ensorcelled</em>]</p>
<p><b>Piety:</b> With Allah's aid you stand unshaken before their magical assault. The druids gasp. "How can you resist our power?" "With Allah's blessing," you reply, throwing aside your cowl. Awed, the druids beg you to teach them the ways of Allah. You form a city here and become its Sultan. [D2/S2/Scholarship/<em>Sultan</em>]</p>`,
	},
	1274: {
		index: 1274,
		text: `<p>You overpower the guard and find shelter in the shadow of a great stone. The druids begin a chant and an evil emanates from the presence forming before you. Desperate, you attack the High Druid, slaying him.</p>
<p><b>No Skill:</b> This throws the druids into a uproar. You must flee, barely escaping with your life. [D2/S2/Piety]</p>
<p><b>Stealth and Stealing:</b> Taking advantage of the confusion, you snatch a hostage and pry from him many arcane secrets, including the place of hiding of a most marvelous artifact. [D3/S3/Acting and Disguise/<b>Golden Bridle</b>]</p>`,
	},
	1275: {
		index: 1275,
		text: `<p>Your tossed stone catches the guard in the temple, and he slumps unconscious. From the shadow of a great pillar you watch the druids incant. Soon a menacing presence forms in the circle's center. The high druid commands, "Destroy the Caliph, in Baghdad!"</p>
<p><b>No Skill:</b> The hideous beast bows, then vanishes. You can do nothing to stop this abomination, and your failure is heavy on you. [D2/S2/<em>Grief Stricken</em>]</p>
<p><b>Piety:</b> You cry out, "By the power of Allah, the True and Living God, I banish this demon!" The power of your prayer fills the arena! The beast quails, then vanishes. The druids scatter in fear, and you find a most remarkable object in the things they leave behind. [D4/S3/Piety/<b>Magic Saddlebags</b>]</p>`,
	},
	1276: {
		index: 1276,
		text: `<p>You slip past a napping guard. Within the ring of stones is a ring of druids, and within that ring an eldritch creature. Suddenly, the High Druid clutches his chest and collapses. The other druids scream in fear, for they no longer have the monster under control.</p>
<p><b>No Skill:</b> Knowing the better part of valor, you flee from the horror they've summoned. [D2/S2/Quick Thinking]</p>
<p><b>Magic:</b> You step forward and utter a most terrible name. Before your might, the creature bows down, as is fitting. You bid it to slay any who do not surrender to the will of Allah. The druids swear their faith to the Most High, and form a new Muslim city here with you as its Sultan. In time, this becomes truly one of Allah's greatest cities! [D3/S3/Courtly Graces/<em>Sultan</em>/<b>Treasure</b>]</p>`,
	},
	1277: {
		index: 1277,
		text: `<p>You climb a tree to observe the rituals. Suddenly, hornets are all about you, stinging fiercely.</p>
<p><b>No Skill:</b> You leap down, your observations forgotten. Even in your pain, though, you have the sense to keep silent and are not discovered as you flee. [D2/S1/Enduring Hardship]</p>
<p><b>Enduring Hardship:</b> You endure their stings that you might continue your observations, which reveal the means of protection from druidic sorcery. [D3/S2/Scholarship/<b>Protective Talisman</b>]</p>`,
	},
	1278: {
		index: 1278,
		text: `<p>Silent druids gather in the strange circle. You observe and record what you see...</p>
<p><b>No Skill:</b> ...but your notes are incomplete, and your accounts are filled with gaps. Still, you have learned much. [D1/S2/Scholarship]</p>
<p><b>Scholarship:</b> ...and your detailed notes and vivid memory provide scholars with arcane lore and techniques for warding against demons. [D3/S3/Scholarship/<b>Protective Talisman</b>]</p>`,
	},
	1279: {
		index: 1279,
		text: `<p>From high atop a tree you watch the high druid, who brings forth a shining sphere. Gazing into it, he pronounces your Sultan's name. "That Prince of the Faithful is now dead," he says. "We shall go to his city, and make it ours. Only the power of this sphere could stop us, and it shall be hidden where none can find it."</p>
<p><b>No Skill:</b> You set off at once to warn your people, that they might not fall victim to these foul sorcerers. [D2/S2/Stealth and Stealing/<em>Grief Stricken</em>]</p>
<p><b>Stealth and Stealing:</b> You seek the hiding place of the sphere. Snatching it up, you race for your city. [D2/S2/<b>Celestial Planisphere</b>/Place your Destination marker in Baghdad. When you arrive there, you may give yourself any status]</p>
<p><b>Celestial Planisphere:</b> You produce the Celestial Planisphere from your pack, and gaze into it to see if the words spoken by the Druid are true. You behold the Sultan, as healthy as a newborn. You hear cries from within the stone circle and look up. The high priest of the druids lies dead on the ground, covered in shattered glass. Praise Allah, his own sphere has exploded, killing him instantly! Thanks to your magic, your Sultan is safe. [D3/S3/<em>Blessed</em>]</p>`,
	},
	1280: {
		index: 1280,
		text: `<p>The incantations you learned work! The door slides aside. Within, the cave floor is paved with gold, and diamonds glitter from the walls! Ahead is a room full of gems. Upon a couch the most beautiful woman sits, with a face to rival the full moon!</p>
<p><b>No Skill:</b> Her perfume fills your nostrils and drives thought from your mind. Later you awaken outside the caves and cannot open them again. But the perfume still lingers in your memory, driving away other thoughts. [D2/S2/<em>Ensorcelled</em>]</p>
<p><b>Beguiling:</b> Ah, the woman is a trap! You quickly pass this room and find that many other chambers exist, containing what you seek. [D3/S3/Quick Thinking/Draw two <b>Treasures</b>]</p>`,
	},
	1281: {
		index: 1281,
		text: `<p>With the spell of opening the doors slides aside. Within the cave is a huge pit of flame. A tall tree in the center bears jewels instead of fruit.</p>
<p><b>No Skill:</b> You string a rope across the pit and the tree in the center, but as you go hand-over-hand the rope sags, and the flames singe you. You retreat outside the cave, and later discover that you cannot re-enter! Still, better to have forsaken the treasure than to have died in flame. [D2/S2/Quick Thinking]</p>
<p><b>Quick Thinking:</b> You swath yourself in water-soaked rags and reach the tree. You are blistered but console yourself with your great wealth. [D3/S2/W+3 (Max: Princely)/<em>Wounded</em> (1 turn)]</p>`,
	},
	1282: {
		index: 1282,
		text: `<p>The cave wall slides aside, revealing a huge black 'efreet. "You may only stay within for half an hour," he intones, "and bring 1000 dinars out for me." You find the jewel room, but you also find a room where 100 people are chained to a wall! "Free us," they cry. Time is short. Free the people? Or gather jewels to appease the 'efreet?</p>
<p><b>No Skill:</b> After much struggle, you free few, then, time grown short, you rush out with the jewels. The ones you abandoned call curses after you. [D2/S2/W+2 (Max: Princely)/<em>Accursed</em>]</p>
<p><b>Enduring Hardship:</b> Forsaking your chance to escape, you free first one prisoner, then another, and direct them until all are freed. As the chains fall from the last, he cries "The curse is broken!" At that, the cave becomes a fabulous palace! "This kingdom is yours!" cries an elderly scholar. [D3/S3/W+3 (Max: Princely)/Magic/<em>Sultan</em>]</p>
<p><b>Envious</b> (mandatory): Your decision is simple: you stuff your pockets with jewels of fabulous worth, then interrogate the prisoners as to the location of greater treasures, and, luckily, a mule-drawn cart. You load fistfuls of egg-sized pearls, rubies the size of peaches, and other booty onto the sturdy cart, forgetting the 'efreet's admonition until he looms before you. "Greedy Mortal, as are all your kind: I have come for you. You have overstayed your welcome, and so must now dwell here forever!" A hand the size of a saddle strikes you down and makes you fast next to the rest of the prisoners, as the 'efreet complains, "Each one of you that I add to my collection makes it less likely that some fool will stay to free you all! Each day the chances of your escape dwindle! Fools! Must I imprison every Son of Adam before I may quit my duty?" [Death]</p>`,
	},
	1283: {
		index: 1283,
		text: `<p>You discover a small door with strange words on it. At the sound of the spell, the door opens! A dark musty tunnel opens into a vast maze.</p>
<p><b>No Skill:</b> When you finally come to the treasure room you are completely lost. Stumbling about, you faint from hunger and thirst. You awaken outside the caves. [D2/S2/Enduring Hardship]</p>
<p><b>Storytelling, Quick Thinking:</b> You bring to mind the tale of Alee of Cairo, who left behind him a trail of possessions to thread a maze. After a number of hours in the maze, you come to a vast treasure room! You fill your pockets, then follow your trail of clothing, paper, and food back to the entrance. [D3/S3/W+3 (Max: Princely)/Quick Thinking]</p>`,
	},
	1284: {
		index: 1284,
		text: `<p>You scramble through a tiny opening which leads to the caves themselves. Room after room is filled with yet more fabulous treasures, yet you feel certain the NEXT room contains the most fabulous treasure of all.</p>
<p><b>No Skill:</b> Stepping over the threshold, a huge 'efreet confronts you! "Greedy, greedy," he mutters. Arcane power fills the room and you are outside again. [D2/S2/Wisdom]</p>
<p><b>Wisdom:</b> You are not greedy, and something warns you that danger awaits the foolish. You collect a princely wealth in gems and depart. [D3/S3/W+3 (Max: Princely)/<b>Treasure</b>]</p>`,
	},
	1285: {
		index: 1285,
		text: `<p>You climb a rope up into the mist. There you find a peak with a tunnel carved into it and start down. Soon you stand before a man wearing a red helmet, who says, "You cannot pass until I have fallen."</p>
<p><b>No Skill:</b> You cannot master him, for truly he is the most skilled swordsman you have ever seen; exhausted, you retreat. [D2/S2/Weapon Use]</p>
<p><b>Weapon Use:</b> Truly he is a skilled foe, but you are greater. When you conquer him he bows and conducts you through rooms filled with treasure. [D3/S2/W+2 (Max: Princely)/<b>Treasure</b>]</p>`,
	},
	1286: {
		index: 1286,
		text: `<p>The wizard agrees to your proposition. At the cave he enacts a powerful spell. The ground opens and you enter. "Hurry," he cries, "I cannot hold it forever." You enter and find a brass lamp, fill your pockets with gems, and return to the wizard. "Pass me up the lamp," he says.</p>
<p><b>No Skill:</b> You do, and he runs off. When you emerge, he is gone with your lamp. [D2/S2/W+2 (Max: Rich)/Beguiling/<em>Envious</em>]</p>
<p><b>Beguiling:</b> You refuse, distrusting him. He grows furious and seals the hole above you. Idly, you rub the lamp. An 'efreet appears, saying, "At your service." You bid him free you from the cave, which he does, and then he returns to the lamp. [D3/S3/Luck/<b>Magic Lamp</b>]</p>
<p><b>Magic Lamp:</b> Gladly you hand it to him, for you know it to be a false imitation of the true magic lamp. He cackles in delight and runs off, and you go your own way with the gems. [D2/S2/W+4 (Max: Princely)/Beguiling]</p>`,
	},
	1287: {
		index: 1287,
		text: `<p>You convince a local wizard to aid you. He calls on a multitude of spirits and powers, and the cave opens before you. "I must remain here," he says. "Go fetch what you can." You climb down and are dazzled by the wealth you find. You greedily begin to gather treasure...</p>
<p><b>No Skill:</b> ...when suddenly you recall the old wizard and rush back; the ground is closed! You were too long! The only other exit is so narrow that you must abandon the riches to escape. What a fool you were to allow your greed to so overwhelm your sense! [D2/S2/Wisdom]</p>
<p><b>Wisdom:</b> ...and rush back to the hole in time. The wizard takes one item and lets you keep the rest. [D3/S2/W+2 (Max: Princely)/Quick Thinking/<b>Treasure</b>]</p>`,
	},
	1288: {
		index: 1288,
		text: `<p>A wizard consents to aid you for a share of the profits. His magic opens the caves, but from inside a huge man with a scimitar rushes forward!</p>
<p><b>No Skill:</b> With a single stroke, the guardian slays the wizard and leaps back within the cave, which seals behind him. You cannot enter! You bury the wizard but cannot escape your own guilty heart for leading him to this sad fate. [D1/S2/Weapon Use/<em>Grief Stricken</em>]</p>
<p><b>Weapon Use:</b> You leap forward and cut the man down. Within is enough wealth and magic to make you a king! The wizard agrees to aid you in exchange for a position as a Vizier, and soon you rule over a kingdom! [D4/S2/W+3 (Max: Princely)/<em>Sultan</em>/<b>Treasure</b>]</p>`,
	},
	1289: {
		index: 1289,
		text: `<p>You hide behind some musty bales. The voice calls twice more, but you remain silent. A shadow descends from the ceiling and stands revealed as a blood-thirsty 'efreet. "I know you are here," he roars. "Look at me." He begins to change!</p>
<p><b>No Skill:</b> Your mind slips gratefully into insanity, nor do you remember escaping, but you find yourself alive some distance away. [D2/S2/Enduring Hardship/<em>Insane</em>]</p>
<p><b>Enduring Hardship:</b> You endure the horror with thoughts of Allah and the immortal paradise awaiting you. The 'efreet gives up in disgust and vanishes. You emerge the next day and are accorded the honors of a hero. [D2/S3/<em>Respected</em>/<b>Robe of Honor</b>]</p>`,
	},
	1290: {
		index: 1290,
		text: `<p>You hide, but to no avail. A shadow descends from the ceiling, and before you stands a deadly-looking 'efreet!</p>
<p><b>No Skill:</b> His hands close about your throat. You choke out, "Allah preserve me!" He stumbles back, and you seize the opportunity to flee. [D1/S2/Quick Thinking]</p>
<p><b>Appearance:</b> He studies your face. "Are you not he whom I have named?" You admit who you are and he smiles. "Your father was a powerful enchanter. He bequeathed this money to you through me." A pile of gold appears at your feet, and the 'efreet is gone! [D3/S3/W+3 (Max: Princely)]</p>`,
	},
	1291: {
		index: 1291,
		text: `<p>Through the darkness of the house a shadowy presence looms nearer and nearer! Ah! It is only the Vizier! You reveal yourself, and he says, "I have come to seek aid in deposing the Sultan. Aid me, and you will be my Vizier." You consider what he has said.</p>
<p><b>No Skill:</b> You agree—and suddenly the Sultan's guards are all around you! The Sultan himself steps forward! "False one!" he cries. "Is this how you would repay me?" You are thrown in prison to contemplate the folly of your deeds. [D1/S2/Wisdom/<em>Imprisoned</em>]</p>
<p><b>Wisdom, Piety:</b> You flatly refuse and draw your sword. "Hold!" cries a second voice, and the Sultan himself steps forward. He explains, "A prophecy told me to adopt a worthy stranger as my true heir. This test confirms my thoughts—you are the one." A few weeks later he dies, and you become the new Sultan. [D3/S3/Courtly Graces/<em>Sultan</em>]</p>`,
	},
	1292: {
		index: 1292,
		text: `<p>As you cry out the name of Allah, a faint whisper comes to your ears: "You have destroyed me," it says. You settle down for the night.</p>
<p><b>No Skill:</b> In the morning you emerge from the house a hero! [D2/S2/Piety]</p>
<p><b>Luck:</b> During the night you investigate sounds of a mouse scratching near the fireplace. You knock on the fireplace wall, and a cascade of gold and jewels pours down the chimney! Truly you are favored by fortune! [D3/S3/W+3 (Max: Princely)]</p>`,
	},
	1293: {
		index: 1293,
		text: `<p>You call out the name of Allah. With a shrill cry, an 'efreet appears before you. "You shall pay for that," he sneers.</p>
<p><b>No Skill:</b> He gestures. Phantoms invade your mind, and you run gibbering in terror. After the sights shown you by the spirits, nothing on earth will frighten you again! [D2/S2/Enduring Hardship/<em>Insane</em>]</p>
<p><b>Enduring Hardship, Protective Talisman</b> (mandatory): He gestures, and hideous visions fill your mind. But these are just illusion. Only Allah is powerful! The visions fade and the 'efreet disappears. The next day you emerge and are proclaimed a hero! [D3/S3/W+1 (Max: Rich)/Wisdom/<b>Robe of Honor</b>]</p>`,
	},
	1294: {
		index: 1294,
		text: `<p>With a puff of smoke, a surly 'efreet stands before you. "Who are you?" he roars. You reply, "Do you not recognize Abu Ali-ibn-Hessad? The greatest wizard in the land?" The 'efreet shrinks back fearfully. "Begone, in the name of Allah," you command. He howls—and vanishes.</p>
<p><b>No Skill:</b> The next day you emerge a hero. [D2/S2/Acting and Disguise]</p>
<p><b>Bargaining and Evaluation, Courtly Graces:</b> You emerge from the house a hero. Your stature entitles you to a reward, and you ask for the house. Weeks later, you knock down a wall and discover a fortune in gold. [D3/S2/W+3 (Max: Princely)/Luck/Acting and Disguise]</p>`,
	},
	1295: {
		index: 1295,
		text: `<p>A cascade of gold pours from the ceiling into the corner! You stammer a weak thanks. "You're welcome," replies a handsome young 'efreet, floating down from the ceiling, "for a powerful magician left this gold for you."</p>
<p><b>No Skill:</b> You scoop up the money, and start to leave. "Dolt!" he cries. "Have you no gratitude?" He waves, and the gold disappears. "Why do you not offer to repay this magician?" he asks, and disappears. Truly, you realize your manners are poor and resolve to improve them. [D2/S2/Courtly Graces]</p>
<p><b>Piety:</b> You ask, "And what may I do for this enchanter in return?" The 'efreet smiles. "My master is your father and wishes only to reward his long-lost child." You say a prayer of thanks to your father, and bid the 'efreet to go with the blessings of Allah. He smiles and departs. [D3/S3/W+3 (Max: Rich)/Luck/<em>Fated</em>]</p>`,
	},
	1296: {
		index: 1296,
		text: `<p>A cascade of gold falls into the corner. A young 'efreet appears, addressing you by name. He says, "This wealth was left to you a century ago by a powerful enchanter who foresaw in you a great magician. Can you perform any spells?"</p>
<p><b>No Skill:</b> You admit you cannot. The 'efreet gives you a fistful of gold. "Use this for your education," he says. [D2/W+1 (Max: Rich)/Magic/<em>Fated</em>]</p>
<p><b>Magic:</b> You demonstrate, and the 'efreet is jubilant! "My master was not wrong! All this gold is yours. Take it." [D3/S3/W+2 (Max: Princely)/Magic]</p>`,
	},
	1297: {
		index: 1297,
		text: `<p>You say, "Put it in the corner." Nothing happens. You realize your folly and add, "Please." Instantly gold cascades from the ceiling! A menacing 'efreet follows. "My master had your name," he explains, "and he left this wealth to he who possessed his name. It has been a long time."</p>
<p><b>No Skill:</b> You thank him politely and leave with your gold and the rich tale of what has happened. [D2/S2/W+2 (Max: Princely)/Storytelling]</p>
<p><b>Storytelling:</b> You thank him for his vigil and ask if he would hear the latest tales. Hours later, he sighs and says, "For a century I have spoken with no other; your gift has been far more valuable than mine. Let me make amends." He gestures... and you sit on a throne in a palace! You are the Sultan of the city! [D3/S3/<em>Sultan</em>]</p>`,
	},
	1298: {
		index: 1298,
		text: `<p>You face the best swordsman in the group.</p>
<p><b>No Skill:</b> He slices you like a melon. Each stroke that he makes is counted aloud by his men and cheered, while your feeble ripostes are greeted with derisive hoots. Eventually, from overall blood-loss rather than any single great wound, you swoon, and recover just as the smallest child of the tribe administers the final blow—for you are not deemed worthy of their warriors. [Death]</p>
<p><b>Weapon Use, Enduring Hardship:</b> You hold your own (to everyone's surprise) until your opponent disarms you. He lunges for your throat—and stops, a hair away from plunging his sword into your neck. Then he drops his sword and embraces you. You have proven yourself, and the bandits take you to their hiding place. [D1/S1/W+1 (Max: Respectable)/Lose <em>Lost</em>/Opportunity to enter the Cave of Wonders]</p>`,
	},
};
