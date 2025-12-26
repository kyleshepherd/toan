import type { Story } from "./stories";

export const stories900: Record<number, Story> = {
	900: {
		index: 900,
		text: `<p>You pursue a most peculiar creature. A powerful obsession draws you on and on to exhaustion. Darkness sweeps before your eyes.</p>
<p><b>No Skill:</b> When you wake you are dazed and unable to reason, alone in a strange land. [D1/<em>Insane</em>/Move to the Dusky Land and have an immediate encounter]</p>
<p><b>Protective Talisman, Golden Bridle:</b> Before you succumb, you recognize the subtle enchantment the creature has woven and are able to partially deflect its influence. When you wake, you are fully wary and alert, though you are in a strange and magical land. [D1/Move to the Dusky Land and have an immediate encounter]</p>`,
	},
	901: {
		index: 901,
		text: `<p>As you move toward the creature, it pauses and waits for you, beckoning you to follow.</p>
<p><b>No Skill:</b> You struggle hard to keep up. Every time you fall behind, the creature pauses, staying just far enough ahead to evade you. To what purpose should you continue? Exhausted, you give up, knowing not what strange beast you have encountered. [S1]</p>
<p><b>Determined</b> (mandatory): You continue the chase far beyond the point of reason, eventually driving your body to the point of exhaustion, but eventually the beast turns and allows you to approach. [Go to paragraph 1393]</p>
<p><b>Magic, Golden Bridle:</b> At last the creature turns and waits meekly for you. When you approach, it leads you forward to your destination. [D1/Go to paragraph 1393]</p>`,
	},
	902: {
		index: 902,
		text: `<p>You caught only a glimpse of the creature from your hiding place but it was the most marvelous thing you have ever seen. You can do nothing but follow.</p>
<p><b>No Skill:</b> The beauty of it drives all else from your mind. You will never rest until you have found it. [D1/<em>Under Geas</em>]</p>
<p><b>Enduring Hardship:</b> Though it seems your heart will burst, you must turn aside and give up this obsession. Once you have done, you feel relieved of a great burden. Truly, it is the path of wisdom to recognize when a task is foolish. [D2/Wisdom]</p>
<p><b>Golden Bridle:</b> You produce the Golden Bridle, but the beast resists its power. Recognizing the beast's strength, you decide it would be best left alone. [D1/S1/Wisdom]</p>`,
	},
	903: {
		index: 903,
		text: `<p>The strange beast seems an impossible combination of several animals. You examine it cautiously from afar as it snuffles about.</p>
<p><b>No Skill:</b> It moves off swiftly, and before you can even react, it has disappeared from your view. What a strange and wondrous sight! [S1]</p>
<p><b>Fated</b> (mandatory): It draws near to you, then stiffens in fear. Without warning it leaps at you, and overwhelms you. As its teeth sink into you, you feel your own body changing into an animal... [D1/<em>Beast Form</em>]</p>
<p><b>Golden Bridle:</b> You attempt to place the Golden Bridle on it, but it bolts into hiding. When you examine its tracks, you see it has the claws of lion, and you are relieved it ran away rather than attacking. [D1/S1]</p>
<p><b>Magic:</b> You invoke the name of the Most High, and the names on the Seal of the Prophet Solomon, and the beast cries out in pain. It turns to flee, but before it can take three steps, it splits into half a dozen animals, each of which scatters to the winds. You are pleased to have freed them of their curse, and journey on. [D2/S1/<em>Blessed</em>]</p>`,
	},
	904: {
		index: 904,
		text: `<p>As it grazes, the creature utters low sounds like the cries of lost souls. Despite your resolve, you fearfully keep your distance.</p>
<p><b>No Skill:</b> There is little to be learned from such a remove. After a short time the beast starts in alarm, and is gone before you can follow. [S1]</p>
<p><b>Magic:</b> By its signs, you know it to be a human in beast form. With a blessing and a magical sign, you remove the enchantment. With a twinkle, a distinguished man stands before you, offering his thanks. You converse with this him for many hours into the night, learning much from each other. [D1/S1/Scholarship]</p>`,
	},
	905: {
		index: 905,
		text: `<p>From a distance, you examine the creature. As it seems harmless, you draw nearer. As you do, it turns to face you, and you stare into its eyes...</p>
<p><b>No Skill:</b> You are captivated by the depths of its eyes, and your will flees like the night before the sun. [D1/<em>Ensorcelled</em>]</p>
<p><b>Storytelling, Golden Bridle:</b> Unpleasant tales of enchanted beasts come to your mind, and you swiftly avert your gaze. It departs, and you are glad to escape without harm. [D1/S1/Luck]</p>`,
	},
	906: {
		index: 906,
		text: `<p>As you come to a clearing amidst a grove of trees, you see a small ape—singing a song! Such a strange beast could make you famous, but with no one around to help you, you are left to your own devices, so you step forward to introduce yourself.</p>
<p><b>No Skill:</b> Without a word, the ape disappears into the trees. You shake yourself, wondering if your senses have deceived you. [D1/S1]</p>
<p><b>Storytelling:</b> The song is one well-known to you from ancient works, and you start singing additional verses from memory and improvisation. When you finish your own song, the ape reveals himself to be an 'efreet visiting among mortals. He is most delighted for your company. He offers to join you as you go on your way, for it has been many a year since he last walked the world of men. [D2/S2/<b>Hairless Ape</b>]</p>`,
	},
	907: {
		index: 907,
		text: `<p>As you travel, a horse with no rider draws near. "Hello, traveler," it says. "Can I aid you?"</p>
<p><em>You may ask the horse directions to the nearest city or ask it to accompany you:</em></p>
<p><em>If you ask for directions:</em> The horse tells you, then strides away while you grope for further words. [S1/Lose <em>Lost</em>/Move to any city within four spaces if there is one]</p>
<p><em>If you ask the horse to travel with you, roll one die, adding one each for Beguiling and Storytelling and two for Golden Bridle:</em></p>
<p>❖ 1–3: [Go to paragraph 1390]</p>
<p>❖ 4+: The horse agrees. You find him to be a delightful and knowledgeable companion, with but one flaw: he refuses to speak in front of others, causing you no end of frustration; others think you to be struck mad. [D1/S1/Wisdom/<em>Insane</em>]</p>`,
	},
	908: {
		index: 908,
		text: `<p>As you journey, you spy a poor man leading a scrawny mule, to which he talks vigorously. You can scarcely credit your ears when the mule answers him! Following at a distance, you overhear it say, "...and the prince will surely die tomorrow." The next day the prince dies in an accident. You must find this prophetic mule!</p>
<p><b>No Skill:</b> You return to where you first saw them, but can find no trace of it. Those around look at you in disbelief at your inquiries. This great prize has slipped through your fingers! [D1/<em>Envious</em>]</p>
<p><b>Acting and Disguise:</b> You make subtle inquiries in the town, being careful not to reveal what you seek. One day soon, you come across them again, and present yourself to them as a wizard from a distant land. The mule is pleased to share his gift with you, and you gain many strange glimpses into the future. [D2/S1]</p>`,
	},
	909: {
		index: 909,
		text: `<p>You happen to tread on the tail of a mangy cur. You expect it to bark, but are startled as it curses you in blasphemous epithets. A talking dog—and an infidel at that! Laughing at your surprise, the dog dashes between your legs, shouting imprecations and profaning the name of the Prophet!</p>
<p><b>No Skill:</b> Infuriated, you chase it wildly, dashing headlong into a stone wall. You lie there, dazed, the dog's profane utterances receding in the distances. Finally, you rise to go on your way. What wonders Allah has created! [S1]</p>
<p><b>Golden Bridle:</b> Righteously angry, you give chase to the blasphemous cur, Allah in His wisdom guiding your footsteps. The beast darts every which way, but cannot escape you. Finally it darts into the path of a heavily laden cart, and is crushed. Thus is the justice of the Most High revealed! [D1/S2/Piety]</p>`,
	},
	910: {
		index: 910,
		text: `<p>You see a crowd gathered around an old man, who displays a small ape. "See the ape that talks!" he cries, and the ape begins to sing a ribald song.</p>
<p><b>No Skill:</b> "Allah, this is a perversion of nature!" So saying this, you cast the man aside, draw your weapon, and slay the demonic creature. As his soul flees him, the old man curses you bitterly in many and foul oaths. [D1/<em>Determined</em>/<em>Accursed</em>]</p>
<p><b>Vizier</b> (mandatory), <b>Courtly Graces:</b> You remonstrate with the man, decrying the ape as a perversion of Allah's order. Though he is reluctant to surrender the ape, from whom he has made many a penny, the man agrees to place the matter before the Sultan. The Sultan sees the wisdom of your argument and decides the matter in your favor. [D1/S1/Courtly Graces]</p>`,
	},
	911: {
		index: 911,
		text: `<p>While resting in the countryside, you overhear a conversation from a nearby grove. Curious, you creep closer and discover a beautiful maiden speaking with a dark serpent, her voice dull and lifeless. With a prayer to Allah on your lips, you step forward with your sword to hand. As the serpent's gaze meets yours, though, you feel your will slipping away.</p>
<p><b>No Skill:</b> You turn and walk away, your body no longer at your own command. [D1/<em>Ensorcelled</em>]</p>
<p><b>Determined</b> (mandatory), <b>Enduring Hardship:</b> Steeling your will against the magical blandishments of the serpent, you advance. Frightened, it slithers away, and the maiden breaks free of its evil spell.</p>
<p><em>If you are male and not Married:</em> Casting shame aside, the girl smothers you with kisses and clings tightly to you, and refuses to be parted from you save only by death. [D1/S1/<em>Beloved</em>]</p>
<p><em>Otherwise:</em> She produces from her robe a gem of great value. "It is all I can give you, and only a fraction of what you deserve for your brave deed." [D1/S1/W+2 (Max: Princely)]</p>`,
	},
	912: {
		index: 912,
		text: `<p>While traveling at twilight you come upon a clearing in a patch of woods. You spy a campfire, and draw close. To your horror, a pack of black dogs circle it, chanting in the tongue of the evil Magian fire-worshippers.</p>
<p><b>No Skill:</b> The beasts radiate evil as a flame radiates heat. Before their chants can overwhelm you, you flee blindly into the night, crying Allah's name, but the sound of their blasphemy echoes in your brain long after. [S1/<em>Insane</em> (1 turn)]</p>
<p><b>Piety:</b> In the instant of your terror your prayers rise up to Allah. At the sound of your prayers, the fire blazes forth, consuming all the wood in an instant. When your eyes clear, a dozen men lie senseless in the clearing. You bind them and deliver them unto the Sultan, who dispenses to them justice and to you great honor. [D2/S1/<b>Robe of Honor</b>]</p>`,
	},
	913: {
		index: 913,
		text: `<p>At the sound of horsemen approaching, you cautiously take cover. From your place of concealment, you witness a troop of dark, shadowy cavalry passing, their faces obscured by a mist.</p>
<p><b>No Skill:</b> You pray for safety, but the sound of your voice attracts the attention of the lead horseman. His followers gather around you, grinning—they are a tribe of evil Magian fire-worshippers! They strip you and brand your body with tattoos and shower curses on you before they ride off, laughing. [D1/W-2 (Min: Poor)/<em>Accursed</em>]</p>
<p><b>Stealth and Stealing:</b> Composed and calm, you stay hidden as they ride to their hiding place. They are merely men—wicked fire-worshippers, but men. Your make haste to the Sultan, and he brings swift justice upon these evil unbelievers. [D1/S1/<em>Respected</em> (1 turn)]</p>`,
	},
	914: {
		index: 914,
		text: `<p>When you came to this area, the local villagers told you stories of the haunting creatures which dwelled by this river. Scoffing at danger, you agree to find the beasts and track them to their lair, but now you witness as black alligators emerge from the river and rise to their hind legs, their forms beginning to soften and shift. They can be nothing but deeply evil. Mercifully, you are not seen in your hiding place.</p>
<p><b>No Skill:</b> You are so scared by what you have seen that you cannot follow through on your promise. You return to the nearby village to admit your failure. They mock you for your cowardice and lack of sense. [S1/<em>Scorned</em> (1 turn)]</p>
<p><b>Wilderness Lore, Enduring Hardship, Golden Bridle:</b> You resolve to track these dark beings and observe them carefully. Though it is dangerous, you follow them to their lair, and make careful notes to assure that you can find your way back. You return to the village, and lead the grateful people to the lair, that they may rid themselves of these evil creatures. [D2/S1/<em>Respected</em>]</p>`,
	},
	915: {
		index: 915,
		text: `<p>In your journey, you come to a great lake, and hire a man to ferry you across. When you are but halfway across, see something odd a stone's throw away, and you tell the man to turn towards it that you might follow the ripples on the surface. Suddenly you feel an unholy presence beneath you, and long black arms rise from the water and grasp the ferryman.</p>
<p><b>No Skill:</b> You watch in fear as the man is carried beneath the surface. In shock, you drift helplessly on the lake, but eventually you come to your senses and return to shore. [D1/S1/Lose Enduring Hardship/<em>Insane</em> (1 turn)]</p>
<p><b>Enduring Hardship:</b> Putting down your horror, you seize the ferryman's pole, and guide the craft in pursuit of the man. You come to a small island on the verges of the lake, and watch, disgusted, as a band of gools emerge from the water dragging their hapless victim. Before they can turn to their unholy feast, you fall upon them and destroy them. [D2/S1/Piety/<em>Determined</em>]</p>`,
	},
	916: {
		index: 916,
		text: `<p>As you journey along, you spy in the distance a dark road whose surface seems to ripple with a current. As you draw near, you realize that the road is covered by a mass of huge, writhing, black snakes. You turn to flee, but see that the snakes have surrounded you.</p>
<p><b>No Skill:</b> You feel the sting of a viper's bite and commend your soul to Allah. Weakness fills your limbs, but by the mercy of the All-Powerful, you do not die. [D1/<em>Wounded</em>]</p>
<p><b>Quick Thinking:</b> An idea occurs to you. You disrobe and wrap your garments round your legs. The serpents' teeth cannot penetrate the bulky swathing. You follow the snakes to a narrow valley. Up ahead you see something glinting in the sun... [D2/S1/Quick Thinking/Move to the Valley of Diamonds and have an immediate encounter]</p>`,
	},
	917: {
		index: 917,
		text: `<p>On a dark and moonless night, a murmuring chant comes to your ears. You following the sound until you find its origin— a gathering of foul creatures, perhaps gools or Magians.</p>
<p><b>No Skill:</b> You are too frightened to show yourself and there is no one to rescue you from this situation. You hide in the shadows and listen to their terrible words, which cling to your soul. [D1/Lose Piety/<em>Accursed</em> (1 turn)]</p>
<p><b>Diseased, Crippled, Carnelian Idol, Wealth: Poor</b> or less (All mandatory): The evil ones sing praises to their false gods. Your fortunes lately have been harsh and unjust, and you are open to their seductive promises of power and wealth. You succumb, agreeing to set aside Allah. [D1/W+1 (Max: Rich)/Lose Piety/<em>Accursed</em>/Lose any statuses of your choice]</p>`,
	},
	918: {
		index: 918,
		text: `<p>While climbing a steep precipice, you slip and fall. The fall leaves you weak, barely conscious, and your leg throbs beneath you. A shadowy figure approaches you as you lie in pain.</p>
<p><b>No Skill:</b> You swoon. When you wake, you find you have been robbed. [D1/W-1 (Min: Poor)]</p>
<p><b>Enduring Hardship:</b> Calming your swiftly beating heart, you ask the figure for aid. "There will be a price," he says in a hollow voice. Warily, you agree. In a flash of light he disappears, and you find you are well and whole again, though a whispering voice stays with you, telling you of the price you have yet to pay. [D1/S1/<em>Under Geas</em>]</p>`,
	},
	919: {
		index: 919,
		text: `<p>Rumors have come to you that a powerful wizard lives nearby. You investigate the wizard's home, but a ghostly guardian will not permit you to enter.</p>
<p><b>No Skill:</b> You go away frustrated. [S1]</p>
<p><b>Determined</b> (mandatory), <b>Courtly Graces:</b> You refuse to leave without seeing the wizard. By kind words, flattery, and persistence, you convince the guardian to let you in. Inside, the wizard greets you cordially and is willing to teach you something of the arcane. He also makes a generous present. [D1/S1/Magic/<b>Treasure</b>]</p>`,
	},
	920: {
		index: 920,
		text: `<p>While crossing an open field at nightfall, you see a ghostly horse.</p>
<p><b>No Skill:</b> You call out, but the apparition doesn't pause. Soon it is out of sight, leaving you with only its memory. [S1]</p>
<p><b>Scholarship, Storytelling:</b> You have heard tales of the fondness many apparitions have for music. You sing to the ghost and it turns its ear your way. You beg its favor. It disappears, but you discover a gold coin in the road. It glows with the warmth of the ghost's favor. [D1/S1/<em>Blessed</em>]</p>`,
	},
	921: {
		index: 921,
		text: `<p>Off the road, you see a mule mired in a mud hole. The poor beast is exhausted, and there is no sign of its master.</p>
<p><b>No Skill:</b> You cannot reach it without becoming trapped yourself, and you leave rather than witness its death. [S1]</p>
<p><b>Wilderness Lore:</b> You cover the surface of the mud with your cloak and stretch out... you can just reach its bridle. Speaking soft encouragement, you patiently coax the mule from the mud. Never will you have a more faithful and grateful beast. [D1/S1/<em>Blessed</em>]</p>
<p><b>Golden Bridle:</b> You throw the Golden Bridle to the mule, and it miraculously wraps itself around the mule's head! With the bridle in place, you can easily lead the mule to safety. Never will you have a more faithful and grateful beast. [D1/S1/<em>Blessed</em>]</p>`,
	},
	922: {
		index: 922,
		text: `<p>You come across a fine horse harried by a pack of wild dogs. Its flanks heave with exertion and its eyes have the stare of panic.</p>
<p><b>No Skill:</b> You yell and wave your arms, but the dogs do not stray from their vicious task. After finishing the horse, they eye you speculatively, and you wisely retreat. [S1]</p>
<p><b>Courtly Graces, Golden Bridle:</b> Such a fine horse only needs a skilled rider; properly guided, it is quite capable of defending itself. You dash forward and leap to the horse's back; with your encouragement, the horse gives the dogs more than they can handle. Your valor has won you a fine mount. [D1/S1/W+1 (Max: Respectable)/<em>Blessed</em> (1 turn)]</p>`,
	},
	923: {
		index: 923,
		text: `<p>While conversing with a local herdsman, you hear his tale of woe: a great mastiff has been attacking the herds and slaying many sheep. You offer to organize the local folk and bring the dog to heel.</p>
<p><b>No Skill:</b> Your plan, though well intended, is inadequate. The great beast injures several of the folk, and escapes easily. You are shamed for your failure. [<em>Scorned</em> (1 turn)]</p>
<p><b>Quick Thinking:</b> You ask the locals for a sheep to serve as bait. Then, with the aid of a clever old trapper, you contrive a net-trap. The dog is captured without injury—which is fortunate, for the dog is the prize possession of an emir, who rewards you for returning his pet. [D1/W+1 (Max: Respectable)/Wilderness Lore]</p>
<p><b>Golden Bridle:</b> You wait until nightfall, when the dog comes; then you command it by the power of the Golden Bridle. The dog is captured without injury—which is fortunate, for the dog is the prize possession of an emir, who rewards you for returning his pet. [D1/W+1 (Max: Respectable)/Wilderness Lore]</p>`,
	},
	924: {
		index: 924,
		text: `<p>All night you have been pursued by a pack of ape-like creatures. As dawn nears, you realize you must make a stand before your strength is gone.</p>
<p><b>No Skill:</b> You are quickly surrounded by the beasts that tear at your throat. Suddenly the sun breaks over the horizon, and as suddenly the creatures disperse, leaving you to tend your wounds. [D1/Luck/<em>Wounded</em>]</p>
<p><b>Weapon Use:</b> You wound several of the creatures; the others retreat beyond your reach. As you wait for them, the sun breaks over the horizon. To your surprise, they abandon you and disappear into the underbrush. [D1/S1/Weapon Use]</p>`,
	},
	925: {
		index: 925,
		text: `<p>In this place, the Sultan's herds are plagued by a hungry lion. He proposes that you capture the noble beast that it may be displayed at his court. You agree, both for the Sultan's sake and for the sake of the lion.</p>
<p><b>No Skill:</b> You lead several soldiers and lay a trap for the beast. But the lion surprises and mauls you. To save your life, the soldiers are forced to slay the beast, and your plan is blamed for its destruction. [D1/<em>Scorned</em>/<em>Wounded</em>]</p>
<p><b>Golden Bridle:</b> You wisely observe to the Sultan that protection of his herds is proper, but keeping one of Allah's most noble beasts in captivity is a sin of pride. The Sultan is moved by your words. With your leadership, the lion is captured, carried far away, and released. The Sultan makes you his trusted advisor. [D1/W+1 (Max: Respectable)/<em>Vizier</em>]</p>`,
	},
	926: {
		index: 926,
		text: `<p>A noble asks you to investigate reports of poachers in his forest. Along a path you find a wild dog caught in a trap.</p>
<p><em>You may free the dog or wait to see who owns the trap:</em></p>
<p><em>If you free the dog:</em> [Go to paragraph 1391]</p>
<p><em>If you hide and wait:</em></p>
<p><b>No Skill:</b> The poachers arrive and catch you hiding. Mistaking you for a competing poacher, they beat you, tie you to a tree, and make their escape. The noble is displeased by your failure. [D1/<em>Scorned</em>/<em>Wounded</em>]</p>
<p><b>Stealth and Stealing:</b> The poachers arrive. You follow them to their hideaway, then slip away and return with guards. The poachers are captured, and the noble is pleased by your cleverness. [D1/<em>Respected</em> (1 turn)]</p>`,
	},
	927: {
		index: 927,
		text: `<p>A pride of lions is hidden in the vicinity. The prince is concerned that they are starving and directs you to bring food to them, that such magnificent beasts might not suffer, nor prey upon the cattle of the fields.</p>
<p><b>No Skill:</b> The lions will not eat the meat you bring, and slowly die out. The prince is furious at your failure, and denounces you. [D1/<em>Scorned</em> (1 turn)]</p>
<p><b>Wilderness Lore:</b> Knowing that lions will only eat freshly killed meat, you instruct the prince to tie old horses for the animals' consumption. The pride thrives, and the prince hails you as a friend to man and beast. [D2/S1/Wisdom/<em>Blessed</em>]</p>
<p><b>Golden Bridle:</b> The Golden Bridle allows you to command the eldest lion of the pride to come and eat the food that the prince provides. The lions soon learn the joy of domestication, and they thrive. [D2/S1/Wisdom/<em>Blessed</em>]</p>`,
	},
	928: {
		index: 928,
		text: `<p>From high atop a tree, you look down on a pack of slavering canines clustered around its base. The branch you cling to creaks ominously. All night you pray.</p>
<p><b>No Skill:</b> At midnight the bough shatters. Several dogs get a taste of you before you reach a nearby river and wade across. The dogs do not feel you to be worth their effort to pursue. [D1/<em>Wounded</em>]</p>
<p><b>Luck:</b> Just as the bough is breaking, an antelope darts by. Baying eagerly, the dogs take up the chase. You give thanks for your deliverance and pledge to live a virtuous life. [D1/Piety/Lose Stealth and Stealing]</p>`,
	},
	929: {
		index: 929,
		text: `<p>Something unnamable—a gruesome parody of a man—stalks out of the shadows, drooling and gurgling. You cry, "Allah preserve me!" It senses your presence, pauses, listens intently, then lumbers briskly toward you, licking its chops.</p>
<p><b>No Skill:</b> You plunge headlong into the night, howling incoherently. [D1/<em>Insane</em>]</p>
<p><b>Storytelling:</b> You noticed the hesitation when it heard your prayers; you instantly begin jabbering a stream of tales, prayers, and random verses. It listens, apparently rapt, distracted from its hunger. When daylight comes, it disappears in a trail of smoke, and you flee this place. [D1/S2/Quick Thinking]</p>`,
	},
	930: {
		index: 930,
		text: `<p>It is twilight. Through the forest you see a great ghostly form moving silently and sinuously toward you, eyes glittering in the faint light.</p>
<p><b>No Skill:</b> You await its approach, intoning your prayers. The beast—a great white tiger—approaches you curiously, batters you with his great paws like a cat with a field mouse, and then wanders silently off into the dark forest. [D1/Wisdom/<em>Wounded</em>]</p>
<p><b>Wilderness Lore, Golden Bridle:</b> You silently inch downwind so that it will not catch your scent, and the great white tiger does not notice you. Later, when your fear is gone, you marvel at its great beauty, and are moved to praise Allah's power and subtlety as evidenced in such a magnificent beast. [D2/S2/Piety]</p>`,
	},
	931: {
		index: 931,
		text: `<p>Terror grips your heart as the ghostly horse form draws closer.</p>
<p><b>No Skill:</b> Blackness overwhelms you, and you fall without a cry. You wake the next morning, gibbering and insane. [D2/<em>Insane</em>]</p>
<p><b>Magic, Golden Bridle:</b> You bring the ghost-horse under your control by magical means, and compel the spirit to take you where you wish. [D2/S1/Move to any space except a Place of Power]</p>`,
	},
	932: {
		index: 932,
		text: `<p>From your place of hiding, you see a shimmering form hovering before you. Soon it disappears into the undergrowth.</p>
<p><b>No Skill:</b> You are none the wiser... but safe, at least. [S1]</p>
<p><b>Scholarship, Storytelling:</b> You have heard tales of 'efreet horses which lead travelers to great treasures. Following the beast, you learn the tales are true! Lying nearby is a purse bulging with gold! [D2/S1/W+1 (Max: Rich)]</p>`,
	},
	933: {
		index: 933,
		text: `<p>You catch a glimpse of a beautiful horse. You cannot tell whether it is ridden, led, or running free.</p>
<p><b>No Skill:</b> You follow cautiously. When you reach the spot where you last glimpsed it, there is no sign of it—no hoof marks nor any evidence of its existence. [S1]</p>
<p><b>Determined</b> (mandatory), <b>Luck:</b> You approach the beast and soon are able to discern its rider—a great, dark, evil looking demon with fiery eyes. Prudently, you decide not to interfere with it but instead go someplace far away. [S2/Wisdom]</p>`,
	},
	934: {
		index: 934,
		text: `<p>A rich Vizier riding a noble horse canters past you. Your soul is moved by the beauty of the beast. Cautiously you follow—perhaps you can obtain the horse for your own.</p>
<p><b>No Skill:</b> The Vizier notices you, turns, tosses you a coin, then pats his sword meaningfully. You take his meaning—and his coin. [D1/W+1 (Max: Poor)]</p>
<p><b>Stealth and Stealing:</b> You stay out of sight until the Vizier stops to rest. While he sleeps, you take the horse's bridle and lead him off. [D1/W+1 (Max: Rich)]</p>`,
	},
	935: {
		index: 935,
		text: `<p>A large cow like none you have ever seen lumbers by, closely followed by a poor man in rags. "Please help me catch her," he cries. "My family will starve without our zebu!"</p>
<p><b>No Skill:</b> The cow is very large and looks ill-tempered. You decide the poor man must depend on Allah for aid, and bid him the best of luck. [D-1]</p>
<p><b>Quick Thinking, Golden Bridle:</b> You easily bring the great beast under control. The poor man is profuse in his thanks, and praises your spirit to the Most High. [D1/<em>Blessed</em> (1 turn)]</p>`,
	},
	936: {
		index: 936,
		text: `<p>You see a poor man leading a fine mule. There is something strange about its appearance and you come closer to study it.</p>
<p><b>No Skill:</b> The man eyes you suspiciously, and sensing your ill intent, immediately hurries into a crowd of locals. [D-1]</p>
<p><b>Beguiling:</b> You craftily slip the guide rope from the mule's head, placing it over yours, and follow along behind while an accomplice leads the mule away. Soon, the man turns and discovers you. You quickly explain that you were enchanted into the body of a mule, and have through the blessings of the Compassionate God changed back. The gullible man lets you free and you return to the mule and discover what was so odd—she is gravid! A fertile mule will fetch a high price indeed! [D1/S1/W+1 (Max: Respectable)/Quick Thinking]</p>`,
	},
	937: {
		index: 937,
		text: `<p>The beast is large and strong—never have you seen such a creature. Your heart contracts with greed.</p>
<p><b>No Skill:</b> As you have just about grasped the beast's rope, a voice comes from behind you, "Ah, you've found my wildebeast!" A strange foreign man thanks you, takes the beast, and gives you a few coins in gratitude. [D1/W+1 (Max: Poor)]</p>
<p><b>Quick Thinking, Golden Bridle</b> (mandatory): You quickly wrap ropes around the creature's legs and hobble it. As you are leading it away, a huge infidel sees you and cries, "So! Stealing my wildebeast, eh?" and gives you a thorough thrashing. Now you are the lamed one! [D1/<em>Wounded</em>]</p>`,
	},
	938: {
		index: 938,
		text: `<p>The other seems of interest to you. You are not comfortable with things going on. The other is loaded on a cart and taken to a ship with other dying people. You arrange to join the journey. The ship sails into the ocean and you gather along the way that the people are dying slaves to be dumped in the sea. Outraged, you decide to act on their behalf. You pretend to suddenly become enraptured by the grace of Allah, giving a speech of compassion from where even you do not know. The others are convinced to take the slaves back to their homeland to die, rather than committing them to a watery grave. [D2/Acting and Disguise/Piety]</p>`,
	},
	939: {
		index: 939,
		text: `<p>You are concerned as soldiers place the other on a cart and roll it away. You follow them and discern that the soldiers intend to dump the other in an early grave. Outraged, you step in.</p>
<p><b>No Skill:</b> You buy the other from the cart handlers and act as the nurse. The other is thankful and spends your days together passing on his skills in wilderness lore. [D1/Wilderness Lore]</p>
<p><b>Acting and Disguise:</b> You convince the cart handlers that the other is holy man who should be respected in his last days. They believe you and take him in, caring for him until he passes on to Allah. [D1/S1/<em>Blessed</em>]</p>`,
	},
	940: {
		index: 940,
		text: `<p>While following a dying wretch you make a most wondrous discovery—the nest of a roc, the greatest of birds. Nothing else is of concern to you as you make plan to steal a fledgling. You truss the bird up securely but, as you are finishing the task, the mother appears. She clutches you in her great talons and bears you away on the wind. After sickening hours of flight, you are dropped. By the grace of Allah, some undergrowth breaks your fall and spares your life. [D1/S1/Have another player move you up to four spaces in any direction]</p>`,
	},
	941: {
		index: 941,
		text: `<p>Most marvelous is this egg, like unto the great dome of a Sultan's palace. You realize that transporting such an object will be difficult.</p>
<p><b>No Skill:</b> You pay locals to help you move the egg. You contrive ropes and pulleys to haul it, but the egg breaks loose on the steep slope. It shatters, injuring many of your workers, and suddenly you are most unwanted in these parts. [D1/W-1 (Min: Respectable)/<em>Outlaw</em>]</p>
<p><b>Scholarship:</b> In ancient texts, you learned of a device that will help you transport the egg. You engineer a horse-driven wheel to lift the egg onto a cart. Your clever devices permit you to safely ship the egg to civilization, where it causes quite a stir. [D1/S1/Quick Thinking/<em>Respected</em>]</p>`,
	},
	942: {
		index: 942,
		text: `<p>The egg of a roc is vast, like a huge dome imbedded in the sand.</p>
<p><b>No Skill:</b> The egg suddenly cracks open. A shell fragment strikes your head, dazing you, and the young roc emerges. Just as it is about to eat you, the mother returns with food and it turns away. You escape, barely. [D1/Luck]</p>
<p><b>Weapon Use:</b> You gather a band of skilled adventurers and return to the egg. When the fledgling bursts from the egg, your men quickly slay it. With haste, you remove the carcass from the mountain. You sell the meat in market, for it is most tasty, and the spectacle of the great bones causes a stir in the court of the Sultan. [D1/S1/W+1(Max: Respectable)/<em>Respected</em>]</p>`,
	},
	943: {
		index: 943,
		text: `<p>You have come to the nest of the greatest of birds, the roc: surely you praise Allah for His wondrous works. You remain motionless as you watch the egg.</p>
<p><b>No Skill:</b> After a time a huge roc settles down upon it. Suddenly you are amazed to see a Sultan and hundreds of men emerge from hiding and subdue the huge creature. A delightful story! [S1]</p>
<p><b>Wilderness Lore:</b> You realize the egg is fake—could it be a lure for a real roc? As a roc approaches, you note soldiers hiding in the bushes.</p>
<p><em>You may wait in hiding or warn the roc away from the soldiers:</em></p>
<p><em>If you wait:</em> Hundreds of men emerge from hiding and slay the glorious creature. What an ignominious death for such a noble creature! [D-1/S1]</p>
<p><em>If you warn the roc:</em> [Go to paragraph 1392]</p>`,
	},
	944: {
		index: 944,
		text: `<p>Before you is a roc egg, huge as a Sultan's palace. Far off in the sky you see a speck which might be the returning mother. You pray that it is not.</p>
<p><em>Roll two dice, adding one each for Piety and Wilderness Lore:</em></p>
<p>❖ 2–8: You are caught by the roc and carried a good distance before being dropped, sustaining grievous injuries. [D1/S1/<em>Crippled</em>]</p>
<p>❖ 9+: You elude the talons of the mother and escape. What an adventure! [D1/S2/Luck]</p>`,
	},
	945: {
		index: 945,
		text: `<p>A great roc egg sits in a nest on a small island. As you cower in fear, a colossal roc lands and begins pecking at the egg. Soon another roc swoops upon the first, and a terrific battle ensues. The beating of their wings is like the most furious of storms! You pray for safety!</p>
<p><b>No Skill:</b> The force of the maelstrom soon overwhelms you! When you come to, you have been blown far away, and are well the worse for the experience. [D1/<em>Wounded</em>]</p>
<p><b>Piety:</b> There is no power but in Allah. Feathers and bits of shell fly all about you, but by your faith you are spared from harm. You take a piece of shell the size of a man's chest to corroborate your tale, and all are impressed by your bravery. [D2/S2/<em>Respected</em>]</p>`,
	},
	946: {
		index: 946,
		text: `<p>In this place, the clouds never part, but the sky is always overcast. As you study the skies, a flock of birds, far above you, turn and vanish into the clouds. For one moment, the clouds part, revealing a shimmering city in the sky! Your heart burns to explore it.</p>
<p><b>No Skill:</b> You can think of no way of ascending, and no one believes you. Your heart nearly bursts in desire for the vision you have been granted! [S1/<em>Envious</em>]</p>
<p><b>Ebony Horse, Flying Carpet, Magic Lamp:</b> Through magic you fly to the strange city. So wondrous is the experience that you cannot recall the details of your visit when you return, but you are suffused with the grace of the Most High. [D3/<em>Blessed</em> (1 turn)]</p>`,
	},
	947: {
		index: 947,
		text: `<p>You see a most remarkable creature—a beast with the head and wings of an eagle but the body of a lion! It swoops down on a nearby field, and seizes a sheep before flying off. You give chase, eager to learn more of this strange vision.</p>
<p><b>No Skill:</b> The creature sees you giving chase, and drops the sheep upon you. You limp back to the shepherd and tell him all you have seen. He thanks you for your help and dresses your cracked ribs before you depart. [D1/S1]</p>
<p><b>Stealth and Stealing:</b> You follow the griffin but manage to stay out of its sight, and come at last to its aerie. The bones of hundreds of stolen sheep litter the ground. You wait until the creature slumbers and slay it, carrying its body back to the shepherds. They reward you handsomely for your brave deed. [D2/S2/W+2 (Max: Respectable)/<em>Respected</em>]</p>
<p><b>Golden Bridle:</b> You follow the griffin for many miles until it alights and settles down to slumber. You stealthily approach the creature and throw the Golden Bridle over its head. When it awakens, it is as docile as a gelding horse and you ride it into the sky. [D2/S2/Stealth and Stealing/Move to any space except a Place of Power]</p>`,
	},
	948: {
		index: 948,
		text: `<p>You spy a beautiful bird and follow its flight until it alights in a nest high atop a tree, when you see that it holds in its mouth a shining gold necklace, which it drops in the nest before it flies off.</p>
<p><b>No Skill:</b> You are seized by the desire to own the necklace, but the tree affords you no purchase to climb.</p>
<p><em>You may go away or chop down the tree:</em></p>
<p><em>If you leave:</em> You decide the necklace is not worth the bother and go on your way. However, the memory of it haunts you. [D1/S1/<em>Envious</em>]</p>
<p><em>If you chop the tree:</em> The tree falls right on top of the necklace: you have no way to recover it. A fitting lesson to stem the feeling of greed within you. [D1/Wisdom]</p>
<p><b>Wilderness Lore, Scholarship:</b> You recognize the bird as a Spotted Throatwarbler, a most subtle and dangerous beast, a favorite pet of djinns and marids. You hasten on in your journey before its master arrives. [D2/S1/Wisdom]</p>`,
	},
	949: {
		index: 949,
		text: `<p>You see the other, a known criminal, tied to a tree—his captor nowhere to be seen. The other is about to get free of his bonds. Your only recourse is to attack! You cut at him but hit the tree instead. A low moan arises from... somewhere. Suddenly a huge 'efreet stands before you. "How dare you harm my home!" he cries.</p>
<p><b>No Skill:</b> You tell the 'efreet that you merely sought to obtain the necklace. The 'efreet guffaws, then turns your axe into a pile of wood. Then... you feel yourself change. [D1/S1/<em>Beast Form</em>]</p>
<p><b>Appearance, Protective Talisman:</b> The 'efreet's anger is softened by your pleasing words and countenance. [D1/S2/W+1 (Max: Respectable)]</p>
<p><b>Insane</b> (mandatory): You leap at the 'efreet with a cry, brandishing your axe. With ringing strokes you assail your foe, but succeed only in blunting the axe against his inhuman skin. Clucking in annoyance, the 'efreet flicks the weapon from your grip, and, taking you up in his palm-frond-sized hands, makes a hole in your body and frees your soul. [Death]</p>`,
	},
	950: {
		index: 950,
		text: `<p>With scorn on your face you attack your hapless foe. Unwittingly, in your eagerness, you free them!</p>
<p><b>No Skill:</b> The other flees from you, a cry on their lips. The other is adept at the ways of the wild and evades your pursuit. You must assuage your rage another day. [D-2]</p>
<p><b>Wilderness Lore:</b> The other flees into the wilds, you hot on their trail. After a day's chase you corner the other in a lonely mountain pass. They are too exhausted to put up a fight and are easily slain. [D-1/W+1 (Max: Poor)]</p>`,
	},
	951: {
		index: 951,
		text: `<p>The piteous sight of the other's condition moves you to anger. You start to question the other but then decide to beat him for good measure. [D1]</p>`,
	},
	952: {
		index: 952,
		text: `<p>The other seems a drunkenly slug until you begin your questioning. You soon learn that your questioning. You soon learn that the other carries a dowry that will not be spent—one of the betrothed has been taken by the all-merciful Allah. You know a few available and worthy partners to replace the one taken. You talk the other into allowing you to take over as match-maker for a share of the dowry.</p>
<p><b>No Skill:</b> Luckily the families are amenable and you succeed in making a match. [D1/Bargaining and Evaluation]</p>
<p><b>Bargaining and Evaluation:</b> You find that the other is in the midst of a string of misfortunes and you are able to solve many of his problems. You make a good amount of money and lead several families to happiness. [D1/S1/W+1 (Max: Rich)/Seduction]</p>`,
	},
	953: {
		index: 953,
		text: `<p>Despite your misgivings you decide to engage the other in conversation.</p>
<p><b>No Skill:</b> The other's tale winds across black and desolate vistas. After a day and a night of ravings the other wanders away leaving you lost and hopelessly confused. [D1/S3/<em>Insane</em>]</p>
<p><b>Enduring Hardship:</b> The other's tale of woe and despair blackens your heart. As the tale crawls to a fevered pitch, the other works Into a frenzy of depression. You watch, horrified, as they leap to their doom into a deep gorge, leaving you stricken with grief. [S3/<em>Grief Stricken</em>]</p>`,
	},
	954: {
		index: 954,
		text: `<p>The other regales you with tales of their dark visions.</p>
<p><b>No Skill:</b> Long before the other is done with their tale you realize how much of your time has been wasted with nothing to show for it. [D1]</p>
<p><b>Scholarship:</b> From the depth of the other's story a pattern begins to emerge. From it you discover clues that lead to an ancient dark ruin. [D1/S2/Opportunity to enter the Haunted House]</p>`,
	},
	955: {
		index: 955,
		text: `<p>With good humor you listen to the other's tale. It lasts long into the night. [S1]</p>`,
	},
	956: {
		index: 956,
		text: `<p>A rowdy bunch of brigands pass you by without a backwards glance. Then, one of them turns and cries, "Come, friend, join our hunt..."</p>
<p><b>No Skill:</b> You have no skill at such things and decline. The final brigand gives you a rude poke with the butt of his spear as they ride off, and the story of your humiliation spreads through the nearby lands. [<em>Scorned</em> (1 turn)]</p>
<p><b>Wilderness Lore:</b> You join in eagerly. After you have pointed out the correct path, you realize they are "hunting" a man on horseback. You are chagrined to be involved in such dishonorable doings and flee them. [D1/<em>Grief Stricken</em> (1 turn)]</p>`,
	},
	957: {
		index: 957,
		text: `<p>A group of merry brigands has met up with you. You are invited to take part in a plan to humiliate the wicked Vizier who rides this way.</p>
<p><em>You may help them or decline:</em></p>
<p><em>If you decline:</em> The brigands harbor no hard feelings and go to find another to help in their prank. [D1]</p>
<p><em>If you agree to help them, roll two dice, adding one each for Stealth and Stealing, Beguiling, and Acting and Disguise, and subtracting one for Piety:</em></p>
<p>❖ 2–7: You play-act as a wounded traveler, but you are not convincing in your charade. The Vizier is suspicious, and his guards attack. You are taken captive. [D1/<em>Imprisoned</em>]</p>
<p>❖ 8+: By guile and quick wits, you trick the Vizier into a compromising position in front of many witnesses. The brigands are so pleased that they offer you a fine gift. [D1/S1/W+1 (Max: Respectable)]</p>`,
	},
	958: {
		index: 958,
		text: `<p>You come upon a small group of men, crudely garbed but heavily armed. They are weeping openly. When questioned, they explain that their leader has been slain and they cannot decide how to choose a successor.</p>
<p><b>No Skill:</b> It is none of your affair, and you hasten away from them. [S1]</p>
<p><b>Wisdom:</b> You devise for them a series of tests which favor those with strength, honor, wit, and manners. Impressed by your wisdom, the rough men give you a generous reward. [D2/S1/W+1 (Max: Respectable)]</p>`,
	},
	959: {
		index: 959,
		text: `<p>You come upon an encampment of men who fit the description of brigands operating in these parts. You ask to meet with their chieftain to determine their intents. He greets you and offers wine.</p>
<p><b>No Skill, Wealth: Rich</b> or greater (mandatory): You drink deeply, not suspecting there was benj in your cup! When you wake, you find you have been robbed. [D1/W-2 (Min: Poor)]</p>
<p><b>Beguiling:</b> You make a show of drinking the wine, but do not touch your lips to it, instead pouring it subtly on the ground. Impressed with your wit and prudence, the robber chief asks you to join his band.</p>
<p><em>You may accept the invitation or decline:</em></p>
<p><em>If you accept:</em> You join the brigands, knowing that this makes you an outcast in the eyes of man and Allah, but your friends serve you well. [D1/S1/Stealth and Stealing/Lose Piety/<em>Outlaw</em>/Lose <em>Respected</em>]</p>
<p><em>If you decline:</em> [Go to paragraph 1383]</p>`,
	},
	960: {
		index: 960,
		text: `<p>A small party of grimy-looking men come upon you. "We are scouts for the nomad tribe of Bedouins," they say. When you ask to meet their chief, they laugh and escort you to his presence. "What would you have of me?" he asks.</p>
<p><em>You can ask for information or to join the bandit tribe:</em></p>
<p><em>If you ask for information:</em> [Go to paragraph 1382]</p>
<p><em>If you ask to join the tribe:</em> He accepts, but you will have to undergo a trial of combat, pain, or storytelling.</p>
<p><em>If you choose a trial by combat:</em> [Go to paragraph 1298]</p>
<p><em>If you choose a trial by pain:</em> [Go to paragraph 112]</p>
<p><em>If you choose a contest of storytelling:</em> [Go to paragraph 619]</p>`,
	},
	961: {
		index: 961,
		text: `<p>From a hill you spy a huge encampment of disreputable-looking men. Fearful that this might be a war party planning to invade your homeland, you resolve to sneak into their camp.</p>
<p><b>No Skill:</b> You are quickly caught as a spy, then sold as a slave. [D1/<em>Enslaved</em>]</p>
<p><b>Stealth and Stealing, Acting and Disguise:</b> You sneak into the camp and listen to their rough conversation. Finding them harmless, you reveal yourself and talk freely with them, learning valuable information, including the whereabouts of a marvelous city! [D2/S1/Opportunity to enter the City of Brass]</p>`,
	},
	962: {
		index: 962,
		text: `<p>Some distance off you spy a small party of raucous men drinking and carousing. They fit the descriptions of brigands operating in the area.</p>
<p><b>No Skill, Weapon Use</b> (mandatory): Despite the fact that they are not harming anyone, you attack them boldly. Drunken and surprised, they fall easy prey. Unfortunately, they were innocent men, and you are punished for your folly. [D-1/S1/<em>Imprisoned</em>]</p>
<p><b>Courtly Graces:</b> You recognize many signs of noble breeding in the demeanor of these men, and cautiously observe them further. Then you get a look at one's face—it is a young friend of the prince! How fortunate you did not act in haste, for haste is the enemy of prudence. [D1/Wisdom]</p>`,
	},
	963: {
		index: 963,
		text: `<p>In your travels, you met briefly with a band of brigands. When you asked to join them they laughed and cast you away. You follow them, vowing revenge.</p>
<p><b>No Skill:</b> You strike when the brigands attack a small merchant caravan. It is a shrewd plan, but goes awry—a thief pierces you with a spear. So goes your revenge... [D1/<em>Wounded</em>]</p>
<p><b>Wisdom:</b> Revenge is a dish best served cold. You bide your time and follow, waiting for your chance to destroy them. [D1/S1/<em>Determined</em>/Have an immediate second encounter with the brigands, choosing a different reaction]</p>`,
	},
	964: {
		index: 964,
		text: `<p>A laughing band of men, obviously brigands, pass you in the woods. Determined to see what you can steal from them, you follow.</p>
<p><b>No Skill:</b> You are caught, mocked, humiliated, and sold into slavery. [D-1/S1/<em>Enslaved</em>]</p>
<p><b>Quick Thinking:</b> As you follow, three of their party come upon you. To allay their suspicions, you pretend to be a traveling entertainer. They watch your performance, clap politely, then rob you. [D1/W-1 (Min: Penniless)]</p>`,
	},
	965: {
		index: 965,
		text: `<p>While strolling along, you hear voices approaching. Soon a great party of besotted brigands pass your hiding place, obviously on the way to a drunken revel. You tag along, wishing to join the fun.</p>
<p><b>No Skill:</b> Even as drunk as they are, the brigands notice you, pursue and capture you, and use you for sport. [<em>Scorned</em> (1 turn)]</p>
<p><b>Acting and Disguise, Stealth and Stealing:</b> You knock one of them unconscious and take his robes and burnoose. Thus disguised, you enjoy an evening of feasting at their expense. You learn much of the craft of thievery and a gain a few nice baubles, as well. [D1/S1/W+1 (Max: Respectable)/Stealth and Stealing]</p>`,
	},
	966: {
		index: 966,
		text: `<p>You come upon a huge tribe of nomad Bedouins—obviously brigands. In the distance, you spy a large caravan—obviously the Bedouins' target. You must warn the caravan!</p>
<p><em>Roll one die, adding one for Stealth and Stealing:</em></p>
<p>❖ 1–3: You are caught by the Bedouins. They suspect your intent, and punish you gleefully, then abandon you to the fates. [D1/<em>Wounded</em>]</p>
<p>❖ 4+: You circle around the Bedouins and warn the rich caravan in time. You are well rewarded for your effort. [D1/S1/W+1 (Max: Rich)]</p>`,
	},
	967: {
		index: 967,
		text: `<p>You watch in amazement as a troop of evil-looking brigands stand before a cliff wall. The leader cries, "Open, sesame!" and a cave reveals itself. The group disappears inside. Later, you hear a muffled cry, and the cave again opens to let the bandits out. After they are out of sight, you use the magic words to gain entry.</p>
<p><b>No Skill:</b> You load several baskets with their stolen wealth, but forget the words needed to exit the cave. When the bandits return, they catch you easily and sell you into slavery. [D2/<em>Enslaved</em>]</p>
<p><b>Wisdom:</b> Carefully keeping in mind the words the brigands used to open the cave, you enter, grab much treasure, and make good your escape. [D2/S1/W+3 (Max: Princely)]</p>`,
	},
	968: {
		index: 968,
		text: `<p>Following cries for help, you come upon a merchant caravan beset by blood-thirsty brigands. Soon the merchants will be overwhelmed.</p>
<p><em>You may choose to aid the caravan or wait and see what develops:</em></p>
<p><em>If you aid the caravan:</em> You rush forward, sword flashing in the sun. [Go to paragraph 1385]</p>
<p><em>If you wait:</em> The brigands make short work of the merchants. They strip the caravan and ride off. Truly Allah turns His face from you as you turned away from the helpless. [D1/Lose Piety]</p>`,
	},
	969: {
		index: 969,
		text: `<p>You spy a troop of Bedouin raiders loaded with loot. You pursue immediately, hoping to discourage them from further mischief.</p>
<p><b>No Skill:</b> They lead you on a merry chase, then, contemptuously, they disappear into the distance. [D1]</p>
<p><b>Wilderness Lore:</b> Wisely you follow at a distance, for their tracks are as clear as a scholar's handwriting on blank parchment, until you finally come to their encampment. Your attack is well-planned: one by one, they emerge from their camp to answer Nature's call, and you have no trouble subduing them. The booty is meager but fair pay for such light work. [D1/S1/W+1 (Max: Respectable)/Wisdom]</p>`,
	},
	970: {
		index: 970,
		text: `<p>From atop a hill you see the approach of a band of Bedouin brigands. Realizing they will soon be here, you scurry for a good defensive position with a safe retreat. Soon they are upon you, slashing you from all sides. You are quickly overwhelmed, bleeding from many painful cuts.</p>
<p><em>Roll two dice, adding one each for Weapon Use, Enduring Hardship, and Determined:</em></p>
<p>❖ 2–7: They leave you for dead. [D1/<em>Wounded</em>]</p>
<p>❖ 8+: You defiantly stand your ground and wait for their next onslaught. They stop, wheel, and stare at you, mouths agape at such courage. "Let him stand!" cries the leader. He salutes you and the pack moves off. [D1/S1/Weapon Use/<em>Respected</em> (1 turn)]</p>`,
	},
	971: {
		index: 971,
		text: `<p>Vicious Bedouin raiders have come upon you as you make ready for sleep. Off into the forest you dash, praying to Allah for intervention.</p>
<p><b>No Skill:</b> The Bedouins catch you easily. Your pleas for mercy fall on deaf ears, though they merely rob you, when easily they might have slain you. [D1/W-1 (Min: Poor)]</p>
<p><b>Piety:</b> One brigand is stung by a bee and rides away howling in pain; a second tumbles from his mount and knocks himself unconscious. The third and fourth get into a terrible argument: one flees and the other rides off in hot pursuit. Truly Allah's ways are subtle and great! [D2/S2/Piety]</p>`,
	},
	972: {
		index: 972,
		text: `<p>To protect yourself from brigands in the area, you spend the night in a tree. In the dark, you hear the loud voices of Bedouins dividing loot—directly below your tree!</p>
<p><b>No Skill:</b> The branch you are sitting on breaks; you tumble to the ground. They freeze in shock, and you dash away into the dark. Praise Allah, they do not give pursuit! [D1/S1]</p>
<p><b>Wilderness Lore:</b> You remain motionless, scarcely daring to breathe. The Bedouins bury part of their treasure and leave. When morning comes, you dig it up and leave with due speed. [D2/S1/W+2 (Max: Rich)]</p>`,
	},
	973: {
		index: 973,
		text: `<p>Woe is you! Your camp is surrounded on all sides by evil Bedouin raiders. You fall to your knees to beg for mercy in the name of Allah.</p>
<p><b>No Skill:</b> The Bedouins laugh at your pleas, shame you with foul acts, and leave you for dead. [D2/Lose Enduring Hardship/<em>Wounded</em>]</p>
<p><b>Beguiling:</b> You promise that they will not regret sparing you. They take you captive—but at least you are alive. [D1/<em>Enslaved</em>]</p>`,
	},
	974: {
		index: 974,
		text: `<p>Your caravan is beset from all sides by nomad raiders. There is one chance to escape—but you cannot take your possessions with you.</p>
<p><b>No Skill, Wealth: Rich</b> or greater (mandatory): You cannot bear to leave so much wealth behind. Your final stand is bold but short. The bandits take your goods, but spare your life. [D1/W-2 (Min: Poor)/<em>Wounded</em>]</p>
<p><b>Wisdom:</b> Worldly wealth is not the worth the loss of your life. You flee. [D2/S1/W-2 (Min: Poor)]</p>`,
	},
	975: {
		index: 975,
		text: `<p>As you bid him a fine good day, the crotchety old man asks if you have anything he might eat.</p>
<p><b>No Skill:</b> You are taken aback by his effrontery, and politely decline to aid him. [D-1/S1]</p>
<p><b>Courtly Graces:</b> You give him the last of a pomegranate-and-rosewater confection you prepared with your own hands. After one bite, his eyes widen. "Only my child could make such a perfect confection! Truly, could it be thee?" Indeed, marvel of marvels, it is your long-lost father! Praise the miracles of the Most High! [D2/S2/Luck/<em>Blessed</em>]</p>`,
	},
	976: {
		index: 976,
		text: `<p>As you talk, you notice the ancient one has many scars. You wonder deeply about their origin.</p>
<p><b>No Skill:</b> You politely inquire as to their cause, and the old man walks quickly away, insulted by your crude manners. [<em>Scorned</em> (1 turn)]</p>
<p><b>Wisdom:</b> You surreptitiously study them. They are whip scars: the sign of slave who has bought his freedom. Mindful of his dignity, you ignore them as you converse. [D1/Courtly Graces]</p>`,
	},
	977: {
		index: 977,
		text: `<p>You come across a wise old Persian expounding to a small group. You join them, and, when the discussion is over, the man invites you to his dwelling.</p>
<p><b>No Skill:</b> You accompany him and spend a pleasant evening. In the morning you go your separate ways. [D1/S1]</p>
<p><b>Storytelling:</b> You amuse him so much that he makes a present to you—a book collection of incredible antiquity, full of marvelous ancient knowledge. [D1/S1/Scholarship/<b>Book of Hidden Treasures</b>]</p>`,
	},
	978: {
		index: 978,
		text: `<p>You come across an old man hawking even older lamps.</p>
<p><b>No Skill:</b> You engage him in discussion and hear many details of his varied and entertaining life. [S1]</p>
<p><b>Storytelling</b> (mandatory): You have heard tales of magical lamps... You pursue the old man, showering him with questions about his: when he last polished them, which is the oldest, where did he purchase this one or that one. The man soon grows annoyed by your persistent questions, and calls a soldier to drive you off. What wonders have slipped through your fingers! [D1/<em>Envious</em>]</p>
<p><b>Magic:</b> One of the lamps is warm to your touch—a warmth not of earthly fire! For a pittance you purchase a priceless object! [D2/S1/<b>Magic Lamp</b>]</p>`,
	},
	979: {
		index: 979,
		text: `<p>The old man is doddering and infirm but his clothes speak of great wealth. Only the presence of bystanders prevents you from robbing him.</p>
<p><b>No Skill:</b> The old man spends many hours visiting equally aged friends. He will not be alone this night, so you decide to try your luck elsewhere. [D1]</p>
<p><b>Beguiling:</b> You engage the man in conversation. He speaks at great length of a haunted house nearby. You convince him to lead you to this place, and when no one is around it is a simple matter to overcome and rob him. [D2/W+2 (Max: Respectable)/Opportunity to enter the Haunted House]</p>`,
	},
	980: {
		index: 980,
		text: `<p>The old man's clothing betrays him as wealthy, and there is no one else about.</p>
<p><em>You may rob him or follow him:</em></p>
<p><em>If you follow him:</em> [Go to paragraph 1381]</p>
<p><em>If you rob him:</em></p>
<p><b>No Skill:</b> You leap forward, expecting little resistance. The old man whirls and utters a cry, and you are thrown back by magical forces. [D1/<em>Ensorcelled</em>]</p>
<p><b>Magic:</b> As you move forward to rob the man, you espy a symbol on his turban which reveals him to be a sorcerer. You challenge the infidel, secure in your mastery of the arts arcane. He turns, a snarl on his misshapen face, as you unleash your most devastating magics upon him. A brief wind seems to stir his cloak as your spells strike him, and then he smiles and raises his hands, fingers crooked in gestures unfamiliar to you. You feel yourself dwindling and shrinking, each stage of the transformation a fresh agony, until you have become a pomegranate. The sorcerer gestures again, and you explode into a thousand pips, scattered about his feet. Some part of you is aware of your foe himself beginning to transform. At last he becomes a large chicken which pecks up each fragment of your being. As the last pip—the part with your soul—is eaten, you cease to be. [Death]</p>
<p><b>Scholarship</b> (mandatory): You recognize the symbol on his turban as denoting a powerful enchanter. You prepare your own counter-charms, grinning and looking forward to this contest of equals. When the smoke clears and the earth settles, you are victorious, and you take from him a most valuable item. [D2/<b>Treasure</b>]</p>`,
	},
	981: {
		index: 981,
		text: `<p>In a lonely place you meet an old blind man. Desperate, you attack and rob him.</p>
<p><b>No Skill:</b> Though you gain a few coins, your heart is heavy at the deed. [D-1/W+1 (Max: Poor)/Lose Piety/<em>Grief Stricken</em>]</p>
<p><b>Outlaw, Scorned, Accursed</b> (All mandatory): You are not moved by the plight of the weak, the pathetic, the doomed. You pocket his coins and do not look back. [D1/W+1 (Max: Poor)/Stealth and Stealing]</p>`,
	},
	982: {
		index: 982,
		text: `<p>Several blind men hurry past. Something about their demeanor raises your suspicions, and you follow them. You come across them as they are about to split their loot from a clever theft. Suddenly one cries, "Brothers, there is a stranger here!" They thrash about. The fracas is noticed, and the Sultan's guards arrive.</p>
<p><b>No Skill:</b> You explain your case to the Sultan. He divines that your intent was to rob them, making you a thief as well, and casts you into the dungeon. [D1/<em>Imprisoned</em>]</p>
<p><b>Acting and Disguise:</b> You pretend to be blind too, and claim that all of you had a falling out. Suspicious, the Sultan orders you beaten, whereupon you open your eyes. You suggest that he beat the others and they will open their eyes. He does so. When they do not open theirs, he judges that you are more honest than they and sets you free. [D1/Quick Thinking]</p>`,
	},
	983: {
		index: 983,
		text: `<p>You spy several old blind men hurrying furtively away. Intrigued, you follow them.</p>
<p><b>No Skill:</b> One of them hears your footfalls and cries out to his companions. They set upon you. Only the fact that they are all blind saves your miserable life. [D1/<em>Wounded</em>]</p>
<p><b>Stealth and Stealing:</b> The blind men enter a cabin, and you eavesdrop upon them. To your surprise, they are thieves, dividing their take! You wait in a corner until they fall asleep, then help yourself to their plunder. [D1/W+1 (Max: Respectable)/Stealth and Stealing]</p>`,
	},
	984: {
		index: 984,
		text: `<p>You approach a group of three blind faqirs, wise men who live through begging, who seek lodging. If you will help them, they will tell the amazing tales of how they were blinded.</p>
<p><em>You can help them or go on your way:</em></p>
<p><em>If you go on your way:</em> You are uninterested in their tales. [D-1]</p>
<p><em>If you help them:</em> You lead the mendicants to a place you know of nearby. [Go to paragraph 1386]</p>`,
	},
	985: {
		index: 985,
		text: `<p>You spy a blind man making prophecies to the followers. He has a begging bowl before him.</p>
<p><em>You may choose to give him a coin or not:</em></p>
<p><em>If you give him a coin:</em> [W-1 (Min: Beggar)/Go to paragraph 1387]</p>
<p><em>If you do not:</em> The blind man points at you with trembling finger. "Yours shall be the fate of the niggardly! You are doomed!"</p>
<p><b>No Skill:</b> You depart, troubled by his words. It comes to pass as it was prophesied. [D1/S1/<em>Fated</em>]</p>
<p><b>Piety:</b> You meekly bow your head. "If Allah so wills it, so shall it be." The blind man is abashed by your piety, and together you say many prayers. [D1/S1/Piety]</p>`,
	},
	986: {
		index: 986,
		text: `<p>A blind man sits at a corner, asking for a penny in exchange for a story.</p>
<p><b>No Skill:</b> To honor him, you lay down two pieces of gold. "I do not need your pity!" he cries. [D1/<em>Scorned</em> (1 turn)]</p>
<p><b>Storytelling:</b> You lay down two pieces of gold and cry, "Here! I have a tale I will tell. If your tale is more marvelous than mine, the gold shall be yours." Whereupon you tell an amazing tale. He proceeds to better your tale, to your vast delight. [D1/S2/W-1 (Min: Respectable)]</p>`,
	},
	987: {
		index: 987,
		text: `<p>You stand by the side of a road, next to a blind man. Suddenly, a boy darts in front of a horse, whose careless rider does not see him. Heroically, you leap to the boy's rescue, and discover him to be the Vizier's only son! Thinking to honor the blind man, you tell the onlookers that the old man, not you, rescued the lad.</p>
<p><b>No Skill:</b> Surprised, the blind man protests. The Vizier, bewildered by this strange testimony, takes you to the Sultan's court. Confusion reigns until the truth is properly straightened out. The incident becomes the subject of many tales, and you gain ironic fame for your act. [D1/S1]</p>
<p><b>Beguiling:</b> In a quick aside, you explain to the man that the Vizier's generosity would be wasted on one so fortunate as yourself. The blind man is grateful to you, and wishes you the long and fruitful life of Allah's blessed. [D2/S1/<em>Blessed</em>]</p>`,
	},
	988: {
		index: 988,
		text: `<p>While bathing in a pool, you spy a pitiful blind man walking nearby. Your heart is heavy in sympathy for him. You pray to Allah that his sight may be restored. The man cries out in surprise—his sight is restored to him! The first thing he sees is your clothes, which he promptly steals.</p>
<p><b>No Skill:</b> You marvel at Allah's mysterious ways. [S1/Piety]</p>
<p><b>Piety:</b> Shocked, you exclaim, "Would that Allah strike you blind again, ungrateful one!" Marvelously, this thing occurs; the man cries out again, drops your clothes, and clutches his eyes. Truly Allah knows the best for His followers! [D2/S1/Piety]</p>`,
	},
	989: {
		index: 989,
		text: `<p>A blind old man is asking for alms in the street.</p>
<p><em>You may give him a coin or pray for him:</em></p>
<p><em>If you give him a coin:</em> You give him a coin, and go on your way; for charity is one of the acts demanded of the Faithful. [D1]</p>
<p><em>If you pray, roll one die, adding one for Piety:</em></p>
<p>❖ 1–3: The blind man cries out in pain, "Your prayers will not fill my empty stomach!" You are shamed and disheartened. [D1/<em>Grief Stricken</em>]</p>
<p>❖ 4+: At that very moment the Sultan appears, celebrating the marriage of his son. He gives the poor man a fistful of gold. The man is heartened, and rests his faith thenceforward on the All Powerful One! [D1/S1/Piety]</p>`,
	},
	990: {
		index: 990,
		text: `<p>You spy a blind old man and reflect aloud on your blessings.</p>
<p><b>No Skill:</b> The old man hears your words and is understandably offended. "Yes, it would be too bad if you were also so afflicted, you dog!" He swings wildly at you with his stick. Others snicker at you as you take your leave, the man's curses sounding in your ears. [<em>Scorned</em>]</p>
<p><b>Courtly Graces:</b> Your observation is couched in polite and poetic verse. Those around you conclude you are a wise philosopher. [D1/S1/<em>Respected</em>]</p>`,
	},
	991: {
		index: 991,
		text: `<p>In a desolate area you come upon a wretched old man, lying by the side of the road. He is at death's door.</p>
<p><b>No Skill:</b> There is little you can do for him. You commend him to Allah's mercy. [S1]</p>
<p><b>Storytelling:</b> You take his hand to ease his passage and tell tales of wonder of the gardens of paradise. His eyes fill with tears of gratitude and with his last words he bequeaths his possessions to you, his only friend in his last hour. [D2/S1/W+2 (Max: Rich)/Piety]</p>`,
	},
	992: {
		index: 992,
		text: `<p>A greasy-looking brute asks you to help fleece a wealthy old man. You agree for a share of the profits.</p>
<p><b>No Skill:</b> Your attempt a scheme to make the old man believe in magic lamps. The scheme fails miserably, and he calls for the Sultan's guards. Quickly are you thrown into chains. [D1/<em>Imprisoned</em>]</p>
<p><b>Beguiling:</b> Posing as a genie, you easily separate the old man from a tidy sum. As you remove your makeup, you see your partner disappear in the crowd, with your share of the take. All that work for naught! [D1/S1/<em>Envious</em>]</p>`,
	},
	993: {
		index: 993,
		text: `<p>A grinning ne'er-do-well asks you to lend a hand with a shell game. He tells you which shell the pea will be under so you can "guess" correctly. Onlookers will believe this game is easy and wager many coins on it.</p>
<p><b>No Skill:</b> You perform your role well and make a tidy sum. However, a burly man who was taken for many coins tracks you down and teaches you charity and honesty at the end of a stout stick. [D1/Lose Stealth and Stealing/<em>Wounded</em>]</p>
<p><b>Acting and Disguise:</b> Eventually, the crowd tires of being swindled, and several angry men come for you. Your partner is caught and punished, but you were disguised, and with your clothing changed, none recognize you. You make a tidy profit. [D1/W+1 (Max: Respectable)]</p>`,
	},
	994: {
		index: 994,
		text: `<p>You spy a man selling worthless lamps at exorbitant prices under the pretext that they are magical. You plan to improve his scam and, perhaps, make a little profit for yourself.</p>
<p><b>No Skill:</b> You stand before his stall, pretend great interest in the lamps, encouraging much business. Later, when you explain how much help you have been to the fraud, he sneers and says, "You expect gratitude? Pfah! Get out of here." [S1]</p>
<p><b>Magic:</b> You use minor charms to make the lamps seem magical. So crafty are you that even the swindler is fooled. You convince him to buy back the lamps from the customers (who are friends of yours) at a huge markup. Thus do you make a profit while serving the interests of justice. [D2/S1/W+1 (Max: Rich)]</p>`,
	},
	995: {
		index: 995,
		text: `<p>You witness a young ne'er-do-well cheat an old man at dice. As the young thief moves off, you resolve to rob him and return the money.</p>
<p><b>No Skill:</b> The scoundrel is a tough customer, but Allah aids your cause. You overcome him, gain back the coins, and return them to the old man. [D2/Piety/<em>Blessed</em>]</p>
<p><b>Stealth and Stealing:</b> You catch the con-man by surprise and knock him out. When you hold the coins in your hand, however, your resolve to return the money dwindles, and you add them to your own purse, not mindful of the needs of the old man. [D-1/W+1 (Max: Respectable)/Lose Piety]</p>`,
	},
	996: {
		index: 996,
		text: `<p>As you enter the city, a greasy character offers you "night passes" for a fee. Without them, he explains, you may not travel after dark. You pay, but later learn the passes are frauds. You are determined to regain your money and punish the scoundrel.</p>
<p><b>No Skill:</b> You wait near the gate, hoping to catch sight of the miscreant, but he does not appear. After a few days, pressing business forces you to yield. Your empty pockets haunt you. [D1/W-1 (Min: Respectable)/<em>Envious</em>]</p>
<p><b>Stealth and Stealing:</b> Knowing that the villain will be celebrating his crime, you search the taverns and bawdy-houses of the city. The search takes many hours, but you finally come upon the man. You pummel him senseless and recover your money. Truly Allah rewards those who stick to their tasks! [D1/S1/<em>Determined</em>]</p>`,
	},
	997: {
		index: 997,
		text: `<p>A group of men in a musty alley motion for you to join them. They seek your aid in a scheme to victimize an aged lamp seller. You recognize them for the curs they are.</p>
<p><b>No Skill:</b> You try to warn the lamp seller. The swindlers divine your intent and knock you senseless before you can interfere. [D1]</p>
<p><b>Weapon Use:</b> Instantly laying about you with your weapon, you wound two and scatter the others. You caution the wounded about the inadvisability of cozening old men. [D2/Quick Thinking/Piety]</p>`,
	},
	998: {
		index: 998,
		text: `<p>You see an emaciated man wagering on a dice game.</p>
<p><b>No Skill:</b> Afraid of being cheated, you refuse to participate, though you become the object of some good-natured jeering. [D1/<em>Scorned</em> (1 turn)]</p>
<p><b>Piety:</b> You give the man a coin, saying, "If you are in such need of money that you do this to your brothers, you are in greater need than I." The other man is shamed and abandons his game. [D1/S1/Piety]</p>`,
	},
	999: {
		index: 999,
		text: `<p>In this far-off land, a man approaches, demanding a coin for the Sultan's tribute. "It is the custom, foreigner," he explains.</p>
<p><b>No Skill:</b> Suspecting a con game, you refuse to pay. Unfortunately, he is really a soldier of the Sultan and calls other guards to chastise you for impertinence. [D1/<em>Imprisoned</em> (1 turn)]</p>
<p><b>Scholarship:</b> You recall such a practice in some countries and note the man's garb; he might be a Sultan's guard. You politely explain that you have already given; it did not occur to you to demand a receipt. Although suspicious, he hesitates to contradict you, and you go on your way unmolested. [D1/Choice of Beguiling or Courtly Graces]</p>`,
	},
};
