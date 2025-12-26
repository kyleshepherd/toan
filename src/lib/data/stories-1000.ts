import type { Story } from "./stories";

export const stories1000: Record<number, Story> = {
	1000: {
		index: 1000,
		text: `<p>You notice that all of the people in this strange land, have only four fingers on their left hands, and you ask why. You are informed that it is the custom of these people to sever the little finger of all newborns. You must submit to this practice if you are to remain here.</p>
<p><b>No Skill:</b> <em>You may cut off your finger or depart:</em></p>
<p><em>If you cut off your finger:</em> You submit to the custom. It is painful, but you gain rare and fascinating insights into a strange culture. [D1/S1/Scholarship/<em>Wounded</em>]</p>
<p><em>If you depart:</em> You hastily leave rather than mutilate yourself. [Have another player move you one space in any direction]</p>
<p><b>Courtly Graces:</b> Asking further, you determine that an king in ancient times who lacked this finger decreed that all his subjects should be blessed in the same way. You gain audience with the current Sultan and convince him to establish a new tradition to enhance his own honor. Pleased with your wisdom, he makes you a trusted advisor. [D2/S1/<em>Vizier</em>]</p>`,
	},
	1001: {
		index: 1001,
		text: `<p>In this strange land, you discover that it is illegal to eat dates from a leather bag. You are sentenced to execution by a grinning Vizier (the selfsame man who gave you the dates), with your worldly goods to be given to the state (that is, to the Vizier).</p>
<p><em>You may protest your innocence or try to assassinate the Vizier:</em></p>
<p><em>If you protest:</em> You plead your case before the Sultan, claiming ignorance rather than malicious intent. Your pleas fall upon deaf ears. However, your sentence is commuted to exile rather than death. [D1/<em>Outlaw</em>]</p>
<p><em>If you attempt to slay the Vizier, roll one die, adding one each for Weapon Use and Stealth and Stealing:</em></p>
<p>❖ 1–3: You fail and are horribly wounded. However, you manage to escape. [D1/S1/Lose Weapon Use/<em>Wounded</em>/<em>Outlaw</em>]</p>
<p>❖ 4+: You succeed! You discover that, by the strange laws of this place, your act makes you the new Vizier. [D2/S1/<em>Vizier</em>]</p>`,
	},
	1002: {
		index: 1002,
		text: `<p>You witness a most brutal scene: a grandee slays a peasant for a trivial offense. He is about to slay another when you intervene, asking what justice is served by such a harsh punishment.</p>
<p><b>No Skill:</b> Enraged, the aristocrat attacks you. You barely escape with your life. [D1/<em>Wounded</em>]</p>
<p><b>Weapon Use:</b> Your attack is met skillfully; the noble you fight is a master swordsman. However, the distraction permits the peasant to escape. You escape immediately thereafter. [D1/Weapon Use]</p>`,
	},
	1003: {
		index: 1003,
		text: `<p>You spend the night with a rich local merchant, but are dismayed to learn of an obscure custom—by accepting his hospitality, you are committed to marry his child! You have no wish to marry an infidel, but an armed slave is tasked to insure your cooperation.</p>
<p><b>No Skill:</b> Since you have no choice, you are married. [D1/Lose Seduction/<em>Married</em>/<em>Grief Stricken</em>]</p>
<p><b>Acting and Disguise:</b> When you are alone that day, you make yourself look diseased. Appalled, the merchant gladly allows you to leave. [D1/S1]</p>
<p><b>Married</b> (mandatory): You explain that you are already married and cannot do as he asks. The merchant waxes greatly wroth at this, and casts you out of his house. Though you feel you have done no wrong, all the people of this land shun you for taking advantage of the merchant in this way. [D1/<em>Scorned</em> (1 turn)]</p>`,
	},
	1004: {
		index: 1004,
		text: `<p>You are traveling in strange lands.</p>
<p><b>No Skill:</b> Here, you have met and fallen in love with a wonderful person; her countenance glows like a pearl, and her kindness is as of the angels of Allah. You wish to marry, but one thing might stop you: in this land, when a person dies, the surviving spouse is buried alive with the corpse.</p>
<p><em>You may choose to marry or not:</em></p>
<p><em>If you do not:</em> You publicly denounce the foul custom. You are shunned by the people of this land. [S1/<em>Scorned</em>]</p>
<p><em>If you agree to be Married:</em> [Go to paragraph 1005]</p>
<p><b>Married</b> (mandatory): Your most beloved spouse, the light of your life, has journeyed to be with you. [Go to paragraph 1005]</p>`,
	},
	1005: {
		index: 1005,
		text: `<p>In this land, you enjoy a happy life with your most wonderful spouse. After you marry, you learn of the custom in this land of burying the surviving spouse with the corpse in a huge pit. Less than a week later, your spouse dies of a sudden illness. [Lose <em>Married</em>]</p>
<p><em>You may accept your fate or attempt to flee:</em></p>
<p><em>If you attempt to flee, roll two dice, adding one each for Appearance, Stealth and Stealing, and Acting and Disguise:</em></p>
<p>❖ 2–7: You are caught. Enraged, the people punish you brutally before throwing you in the pit. [<em>Crippled</em>/Go to paragraph 1006]</p>
<p>❖ 8+: You flee with few possessions, but with your life intact. [S1/W-1 (Min: Respectable)]</p>
<p><em>If you accept your fate:</em> Despite the injustice of the practice, you accept the ways of the people. [Go to paragraph 1006]</p>`,
	},
	1006: {
		index: 1006,
		text: `<p>In the land in which you travel, your spouse has died. It is the custom to bury the surviving spouse with the corpse in a huge pit. With one loaf of bread and a bottle of water you are lowered into the burial pit. Soon your bread and water are gone. One day, light streams in as another couple is lowered into the pit.</p>
<p><b>No Skill:</b> The surviving woman is unwilling to share her food. You fall into a deep sleep like unto death. A grave robber draws you out of the pit and, taking you for dead, strips you. You barely manage to crawl away, dazed, and without memory of who you are. [D1/S1/W-3 (Min: Penniless)/<em>Insane</em>]</p>
<p><b>Determined</b> (mandatory), <b>Quick Thinking, Weapon Use:</b> You leap forward and brain the infidel with a thighbone of the deceased. The bread and water keep you alive until the next person is lowered, who you likewise slay and plunder. This continues until you stumble upon a secret exit. At the end of an interminable crawl, you emerge into a fabulous valley where diamonds are strewn about like pebbles! [D2/S1/Luck/Move to the Valley of Diamonds and have an immediate encounter]</p>
<p><b>Accursed, Insane, Ensorcelled</b> (All mandatory): You are not able to muster the wit necessary to reason with the new arrival, but you manage to conceal yourself in the darkness until she sinks into an exhausted sleep. You then stumble from hiding and slay her, feasting on her remains and the scraps of food she possessed. The new corpses last you until the glad day when another couple is interred. Eventually the nutritious diet and exercise restore your strength, and you are finally able to tear down a section of cavern wall and escape. You find that your new diet agrees with you, and soon take to waylaying travelers on lonely roads, and having them in for dinner. You are now of the tribe of gools and consequently no longer of interest to our story. [Death]</p>`,
	},
	1007: {
		index: 1007,
		text: `<p>The other is blind and has no interest to you in your journeys. You pass him by not noticing that he is a stricken prince, lost to his royal family, for whom a reward was offered. [D-1]</p>`,
	},
	1008: {
		index: 1008,
		text: `<p>The other is blind and his senses are heightened. "Where are you going young traveler?" he asks. You continue on your way hoping he thinks that you did not hear him. "Your selfish nature is shameful, young one. A curse on you!"</p>
<p><b>No Skill:</b> Your body seizes up from a tight pain. The pain comes and goes as you travel making you think often of the promise of Allah's mercy. [S1/Piety/<em>Ensorcelled</em>]</p>
<p><b>Bargaining and Evaluation:</b> You notice that the being has a rare garment of great value. "Wait," you say. "I do wish to help you." Thus saying, you tell the other of the value of his garment, of which he was previously unaware. He is impressed that you did not try to trick him out of it, and he gives you the blessings of Allah. [D1/S1/<em>Blessed</em>]</p>`,
	},
	1009: {
		index: 1009,
		text: `<p>You hide yourself to avoid the other, and are not seen. You continue on your way. [D-1]</p>`,
	},
	1010: {
		index: 1010,
		text: `<p>You do not wish to meet the other, and absent yourself. When you are sure no one sees you, you emerge from your hiding place and go on. [D-1]</p>`,
	},
	1011: {
		index: 1011,
		text: `<p>You hear the other approaching, and you hurry off in another direction, heading toward a nearby forest.</p>
<p><b>No Skill:</b> The other is hears you flee and charges after you. After a long chase, you come to a small town, and you are captured by several large men, who see your foaming mouth and wild eyes and assume you are one of the gools who have been preying on their town. No amount of explanation will convince them otherwise. [S1/<em>Imprisoned</em>]</p>
<p><b>Wilderness Lore:</b> The other is suspicious and charges after you. You use your knowledge of forests of this type to avoid the other with ease. [S1]</p>`,
	},
	1012: {
		index: 1012,
		text: `<p>While walking in the wilderness, you come upon a gooleh feasting on the long-dead body of an old man. She looks at you, licks her chops, bares her fangs; and realizing there is nothing you can do for her victim, you wisely run. [<em>Pursued</em> (GOOLEH)]</p>`,
	},
	1013: {
		index: 1013,
		text: `<p>You decide to pass the old man by, not knowing if he has a kind or evil intent. The old man notices your efforts to not notice him and cries out, "You insult your elders so, you impudent waif!" [<em>Scorned</em>]</p>`,
	},
	1014: {
		index: 1014,
		text: `<p>In your travels, you meet a man who is fleeing for his life! He tells you that a wicked Vizier is infatuated with his wife and has declared him an outlaw. You do not want to be involved and are about to go on your way when moments later he is taken by guards. You soon hear that he will die tomorrow at dawn unless you can do something.</p>
<p><em>You may approach the Vizier or try to free your friend by other means:</em></p>
<p><em>If you approach the Vizier:</em> [Go to paragraph 1015]</p>
<p><em>If you try to rescue your friend:</em> You try to help your new friend by whatever means you can.</p>
<p><b>No Skill:</b> However, you are caught and banished from the land. [D1/<em>Outlaw</em>]</p>
<p><b>Weapon Use:</b> You overpower the guards and rescue the man. He leaves to rescue his beloved, and you feel the satisfaction of one who has done what is best. [D1/S2/<em>Blessed</em>]</p>`,
	},
	1015: {
		index: 1015,
		text: `<p>A convicted man told you that a wicked Vizier planted false evidence in his house. "The Vizier will take my beautiful wife tomorrow when I am executed," he mourns.</p>
<p><b>No Skill, Weapon Use</b> (mandatory): You sneak into the Vizier's house and slay him to save your friend. But your friend is executed anyway, and you are sought as a criminal. [D1/<em>Outlaw</em>]</p>
<p><b>Brass Trumpet:</b> You wait in hiding, observing the Vizier, and discover that he is hiding evidence that will prove your friend's innocence.</p>
<p><em>You may steal the evidence or denounce the Vizier at the trial:</em></p>
<p><em>If you try to steal the evidence:</em> [Go to paragraph 1016]</p>
<p><em>If you await the trial:</em> [Go to paragraph 1399]</p>`,
	},
	1016: {
		index: 1016,
		text: `<p>A wicked Vizier robbed the Sultan and planted booty in your friend's house to frame him. You have found some of the loot in the Vizier's house.</p>
<p><b>No Skill:</b> As you lay your hands on the items, a shrill wall arises—a magical alarm! The guards are alerted and you must flee. You do not get a chance to return, for the trial comes soon after. [Go to paragraph 1399]</p>
<p><b>Stealth and Stealing:</b> At the trial, you describe the Vizier's house, the plot, and where the loot may be found. Enraged, the Sultan executes the Vizier and promotes your friend. [D2/S1/W+1 (Max: Rich)/<em>Blessed</em>]</p>`,
	},
	1017: {
		index: 1017,
		text: `<p>A young prince gives you a gift. Later, you are summoned before the Vizier, who finds a pretext for confiscating the item, and banishes you. Vengeful, you return at night.</p>
<p><b>No Skill, Stealth and Stealing, Envious</b> (mandatory): You find many treasures in his home and cannot resist taking some. You make a sound; the guards are on you like dogs on a hare. They beat you thoroughly before imprisoning you. [D1/S1/<em>Wounded</em>/<em>Imprisoned</em>]</p>
<p><b>Piety:</b> You know better than to touch the Vizier's treasures. Allah will guide you in your righteous deed. You escape with your gift. [D2/S1/<b>Treasure</b>]</p>`,
	},
	1018: {
		index: 1018,
		text: `<p>The Vizier of this land has usurped power while the Sultan is away and has levied a terrible tax on the people.</p>
<p><b>No Skill:</b> You hide from the tax collector, but a scheming citizen turns you in. You are jailed in addition to the tax. [W-3 (Min: Beggar)/<em>Imprisoned</em>]</p>
<p><b>Bargaining and Evaluation:</b> When the tax-collector comes to you, you fast-talk him and pay only a few dinars. The tax collector is puzzled, but you leave town before he can figure out what has happened. [D1/Beguiling]</p>`,
	},
	1019: {
		index: 1019,
		text: `<p>An impressive entourage comes down the street toward you. It is the Vizier, a man known to execute those who do not bow low when he passes. You decide to leave immediately.</p>
<p><b>No Skill:</b> The Vizier sees you leaving. Furious, he orders guards to hunt you relentlessly. [D1/<em>Pursued</em> (SOLDIER)]</p>
<p><b>Quick Thinking, Acting and Disguise:</b> Guards chase you. You duck behind a corner and fold your turban to look like theirs. When the guards run by, you follow, pretending to be one of them until you can make good your escape. [D1/S1/Acting and Disguise]</p>
<p><b>Brass Trumpet</b> (mandatory): The Brass Trumpet warned you of the approach of the vain Vizier long before he could see you, and you make good your escape. [D2]</p>`,
	},
	1020: {
		index: 1020,
		text: `<p>As you are going about your business, a powerful Vizier comes upon you. You struggle to free yourself as he embraces you, crying, "You are dearer to me than my brother." He drapes his robe around your shoulders, ties his turban around your head, and bids you farewell. Confused, you watch him depart. Suddenly, men surround you crying, "Here is the Vizier!"</p>
<p><b>No Skill:</b> They beat you mercilessly. Meanwhile, the wicked one escapes. You will not allow such to cozen up to you so easily in the future! [D1/Quick Thinking/<em>Wounded</em> (1 turn)]</p>
<p><b>Beast Form</b> (mandatory), <b>Appearance:</b> When they see your face, they realize you are not the Vizier. You describe the clothes the Vizier was wearing and make easy his capture, but you find it best to be far away before he returns. [D1/<em>Respected</em> (1 turn)]</p>
<p><b>Brass Trumpet:</b> You explain what has occurred, and they listen to your words; you produce the Brass Trumpet, and with its magic you find the Vizier where he hides. He is punished, and you are well rewarded for your virtue. [D2/S1/W+1 (Max: Rich)/Courtly Graces]</p>`,
	},
	1021: {
		index: 1021,
		text: `<p>By chance, you meet with a Vizier and give him the respect due his office. In turn, he asks your help to catch a notorious criminal. He proposes to bait a trap for him by executing his sister. You wonder about the morals of man who proposes such a scheme and consider walking away...</p>
<p><em>You may agree to the plan or refuse:</em></p>
<p><em>If you agree:</em> Despite your misgivings, you agree to assist with the plan. [Go to paragraph 1022]</p>
<p><em>If you refuse:</em></p>
<p><b>No Skill:</b> You refuse to slay a Muslimeh under any circumstances. The Vizier is furious and casts you into the dungeon. [D1/<em>Imprisoned</em>]</p>
<p><b>Wisdom:</b> You understand that the Vizier is an evil man who will not accept your refusal. You pretend to go along with the plot, but escape at the earliest opportunity to warn the "criminal". You both make your escape from this place, and the woman is spared. [D1/Piety]</p>`,
	},
	1022: {
		index: 1022,
		text: `<p>The Vizier tells you he needs your help. You readily ask what you do to aid one of such honor. He outlines an elaborate plan to capture a wanted criminal: You are to aid in the execution of a maiden—the criminal's sister—as bait for the trap. You are introduced to the maiden and given a sword. At the proper moment you are to cry out that she is faithless—and kill her. This scene will bring the criminal to her side.</p>
<p><b>No Skill:</b> You perform as you are required, and the plan works—the man is easily taken. Later you learn the man was no criminal, but the Vizier's elder brother, whom the Vizier schemed to murder with his own sister. Your heart is shattered. [D1/Lose Piety/<em>Grief Stricken</em>]</p>
<p><b>Acting and Disguise:</b> You cannot go through with this vile plan and instead arrange to simulate her murder. When the "criminal" appears, you accuse the Vizier of wickedness, crying, "If Allah agrees with me, this maiden shall live again!" She rises from the ground, the guards scurry in fear, and the evil Vizier flees for his life. [D2/S1/Quick Thinking]</p>
<p><b>Brass Trumpet</b> (mandatory): As you bring up your sword, the Brass Trumpet sounds, proving to you and to all around that the Vizier is evil. You slay him instead, and the crowds cheer you for your bravery. [D2/S1/<em>Respected</em>]</p>`,
	},
	1023: {
		index: 1023,
		text: `<p>You ask to see the Vizier of this land, but your request is denied. [D1]</p>`,
	},
	1024: {
		index: 1024,
		text: `<p>A lavishly dressed man sits crying on the steps of a palace. Coming close, you see he is the Vizier. The Sultan is dying of a strange ailment, and the Vizier is rent with grief because if he cannot find a cure, he will be executed. He asks if you have medical knowledge.</p>
<p><b>No Skill:</b> You attempt a cure. Through the grace of Allah, the Sultan recovers! In reward, he makes you Vizier! [D2/S1/<em>Vizier</em>]</p>
<p><b>Scholarship</b> (mandatory): You cure the Sultan with aromatic herbs. The Vizier, his gratitude forgotten, insinuates to the Sultan that such knowledge may be used for assassination as well. Afraid, the Sultan has you banished. [D2/<em>Outlaw</em>]</p>`,
	},
	1025: {
		index: 1025,
		text: `<p>You meet an unusual woman on the road and offer to accompany her. When she goes to "obey a call of nature," she tarries so long you go after her. You find her speaking to her children—a flock of gools! She tells them of the fleshy feast she will bring them.</p>
<p><b>No Skill:</b> You make to leave unseen, but her voice seem to cast a spell upon you, and, against your will, you return. Luckily, a passing troop of soldiers scare her and her brood away, but your mind is still caught up in her spell. [D1/S1/<em>Ensorcelled</em>]</p>
<p><b>Wilderness Lore, Scholarship:</b> Acquainted with the sorcery of goolehs, you recognize your peril. Blocking your ears against her enchantments, you escape the moment you know her identity. [D1/S1]</p>
<p><b>Accursed</b> (mandatory): At the sound of this you smother an exclamation and begin to make a quiet retreat. Some passing breeze seems to bring your smell to her, however, and she howls to her children to follow, then leaps after you. Fear lends wings to your feet, and you would have escaped but for your accursed luck. A stone in the path turns under your feet, and before you recover they are on you. The family of gools give you time to make peace with your God, and your display of piety, combined with your supreme tastiness, is so ennobling that the gooleh and her progeny decide to convert to Islam on the spot. Their profession of the True Faith is too late to help you as you warm their bellies, but they do take to assisting lone travelers in honor of your memory. [Death]</p>`,
	},
	1026: {
		index: 1026,
		text: `<p>You discover the sad woman to be a gooleh who wants to feed you to her children. You are determined to talk your way out of this trouble.</p>
<p><b>No Skill:</b> You beg for mercy, but her children have not eaten for days. She only wants a small piece of you! You faint in horror. You wake maimed, but alive. [D1/S1/<em>Crippled</em>]</p>
<p><b>Courtly Graces:</b> Concealing that you know her identity, you say you have an enemy whom you fear. She is moved by your plea, and suggests, "If you are a good Muslim, pray to Allah." Your prayers are eloquent, filled with remorse and the hope of God's mercy. The gooleh, in tears from your heartfelt prayers, renounces her evil nature and lets you leave. [D2/S1/Luck]</p>`,
	},
	1027: {
		index: 1027,
		text: `<p>You come across a wounded woman by the roadside. She says she was stabbed and left for dead by an evil soldier because she would not surrender her virtue. You offer to help her, and she responds, "If you could bring me some human flesh I will be grateful."</p>
<p><b>No Skill, Weapon Use</b> (mandatory): Repulsed, you slay the vile, helpless gooleh. Later, you suffer pangs of remorse for the cold-blooded murder. [D1/<em>Grief Stricken</em>]</p>
<p><b>Scholarship:</b> You will ease her pain, but will not provide flesh. Because of your kindness, she resolves to beseech Allah for deliverance from her unnatural condition. When morning comes, she is well, and no longer does the craving for human flesh bend her mind. [D1/S1/Piety]</p>`,
	},
	1028: {
		index: 1028,
		text: `<p>A gooleh has trapped a man in the branches of a tree! "I am a True Believer," she says. "Yon infidel shall feed my hunger." "She lies! I am a Muslim!" the man wails.</p>
<p><b>No Skill:</b> You cannot determine the truth and, mindful of the gooleh's fearsome claws, you continue on your way. [S1]</p>
<p><b>Brass Trumpet:</b> You know your enemies! Indeed, the man in the tree is an infidel, but Allah is merciful. You convince the gooleh to spare the man if he accepts Allah. Grudgingly, she allows it; the man proclaims the faith, and you go off, leaving the gooleh hungry and frustrated. [D1/S1/Piety]</p>`,
	},
	1029: {
		index: 1029,
		text: `<p>The other sits weeping by the side of the road. You ask why she weeps. "I have just sworn to the True Faith, but I am a gool. All my life, I have eaten human flesh. Allah, in His Wisdom, forbids such things. What can I do?" You sit with her and puzzle the tests which Allah places before His faithful.</p>
<p><b>No Skill, Appearance:</b> As you ponder, the gooleh is overcome with hunger and takes a chunk out of you. Howling, you flee, her remorseful cries barely audible over her smacking lips. [D1/<em>Wounded</em>]</p>
<p><b>Piety:</b> You pray with her for a solution. Suddenly, a deer stumbles into the clearing and drops dead. To her surprise, the gooleh likes the flesh more than human! [D1/S1/Piety/<em>Blessed</em>]</p>
<p><b>Beast Form</b> (mandatory): Abruptly, the details of your changed form penetrate her dim mind. "Why, you are no man, but a talking beast," she exclaims with delight, tearing off one of your limbs to sample. What she says next is difficult to understand because her mouth is full, but as she swallows she begins to cry, "Allah be praised, your flesh is every bit as tasty as a man's, yet surely Allah does not forbid the eating of a creature such as you!" You perish, knowing at least that you have been the instrument of Allah's will. [Death]</p>`,
	},
	1030: {
		index: 1030,
		text: `<p>While riding in the wilderness, you come upon a gooleh. She looks at you, licks her chops, bares fangs, and bars your way; behind you, another like her appears. "We bear you no malice, but we must eat," she says, grinning. "It is the way of goolehs to feed on men."</p>
<p><b>No Skill:</b> You try to pray to Allah for deliverance but are frozen with terror. The goolehs fall upon you, slaying your mount and wounding you. In a terror-inspired frenzy, you escape. [D1/S1/W-1 (Min: Poor)/<em>Wounded</em>]</p>
<p><b>Storytelling:</b> To distract them, you start telling stories. In each, a character cries out for deliverance and is saved as lightning strikes the foe dead. Apprehensively, the goolehs glance repeatedly at the gathering storm clouds. Suddenly, you scream to Allah for deliverance. The goolehs flee in terror before they can be struck dead. Laughing, you ride off. [D1/S1/Quick Thinking]</p>`,
	},
	1031: {
		index: 1031,
		text: `<p>You spy a gooleh singing to her children of the meal they will have when a fat human comes along. You have no wish to become this ogre's feast, but you fear discovery if you try to creep away. You notice a deer and frighten it with a stone. Mistaking the deer's noisy retreat for a human's footsteps, the gooleh follows. Praise Allah for sending one of His creatures to deliver you! [D1/S1/Piety]</p>`,
	},
	1032: {
		index: 1032,
		text: `<p>You meet an old man by the side of the road. He warns you of a gooleh roaming the countryside and recommends taking the long route around.</p>
<p><b>No Skill:</b> You take his advice, only to be waylaid and robbed from a hidden ambush. Was the old man an accomplice? [D1/W-1 (Min: Poor)]</p>
<p><b>Wisdom:</b> The old man's eye is shifty and restless, and you distrust his words. You travel the normal route, and there is no gooleh. He must have been trying to trick you. [D1]</p>`,
	},
	1033: {
		index: 1033,
		text: `<p>There have been reports of gools and goolehs in this area, and you are careful not to encounter them. Soon, however, the Sultan offers a substantial reward for their heads. In your travels you spy one of the fiendish flesh-eaters! You follow her silently, trying to find her hiding place that you might warn others away from it.</p>
<p><b>No Skill:</b> The gooleh senses your presence and turns on you. There is no room to run. You are caught and badly injured, but a group of men drive the creature away. [D1/<em>Wounded</em>]</p>
<p><b>Stealth and Stealing:</b> You follow silently and discover a whole family of them! You sneak away to report to the Sultan, who rewards you for your skill. [D1/S1/W+2 (Max: Rich)/<em>Blessed</em>]</p>`,
	},
	1034: {
		index: 1034,
		text: `<p>While riding, you burst into a clearing, surprising a gooleh feeding on a victim. Startled, the wicked ogress flees.</p>
<p><b>No Skill:</b> You pursue, but quickly lose her in the wilderness. [S1]</p>
<p><b>Wilderness Lore:</b> Cannily, you dismount and follow on foot. In this manner, you steal up on her and end her evil life. [D1/S1]</p>`,
	},
	1035: {
		index: 1035,
		text: `<p>You hear screams and, when you arrive at the source, you see a gooleh carry off a beautiful princess. "I'll feed you to my hungry young ones!" she cackles. You rush to her defense, but the gooleh wounds the princess before falling to your sword. Alas, the princess's wound is on her face, and her good looks are marred. She hates you, blaming you for her injury, nor will she thank you for saving her life. [D1/S1/<em>Scorned</em>]</p>`,
	},
	1036: {
		index: 1036,
		text: `<p>While drinking at a spring, you hear something approaching. You hide. A gooleh emerges and stoops to drink. As you reach for your sword, you make a noise and the gooleh starts upright in fury.</p>
<p><b>No Skill:</b> Numb with fear at the sight of this horrible creature, you freeze. It escapes, and you are ashamed for your cowardice. [D1/<em>Grief Stricken</em> (1 turn)]</p>
<p><b>Determined</b> (mandatory), <b>Enduring Hardship:</b> Despite the creature's awful demeanor, you draw your sword and slay the abomination, as Allah wills. [D1/S1/Piety]</p>`,
	},
	1037: {
		index: 1037,
		text: `<p>The ship you are on is foundering—split seams below decks are taking in water. The Captain suspects mermen are trying to destroy the ship. You lean over the rail and pray for Allah's deliverance.</p>
<p><b>No Skill:</b> Allah allows the ship to sink, and you find yourself adrift at sea. [Go to paragraph 315]</p>
<p><b>Appearance:</b> A merman's head breaks the surface. "Allah be praised!" you cry. "Are you a Muslim?" the merman asks. At your affirmative, he begs forgiveness—he thought the ship belonged to infidels. The mermen repair the ship and invite you to visit their land. [D1/S1/Opportunity to enter the Undersea Kingdom]</p>`,
	},
	1038: {
		index: 1038,
		text: `<p>You sail through clear waters when a merman appears and calls, "You trespass in our seas! Be gone in one hour or we will destroy your ship." At his gesture, the wind dies. You cry out in Allah's name at this amazing display of evil sorcery!</p>
<p><b>No Skill:</b> Fearing the power of the mermen, you all try to row the ship away in the allotted time, but can make very little progress in the still air. Gleefully the mermen destroy the ship. [Go to paragraph 315]</p>
<p><b>Seamanship:</b> Despite the calm wind, you are able to get everyone working together to move the ship out of the area in time. [D1/S1]</p>`,
	},
	1039: {
		index: 1039,
		text: `<p>Your ship is suddenly assailed by mermen who board and try to kill all passengers.</p>
<p><em>You may pray for deliverance or head for the side of the ship:</em></p>
<p><em>If you try to escape:</em> [Go to paragraph 1040]</p>
<p><em>If you pray for deliverance, roll two dice, adding one for Beguiling:</em></p>
<p>❖ 2–7: They are gracious—they content themselves with tossing you overboard rather than slaying you outright. [Go to paragraph 315]</p>
<p>❖ 8+: Allah hears your prayers. The hearts of the mermen are softened by your pleas, and they depart without harming any others. [D1/S1/Piety]</p>`,
	},
	1040: {
		index: 1040,
		text: `<p>The ship is overrun by evil mermen. Prudently you head for the side, hoping to swim away. A powerful, confident merman blocks your way.</p>
<p><em>You may try to talk your way past him or fight him:</em></p>
<p><em>If you talk:</em> [Go to paragraph 1041]</p>
<p><em>If you try to fight:</em></p>
<p><b>No Skill:</b> You slip on the deck—right into his grip. He grins and hurts you only slightly before tossing you overboard. [D1/Go to paragraph 315]</p>
<p><b>Quick Thinking:</b> You grab and light a torch. The merman recoils in fear at the strange fire, and you make it easily to the rail, where another crewman welcomes you aboard a lifeboat. You escape. [D1/S1/Luck]</p>`,
	},
	1041: {
		index: 1041,
		text: `<p>Your ship is surrounded by mermen. You rush for the lifeboat, but your way is blocked by an evil-looking merman. You try to talk your way past him.</p>
<p><b>No Skill, Beguiling</b> (mandatory): You spin a tale about your poor spouse and children. "Lies!" he cries, and takes a chop at you. Though wounded, you dive over the rail. [D1/<em>Wounded</em>/Go to paragraph 315]</p>
<p><b>Appearance, Courtly Graces:</b> You make polite apologies for the injustices your people have done to his people. Moved by your kind spirit and intelligence, he turns his back, permitting you to dive over the rail. [D1/S1/Quick Thinking/Go to paragraph 315]</p>`,
	},
	1042: {
		index: 1042,
		text: `<p>A band of merman has surrounded your ship and demanded a tribute for their king.</p>
<p><b>No Skill, Bargaining and Evaluation</b> (mandatory): You haggle with the mermen, but you quickly exhaust their patience; they sink the ship. [Go to paragraph 315]</p>
<p><b>Scholarship:</b> You express interest in their king, customs, and history, hinting that the poor reputation they have comes from poor information. They are flattered and invite you to visit (with a proper gift for the king, of course).</p>
<p><em>You may give them a gift or decline:</em></p>
<p><em>If you give them a gift:</em> When you declare the gift you will give their king, they take you to their home. [Choice of W-1 (Min: Beggar) or Lose one <b>Treasure</b>/Move to the Undersea Kingdom and have an immediate encounter]</p>
<p><em>If you do not give them a gift:</em> When you decline to give them a gift, they sink you. [Go to paragraph 315]</p>`,
	},
	1043: {
		index: 1043,
		text: `<p>A merman approaches the ship, asking to speak with the captain, Duban. They are alone together in his cabin for quite a while. Later, you cannot contain your curiosity and ask the merman what they were speaking of.</p>
<p><b>No Skill:</b> "Nothing important," he replies. Later that night, however, you awaken to find merman taking you captive. Duban drugged your food with benj and sold you into slavery! [D1/<em>Enslaved</em>]</p>
<p><b>Outlaw</b> (mandatory), <b>Stealth and Stealing:</b> Suspecting a plot, you drop hints you'd like to be "in on the deal." The merman says, "Duban has sold the passengers as slaves." You warn the passengers, the mermen are defeated, and Duban is executed. [D1/S1/<em>Blessed</em>]</p>`,
	},
	1044: {
		index: 1044,
		text: `<p>The crew spots a wounded merman and brings him aboard; they intend selling him as a novelty slave. You speak with the merman and find he is an infidel.</p>
<p><b>No Skill:</b> You see nothing wrong with their intention, and arrange to aid in the sale for a small percentage. [D1/W+1 (Max: Respectable)]</p>
<p><b>Piety:</b> You tell the merman that if he converts to the True Faith, you will intercede on his behalf. The crew is disappointed, but persuaded by your plea. The grateful merman gives you a small, magical present. [D2/S1/<b>Dendan Oil</b>]</p>`,
	},
	1045: {
		index: 1045,
		text: `<p>While leaning over the rail you spy one of the merfolk. You engage him in conversation to learn what he might need.</p>
<p><b>No Skill:</b> You spend several pleasant hours in conversation before he swims off in his own quests. . [D1/S1]</p>
<p><b>Luck:</b> Much to your surprise, his name is the same as yours! What a remarkable coincidence! A seahorse steed is summoned and you are taken to the Undersea Kingdom as his guest. [D1/S1/Move to the Undersea Kingdom and have an immediate encounter]</p>`,
	},
	1046: {
		index: 1046,
		text: `<p>Your ship has been menaced by the dendan in these waters. While watching for them, you spot a merman, who waves both arms in an unmistakable request for help. The captain, Nur-al-Din, wants to kill him—"The filthy infidel!" You beg to speak with him first.</p>
<p><b>No Skill:</b> Nur-al-Din refuses, and kills the merman. Later a dendan shatters the ship, casting you adrift. [Go to paragraph 315]</p>
<p><b>Courtly Graces:</b> You convince Nur-al-Din to give you a few minutes. When you speak with the merman, you realize he is a Muslim! How fortunate you didn't harm him. He tells you how to avoid dendans, and your ship sails on unmolested. [D2/S1/Luck]</p>`,
	},
	1047: {
		index: 1047,
		text: `<p>The captain, Ghanim bin Ayyub, is deep in his cups one night when he confides that he would like to rob the wealthy passengers. You offer to help for part of the take.</p>
<p><b>No Skill:</b> When Ghanim sobers up he regrets telling you his plan and has you tossed overboard. [Go to paragraph 315]</p>
<p><b>Outlaw</b> (mandatory), <b>Stealth and Stealing:</b> Ghanim bin Ayyub knows he can trust your crooked character. Far out at sea, you rob the passengers and set them adrift in lifeboats. [D-1/S1/W+2 (Max: Rich)/Lose Piety/Lose <em>Respected</em>]</p>`,
	},
	1048: {
		index: 1048,
		text: `<p>The captain, Bukhayt, asks you for aid in liberating a passenger from his interesting baggage. You enter the man's cabin while Bukhayt keeps him occupied elsewhere.</p>
<p><b>No Skill:</b> When you touch the package, you are paralyzed by a cunning magical trap. When the passenger returns, he scornfully pushes you overboard. [<em>Ensorcelled</em>/Go to paragraph 315]</p>
<p><b>Magic:</b> The package is protected by a spell. You defeat the spell and keep the package, escaping immediately by lifeboat—for it is not wise to stay near an angry sorcerer. [D2/<b>Treasure</b>]</p>`,
	},
	1049: {
		index: 1049,
		text: `<p>You seek to do what is right for the captain of your ship, Kafur. As you speak to him, you notice that he seems far more interested in your fine possessions than in anything you actually say.</p>
<p><b>No Skill:</b> You give him some of them, which makes him covet the rest all the more. One night you awake with a hand clamped over your mouth; in seconds you are swimming for your life. [W-2 (Min: Penniless)/Go to paragraph 315]</p>
<p><b>Acting and Disguise:</b> You suspect Kafur of plotting to throw you overboard. You make yourself look like a fearsome djinn and, when crewmen enter your cabin, leap forth. They return to Kafur and reveal you as a powerful sorcerer. The rest of the trip passes without incident. [D1/S1/Acting and Disguise]</p>`,
	},
	1050: {
		index: 1050,
		text: `<p>The captain's greedy eye falls upon everyone's possessions. You determine to teach him a lesson. You begin to flatter and toady to him.</p>
<p><b>No Skill:</b> He suspects your motives and keeps a careful eye on you. He robs several others but leaves you alone. [D1]</p>
<p><b>Beguiling:</b> He accepts you, and asks you to help rob the others. You pretend to agree. One night you rush to his cabin, crying "Hurry, we are discovered! To the lifeboat!" In a daze, he stumbles into the lifeboat; you shove him adrift in the ocean (with ample provisions) and help yourself to his possessions. [D1/S1/W+2 (Max: Rich)]</p>`,
	},
	1051: {
		index: 1051,
		text: `<p>The captain of the ship, Sharkkan, obviously covets the possessions you have brought on board. Later you are told they have been damaged by rats and thrown overboard. You suspect thievery.</p>
<p><b>No Skill:</b> Sharkkan catches you trying to steal them back. You are accused publicly and thrown overboard. [D1/W-2 (Min: Penniless)/Go to paragraph 315]</p>
<p><b>Weapon Use, Stealth and Stealing:</b> You sneak into Sharkkan's cabin and arrange an accident for him. In the wake of his tragic death, you graciously offer to guide the ship to port. Among the late captain's effects are many of your "damaged" valuables. [D2/S1/W+2 (Max: Rich)]</p>`,
	},
	1052: {
		index: 1052,
		text: `<p>The captain, Zau al-Makan, has forced all the passengers to give him a portion of their cargo. If you refuse, he will steer the ship onto a reef. You must fight back and take what is yours (and a little more, for your trouble)! You lead the passengers in mutiny against Zau and his henchmen, slaying them all.</p>
<p><b>No Skill:</b> However, this leaves no one to sail the ship. You are wrecked. [Go to paragraph 315]</p>
<p><b>Seamanship:</b> You take over the ship, and under your capable guidance, the voyage is completed. The ship's owner is very grateful. [D1/S1/W+1 (Max: Respectable)/<em>Respected</em> (1 turn)]</p>`,
	},
	1053: {
		index: 1053,
		text: `<p>When you were far at sea, the captain and crew turn viciously on the passengers. You fight back, but are overwhelmed. The villains imprison all the passengers below decks and plan to keep your possessions and sell you as slaves. [D1/S1/W-2 (Min: Penniless)/<em>Enslaved</em>]</p>`,
	},
	1054: {
		index: 1054,
		text: `<p>The captain is wringing his hands and looks very nervous. You ask him what is wrong.</p>
<p><b>No Skill:</b> He replies that he misses his family and worries about them. However, when you wake in the morning and find the captain and crew gone, you suspect that he wasn't completely frank with you. The ship drifts aimlessly to an unknown shore. [D1/Have another player move you to any coastal space]</p>
<p><b>Seamanship, Scholarship:</b> He trusts your judgment and reveals that the ship is irrevocably lost. However, you read the charts and the heavens to discover where you are. The voyage resumes normally, and the captain is very grateful. [D1/Seamanship]</p>`,
	},
	1055: {
		index: 1055,
		text: `<p>The captain, Aziz, comes to you, sweating and wringing his hands. "I have heard tales," he says, "of rocs in this area that drop stones on passing ships. I fear for our lives."</p>
<p><b>No Skill:</b> Indeed, a roc passes and drops a huge stone on your ship, destroying it. [D1/Go to paragraph 315]</p>
<p><b>Quick Thinking:</b> You describe a ruse which may save you. He orders the crew to cover the ship with shiny black tarpaulin. From above, the ship looks like the back of a huge dendan. Rocs come, but do not bother you. Aziz is quite grateful. [D2/S1/<em>Respected</em>]</p>`,
	},
	1056: {
		index: 1056,
		text: `<p>The captain suddenly begins wailing and beating his breast. A strange current has gripped the ship, sweeping it to Allah knows where.</p>
<p><b>No Skill, Seamanship</b> (mandatory): You try unsuccessfully to change course or escape from the current. Soon you come to an unfamiliar shore. You thank Allah for sparing the ship from wreckage. [D1/<em>Lost</em>/Move to any coastal space]</p>
<p><b>Piety:</b> Allah has His designs for your ship. You pray, confident of the Mercy of the All-Compassionate and deferent to His Power. Sure enough, the lookout soon sights land. Lo, it is your destination! [D1/S1/Piety/Move to any coastal space]</p>`,
	},
	1057: {
		index: 1057,
		text: `<p>On a calm day, a sudden wind springs up, against which the ship cannot turn. "An 'efreet has captured us," squeals the captain. "Before us is the Magnetic Mountain! I'll sink her myself rather than face the denizens of that land!" You pray to Allah for strength.</p>
<p><b>No Skill:</b> You try to stop the captain's mad rampage, but in seconds he has brought the mast crashing down through the deck. Water pours into the hold; she sinks immediately. [Go to paragraph 315]</p>
<p><b>Magic:</b> The evil influence of magic is at work. A quickly spoken word of Power and the djinn flees, leaving the ship under your control. [D1]</p>`,
	},
	1058: {
		index: 1058,
		text: `<p>The storm tosses the ship like a child's ball. Terror unhinges the captain, who dashes screaming for the lifeboat. He goes overboard into the storm, and you are left without a captain.</p>
<p><b>No Skill:</b> Finally, you come upon an unknown shore, thanking Allah for sparing everyone's life. [D1/Move to any coastal space]</p>
<p><b>Seamanship:</b> With a prayer to Allah, you take control of the ship yourself and come through the shoals with ease. When you arrive at your destination, the ship-owners offer you the captain's position. [D1/Wilderness Lore/<b>Magic Tunic</b>]</p>`,
	},
	1059: {
		index: 1059,
		text: `<p>The captain runs about the deck, screaming, "We are lost! Lost! Allah has forsaken us—we shall never see land again!" Truly he has lost his wits!</p>
<p><b>No Skill:</b> All you can do is restrain him and pray for the return of his sanity. Without his help, however, how will you find your way? [D1/<em>Lost</em>/Move to any coastal space]</p>
<p><b>Piety:</b> "Of course Allah has not forsaken us," you cry. At that moment a dove, clutching an olive branch, lights on the captain's shoulder. The captain returns to his senses and guides you home. [D1/S1/Piety]</p>`,
	},
	1060: {
		index: 1060,
		text: `<p>You behold a most unsettling scene: in the midst of a normal conversation with a passenger, the captain draws his sword and runs the other through. Has he gone mad?</p>
<p><b>No Skill, Weapon Use</b> (mandatory): You jump to the passenger's aid and slay the captain. The passenger hands you a bundle and then dies in your arms. [D-1/S1/<b>Carnelian Idol</b>]</p>
<p><b>Scholarship:</b> The passenger's turban is knocked awry, revealing beneath it the red turban of the evil Magian fire-worshippers! You rush to aid the captain, and the Magian is dispatched. You note a bundle and take it. [D2/S1/<b>Carnelian Idol</b>]</p>`,
	},
	1061: {
		index: 1061,
		text: `<p>Dangerous shoals lie ahead. The captain wishes to sail around them, but you join the other passengers in mutiny against him, insisting the captain go through the shoals to keep his schedule. In fury, he refuses to go any further, even under the threat of a fierce beating.</p>
<p><b>No Skill:</b> Without his skills you must change routes, causing great delays. [D1/You may not move next turn]</p>
<p><b>Seamanship:</b> You take control of the ship yourself and come through the shoals with ease. When you arrive at your destination, the ship-owners offer you the captain's position. [D1/W+1(Max: Rich)/Seamanship]</p>`,
	},
	1062: {
		index: 1062,
		text: `<p>The winds howl, the seas are high, and the captain locks himself below decks. The ship drifts without a master. What causes him to act this way? You batter at the hatch to get him to come back to his duty, but fear that you do not have time to break through before disaster strikes.</p>
<p><b>No Skill, Seamanship</b> (mandatory): You try to save the ship but are a poor substitute for the captain. The wind drives you into uncharted shores. [D1/<em>Lost</em>/Move to any coastal space]</p>
<p><b>Courtly Graces, Scholarship:</b> You question the captain through the door and discover he fears that the passengers plot against him. You soothe him with flattery and coax him to face the crisis. [D1/S1]</p>`,
	},
	1063: {
		index: 1063,
		text: `<p>Your present course will carry you into unknown waters. The captain refuses to sail further.</p>
<p><b>No Skill, Beguiling</b> (mandatory): Your attempts at persuasion are futile, even brandishing your sword does not help, and the captain besmirches your reputation. [D1/<em>Scorned</em>]</p>
<p><b>Quick Thinking:</b> You bet the captain he is not skilled enough to bring you through. He takes your bet, sails on, and is successful. You lose the bet, but get where you need to be. [D1/W-1 (Min: Respectable)/Quick Thinking]</p>`,
	},
	1064: {
		index: 1064,
		text: `<p>You have come across an object which shimmers and glints like a precious stone. As you peer closer, you note with fascination its many hidden depths.</p>
<p><b>No Skill:</b> You are mesmerized by the beauty of the object. Through a haze, you note a grinning sorcerer relieving you of your possessions. The haze stays with you long after he departs. [D1/W-2 (Min: Poor)/<em>Ensorcelled</em> (1 turn)]</p>
<p><b>Protective Talisman:</b> Closing your eyes, you pronounce a magical word, breaking the spell on the object, which is but a piece of cut glass. You slay the sorcerer who is hiding nearby and find a most interesting item on him. [D1/S1/<b>Treasure</b>]</p>`,
	},
	1065: {
		index: 1065,
		text: `<p>Inside a stone building you find a golden statue of a coiled serpent; its eyes glitter piercingly in the dim light. As you approach, you could swear it moves.</p>
<p><b>No Skill:</b> You run in terror as the "statue" shatters the floor behind you with adamant fangs. [D1/S1]</p>
<p><b>Weapon Use, Brass Bow:</b> You strike at the throat of the "statue" and purple gore streams from the wound. In death it reverts to lifeless gold and jewels. [D2/S1/W+2 (Max: Rich)]</p>`,
	},
	1066: {
		index: 1066,
		text: `<p>Ahead of you stands a small brass statue of a horseman. As you draw near, it begins to revolve. When it stops, the horseman's spear points in a new direction.</p>
<p><b>No Skill:</b> Its function is an enigma, but it is small enough to carry on horseback, and you sell it in a nearby bazaar for a fair sum. [D1/W+1 (Max: Rich)]</p>
<p><b>Scholarship:</b> Legend says the brass horse points the way to the lost City of Brass. You take the statue and begin your trek. [D1/S1/<b>Brass Horseman</b>]</p>`,
	},
	1067: {
		index: 1067,
		text: `<p>An old man, hunched by the roadside, is selling a "magical" bead on a necklace for a great sum.</p>
<p><b>No Skill, Bargaining and Evaluation</b> (mandatory): You can see the bead is worthless and ignore his offer. [D-1]</p>
<p><b>Magic:</b> When you hold it in your hand, you feel its power. The price is a bargain! [D2/S1/W-1 (Min: Poor)/<b>Magic Bead</b>]</p>`,
	},
	1068: {
		index: 1068,
		text: `<p>Your alert eye spies a small ring buried in the mud. When you clean it, there is a blinding flash of lightning, and an enormous marid stands before you! "You have disturbed my slumber!" he roars.</p>
<p><b>No Skill:</b> You beg for mercy, but... Shazaam! You are a stubby donkey. Bleating, you wander off. [D1/<em>Beast Form</em>]</p>
<p><b>Storytelling, Quick Thinking, Protective Talisman:</b> You humbly beg pardon, and offer to tell a story as atonement. You tell the most boring tale in your repertoire, and the 'efreet's eyelids begin to droop. When sleep overcomes him, he flows back into the ring, which you handle with care. [D2/S1/Quick Thinking/<b>Seal Ring</b>]</p>
<p><b>Seal Ring</b> (mandatory): You quickly rub the Seal Ring you have carried for so long, and the Servant of the Ring rushes forth. Seeing your distress, the Servant engages the foul marid in mortal combat, and you run for cover as they strike at each other with swords made of lightning. Eventually, the Servant prevails, and the marid is slain. The servant returns to the Seal Ring to await your next command. [D2/S2/Storytelling]</p>`,
	},
	1069: {
		index: 1069,
		text: `<p>You spy a small pot containing strangely colored kohl (eye makeup). You dab a bit on one eye, and lo! The landscape is covered with treasures—treasures present always, but invisible without the kohl.</p>
<p><b>No Skill, Stealth and Stealing</b> (mandatory): If one eye sees this much, imagine what treasures two eyes will see! You eagerly rub kohl on the other eye—but to your sorrow, you are struck blind! Without the magical sight, you cannot find the hidden treasures; double sorrow on your head! [D1/<em>Crippled</em>]</p>
<p><b>Piety:</b> These riches are greater than any mortal could wish. Although you might see more through the other eye, you refrain. [D2/S1/W+5 (Max: Princely)/<b>Kohl Pot</b>]</p>`,
	},
	1070: {
		index: 1070,
		text: `<p>A small kohl pot lies nearby. You open the pot; within is a bright, yellow kohl. (Why would anyone wear such a color?)</p>
<p><b>No Skill, Bargaining and Evaluation</b> (mandatory): Perhaps it is magical! Eagerly you rub it on one eye. Nothing happens. Disappointed, you leave it. [S1]</p>
<p><b>Scholarship:</b> You remember rumors about the uses of yellow kohl. Experiments confirm the theory! A small pinch turns worthless material to gold! [D2/<b>Yellow Kohl</b>]</p>`,
	},
	1071: {
		index: 1071,
		text: `<p>An old man invites you into his hut to aid in translating a book. He goes off for a moment, and you spy a fascinating object—a spherical container full of flickering lights.</p>
<p><b>No Skill:</b> As you gaze at it, an image of a strange, far-off city full of infidels appears. The old man returns and cries, "No!" There is a bright flash. "You've just destroyed that city, fool! Leave here at once!" You go, hungering after the power of the globe. [D1/<em>Envious</em>]</p>
<p><b>Wisdom:</b> You admire it but refrain from touching. When the translation is finished, the old man is grateful and gives you a wonderful gift. [D2/S1/<b>Celestial Planisphere</b>]</p>`,
	},
	1072: {
		index: 1072,
		text: `<p>You meet a weary traveler who seldom speaks. You sit and eat your lunches together in silence. What an amazing volume of food the man draws from his small saddlebags!</p>
<p><b>No Skill:</b> You express interest in this wonderful miracle. The man leaps to his feet, spits, curses you as a scheming thief, and dashes off on his horse. [S1]</p>
<p><b>Stealth and Stealing:</b> You carefully conceal your interest. When he goes to wash, you snatch the bags and ride off. Later, in a secure place, you experiment and find the bags, by some magic, are never empty of food! [D2/S1/<b>Magic Saddlebags</b>]</p>`,
	},
	1073: {
		index: 1073,
		text: `<p>In a dark, lonely building you have found an old, musty volume. The language is ancient and obscure.</p>
<p><b>No Skill:</b> The pages are brittle; despite your care they crumble at your touch. [D-1/S1]</p>
<p><b>Scholarship:</b> With the aid of knowledgeable friends you preserve the book's delicate pages. As you translate it, you realize the marvel you have discovered. [D2/S1/<b>Book of Hidden Treasures</b>]</p>`,
	},
	1074: {
		index: 1074,
		text: `<p>You have come upon the site of a recent battle. It is a gruesome sight; yet, amidst the carnage lies a gleaming spear, gripped by a grotesque, mutilated corpse!</p>
<p><b>No Skill:</b> The dead man's stare is so unnerving you can't force yourself to touch the object. [D1/S1]</p>
<p><b>Enduring Hardship:</b> You have gazed upon the dead many times; they hold no special terror for you. As you grasp the spear, a horrible 'efreet appears. You defend yourself with the spear, and, with one blow, the 'efreet is slain! [D2/S1/<b>Sparkling Spear</b>]</p>`,
	},
	1075: {
		index: 1075,
		text: `<p>As you travel, you spy a small statue, glistening in the mud. You reach out and pick it up. Whispering voices fill your mind, making blasphemous suggestions.</p>
<p><b>No Skill:</b> The suggestions become commands; your will is no longer your own. [D1/<em>Ensorcelled</em>]</p>
<p><b>Protective Talisman</b> (mandatory): You resist the evil voices until you are master again of your own soul. The statue whispers to you in the night, but you are its master, not it yours. [D2/S1/<b>Carnelian Idol</b>]</p>`,
	},
	1076: {
		index: 1076,
		text: `<p>An old junkseller gives you a pierced coin on a necklace for a good price. You polish it, watch it glitter, and find your mind drifting... You snap to alertness and realize you have a hypnotic coin!</p>
<p><b>No Skill:</b> You try out the coin on a rich rug seller. It works! You try it again and again. You grow wealthy but soon you realize that you no longer care for anything other than wealth.</p>
<p><em>You may keep the coin or throw it away:</em></p>
<p><em>If you keep it:</em> Over time, your mind is warped by its power. [D-1/S1/W+6 (Max: Princely)/<em>Envious</em>/<em>Accursed</em>/You may, at any point, choose to lose either or both of these statuses, but doing so requires reducing your wealth to Beggar]</p>
<p><em>If you throw it away:</em> You realize that you are surely damned if you keep it. With Allah as your guide, you throw the coin away and give all your goods to the poor to atone for your crimes. [D1/S2/W=Beggar)/Piety]</p>
<p><b>Wisdom:</b> You know that such toys are seductive. You keep the coin but use its power sparingly. [D2/S1/Beguiling at Master level (1 use)]</p>`,
	},
	1077: {
		index: 1077,
		text: `<p>In a shopkeeper's stall, you have discovered an intricately carved necklace. A lovely lady also has her eye on the item and is willing to pay more.</p>
<p><b>No Skill:</b> You wait until she is alone then try to rob her. She turns on you, and you are struck dumb by the force of her power. "Poor fool," she says. "These gems are potent magical artifacts." She casually demonstrates on your body, warping you from human form. Your mind is equally warped by the greed you feel for the gems. [D2/<em>Envious</em>/<em>Beast Form</em>]</p>
<p><b>Magic:</b> You sense the aura of the gems on the necklace as the lady takes and handles them, and you realize that she must be a powerful enchantress. Prudently you make yourself scarce. [D1/Wisdom]</p>`,
	},
	1078: {
		index: 1078,
		text: `<p>Your eyes fall upon a necklace with glittering gems, worn by a lovely maiden. You can scarcely reckon their value.</p>
<p><b>No Skill:</b> You are overcome with desire for the gems but can find no way to get them. The thought of them burns in you! [D1/<em>Envious</em>]</p>
<p><b>Seduction</b> (if you are male), <b>Appearance:</b> You use your charms to get close to her and pilfer the gems in an unguarded moment. Quickly you make your escape. [D1/S1/Stealth and Stealing/<b>Ionian Gems</b>]</p>`,
	},
	1079: {
		index: 1079,
		text: `<p>A weird old man is selling sparkling trinkets at market. "For you, young one, they're free. Go ahead—take one."</p>
<p><b>No Skill:</b> Delighted by its beauty, you take one. Soon you can think of nothing else but its beauty... [D1/<em>Ensorcelled</em>]</p>
<p><b>Wisdom:</b> They are quite beguiling—so much so that you are nervous. To be safe, you refuse the man's offer. [D1/Wisdom]</p>`,
	},
	1080: {
		index: 1080,
		text: `<p>In the night you hear a cry. Investigating, you stumble across a dead man. Near his hand, a marvelous sword glitters strangely.</p>
<p><b>No Skill:</b> This man met his doom bearing the weapon, and since there are no other indications of what caused his death, you decide to leave it where it lies. [D2]</p>
<p><b>Enduring Hardship, Weapon Use:</b> You take the sword in hand and discover it renders you Invisible! What a wondrous find! [D2/<b>Sword of Invisibility</b>]</p>`,
	},
	1081: {
		index: 1081,
		text: `<p>In a small courtyard, you spy a splendid ebony horse. The master of the estate (an elderly sage) mounts the statue—and it rises into the air! Your heart is filled with greed.</p>
<p><em>You may attempt to steal the statue yourself or seek assistance:</em></p>
<p><em>If you seek assistance:</em> [Go to paragraph 1082]</p>
<p><em>If you decide to steal the statue yourself:</em></p>
<p><b>No Skill:</b> You sneak into the courtyard and mount the statue. Suddenly, it flies up, and you find it impossible to control. Finally, the horse drops to earth. [D1/S1/Have another player move you to any space except a Place of Power]</p>
<p><b>Quick Thinking:</b> You are very cautious when you mount the statue and quickly learn the guiding principles. Soon the marvelous device is yours! [D2/S1/<b>Ebony Horse</b>]</p>`,
	},
	1082: {
		index: 1082,
		text: `<p>You see a sage mount an ebony horse-statue and rise into the air upon it. You covet the statue and find an arch rival of the sage, offering him good payment if he will help. Together you sneak into the sage's yard.</p>
<p><b>No Skill:</b> Your companion quickly discerns the flying mechanisms. Together you fly out of the courtyard. Suddenly, he pushes you off and flies away. You are fortunate; a rocky cliff breaks your fall. [D1/S1/<em>Crippled</em>]</p>
<p><b>Beguiling:</b> The gleam of treachery is in your hired sage's eye. You flatter him into teaching you the mechanisms of the horse; then you mount and fly off, leaving him hurling insults at the soles of your feet. [D2/S1/Quick Thinking/<b>Ebony Horse</b>]</p>
<p><b>Wounded, Crippled</b> (All mandatory): You and your companion examine the horse, discerning at length the mechanism of its use. Abruptly, the sage leaps into the saddle and begins to rise into the air. You leap for the flying statue, but manage to catch only the stirrup. You cling tightly, but your wounds keep you from using both hands, so the sage is able to kick you free before you are scarcely above the clouds. You fall a long way and have a great deal of time (more than you'd like) to examine your life and commit your soul unto Allah before you become the messy object of much speculation amidst the curious people below. [Death]</p>`,
	},
	1083: {
		index: 1083,
		text: `<p>Tales are told of a nearby valley full of fabulous diamonds. Because of its many perils, it is recommended that you hire helpers to obtain the diamonds.</p>
<p><em>You may seek help or go it alone:</em></p>
<p><em>If you seek help:</em> [Go to paragraph 1084]</p>
<p><em>If you proceed on your own:</em></p>
<p><b>No Skill:</b> You toss a carcass into the valley. Giant vultures pick it up and return to the valley wall to feed. When you attack the vultures, you expect them to flee, leaving a diamond-studded carcass. Unfortunately, vultures do not scare easily, and you are badly wounded before you fight clear. You will know next time to heed the advice of the more experienced. [D1/Wisdom/<em>Wounded</em>]</p>
<p><b>Wisdom:</b> After consideration, you follow the local people's advice. [Go to paragraph 1084]</p>`,
	},
	1084: {
		index: 1084,
		text: `<p>You have been told of a nearby valley full of fabulous diamonds. You hire a band of seedy-looking men (the best you can find in this region) to aid you.</p>
<p><b>No Skill:</b> You throw a carcass into the valley. A giant vulture lifts the carcass back to the valley wall to feed. You drive the vulture away from the carcass, which has several diamonds sticking in it, but your companions thrash you and abscond with the diamonds that were rightly yours! [D1/S1/<em>Envious</em>/<em>Wounded</em>]</p>
<p><b>Courtly Graces:</b> You tell the Sultan of your expedition, and offer half of the proceeds to him. He sends his most trusted guards to control your helpers. Your profits earn the Sultan's favor. [D2/S1/W+5 (Max: Fabulous)/<b>Robe of Honor</b>]</p>`,
	},
	1085: {
		index: 1085,
		text: `<p>You meet a merchant weeping because a wicked Vizier has stolen a tunic the merchant specially made for the Sultan. You resolve to help the innocent man.</p>
<p><em>You may seek help or try to help the man on your own:</em></p>
<p><em>If you seek help:</em> You know that you will need help, and you know that only Ali Hassan, the greatest of all thieves, is equal to the task. [Go to paragraph 1086]</p>
<p><em>If you act alone:</em></p>
<p><b>No Skill:</b> You attempt to steal the tunic yourself. However, your foolproof plan fools no one; you are imprisoned while the Vizier thinks of a suitably horrible punishment. [D1/<em>Imprisoned</em>]</p>
<p><b>Stealth and Stealing:</b> You enter the Vizier's mansion and escape detection, but come nowhere near recovering the item. You know that only a master thief is equal to this task, and approach Ali Hassan, the legendary burglar, for the job. [D1/Go to paragraph 1086]</p>`,
	},
	1086: {
		index: 1086,
		text: `<p>A distraught merchant has had a special tunic stolen by an evil Vizier. You have offered to help him recover it. You know that only Ali Hassan, the greatest of all thieves, is equal to the task.</p>
<p><b>No Skill:</b> However, Ali Hassan will only take the job for an exorbitant fee.</p>
<p><em>If your wealth is Respectable or greater, you may pay the fee:</em></p>
<p><em>If you pay the fee:</em> You pay Ali Hassan to take the job; he easily recovers the tunic. In gratitude, the merchant gives great gifts to you and Ali Hassan. [D2/S1/W-3 (Min: Beggar)]</p>
<p><em>If you cannot or will not pay the fee:</em> You cannot bankrupt yourself to assist the merchant, and he cannot pay the fee himself. The tunic is never recovered. [S1]</p>
<p><b>Seduction</b> (if you are female), <b>Beguiling, Appearance:</b> You convince Ali Hassan to take the job as an artistic challenge; he easily recovers the tunic. In gratitude the merchant gives great gifts to you and Ali Hassan. [D2/S1]</p>`,
	},
	1087: {
		index: 1087,
		text: `<p>In the distance you espy a small object well out of your way. Perhaps it is just a trick of the light? You shake your head and continue toward your goal; when you look again, it is gone. [D1]</p>`,
	},
	1088: {
		index: 1088,
		text: `<p>The other is an interesting curiosity, but appears both harmless and useless. You pass by in your haste to arrive at your destination. [<em>Determined</em>]</p>`,
	},
	1089: {
		index: 1089,
		text: `<p>As you walk along, you see coming your way a most strikingly peculiar man. Despite the heat, he is clad in a thick woolen robe, and over his eyes is a mask; and around his neck is a shining necklace, from which emerges the sound of ten musicians playing, very poorly. You know bad magic when you see it, and make large the distance between you meet. [S1]</p>`,
	},
	1090: {
		index: 1090,
		text: `<p>In the marketplace, you spot a marvelous globe, which catches the light of the sun and reflects it into a thousand spots. But when you come closer, you realize it is just a clay ball into which have been studded small shards of glass; you cannot think what use it might be, and you head on. [Bargaining and Evaluation]</p>`,
	},
	1091: {
		index: 1091,
		text: `<p>As you converse with a new acquaintance of the opposite sex, a merchant passes you in the other direction. He is fondling a shining object with many levers and gears. Your attention is caught only momentarily before you turn back to the one who rightly deserves it. [Seduction]</p>`,
	},
	1092: {
		index: 1092,
		text: `<p>A man strides down the street, bearing a sword which catches the light like a fine diamond. You step clear of him, but a young soldier, more brave than clever, challenges the man to a duel.</p>
<p><b>No Skill:</b> The duel is over almost before it begins. Now you can say that you yourself have witnessed the power of the Thunderbolt Sword. [S1]</p>
<p><b>Magic:</b> You recognize the power of the sword and intervene, persuading the soldier to put away his pride and apologize. He is initially furious, but soon realizes you have saved his life and thanks you greatly. [D1/S1]</p>`,
	},
	1093: {
		index: 1093,
		text: `<p>They allow you to travel with them, but keep you blindfolded at all times and treat you as a stranger.</p>
<p><b>No Skill:</b> Soon, you attempt to escape, but fail—they were too suspicious. They offer you the chance to redeem yourself by performing a few robberies.</p>
<p><em>If you refuse:</em> They beat you cruelly and leave you for dead. When you come to, you still have no idea where you are. [S1/D1/<em>Wounded</em>/<em>Lost</em>]</p>
<p><em>If you accept:</em> You agree to help raid a wealthy merchant nearby. However, you are not skilled at the art of stealing, and you bungle the job; the merchant remembers your face and gives your description to the guards. [D1/<em>Outlaw</em>/Lose <em>Lost</em>]</p>
<p><b>Stealth and Stealing:</b> Crafty and subtle as you are, you can easily escape at any time.</p>
<p><em>If you escape:</em> You waste no time, and make good your escape. [S1/D1/Enduring Hardship/Lose <em>Lost</em>]</p>
<p><em>If you remain:</em> Instead, you choose to remain with these outlaws for some time. Banditry serves you well, but is a sin in the eyes of Allah. [D-1/W+2 (Max: Rich)/Stealth and Stealing/Lose Piety/Lose <em>Lost</em>]</p>`,
	},
	1094: {
		index: 1094,
		text: `<p>While helping a poor farmer dig his fields, you come across a small chest. Opening it, you discover silver coins.</p>
<p><em>You may keep it yourself or tell the farmer of your discovery:</em></p>
<p><em>If you keep it yourself:</em> [Go to paragraph 1095]</p>
<p><em>If you share your discovery:</em> You piously give the money to the farmer.</p>
<p><b>No Skill:</b> He is delighted and thanks you, but does not offer to share. [D1/<em>Envious</em>]</p>
<p><b>Storytelling:</b> As he counts the silver, you tell the tale of a man who did not share bread with his family. The others were given food later, never shared with him, and he starved. The farmer takes your meaning and gives you half the silver. [D1/S1/W+1 (Max: Respectable)]</p>`,
	},
	1095: {
		index: 1095,
		text: `<p>You discover a chest of silver in a farmer's field. You casually head elsewhere.</p>
<p><b>No Skill:</b> The farmer doesn't notice, and you greedily examine your new-found treasure. [D-1/S1/W+2 (Max: Rich)]</p>
<p><b>Piety</b> (mandatory): You have a change of heart and return the chest to the farmer. He is delighted and thanks you; he needed the money to ransom a close relative who is being held by brigands. Allah be praised! [D1/<em>Respected</em>]</p>`,
	},
	1096: {
		index: 1096,
		text: `<p>In a dark corner of a small town, you discover a temple of evil Magian fire-worshippers. In the center of the temple stands an idol of great value.</p>
<p><em>You can steal the idol or alert the Sultan:</em></p>
<p><em>If you plan to steal the idol:</em> You go to get help. [Go to paragraph 1097]</p>
<p><em>If you go to the Sultan:</em> You inform the Sultan of your discovery.</p>
<p><b>No Skill:</b> He is furious when he hears the news, and promises you great rewards. However, after his soldiers have destroyed the temple and taken the idol, the Sultan forgets his promise and keeps the treasures he promised to you [D1/<em>Envious</em>]</p>
<p><b>Courtly Graces:</b> You present the news so that many people hear that you were promised a reward. After his soldiers destroy the temple, you receive your just reward. The idol is merely a statue; however, the cushion upon which is rested is a most wondrous bed, made of the skin of an enormous snake. [D2/Courtly Graces/<b>Snakeskin Bed</b>]</p>`,
	},
	1097: {
		index: 1097,
		text: `<p>You discover a temple of evil Magian Fire-worshippers. Inside is a fabulous idol, which you vow to obtain. You go to a former Magian, who, for a price, tells you their secrets.</p>
<p><b>No Skill:</b> Your attempt to pass as a Magian fails, and you are attacked. Only the intervention of your friend saves your life. You do not get the treasure you sought. [D1/<em>Envious</em>]</p>
<p><b>Acting and Disguise:</b> You pass for a perfect Magian and gain access to the temple, where it is a simple matter to steal the idol. The idol is merely a statue; the cushion upon which is rested is a most wondrous bed, made of the skin of an enormous snake. [D2/S1/<b>Robe of Honor</b>/<b>Snakeskin Bed</b>]</p>`,
	},
	1098: {
		index: 1098,
		text: `<p>A lovely maiden wearing a beautiful ring is accompanied by a burly slave. You give a street-youth a coin to distract the slave so that you might steal the ring.</p>
<p><b>No Skill:</b> You snatch the ring. However, the slave stops you. Behind him is the child, gleefully clutching the two coins he received for betraying you! You are thrown into prison, where you have time to contemplate your folly. [D-1/S1/Wisdom/<em>Imprisoned</em>]</p>
<p><b>Storytelling, Quick Thinking:</b> You spin a fanciful tale to the child, disguising the true reason you wish the child to distract the slave. In this manner you protect yourself from being betrayed and obtain the ring. [D1/S1/W+1 (Max: Respectable)]</p>`,
	},
	1099: {
		index: 1099,
		text: `<p>You find a beautiful gem buried in the trunk of a tree.</p>
<p><b>No Skill:</b> You take the gem but immediately are confronted by a furious 'efreeteh. "You dare disturb this beauty for your own selfish gains? It is just that I disturb your beauty!" At her words, your flesh flows like clay on a potter's wheel... [D1/<em>Beast Form</em>]</p>
<p><b>Protective Talisman:</b> The Protective Talisman grows hot in your hand, warning you that there is an 'efreet present! Wisely, you pass by the tree rather than risk the wrath of such a creature. [D1/S1]</p>`,
	},
};
