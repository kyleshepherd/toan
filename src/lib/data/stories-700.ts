import type { Story } from "./stories";

export const stories700: Record<number, Story> = {
	700: {
		index: 700,
		text: `<p>You run for cover and cower in terror as thunder shatters the air and lightning illuminates the sky. The wind screams and batters your body like stones from a sling. Never have you seen such a storm!</p>
<p><b>No Skill:</b> Suddenly it is over as quickly as it came. You sit in awe and ponder the power and caprice of Allah. [D1/S1/<em>Wounded</em>]</p>
<p><b>Sea Space</b> (mandatory): The squall pitches your ship like a toy. The sail is torn away, and the boat heels until the rails dip under. Yet your ship does not capsize, though much cargo is lost, and in the morning the storm is past. You have come upon an unfamiliar shore. [D2/S1/W-1 (Min: Poor)/Seamanship/Move to any coastal space of your choice]</p>`,
	},
	701: {
		index: 701,
		text: `<p>You pause for a moment to marvel at the power of the storm. Suddenly there is a crack and you are struck on the head by flying debris. Dazed, you collapse in a heap.</p>
<p><b>No Skill:</b> When you awake, the storm has passed, but you shiver from cold and exposure. [S1/<em>Insane</em> (1 turn)/<em>Diseased</em>]</p>
<p><b>Determined</b> (mandatory), <b>Enduring Hardship:</b> Your mind is fogged, but somehow you drag yourself out of the rain. By force of will you remain conscious and take precautions against chill. [D2/Enduring Hardship/<em>Determined</em>]</p>`,
	},
	702: {
		index: 702,
		text: `<p>You huddle in your meager shelter, murmuring to yourself in wonder at the fury of the gale, while at the same time praying for it to stop.. Suddenly, outlined against the sheets of rain, you see a dark shape floating before you.</p>
<p><b>No Skill:</b> It turns and stares at you. It is fearsome to behold! With a shudder of terror you collapse. [S1/<em>Insane</em>]</p>
<p><b>Scholarship:</b> This is a Storm Hound, one of the types of marid. Your faith in Allah allows you to stare it in the eye without flinching, and the creature continues on its way. [D1/S2/Enduring Hardship]</p>`,
	},
	703: {
		index: 703,
		text: `<p>The gale howls and debris is tossed about by the violent wind. Hailstones batter you and the dropping temperature chills your bones. Your prayers rise to heaven.</p>
<p><b>No Skill:</b> More hailstones come down, and you are left sick and shivering. [S1/<em>Diseased</em>]</p>
<p><b>Piety:</b> Your richness of faith allows you to withstand the physical assault. [D1/Enduring Hardship]</p>`,
	},
	704: {
		index: 704,
		text: `<p>Swirling clouds of sparkling mist surround you! A dark, funnel-shaped cloud emerges, and from it steps a huge 'efreet, bellowing in rage as he destroys all within his reach.</p>
<p><b>No Skill:</b> Desperately you fall to your knees and invoke the name of Solomon. To your great relief, the awful being turns away from harming you. [D2/Piety]</p>
<p><b>Magic:</b> You begin to pray, but your pride tempts you to use your magic to bind this powerful being. How you regret your vanity when your incantations only call his attention to you. Howling with glee, he reaches out, and his magic works terrible damage upon you... [D2/S1/<em>Ensorcelled</em>/<em>Beast Form</em>]</p>`,
	},
	705: {
		index: 705,
		text: `<p>The heavens above you are illuminated by flashing light, and the air is rent by screaming winds! The 'efreets war amongst themselves in the sky above you! You pray for deliverance. Unfortunately, your prayers attract the interest of one of these magical beings, who swoops down, grabs you, and carries you off with a roar of laughter.</p>
<p><b>No Skill:</b> You faint with fear and awake in a strange place. [S1/<em>Lost</em>/Have another player move you to any space except a Place of Power]</p>
<p><b>Seduction:</b> The djinni is most attractive! You use your charms to convince the mighty being to carry you to its home and tarry with you awhile. [D1/S1/Move to the Dusky Land and have an immediate encounter]</p>`,
	},
	706: {
		index: 706,
		text: `<p>The storm arrives with unnatural swiftness. There is a strange, golden sparkle in the air.</p>
<p><b>No Skill:</b> Your tongue cleaves to your mouth and you cannot speak. As the storm passes over you, you feel... changed. You gasp in horror as you run your furry red hands over your furry red chest. [S1/<em>Beast Form</em>]</p>
<p><b>Piety:</b> You are filled with serene confidence, and overcome your terror to invoke the Almighty with praise. The sparkling rain diverts from its course as it approaches you, passes, and leaves you unharmed. [D2/S1/Piety]</p>`,
	},
	707: {
		index: 707,
		text: `<p>As the weirdly flashing storm front approaches, you resolutely stand your ground, for there is little else to do.</p>
<p><b>No Skill:</b> Soon it becomes apparent that the storm will miss you. You sigh with relief. [D1/<em>Determined</em>]</p>
<p><b>Quick Thinking</b> (mandatory): The storm front is approaching rapidly. You lose your nerve and try to avoid it. However, your quick wits betray you, for you outsmart yourself and put yourself right in its path. Perhaps it was the will of Allah that you be drenched in its enchanted rains. As you shiver in the downpour, you feel something insidious invade your soul... [S1/<em>Ensorcelled</em>]</p>`,
	},
	708: {
		index: 708,
		text: `<p>The landscape is illuminated by weird flashes of light, and glowing forms swirl and tumble through the clouds.</p>
<p><b>No Skill:</b> Whatever is taking place, you're glad you're well-hidden. [S1]</p>
<p><b>Stealth and Stealing:</b> After this unnatural display has subsided, your curiosity about strange phenomena draws you to where the storm seemed strongest; perhaps you will find something of value there. There you find an old man, dead, with a look of unspeakable horror on his face. In his hand is a strange object.</p>
<p><em>You may pick it up or go on your way:</em></p>
<p><em>If you go on:</em> [S2]</p>
<p><em>If you pick it up, roll two dice, adding one if you have Magic and three if you have the Protective Talisman:</em></p>
<p>❖ 2–7: The object is an ancient focus of evil sorcery. When you touch it, you are suddenly surrounded by leering lower djinns who promise you everlasting torment for your rash action. They hound you as you flee. [D2/S1/<em>Accursed</em>]</p>
<p>❖ 8+: The object is one of the legendary magical treasures of ancient fable. You offer up a prayer for the old man's soul. [D1/S1/<b>Treasure</b>]</p>`,
	},
	709: {
		index: 709,
		text: `<p>You take shelter against the rain and wind, but it cannot protect you from the magical nature of the storm.</p>
<p><b>No Skill:</b> Great glowing forms wreathed in flame appear in the air before you, and you whimper in terror. "What?" a powerful voice booms. "Another ugly mortal?" "Here," rumbles another voice, "I can fix that." There is a loud *poof* and you feel... changed. [S1/Appearance/<em>Sex-Changed</em>]</p>
<p><b>Magic:</b> You quickly murmur the words of an ancient charm against storms, and hope for the best. Fortunately, the storm passes away. [D1]</p>`,
	},
	710: {
		index: 710,
		text: `<p>Strange black streamers radiate from a swirling vortex of smoke and flame. Every way you turn, it is there before you. Suddenly you are enveloped, and the deeds of your life are spread out before you.</p>
<p><b>No Skill:</b> The welter of sounds and images is too much for your fear-frenzied mind to comprehend. [D1/<em>Insane</em>]</p>
<p><b>Enduring Hardship:</b> You look on them without flinching, and are illuminated. The swirling cloud resolves itself into a glowing 'efreet. "I am of the True Believers," he says, "and you have proven yourself. I place in your hands this great treasure for safekeeping." [D2/S1/<b>Celestial Planisphere</b>]</p>`,
	},
	711: {
		index: 711,
		text: `<p>You have heard tales of the tragic fates of those caught in such unnatural disturbances, and you flee as fast as you can. In the course of your flight, you spot a lone dervish lost in his devotions.</p>
<p><b>No Skill:</b> You call his attention to the approaching conflagration, and he thankfully joins you. [D1/S1]</p>
<p><b>Magic, Scholarship</b> (All mandatory): Curiosity overcomes your impulse to warn the dervish; you remain at a distance to note the effects of the vortex on the holy man. You are appalled at the result, and stricken with remorse. However, you did learn much from witnessing his grisly demise. [S1/Scholarship/<em>Accursed</em>/<em>Grief Stricken</em>]</p>`,
	},
	712: {
		index: 712,
		text: `<p>A great cloud of silvery light bobs toward you. You see patterns of movement within it, but cannot make sense of them without drawing nearer.</p>
<p><b>No Skill:</b> You are too prudent to do that, and you go on your way. [S1]</p>
<p><b>Magic:</b> There is a spirit trapped within the cloud of light. You focus your arcane powers and manage to release it from captivity. The grateful 'efreet tells you of battling a wizard for possession of a magical item. He was victorious, but suffered the wizard's final curse, and was set drifting in the sphere of light. He is grateful to you for freeing him, and offers you the treasure he wrested from the wizard. [D2/S1/<b>Treasure</b>]</p>`,
	},
	713: {
		index: 713,
		text: `<p>Curious about the nature of such events, you observe the interplay of unearthly forces as objects are turned and tossed in the air and colorful lights illuminate the vault of heaven.</p>
<p><b>No Skill:</b> Unfortunately, your ignorance of your peril permits you to fall victim to the malign influences at work, and you feel a black doom cover your soul. [D1/<em>Accursed</em>]</p>
<p><b>Scholarship:</b> You learn much from your observations, and are protected by your mystic knowledge from the effects of the storm. [D1/S1]</p>`,
	},
	714: {
		index: 714,
		text: `<p>A great cloud like a column of silvery smoke rises from over the horizon. It thickens as you draw near.</p>
<p><em>Roll one die:</em></p>
<p>❖ 1–3: You see that the smoke is coming from a censer. [Go to paragraph 316]</p>
<p>❖ 4+: There stands before you an island in the middle of a large body of water. In the center of it there is a great rent in the earth from which a multitude of 'efreet rise in great turmoil and confusion. Suddenly one of the beings spies you and claps his hands with glee, pronouncing a spell in a strange tongue.</p>
<p><b>No Skill:</b> You feel as though you have been struck by lightning. When you look down, you have the form of a great ape. [S2/<em>Beast Form</em>]</p>
<p><b>Protective Talisman</b> (mandatory): You are protected by your faith and your skill from the effects of the 'efreet's curse. As for him, a few words from you and he is blasted back to the Dusky Land. At another word, the waters of the lake rush forward and fill the hole in the earth. [D2/S2]</p>`,
	},
	715: {
		index: 715,
		text: `<p>Your voice attracts a spirit residing within the cloud of sparkling light. The indistinct form leaps forward and engulfs you, then passes again into the cloud.</p>
<p><b>No Skill:</b> You struggle but find that your will is not your own. You turn and follow the cloud wherever it will go. [D1/<em>Ensorcelled</em>]</p>
<p><b>Enduring Hardship:</b> You struggle against the charms of the evil spirit. Your will prevails over the charm of the magical being and the cloud drifts away. [D2/S1/<em>Determined</em>]</p>`,
	},
	716: {
		index: 716,
		text: `<p>A maelstrom of light suddenly springs up and envelops you. The din is so great and the light so bright you are deafened and dazzled. Your voice is lost in the tumult.</p>
<p><b>No Skill:</b> When the storm has passed, you are still shouting and groping and stumbling—deaf, blind, and raving with madness. [D1/S1/<em>Insane</em>]</p>
<p><b>Luck:</b> Miraculously, your cry was heard by a passing 'efreeteh who takes pity on you and snatches you out of danger.</p>
<p><em>If you are female or Married:</em> She teaches you a charm to protect you from such perils. [D2]</p>
<p><em>Otherwise:</em> She is overcome with longing for you, and you drink in her enchanted beauty. She is long of limb and full of breast. The love of the People of the Fire is like that of mortals, but more exhausting, and when you are finished, she does not wish to be parted from you. [D2/<em>Beloved</em>]</p>`,
	},
	717: {
		index: 717,
		text: `<p>A strange warm rain falls from a cloudless sky. The drops tingle and taste like spiced wine, and a pleasant sensation courses through your body, causing you to cry out in joy. [D1/S1/Lose any statuses of your choice]</p>`,
	},
	718: {
		index: 718,
		text: `<p>Great black drops of water plop down all around you.</p>
<p><b>No Skill:</b> You stick out your tongue to catch a drop. It burns like fire! You cough and spit but cannot rid your mouth of the poisonous taste. [<em>Diseased</em>]</p>
<p><b>Luck:</b> You note a beast about to lap at a small pool of the fluid. The creature squeals in discomfort, and keels over like a stunned mule. You take this as a sign, and you are careful to shelter your mouth and eyes against the poison. [D1/S1/Wisdom]</p>`,
	},
	719: {
		index: 719,
		text: `<p>You have heard legends of those who drink from such enchanted waters and find themselves imbued with great sorcerous powers.</p>
<p><b>No Skill:</b> Tempted, you chance a drink. You feel yourself transformed, but not as you'd hoped! In a reflective pool of water, you see the features of a great ape! This is your reward for not trusting the guidance of Allah. [D1/<em>Beast Form</em>]</p>
<p><b>Wilderness Lore:</b> You have observed many apes near here, but you know they do not occur naturally in these parts. You make the obvious connection and do not drink from this enchanted fountain. [D1/S1/Wisdom]</p>`,
	},
	720: {
		index: 720,
		text: `<p>The other eyes you with disapproval as you give him a wide berth.</p>
<p><b>No Skill:</b> "You think that you can just pass a noble and powerful being such as I? You shall wish you did not insult me so." [S1/<em>Accursed</em>]</p>
<p><b>Acting and Disguise:</b> The other thinks you must be a powerful wizard and avoids you as well. [Luck]</p>
<p><b>Luck:</b> The other calls to you by name, and you turn to face him. In his hands is a bag of gold. "I believe you dropped this, did you not?" You say that you did not, and the other is impressed with your honesty, and gives you a blessing before departing. [D2/<em>Blessed</em>]</p>`,
	},
	721: {
		index: 721,
		text: `<p>Fingering a bauble around their neck, the other approaches you. "Will you assist me in a very lucrative adventure?"</p>
<p><b>No Skill:</b> You pass by the other without another thought. [D1]</p>
<p><b>Bargaining and Evaluation:</b> As you pass by the other, you can't help looking at their bauble, trying to determine its value. Next thing you know, you awaken in an unfamiliar area, with a heavy purse lying next to you. Apparently, the adventure was very lucrative - too bad you don't know what kind of adventure it was. [D1/S1/W+1 (Max: Rich)/Have another player move you three spaces in any direction]</p>`,
	},
	722: {
		index: 722,
		text: `<p>The other is most impressive, but also most foreboding, and you pass on by. [D1]</p>`,
	},
	723: {
		index: 723,
		text: `<p>You are most interested in the other, but you feel that time is of the essence, and head on to your destination rather than tarry overly long here. [Courtly Graces]</p>`,
	},
	724: {
		index: 724,
		text: `<p>Never have you seen such a one, nor ever again are you likely to, for you soon leave them behind as you journey on. [Bargaining and Evaluation]</p>`,
	},
	725: {
		index: 725,
		text: `<p>You want nothing to do with the other and wisely pass by.</p>
<p><b>No Skill:</b> You continue on your journeys for many days. [Wilderness Lore]</p>
<p><b>Accursed, Fated, Outlaw, Pursued</b> (All mandatory): The other spies you and calls attention to you. "That is the one! That is the one!" You try to escape but they are too cunning for you and you are cornered.</p>
<p><b>No Skill:</b> They beat and rob you before turning you in to the authorities for crimes you may or may not have committed. [<em>Imprisoned</em>/Lose <em>Outlaw</em> and <em>Pursued</em>]</p>
<p><b>Wilderness Lore:</b> You notice that your assailants are all plagued with a rash that has a hardly known cure. You offer to heal them if they let you go. They are amenable to this and after they see progress in their healing, they keep their word. [D2/S1/Quick Thinking]</p>`,
	},
	726: {
		index: 726,
		text: `<p>As you kneel before the fire, a wreath of fire floating in mid-air appears before you. Strange voices echo in your ears, summoning you to the flames.</p>
<p><b>No Skill:</b> You close your eyes and concentrate on your prayers to throw off the fatal call. Soon the voices fade and, when you open your eyes, the flames are gone. You feel that you have passed a great test. [D2/Enduring Hardship]</p>
<p><b>Fated, Insane, Beguiling</b> (All mandatory): The voices speak to you in a voice that drips cunning, and promises you the fulfillment of all your dreams and ambitions, if only you will submit yourself in worship to the flames. You resist the siren call as long as you can, then suddenly succumb and leap into the fire. The voices turn to cruel mockery and laughter as you burn in great pain and are finally consumed. [Death]</p>`,
	},
	727: {
		index: 727,
		text: `<p>Blue, green, and violet flames surround you, but the flames cannot touch one who speaks the name of Allah.</p>
<p><b>No Skill:</b> Soon the flames die away, leaving you unscathed. [D1/S1/Piety]</p>
<p><b>Accursed, Envious, Grief Stricken</b> (All mandatory): You struggle to focus your devotion, but terror weakens you. Your concentration falters and you are blasted by the uncanny flames. [D1/S1/Lose Piety/<em>Wounded</em>/<em>Insane</em>]</p>`,
	},
	728: {
		index: 728,
		text: `<p>Flames dance before your eyes, and you cannot tear yourself away. You are being absorbed into the weird, rhythmic flickering.</p>
<p><b>No Skill:</b> You reach for the fire and you are trapped! A tongue of flame pierces your head, burning with the pain of a thousand deaths. You scream as you feel the flame wrap around your mind and take control. Dazed, you touch your temple, and discover that the flame has left no mark—yet you can feel it in your mind still, controlling your very self. [D1/<em>Ensorcelled</em>]</p>
<p><b>Piety:</b> The flame of your faith burns higher than the unholy flames of the mystical fire. You resist the enchantment and turn away. When you turn back, the flames are gone. [D2/Piety]</p>`,
	},
	729: {
		index: 729,
		text: `<p>The unearthly fire fascinates and hypnotizes you.</p>
<p><b>No Skill:</b> The flames suddenly swirl and coalesce into the form of a mighty 'efreet. "Who dares come before me without permission?" he roars. One gesture and you are blasted by his malevolent power, and your mind is no longer your own. [D-1/<em>Ensorcelled</em>]</p>
<p><b>Protective Talisman:</b> The flames are most interesting but caution dictates that you observe them from a safe distance. You force yourself to withdraw, turning back only when you are far away. To your amazement, the flames have disappeared without a trace! [D1/S1/<em>Determined</em>]</p>`,
	},
	730: {
		index: 730,
		text: `<p>Your gaze is riveted to the flickering flames that burn without fuel. Voices speak in your head, whispering laments that wrench your heart with sorrow.</p>
<p><b>No Skill:</b> Overcome with grief, you stagger away. [S1/<em>Grief Stricken</em>]</p>
<p><b>Enduring Hardship:</b> Your heart is heavy with melancholy, but you control your grief and stare resolutely into the flames, hoping for an insight into the nature of the enchantment. As you watch, the flames recede, revealing that they hid a remarkable treasure. [D2/S2/<b>Treasure</b>]</p>`,
	},
	731: {
		index: 731,
		text: `<p>Strange sparks like glowing snowflakes are drifting from the window of a small, isolated hut. Alarmed, you crouch down in the shelter of tall shrubs.</p>
<p><b>No Skill:</b> You hide in fear for awhile, averting your eyes from the strange sight. Finally you gather enough courage to look up—and discover it has vanished! [S1]</p>
<p><b>Stealth and Stealing:</b> Though frightened, you approach the hut, moving silently through the brush. A wizened figure in colorful robes emerges. You take a chance, running through the door as the wizard steps away. Inside, resting near a forge, is a magically glowing spear. You snatch it and dash off into the darkness, the wizard's howls of rage echoing behind you. [D1/S1/<em>Pursued</em> (WIZARD)/<b>Sparkling Spear</b>]</p>`,
	},
	732: {
		index: 732,
		text: `<p>You find your path blocked by a bloom of fire. As you run for cover your ears are filled by a great cry of agony and despair.</p>
<p><b>No Skill:</b> Your fear is too great—you dive into shelter and huddle, shivering in terror. The screams continue, and then finally fade into the distance, but their chilling cadences linger, chilling your soul. [D-1/S1/<em>Grief Stricken</em> (1 turn)]</p>
<p><b>Determined</b> (mandatory), <b>Enduring Hardship, Weapon Use:</b> At the cry, you rush back to rescue whoever is in trouble. It is a fair maiden, caught in the embrace of a fiery creature! You grab the maiden, drive off the demon, and run for your life.</p>
<p><em>If you are female or Married:</em> Praise Allah you acted with such speed, else she surely would have perished. She becomes your lifelong friend. [D2/S1/Quick Thinking]</p>
<p><em>Otherwise:</em> Praise Allah you acted with such speed, else she surely would have perished. She clings to your heroic frame and gazes at you with love. You gaze down on her lovely frame, perfectly formed from eyes to ankles, and pull her close. [D1/S1/Quick Thinking/<em>Beloved</em>]</p>`,
	},
	733: {
		index: 733,
		text: `<p>You scream in terror as a gout of flame issues from the earth around you. Many people come to your aid at the sound of your cry. Before they arrive, the fire disappears as suddenly as it came, leaving no sign of its presence.</p>
<p><b>No Skill:</b> The others disbelieve your story and think you are crazy. [S1/<em>Scorned</em>]</p>
<p><b>Storytelling:</b> Your story is so vivid that the others believe you. They are filled with wonder and awe at the marvels of Allah's creation. [D1/S1]</p>`,
	},
	734: {
		index: 734,
		text: `<p>A swirl of blue flame appears out of nowhere. At the sound of your terror-stricken cry, the cloud of fire forms into a small 'efreet, who apologizes profusely for frightening you.</p>
<p><b>No Skill:</b> All you can do is stammer in terror. Shaking his head, the 'efreet dissolves into a cloud of blue flame and disappears. The sight of his body being consumed by flame is more than you can bear to watch. [S1/<em>Insane</em>]</p>
<p><b>Quick Thinking:</b> You quickly and bravely scold him for his rude behavior, causing him to wince in shame. "I'm terribly sorry. I mean no harm. Please take this as a token of my regret." He gestures and disappears, leaving an interesting item in his wake. [D1/S1/<b>Treasure</b>]</p>`,
	},
	735: {
		index: 735,
		text: `<p>A bright ball of light bounces in front of you, then away, then close, then away. As you cry out in surprise, a strange old man hobbles into sight, calling "Imalzyar! Get back in your cage!" The ball of light seems to shrink, then moves off. The man apologizes for the shock his "pet" has given you.</p>
<p><b>No Skill:</b> He presents you with a small gift. [S1/<b>Copper Drum</b>]</p>
<p><b>Magic:</b> Amazed by his skill, you beg to be his apprentice in the mystic arts. After testing your wit and ability and finding you to be one of high quality, he accepts. [D1/Lose Piety]</p>`,
	},
	736: {
		index: 736,
		text: `<p>The whirlpool opens beneath the ship—there is no time to avoid it. At its center is a small gleaming tower of rock, wreathed in a clutter of metal. Could it be magnetic?</p>
<p><em>You can jettison all things metallic or trust in your abilities to sail on:</em></p>
<p><em>If you dump your metal:</em> Once free of the magnetic pull, the ship sails away easily. Unfortunately, you lost a great deal of wealth, and the other passengers, disbelieving your story of a "magnetic island," consider you feeble-minded. [D1/S1/W-2 (Min: Poor)/<em>Scorned</em>]</p>
<p><em>If you sail on, roll two dice, adding one for Seamanship:</em></p>
<p>❖ 2–7: You try to sail out of the whirlpool, but it is too powerful. The ship is wrecked, and you are cast up on a distant shore. [W-2 (Min: Beggar)/Have another player move you to any coastal space]</p>
<p>❖ 8+: You bravely fight against the whirlpool, and finally triumph! You succeed in saving the ship and all who are on it. The other passengers praise you for your supreme skill. [D2/S2/Seamanship/<em>Respected</em>]</p>`,
	},
	737: {
		index: 737,
		text: `<p>You and the crew struggle to wrest the ship from the grasp of the whirlpool, but your ears are filled with a strange high song, calling you forward to your doom. You cannot resist their lure.</p>
<p><b>No Skill:</b> The ship is sucked down into the vortex, and torn to splinters. As the prow strikes the rocks, the voices change to cruel laughter, and you are freed from their spell. You swim for your life. [D1/S1/W-2 (Min: Penniless)/Go to paragraph 315]</p>
<p><b>Scholarship, Storytelling:</b> You recognize the call of the sirens from the old tales. Plugging the ears of the crewmen, you bind yourself to the mast that you might hear the siren's song. The crew, protected from the song, brings the ship through safely. [D2/S2/Quick Thinking/<em>Respected</em>]</p>
<p><b>Ensorcelled</b> (mandatory): Alas, your magically befuddled state prevents you from recognizing the siren's calls for what they are. For a moment the two enchantments war, but the stress is too much for you. As the lure of the sweetly singing voices destroys your reason, the powerful enchantment gripping your mind erodes your wisdom, until finally both lose their hold on you, their battleground—your mind—forever vanished. [Death]</p>`,
	},
	738: {
		index: 738,
		text: `<p>You prudently give the churning waters a wide berth, though it causes you a delay as you search for a safer course. [On your next turn, move as if your wealth were Beggar, then return to your normal movement speed]</p>`,
	},
	739: {
		index: 739,
		text: `<p>A narrow passage between two rocks is difficult because of tricky currents. Once you enter the gap, you notice the terrible undercurrent pulling the ship to the rocks.</p>
<p><b>No Skill:</b> You shout a command to change course, but the helmsman cannot hear you in the roar of the whirlpool. With a crash, the keel shatters on the rocks. [W-2 (Min: Penniless)/Go to paragraph 315]</p>
<p><b>Seamanship:</b> The helmsman would never be able to hear your command to change course over the roar of the whirlpool below. Thank Allah you thought to call for signal flags! With them, you easily guide the ship to a safer place. [D2/S1/Wisdom]</p>`,
	},
	740: {
		index: 740,
		text: `<p>A merman appears and hails you. "Welcome, travelers. It appears you'll be joining me shortly."</p>
<p><b>No Skill:</b> Chuckling merrily, he dives. You trade looks of puzzlement with the other passengers... until you hear the roar of the whirlpool at your bow, and all becomes clear. You cry out as the ship is drawn in and bursts upon the rocks, and you barely manage to swim to safety. [D1/S1/W-2 (Min: Beggar)/Have another player move you to any coastal space]</p>
<p><b>Courtly Graces:</b> Before the merman can slip away, you greet him courteously and ask him the significance of his jest. Your manners cause him to regret his uncouth joke, and he warns you of the whirlpool up ahead. Forewarned, you easily avoid the danger, and sail on. [D1/S1/Courtly Graces]</p>`,
	},
	741: {
		index: 741,
		text: `<p>Near dusk, you are startled by the roar of turbulent water. Rushing to the bow, you find a huge whirlpool opening up before you. You shout for help.</p>
<p><b>No Skill:</b> There is no one nearby. Besides, there is precious little anyone could do to save you. Your ship is sucked in, ground up, and spat out like gristle, and you float on a piece of driftwood. You float for some time when a merchant ship happens to spot you. You are taken onboard and asked to relate your tale.</p>
<p><b>No Skill:</b> The story of your adventures and your near-death experience makes an impact with everyone. The merchants each give you a little money and the captain sets you down at the next port. [S2/W+1 (Max: Rich)/Move to any coastal space]</p>
<p><b>Bargaining and Evaluation:</b> The tale you tell also shows off your virtuousness and one of the merchants is taken by your words. He offers to hire you to help him sell his wares.</p>
<p><em>If you agree:</em> you visit many wondrous ports and help the merchant not only sell his goods but sell them at great prices. When all the merchant's goods are sold, he repays you with a large bag of gold and wishes you all the blessings of Heaven. [D1/S1/W+2 (Max: Rich)/Move to any coastal space]</p>
<p><em>If you decline:</em> The merchant blesses you, gives you some money and the captain lets you off at the next port. [S1/W+1 (Max: Respectable)]</p>
<p><b>Scholarship:</b> Inspired, you think to cry out for help in the tongue of the sea-people. A host of mermen appear to guide your boat out of danger, but they ask for a fee.</p>
<p><em>If your wealth is Poor or greater and you choose to pay them:</em> You gladly pay their price, and they rescue your ship. [D2/S1/W-1 (Min: Poor)/Wisdom]</p>
<p><em>Otherwise:</em> They are offended by your miserliness and abandon you on a small island. [D2/S1/Have another player move you to any island space]</p>`,
	},
	742: {
		index: 742,
		text: `<p>You and the crew rush forward to view the giant black whirlpool below your ship.</p>
<p><b>No Skill:</b> You shout at the top of your lungs, directing the crew to trim sails and shift course. Suddenly, the waters shoot up before you in a great fountain! To the surface floats a huge dendan, slain by the sound of the human voice, just as the legend says, and with its death the waters grow calm. You swim out to the dendan, and cut it open with a knife to claim some of the oil-laden blubber within. Before you can claim more than a handful, the body sinks beneath the waves. [D2/S2/W+1 (Max: Rich)/<b>Dendan Oil</b>]</p>
<p><b>Courtly Graces</b> (mandatory): You give your orders in a calm, quiet voice, for you are far too refined to shout. Little do you realize that the swirl of waters is caused by the fierce actions of a dendan, who would have been slain by a shout. The whirlpool grows great beneath your boat and sucks it down into the depths. [D1/S1/W-2 (Min: Poor)/Move to any coastal space]</p>`,
	},
	743: {
		index: 743,
		text: `<p>You marvel at the sight of the black waters churned to a froth beneath the ship. You cast a bucket in the water and haul it up, and discover it to be full of tiny black fish.</p>
<p><b>No Skill:</b> They are obviously the cause of the disturbance, and not very interesting. [Seamanship]</p>
<p><b>Wilderness Lore, Scholarship:</b> You recognize these as the favorite food of the dendan. From your studies, you know the dendan can be slain by the shout of men, so you raise a great cry. Soon, a huge shape floats to the surface. The dendan is taken aboard and rendered for fat and bone, and you take a fair share of the earnings of the sale of the corpse and a vial of its most marvelous oil. [D1/S1/W+1 (Max: Rich)/<b>Dendan Oil</b>]</p>
<p><b>Beast Form</b> (mandatory): Abruptly, a huge dark shape becomes apparent in the water, feeding on the tiny fishes. You recognize it as a dendan, the giant sea creature which is poisoned by human flesh and killed by the sound of the voice of a true human. You begin to call out loudly, but it appears that in your transformed state that whatever virtue your voice had is lost. The creature swings its mighty head against the side of your ship, starting leaks below decks and casting you over the side and into its gigantic maw. You are quickly devoured, but you may take comfort in the fact that, upon your demise, your body reverts to the form it had at your birth. With a gulletful of human flesh, the creature is poisoned, and rises belly-first to the surface. You cease to be, but are remembered long after for having rid the sea of a great menace. [Death]</p>`,
	},
	744: {
		index: 744,
		text: `<p>You struggle to avoid the swirling waters of the whirlpool, but your ship is being sucked inexorably in. Suddenly you spy a rocky reef.</p>
<p><b>No Skill:</b> You run the ship aground. The repairs will be costly, but you have saved the ship. [D1/S1/W-1 (Min: Poor)/Luck/<em>Respected</em>]</p>
<p><b>Seamanship:</b> You sail for the far side of the reef, using it as a shelter from the killing current. You smoothly guide the ship past the whirlpool and into safer water. [D2/S1/Seamanship/<em>Respected</em>]</p>`,
	},
	745: {
		index: 745,
		text: `<p>You gape at the whirlpool, disbelieving what you see! Incredibly, the funnel of dark water leads directly to the ocean bottom!</p>
<p><b>No Skill:</b> Terror grips you as you feel the boat drawn down! You wrench at the tiller and manage to break free of the whirlpool's grip. [D-1/S1]</p>
<p><b>Scholarship, Storytelling:</b> The ocean floor is crowded with the towers of a splendid city! You've heard tales of a kingdom beneath the ocean, so you gather your courage and jump overboard. [D2/S1/Opportunity to enter the Undersea Kingdom]</p>`,
	},
	746: {
		index: 746,
		text: `<p>The great whirlpool seems harmless enough, as long as you keep a respectful distance.</p>
<p><b>No Skill:</b> You thought you had maintained a sufficient distance, but you were wrong. Your ship is sucked in, but to your amazement it is not destroyed! You emerge, shaken but alive, a much greater distance away than you had intended. Much of your cargo was washed overboard, but better that then your death... [D1/S1/W-2 (Min: Beggar)/Have another player move you to any coastal space]</p>
<p><b>Seamanship</b> (mandatory): Your knowledge of the sea has led you astray, for to your great surprise the whirlpool chases after you and engulfs you! You emerge, with your ship badly damaged, a great distance away. [D1/S1/W-2 (Min: Beggar)/Have another player move you to any coastal space]</p>`,
	},
	747: {
		index: 747,
		text: `<p>You start to steer clear of the whirlpool.</p>
<p><b>No Skill:</b> The currents around this danger are unusual, and you know not which way to go. You make a lightning-fast decision, and, not coincidentally, the wrong one. The ship sinks, and you wash up on a distant shore. [D1/S1/W-2 (Min: Beggar)/Have another player move you to any coastal space]</p>
<p><b>Seamanship:</b> You carefully and quickly judge the currents and, with a small prayer to Allah, steer hard to windward—and you save the ship! [D1/Quick Thinking/<em>Respected</em>]</p>`,
	},
	748: {
		index: 748,
		text: `<p>You stand at the helm of the ship as it is drawn closer and closer to the maelstrom! "What are you waiting for?" screams a crewman.</p>
<p><b>No Skill:</b> You are paralyzed with fear. The crewman grabs the tiller and saves the ship. You are berated by the other crewmen and shunned for your cowardice. [D-1/S1/W-1 (Min: Respectable)/<em>Scorned</em>]</p>
<p><b>Wisdom:</b> Allah help you—you must make the decision! Praying for wisdom, you clench your teeth, turn the tiller and... save the ship! [D2/S1/Luck/<em>Respected</em>]</p>`,
	},
	749: {
		index: 749,
		text: `<p>You freeze in terror as the water churns below the ship. The crew and passengers shriek in terror. Fortunately, the disturbance abates.</p>
<p><b>No Skill:</b> You are accused of cowardice. [D-1/S1/<em>Scorned</em>]</p>
<p><b>Beguiling:</b> The people mistake your paralysis for composure and confidence in a crisis, and you wisely do not correct them. [D1/S1/Acting and Disguise/<em>Respected</em>]</p>`,
	},
	750: {
		index: 750,
		text: `<p>Evil-smelling steam rises from churning waters. You cry, "There is no strength or power save in Allah," but still your ship is sucked down. You emerge in an 'efreet-haunted land.</p>
<p><b>No Skill:</b> You slip gratefully into insanity, and when you return to wakefulness, you are again in the world of men. [D1/S1/<em>Insane</em>]</p>
<p><b>Enduring Hardship:</b> Though stunned by shock and terror, you retain your sanity and look around you. [D2/S1/Piety/Move to the Dusky Land and have an immediate encounter]</p>`,
	},
	751: {
		index: 751,
		text: `<p>You beseech Allah for deliverance from this peril.</p>
<p><b>No Skill:</b> The passengers hear your hysterical performance and are terrified. The captain swears to dump you overboard if you act this way again, for he cannot risk having panic spread throughout his ship. [D-1/S1/<em>Scorned</em>]</p>
<p><b>Wisdom:</b> You wisely choose to pray quietly, that others might take example from your calm, and the ship survives the perilous encounter. [D1/S1/Piety]</p>`,
	},
	752: {
		index: 752,
		text: `<p>Your ship is caught, and appears certain to descend into the dark funnel. You pray for guidance.</p>
<p><b>No Skill:</b> As you kneel in prayer, you see rats abandoning the ship and swimming toward a distant island. You wisely decide to follow suit. [D1/S1/W-1 (Min: Poor)/Move to any island space of your choice]</p>
<p><b>Fated, Accursed</b> (All mandatory): While you pause to pray, the ship is destroyed. You survive by clinging to a wooden tub. [Go to paragraph 315]</p>`,
	},
	753: {
		index: 753,
		text: `<p>You beseech Allah for guidance as your ship is destroyed. While floating on a piece of driftwood, you reflect on this.</p>
<p><b>No Skill:</b> Fate, you realize, is often unkind, and you are often unlucky. [S1/Move to any coastal space]</p>
<p><b>Piety:</b> Who can comprehend the works of Allah? A greater devotion might bring you wisdom. You resolve to journey to Mecca to bring yourself closer to the wisdom of the Lord of the Seen and the Unseen. As this resolve forms in your mind, the whirlpool disappears. Surely this is a sign of the Mercy of the One God! [D2/S1/Wisdom/<em>On Pilgrimage</em>]</p>`,
	},
	754: {
		index: 754,
		text: `<p>The swirling sands suddenly resolve themselves into the shape of an 'efreet of commanding stature. "Allah help me," you whine.</p>
<p><em>Roll two dice, adding one each for Appearance, Fated, and Protective Talisman:</em></p>
<p>❖ 2–7: The 'efreet roars, "How dare you bring THAT name to this land!" He hurls you a great distance, and you land with a painful thump far from the roads you know. [D1/S1/<em>Wounded</em>/<em>Lost</em>]</p>
<p>❖ 8+: The djinn smiles and says, "Be of good cheer, for I am of the Believing Djinn, and your words are a comfort to me." You converse with the 'efreet for many an hour, and gain many insights into the nature of his people. [D2/S1/Piety]</p>`,
	},
	755: {
		index: 755,
		text: `<p>The howling wind drives bits of sand into your eyes. You can hardly draw breath or speak.</p>
<p><b>No Skill:</b> You choke on the driving sands. As darkness falls you are still are buffeted by the sand. When dawn comes, you are amazed to discover that you still live, for your pains are too great for you to be in paradise, yet less than the torment of the damned. You struggle to your feet and discover that in the storm, you wandered far from your path, but what greets your eyes is a wondrous sight! [D1/Move to the City of Brass and have an immediate encounter]</p>
<p><b>Wilderness Lore:</b> You realize that the gravest danger is from suffocating on the sand, and carefully cover your mouth and nose with cloth. You stumble on, and finally the storm passes. Lo! There is another unfortunate traveler half-buried in the sand. You pull him out, and he praises you to the One God for delivering him from certain death! [D1/Luck/<em>Blessed</em> (1 turn)]</p>`,
	},
	756: {
		index: 756,
		text: `<p>Your voice is dwarfed by the roar of the wind. Your throat is parched and your eyes blinded.</p>
<p><b>No Skill:</b> You have exhausted yourself in futile cries for help. You are battered and nearly killed by the storm, but you survive. [D1/<em>Crippled</em>]</p>
<p><b>Enduring Hardship:</b> Your suffering and confusion are great, but you persevere, though you are battered by the storm. Finally, your cries are answered, and you are led to safety. What fortune that there was someone to hear your cries! [D2/S1/Luck/<em>Wounded</em>]</p>`,
	},
	757: {
		index: 757,
		text: `<p>You stumble and collapse, half-conscious. The sand covers you until only your head is left above the surface. Finally the storm slackens, and worse becomes worst, for a band of desert nomads happen by and notice your predicament!</p>
<p><b>No Skill:</b> They cheerfully taunt you... and leave you to free yourself as best you can. Finally you manage to crawl out of the sand, but thirst and exposure have left you weakened. [D1/S2/<em>Scorned</em> (1 turn)/<em>Wounded</em>]</p>
<p><b>Beguiling:</b> You convince them that you are the living head of an executed man. Awed by such a malignant will, they do your bidding, bringing you water to slake your thirst. You maintain the ruse for hours, until finally you order them to leave you. When they are finally gone, you free yourself from the sand. [D1/S2/Enduring Hardship/Acting and Disguise]</p>`,
	},
	758: {
		index: 758,
		text: `<p>You wisely decide against traveling too fast or far.</p>
<p><b>No Skill:</b> When the storm subsides, you discover you have not gone more than 5 feet! [S1/You may not move from this space next turn]</p>
<p><b>Wilderness Lore:</b> Your desert experience permits you to travel without risk or delay. [D2/Wilderness Lore]</p>`,
	},
	759: {
		index: 759,
		text: `<p>Travel is impossible under such conditions. You must find shelter against the stinging sand.</p>
<p><b>No Skill:</b> You crouch in the lee of a tall dune, and wait patiently for the storm to abate. [D1]</p>
<p><b>Luck:</b> You stumble upon a handle protruding from the ground. Amazed, you grip it, tug, and a small trapdoor opens before you. Inside, you find a small room, well-stocked with food, water... and jewels! A bandit hideaway! You take shelter therein until the storm passes. [D2/S1/W+1 (Max: Rich)/Luck]</p>`,
	},
	760: {
		index: 760,
		text: `<p>You search for shelter, but find none. Exhausted, you huddle beneath your robes. Eventually the wind dies, and you are unhurt—but where are you? [D1/<em>Lost</em>]</p>`,
	},
	761: {
		index: 761,
		text: `<p>A companion once said that in a storm it was best to keep moving so that you would not be buried in a drift.</p>
<p><b>No Skill:</b> As you collapse, exhausted, too weak to move, you reflect that the advice was not as good as you thought. [D1/Lose Enduring Hardship/<em>Wounded</em>]</p>
<p><b>Wilderness Lore:</b> You realize that is nonsense. You take cover in the shelter of a tall dune and wait out the storm. [D1/Wisdom]</p>`,
	},
	762: {
		index: 762,
		text: `<p>You follow it over hill and dale, through thick undergrowth and lonely wasteland. Finally the snake disappears into a hole in the ground, and you still have no idea where you are.</p>
<p><b>No Skill:</b> You fall to your knees, weeping and cursing, lost and alone. But soon, a noise like muted thunder penetrates your self-inflicted pity. You crawl up a dune to see beyond and witness brilliantly-clad warriors, whose colors match the snake you followed. Surely, this is Allah's doing. You call out to the warriors, hands waving. The leader stops and approaches.</p>
<p><em>Roll two dice, adding one each for Piety and Wisdom.</em></p>
<p>❖ 2-7: The leader asks for the location of a particular city -- but you have not heard of such a place and therefore you cannot help him. Still, the leader takes pity on your situation and brings you to the nearest civilized area, where you can continue your journey. [D1/S1/Lose <em>Lost</em>]</p>
<p>❖ 8+: The leader looks at you closely and exclaims he had a dream about you last night. Surely this is an omen! He puts you on his horse and takes you to the king whom they serve. The king invites you to eat with him as you relate your tales of adventure. Your tales astonish and excite the king and when you are finished he gives you a purse of one thousand gold and orders his vizier to give you a map to your destination. [D2/S2/W+1 (Max: Rich)/Lose <em>Lost</em>/]</p>
<p><b>Wilderness Lore:</b> However, you recognize this area as a dry stream bed and follow it; soon you come to a small town, and ask of the natives directions to lands you know. [S1/Piety/Lose <em>Lost</em>]</p>`,
	},
	763: {
		index: 763,
		text: `<p>You strive to follow the guidance of your dreams.</p>
<p><b>No Skill:</b> Though you have neither the will nor the ability to succeed, Allah smiles upon diligence and resolution as well, and you feel He is well pleased with you. [D1/Luck (1 use)/Lose <em>Lost</em>]</p>
<p><b>Piety:</b> Despite the limits of your ability and endurance, Allah allows your efforts to succeed! You praise His generosity and promise to spend more time at your devotions. [D2/S1/Luck/Lose <em>Lost</em>]</p>`,
	},
	764: {
		index: 764,
		text: `<p>The other is most interesting, and you learn much, but you continue on your way after only a brief time. [Scholarship]</p>`,
	},
	765: {
		index: 765,
		text: `<p>The other eyes you as you pass, but doesn't seem to notice that you are trying to avoid him.</p>
<p><b>No Skill:</b> You realize your fear of confrontation is not worthy of a child of Allah and you introduce yourself. The other is not impressed with your lack of social skills and makes the meeting brief. [S1/Lose Courtly Graces]</p>
<p><b>Appearance:</b> The other cannot stand idly by as someone as handsome as you walks by. The other calls out to you, but you continue on, unhearing. The other spits in your direction, cursing the lack of social skills in one so comely. [D-1/Lose Courtly Graces/<em>Accursed</em>]</p>`,
	},
	766: {
		index: 766,
		text: `<p>The other spies you through the bars and cries out "There! There sulking away as though not seeing me! That is the one who forced me to befoul the Sultan's finest. There!" Guards rush at you and overpower you before you can unleash your sword or get away.</p>
<p><b>No Skill:</b> The trial is speedy as the other weaves a tale that even you start to believe. [S1/Acting and Disguise/<em>Imprisoned</em>]</p>
<p><b>Acting and Disguise:</b> "No, no," you cry out, "I snuck away because that cad is the worst sort of all sorts! He is a tale teller and will fool even the wisest with his words and I do not wish to be trapped by his tales!" The guards believe you and you get away as the other is beaten. [S1/Acting and Disguise]</p>`,
	},
	767: {
		index: 767,
		text: `<p>The other sees you looking away and calls out to you. "Please help me! I am lost far from my home and you... you seem to know your way..."</p>
<p><b>No Skill:</b> You are of little help to the other and he sinks into a deep melancholy. [D-1]</p>
<p><b>Wilderness Lore:</b> By chance you do know of the place the other hails from. You describe a way home for the lost traveler and he praises you as a messenger from Allah. [D1]</p>`,
	},
	768: {
		index: 768,
		text: `<p>The other sees you making to get away and mistakes you for their amour. There is nowhere but a sailing ship for you to escape to. You try to rush onboard stating you are a new sailor and not to allow anyone to follow you onboard.</p>
<p><em>Roll two dice, adding one each for Acting and Disguise, Seamanship, Appearance, and Bargaining and Evaluation:</em></p>
<p>❖ 2–5: The ship's guard roars with laughter, "Don't try to avoid your woes on this ship, whelp!" He hurls you down the plank and into the arms of your new love. [<em>Beloved</em>]</p>
<p>❖ 6+: The ship's guard smiles and says, "Hurry on whelp. You certainly won't be the last who's late this morning!" You convince the ship's mate that you're supposed to be on board while the ship's guard turns away your would-be lover. Having done such a fine job convincing them that you are part of the crew, you find that you can not leave. You set sail for parts unknown. [S2/Seamanship/Lose Courtly Graces]</p>`,
	},
	769: {
		index: 769,
		text: `<p>You pass a slave auction. The other is a wealthy bidder. You wish nothing to do with the proceedings. As you pass the other calls out, "There! That one! I'll take that one for the same price as the first." The slave-seller's men grab you and start to drag you toward the other's chain of slaves. Your protests that you are not a slave go unheeded by the other's men.</p>
<p><b>No Skill:</b> You are able to create a distraction by inciting the crowd with your protests. In the commotion you dash away and flee the area. [S1/<em>Pursued</em>]</p>
<p><b>Wilderness Lore:</b> You notice that your assailants are all plagued with a rash that has a hardly known cure. You offer to heal them if they let you go. They are amenable to this and after they see progress in their healing, they keep their word. [D2/S1/Quick Thinking]</p>
<p><b>Seamanship:</b> You notice that your assailants are all ex-sailors from a region you once sailed. You make quick friends with the men and they let you sneak away while the other and the slave seller are distracted. [D1/S1/Acting and Disguise]</p>`,
	},
	770: {
		index: 770,
		text: `<p>You duck onto another ship to avoid the fearful trader, Captain Aziz. Aziz notices you and cries out that your avoidance of his ship is a bad omen—that you have put a curse on his ship and that anything bad that happens on his voyage is your fault.</p>
<p><b>No Skill:</b> Aziz's voice seems to carry supernaturally far as all in the port seem to immediately know what he said. You are not welcome on any ship that knows your name and the curse you bring. [Lose Seamanship/<em>Scorned</em>]</p>
<p><b>Seamanship, Courtly Graces:</b> You call back for all to hear and rebuff Aziz's claims. You are knowledgeable and well spoken on the matter and everyone can see that you are clearly not the cause of Aziz's troubles, past or future. [D1/Acting and Disguise]</p>`,
	},
	771: {
		index: 771,
		text: `<p>The captain's greedy eye falls upon your possessions. "There, there!" he cries to the port guards, "He is a conscript who seeks to sneak away before we cast away. Bring him here to serve his sentence!"</p>
<p><b>No Skill:</b> You are gathered up and delivered to the captain. The ship sails straight away and he puts you to work as a deck hand, taking your possessions and dropping you at a port when he tires of you. [S1/W-2 (Min: Penniless)/Seamanship/Move to any coastal space]</p>
<p><b>Bargaining and Evaluation:</b> You are gathered up and delivered to the captain. The ship sails straight away and he puts you to work as a deck hand and takes your possessions. You turn out to be such a skilled negotiator that the captain decides not to kill you—or let you go at the end of your supposed conscription. You become a shipping broker for the captain. [S1/W-2 (Min: Penniless)/Seamanship/<em>Enslaved</em>]</p>`,
	},
	772: {
		index: 772,
		text: `<p>An impending whirlpool seems too dangerous to examine. Captain Aziz says, "This must be the entrance to the Undersea Kingdom!" His greed causes him to order the ship be plunged into the whirlpool. You try to launch a dinghy to get away.</p>
<p><b>No Skill:</b> The currents around this danger are unusual, and you know not which way to go. Your dingy sinks and you wash up on a distant shore. [S1/W-3 (Min: Penniless)/Have another player move you to any coastal space]</p>
<p><b>Seamanship:</b> You do so with ease and you escape the whirlpool. Sailing for days on the ocean you learn how to survive and thrive on ocean creatures. [D1/S1/Wilderness Lore]</p>`,
	},
	773: {
		index: 773,
		text: `<p>An impending whirlpool seems too dangerous to examine. You wisely look to avoid the maelstrom.</p>
<p><b>No Skill:</b> The currents around this danger are unusual, and you know not which way to go. You make a lightning-fast decision, and not coincidentally, the wrong one. The ship sinks, and you wash up on a distant shore. [D1/S1/W-2 (Min: Beggar)/Have another player move you to any coastal space]</p>
<p><b>Seamanship:</b> You do so with ease and you are praised for you skills. [<em>Respected</em>]</p>`,
	},
	774: {
		index: 774,
		text: `<p>Things have gone horribly wrong. You think upon the stories of great sailors you've heard from the minstrels and try to emulate their skills to help the helmsman avoid a terrible whirlpool. The currents around this danger are unusual, and you know not which way to go. You call upon Allah to guide your hands.</p>
<p><em>Roll two dice, adding one each for Seamanship and Wilderness Lore:</em></p>
<p>❖ 2–7: You try to sail out of the whirlpool, but it is too powerful. The ship is wrecked, and you are cast up on a distant shore. [S2/Have another player move you to any coastal space]</p>
<p>❖ 8+: You triumph against the whirlpool! You succeed in saving the ship and all who are on it. The Master of the Ship makes you captain [D1/S2/W+1 (Max: Rich)/Seamanship/Piety/<em>Respected</em>]</p>`,
	},
	775: {
		index: 775,
		text: `<p>The legend of giant oysters containing giant pearls is one told far and wide. This time you think the sailor telling you the tale is telling the truth. There is a ship that will be coming through a remote passage on their way into the harbor with a load of these pearls and you could help to waylay the ship and seize the treasure.</p>
<p><b>No Skill:</b> The other ship is ready for your assault. It seemed to only be a fishing and diving vessel, but they were ready for an attack! As your ship goes down, you grab a plank and swim for the shore empty-handed. You have to live off of the land as you find your way back to the harbor. [S1/W-1 (Min: Penniless)/Wilderness Lore]</p>
<p><b>Seamanship:</b> The others in your band are over-confident. You convince them that a ground assault in the narrow passage will be safer. When you sink the other ship you can dive for the treasure in the wreck. The others agree and luckily too, as the other ship, which seemed to only be a fishing and diving vessel, was ready for an attack. They are little match for you and you sink them from your encampment on the shore. [S2/W+2 (Max: Rich)/Seamanship]</p>`,
	},
	776: {
		index: 776,
		text: `<p>The legend of giant oysters containing giant pearls is one told far and wide. This time you think the sailor telling you the tale is telling the truth. There is a ship that will be coming through a remote passage on their way into the harbor with a load of these pearls and you could help to waylay the ship and seize the treasure.</p>
<p><b>No Skill:</b> The other sets you up as the patsy for the attack. When questions are asked about the missing ship back in the harbor, you are blamed and the other and his crew get away. [D1/S1/<em>Imprisoned</em>]</p>
<p><b>Quick Thinking:</b> You overhear the other telling members of the crew that you are going to be the patsy for this job. You decide to double-cross them. As the other ship approaches the passage you secret away to signal them of the attack. The other ship is ready for your erstwhile allies and you help from your side to overtake the pirates. You are greatly rewarded by the owner of the diving ship. [D2/S2/W+2 (Max: Rich)/Acting and Disguise]</p>`,
	},
	777: {
		index: 777,
		text: `<p>You are among many divers searching the depths of the water for rare treasures when a group of armed mermen appear. Armed with but a knife, you stab at the first opponent and slice through a second one. The mermen, not expecting such a defense, nor of losing two of their kind in the early moments of battle, retreat to their watery homes. You are honored as a hero among the people of this area. [D1/Weapon Use/<em>Respected</em>]</p>`,
	},
	778: {
		index: 778,
		text: `<p>This must be the Jeweled Fortress, spoken of in legends!</p>
<p><b>No Skill:</b> Standing before it, you can see a road that will lead you back to settled lands. But the allure of the Fortress calls you, and you set to exploring this fabled castle. [D1/S1/Lose <em>Lost</em>/<em>Wounded</em> (1 Turn)/Move to the Jeweled Fortress and have an immediate encounter ]</p>
<p><b>Magic:</b> You turn to explore the Fortress, but your powerful mystic aura awakens the sleeping Guardian of the Fortress. You are suddenly embroiled in a mystical battle with a powerful foe!</p>
<p><em>Roll two dice, adding one for Master level Magic.</em></p>
<p>❖ 2-7: The Guardian is far more powerful than you, and seizes you. In a deep voice, it intones, "You may not enter!" You are hurled far away, and your thoughts are clouded. [D2/S1/Have another player move you within four spaces of the Jeweled Fortress]</p>
<p>❖ 8+: With powerful incantations, you subdue your foe, returning it to its slumber. You tear a powerful treasure off its finger and explore the fortress. [D2/S2/Magic/Lose <em>Lost</em>/<b>Seal Ring</b>/Move to the Jeweled Fortress and have an immediate encounter]</p>`,
	},
	779: {
		index: 779,
		text: `<p>You have viewed many strange creatures in your travels but none so strange as this! You follow it and observe as long as you can.</p>
<p><b>No Skill:</b> Later, your account of what you have seen is so vivid that your truthfulness cannot be doubted. You discover that many people have seen similar creatures, and you learn much from their tales. [S1/Wilderness Lore]</p>
<p><b>Quick Thinking:</b> You know a mere description of it will never convince anyone of what you have seen. You track and snare the creature. You are sure a wealthy man of your acquaintance will buy it for a sizable sum. [D1/S1/Have another player place your Destination marker on any city and select a random <b>Treasure</b>. If you arrive in the city, you receive that <b>Treasure</b>]</p>`,
	},
	780: {
		index: 780,
		text: `<p>The beast is in poor health, and its dull eyes plead for your aid. You offer it food and water, but it retreats in fear each time you approach.</p>
<p><b>No Skill:</b> You give up in despair, and are deeply saddened by the memory of this pitiful creature. [S1/<em>Grief Stricken</em>]</p>
<p><b>Wilderness Lore:</b> You understand that death comes to all things, for it is Allah's way of insuring only the strong will survive. [D1/Wisdom]</p>`,
	},
	781: {
		index: 781,
		text: `<p>The beast's foot is lodged in a trap. Moved by compassion, you free it. Just as you succeed, a voice cries, "Aha! A poacher!" Guards seize you.</p>
<p><b>No Skill:</b> You are beaten for your offense, although you feel you have committed no crime. [D1/<em>Wounded</em>]</p>
<p><b>Courtly Graces:</b> You berate the guards for this injustice. Your righteous vehemence causes them to pause and reconsider your case. They release you with apologies. [D1/S1/Acting and Disguise]</p>`,
	},
	782: {
		index: 782,
		text: `<p>The odd, man-shaped beast seems to be in pain and cannot walk. You offer it aid, and it crawls onto your shoulders. Once there, it refuses to let go!</p>
<p><b>No Skill:</b> It rides you like a horse and mistreats you terribly. You must go where it bids you. [D1/S1/<em>Ensorcelled</em>]</p>
<p><b>Luck, Quick Thinking:</b> After many days of this cruel treatment, you do not despair but instead seek comfort from your woes in wine. Upon witnessing this, the beast demands a drink. It gulps great quantities and is soon besotted. Happily, it falls from your shoulders in a stupor, and you make your escape. [D1/S1/Enduring Hardship]</p>
<p><b>Golden Bridle:</b> When it slumbers, you produce the Golden Bridle, and when it awakens, it is forced to do as you command. You are tempted to ride upon its shoulders to teach it the folly of ways, but you show it mercy. [D1/S1/Piety]</p>`,
	},
	783: {
		index: 783,
		text: `<p>The beast kneels at the mention of Allah.</p>
<p><b>No Skill:</b> When your prayers are finished, it nuzzles your hand. You marvel that even the beast of the wild are aware of the power of the One God, and you are confirmed in your faith. [D1/S1/Piety]</p>
<p><b>Magic</b> (mandatory): You are stunned by the creature's intelligent action, and decide (incorrectly) that it is a human suffering under a foul enchantment. You spend fruitless hours trying to break the non-existent spell. [S1]</p>`,
	},
	784: {
		index: 784,
		text: `<p>As you speak, the bizarre creature cocks its head as if curious, then turns and moves swiftly away.</p>
<p><b>No Skill:</b> It quickly outdistances you, and no one believes your wild tale. [S1]</p>
<p><b>Wilderness Lore:</b> You easily track the beast to its lair and discover an entire family. You wait until the parents leave to forage, then sneak inside and steal a baby to bring to the Sultan for his menagerie. [D1/S1/<em>Respected</em>]</p>`,
	},
	785: {
		index: 785,
		text: `<p>You speak in a soft voice to the beast to entice it to come along with you. You praise Allah as the beast stares as if it understands and would speak. A noise startles it, and it bounds away.</p>
<p><b>No Skill:</b> You seek to follow but lose its trail. Others scoff at your unlikely tale and offer no help. [S1]</p>
<p><b>Magic:</b> This beast is ensorcelled! You call the beast back, and it kneels before you. You utter a magical word and sprinkle it with water, and the creature is transformed into a beautiful youth!</p>
<p><em>If you are not Married:</em> Her gratitude is unrestrained. [D1/S2/<em>Beloved</em>]</p>
<p><em>Otherwise:</em> The one you have freed praises you again and again to the Most High for removing the curse. [D1/S2/<em>Blessed</em>]</p>`,
	},
	786: {
		index: 786,
		text: `<p>There is no one nearby to help you so you speak in a soft voice to the beast to entice it to come along with you. However, the beast seems wary of your approach. Suddenly, as you are speaking to it, it lunges at you.</p>
<p><b>No Skill:</b> You scramble aside, but cannot evade its swift attack, and its claws rake your side. [S1/<em>Wounded</em>]</p>
<p><b>Quick Thinking:</b> You were wary of the creature and cleverly prepared an escape. Though startled, you manage to avoid injury. [D1/S1/Wilderness Lore]</p>
<p><b>Golden Bridle:</b> As it lunges, you present the Golden Bridle. As suddenly as it attacked, it falls quietly at your feet, and you harness it. It fetches quite a price from the emir of this land, who desires it for his menagerie. [D1/S2/W+1 (Max: Rich)]</p>`,
	},
	787: {
		index: 787,
		text: `<p>As you speak, a menacing intelligence shines in the beast's eye. In the sand it clumsily writes, "Give me a gift, and I will aid you."</p>
<p><b>No Skill:</b></p>
<p><em>If you have a treasure or wealth greater than Poor, you may choose to give it a gift:</em></p>
<p><em>If you do:</em> You graciously give it a gift. It gladly takes your gift in its mouth and leads you to a secret entrance to a magical place. [D2/S1/Choice of Lose one <b>Treasure</b> or W-1 (Min: Poor)/Opportunity to enter any Place of Power]</p>
<p><em>If you do not:</em> When you refuse to give it a gift, it savagely attacks you. [D1/<em>Wounded</em>]</p>
<p><em>If you cannot:</em> You would give the miraculous beast a gift if you were not so destitute. It looks at you and gives a frighteningly human shrug as it walks away. [S1]</p>
<p><b>Magic:</b> You break the enchantment and it is transformed into a wizened sorcerer, who grants you his aid in gratitude, telling you of the entrance to a wondrous locale. [D2/S1/Opportunity to enter any Place of Power]</p>
<p><b>Golden Bridle:</b> You command it by the power of the Golden Bridle to help you. It bows before you and leads you to a wondrous place. [D2/S1/Opportunity to enter any Place of Power]</p>`,
	},
	788: {
		index: 788,
		text: `<p>The other's wealth is guarded, but his personal guards are puny. You scatter them and take him prisoner.</p>
<p><b>No Skill:</b> Stubbornly, he swears to die rather than pay ransom. You cannot bring yourself to slay a defenseless man, and flee. He identifies you to the Sultan, who declares you an outlaw. [D1/<em>Outlaw</em>]</p>
<p><b>Storytelling:</b> With aptly chosen parables you demonstrate how it is better to live poor than die rich. The added dramatic flourishes of your weapon drive home the message. Terrified, he pays the ransom and swears to tell no one of your identity. [D2/S1/W+2 (Max: Rich)]</p>`,
	},
	789: {
		index: 789,
		text: `<p>The other is so well guarded that you despair of taking him by force.</p>
<p><b>No Skill:</b> You abandon your plans and flee. [Lose <em>Respected</em>]</p>
<p><b>Bargaining and Evaluation:</b> You worm your way into his trust by pretending to be a merchant. Before long, he believes you to be a fast friend, and, in an unguarded moment, you find it easy to abduct him. Quickly his ransom is delivered. [D1/W+1 (Max: Rich)/Acting and Disguise]</p>`,
	},
	790: {
		index: 790,
		text: `<p>The guards appear negligent, but it is a trap!</p>
<p><b>No Skill:</b> They react instantly as you approach, overwhelming you and taking you prisoner. [D1/<em>Imprisoned</em>]</p>
<p><b>Stealth and Stealing:</b> Experience teaches you suspicion, and you are careful. Easily you avoid the trap the other has laid, and you escape unidentified. [D1/S1/Quick Thinking]</p>`,
	},
	791: {
		index: 791,
		text: `<p>The other is over-confident from years of success and comfort.</p>
<p><b>No Skill:</b> Even an inexperienced trader can profit from this customer! [D1/W+1 (Max: Rich)]</p>
<p><b>Magic:</b> You notice an ancient heirloom with magical powers among his goods.</p>
<p><em>If you have Wealth greater than Poor:</em> Though you pay a sizable sum, the best of the bargain is yours. [D1/S1/W-1 (Min: Poor)/<b>Treasure</b>]</p>
<p><em>Otherwise:</em> Unfortunately, even after extensive haggling, the price is still too high, and you must pass it by. [Bargaining and Evaluation]</p>`,
	},
	792: {
		index: 792,
		text: `<p>The merchant seems quite interested in your possessions, and offers you a fair price.</p>
<p><em>You may accept or decline:</em></p>
<p><em>If you accept:</em> You agree to give him a valuable prize for his money. He smiles strangely and takes from you more than you expected, but rewards you handsomely before you go on your way. [You may trade skill levels or <b>Treasures</b> for one Wealth level apiece, no maximum]</p>
<p><em>If you decline:</em> You decide you are too attached to your belongings and go on your way. [Bargaining and Evaluation]</p>`,
	},
	793: {
		index: 793,
		text: `<p>After trading with the wealthy merchant, you no longer wonder how he has become so wealthy.</p>
<p><b>No Skill:</b> You trade your valuables for his most worthless goods. [D1/W-1 (Min: Penniless)]</p>
<p><b>Bargaining and Evaluation:</b> You hold your own in the sharp trading and manage to gain information about a commodity you are seeking. You use this information to good effect. [D1/W+1 (Max: Rich)]</p>`,
	},
	794: {
		index: 794,
		text: `<p>The other challenges you to join in his energetic devotions.</p>
<p><b>No Skill:</b> Exhausted after matching his pace, you collapse. Disgusted, he leaves. [S1]</p>
<p><b>Enduring Hardship:</b> You keep pace with him and achieve a mystical sense of oneness with Allah. [D1/Enduring Hardship/Piety]</p>`,
	},
	795: {
		index: 795,
		text: `<p>The other abruptly ceases his rituals, annoyed by your interruption.</p>
<p><b>No Skill:</b> He is brusque and insists you leave him in peace. Your deep and heartfelt apologies convince him to be kind. He takes you under his wing and shares a greater understanding of Allah with you. [Piety]</p>
<p><b>Courtly Graces:</b> Your humble politeness softens his irritations, and he aids you with information, telling you how to find a remarkable place. [D1/Opportunity to enter Stonehenge]</p>`,
	},
	796: {
		index: 796,
		text: `<p>The dervish is lost in mystical communion. Try as you might, you cannot break his concentration. You go on your way in awe of his devotion. [Piety]</p>`,
	},
	797: {
		index: 797,
		text: `<p>The other has no worldly possessions but shares freely of the knowledge he has gained through his travels.</p>
<p><b>No Skill:</b> Moved and blessed by his wisdom and depth of experience, you resume your journey with renewed faith and energy. [D1/Choice of Wisdom or Piety]</p>
<p><b>Storytelling:</b> You share several stories with the dervish. Pleased, he offers to accompany you for a while if you will continue to share your tales. [D1/S1/Piety/Wisdom/<em>Blessed</em>]</p>`,
	},
	798: {
		index: 798,
		text: `<p>Absorbed in his devotions, the other is easily taken. You press him for his knowledge.</p>
<p><b>No Skill:</b> He refuses to speak and cannot be intimidated, for he has no fear of this world and is sure in his faith in the Merciful God. [D2/Piety]</p>
<p><b>Beguiling:</b> He is unwise in the ways of the world, and easily tricked into revealing information. Before he realizes what he has done, he tells you of the route to a hidden place of great interest. When you have the information you seek, you hastily depart, his vow to avenge your trickery fading in the distance. [D1/<em>Pursued</em>/Have another player move you to any Place of Power and have an immediate encounter]</p>`,
	},
	799: {
		index: 799,
		text: `<p>Your victim cries out and flees as you attack. Suddenly he is joined by others. You are outnumbered and have lost the advantage of surprise.</p>
<p><b>No Skill:</b> Wisely, you withdraw. [S1/Wisdom]</p>
<p><b>Determined</b> (mandatory), <b>Weapon Use</b> (All mandatory): In fury, you attack anyway. Though you kill and injure many, you are eventually overcome and taken captive. The Sultan sees no reason for leniency and has you whipped before he throws you in a cell. [D-1/S1/<em>Wounded</em>/<em>Imprisoned</em>]</p>`,
	},
};
