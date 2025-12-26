import type { Story } from "./stories";

export const stories1400: Record<number, Story> = {
	1400: {
		index: 1400,
		title: "The Sepulchre of Solomon",
		text: `<p>When death claimed the Prophet Solomon (a thousand blessings on his name!), a dozen djinn of the True Faith bore his body to a distant island in the ocean which surrounds the world, and there placed him upon a throne to await the final day.</p>
<p>You stand under darkened skies before the throne of Solomon, which none has seen in eighteen hundred years. His throne is crested by his seal, and upon his finger sits his legendary ring.</p>
<p>You may:</p>`,
		choices: [
			"Take the ring from the finger of Solomon, to gain its powers for your own.",
			"Kneel before the throne and pray to the greatness of the Most High for vouchsafing you this wondrous sight.",
			"Read the names upon the seal, that you might learn the subtle powers contained therein.",
		],
		destinyTable: {
			minus: [1401, 1404, 1407],
			blank: [1402, 1405, 1408],
			plus: [1403, 1406, 1409],
		},
	},
	1401: {
		index: 1401,
		text: `<p>As you reach for the ring, lightning strikes!</p>
<p><b>No Skill:</b> You are struck deaf and blind by the flash. When you recover your sight, you are badly burnt, and somewhere far from the sea. [D-1/S2/<em>Crippled</em>/Have another player move you to any mountain space]</p>
<p><b>Magic:</b> Your magic turns aside the bolt, and it harmlessly strikes the sea. You decide not to tempt fate, and depart. Still, you have beheld a wondrous sight. [D2/S2/Wisdom]</p>`,
	},
	1402: {
		index: 1402,
		text: `<p>As you reach for the ring, a dozen 'efreets, each with the brand of Solomon on their necks, appear around the island.</p>
<p><b>No Skill:</b> They treat you most harshly for daring to attempt to steal from their lord and master, and when they are finished, they hurl you into the sea. [D1/S2/<em>Wounded</em>/Have another player move you to any sea space]</p>
<p><b>Stealth and Stealing</b> (mandatory): They sense your evil intent, and treat you most harshly for your attempt to steal from their late master. When they are done, they hurl you a great distance away. [D-1/S1/<em>Wounded</em>/<em>Crippled</em> (1 turn)/Have another player move you to any sea space]</p>
<p><b>Courtly Graces:</b> You converse with the djinn and praise them for their loyalty to their late master. They are most charmed by your graceful ways, and offer their services to you, though they will not allow you to take Solomon's ring. [D2/S2/Choice of W+3 (Max: Princely) or Magic or <b>Treasure</b>]</p>`,
	},
	1403: {
		index: 1403,
		text: `<p>The ring comes easily off the finger of the skeleton, and you hasten away to examine your prize.</p>
<p><b>No Skill:</b> As you leave the island, the sound of a tempest fills your ears, and the waves rush forward to cover the tomb. The ring vanishes from your hands, drawn to its true owner under the sea. As the island sinks, you are caught in a giant wave which buffets you senseless. You awaken on a distant shore, with few of your possessions. [D1/S1/W-3 (Min: Beggar)/<em>Envious</em>/Have another player move you to any coastal space]</p>
<p><b>Fated</b> (mandatory), <b>Luck:</b> When you place the ring upon your finger, an enormous 'efreet appears. "I am your slave, O Solomon; what is your wish?" [D2/S3/W+3 (Max: Fabulous)/Magic/Move to any space except a Place of Power]</p>`,
	},
	1404: {
		index: 1404,
		text: `<p>Unfurling your prayer mat, you kneel before the throne, praising the Most High and His legendary servant.</p>
<p><b>No Skill:</b> Nothing happens—the skies do not part, no wondrous beast confronts you, the skeleton does not speak. You depart, vaguely disappointed. [D1/S1]</p>
<p><b>Enduring Hardship:</b> You pray for hours until you notice a trapdoor cunningly crafted in the ground before the throne. You open it, and within are all nature of riches! Truly, this is a gift from Allah! [D2/S2/W+3 (Max: Fabulous)/<b>Treasure</b>]</p>`,
	},
	1405: {
		index: 1405,
		text: `<p>As you pray, a djinn arises from the water, asking your business here.</p>
<p><b>No Skill:</b> You say that you are paying honor to the greatest of Prophets (save only Mohammed), and he is most pleased by your response. You converse about the time of Solomon and learn many interesting things. [D2/S2/Scholarship/Storytelling]</p>
<p><b>Piety:</b> You praise Solomon, and compare him to Mohammed (a thousand blessings on his name). The djinn professes ignorance of Islam, and you educate him. He surrenders to the Faith immediately, and grants you a tremendous gift for your favor. [D3/S3/W+3 (Max: Fabulous)/Magic]</p>`,
	},
	1406: {
		index: 1406,
		text: `<p>As you pray before the throne, you feel the hand of Allah stirring the breeze.</p>
<p><b>No Skill:</b> Before you realize what has happened, you are caught in a tempest! You and your ship are blown far away. [D1/S1/Have another player move you to any coastal space]</p>
<p><b>Seamanship:</b> You realize that the wind is growing to a storm and return with haste to your ship. You ride before the tempest rapidly across the world. [D2/S2/Quick Thinking/Have another player move you to any coastal space]</p>`,
	},
	1407: {
		index: 1407,
		text: `<p>It is said that the names on the seal grant all nature of remarkable powers to those who understand them.</p>
<p><b>No Skill:</b> When later you study the names you have transcribed, though, you realize that you are not one who can. [D1/S1]</p>
<p><b>Scholarship:</b> The names are most antique and wondrous, and you contemplate their meaning for many weeks before you understand them. With that understanding, though, worlds of possibility are opened to you. [D2/S2/Magic/Wisdom]</p>`,
	},
	1408: {
		index: 1408,
		text: `<p>As you copy the names, a djinn arises from the solid stone of the island and demands to know your business.</p>
<p><b>No Skill:</b> You grovel before him, and apologize for trespassing on the island. He has mercy on you. Rather than flaying you, he merely beats you and drives you far away. [D1/S2/<em>Wounded</em>/Go to paragraph 315]</p>
<p><b>Quick Thinking:</b> You read aloud the names, and the djinn bows before you. "Truly, you are my master returned! Is this the Final Day?" You tell him it is not, and order him to robe you in finest garments and make ready your return to the lands of the Faithful. [D3/S3/W+3 (Max: Princely)/<b>Robe of Honor</b>]</p>`,
	},
	1409: {
		index: 1409,
		text: `<p>You read aloud the names on the ring. The skies and sea grow calm at the sound of the words.</p>
<p><b>No Skill:</b> This is most powerful magic indeed! You read on until your mind is overwhelmed by the power of the names. [D2/S2/Magic/<em>Insane</em>]</p>
<p><b>Wisdom:</b> As you speak, you feel the power of the names storming at the fortress of your mind. You read no further, content with the powers you have gained. [D3/S2/Magic/Seamanship]</p>`,
	},
	1410: {
		index: 1410,
		text: `<p>The other claims to have been the target of every scam that has ever been attempted in order to bilk him of his wealth and knowledge. You decide to take that as a challenge.</p>
<p><b>No Skill:</b> Before you even make the first step, he is on to you. The guards quietly arrest you before you can even put your brilliant plan into action. [D1/<em>Imprisoned</em>]</p>
<p><b>Stealth and Stealing:</b> Only the greatest of thieves could work through the other's cynicism and security. You take great pride in capturing one of the rarest of treasures from his workshop. [D1/<b>Treasure</b>]</p>`,
	},
	1411: {
		index: 1411,
		text: `<p>The other is known to be quite persuasive, having led many into ruin just by the craft of his words alone. You are resolute that you will best him at his own game of deceptions and win back some of the wealth he has gained.</p>
<p><b>No Skill:</b> You drive a hard bargain with the other, creating an elaborate deal that you are convinced will lead to his ruin. Afterwards, you realize that you have bought piles of worthless trinkets. You have learned quite a lot of his technique in the process, however. [S1/W-1 (Min: Poor)/Bargaining and Evaluation]</p>
<p><b>Bargaining and Evaluation:</b> You manage to construct an elaborate trade involving future actions, deals with others you know, and other complex stipulations and come out far ahead of your mark. [You may trade up to 2 D, S, or W in exchange for an equal number of D, S, or W. You cannot exceed a Wealth of Princely in this way]</p>`,
	},
	1412: {
		index: 1412,
		text: `<p>The other seeks to trick you into surrendering your wealth to him. You feed on his ego about his intelligence to make a wager: if you can come up with a riddle he cannot solve, he will give you his wealth and leave. Otherwise, you will hand over yours.</p>
<p><b>No Skill:</b> Your best attempts to construct a difficult riddle are easily answered, and you are forced to concede the wager. [W-1 (Min: Beggar)/Scholarship]</p>
<p><b>Scholarship:</b> By crafting an unanswerable question, you easily defeat the other. While he may be crafty, he is still a man of his word. [S1/W+1 (Max: Princely)]</p>`,
	},
	1413: {
		index: 1413,
		text: `<p>You approach the other to ask a favor while he examines a strange object. Somehow you manage to inadvertently give offense to him. "Idiot!" he thunders. Fuming, he summons a lesser djinn to him, and orders it, "Take this fool anywhere; just get him out of my sight!"</p>
<p><b>No Skill:</b> The djinn carries you to lands unknown. [D1/S1/Have another player move you to any space except a Place of Power]</p>
<p><b>Stealth and Stealing:</b> The djinn carries you away, but you smile, for in the other's fury, he failed to notice you pilfering the very object he was examining. [D1/S1/<b>Treasure</b>/Have another player move you to any space except a Place of Power]</p>`,
	},
	1414: {
		index: 1414,
		text: `<p>You have a trinket that the other may be able to assess for you. You decide to try your luck and ask for assistance. The other tells you that the trinket is of no value, but being a follower of Allah, the other offers to ease your load by taking the trinket off your hands for a small fee.</p>
<p><b>No Skill:</b> You agree, happy to be rid of it at last. [D1]</p>
<p><b>Bargaining and Evaluation:</b> You negotiate on the small fee and find that the other becomes more and more anxious as you discuss the item. You begin to think that you're being had. You tell the other that you are going to have someone else appraise the item for you and the other stops you, admitting that you have a fine treasure and ups the offer.</p>
<p><em>You may either take the offer or refuse:</em></p>
<p><em>If you take the offer:</em> [S1/W+2 (Max: Princely)]</p>
<p><em>If you refuse the offer:</em> [D1/<b>Treasure</b>]</p>
<p><b>Acting and Disguise:</b> You pretend to be ignorant of such things and pull the other into a conversation about trinkets. You flatter the other until he talks so much, that he gives away that the trinket you carry is actually valuable. The other does not even notice that he's given away this information as you part ways. [S1/<b>Treasure</b>]</p>`,
	},
	1415: {
		index: 1415,
		text: `<p>The other travels with a hairless ape. You question him about it. He places his arm around the ape and says, "My friend has been trapped in a beast's form by an evil enchanter, for no cause at all. Until someone kisses these ugly lips, my friend will remain a wretched beast."</p>
<p><b>No Skill:</b> You are willing to try.</p>
<p><em>Roll two dice, adding one for Acting and Disguise:</em></p>
<p>❖ 2–7: You cannot bring yourself to kiss an ape. The enchantment remains. [S1]</p>
<p>❖ 8+: You manage a formal peck on the lips of the beast, and it is transformed into a ferocious 'efreet who bellows in rage at the one who has imprisoned him and goes to attack him. Unfortunately, the fiery blast of his departure burns you badly. The other gestures, and your wounds heal, but not completely. [D1/S1/Enduring Hardship/<em>Wounded</em>]</p>
<p><b>Appearance</b> (mandatory): The very thought of kissing an ape is revolting. You shun the other and his ape. The other starts to walk off, but the ape gives you a nasty bite before his "owner" leads him away. [D1/Roll one die; on a 1 or a 2, <em>Diseased</em>]</p>`,
	},
	1416: {
		index: 1416,
		text: `<p>The other shouts with relief when the enchantment is lifted.</p>
<p><b>No Skill:</b> Then he leaps to attack you. Fierce with long insanity, he nearly rends you limb from limb before he capers madly off. [D1/<em>Crippled</em>]</p>
<p><b>Magic:</b> You recognized that the other was driven mad by the enchantment, and bring him to sanity with a blessing. The other is grateful, and tells you of the strange place in which he first suffered the enchantment. "To one of your great powers, the City of Brass would be a land of great wonders; I will take you there, if you wish." [D2/S2/Opportunity to enter the City of Brass]</p>
<p><b>Protective Talisman:</b> When he is freed from the enchantment, he madly attacks you with powerful and subtle magics, but they are turned aside by the power of the Protective Talisman. Soon, the other returns to his senses, and gifts you for helping him. [D2/S1/<b>Treasure</b>]</p>`,
	},
	1417: {
		index: 1417,
		text: `<p>The other tells you of his problem: an enchantment laid upon him by a wicked sorcerer.</p>
<p><b>No Skill:</b> You would cheerfully aid him if you could, but you know little of magic. Upon consideration, you decide that the best course when dealing with magic is to leave it well alone. [D1/Wisdom]</p>
<p><b>Beguiling</b> (mandatory): You offer to lift the enchantment for a small fee, knowing full well that it is impossible for you to do so. The other has met your type before, and thrashes you soundly. You flee, and he gives chase. [D1/<em>Wounded</em>/<em>Pursued</em>]</p>`,
	},
	1418: {
		index: 1418,
		text: `<p>The other notices you sneaking off, and immediately suspects you of evil intent. With but a small part of the secret knowledge he possesses, he roots you to the ground. "Why do you flee me, who bears you no ill will?"</p>
<p><b>No Skill:</b> You fumble for words, which the other takes as a sign that you are dissembling. "So be it. Your crimes are manifest in your actions. Begone from this place and trouble honest citizens no more." You are hurled through the air and come down (safely) far away. [D1/Have another player move you to any space except a Place of Power]</p>
<p><b>Courtly Graces:</b> You explain to him that you meant no offense, nor do you bear any person malice; rather, you could tell that he was most busy, and you wished to disturb him not at all. The other smiles at your kind words, and lets you go on your way. [D1/S1/Beguiling]</p>`,
	},
	1419: {
		index: 1419,
		text: `<p>The other eyes you with disapproval, and you give him a wide berth.</p>
<p><b>No Skill:</b> You thank Allah that the other seems to have forgotten you quickly. [D1]</p>
<p><b>Luck:</b> The other calls to you by name and you turn to face him. In his hands is a bag of gold. "I believe you dropped this, did you not?" You say that you did not, and the other is impressed with your honesty, and gives you a blessing before departing. [D2/<em>Blessed</em>]</p>`,
	},
	1420: {
		index: 1420,
		text: `<p>As you try to absent yourself from the presence of the other, he misjudges your intent. Before you can explain, he sets a curse upon you.</p>
<p><b>No Skill:</b> You are knocked to your feet and awaken feeling strange. [S1/<em>Ensorcelled</em>]</p>
<p><b>Magic:</b> You avoid the curse with ease using your own excellent magics; you each withdraw, his curses ringing in your ears. You know this conflict is far from over. [D1/S1]</p>`,
	},
	1421: {
		index: 1421,
		text: `<p>You are awestruck.</p>
<p><b>No Skill:</b> [Go to paragraph 380]</p>
<p><b>Protective Talisman:</b> The other is a powerful foe, and attacks you with equally powerful charms. However, they are turned aside by the blessings of the Protective Talisman. Eventually, the other tires of the attack and departs. You have learned many of his magical secrets, though. [D1/S2/Magic]</p>`,
	},
	1422: {
		index: 1422,
		text: `<p>Your shoulders tense and your eyes narrow.</p>
<p><b>No Skill:</b> [Go to paragraph 381]</p>
<p><b>Protective Talisman</b> (mandatory): Though you tried to avoid the other, he tricked you into a snare. He makes a mystical pass, and the Protective Talisman glows in your pocket. Puzzled, the other departs, and you go on your way. [D1/S1]</p>`,
	},
	1423: {
		index: 1423,
		text: `<p>You flee, and only when you are exhausted do you stop. Suddenly, the voice of the other cackles maniacally in your ears.</p>
<p><b>No Skill:</b> You are frightened out of your wits. [D1/<em>Insane</em>/Lose one skill of your choice]</p>
<p><b>Magic:</b> You instinctively turn and cry out a powerful name, catching him off guard. Stunned, he staggers back, and you take the opportunity to make good your escape. [D2/S1/Luck]</p>`,
	},
	1424: {
		index: 1424,
		text: `<p>Offended by your apparent snub, the other decides to humiliate you. "Behold," he cries, "there goes the one who is the cause of all our woes!" The ever-fickle crowd pursues you relentlessly.</p>
<p><b>No Skill:</b> You are not treated gently by the crowd, who are convinced you are a sorcerer. [D1/<em>Crippled</em>]</p>
<p><b>Beguiling, Brass Trumpet:</b> You stop and shout back at the crowd, telling them of the evil of the other. Your charisma and oratory dissuade them from harming you. In the confusion, you slip away. [D1/S2]</p>`,
	},
	1425: {
		index: 1425,
		text: `<p>You are able to use arcane means to place the other completely at your mercy.</p>
<p><b>No Skill:</b> The other wails and bemoans his fate, touching your heart, but not causing you to free him until you exact a service from him. [D1/Beguiling/You may lose one status of your choice]</p>
<p><b>Magic:</b> The other took note of the trap you set for him, and offers to teach you more of the ways of the world of enchantment if you will release him. You accept, and learn great secrets from him. [D2/Beguiling/You may lose one status of your choice]</p>`,
	},
	1426: {
		index: 1426,
		text: `<p>You are prepared for anything—you hope.</p>
<p><b>No Skill:</b> [Go to paragraph 417]</p>
<p><b>Protective Talisman:</b> Your attempt to gain control over the other is easily defeated. In a panic, you draw forth the Protective Talisman, and cry out the names written thereupon. The other howls in anguish and flees before its power. [D1/S1/Magic]</p>`,
	},
	1427: {
		index: 1427,
		text: `<p>You come upon him and defeat him easily.</p>
<p><b>No Skill:</b> As you are looting his body, a shadow looms over you. The one you defeated was a servant sent to test you. The master remains yet to be faced!</p>
<p><em>You may surrender to the master or fight:</em></p>
<p><em>If you surrender:</em> You bow down and ask how you can serve him, and he demands you take the place of the slain servant. [D1/W-1 (Min: Poor)/<em>Enslaved</em>]</p>
<p><em>If you fight:</em> When the master comes, you draw your sword and face him.</p>
<p><em>Roll two dice, adding one each for Weapon Use and Luck:</em></p>
<p>❖ 2–8: The master is most powerful and skilled, and cruelly thrashes you, leaving you bleeding near to death. [D1/Lose Appearance/Lose Weapon Use/<em>Crippled</em>]</p>
<p>❖ 9+: Though the master is most skillful, you fend him off until a twist of fortune gains you a second's advantage. You seize the chance and flee. [D2/S2/Luck]</p>
<p><b>Quick Thinking, Acting and Disguise:</b> You realize that the other you have defeated is merely a servant sent to test you. You quickly don his robes and muffle your face. When the master comes, your report that you have slain your foe, and actually receive a reward! [D2/S1/W+1 (Max: Respectable)/Beguiling]</p>`,
	},
	1428: {
		index: 1428,
		text: `<p>The other apparently chooses not to fight. Instead, he chants a quick spell and disappears in a puff of smoke, leaving behind a pile of his effects.</p>
<p><b>No Skill:</b> You root through them and recover some pieces of gold among the vast pile of junk. [D1/S1/W+1 (Max: Respectable)]</p>
<p><b>Scholarship, Bargaining and Evaluation:</b> While searching the pile, you discover a handful of gems and a remarkable item of great magical power. [D2/S1/W+1 (Max: Rich)/<b>Treasure</b>]</p>`,
	},
	1429: {
		index: 1429,
		text: `<p>Your victim puts up no resistance to your attack; your blows fall upon him like rain upon the ocean, with as much effect.</p>
<p><b>No Skill:</b> Eventually, you desist from your attack, and the other takes his leave. You understand better the folly of your actions, and resolve to learn from this experience. [S1/Wisdom]</p>
<p><b>Wisdom:</b> You realize the folly of your actions, and beg forgiveness of the other. Your humble words bring him great joy, and he departs after giving you a blessing. [D2/S1/<em>Blessed</em>]</p>`,
	},
	1430: {
		index: 1430,
		text: `<p>You move to attack, but the sadness reflected in the other's eyes stays your hand. Bowing your head in shame, you turn and go. [S1]</p>`,
	},
	1431: {
		index: 1431,
		text: `<p>A bead of sweat drips down your forehead.</p>
<p><b>No Skill:</b> [Go to paragraph 422]</p>
<p><b>Protective Talisman</b> (mandatory): The other stares at you with wild eyes. "So, we meet again! Now you shall pay for your crimes!" He makes a magical pass, and the Protective Talisman glows warmly against your flesh as it turns aside the attack. The other stops, and says, "I must have been mistaken. You are not he who I thought you were." With that, he departs. [D2/S2]</p>`,
	},
	1432: {
		index: 1432,
		text: `<p>Your victim cries out, and calls down upon you a powerful curse before taking his leave from you.</p>
<p><b>No Skill:</b> You suffer greatly, and regret your actions. [D1/<em>Accursed</em>]</p>
<p><b>Enduring Hardship:</b> Your life is difficult thereafter, but you have learned your lesson well. [D2/Wisdom/Piety]</p>
<p><b>Protective Talisman</b> (mandatory): The power of the Protective Talisman turns aside the wrath of the other, but you are chastened. You consider long the offense you gave and learn from your mistakes. [D2/S1/Wisdom]</p>`,
	},
	1433: {
		index: 1433,
		text: `<p>Knowing your opponent practices the dark arts that oppose Allah and His will, you brandish your sword, and with a yell, attack.</p>
<p><b>No Skill:</b> The dark arts are strong against an unschooled opponent. You are made to suffer greatly. [D1/<em>Crippled</em>]</p>
<p><b>Magic, Sword of Invisibility:</b> The other does not see the weapon before it strikes his dark heart. [D2/Piety]</p>`,
	},
	1434: {
		index: 1434,
		text: `<p>You see anger in the face of the other, and rather than suffer his wrath, you flee from his sight. The next place you go, however, he is there before you! This happens again and again.</p>
<p><b>No Skill:</b> Fear trickles like ice down your back, and you beg him to stop haunting you. The other looks surprised, and says he has no knowledge of you. "There is only one answer. I am drawn to those who are wretched and accursed; that must be your case. I will take note of you, and not see you again." [D1/<em>Accursed</em>]</p>
<p><b>Fated</b> (mandatory): You recognize this as the will of Allah, and speak to the other. "Fate has cast us together, so let us make the most of it." The other is most amused by your words; you tell stories to each other long into the night, and when you part, you have gained great insight into the realms of the 'efreets. [D2/S1/Wisdom/Magic/Lose <em>Fated</em>]</p>`,
	},
	1435: {
		index: 1435,
		text: `<p>Your attack has only one effect: it draws the full attention of the other, and also his wrath. With a gesture, a powerful force grabs you and hurls you down a well.</p>
<p><b>No Skill:</b> You struggle for many days to escape, and eventually a passerby hears your cries and lowers to you a rope that you might climb out. You have suffered greatly in your captivity, though, and your heart is heavy, though you count yourself fortunate that you did not fare worse. [D1/S1/Lose Appearance/<em>Wounded</em>/<em>Grief Stricken</em>]</p>
<p><b>Luck:</b> A scorpion falls on your head. You quickly kill it, then wonder whence it came. Your search reveals a small crevice leading to a forgotten treasure room. What an astounding stroke of luck! You loot the place and escape through a hidden trap-door. [D1/S2/W+2 (Max: Rich)/<b>Treasure</b>]</p>`,
	},
	1436: {
		index: 1436,
		text: `<p>The haughty demeanor of the other, and his contempt for you, drive you to fury! You attack him, but he deflects your blows with ease.</p>
<p><b>No Skill:</b> "Surely you must be mad to attack one of my power," he says. "Mad you are, and mad you shall remain." A howl fills your mind, driving sensible thought from you. [D1/<em>Insane</em>]</p>
<p><b>Wisdom:</b> You soon come to your senses, and fall to your knees before the other, pleading for mercy. "I am not given to mercy," he begins, "but your repentance seems genuine. Go freely, and choose your opponents with more care." You scramble to your feet and are gone. [D1/S1/Luck]</p>`,
	},
	1437: {
		index: 1437,
		text: `<p>The other seizes your sword and breaks it like a twig. Next he reaches for your arm.</p>
<p><b>No Skill:</b> It breaks as easily as your sword. Your screams of pain bring him great pleasure, and when you fall silent, gasping for breath, he departs. [D1/<em>Crippled</em>]</p>
<p><b>Beguiling:</b> You cry out a long string of gibberish, and the other pauses and asks you what you have said. Your lip curls in a sneer as you explain that you have just called down a powerful curse on his head, and even now his power is leaving him. You kindly offer to lift the curse if he pleases. Amazingly, he agrees, and showers you with wealth! Truly do the poets say that the evil fear most the evil of others. [D2/W+3 (Max: Princely)/Quick Thinking/<b>Treasure</b>]</p>
<p><b>Sparkling Spear:</b> You lash out with the Spear, and the other disappears in a burst of flame. You have rid the world of a powerful force for evil. [D2/S1]</p>`,
	},
	1438: {
		index: 1438,
		text: `<p>As you approach, you see the other is deep in thought. He raises his hands, then drops them. "If it is to be, it is to be. And what will not, will never be." You think that you can profit if you fain to understand what the other is speaking of.</p>
<p><b>No Skill:</b> As you struggle to think of something to say, the other departs. [D1/S1]</p>
<p><b>Quick Thinking:</b> You reply, "What will be, is what The Most High wills, and is it not His will that all determine their own fates?" Delighted by your perspicacity, the other showers you with gifts before moving on. [D2/S1/W+1 (Max: Rich)/<b>Treasure</b>]</p>`,
	},
	1439: {
		index: 1439,
		text: `<p>You prepare a little entertainment with some accomplices, and your scheme is successful. However, in spite of his great power, your victim professes to be unable to help you.</p>
<p><b>No Skill:</b> Sadly, you let him go on his way. [D1]</p>
<p><b>Courtly Graces:</b> You realize that your victim is sorely lacking in intelligence, and you interrogate him cleverly. Eventually, he remembers a huge pile of gold he once saw, and brings it to you, believing that you are an agent of the Caliph. [D2/W+2 (Max: Rich)/Acting and Disguise]</p>`,
	},
	1440: {
		index: 1440,
		text: `<p>Your victim may be a fool, but he is still one of the Djinn. He summons a host of stinging insects to bedevil you and departs.</p>
<p><b>No Skill:</b> They swarm over your body, bringing you great torment. [D-1/<em>Accursed</em>]</p>
<p><b>Protective Talisman</b> (mandatory): Your magical charms turn the insects aside, and you go on your way, swearing to tread more cautiously around the Djinn in the future. [D1/Wisdom]</p>`,
	},
	1443: {
		index: 1443,
		text: `<p>You claim to be the descendant of the Prophet Solomon, who was granted dominion over all the Djinn. The other looks upon this claim with great skepticism.</p>
<p><b>No Skill:</b> Testing the truth of your claim, he strikes you with a bolt of flame. You are badly burnt, and the other snorts with laughter before he departs. [D1/<em>Crippled</em>]</p>
<p><b>Beguiling:</b> You present your case so well that the other fears to test you, lest you bind him into a lamp or otherwise demonstrate your power. Instead he offers to assist you. [D2/Choice of W+2 (Max: Princely) or Magic or <b>Treasure</b>/You may lose one status of your choice]</p>
<p><b>Protective Talisman</b> (mandatory): As a test of your claim, he calls down a terrible curse on your head. The Protective Talisman turns aside the blow, and he is convinced of your power; he grants you a great boon. [D2/<b>Treasure</b>]</p>`,
	},
	1444: {
		index: 1444,
		text: `<p>You realize that the other is trying to deceive you, and you attempt to turn the tables on him.</p>
<p><b>No Skill:</b> Your effort falls, and the other is annoyed at you. A whispered incantation, a subtle gesture, and *poof*—you wag your tail and bark! [D1/S1/<em>Beast Form</em> (1 turn)]</p>
<p><b>Quick Thinking:</b> You so cleverly contrive to reverse the deception that the other is greatly amused, although he is the butt of your joke! He grants you a great boon, and tells all of your great skill. [D2/S2/Beguiling/<em>Respected</em>]</p>
<p><b>Protective Talisman</b> (mandatory): Your effort falls, and the other is annoyed at you. A whispered incantation, a subtle gesture, and *poof*—and nothing happens, for the power of the Protective Talisman turns aside his spell! The other is most impressed, and you converse long into the night. [D1/Magic]</p>`,
	},
	1445: {
		index: 1445,
		text: `<p>You convince the other to join you in a game of chance, fully expecting him to refuse. To your surprise, he accepts!</p>
<p><b>No Skill:</b> You soon learn the dangers of dicing with those of great mystic depths. [D1/S1/W-2 (Min: Beggar)]</p>
<p><b>Quick Thinking:</b> When he asks you to name the game, you cleverly propose a game of chess, knowing that such a game allows no room for chance. You surprise yourself by winning easily, and he gives you a great prize. [D1/S2/Choice of W+1 (Max: Rich) or <b>Treasure</b>]</p>`,
	},
	1446: {
		index: 1446,
		text: `<p>The humble demeanor of your victim bolsters your confidence in an attempt to trick the other out of his wealth. However, your overconfidence betrays you and that humble demeanor disappears, replaced by one of anger and power. You are blasted with an unseen force and your body grows boils the size of eggs. [S-1/<em>Diseased</em>]</p>`,
	},
	1447: {
		index: 1447,
		text: `<p>You attempt to fool the other is met with smiles rather than anger. But the other is one of the Djinn and such actions on your part demand an answer. The other conjures slips of paper with writing on them and asks you to choose your boon.</p>
<p><b>No Skill:</b> You cannot refuse.</p>
<p><em>Roll two dice, adding three for Luck:</em></p>
<p>❖ 2: "100 lashes, administered immediately." [<em>Crippled</em>/Go to paragraph 1479]</p>
<p>❖ 3–4: "10 lashes, administered immediately." [<em>Wounded</em>/Go to paragraph 1479]</p>
<p>❖ 5: "1 lash, administered immediately." [S1/Go to paragraph 1479]</p>
<p>❖ 6–8: "Gift of 10 gold." [W+1 (Max: Respectable)]</p>
<p>❖ 9–11: "Gift of 100 gold." [W+2 (Max: Rich)]</p>
<p>❖ 12+: "Gift of 1000 gold." [W+3 (Max: Princely)]</p>
<p><b>Protective Talisman</b> (mandatory): As you reach for the outstretched scraps, the talisman in your pocket flashes with heat. You let your hands fall lightly on each scrap in turn until the talisman falls cool. You read upon it: "Well-played." The other smiles and disappears, leaving behind a small bag of gold. [W+1 (Max: Respectable)]</p>`,
	},
	1448: {
		index: 1448,
		text: `<p>You try to fool the other into granting you a favor, feeling that he would not be likely to grant your request directly. You spin a complex lie which tells of the great benefit that will come to him if he aids you.</p>
<p><b>No Skill:</b> Your lie is transparent, and he is not fooled for an instant. Instead, he punishes you severely for your duplicity. [D-1/<em>Wounded</em>]</p>
<p><b>Protective Talisman</b> (mandatory): You immediately sense that your lie is not convincing the other, and you change tactics; your lie becomes a parable of the rewards that await those who aid others. The other is moved by your words, and when you request his aid directly, it is granted. [D1/S1/Storytelling]</p>`,
	},
	1449: {
		index: 1449,
		text: `<p>You have heard much about the powers of the djinn, and you endeavor to fool the other into granting you a wish.</p>
<p><b>No Skill:</b> The other is not given to kind feelings towards those who importune him, and dismisses you with a gesture. With each step you take away from him, you feel your mind slip away... [S1/<em>Ensorcelled</em>]</p>
<p><b>Storytelling:</b> The other sees through your feeble attempts to trick him. However, he is not angered; your lie was amusing enough to distract him from his unhappy life that he imparts to you a bit of knowledge of strange and wondrous lands. [D2/S1/Opportunity to enter any Place of Power]</p>
<p><b>Protective Talisman</b> (mandatory): The other is not given to kind feelings towards those who importune him, and dismisses you with a gesture. You feel the Protective Talisman glow warm against your flesh, and know that only it has spared you from the wrath of the other. [D1/S1]</p>`,
	},
	1450: {
		index: 1450,
		text: `<p>Your attempts to trick the other fail completely, for he is so concerned with his own business that he pays you no attention at all. You suspect that if you press your case, his indifference will become wrath, and you head on your way. [S1]</p>`,
	},
	1451: {
		index: 1451,
		text: `<p>You discover that the other is quite suspicious of all strangers, and he seems to have a great grudge to bear against all.</p>
<p><b>No Skill:</b> Without cause, he suspects you of having been sent by his enemies, and has you bound and beaten near unto death. [D1/<em>Crippled</em>]</p>
<p><b>Acting and Disguise:</b> You are able to alleviate his suspicions through a superb performance of hatred against those he himself hates. Completely taken in, he treats you like a member of the family. [D1/S1/W+1 (Max: Rich)]</p>`,
	},
	1452: {
		index: 1452,
		text: `<p>At your words, the other says, "I have no patience with such foolish offers! Get out of my sight!" You do. [S1]</p>`,
	},
	1453: {
		index: 1453,
		text: `<p>The other is sick at heart, and tells you, "Despite the commandments of the Sultan of the Djinn, I have fallen in love with a mortal. I would do anything to be joined with her again."</p>
<p><b>No Skill:</b> You are unable to think of a solution, and you pass on. [S1]</p>
<p><b>Acting and Disguise:</b> You disguise the other as a mortal, and escort him on foot to the abode of his love, where he enjoys a final night of bliss in her arms before returning to the Dusky Land. Because he used none of his own powers to approach his love, the Sultan of the Djinn remains forever unaware of his transgression. The other showers you with gifts for your help. [D2/S1/W+2 (Max: Rich)/You may lose one status of your choice]</p>`,
	},
	1454: {
		index: 1454,
		text: `<p>The other is suffering from a broken heart. "There is only one thing that would interest me, and that is to be freed of my torment. Unless there is something you can do, I will do nothing for you."</p>
<p><b>No Skill:</b> You are unable to help the other. [S1]</p>
<p><b>Scholarship:</b> You know not how to bring two lovers back together, but you are able to prescribe a rare herb which will dull his senses and remove some of the pain he feels. The other is immensely grateful. [D2/S1/W+1 (Max: Rich)]</p>`,
	},
	1455: {
		index: 1455,
		text: `<p>You dare to approach the other despite his obvious heartache. Before you can finish a sentence, the other looms over you like a vengeful demon. "Yes?" he booms. "What do you want, worm?"</p>
<p><b>No Skill:</b> Your nerve fails you and you flee his presence. [D-1/S1]</p>
<p><b>Determined</b> (mandatory), <b>Acting and Disguise:</b> You maintain your poise and confidence in the face of the other's intimidation. "Well," he says, "It appears you are made of stern stuff. I can use a person of your character..." You obtain a position of trust and confidence in his household, and learn greatly from your patron. [D2/W+1 (Max: Rich)/Wisdom/<em>Respected</em>]</p>`,
	},
	1456: {
		index: 1456,
		text: `<p>The other glares in response to your words. "You seek only to gain profit at my expense, do you not?"</p>
<p><b>No Skill:</b> The other will have no dealings with you; your conversation is seen by many, and your shame is great. [<em>Scorned</em>]</p>
<p><b>Beguiling</b> (mandatory): Your confidence in your wit and tongue lead you to attempt to trick the other, when it is obvious that he is skeptical of your character. You persist long after sense would have dictated you withdraw, and he publicly humiliates you for your false dealing. [D1/Lose Beguiling/<em>Scorned</em>]</p>`,
	},
	1457: {
		index: 1457,
		text: `<p>The other looks at you reflectively. "Due to my wealth and powers, I find myself constantly approached by false friends and lovers. Though I admit I am impressed with your charms, I must assume you to be the same until you prove otherwise."</p>
<p><b>No Skill:</b> Although you know in your heart that you are not false, the other will not give you a chance to prove it. [D1]</p>
<p><b>Seduction:</b> You give the other lessons in the amorous arts, which he finds most instructive and useful. [D1/<em>Respected</em>]</p>`,
	},
	1458: {
		index: 1458,
		text: `<p>On your words, the other says, "If you would truly honor me, you would grant me your aid in my pursuit of love."</p>
<p><b>No Skill:</b> The task the other asks of you is beyond your abilities; you cannot help, but the story of his doomed courtship is a powerful and memorable lesson. [S1]</p>
<p><b>Courtly Graces:</b> The other is soon to be married to another of high station, but is lacking in knowledge of protocol. Your courtly skills help the other. In gratitude, the married couple bestows a wondrous gift upon you. [D1/S1/<b>Treasure</b>]</p>
<p><b>Quick Thinking:</b> With great cleverness, you weave a complex ruse to gain the other the very thing he needs. Impressed and grateful, the other shares with you an arcane secret he learned many years ago. [D1/S1/Magic]</p>`,
	},
	1459: {
		index: 1459,
		text: `<p>"Please, it is not right that a mortal should bow before one of the People of the Flame. It is we who are your servants, as Solomon commands."</p>
<p><b>No Skill:</b> "And so, master, I shall share a bit of knowledge with you." [D1/S1/Gain any one skill]</p>
<p><b>Appearance:</b> "Your visage is as sweet and joyous as the mysteries of the oceans of the moon. I would gladly grant you a great favor." [D1/Choice of W+1 (Max: Princely) or <b>Treasure</b> or Gain any one skill or Gain any one status except <em>Sultan</em>]</p>`,
	},
	1460: {
		index: 1460,
		text: `<p>"Please rise," says the other. "It is improper that you bow before me."</p>
<p><b>No Skill:</b> "Nonetheless, I cannot help you." You stalk away, very unhappy and very jealous. [<em>Envious</em>]</p>
<p><b>Wisdom:</b> You compose yourself and engage the 'efreet in conversation. After many hours of discussion on various subjects, the 'efreet bows before you. "It is rare to meet a mortal with your intelligence. I have enjoyed the discourse we have had. Please accept this token of my appreciation." The 'efreet touches your head lightly: you blink several times and find yourself alone... but your mind has gained a new understanding of the world about you. [S1/Scholarship]</p>`,
	},
	1461: {
		index: 1461,
		text: `<p>To your words, the other responds, "Solomon the Wise has commanded the Dusky People to help mortals whenever asked and I shall do as he has commanded. Therefore I shall give you knowledge which may be of aid to you in the future." [D1/Magic]</p>`,
	},
	1462: {
		index: 1462,
		text: `<p>"I always knew mortals were snivelers and should be stricken from this world."</p>
<p><b>No Skill:</b> You raise your head in fear and cry out, "I did not mean to disturb you, O mighty one. Please accept a token of my esteem, so that I may part while still holding my unworthy life." [D-1/Choice of W-2 (Min: Beggar) or Lose one <b>Treasure</b>]</p>
<p><b>Appearance:</b> "However, for a mere mortal, the moonglow reflects beauteously from your face. I shall grant your request — but you will remain mine for all eternity!" [D2/S1/<em>Enslaved</em>]</p>`,
	},
	1463: {
		index: 1463,
		text: `<p>Your words fall on deaf ears: the other takes no notice of you.</p>
<p><b>No Skill:</b> You are somewhat relieved to have been ignored. [D1]</p>
<p><b>Insane</b> (mandatory): Insulted by the snub, you unsheathe your sword and wave it in front of him. "Listen to me when I am speaking. I am not a lowly worm to be ignored—" The other cuts in, "A worm you may not be, but you are an animal just the same." With a dismissive gesture, the other disappears. You remain, yet are not the same. [D1/<em>Beast Form</em>]</p>`,
	},
	1464: {
		index: 1464,
		text: `<p>A throaty laugh escapes from the other. "Your actions are most pleasing to me. I'll grant your desire."</p>
<p><b>No Skill:</b> The other teaches you some of the ways of the world. [D1/Scholarship]</p>
<p><b>Scholarship, Wisdom:</b> The other teaches you some of the ways of the world. Coupled with your present knowledge, you glean a lot more than are taught. [D2/Opportunity to enter any Place of Power]</p>`,
	},
	1465: {
		index: 1465,
		text: `<p>The other seems pleased by your words and you are heartened to have made an impression. However, there is a harsh price to be paid for the knowledge you receive. [S1/Wisdom/<em>Under Geas</em>]</p>`,
	},
	1466: {
		index: 1466,
		text: `<p>"I cannot help you with your face to the ground. Please rise and state your business."</p>
<p><b>No Skill:</b> You launch into a boring tale that has the other reaching into his pockets to give you a coin to be rid of you. [D1/W+1 (Max: Poor)]</p>
<p><b>Beguiling:</b> Your words strike a chord with the other and when you are done, the other is eager to help. [D1/S1/Storytelling/Magic]</p>`,
	},
	1467: {
		index: 1467,
		text: `<p>Your cunning design makes a fool of the other, and you prepare to extort a small amount in exchange for keeping silent about his humiliation. The other weeps openly and bemoans the cruelty of humanity.</p>
<p><b>No Skill:</b> Still, he hands over the requested sum. [D1/W+1 (Max: Respectable)]</p>
<p><b>Wisdom:</b> This is but the longest in a dire series of humiliations for him. You hear words of truth in his cries.</p>
<p><em>If you are the same sex as the other or are Married:</em> You take note of the poetic nature of the other, and repent your earlier decision. Instead, you aid the other in regaining his lost reputation. Though the path to redemption is difficult, witnessing the bravery with which he bears his humiliation inspires you. [D2/Enduring Hardship]</p>
<p><em>Otherwise:</em> You take note of the exquisite beauty of the other, and repent your earlier intention. Instead you soon find that you are desperately in love. [D2/S1/<em>Love Struck</em>]</p>`,
	},
	1468: {
		index: 1468,
		text: `<p>You make a fool of the other by your clever scheme, and are prepared to extort a great gift from him for your silence about his humiliation.</p>
<p><b>No Skill:</b> The other grants the favor you ask, cursing the wiles of humanity. [D1/W+2 (Max: Rich)]</p>
<p><b>Wisdom:</b> You are moved at the sight of the other weeping, and you repent of your cruelty. [D2/Piety]</p>`,
	},
	1469: {
		index: 1469,
		text: `<p>To your great surprise, the other throws himself at your feet!</p>
<p><b>No Skill, Married</b> (mandatory): He begs for the right to bring you an evening of joy, and magnanimously you accept. The other is inexhaustible in his passion, and when the morning arrives, you have not slept, and are sore tired from the encounter—not that you would have taken all the gold in Persia in exchange. [D1/Luck]</p>
<p><b>Appearance:</b> He tells you of one he knows who will bring you great joy, and rushes to bring her to you. At the sight of you, she falls in a swoon, and you are likewise astounded by her beauty! The other departs, off to play match-maker with two others. [D2/<em>Beloved</em>]</p>`,
	},
	1470: {
		index: 1470,
		text: `<p>Throwing caution to the wind you dive at the other with willful rage in your eyes. "In the name of the great and powerful Allah I shall smite you!"</p>
<p><b>No Skill:</b> The other is too powerful for you and you fall at his feet. You are carried away and find yourself at the mouth of a strange and wondrous cave.</p>
<p>"Your mind is strong and your heart is pure," the other says. "I shall heal you of your wounds if you but travel into these caves and bring me just one thing that I require."</p>
<p>You weakly agree and suddenly your wounds are healed. You feel better than you have ever felt before.</p>
<p>"Go now," he says, "Go now and face your destiny. [D1/S2/Appearance/Move to the Cave of Wonders and have an immediate encounter]</p>
<p><b>Weapon Use:</b> The other is quite skilled—but so are you. You fight for what seems like hours until you are both exhausted.</p>
<p>"You have bested me. None has before," says the other. "I will grant you one wish. Where in the known world would you most like to be right now?" [S2/Move to any space, including a Place of Power, and have an immediate encounter]</p>
<p><b>Appearance:</b> The other is clearly going to best you in the fight. You look him in the eyes at one point in the contest and say, "Please make my end quick." The other is drawn into your eyes and can continue no longer. "You are the most beautiful creature I have ever seen." [D1/<em>Beloved</em>]</p>`,
	},
	1471: {
		index: 1471,
		text: `<p>Before you can even draw your blade, your foe is upon you!</p>
<p><b>No Skill:</b> You are thrashed within inches of your life. The tale of your foolishness resounds through the lands unto seven generations. [D-1/S2/Enduring Hardship/<em>Crippled</em>/<em>Scorned</em>]</p>
<p><b>Enduring Hardship:</b> Blows rain upon you for a day, and a night. As your foe finally takes a pause they marvel at your ability to remain breathing. Satisfied that you have learned your lesson the other leaves you to lick your many, many wounds. [D1/S1/<em>Wounded</em>]</p>
<p><b>Luck:</b> The first blow of your foe sends you flying into the wet embrace of a rushing river that swiftly carries you away. Half-conscious, you feebly struggle against the currents, battered amongst rocks and tree limbs. Finally an errant branch catches your sleeve and deposits you on the bank. [D2/S1/<em>Lost</em>]</p>`,
	},
	1472: {
		index: 1472,
		text: `<p>As you draw your weapon to attack, the other raises an eyebrow in disbelief.</p>
<p><b>No Skill:</b> When you awake the encounter has been beaten from easy memory, except for the dismissive laughter. [D-1/S-1/<em>Wounded</em>]</p>
<p><b>Weapon Use:</b> You barely manage to fend off the worst of your opponents blows before they become bored with you and dash you to the earth. [D-1/S1/<em>Crippled</em>]</p>
<p><b>Quick Thinking:</b> Before the pain of the blows becomes too bad, you toss your weapon away and raise your hands in supplication, thanking your foe for the lesson. Mercy wins the day. [D1/S1/<em>Wounded</em>]</p>`,
	},
	1473: {
		index: 1473,
		text: `<p>The other is caught off guard by the audacity of your attempt.</p>
<p><b>No Skill:</b> However, your opponent almost instantly recovers their composure and leaves you with several scars to add to your tales. [D1/S2/<em>Crippled</em>]</p>
<p><b>Weapon Use:</b> You manage to hold your own for a few exchanges. Then, with an amazing display of skill, your weapon is swept aside. The other leaves you bleeding and beaten. During the beating you pick up a few tricks which may prove useful in future engagements. [D1/S1/Weapon Use/<em>Wounded</em>]</p>`,
	},
	1474: {
		index: 1474,
		text: `<p>The other sneers at your pretty words and dismisses you with a sweep of the left hand.</p>
<p><b>No Skill:</b> You are left to ponder the meaning of the other's intricate dismissal. [D1]</p>
<p><b>Scholarship:</b> You interpret the inner meaning of the others swift discounting. Like fruit early in the season, you are not quite ripe for the other's tutelage. [D1/Wisdom]</p>
<p><b>Beguiling:</b> Not to be rebuked, you continue to pour out flowery words until the other is out of sight. [D1/S1]</p>`,
	},
	1475: {
		index: 1475,
		text: `<p>Falling to one knee, you bow your head and request a lesson from the other.</p>
<p><b>No Skill:</b> The other graciously favors you with a brief lesson. [S1/Wisdom]</p>
<p><b>Quick Thinking:</b> The other is impressed by the speed with which you realized their value. They take you under their wing as a servant for a season, sharing wisdom late into the nights. [D1/Wisdom]</p>
<p><b>Storytelling:</b> Amused, the other asks for tales to gather your measure. After a long night of tale telling the other takes you into their confidence and shares the deeper meaning of the very stories you have told. [D1/S3/Wisdom/Opportunity to enter any Place of Power]</p>`,
	},
	1476: {
		index: 1476,
		text: `<p>The other is impressed by your earnest plea and allows you to wait on them for a fortnight in exchange for nightly conversation.</p>
<p><b>No Skill:</b> You run after the other's heels, waiting on their every wish. The days prove long, the nights longer. Although you are not able to discern much from the other's obscure words, you do leave with a tale to tell. [D1/S3/Enduring Hardship]</p>
<p><b>Scholarship:</b> You become the other's devoted scribe for the duration, recording their words for the sake of posterity. [D1/S3/Wisdom]</p>
<p><b>Wisdom:</b> Every evening is spent in long discussion on the inner teachings of the great sages of old. You gain much from the time of your association. [D1/S2/Wisdom]</p>`,
	},
	1477: {
		index: 1477,
		text: `<p>The other swells at your kind words and leads you to a dark alley to converse further. There the other has more friends waiting to "discuss" matters with you.</p>
<p><b>No Skill:</b> They satisfy themselves with merely robbing you blind. [S1/W-1 (Min: Poor)]</p>
<p><b>Weapon Use:</b> With flashing blade you beat your way clear of the ambush and barely escape pursuit. [D1/S2]</p>
<p><b>Stealth and Stealing:</b> You capitulate to being roughly searched, but manage to conceal the bulk of your coins. During the treatment you even manage to palm a few extra from your would-be robbers. [D1/S1/W+1 (Max: Rich)]</p>`,
	},
	1478: {
		index: 1478,
		text: `<p>The other looks at you, a sneer on their face. "And who are you to speak to me so?"</p>
<p><b>No Skill:</b> The other is not convinced by your complimentary words and leaves you swiftly. However, another witnesses your association and spreads the tale. [D-1/S1/<em>Scorned</em>]</p>
<p><b>Acting and Disguise:</b> You manage to fool the other into thinking you travel in the same circles. You spend some nights at their side, and are left secretly craving the freedom they possess. [D1/S3/<em>Envious</em>]</p>`,
	},
	1479: {
		index: 1479,
		text: `<p>You cry at the misery you have suffered, proclaiming that you were tricked and no boon was to be had. The other offers you another pick.</p>
<p><em>If you choose to pick again:</em></p>
<p><em>Roll two dice, adding three for Luck:</em></p>
<p>❖ 2: The slip says, "You cannot cheat an honest man." When you look up, the djinn is gone, along with everything you own. [D1/S1/Wisdom/W=Beggar]</p>
<p>❖ 3–7: "Gift of 10 gold." [W+1 (Max: Respectable)]</p>
<p>❖ 8–10: "Gift of 100 gold." [W+2 (Max: Rich)]</p>
<p>❖ 11: "Gift of 1000 gold." [W+3 (Max: Princely)]</p>
<p>❖ 12+: "A prince's ransom!" [W+3 (Max: Princely)/<b>Treasure</b>]</p>
<p><em>If you choose not to pick again:</em></p>
<p>The djinn transports you to the nearest city. [S1/Move to the nearest city (if two are equidistant, you may choose either of them)]</p>`,
	},
	1480: {
		index: 1480,
		text: `<p>As you grab for the other, they draw a blade, shouting, "You will serve to whet my appetite for revenge!"</p>
<p><b>No Skill:</b> The other delivers a sound trouncing onto you and leaves, well warmed up for their next battle. [D1/S1/<em>Wounded</em>]</p>
<p><b>Weapon Use:</b> Your blade leaps into your hand. You leave the other to lick his wounds. You contact the target of their revenge to warn them, and for your trouble you are rewarded. [D1/S2/W+1 (Max: Rich)/<em>Respected</em>]</p>`,
	},
	1481: {
		index: 1481,
		text: `<p>Determined to give the other time to cool their anger, you decide to offer to guide them through a "shortcut".</p>
<p><b>No Skill:</b> After some hours of wandering, the other quits your company to make their own way. Your delay proves fruitful and the would-be victim of their vengeance is spared for another day. [D2/S1]</p>
<p><b>Wilderness Lore:</b> Leading the other deep into the wilderness, you abandon them just before they become suspicious. You return to civilization well before they do and warn their intended victim, the beautiful daughter of a powerful merchant who rewards you handsomely. [D2/S1/W+1 (Max: Fabulous)]</p>`,
	},
	1482: {
		index: 1482,
		text: `<p>A torrent of compliments rolls from your lips. The other is temporarily distracted from their wrathful course.</p>
<p><b>No Skill:</b> After a time the other takes their leave to pursue their revenge. Your delay proves enough for their victim to escape. The other vows revenge on you! [D2/S1/<em>Pursued</em>]</p>
<p><b>Seduction:</b> Your words play through the other's mind, soothing their rage and giving them time to consider their course. The other lets go of their need for revenge, and instead directs their passion to pursuing another target: you! [D1/S1/<em>Beloved</em>]</p>`,
	},
	1483: {
		index: 1483,
		text: `<p>The other turns their nose up at your unkempt appearance and turns to stride away with a laugh.</p>
<p><b>No Skill:</b> You are left awkwardly on the road. [S1]</p>
<p><b>Stealth and Stealing:</b> As they leave, you see in the alleys of the city that others are spying upon them with greedy eyes. You give warning, averting an ambush, and you are handsomely rewarded for you efforts. [D1/S2/W+1 (Max: Rich)]</p>`,
	},
	1484: {
		index: 1484,
		text: `<p>Intrigued, the other gives you the opportunity to assist them as their herald for an event at court.</p>
<p><b>No Skill:</b> You attempt your best to flourish the introduction, but are returned only a few weary stares and yawns. The other thanks you, slides you some coin and sends you on your way. [D1/W+1 (Max: Poor)/Courtly Graces]</p>
<p><b>Courtly Graces:</b> For the day, you race about the city spending coins on attire suitable for the grand court. As the evening nears you practice your words assiduously. At the appointed time you make the formal introduction of the other. So moved is the court that the other is seated at the place of high honor. The evening is a great success for them, and they sing your praises for some time to come. [D2/S1/W-1 (Min: Poor)/<em>Respected</em>]</p>`,
	},
	1485: {
		index: 1485,
		text: `<p>The other is looking for the remote burial place of an ancient ancestor.</p>
<p><b>No Skill:</b> The most you can offer is to be a hand on their hopeless exhibition. [D1]</p>
<p><b>Wilderness Lore:</b> As luck would have it, you are quite familiar with the location they seek. You are handsomely rewarded, and are invited to join them in their explorations. [D2/S1/W+1 (Max: Rich)/Opportunity to enter the Sepulchre of Solomon]</p>`,
	},
	1486: {
		index: 1486,
		text: `<p>The other looks astounded by your audacity as you draw your weapon to attack. "Guards!"</p>
<p><b>No Skill:</b> The other's well-paid and experienced personal guards move in swiftly. Within moments you are at their mercy, bruised and beaten. The other looks upon you contemptuously. "Today you live and I hope you have learned your lesson. Guards, take this would-be robber's purse as payment." You are left coinless and wounded. [D1/W-1 (Min: Penniless)/<em>Wounded</em>]</p>
<p><b>Quick Thinking:</b> Realizing you have bitten off more than you can chew, you flee like the wind. You manage to lose the pursuing guards, and live to another day. The other reports your assault to the authorities. [D1/<em>Outlaw</em>]</p>`,
	},
	1487: {
		index: 1487,
		text: `<p>Boldly you draw your weapon and step quickly past the other's stunned guards.</p>
<p><b>No Skill:</b> You manage to strike your foe once before their guards rally to their aid. In the fierce battle that follows you give better than you get before fighting your way free. [D1/S2]</p>
<p><b>Weapon Use:</b> With a single swing of you blade you lay the other low. Too late, their guards respond. With their master dead they quickly lose heart before your flashing blade and flee. Those who live by the blade come to know your name. [D1/S2/<em>Respected</em>]</p>`,
	},
	1488: {
		index: 1488,
		text: `<p>The other is too well-guarded to attack openly, so you bide your time like a hunter stalking his prey and await your opportunity.</p>
<p><b>No Skill:</b> Your prey never strays far from safety. After some days they enter the palace of the Vizier, far beyond your reach. [D1]</p>
<p><b>Luck:</b> After hours of patient stalking you are rewarded as the other leaves their guard behind to visit a quiet garden. Seizing your opportunity you surprise the hapless victim, dispatch them, and are on your way before the alarm is sounded. [D1/S2/W+1 (Max: Rich)]</p>`,
	},
	1489: {
		index: 1489,
		text: `<p>The other sees through your trick almost immediately. "You are beneath my amusement, but perhaps my guards will enjoy toying with you. I give you twenty breaths head start." The other smiles and begins breathing slowly as you turn and flee.</p>
<p><b>No Skill:</b> You are quickly caught, and overpowered by the other's laughing guards. They make good sport of thrashing you into a pulp. [D1/<em>Crippled</em>]</p>
<p><b>Wilderness Lore:</b> You make good use of your slim lead and race into the wilds. Living off the land, and a friend to all manner of beast, you lead the guard on a merry chase. After days of pursuit, while you grow fat off the land, they abandon their search. [D1/S2/Enduring Hardship]</p>`,
	},
	1490: {
		index: 1490,
		text: `<p>You spin a tale to the other, suggesting that they should aid you in your quest.</p>
<p><em>Roll one die, adding one each for Beguiling and Storytelling:</em></p>
<p>❖ 1–3: The other is insulted by your waste of their time. "Like an animal, you would linger on my path as an obstruction. So shall you be!" [D1/S1/<em>Beast Form</em>]</p>
<p>❖ 4+: The other is convinced. They promise to make your way clear for one time only. [D1/S2/Storytelling/<b>One Hundred Keys</b> (1 use)]</p>`,
	},
	1491: {
		index: 1491,
		text: `<p>You catch the other's attention. Engaging them in conversation you seek out the plans they foster and the circles they travel in.</p>
<p><b>No Skill:</b> The other reveals not much of themselves, but the wrestling match of words proves very educational. [D1/S2/Storytelling]</p>
<p><b>Beguiling:</b> With words as skilled as the thieves of legend you garner much from the other, and learn great details of their travels. [D1/S3/Opportunity to enter any Place of Power]</p>`,
	},
	1492: {
		index: 1492,
		text: `<p>Filled with bravado, you draw your blade and boldly demand payment from the other.</p>
<p><b>No Skill:</b> The other's eyes go wide in disbelief. Seeing that you are serious, they order their guard to dispatch you, between guffaws. You barely manage to escape intact. [D2/S1/<em>Wounded</em>]</p>
<p><b>Weapon Use:</b> Seeing the surety of your grip, the other orders their guard to deal with you. With swift steel you strike down the other's guard and repeat your original demand. Amused at your brashness, the other offers you a trifle. [D1/S2/<b>Treasure</b>]</p>`,
	},
	1493: {
		index: 1493,
		text: `<p>Girding yourself, you draw steel and demand the other surrender their coins or their life. The other rolls their eyes and dismisses your threat with a wave of their hand and a word of potent magic.</p>
<p><b>No Skill:</b> The spell warps your body and mind leaving you dazed and changed. The touch of magic leaves its mark upon you. [S2/<em>Beast Form</em>]</p>
<p><b>Magic:</b> You counter the other's magic with your own potent spells. Intrigued, the other engages you in a duel of sorcery. Your battle is witnessed, and even though in the end you are defeated by a foe whose respect you have earned, the story of your might spreads. [D1/S3/<em>Respected</em>]</p>`,
	},
	1494: {
		index: 1494,
		text: `<p>Despite all common sense, lust for the other's wealth wins out. Half crazed by greed you assault the other, grasping for their treasures. Enraged, the other buffets you with mighty blows, dashing what little sense you had left from you. When you come to you are no longer sure where you are, or whom. [D1/<em>Insane</em>/<em>Wounded</em>]</p>`,
	},
	1495: {
		index: 1495,
		text: `<p>In matters of money, even a few meager coins can count. Seeing as how the other is so pathetic anyway, you decide he won't miss his purse.</p>
<p><b>No Skill:</b> You shove the other easily down, rip the purse from his belt and stride away smiling. [D-1/W+1 (Max: Poor)]</p>
<p><b>Stealth and Stealing:</b> With a deft swipe of your dagger you cut the sagging purse from the other's belt and are on your way leaving them none the wiser. [D-1/S1/W+1 (Max: Poor)]</p>
<p><b>Luck:</b> The other's purse feels light in your hand. Upon investigation you find no coins, but an ancient map. The other's loss is your key to adventure! [D1/S1/Opportunity to enter any Place of Power]</p>`,
	},
	1496: {
		index: 1496,
		text: `<p>Sometimes greed is the better part of valor. Disregarding the other's wretched condition you steel your heart and demand what coin they may have.</p>
<p><b>No Skill:</b> With tears in their eyes, but resigned to their poor fate, the other hands you the last of their money. "I may be poorer than the dirt under Allah's feet, but you plainly are more troubled than I." The coins do not last nearly as long as the other's words. [D-2/Wisdom/<em>Grief Stricken</em>]</p>
<p><b>Stealth and Stealing:</b> With ease you remove the other's purse and are gone before your victim takes note. The sad few coins in the purse do not even provide a single meal. The plight of the other cuts you deep. [D-1/<em>Grief Stricken</em>]</p>`,
	},
	1497: {
		index: 1497,
		text: `<p>Filled with bravado, and scoffing at the other's condition, you draw your weapon and attack.</p>
<p><b>No Skill:</b> The other puts up a fight. Their desperation lends them strength and you are forced to flee. The fight is witnessed and tales of your villainy spread far. [D-1/<em>Scorned</em>]</p>
<p><b>Weapon Use:</b> The other's ferocity catches you off guard for a moment, but you recover and with sure strikes you quickly overcome your opponent. You stand, breathing hard over your slain foe. The fight is witnessed and tales of your lack of pity spread far and wide. [D-2/S1/<em>Scorned</em>]</p>`,
	},
	1498: {
		index: 1498,
		text: `<p>There is little the other can do to resist you. There is also little the other can offer you once bested. You leave unsure of your actions. [D-1/<em>Fated</em>]</p>`,
	},
	1499: {
		index: 1499,
		text: `<p>The other draws a sword from out of his bedrolls. "I was once the greatest sword master in all the world. No matter how destitute I become I could never sell my best sword. Now you will feel its bite!"</p>
<p><b>No Skill:</b> You drop your sword and beg to be spared, saying that you too are destitute and that you only attacked him out of desperation. The other is touched by your tale and says, "You are still young. You could join an army. Let me teach you to fight and it will make me feel whole as well." [S1/Weapon Use/Quick Thinking]</p>
<p><b>Weapon Use:</b> The other circles you for a bit and then says, "You move like a warrior, but you will still be no match for me." He strikes and you battle as best you can. You eventually best him as he tires from malnutrition. As he falls to the ground you are beset with grief and decide to restore him back to health. He is grateful and teaches you all he knows. [D1/Weapon Use/Wilderness Lore]</p>`,
	},
};
