import type { Story } from "./stories";

export const stories1500: Record<number, Story> = {
	1500: {
		index: 1500,
		text: `<p>"I wish to grant your request," says the other, "but I must undertake a holy pilgrimage and require a companion. Will you accompany me?"</p>
<p><em>You may accept his offer or decline:</em></p>
<p><em>If you decline:</em> The other departs, leaving you in your prison. [D1]</p>
<p><em>If you accept:</em> You accept the offer, and the two of you head on to Mecca. [D1/<em>On Pilgrimage</em>/Lose <em>Imprisoned</em>]</p>`,
	},
	1501: {
		index: 1501,
		text: `<p>"Oh yes, well let me tell you this tale I heard from a fisherman... or maybe it was a slave. Anyway..." The other speaks incessantly for hours, without pause for food or rest.</p>
<p><b>No Skill:</b> Although a tale or two is interesting, it is also driving you mad. [S1/Enduring Hardship/<em>Insane</em>]</p>
<p><b>Enduring Hardship, Acting and Disguise:</b> You sit with a semblance of rapt attention throughout the interminable blathering. Your host is immensely pleased by your receptiveness, and does you a great favor, saying, "I have been so lonely. You have done me a great honor by listening so long." Seeing your pure heart, the jailor releases you and you flee this place. [D2/S2/Courtly Graces/Lose <em>Imprisoned</em>]</p>`,
	},
	1502: {
		index: 1502,
		text: `<p>You plead for an audience. The jailor is happy to oblige as he has no one to speak to as well. Since you seem cooperative, you are forced to listen to inane babbling for nights on end.</p>
<p><b>No Skill:</b> You see little that you can do save suffer. [D1/Enduring Hardship]</p>
<p><b>Stealth and Stealing:</b> You encourage the other to continue far into the night, pretending that you are fascinated with every word. Eventually, his chatter is so dull that he puts himself to sleep. You make your escape and help yourself to the other's purse as compensation for your suffering. [D1/S1/W+1 (Max: Poor)/Acting and Disguise/Lose <em>Imprisoned</em>]</p>`,
	},
	1503: {
		index: 1503,
		text: `<p>"Ah, yes," the other peers at you with eyes that have lost the gleam of intelligence. "Would you like to be freed?"</p>
<p><b>No Skill:</b> You nod dumbly and walk out to freedom! Allah be praised! [D1/Lose <em>Imprisoned</em>]</p>
<p><b>Quick Thinking:</b> Such an opportunity is not to be missed! You pour on every ounce of your charm; the other gives you his purse as well! [D2/S1/W+1 (Max: Respectable)/Lose <em>Imprisoned</em>]</p>`,
	},
	1504: {
		index: 1504,
		text: `<p>"Ah, hmmm," mutters the other, "very nice. Hmmm, yes. Your deference is of course proper to one of my station... Hmmm."</p>
<p><b>No Skill:</b> "Is there anything else you need? Farewell, then." Before you can respond, he is gone. [D1]</p>
<p><b>Beguiling:</b> You begin a line of ingenious, profuse and imaginative flattery. The other basks in your blandishments, then grants your request. [D1/Lose <em>Imprisoned</em>]</p>`,
	},
	1505: {
		index: 1505,
		text: `<p>The other looks at you speculatively.</p>
<p><b>No Skill:</b> "You are too kind," he says. "However, there is little I can do for you, I'm afraid." [D1]</p>
<p><b>Storytelling:</b> After a moment's pause, he asks if you have any talent at entertainment. Your tales delight him, and in payment, he frees you. [D1/S1/Lose <em>Imprisoned</em>]</p>`,
	},
	1506: {
		index: 1506,
		text: `<p>You find it distasteful to debase yourself to such a one, but you have no choice.</p>
<p><b>No Skill:</b> Your feelings dilute the effectiveness of your words and the jailor ignores you. [S-1]</p>
<p><b>Acting and Disguise:</b> You are able to overcome your feelings and create an effective plea for your release. [Lose <em>Imprisoned</em>]</p>`,
	},
	1507: {
		index: 1507,
		text: `<p>The jailor realizes your pleadings are mere words with no truth behind them and will have none of it. [D-1]</p>`,
	},
	1508: {
		index: 1508,
		text: `<p>The other glares. "You seek only to gain profit at my expense, do you not?"</p>
<p><b>No Skill:</b> The other will have no dealings with you at all. [D1]</p>
<p><b>Beguiling</b> (mandatory): Your confidence in your wit and tongue lead you to attempt to trick the other, when it is obvious that he is skeptical of your character. He takes offense, and you are not fed for several days. [D1/Lose Beguiling]</p>`,
	},
	1509: {
		index: 1509,
		text: `<p>You plead for your release, but to your surprise, your jailor pleads for his own release! Madness! You don't understand what is going on but go along with it. Finally, you propose to switch places so that both of you get what you want. [Quick Thinking/Lose <em>Imprisoned</em>]</p>`,
	},
	1510: {
		index: 1510,
		text: `<p>The jailor covers his hears to shut you out. You then speak louder and in response he bangs on nearby metallic objects to drown you out. Both of you keep this up for hours, until exhaustion settles in. Eventually, the jailor flees, and the next day you are attended by a different man. [<em>Determined</em>]</p>`,
	},
	1511: {
		index: 1511,
		text: `<p>You try to soften the heart of your jailor with tales of familial woes. You plead to be with them or else their fate is doomed.</p>
<p><b>No Skill:</b> Even the wicked have a soft spot and your tales remind him of his family and their troubles. [Lose <em>Imprisoned</em>]</p>
<p><b>Beguiling:</b> Your tales of woe are too perfect, even outlandish at times and the jailor recognizes what you are trying too hard to do. He turns a deaf ear to further pleadings. [S-1]</p>`,
	},
	1512: {
		index: 1512,
		text: `<p>Your pleadings and protestations only bring joy to your jailor, as he revels in the power he has over you. [S-1]</p>`,
	},
	1513: {
		index: 1513,
		text: `<p>The other confesses to a powerful loneliness and sits eagerly, drinking up the praise and respect you show. Soon he becomes convinced you have been imprisoned unjustly, and releases you. [D1/Lose <em>Imprisoned</em>]</p>`,
	},
	1514: {
		index: 1514,
		text: `<p>The other is busy, but is fascinated with your conversation.</p>
<p><b>No Skill:</b> Finally he forgets his other errand altogether and you spend the day in pleasant discourse. He wishes he could free you, but alas he cannot. [D1/Storytelling]</p>
<p><b>Storytelling, Courtly Graces:</b> You are such a charming conversationalist that the other becomes your constant companion. You both profit from your friendship. [D2/S1/Lose <em>Imprisoned</em>]</p>`,
	},
	1515: {
		index: 1515,
		text: `<p>"I am troubled with sleeplessness. Tell me a tale so that the night might pass more pleasantly."</p>
<p><b>No Skill:</b> Your feeble story does little to amuse the other. [D1]</p>
<p><b>Storytelling:</b> You tell one story, then another, then another. The evening passes quickly, and the other slips quietly into a deep, peaceful sleep. You seize the opportunity and free yourself. [D2/S2/Lose <em>Imprisoned</em>]</p>`,
	},
	1516: {
		index: 1516,
		text: `<p>The other listens restlessly to your words, sighs and says, "Oh, my days are so long and lonely. Can you do nothing to easy my ennui?"</p>
<p><b>No Skill:</b> Nothing you do raises the spirits of your companion. [D1]</p>
<p><b>Seduction, Appearance:</b> You know just what the other needs—a night of romance. You go with the jailor to another place, and when he sleeps, you escape. [D2/Lose <em>Imprisoned</em>]</p>`,
	},
	1517: {
		index: 1517,
		text: `<p>Your kind words inspire a sense of pride within your jailor. In his eyes, he feels he deserves better than what he has.</p>
<p><b>No Skill:</b> He frees you with a large grin on his face. [Beguiling/Lose <em>Imprisoned</em>]</p>
<p><b>Courtly Graces:</b> You overdo it with words reserved for nobles. In fact, you ignite a fierceness and belief in the jailor to attain a higher station. He demands that you be his herald and introduce him to the Sultan of this land. You tell him that custom requires you to appear alone... and offer a gift before an introduction is made. The jailor readily agrees and watches you prance off with dreams of riches, and women and slaves dancing in his mind. [Quick Thinking/Lose <em>Imprisoned</em>/<b>Treasure</b>]</p>`,
	},
	1518: {
		index: 1518,
		text: `<p>"There is a task I would have you perform. If you promise to undertake it, I will free you." [D2/S1/Lose <em>Imprisoned</em>/Choice of <em>Under Geas</em> or <em>Accursed</em>]</p>`,
	},
	1519: {
		index: 1519,
		text: `<p>The other asks your aid in arranging an audience for him with one of your friends, a very influential merchant of a nearby city.</p>
<p><b>No Skill:</b> You do so willingly. Your friend is duped and cheated when the other turns out to be a false swindler, and you are blamed for your poor judgment. [D1/<em>Scorned</em>/Lose <em>Imprisoned</em>]</p>
<p><b>Acting and Disguise, Beguiling:</b> Your experience with treacherous people alerts you that the other intends a swindle. You will not allow your friend to be victimized, and refuse to make the introduction, preferring to remain in prison. [D2/Wisdom]</p>`,
	},
	1520: {
		index: 1520,
		text: `<p>As soon as the other comes into sight, you launch into a stream of flattery. Unfortunately, he is far too clever to believe your lies, and whips you for your troubles. [D-1/S1/<em>Wounded</em>]</p>`,
	},
	1521: {
		index: 1521,
		text: `<p>Your words open up a font of unexpected emotion. "It's not easy," says the other, "to continually watch over a prisoner."</p>
<p><b>No Skill:</b> You provide brief respite to the other's restlessness, and are rewarded by being forced to remain indefinitely for your host's entertainment. [S1]</p>
<p><b>Storytelling:</b> Your skill as a storyteller is greatly appreciated. You soon realize that your captor does not intend to free you, though, so you refuse to tell more tales. Finally, he agrees to free you in exchange for your most wondrous story. [D1/S2/Lose <em>Imprisoned</em>]</p>`,
	},
	1522: {
		index: 1522,
		text: `<p>The other recognizes you, and speaks. "Attend well. I have heard a prophecy which concerns your future."</p>
<p><em>Roll two dice, adding two each for Luck and Fated:</em></p>
<p>❖ 2–7: The prophecy is obscure and unreadable. [D2/<em>Fated</em>]</p>
<p>❖ 8+: "Your fate is shrouded in mystery. Your destiny is not here, but elsewhere; I cannot allow you to remain captive." [D3/S1/Lose <em>Imprisoned</em>]</p>`,
	},
	1523: {
		index: 1523,
		text: `<p>The other sneers at your words.</p>
<p><b>No Skill:</b> "You are obviously unused to discourse with civilized men. I will hold my displeasure this time, but do not speak to me again without learning the behavior of courteous folk." [D1]</p>
<p><b>Courtly Graces, Acting and Disguise:</b> As you continue, the sneer vanishes. "Your manners are impeccable and your speech exceedingly fair. Let me repay the pleasure I gain from your company with your freedom, though I wish you were never to leave." [D1/Wisdom/Lose <em>Imprisoned</em>]</p>`,
	},
	1524: {
		index: 1524,
		text: `<p>At your words, the jailor responds with, "Yes, yes, I can never tire of your flattery. Perhaps I'll bring you an extra piece of bread."</p>
<p><b>No Skill:</b> Try as you might, you cannot persuade him to give you your freedom...but your meals are better than they were before. [S1]</p>
<p><b>Seduction</b> (if you are female): "Hmm, how badly do you want your freedom?" His green-toothed leer nearly shrivels your plans, but you still manage to say, "I will do anything." With those words the jailor enters your prison... where you brain him with the rock you were holding behind you. [Lose <em>Imprisoned</em>]</p>
<p><b>Appearance</b> (if you are male): "Hmm, I have an unfortunate daughter who could do worse than marry you. If you promise to wed my daughter and care for her, I will free you." You feel you have no choice in the matter if your story is to continue in this world. [<em>Married</em>/Lose <em>Imprisoned</em>]</p>`,
	},
	1525: {
		index: 1525,
		text: `<p>The jailor accepts your flattery as a sponge accepts water, and he demands that you go on.</p>
<p><b>No Skill:</b> You soon run out of praises to heap upon him, and he beats you for your insincere lies. [D1/S1/<em>Wounded</em>]</p>
<p><b>Courtly Graces, Acting and Disguise:</b> You flatter him for hours, likening him to the greatest of Caliphs. You so impress him that he grants you your freedom on your promise that you will stay to flatter him longer. You agree, but once out of your prison, you make good your escape. [D1/Beguiling/Lose <em>Imprisoned</em>]</p>`,
	},
	1526: {
		index: 1526,
		text: `<p>The object of your benevolence takes your coins and says, "Drink with me!"</p>
<p><b>No Skill:</b> You delight in his many ribald tales. [S1/W-1 (Min: Beggar)/Storytelling/Lose <em>Imprisoned</em>]</p>
<p><b>Luck:</b> As you drink together the other tells many tales, and you are almost sad to depart from his company. [D1/S2/Lose <em>Imprisoned</em>]</p>`,
	},
	1527: {
		index: 1527,
		text: `<p>You have nothing to offer your captor except your attention—you know this garrulous fellow craves an audience. However, the other's ceaseless babbling drives you crazy. Finally, your patience fails, and you lose your temper.</p>
<p><b>No Skill:</b> No one profits from such unpleasantness. [S1]</p>
<p><b>Enduring Hardship:</b> You endure the idle chatter peaceably and politely. Finally, the other thanks you for listening, and allows you to depart. [D1/Lose <em>Imprisoned</em>]</p>`,
	},
	1528: {
		index: 1528,
		text: `<p>The recipient of your generosity exclaims, "Many thanks, and may the blessings of Allah be upon you! What favor may I perform for you, master?" You ask for your freedom, and it is granted to you. [D1/Lose <em>Imprisoned</em>]</p>`,
	},
	1529: {
		index: 1529,
		text: `<p>Bargaining with this jabbering magpie is endlessly frustrating. A stream of dull reminiscences—travels, family, and social triumphs—pour from him.</p>
<p><b>No Skill:</b> You wish you could escape, but cannot. His tales drive you past the brink of madness. [<em>Insane</em>]</p>
<p><b>Beguiling:</b> You pretend great interest in his babbling, and he regards you as a friend and wise fellow. You thereupon proceed to trick him into granting your freedom. [D2/S1/Lose <em>Imprisoned</em>]</p>`,
	},
	1530: {
		index: 1530,
		text: `<p>The other is himself in rather difficult straits at the moment, but is agreeable.</p>
<p><b>No Skill:</b> You make known your needs, and quickly find that there is little he can do. [D1]</p>
<p><b>Enduring Hardship:</b> Your own memories of hardship lead you to question the other about his predicament. You discover that you can aid him, and do so. For this, he is most grateful. [D1/S1/Piety/Lose <em>Imprisoned</em>]</p>`,
	},
	1531: {
		index: 1531,
		text: `<p>The jailor's visage is so horrid it may be a weakness that can be exploited. You tell the jailor you are able to change his face if he so wishes and would gladly do it for the price of freedom.</p>
<p><b>No Skill:</b> The jailor scoffs at your boast. "It is the will of Allah to give me the face I show the world and no man may change it." [D-1]</p>
<p><b>Acting and Disguise:</b> The jailor is skeptical but you are able to apply powders and creams strategically to hide some of the twisted features. You give instructions to the jailor on how to maintain this look when you are free. The jailor is not confident enough to do this on his own, so he keeps you imprisoned and makes you apply your skills every day. You should have gotten his vow before helping him! [D1/Wisdom]</p>
<p><b>Magic:</b> With but a few gestures, the twisted features of the jailor change and his appearance is more tolerable. The jailor releases you as agreed, more out of awe of your power. You leave quickly and make haste to put a lot of distance between the two of you for you know that your magic will not hold those features too much longer. [D1/S1/Lose <em>Imprisoned</em>]</p>`,
	},
	1532: {
		index: 1532,
		text: `<p>"Your aid is desperately needed. If my fortunes improve, I will grant your just reward."</p>
<p><em>Roll two dice, adding one each for Luck and Blessed:</em></p>
<p>❖ 2–7: Although you wait many weeks, you never again see that jailor. [D1/W-1 (Min: Poor)]</p>
<p>❖ 8+: The other's fortunes turn (with your help) and the promised reward appears. [D1/Lose <em>Imprisoned</em>]</p>`,
	},
	1533: {
		index: 1533,
		text: `<p>You tell the jailor, "I know of a great treasure hidden many miles from here. If you let me go, I will give you half of it."</p>
<p><b>No Skill:</b> However, when you cannot back up your claim with any show of wealth, the jailor laughs and leaves you still in your cell. [D-1]</p>
<p><b>Storytelling:</b> Knowing the effect of a good prop on an audience, you reach into a hidden fold in your robes and pull out a scrap of paper on which you have drawn, in ink mixed from tears and dirt, a complex map. The jailor is intrigued and agrees to accompany you to the hiding place. As soon as you are outside, you distract the guard and make good your escape. [S1/Lose <em>Imprisoned</em>]</p>`,
	},
	1534: {
		index: 1534,
		text: `<p>"I have no patience with such foolish offers!" cries the other. "Cease, or I shall beat you!" You cease. [S1]</p>`,
	},
	1535: {
		index: 1535,
		text: `<p>The other thanks you profusely, then scuttles off.</p>
<p><b>No Skill:</b> You never hear from him again; instead, a new jailor comes to you the next day. [D1]</p>
<p><b>Luck:</b> Soon he returns; he has won a great fortune gambling with the stake you offered him, and he rewards you for your kindness. [D1/S1/Lose <em>Imprisoned</em>]</p>`,
	},
	1536: {
		index: 1536,
		text: `<p>The other is cool to your proposals, and seems absorbed with other matters. [D1]</p>`,
	},
	1537: {
		index: 1537,
		text: `<p>The other pleasantly agrees to free you if part of the payment is in advance.</p>
<p><b>No Skill:</b> You agree, but to your chagrin, the other pockets the advance payment and disappears. [S1/Wisdom]</p>
<p><b>Wisdom:</b> You deduce the other's plan to cheat you, and you refuse the advance. You insist upon your freedom first, and, grumbling, the jailor frees you. True to your word, you pay him. [D1/W-1 (Min: Respectable)/Lose <em>Imprisoned</em>]</p>
<p><b>Brass Trumpet</b> (mandatory): The sounding of the Brass Trumpet warns you of the intent of the other to cheat you, and you refuse to give him the bribe. With a shrug, he wanders off, leaving you imprisoned. [Wisdom]</p>`,
	},
	1538: {
		index: 1538,
		text: `<p>"If you lend me a few hundred pieces of gold," says the other, "I will return soon and free you." You never see him again. [D1/W-2 (Min: Poor)/Wisdom]</p>`,
	},
	1539: {
		index: 1539,
		text: `<p>"I'm overcome with sadness," says the other, with a deep sigh. "My condition is wretched beyond bearing. It is a tale of unrequited love..."</p>
<p><b>No Skill:</b> You are overwhelmed with sympathy, but can do nothing to ease his sorrow. [S1/<em>Grief Stricken</em>]</p>
<p><b>Courtly Graces, Seduction, Acting and Disguise:</b> You teach the other how to win the heart of his beloved. The couple rewards your kindness by naming their firstborn after you. [D3/S1/Luck/Lose <em>Imprisoned</em>]</p>`,
	},
	1540: {
		index: 1540,
		text: `<p>"I have been seeking my brother for years. He has wronged me and my wretched mother, and I shall not rest until his perfidy is repaid. I would be most grateful for any aid."</p>
<p><em>Roll two dice, adding one each for Quick Thinking, Weapon Use, and Stealth and Stealing:</em></p>
<p>❖ 2–8: You are unable to aid the jailor. [D1]</p>
<p>❖ 9+: You convince the jailor to let you free to help him. You bring the wicked brother to justice by finding evidence of his crimes. The other is most grateful. [D2/S1/Lose <em>Imprisoned</em>]</p>`,
	},
	1541: {
		index: 1541,
		text: `<p>You spend many hours conversing with your companion about the foolish ways of man and the inscrutable ways of Allah.</p>
<p><b>No Skill:</b> You learn a great deal from your jailor, and your suffering is lessened. [D1/Wisdom]</p>
<p><b>Scholarship:</b> You impress your host with your learning, and he becomes convinced your captivity is unjust. [D2/Wisdom/Lose <em>Imprisoned</em>]</p>`,
	},
	1542: {
		index: 1542,
		text: `<p>"Heh, if it's tales yer interested in... Well, I've those aplenty. Why, I recalls..."</p>
<p><b>No Skill:</b> The ramblings are fabulous and imaginative, but not illuminating. [S1/Storytelling]</p>
<p><b>Quick Thinking:</b> Without realizing it, he tells you of the means to escape. When he is gone, you free yourself and depart. [D2/S1/Lose <em>Imprisoned</em>]</p>`,
	},
	1543: {
		index: 1543,
		text: `<p>You engage the jailor in conversation and casually mention the existence of an elixir that can change one's appearance. The jailor is intrigued and offers you freedom in exchange for the whereabouts of this wondrous drink.</p>
<p><b>No Skill:</b> You are unable to convince him that you know where to find such a potion and he leaves you to rot. [D-1]</p>
<p><b>Beguiling, Bargaining and Evaluation:</b> You give convincing information on where to find this elixir and the jailor lets you go. Fortunately, he is as foolish as he is ugly. [D1/Lose <em>Imprisoned</em>]</p>`,
	},
	1544: {
		index: 1544,
		text: `<p>Your words falter as you finally get a good look at your jailor. You turn away quickly, involuntarily: never have you seen one whose visage would frighten small children and make women faint. The jailor begins to weep and walks away.</p>
<p><b>No Skill:</b> You find no words to comfort the jailor as he disappears into the darkness. [D-1]</p>
<p><b>Stealth and Stealing, Luck:</b> As the jailor turns to go, you are able to grab the keys: the jailor's weeping prevents him from noticing the theft. When he is gone, you are free. [D1/Stealth and Stealing/Lose <em>Imprisoned</em>]</p>`,
	},
	1545: {
		index: 1545,
		text: `<p>You unwittingly give offense to the other.</p>
<p><b>No Skill:</b> The response he gives you is very cold and very brief. [D-1]</p>
<p><b>Courtly Graces:</b> You perceive what you have done, and immediately attempt to right the situation with fine words. Allah inspires compassion in him, and he grants your request. [D2/Lose <em>Imprisoned</em>]</p>`,
	},
	1546: {
		index: 1546,
		text: `<p>The other vanishes without a word. [D-1]</p>`,
	},
	1547: {
		index: 1547,
		text: `<p>"I have what wealth I need, and my friends and lovers are numerous, yet when I think of the Dark Minister of the Graveyard all seems fleeting, and all the day but a tedious parade to a dark and restless night. Can you lighten my heart?"</p>
<p><b>No Skill:</b> The other's despair is contagious, and leaves behind a deep sickness in your soul. [S1/<em>Grief Stricken</em>]</p>
<p><b>Wisdom, Piety:</b> "There is no power or comfort but in Allah," you reply. "Do not rail against the condition of Man. Would you rather be a dog or a donkey? Accept what is given and cease your grumbling!" In time the other comes to realize the truth of your words and wisdom of the Prophet, and repays your generous words with generous actions. [D2/S1/Lose <em>Imprisoned</em>]</p>`,
	},
	1548: {
		index: 1548,
		text: `<p>The other you encounter is so old and decrepit that you can't make out what is being said.</p>
<p><b>No Skill:</b> [S1]</p>
<p><b>Quick Thinking:</b> You spend hours listening to him, and eventually come to understand his mumblings. You spend many hours in discourse with him, and finally he grants you your freedom. [D1/Lose <em>Imprisoned</em>]</p>`,
	},
	1549: {
		index: 1549,
		text: `<p>You listen as the other speaks—in two different voices! You realize that the other is possessed by a marid!</p>
<p><b>No Skill:</b> You mumble a prayer to Allah—through whom all things are possible—for his recovery. [D1/Piety]</p>
<p><b>Magic:</b> You know how to break the curse. In gratitude, he gives you a gift and your freedom. [D2/S2/Piety/Lose <em>Imprisoned</em>/<b>Treasure</b>]</p>`,
	},
	1550: {
		index: 1550,
		text: `<p>"Be silent, you worm!" whispers the other. "You overstep yourself!"</p>
<p><b>No Skill:</b> The other stalks off indignantly. [S1]</p>
<p><b>Beguiling:</b> Stung by his harsh words, you play the toady, persuading the other to boast of his wrong-doings. You convey his information secretly to the Sultan, and you are granted your freedom as a reward for turning over this rogue. [D1/S1/Acting and Disguise/Lose <em>Imprisoned</em>]</p>`,
	},
	1551: {
		index: 1551,
		text: `<p>The other, ignoring your words completely, begins to beat you.</p>
<p><b>No Skill:</b> You cower in the corner, accepting your poor fate. [<em>Wounded</em>]</p>
<p><b>Enduring Hardship:</b> You accept the beating without making a sound. The jailor is impressed with your fortitude and considers another use for you. [S1/<em>Under Geas</em>/Lose <em>Imprisoned</em>]</p>
<p><b>Quick Thinking:</b> While accepting the raining blows upon your body, you are able to reach for the keys, and lock the jailor in your prison while you set yourself free! [D1/<em>Wounded</em>/Lose <em>Imprisoned</em>]</p>`,
	},
	1552: {
		index: 1552,
		text: `<p>The jailor is inclined to believe your honesty, and you tell him that you have been wrongly imprisoned.</p>
<p><b>No Skill:</b> Unfortunately, there is nothing he can do to help you. [D1]</p>
<p><b>Quick Thinking:</b> You convince him to release you on your word of honor as an honest soul. [D1/S1/Lose <em>Imprisoned</em>]</p>`,
	},
	1553: {
		index: 1553,
		text: `<p>You try to fool the other by pretending to be ill.</p>
<p><b>No Skill:</b> You do your best but the jailor is not wholly convinced. Next time, you will do better—but most likely to a different jailor. [Acting and Disguise]</p>
<p><b>Acting and Disguise:</b> Your performance is so convincing the jailor comes running into your prison to help. As he enters your prison, you escape, locking him inside. You feel sorry for the jailor, but your freedom is more important. [S1/Lose <em>Imprisoned</em>]</p>`,
	},
	1554: {
		index: 1554,
		text: `<p>You fool the other so completely that he frees you, puts you up in his home as a long-lost member of the family, feeds you the best meals he can afford, and showers you with gifts.</p>
<p><b>No Skill:</b> You enjoy your life of luxury for a time. [D1/S1/W+1 (Max: Poor)/Lose <em>Imprisoned</em>]</p>
<p><b>Stealth and Stealing:</b> While you are a member of the other's household, you help yourself to some of his more interesting possessions. [D2/S1/W+1 (Max: Respectable)/Lose <em>Imprisoned</em>/<b>Treasure</b>]</p>`,
	},
	1555: {
		index: 1555,
		text: `<p>The other throws himself at your feet...</p>
<p><b>No Skill:</b> ...and proclaims himself your good friend and faithful companion. [D1/Luck/Lose <em>Imprisoned</em>]</p>
<p><b>Appearance:</b> ...and declares that it is unjust for one of your great beauty to languish in captivity. He frees you to bring joy to all the world. [D2/S1/Lose <em>Imprisoned</em>]</p>`,
	},
	1556: {
		index: 1556,
		text: `<p>You try to convince your jailor that you have been wrongly imprisoned by the Vizier, whom you imply is corrupt.</p>
<p><b>No Skill:</b> The jailor is not inclined to believe you, and goes off. [S1]</p>
<p><b>Acting and Disguise:</b> You flesh out your story with well-constructed lies about the offenses of the Vizier, and fool him completely. He lets you go free in the name of justice. [D2/Beguiling/Lose <em>Imprisoned</em>]</p>`,
	},
	1557: {
		index: 1557,
		text: `<p>The jailor is not fooled for an instant. "Would you like your rations halved for the rest of your stay?" he says. It appears another tactic must be used to win your freedom. [S1]</p>`,
	},
	1558: {
		index: 1558,
		text: `<p>The other is willing to free you, but his price is high.</p>
<p><b>No Skill:</b> Despite your clever maneuvering, you must pay full price or remain in prison. [W-2 (Min: Beggar)/Lose <em>Imprisoned</em>]</p>
<p><b>Bargaining and Evaluation:</b> You are able to talk him down to a price that does not significantly affect your pocketbook. [D1/S1/Lose <em>Imprisoned</em>]</p>
<p><b>Wealth: Penniless</b> or less (mandatory): You cannot meet his price, and remain where you are. [D1]</p>`,
	},
	1559: {
		index: 1559,
		text: `<p>The other is clever as well as wicked, and sees through your trickery. However, he admires your spirit and offers to free you if you will help him in a scheme.</p>
<p><b>No Skill:</b> You are suspicious of his plan, but agree to participate. He double-crosses you and makes off with a great treasure while you are caught and sent back into your prison. [D-1/<em>Envious</em>]</p>
<p><b>Wisdom:</b> You will have nothing to do with this wicked jailor, and he departs. [S1]</p>`,
	},
	1560: {
		index: 1560,
		text: `<p>You convince the jailor to come into your cell.</p>
<p><b>No Skill:</b> He does, and you overcome him easily. When he is unconscious, you make good your escape. [Lose <em>Imprisoned</em>/<em>Outlaw</em>]</p>
<p><b>Accursed, Envious</b> (All mandatory): He senses something fierce in your voice, and stands just outside your cell. You seize him, drag him up against the bars, and wring his neck. Unfortunately, you find when you search his body that he had no key to your cell. Days pass, and, unable to bring yourself to eat your tormentor, you perish from hunger and thirst. [Death]</p>`,
	},
	1561: {
		index: 1561,
		text: `<p>You attack the jailor with a makeshift club as he brings you food. He is deeply saddened by your betrayal of his good nature.</p>
<p><b>No Skill:</b> He easily disarms you and forces you back into the cell. You can tell that he greatly regrets having to have you whipped. [D-1/<em>Wounded</em>]</p>
<p><b>Weapon Use:</b> Your attack is so overwhelming that you accidentally kill your jailor. If you had had a sword, perhaps it would have gone better... You flee before you are discovered. [D-1/S1/<em>Grief Stricken</em>/Lose <em>Imprisoned</em>/<em>Outlaw</em>]</p>`,
	},
	1562: {
		index: 1562,
		text: `<p>You attack your jailor, hoping that surprise will carry the day, but he is prepared for your attack and defeats you easily.</p>
<p><b>No Skill:</b> You are punished for your attack, but at least you are allowed to live. [D1]</p>
<p><b>Storytelling:</b> You plead with your jailor, explaining to him why you should be freed. Your tale is so moving that mercy fills his heart, and he releases you from captivity. [D2/S1/Lose <em>Imprisoned</em>]</p>`,
	},
	1563: {
		index: 1563,
		text: `<p>Perhaps you are overconfident—you are in desperate straits. The man is far more skilled than you supposed. He toys with you, slashing your garments to shreds and tracing tiny wounds with his razor-sharp sword.</p>
<p><b>No Skill:</b> Finally you collapse. He kicks dust on you, spits, and does not return to feed you for several days. [D1/<em>Scorned</em>/<em>Wounded</em>]</p>
<p><b>Acting and Disguise:</b> You feign a faint and, when the other draws near, grab his leg, toppling him to the ground. You quickly make good your escape. [D1/S1/Lose <em>Imprisoned</em>]</p>`,
	},
	1564: {
		index: 1564,
		text: `<p>You don't have a chance against this other. You quickly realize your folly, throw down your weapon, and plead for mercy. He spits and laughs. [D-1/<em>Grief Stricken</em>]</p>`,
	},
	1565: {
		index: 1565,
		text: `<p>Your victim stands his ground and defends himself valiantly. Nonetheless you overcome him.</p>
<p><b>No Skill:</b> You escape, but of course you are sought by the Sultan's guards for your crimes. [D1/Lose <em>Imprisoned</em>/<em>Outlaw</em>]</p>
<p><b>Luck:</b> After your escape, another person is captured, and despite his protests, is sentenced in your stead. The innocent one is to hang. You cannot let him die for your crime—you come forward and confess. The Sultan is impressed with your courage; he pardons you and engages you to catch other criminals. [D3/S1/W+1 (Max: Respectable)/Lose <em>Imprisoned</em>]</p>`,
	},
	1566: {
		index: 1566,
		text: `<p>Your victim turns and flees.</p>
<p><b>No Skill:</b> You follow, but he disappears through a trapdoor so cunningly concealed that you cannot open it, and you remain trapped. [S1]</p>
<p><b>Stealth and Stealing:</b> The other disappears through a cunningly concealed trapdoor, but you are able to find the hidden catch. You follow and discover your freedom! [D1/S2/Lose <em>Imprisoned</em>]</p>`,
	},
	1567: {
		index: 1567,
		text: `<p>Your swift attack is met by a more swift and sure defense. You are struck senseless. [S1/<em>Wounded</em>]</p>`,
	},
	1568: {
		index: 1568,
		text: `<p>The other dodges your attack artfully.</p>
<p><b>No Skill:</b> Avoiding your grasp, he disappears, hooting scornfully at your ineptitude. [D-1/S1]</p>
<p><b>Quick Thinking:</b> The "attack" the other anticipated was only a feint. The dodge carries him right into your arms; he shrieks with surprise when he realizes he has been outwitted. You make good your escape with ease. [D1/S1/Lose <em>Imprisoned</em>/<em>Outlaw</em>]</p>`,
	},
	1569: {
		index: 1569,
		text: `<p>"You obviously do not know with whom you are dealing," the other says, drawing his sword.</p>
<p><b>No Skill:</b> He was right! [D1/<em>Wounded</em>]</p>
<p><b>Weapon Use:</b> "Nor do you," you reply. Soon the other is at your mercy. You make good your escape with ease. [D2/Weapon Use/Lose <em>Imprisoned</em>]</p>`,
	},
	1570: {
		index: 1570,
		text: `<p>The other whips out his sword. "No mercy!" he cries and skillfully presses his attack.</p>
<p><em>You may surrender or fight on:</em></p>
<p><em>If you surrender:</em> When you surrender, the other cuts you repeatedly in punishment. [D1/<em>Wounded</em>/<em>Crippled</em> (1 turn)]</p>
<p><em>If you fight on, roll two dice, adding two each for Weapon Use and Determined:</em></p>
<p>❖ 2–8: You struggle bravely, but are overcome. [D1/<em>Wounded</em>]</p>
<p>❖ 9+: You manage to hold off your opponent through sheer determination. Saluting your courage, he departs, bidding you to leave with your freedom. [D2/<em>Determined</em>/Lose <em>Imprisoned</em>]</p>`,
	},
	1571: {
		index: 1571,
		text: `<p>You attack your jailor as he brings you food. He fights back fiercely, and does not refrain from biting, gouging, and kicking.</p>
<p><b>No Skill:</b> You do not stand a chance against this demon in human form, and beg for mercy. He beats you harshly before he leaves. [D1/<em>Wounded</em>]</p>
<p><b>Quick Thinking:</b> You fight back without restraint, and defeat your foe by a crushing blow to his private parts. You seize his keys and flee. [D2/S1/Lose <em>Imprisoned</em>]</p>`,
	},
	1572: {
		index: 1572,
		text: `<p>You manage to escape from the cell, and flee. Word reaches you that the jailor has been punished severely for allowing you to escape.</p>
<p><b>No Skill:</b> The jailor did you no harm, and you are saddened by this news. [D1/Lose <em>Imprisoned</em>/<em>Grief Stricken</em>]</p>
<p><b>Piety:</b> You return to the place where you were made captive, and help the jailor to escape. He is very grateful to you. [D1/S1/W+1 (Max: Respectable)/Lose <em>Imprisoned</em>]</p>`,
	},
	1573: {
		index: 1573,
		text: `<p>Your jailor discovers you as you attempt to escape your prison.</p>
<p><b>No Skill:</b> He shakes his head and draws his sword, and you return to your prison. [D1]</p>
<p><b>Courtly Graces, Acting and Disguise:</b> You speak to the jailor with careful and impassioned words, and convince him that you have been imprisoned unjustly. Your words move him greatly, and he turns his back and allows you to escape. [D1/S1/Lose <em>Imprisoned</em>]</p>`,
	},
	1574: {
		index: 1574,
		text: `<p>When the jailor leaves, you examine your surroundings, and discover that he has left you a means of escape!</p>
<p><b>No Skill:</b> You waste no time in freeing yourself, and soon you are on your way. [D1/Lose <em>Imprisoned</em>]</p>
<p><b>Wisdom:</b> Could the jailor have deliberately set you free? You wonder at the ways of Allah as you make good your escape. [D1/S1/Piety/Lose <em>Imprisoned</em>]</p>`,
	},
	1575: {
		index: 1575,
		text: `<p>When the jailor is nowhere to be seen, you examine your cell.</p>
<p><b>No Skill:</b> You can see no way out of your captivity. [D1]</p>
<p><b>Stealth and Stealing:</b> After many hours of struggling, you manage to pick the lock and free yourself! You give thanks to the Most High as you absent yourself from the area. [D1/Lose <em>Imprisoned</em>]</p>`,
	},
	1576: {
		index: 1576,
		text: `<p>You carefully examine your surroundings after the jailor leaves. You find a colony of ants living in the dirt walls of your cell.</p>
<p><b>No Skill:</b> Unfortunately, you are much larger than an ant, and cannot make use of their tunnels to free yourself. [S1]</p>
<p><b>Wilderness Lore:</b> You spend hours watching the ants, and realize that the colony is immense, and its tunnels are extensive. You strike the wall, and it collapses under your blows; soon, you have tunneled your way to freedom (though you have suffered some stings along the way). [D2/S1/<em>Wounded</em> (1 turn)/Lose <em>Imprisoned</em>]</p>`,
	},
	1577: {
		index: 1577,
		text: `<p>After carefully examining your surroundings, you are convinced you see a way to escape, but it will not be easy.</p>
<p><b>No Skill:</b> You make your bid for freedom, but you fail. Fortunately, your escape attempt goes unnoticed, and you are not punished. [D1]</p>
<p><b>Enduring Hardship:</b> You throw yourself against the door to the cell for many hours each day, until finally it is so weakened that it breaks under your weight. Once free of your cell, your freedom is easily obtained. [D2/S1/<em>Determined</em>/Lose <em>Imprisoned</em>]</p>`,
	},
	1578: {
		index: 1578,
		text: `<p>You manage to open the door to your cell, but you flee straight into the arms of your captor!</p>
<p><b>No Skill:</b> You try to escape him, but soon you are back in prison again, with a beating to convince you not to try to escape again. [D1/<em>Wounded</em> (1 turn)]</p>
<p><b>Acting and Disguise:</b> You grab the jailor and scream in his face, "You have been found out! Flee! Flee for your life! I will hold them for as long as I can!" The jailor must have a guilty conscience, for he flees from you, and you casually head in the opposite direction. [D2/S1/Quick Thinking/Lose <em>Imprisoned</em>]</p>`,
	},
	1579: {
		index: 1579,
		text: `<p>You discover that the cell door has been left unlocked! You step out, and are surprised by your jailor, who was waiting in ambush.</p>
<p><b>No Skill:</b> He uses your "escape attempt" as an opportunity to have you severely beaten. [D-1/<em>Crippled</em>]</p>
<p><b>Quick Thinking:</b> You seize him and hurl him into the cell, slamming it shut behind him. While he shouts curses after you, you make good your escape, and only many weeks later do you even wonder if anyone came to feed him... [D2/S1/Luck/Lose <em>Imprisoned</em>]</p>`,
	},
	1580: {
		index: 1580,
		text: `<p>You wait. Time passes, and you grow thin in captivity. [D-1]</p>`,
	},
	1581: {
		index: 1581,
		text: `<p>You wait. Each day is a new experience in unpleasantness.</p>
<p><b>No Skill:</b> Your suffering is not without its gains; you learn better how to deal with unpleasant circumstances. [D1/Enduring Hardship]</p>
<p><b>Enduring Hardship:</b> Your long experience with suffering allows you to pass the time without going mad. However, you are still in prison. [D2]</p>`,
	},
	1582: {
		index: 1582,
		text: `<p>You spend each day praying for your release.</p>
<p><b>No Skill:</b> Allah hears your prayers; however, He does not answer them. [D1]</p>
<p><b>Piety:</b> You gain a greater understanding of the mysterious ways of the Most High, and with that knowledge, your mind and spirit are free. Your body, however, is still trapped. [S2]</p>`,
	},
	1583: {
		index: 1583,
		text: `<p>You drift on an empty barrel for many days before you finally come to a distant island.</p>
<p><b>No Skill:</b> You have no idea where you are. [<em>Lost</em>/Have another player move you to any island space]</p>
<p><b>Scholarship:</b> You recognize this from traveler's tales as the land of the Druids, and set out to find their temple. [Move to Stonehenge and have an immediate encounter]</p>`,
	},
	1584: {
		index: 1584,
		text: `<p>You drift, alone and with no idea of your whereabouts, for many days before you realize you are caught in a current.</p>
<p><b>No Skill:</b> You are swept rapidly far, far away from the place where you first sailed, and eventually come to a distant land. [D1/S1/Have another player move you to any coastal space]</p>
<p><b>Magic:</b> You notice a shimmering light across the water, and invoke a powerful name; a dense fog arises over the water, and you realize you are far from the lands of mortal men. [Move to the Dusky Land and have an immediate encounter]</p>`,
	},
	1585: {
		index: 1585,
		text: `<p>You manage to cling to a piece of driftwood, and survive for many days by catching fish and eating them raw. Long after you have lost track of the days, you see an island in the distance, and guide yourself to it.</p>
<p><b>No Skill:</b> The land is strange and unfamiliar, but at least you are again in the company of humans. [Have another player move you to any island space]</p>
<p><b>Fated</b> (mandatory), <b>Luck:</b> The island is exceptionally small, but you welcome any solid land after so long at sea. [Move to the Sepulchre of Solomon and have an immediate encounter]</p>`,
	},
	1586: {
		index: 1586,
		text: `<p>You drift, thirsty, hungry, and cold, for many days. In time, your mind begins to wander. When you come to your senses, you are being taken aboard a ship full of grinning rogues. "Well, surely you'll bring a fine ransom," they chortle.</p>
<p><b>No Skill:</b> You have no choice but to arrange for payment. [D1/S1/W-1 (Min: Penniless)/Have another player move you to any coastal space]</p>
<p><b>Determined, Wealth: Poor</b> or less (All mandatory unless you are <em>Crippled</em>, <em>Diseased</em> or <em>Insane</em>): The rogues decide you are more trouble than you are worth. They toss you overboard, and already weak, you sink rapidly. As you begin to drown, you feel hands grasping at your clothing. [D2/S1/Move to the Undersea Kingdom and have an immediate encounter]</p>
<p><b>Crippled, Diseased, Insane</b> (All mandatory): When they discover your affliction, they change their minds and make sport of you until you cease to provide amusement. They then set you adrift in an old barrel, and throw rocks and bottles at it until you sink. The last thing you hear, as you commend your soul unto Allah, is a particularly odious pirate wagering an insultingly small sum that you will fail to come up again. [Death]</p>`,
	},
	1587: {
		index: 1587,
		text: `<p>The other pins you with an icy stare as you grovel before him, and demands to know why he should not slay you immediately. You begin babbling incoherently.</p>
<p><b>No Skill:</b> "Very well," he laughs. "Your abject groveling has earned you your life. However, a beating never killed anyone." [D1/<em>Wounded</em>/Lose <em>Pursued</em>/<em>Scorned</em>]</p>
<p><b>Beguiling:</b> You earn the contempt of the other, and he ignores you completely. However, his enemies enjoy a hearty laugh at his expense, for your babbling included many shrewd insults directed at your tormentor. [D1/Quick Thinking/Acting and Disguise/Lose <em>Pursued</em>]</p>`,
	},
	1588: {
		index: 1588,
		text: `<p>The other listens to your words, and says after, "Your impassioned words and charm have distracted me from my vengeance, which I now see to be nothing but conceit and vanity. Thank you for your guidance. Please accept this gift."</p>
<p><b>No Skill:</b></p>
<p><em>If you are the same sex as the Pursuer:</em> The other bestows upon you a gift of some value. [D1/W+1 (Max: Rich)/Courtly Graces/Lose <em>Pursued</em>]</p>
<p><em>If you are of the opposite sex:</em> The gift is an evening of delights. The other is most enthusiastic and skillful, and you rise to the occasion. [D1/Seduction/Lose <em>Pursued</em>]</p>
<p><b>Scholarship:</b> "One of your vast knowledge would surely find interest in this." He gives you an ancient text of great value. [D2/S1/Lose <em>Pursued</em>/<b>Book of Hidden Treasures</b>]</p>`,
	},
	1589: {
		index: 1589,
		text: `<p>The other is quite suspicious of your motives, and his animosity is not deflected by your careful words.</p>
<p><b>No Skill:</b> While you speak, you are surrounded by servants of the other, and moving quickly they bind you and beat you. When they are done, they leave you alone and bleeding. [D1/<em>Crippled</em>/Lose <em>Pursued</em>]</p>
<p><b>Acting and Disguise:</b> You are able to alleviate his hatred of you through a display of hatred against his other enemies. He is completely fooled by your sham, and treats you as a loyal friend. [D1/S1/W+1 (Max: Rich)/Lose <em>Pursued</em>]</p>
<p><b>Brass Trumpet</b> (mandatory): The Brass Trumpet sounds while you converse with the other, and you realize that he is not dissuaded from his vengeance while you speak to him. You break away quickly and flee before he can bring you harm. [D1/Have another player move you one space in any direction]</p>`,
	},
	1590: {
		index: 1590,
		text: `<p>Your attempt to sweet-talk the other out of his anger is a pronounced failure. You then try to extricate yourself with fine words.</p>
<p><b>No Skill:</b> He is enraged. "You seek to appease me with fawning? Very well, I will forgive you and reward you with a suitable task—cleaning out my stables!" [D1/<em>Enslaved</em>/Lose <em>Pursued</em>]</p>
<p><b>Storytelling:</b> As part of your oratory, you tell the tale of the Lion and the Mouse, demonstrating that the strong should not abuse the weak. Your listener takes your meaning and allows you to leave unhindered. [D2/S2/Quick Thinking/Lose <em>Pursued</em>]</p>`,
	},
	1591: {
		index: 1591,
		text: `<p>You attempt to deal with the other to your benefit, but he grows ever more angry. Strong hands seize you from behind, and he says, "Nothing can save you from my wrath! My slave shall bear you out into the wilderness and slay you there, and bring me a jar of your blood as proof of the deed."</p>
<p><b>No Skill:</b> The servant bears you away, and when you are far from other eyes, he gashes your throat and fills the jar with your blood. He leaves you for dead, but you are found by a passing dervish, who tends your wounds as best he can. [D2/S1/Enduring Hardship/<em>Crippled</em>/Lose <em>Pursued</em>]</p>
<p><b>Appearance:</b> The servant is so taken by your beauty that he cannot stand to harm you. He slays an animal and brings its blood to his master instead. [D3/S1/Luck/Lose <em>Pursued</em>]</p>`,
	},
	1592: {
		index: 1592,
		text: `<p>The other cries, "No mercy!" and attacks you as you speak.</p>
<p><em>You may flee or stand and fight:</em></p>
<p><em>If you flee:</em> The other's attack hurts you, but you escape, knowing that you will see him again. [D1/<em>Wounded</em>/<em>Scorned</em>]</p>
<p><em>If you stand and fight, roll two dice, adding two each for Weapon Use and Determined:</em></p>
<p>❖ 2–8: You struggle bravely, but he wounds you badly and leaves you to die. [D1/<em>Crippled</em>/Lose <em>Pursued</em>]</p>
<p>❖ 9+: You manage to hold off your enemy through sheer determination. He salutes your courage and departs, bidding you to leave with your freedom. [D2/<em>Determined</em>/Lose <em>Pursued</em>]</p>`,
	},
	1593: {
		index: 1593,
		text: `<p>You stand before a djinni, fearsome in its wrath! Losing your senses, you attack!</p>
<p><b>No Skill:</b> It is of no use: the other is just too powerful. But an opportunity arises and you make your escape, with the bellows of your enemy following you. [D2/<em>Wounded</em>/Have another player place you in any non-city, non-sea space]</p>
<p><b>Weapon Use:</b> You fight for hours, but finally you prevail and your opponent is slain! Tales of your victory over this formidable other are told far and wide, and a wealthy man hires you as his bodyguard. [D2/S2/W+1 (Max: Rich)/Weapon Use/<em>Respected</em>/Lose <em>Pursued</em>]</p>
<p><b>Magic, Sparkling Spear:</b> The 'efreet is taken aback by the ferocity of your attack. Blow after blow is deflected but the 'efreet is visibly weakening and finally begs for mercy. Since you are a kind mortal you grant it—but not without payment. [D2/Lose <em>Pursued</em>/<b>Treasure</b>]</p>`,
	},
	1594: {
		index: 1594,
		text: `<p>Your enemy screams at your attack. Lesser djinn come to his aid.</p>
<p><b>No Skill:</b> A desperate defense wins you through, and you flee, free but wounded. [D1/<em>Wounded</em>]</p>
<p><b>Quick Thinking:</b> Once in a story you heard a name that would bind djinn to service. You cry it out, and the lesser djinn stagger before you. Their master shakes his head with sorrow. The other promises your freedom if you do not say that name again. You agree, but also question his motives. The other spins a tale of loneliness that touches your heart. You agree to stay with the other for a while and the other rejoices. The next few days become some of your fondest memories and when it is time to leave, you are given a precious gift. [D1/S1/W+3 (Max: Princely)/Magic/Lose <em>Pursued</em>/Move to any city space]</p>
<p><b>Sparkling Spear:</b> You defeat the servants easily and the demeanor of the master changes: he begs forgiveness for his transgression and grants you anything you wish. [D2/Choice of any 1 Skill/Lose <em>Pursued</em>]</p>
<p><b>Magic:</b> The 'efreet laughs at your paltry attempt at magic. "You call that magic, mortal?! I shall show you magic!" An unseen hand grabs you and dashes you to the floor. When you regain consciousness you are wearing a servant's garb. Another slave puts a platter of food in your hands and directs you to your new master. As you present the food to him you trip, spilling everything onto him. The 'efreet bellows in rage and blasts you into a pile of ashes. [Death]</p>`,
	},
	1595: {
		index: 1595,
		text: `<p>The other stares at you with wild eyes. He chants a phrase in a strange tongue, and you are rooted to the spot! He gestures magically.</p>
<p><b>No Skill:</b> There is a loud *poof* and suddenly you feel... different. "Now you shall bother me no more," the other says, and departs. [D1/S1/<em>Beast Form</em>/Lose <em>Pursued</em>]</p>
<p><b>Courtly Graces, Acting and Disguise:</b> Your soft voice and well-reasoned arguments convince the other that his hatred of you is ill-founded, and he frees you from captivity. [D2/S2/Luck/Lose <em>Pursued</em>]</p>
<p><b>Magic:</b> You cry out the names graven on the Seal Ring of the Prophet Solomon, and you are freed; then you turn his attack against him, and delight to see him turned into an ape, unable to speak. You drive the ape away, and never hear of him again. Word of your great victory spreads throughout the world and none bothers you in the future. [D2/S2/Lose <em>Pursued</em>]</p>`,
	},
	1596: {
		index: 1596,
		text: `<p>You are fore-warned that the other has come to this place, and you flee blindly before he can find you. [Have another player move you one space in any direction]</p>`,
	},
	1597: {
		index: 1597,
		text: `<p>"Aha," shouts the other, who catches you as you try to avoid him. "You are the one I have sought for many miles, through hardship and injustice! Prepare to yield your life for your crimes!"</p>
<p><b>No Skill:</b> You take advantage of the other's long tirade to take flight and disappear into the crowd. [D1]</p>
<p><b>Luck:</b> In his fury, the other attacks hastily and stumbles, falling at your feet. He is at your mercy, and you take this opportunity to rid yourself of his annoying threats forever. [D2/W+1 (Max: Rich)/Lose <em>Pursued</em>]</p>`,
	},
	1598: {
		index: 1598,
		text: `<p>The other has sworn never to rest until you are destroyed. He pursues you without rest, and will be merciless in his revenge.</p>
<p><b>No Skill:</b> When the other cannot find you easily, he spreads lies about your character, and you are soon shunned by all decent folk. Your wealth is stripped from you by those who believe ill of you, as well. Satisfied with his revenge, the other abandons his pursuit. [D-1/W-2 (Min: Poor)/<em>Scorned</em>/Lose <em>Pursued</em>]</p>
<p><b>Beguiling, Acting and Disguise:</b> In a disguise, you speak to the other, praising your character and virtue. He falls for your trick, and approaches you later in peace, making amends. [D1/S2/Acting and Disguise/Lose <em>Pursued</em>]</p>
<p><b>Brass Trumpet:</b> However, the magic of the Brass Trumpet allows you to keep one step ahead of him, and never again do you run afoul of the other. [D1/Lose <em>Pursued</em>]</p>`,
	},
	1599: {
		index: 1599,
		text: `<p>You carefully steer clear of the other, but soon you hear his voice behind you, crying out your name.</p>
<p><b>No Skill:</b> "So, you would hide from me, would you? Well, defend yourself!" Before you can raise your sword, he cuts you deeply, and you flee from him. [D1/<em>Wounded</em>]</p>
<p><b>Stealth and Stealing, Brass Trumpet:</b> You quickly absent yourself from the area, moving with great haste, and manage to avoid the other for another day. [D1]</p>`,
	},
};
