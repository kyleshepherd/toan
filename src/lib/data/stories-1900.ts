import type { Story } from "./stories";

export const stories1900: Record<number, Story> = {
	1900: {
		index: 1900,
		text: `<p>You strike the other a blow across the cheek. With a baleful glare, he looks at you and spits out a curse.</p>
<p><b>No Skill:</b> You might suffer for it, but if someone is going to curse you, you're not going to let them off with just one little tap. You follow through with a sound beating before continuing on your way. [S1/<em>Accursed</em>]</p>
<p><b>Bargaining and Evaluation:</b> You regret your rash action and fear for the consequences of the curse. You ask the other how you might make amends. He is moved by your apology and agrees to share with you some insights from his astrology. [D1/Wisdom/<em>Fated</em>]</p>`,
	},
	1901: {
		index: 1901,
		text: `<p>Beating the other mercilessly, you barely notice when the guards arrive to arrest you. It seems that the other is a favorite of the Sultan!</p>
<p><b>No Skill:</b> You plead your case before the court, but the Sultan does not believe you. He orders you cast into his dungeons. [S1/<em>Imprisoned</em>]</p>
<p><b>Seamanship:</b> The Sultan learns of your skills as a sailor. He has need of such a man as you. He agrees to spare your life in exchange for delivering a message across a particularly dangerous sea.</p>
<p><em>Do you agree to his offer?</em></p>
<p><em>If you agree: roll two dice, adding one for Seamanship at Master level:</em></p>
<p>❖ 2–5: Your skills are not up to the task. The ship is sunk. [Go to paragraph 315]</p>
<p>❖ 6–11: You deliver the Sultan's message. The recipient is pleased. [D1/Courtly Graces]</p>
<p>❖ 12+: You arrive with the message swiftly. The recipient is delighted with the news, and bestows great honors upon you for your skill and bravery. [D1/S1/<em>Robe of Honor</em>]</p>
<p><em>If you do not agree:</em> [S1/<em>Imprisoned</em>]</p>`,
	},
	1902: {
		index: 1902,
		text: `<p>"O most esteemed one, please accept this gift." You present the other with fine viands and tokens of friendship, hoping that he might use his power and influence to aid you in your cause.</p>
<p><b>No Skill:</b> The other enjoys making you grovel for a bit, and finally agrees to give you the aid you require. [D1/W-1 (Min. Poor)/You may lose one status of your choice]</p>
<p><b>Seamanship:</b> Among your gifts are some goods you collected from far distant shores during your travels. The other is delighted and impressed by the unique trinkets and requests that you tell him tales of your journey. After a long night of conversation, he agrees to help with your quest. [D1/S1/Storytelling/You may lose one status of your choice]</p>`,
	},
	1903: {
		index: 1903,
		text: `<p>"What use have I for such petty baubles!" The other mocks your offered gift.</p>
<p><b>No Skill:</b> You are embarrassed by the other's rejection, and meekly make your way out of town. [D1/<em>Envious</em>]</p>
<p><b>Seduction:</b> "Perhaps I can interest you in a different kind of bauble." The other finds your offer far more tempting and agreeable. [S1/<b>Beloved</b>]</p>
<p><b>Bargaining and Evaluation:</b> "Clearly, esteemed one, you have not fully examined these items, for if you had you would see..." With your skill of salesmanship, you convince the other that your gifts are of great value. The other grants you gifts of actual worth in exchange. [D1/<b>Treasure</b>]</p>`,
	},
	1904: {
		index: 1904,
		text: `<p>The other is delighted by your generous gift. He invites you to his home for the evening.</p>
<p><b>No Skill:</b> You enjoy a fine and restful evening in the other's company. He welcomes you to explore his fine collection of art and literature. You find a number of intriguing volumes, and he insists that you keep them. [D1/W+1 (Max: Rich)/Scholarship]</p>
<p><b>Luck:</b> The other introduces you to his wife, and you realize that she is your long-lost cousin! You never expected to see her again. You happily tell each other your tales and journeys, and she tells you of the dreams she has been having, dreams she believes are prophesies of your future. The other is pleased to discover your relation and insists on giving you every possible assistance with your quest. [D2/W+1 (Max: Princely)/<em>Fated</em>]</p>`,
	},
	1905: {
		index: 1905,
		text: `<p>Those who carry such illness shouldn't go forth in public! You beat the other for his recklessness.</p>
<p><b>No Skill:</b> The locals are relieved that you were brave enough to chase the other off. The townsfolk view you as a hero. [D1/<em>Respected</em>]</p>
<p><b>Seamanship, Wilderness Lore:</b> As you vent your anger on the unfortunate other, you realize that he merely suffers from scurvy and presents no danger to others. Feeling remorse for your cruel actions, you offer to aid the other for his pains. [D1/W-1 (Min: Respectable)/Piety]</p>`,
	},
	1906: {
		index: 1906,
		text: `<p>After the sickly other bothers you for hours, you decide that the only way to be rid of him is a sound beating.</p>
<p><b>No Skill:</b> You feel much better after flogging the other. Unfortunately, you spent too much time too close to him. Soon, you find that you bear the same affliction. [S1/<em>Diseased</em>]</p>
<p><b>Bargaining and Evaluation:</b> You know better than to get too close to a sickly wretch like this, so you hire someone to do the deed for you. His technique is impressive, and you learn a few useful tricks yourself. [D1/Weapon Use]</p>`,
	},
	1907: {
		index: 1907,
		text: `<p>Though your intent was to protect the town from the dangers of disease, the crowd of onlookers is repulsed by your poor treatment of the unfortunate other.</p>
<p><b>No Skill:</b> Your loss of status in the eyes of the public makes your business dealings very unprofitable. [D-1/W-1 (Min: Poor)/<em>Scorned</em>]</p>
<p><b>Acting and Disguise:</b> In order to do your business in town, you are forced to change your identity. [S1]</p>`,
	},
	1908: {
		index: 1908,
		text: `<p>No one will risk illness to come to the aid of a diseased wretch like this other.</p>
<p><b>No Skill:</b> Carefully covering your face, you boldly approach the sickly other and seize his begging bowl full of coins. [W+1 (Max: Poor)]</p>
<p><b>Bargaining and Evaluation:</b> Why use violence to rob the other when his disease-addled brain makes him a perfect mark for a simple swindle? You trick the other into paying you his hard-won coins in exchange for a jar of fine snake oil. [S1/W+1 (Max: Respectable)/Beguiling]</p>`,
	},
	1909: {
		index: 1909,
		text: `<p>You lure the ill-fated other to the wharf, where you know you will have ample opportunity to rob him.</p>
<p><b>No Skill:</b> Unfortunately, you aren't the only thief working the docks tonight. Before you can strike your mark, a blow to the back of your head leaves you unconscious. [S1/W-1 (Min: Penniless)]</p>
<p><b>Seamanship:</b> To prevent him from turning witness against you, you lure the sickly other onto a ship you know to be leaving with the tide. Once you stow him aboard securely, you take his purse and make your way back to shore. [S1/W+1 (Max: Poor)]</p>`,
	},
	1910: {
		index: 1910,
		text: `<p>Even though the locals dislike having sickly vagabonds darkening their streets, they may take offense to a cold-hearted theft. But a few words with the local magistrate and those bearers of disease soon find themselves cast outside the city walls.</p>
<p><b>No Skill:</b> Away from the protection of the townsfolk, the ill and sickly are easy targets for thieves. You take a bit more than your fair share. [S1/W+1 (Max: Rich)]</p>
<p><b>Wilderness Lore:</b> Once the helpless sick are cast aside, another plague descends upon them: a plague of thieves. But you have better plans. When the thieves make their way into the wilderness, they find you waiting in ambush to relieve them of their guilty earnings! [D1/S1/W+2 (Max: Rich)]</p>`,
	},
	1911: {
		index: 1911,
		text: `<p>The unsightly view of the sickly other has plagued you for some days. You must be rid of the taunting visage before you take leave of your senses! However, the other wretched denizens of the Beggar's Quarter rise up to defend their own.</p>
<p><b>No Skill:</b> It is hopeless—they are too many and they force you to withdraw. Finally, the memory of horror is more than you can bear. You flee the town, leaving your wits behind you. [D-1/<em>Insane</em>]</p>
<p><b>Seduction:</b> When it is clear that there are too many wretches for you to overcome on your own, you approach the captain of the Sultan's men to aid you in your task. He finds your charms irresistible, and before long the haunting face of the other is taken far from you. [S1/Enduring Hardship]</p>`,
	},
	1912: {
		index: 1912,
		text: `<p>You recognize the other as one who wronged you previously. You determine to extract your full revenge.</p>
<p><b>No Skill:</b> Without significant preparations, you attack the other, leaving him dead on the cobblestones. But your brazen attack did not go unnoticed, and soon his relatives drag you before the Sultan. As punishment, you are ordered to serve the other's family until his debts are paid. [S1/<em>Enslaved</em>]</p>
<p><b>Seamanship:</b> You remember that the other belongs to a powerful family in these parts. Fortunately, a sea captain you aided some time back has recently arrived in port and agrees to help you escape their wrath. Immediately before the ship sails, you slay the villain and make good your escape by sea. [D1/S1/Bargaining and Evaluation/<em>Pursued</em> (PRINCE)]</p>`,
	},
	1913: {
		index: 1913,
		text: `<p>The village cannot survive with all the sick who cluster about the square and frighten passersby. You identify the other as their leader, and resolve to attack him.</p>
<p><b>No Skill:</b> None stand up against your furious assault, and the town is soon free from the plague-ridden rebel. But it may be sometime before you feel well again... [D1/S1/<em>Diseased</em>]</p>
<p><b>Wilderness Lore:</b> Each night, the plagued withdraw from the city to a haven in the wilderness not far away. Once you locate them there, it is easy to attack the other when he is in the vulnerable passage between town and refuge. [D1/S1/Stealth and Stealing]</p>`,
	},
	1914: {
		index: 1914,
		text: `<p>The haughty attitude of the other forces you to teach him some manners at the end of your stout oaken rod.</p>
<p><b>No Skill:</b> You give the other a sound beating. You feel much better. [S1]</p>
<p><b>Seduction:</b> Your first blow knocks the other's turban askew, and you recognize him as a wealthy and powerful merchant! No doubt he is hiding from his enemies and would be delighted to have some friendly company! [D1/Courtly Graces]</p>
<p><b>Bargaining and Evaluation:</b> As you beat the other, you realize that it is a disguised merchant! You offer to help him with his schemes and earn a healthy share of the profits. [D1/W+2 (Max: Rich)]</p>`,
	},
	1915: {
		index: 1915,
		text: `<p>The mysterious other has been following you all day. Growing concerned, you turn on him as the sun dips low in the horizon.</p>
<p><b>No Skill:</b> As you begin beating the other, he calls for help. To your amazement, the beggars in the square are revealed as bodyguards! For assaulting the prince, you find yourself cast into the dungeons. [S1/<em>Imprisoned</em>]</p>
<p><b>Wilderness Lore:</b> As you turn, arm raised to strike, you notice something odd about the other. Though you think of him as prey, you see in him the movements of a hunter. Your instincts stay your hand and you withdraw, wondering just who you spared today. [D1/S1/Wisdom]</p>`,
	},
	1916: {
		index: 1916,
		text: `<p>Furious for your losses at the gambling table, you are in no mood to be accosted by the other. You unleash a terrible beating on the other.</p>
<p><b>No Skill:</b> Having satisfied your anger, you make a hasty exit before the Sultan's men find your victim. [D1]</p>
<p><b>Seamanship:</b> After a few blows, you suddenly recognize the other. He is a wanted pirate captain! Delighted at the opportunity, you not only finish beating him soundly but then turn him over to the Sultan's men for a reward! [D1/S1/W+1 (Max: Princely)]</p>`,
	},
	1917: {
		index: 1917,
		text: `<p>You can tell that there is more than meets the eye with the other. You decide to give him some coins from your purse to gauge his response.</p>
<p><b>No Skill:</b> The other grins at you and thanks you profusely. Only later do you realize that he also stole your purse! [D-1/W-2 (Min: Poor)]</p>
<p><b>Seduction:</b> You are skilled enough to know when someone is playing you for advantage. Once again, your instincts are correct. The other is a common thief! Catching him red-handed, you turn him in for a reward. [D1/W+1 (Max: Respectable)]</p>`,
	},
	1918: {
		index: 1918,
		text: `<p>You heart is filled with pity at the plight of the other. You desire to do him a kindness by sharing your hard-earned wealth.</p>
<p><b>No Skill:</b> As soon as your coins hit the cup, the other rises up and reveals himself as a devoted dervish! He explains his long search for a generous soul with whom he can share his long-gathered wisdom. [D1/S1/W-1 (Min: Respectable)/Piety/Opportunity to enter the Sepulchre of Solomon]</p>
<p><b>Bargaining and Evaluation:</b> You try to negotiate with the other, when he reveals that is actually a dervish in search of an honest man. Your desire for wealth has disappointed the holy man, who vanishes in a puff of dusty wind. He leaves behind only his disguise. [D-1/S1/Acting and Disguise]</p>`,
	},
	1919: {
		index: 1919,
		text: `<p>Once you realize that the other is not actually a beggar, but rather a merchant in disguise, you are happy to discuss business.</p>
<p><b>No Skill:</b> Though the other has no news to assist you, he is pleased by your information. You learn some useful ideas to improve your presentation, though. [S1/Appearance]</p>
<p><b>Seamanship:</b> The other tells you some very interesting things about some trade routes you are familiar with. Together, you develop a very profitable scheme. [D1/W+1 (Max: Rich)]</p>
<p><b>Courtly Graces:</b> The disguised merchant is a close friend of a distant Sultan, who has made enemies with the local king. You agree to speak to the king on behalf of the merchant. He is so grateful that he makes you his full partner. [D1/S1/W+2 (Max: Princely)]</p>`,
	},
	1920: {
		index: 1920,
		text: `<p>What kind of cruel-hearted knave would rob a destitute wretch like this? The other has nothing of value. [D-1]</p>`,
	},
	1921: {
		index: 1921,
		text: `<p>The penniless other seems to have nothing worth stealing. Desperate, you resolve to take even his last pitiful rags.</p>
<p><b>No Skill:</b> A passer-by catches you in this vile act. Quickly, rumors of your cruelty spread throughout town. [D-1/S-1/<em>Scorned</em>]</p>
<p><b>Seamanship:</b> As you strip the unfortunate other, you discover a series of strange tattoos on his body. You realize that he has traveled here from distant Cathay! You decide to befriend him, and in gratitude he tells you many tales of his distant home. [D1/S1/Storytelling]</p>`,
	},
	1922: {
		index: 1922,
		text: `<p>The other has nothing to steal save the rags on his back.</p>
<p><b>No Skill:</b> That night, you are falsely accused and forced to evade the Sultan's men. You discover that the other's rags make a convincing disguise. [D1/Acting and Disguise]</p>
<p><b>Seduction:</b> When you grab the other's only item of value, a silken turban, you realize you have uncovered a young noble in disguise! You charm the youngster with your wiles and earn an invitation to the palace. [D1/S1/Courtly Graces]</p>`,
	},
	1923: {
		index: 1923,
		text: `<p>The other has been charged with stealing bread, which he claims he took to feed his family. The Sultan has chosen you to deliver his punishment.</p>
<p><b>No Skill:</b> Though your heart isn't in it, you render to the other twelve lashes, knowing that there is no justice save with Allah. [S1/Piety]</p>
<p><b>Seamanship:</b> You remember a time when your ship captain had you flogged for a crime you did not commit. The boatswain gave you a certain root to grasp in your teeth, which dulled the pain. You slip this root to the other before your ministrations. In gratitude, he teaches you some valuable secrets once the punishment is complete. [D1/Storytelling]</p>`,
	},
	1924: {
		index: 1924,
		text: `<p>With a heavy heart, you do what must be done. This sorrowful wretch will never learn except at the end of a sound beating.</p>
<p><b>No Skill:</b> The anguished cries of the other are more than you can bear. You leave the beating half-done to wallow in your own sorrows. [S1/<em>Grief Stricken</em>]</p>
<p><b>Wilderness Lore, Enduring Hardship:</b> Nature teaches a hard lesson, and you must be willing to do the same. Despite the pleas from the other, you deliver the well-deserved beating with as much mercy as nature allows. [D1/<em>Determined</em>]</p>
<p><b>Bargaining and Evaluation:</b> You just can't bring yourself to do it. You have no choice but to hire a hunchback to finish the beating for you. To your disgust, the hunchback enjoys the task, so you find that you need to teach him a lesson as well. [D1/S1/Wisdom]</p>`,
	},
	1925: {
		index: 1925,
		text: `<p>The deceitful slob has been telling false tales of sorrow to extract coins from honest folk. You know just the right punishment for such behavior! Your enthusiastic beating soon draws a crowd, who cheer you for having the courage to do what they could not do themselves.</p>
<p><b>No Skill:</b> The townsfolk treat you well for your actions. [D1/S1]</p>
<p><b>Courtly Graces:</b> Word of your just actions reaches the ear of the Sultan, who showers you with honors. [D1/<em>Robe of Honor</em>]</p>`,
	},
	1926: {
		index: 1926,
		text: `<p>The other laughs mockingly when you offer him alms. "Can you not see that I have no use for your pity?" He continues to laugh as he turns his back to you.</p>
<p><b>No Skill:</b> The locals are attracted by the other's laughter and soon they join in mocking you. [S1/<em>Scorned</em>]</p>
<p><b>Luck:</b> The other turns and bumps into a short-tempered magician, who transforms him into an ape! Thus is mockery repaid with mockery! [D1/S1]</p>`,
	},
	1927: {
		index: 1927,
		text: `<p>You notice a mysterious glimmer in the eye of the other as you hand him a few coins. There may be more to this one than you first thought.</p>
<p><b>No Skill:</b> You shrug off your intuition and continue on your way. Only later do you discover that you gave him your purse, and you don't remember why. [D1/W-2 (Min: Penniless)]</p>
<p><b>Seduction (mandatory):</b> You find yourself strangely attracted to the other, though you cannot be sure why. You return to visit him later in the day, hoping to find yourself drawn into a torrid affair. When your senses return, you discover that he has cast a charm upon you! [D-1/S2/<em>Ensorcelled</em>]</p>
<p><b>Scholarship:</b> This must be some kind of magician in disguise! You quickly avert your gaze before he can charm you with his magic. [D1/S1/Quick Thinking]</p>`,
	},
	1928: {
		index: 1928,
		text: `<p>You approach the town center just in time to see some ruffians toss the other into the fountain. To your astonishment, he floats just above the water, never getting wet!</p>
<p><b>No Skill:</b> The other is clearly ensorcelled. Lest he turn his ire upon you, best you give him a generous donation. A few coins ought to suffice. [S1/W-1 (Min: Poor)]</p>
<p><b>Seamanship:</b> You aid the other back onto dry land. He thanks you by telling you his tale. Cursed by the King of Atlantis, he can never touch water. You have heard tale of similar curses during your days at sea, and you know a way to lift it. [D1/S1/Storytelling]</p>`,
	},
	1929: {
		index: 1929,
		text: `<p>Since you arrived in this place, you have heard strange rumors surrounding the other. You have come to believe that he has some kind of mystical powers.</p>
<p><b>No Skill:</b> You approach the other for aid. He looks at you deeply and declares that there is a shadow over your soul that must be cleansed before you can achieve your destiny. [D1/S1/<em>On Pilgrimage</em>]</p>
<p><b>Storytelling:</b> The other is moved by your tale of woe. He agrees to help you, but you must first retrieve a rare bird for him. [D1/<em>Under Geas</em>/You may lose one status of your choice]</p>
<p><b>Wilderness Lore:</b> The other offers to help you on your quest if you can locate for him a tail feather from a rare bird. You know of a nest of this creature not far from here. You retrieve the feather. The other chants unspeakable words and the feather transforms into an enormous rukh! Before you can speak, the rukh grabs you and flies you far across the world before depositing you safely in a strange place. [D1/S1/Move to the Jeweled Fortress and have an immediate encounter]</p>`,
	},
	1930: {
		index: 1930,
		text: `<p>You have observed the other for a few days, and you are certain that he has unnatural powers. You believe those powers can help you attain your goal.</p>
<p><b>No Skill:</b> The other must have some kind of mystic ability. Every time you approach him, you suddenly find yourself on a hill outside town! You are not deterred, and finally the other agrees to hear your tale. [D1/S1/<em>Determined</em>]</p>
<p><b>Seamanship:</b> You finally have an opportunity to tell your story to the other. He listens carefully, and tells you that he knows exactly where you need to be. You blink and find yourself on the deck of a ship! [D1/Move to any sea space]</p>`,
	},
	1931: {
		index: 1931,
		text: `<p>In need of an assistant, you seek to employ someone worthy. Your search brings you to the other, who upon seeing you points and begins to speak gibberish.</p>
<p><b>No Skill:</b> You are frightened by the undecipherable words of the other, and worry that it may turn the townsfolk against you. You make a hasty retreat. [S1]</p>
<p><b>Scholarship:</b> You recognize the signs of an enchantment upon the other. Quickly and carefully, you lead the other to a sacred dervish, who agrees to aid him. [D1/S1]</p>`,
	},
	1932: {
		index: 1932,
		text: `<p>You are moved to generosity by the sorry tale of the other's unrequited love for a beautiful noblewoman.</p>
<p><b>No Skill:</b> It is sad that the other is so hideous. None could love such a creature. At least your coins will comfort him somewhat. [S1/W-1 (Min: Respectable)]</p>
<p><b>Seduction:</b> The idea of helping the other woo the noblewoman intrigues and amuses you. You offer to assist him with your skills and talents. His gratitude is worthy of the epics. [D1/S1/Acting and Disguise]</p>
<p><b>Bargaining and Evaluation:</b> You may not know the secrets to unlock the noblewoman's heart, but you do know how to shower her with gifts. You assist the other in procuring the finest tokens with which to woo his love. [D1/W-2 (Min. Poor)/Seduction]</p>`,
	},
	1933: {
		index: 1933,
		text: `<p>After a late night of heavy drinking, you find yourself in the company of the other. He tells you his tale of woe.</p>
<p><b>No Skill:</b> One of such horrendous visage could never earn the love of a chaste maiden. Though you cannot help the other, at least you can pay for his drinks. [S1]</p>
<p><b>Seamanship:</b> As you listen to the other's tale, you are reminded of a legend you heard while sailing between the Pillars of Hercules. It is said that on an island there has a spring, and whoever drinks of its waters will fall instantly in love with the first person they see. The other thanks you for your tale, and leaves immediately, no doubt bound for the island of legend! Would that you could be just as determined! [D1/Enduring Hardship]</p>`,
	},
	1934: {
		index: 1934,
		text: `<p>You encounter the other weeping by the roadside. You offer to share some of your wealth to aid with his troubles, but he spurns your offers. "It is my heart that makes me weep, not my purse!"</p>
<p><b>No Skill:</b> The other cannot be consoled by your words. The harder you try to help, the stronger his refusals become. Finally, he bellows a curse at you and departs. [D-1/S1/<em>Accursed</em>]</p>
<p><b>Wisdom:</b> You know that it is the soul of folly to meddle in affairs of the heart. You wish the other well and continue your journey. [D1/S1]</p>`,
	},
	1935: {
		index: 1935,
		text: `<p>At first, you think that the other is simply mad, talking to himself in different voices. But you realize that he has become possessed by some spirit. You hope that he will leave you alone if you pay him some gold.</p>
<p><b>No Skill:</b> The other slaps your hand away, sending the coins flying, then shouts blasphemies in your face. You are too stunned to react as the other presses a single finger against your forehead, then runs gibbering off into the darkness. [S1/<em>Accursed</em>]</p>
<p><b>Wilderness Lore:</b> The other behaves like dangerous animal, so you treat him like one. Very cautiously, you place the coins on the ground from a safe distance, then retreat. To your amazement, the other approaches the coins, sniffs them, and proceeds to eat them one at a time. [D1/S1]</p>`,
	},
	1936: {
		index: 1936,
		text: `<p>You go to perform your pious duty, giving alms to the unfortunates. But the other seems to behave oddly. Some strange aura seems to surround him.</p>
<p><b>No Skill:</b> In your haste to be far away from the bizarre other, you give him many more coins than you intend. [D1/W-1 (Min: Respectable)]</p>
<p><b>Storytelling:</b> Surely these are the self-same signs of possession by a foul marid! As quickly as you can, you find a devout dervish and lead him to the other. The dervish commends you for your actions. [D1/S1/Wisdom]</p>`,
	},
	1937: {
		index: 1937,
		text: `<p>Ah, if only you had been more careful! You thought the other merely crazy, but now you realize he is actually possessed by a demonic shayatin!</p>
<p><b>No Skill:</b> Your last memory is of the other uttering some dark curse. You have no memory of what happens next or how you came to be where you are now. [S1/Have another player move you to any space except a Place of Power]</p>
<p><b>Seduction:</b> Falling to your knees before the other and speaking in a soft voice, you praise the demon for his power and beauty. You entice the spirit into your embrace. With its guard down, you plunge your dagger into the heart of the other! The shayatin screams in agony as the host dies before he can escape. [D1/S1/Quick Thinking]</p>`,
	},
	1938: {
		index: 1938,
		text: `<p>The man at the inn told you that the other could be trusted, so you hired him. But you have since learned that the other is possessed by an evil spirit!</p>
<p><b>No Skill:</b> The evil spirit conducts a series of crimes and arranges for the blame to fall on you! Your reputation in this town is ruined. [S1/<em>Scorned</em>]</p>
<p><b>Bargaining and Evaluation:</b> You make a deal with the spirit possessing the other. In exchange for releasing him, you allow the spirit to control your actions for a time. [D1/<em>Ensorcelled</em>]</p>`,
	},
	1939: {
		index: 1939,
		text: `<p>Hiring someone who has been possessed by the spirit of an 'efreet does have some advantages.</p>
<p><b>No Skill:</b> The enormous strength of the other allows him to carry extremely large loads. Together you make a fine profit. [S1/W+1 (Max: Rich)]</p>
<p><b>Wilderness Lore:</b> With the superhuman powers of the other you are able to travel through areas normally impassable. With your knowledge of the region, you can deliver goods twice as fast as any other merchant. You quickly amass a large fortune, but a few days later, the other disappears without a trace. [D1/W+2 (Max: Princely)]</p>
<p><b>Seduction:</b> You have heard legends of the lands of the 'efreet, and you are determined to see them for yourself. Using your charms, you entice the spirit into showing you the way. [S1/Move to the Dusky Land and have an immediate encounter]</p>`,
	},
	1940: {
		index: 1940,
		text: `<p>You have learned of a certain someone who has fallen prey to a vile spirit. You resolve to help him. To earn the trust of the possessing force, you pretend to hire the other.</p>
<p><b>No Skill:</b> Despite your best efforts, you cannot trick the spirit to free the unfortunate other. Laughing evilly, the spirit forces the other to kill himself before your very eyes! [S1/<em>Grief Stricken</em>]</p>
<p><b>Seamanship:</b> You know that many such spirits cannot abide running water. It takes some trickery, but you are able to get the other aboard a boat and out onto the water. Unable to escape the vessel, the spirit rampages around the boat before finally releasing the other and disappearing into the night. [D1/S1/Acting and Disguise]</p>`,
	},
	1941: {
		index: 1941,
		text: `<p>It is well known that many guards are, at some level, corrupt. Perhaps you can find a guard at the Crystal Palace who will allow you to pass in exchange for some small token?</p>
<p><b>No Skill:</b> Your clumsy efforts at bribery are met with snorts of derision by the guards. Without ceremony, you are dragged away from the palace and cast into the muddy road. [S1/<em>Scorned</em>]</p>
<p><b>Bargaining and Evaluation:</b> With a clever gleam in your eye, you approach a lone guard and strike up a conversation. Once you have trust, you learn of his desire to court a certain young maiden from the nearby village. In exchange for a suitable courting gift, he agrees to look the other way as you sneak into the palace. [D1/S1]</p>`,
	},
	1942: {
		index: 1942,
		text: `<p>You learn that the palace is overseen by a twin brother and sister, trusted by the king yet wary of each other. Perhaps if you could win one of them over to your cause, you could take advantage of their mutual distrust to gain access.</p>
<p><b>No Skill:</b> Taking great effort to make yourself appear genuine, you approach first the brother, then the sister. You quickly learn, however, that their loyalty to their king is too strong for you to turn them against him. [S1]</p>
<p><b>Seduction:</b> Using your wiles and charms, you are able to convince one of the twins to confide in you. The work is difficult, as they have very high standards and are very loyal to their king. But you finally achieve your goal and enter the Crystal Palace by the side of your new companion. [D1/S1/Appearance]</p>`,
	},
	1943: {
		index: 1943,
		text: `<p>While you sit outside the palace marveling at its beauty and the irony of such a beautiful place being ruled by such a fearsome tyrant, you notice a rotund merchant approaching, perched on a tiny donkey.</p>
<p><b>No Skill:</b> You strike up a conversation with the jovial merchant, complimenting him on his beautiful robes and silken fez. He agrees to bring you along on his visit to the Crystal Palace while he offers his wares to the king within. Inside the palace your eyes are greeted wonders beyond your imagining. But the most remarkable thing is what you hear come to pass between the merchant and the king. Why, so skilled is the merchant's tongue that if he were selling bags of desert sand, you'd be first in line to buy them at any price! [D1/Bargaining and Evaluation]</p>
<p><b>Courtly Graces:</b> You convince the merchant to allow you to accompany him when he visits the Crystal Palace. Once inside, your etiquette and wit impress both the merchant and the wretched king. You are able to negotiate a deal between them, for which you are well rewarded by both parties. [D1/S1/W+2 (Max: Rich)]</p>`,
	},
	1944: {
		index: 1944,
		text: `<p>You have learned that your good friend, the prince Taj el Mulouk, has been expelled from the Islands of Camphor by the jealous Sultan when he learned of his daughter's love for the prince. You cannot bear to see your friend suffer away from his beloved, so you devise a scheme to reunite them.</p>
<p><b>No Skill:</b> Sailing to the island, you are met by the Sultan's fleet, which is determined to block you from landing. You launch a bold attack, but the prince's small crew is no match for such a large fleet. You are forced to retreat. [S1]</p>
<p><b>Seamanship:</b> The Sultan of the Islands of Camphor defends his realm with a mighty fleet, and you know that the prince does not own the loyalty of enough men to fight them face-to-face. But, you know of a hidden (but dangerous!) passage to an undefended part of the island. It takes all of your skill as a sailor, but you and your friend land safely near the palace. [D1/S1/Seamanship]</p>`,
	},
	1945: {
		index: 1945,
		text: `<p>While you are attending a wedding celebration on the Islands of Camphor, you stumble upon a plot to assassinate the Sultan!</p>
<p><b>No Skill:</b> You raise a cry of alarm when you discover the intruders. Knowing that their numbers are too great for you alone to fight, you trick them into chasing you through the palace. There are so many rooms and passageways that you quickly confuse and disorient the would-be assassins, and the palace guards quickly respond to your alarm. [D2/Quick Thinking]</p>
<p><b>Weapon Use</b> at Talent level: With a shout and a challenge, you whip out your scimitar and plunge into the mass of intruders. You fell two of the rogues before their numbers overwhelm you, and a blow to the back of your head drops a black curtain over the world. You hope that the clamor of battle was enough to warn the Sultan. [D1/S1/<em>Wounded</em>]</p>
<p><b>Weapon Use</b> at Master level, <b>Determined</b> (All mandatory): You calmly draw the curved blade of your bejeweled scimitar, a recent gift from the Sultan, and cast your dark gaze on the intruders. Unnerved by your steady resolve, they attack you reluctantly. Though you are nicked and cut with many minor wounds, you quickly dispatch half of the thugs, and the rest flee in terror from your whirling blade. When he learns of your bravery and skill, the Sultan rewards you most handsomely. [D2/S1/W+1 (Max: Princely)/<b>Thunderbolt Sword</b>]</p>`,
	},
	1946: {
		index: 1946,
		text: `<p>Distraught by his love-sick heart, your dear friend prince Taj el Mulouk devises a mad plan to seize the focus of his desires, the beautiful princess Dunya, by force. Before you know what has happened, you find yourself at your friend's side, sword in hand, facing the menacing soldiers of the Islands of Camphor.</p>
<p><b>No Skill:</b> Clearly, two swordsmen stand no chance against so many, but the madness of your friend infects you as well, and together you launch an attack that poets will remember for ages. Though the outcome is never in doubt, the obvious insanity of the maneuver somehow earns you both an unexpected clemency. [S1/Weapon Use/<em>Insane</em>]</p>
<p><b>Wisdom:</b> You take one look at the assembly army before you, and you know that your friend's life will be forfeit if you attack. Whispering a prayer for forgiveness, you step behind your good friend, and bringing the pommel of your blade down upon his head, render him unconscious. You hope that when he awakes, he will see the wisdom of your action and find it in his heart to forgive you. [D1/S1]</p>`,
	},
	1947: {
		index: 1947,
		text: `<p>The gibbering sounds made by the naked primitives who captured you might be a language, but it is unlike any you have ever heard. You pray to the All-Merciful that you have not fallen into the hands of cannibals.</p>
<p><b>No Skill:</b> It appears that the natives do not intend to eat you, but the fate they have in mind is still unpleasant. You are carried to the edge of a deep pit filled with the bones from generations of dead elephants! The natives toss you into the pit and leave you for dead. Fortunately, the elephant remains soften your fall, and you are not hurt too badly to escape. [S1/<em>Wounded</em>]</p>
<p><b>Appearance:</b> You can only guess that your grace and royal bearing have convinced the natives that you are some kind of deity. You are carried to the edge of the fabled Elephant's Graveyard. There you are placed upon a handcrafted throne, and jewelry made from fine ivory is place about your neck. You humor the natives for a while, then pretend to get angry. They scatter like frightened rabbits, and you happily take their ivory with you. [D1/S1/W+1 (Max: Rich)/Acting and Disguise]</p>`,
	},
	1948: {
		index: 1948,
		text: `<p>When you unexpectedly discover the wondrous Graveyard of the Elephants, you are overwhelmed, and immediately drop to your knees to praise Allah for his generosity.</p>
<p><b>No Skill:</b> There is so much ivory here that you could never hope to carry more than a small portion of it. Gathering what you can, you make your way back to civilization. [S1/W+1 (Max: Princely)]</p>
<p><b>Blessed</b> (mandatory), <b>Enduring Hardship:</b> You realize that it was the will of Allah that you find this trove of ivory. Would He not also aid you in returning to the city with a small portion of the wealth? Building a make-shift sled, you drag along as much ivory as you can. For many arduous days you cross the jungle, but the Ever-Generous guides your steps and protects you from dangers. [D1/S1/W+3 (Max: Princely)/Piety]</p>`,
	},
	1949: {
		index: 1949,
		text: `<p>Sitting in the middle of a vast field of elephant bones, you bow your head in prayer to the Most High. After a lengthy meditation, you realize that this too is part of Allah's grand plan. If all of this ivory had been meant for men to own, then the Graveyard would not be so deep in the jungle! With some regret, you turn your back on the wealth of this place and return to the world of men. As you go, your heart grows lighter and lighter. You feel a devotion to Allah stronger than you have ever felt before. [Piety/<em>Blessed</em>]</p>`,
	},
	1950: {
		index: 1950,
		text: `<p>Following the tattered old map you found, you reach the edge of what can only be the Elephant's Graveyard! But you look up to see another band of explorers who arrived at the same time! You will not share this wealth with anyone!</p>
<p><b>No Skill:</b> You charge across the field of bones to attack the others. But the treacherous earth turns your ankle, and you are badly hurt by falling on the sharp bones. You watch in helpless fury as the other explorers load up on ivory. They are stealing your bones! [D-1/<em>Wounded</em>/<em>Envious</em>]</p>
<p><b>Weapon Use:</b> You leap into the midst of the other explorers as they begin to collect the precious ivory. Not expecting such a violent reception, they are quickly scattered or killed. Looking down, you realize what your greed has done! In shame you flee from the area, hoping that none of the survivors recognize you. [D-1/S1/<em>Grief Stricken</em>]</p>`,
	},
	1951: {
		index: 1951,
		text: `<p>You've been following a band of explorers for days now, hoping that they would indeed lead you to the Elephant's Graveyard. It seems your patience has been rewarded! You wait until night, then attack their camp!</p>
<p><b>No Skill:</b> It is easy enough to overcome men asleep in their camp, but you are careless and some of them escape. Though enriched by your ill-gotten gains, you know that you will not be welcome long in this Sultan's domain. [S1/W+2 (Max: Rich)/<em>Outlaw</em>]</p>
<p><b>Luck:</b> You count yourself twice blessed when you examine the men in the camp and realize that they are a band of wanted men! The Sultan may reward you for bringing justice to such evil-doers! [D1/S1/W+2 (Max: Rich)]</p>`,
	},
	1952: {
		index: 1952,
		text: `<p>It took you weeks to decipher the hidden messages of the poems and locate the amazing Elephant's Graveyard. But the poet never mentioned a cult of elephant-worshipping infidels! With a powerful battle-cry, you attack!</p>
<p><em>Roll two dice, adding two for Weapon Use or four if you have it at Master level:</em></p>
<p>❖ 2–6: The cultists are not unskilled in combat. Though you reduce many of their numbers, they soon overpower you. Were it not for the good fortune of a passing force of the Sultan's men, you would no doubt be dead. [D1/S1/<em>Crippled</em>]</p>
<p>❖ 7–11: You battle long into the afternoon. It seems that each time you send one infidel to his final punishment two more take his place. As fatigue begins to weigh your limbs, you know that you must retreat. [D1/S1/Weapon Use]</p>
<p>❖ 12+: Surely there is no might nor glory but in Allah! As the sun sinks into the horizon, you look about you at your fallen foes. The wealth you claim this day was truly earned. [D1/S1/W+3 (Max: Respectable)]</p>`,
	},
	1953: {
		index: 1953,
		text: `<p>You were delighted when you stumbled onto the fabled Elephant's Graveyard. Now that bit of good fortune just might save your life. The brigands who surround you are not impressed by the few trinkets you carry. They demand something more.</p>
<p><b>No Skill:</b> You convince them to let you lead them to the Elephant's Graveyard. Once there, you take advantage of their distraction to slip away. Odds are they will turn on each other as they try to determine what to do with so much wealth! [D1/S1]</p>
<p><b>Beguiling, Seduction:</b> Using all of your wits and cleverness, you turn the bandits against their leader with your tales of the magnificent wealth of the Elephant's Graveyard. Now you won't only have a fortune in ivory, but you'll have bearers to help you carry it! [D1/S1/W+3 (Max: Princely)]</p>`,
	},
	1954: {
		index: 1954,
		text: `<p>You overhear a drunkard claim to have discovered the mythical Elephant's Graveyard. No one else believes his tale, but to your ear it has a ring of truth to it. You decide to buy him another drink.</p>
<p><b>No Skill:</b> After spending the bulk of the day plying the old man with liquor, you finally convince him to tell you the location of the Graveyard. But when you try to follow his directions, spilled out with drunken certainty and equally drunken accuracy, you find yourself somewhere in the middle of the wilderness. Only Allah can find you! [S1/<em>Lost</em>]</p>
<p><b>Bargaining and Evaluation:</b> You quickly determine that if the old man did truly discover such a miraculous find, he has no idea where it is any more. You cut your losses and continue on your way. [D1/Wisdom]</p>`,
	},
	1955: {
		index: 1955,
		text: `<p>Having learned the location of the fabled Elephant's Graveyard, you approach the Sultan. Without his permission, you cannot hope to retrieve the valuable ivory.</p>
<p><b>No Skill:</b> The Sultan has too many concerns to aid you in your endeavors, and you get the feeling that he does not believe your tale. However, he does agree to allow you to retrieve the ivory from his lands in exchange for half of what you find. You hire some men to help you, and return a week later with a good supply of the beautiful material. True to his word, the Sultan allows you half of the ivory. [D1/S1/W+1 (Max: Rich)/Courtly Graces]</p>
<p><b>Luck:</b> The Sultan's only son is entranced by your story of danger and great wealth. He begs his father to allow him to lead an expedition to the Elephant's Graveyard. Reluctantly, the Sultan agrees. Protected by the prince's own bodyguard and retinue, you have little difficulty traveling to the Graveyard and back with a wagonload of precious ivory. [D1/S1/W+3 (Max: Rich)]</p>`,
	},
	1956: {
		index: 1956,
		text: `<p>It takes you a few minutes to realize what you have found. It is nothing less than the fabled Elephant's Graveyard! You are about to rejoice for your luck when you realize that you are not alone. One of the sons of the Sultan is making his way through the bones. You approach him, and discover that he is leading an expedition in the jungle and is trying to decide the best way to transport a portion of this magnificent ivory back to the palace.</p>
<p><b>No Skill:</b> You offer to assist the young prince as another bearer, and he gladly accepts. For many days, you and the others carry heavy ivory tusks through the jungle. When you arrive, the prince pays you a small reward for your kindness. [S1/W+1 (Max: Respectable)/Enduring Hardship]</p>
<p><b>Storytelling:</b> You describe to the prince tales you have heard of local tribes transporting enormous quantities of goods through the jungle along their secret paths. Acting on your advice, he hires some local guides to ease the journey back to the palace. The Sultan is impressed when he hears the prince describe your assistance and decides that you could be a trustworthy advisor. [D1/S1/<em>Vizier</em>]</p>`,
	},
	1957: {
		index: 1957,
		text: `<p>You are traveling along a rugged jungle path when you hear a cry for help. Investigating the call, you find yourself standing at the edge of a steep cliff. At the bottom is the wondrous Elephant's Graveyard! Looking down, you see a man trapped at the bottom of the cliff. He tried to pull too many tusks up the wall behind him, and when he fell he broke his leg. In his helpless condition, he could not prevent you from simply taking the ivory and leaving him for dead.</p>
<p><em>Do you help the man out of the Elephant's Graveyard?</em></p>
<p><em>If you help the man:</em> It takes you the rest of the day to find a safe way down and a gentle way to out of the pit. In the end, you are too exhausted to retrieve the ivory. You awake the next morning to find both man and ivory gone, but there is a mysterious item left on the bedroll the man had slept in. [D1/S1/<b>Treasure</b>]</p>
<p><em>If you do not help:</em> You ignore the pleas and cries of the crippled man as you painstakingly remove the ivory from the pit. The last you hear from the man as you walk away is "Allah rewards the generous." Once you get the ivory into the light, you discover that it is in reality worthless bone. You feel as though you have failed some kind of test. [D-1/S1/<em>Accursed</em>]</p>`,
	},
	1958: {
		index: 1958,
		text: `<p>An ancient and sickly elephant crosses your path. Clearly, it has reached its allotted hour. You realize that it is trying to reach the Elephant's Graveyard, but it doesn't look as though it has the strength to reach that final resting ground. It seems a tragedy that this noble creature may not be able to achieve the final goal of its life, and you resolve to aid it in any way you can.</p>
<p><b>No Skill:</b> As you follow the elephant from a comfortable distance, you see the hungry eyes of scavengers watching from the shadows. Taking up your bow, you eye the path suspiciously. When a hyena creeps out of the brush, you let fly an arrow. From the sounds of the fighting, you have provided ample distraction. You continue to protect the elephant from the beasts that would harass it until it finally lies to rest among the bones of its ancestors. Your soul feels warmed by your act of kindness towards the noble creature. [D1/S1/Piety]</p>
<p><b>Wilderness Lore:</b> You approach the aged creature. With soothing words and a gentle touch, you earn its trust. You guide it along the safest paths you can find, easing its passage that it might lay among its ancestors. Your soul feels warmed by your act of kindness towards the noble creature. [D1/S1/<em>Blessed</em>]</p>
<p><b>Envious</b> (mandatory): You follow the dying elephant for a ways, but your selfish greed overcomes you. Drawing your spear, you slay the unfortunate creature and take its tusks for yourself. The vengeful spirits of the Elephant's Graveyard rise up and torment you for your terrible act. [D-1/S1/W+1 (Max: Rich)/<em>Accursed</em>]</p>`,
	},
	1959: {
		index: 1959,
		text: `<p>Surely only a fool would dare to attack such an enormous fleet of warships! Yet, foolish or not, when you learn that the fleet intends to destroy your beloved city, you attack.</p>
<p><b>No Skill:</b> Outnumbered a hundredfold, your small vessel has no hope of victory. You can only hope that your interference has delayed them long enough for the city to prepare its defenses. [D1/S1/Go to paragraph 315]</p>
<p><b>Seamanship:</b> Small ships such as yours have a huge advantage over the large war vessels of this fleet: mobility. Using your speed and mobility, you sow confusion among the fleet and cause many to collide. You pray that you have damaged their fleet enough to save your city. [D1/S1]</p>`,
	},
	1960: {
		index: 1960,
		text: `<p>A battle between one little ship and a mighty warfleet can only end one way, but you have a scheme to even the odds. Sailing directly towards the flagship under a flag of truce, you challenge the enemy admiral to a duel!</p>
<p><b>No Skill:</b> The treacherous admiral mocks you, and has your ship seized and you clamped in irons and tossed below. You can see that his dishonorable actions cost him the respect of the crew. Before long, they secretly free you and set you ashore. [S1/Have another player move you to any coastal space]</p>
<p><b>Courtly Graces:</b> Though the admiral would treat you dishonorably, you speak with such eloquence and style that his own captains force him to accept your challenge.</p>
<p><em>Roll two dice, adding two if you have Weapon Use:</em></p>
<p>❖ 2–7: The admiral defeats you in fair combat. You have earned his respect, however, so he sets you ashore to tend your wounds. [D1/S1/<em>Wounded</em>/Have another player move you to any coastal space]</p>
<p>❖ 8+: After a long and tense struggle, you force the admiral to yield. In exchange for his life, he agrees to turn his fleet back. [D2/S1/Weapon Use]</p>`,
	},
	1961: {
		index: 1961,
		text: `<p>With tales of great warriors ringing in your mind, you turn to attack the enormous warfleet. Ramming the opposing flagship, you leap aboard hoping to slay the enemy admiral and throw the fleet into confusion.</p>
<p><b>No Skill:</b> Once they overcome their initial surprise, the sailors overwhelm you with sheer numbers and toss you overboard before you can do any significant damage. [S1/Go to paragraph 315]</p>
<p><b>Weapon Use, Quick Thinking:</b> You manage to hold the enemy sailors at bay long enough to reach the lower decks. Once there, fortune favors you when you discover a storage hold filled with flammable oils! Setting fire to the oil, you flee the doomed ship. As you watch the flaming husk sink below the waves, you rejoice in the generosity of Allah for granting you victory this day. [D1/S1/Piety]</p>`,
	},
	1962: {
		index: 1962,
		text: `<p>You approach a large fleet of ships. Your vessel is surrounded and boarded. The admiral of the fleet demands that you join them in their raid on an enemy city.</p>
<p><b>No Skill:</b> You see no alternative but to join the fleet. Three days later, a massive storm strikes, and the fleet is scattered. Breathing a prayer of thanks to almighty Allah for his aid, you sail away before the fleet can regroup. [D1/S1]</p>
<p><b>Scholarship:</b> You impress the admiral with your knowledge and understanding of warfare. For many long hours, he listens as you describe methods and tactics for the attack. He follows your advice.</p>
<p><em>Roll one die:</em></p>
<p>❖ 1–3: The defenders are too strong. Even with your input, the invasion is repulsed. [D-1/S1]</p>
<p>❖ 4+: Your strategy makes the difference between victory and defeat. The Admiral is pleased and gives you the first choice of the plunder. [D1/<b>Treasure</b>]</p>`,
	},
	1963: {
		index: 1963,
		text: `<p>You discover a large fleet of ships during the darkness of night. You realize that they are pirates! If they discover you, you will certainly be robbed and murdered.</p>
<p><b>No Skill:</b> You hide your ship among the others in the fleet, hoping for a chance to sneak away. It is many days before you make good your escape, and now you have no idea where you are. [S1/<em>Lost</em>]</p>
<p><b>Stealth and Stealing:</b> Under cover of darkness, you sneak onto the pirate captain's ship and make off with his charts and logs. Before the loss is discovered, you turn your ship about and sail the other way. You can only imagine the confusion when the pirates learn that their captain has no idea which way to sail! [D1/S1]</p>`,
	},
	1964: {
		index: 1964,
		text: `<p>When one kingdom sends out a warfleet, others usually follow suit. You realize that the safest place to be is in one of these enormous fleets. You decide to follow along as far as you can.</p>
<p><b>No Skill:</b> You count yourself lucky to have chosen such a large fleet to join. Two other warfleets collide with yours, and though you are forced to defend yourself, you have no doubt that you would have fared much worse had you been on your own. [S1]</p>
<p><b>Fated</b> (mandatory), <b>Luck:</b> The fleet you join is attacked again and again. During the third attack, your ship is sundered by a ram attack, and you find yourself sinking into the frothy waves. Certain that death has come to claim you, you are shocked as you flail for breath to hear mermaids singing each to each! [D1/Move to the Undersea Kingdom and have an immediate encounter]</p>`,
	},
	1965: {
		index: 1965,
		text: `<p>Many seaside villages have reported sightings and attacks from a large pirate fleet. There are far too many ships in the fleet to attack on your own, so you need to find a powerful prince who can stand up to the pirate captains.</p>
<p><b>No Skill:</b> None of the nobles you visit seem concerned. Secure on land, they do not fear the ravages of the pirates. They may feel different when the warfleet reaches their shores! [S1]</p>
<p><b>Storytelling:</b> You present the plight of the villagers with such eloquence and style that every prince you address promises to aid in the defeat of these rampaging pirates. When you see the size of the fleet sent to destroy the renegades, you have no doubt in the eventual triumph of justice. [D1/Courtly Graces]</p>`,
	},
	1966: {
		index: 1966,
		text: `<p>You have learned that a large warfleet is planning to attack your beloved city. You alone could never hope to disrupt such a mighty invasion, but you think you know a magician who could.</p>
<p><b>No Skill:</b> The magician is annoyed by your demands, for he cannot be bothered by such worldly concerns. To get rid of your interference, he casts a spell on you. [S1/<em>Ensorcelled</em>]</p>
<p><b>Bargaining and Evaluation:</b> At first, the magician wants nothing to do with you or your concerns. But when you describe the gratitude that the Sultan will have for the one who saves the city, a gleam of desire shines in his eye. He agrees to summon a storm that will scatter the invading fleet. [D1/Seduction]</p>`,
	},
	1967: {
		index: 1967,
		text: `<p>After the pirates robbed you, you were happy to see the Sultan's large warfleet.</p>
<p><b>No Skill:</b> The admiral is enraged to learn that pirates are operating so close to the city. You guide him to the place where you were attacked, and before long the fleet has located the scoundrels. Seeing that their position is hopeless, the pirates surrender. Your goods are returned to you, along with a little extra as a reward for your efforts. [D1/W+1 (Max: Respectable)]</p>
<p><b>Appearance:</b> When the admiral sees your delicate features and attractive looks, he decides that you probably never earned the soft life the pirates took from you. He is unimpressed by your tale and orders you removed from his sight. [S1/W-2 (Min: Poor)/<em>Scorned</em>]</p>`,
	},
	1968: {
		index: 1968,
		text: `<p>You see a massive fleet of warships on the horizon. You know that you could never hope to fight so many, so you turn about and head for the nearest port.</p>
<p><b>No Skill:</b> It appears that the warfleet is planning to attack the port that you have chosen. You won't be able to reach them in time to warn them, so you decide that flight is a better option. [S1]</p>
<p><b>Seamanship:</b> You arrive in port just a few hours in front of the approaching fleet. Though there is little time, the Sultan is grateful for your warning and prepares his best defenses. Without the benefit of surprise, the warfleet is forced to withdraw. The Sultan rewards you with a hundred pieces of gold when the battle is over. [D1/S1/W+1 (Max: Rich)]</p>`,
	},
	1969: {
		index: 1969,
		text: `<p>Attempting to pass through a busy channel, you find yourself trapped between two massive warfleets. You realize that escape is impossible, for there is craggy shore to the left and the right. You decide that your best chance for survival is to offer your services to one of the two fleets and hope for victory. Praise be to Allah, it is the Caliph's own fleet you have joined!</p>
<p><b>No Skill:</b> Sadly, your small vessel is no match for the mighty ships that clash this day, and it is quickly smashed by the rams of the rebellious prince's fleet. But no one can resist the might of the Caliph, and by the end of the day the rebels are sunk or in flight. Saving you from drowning, the admiral offers to compensate you for your loss. [D1/S1/Wisdom]</p>
<p><b>Seamanship:</b> A small vessel like yours benefits from a very shallow draft, while the massive warships of the rebel fleet must sit very low in the water to sustain their weight. Using this fact to your advantage, you lure a number of rebel ships into the shallows near the shore, leaving them stranded and helpless as the Caliph's ships press their advantage. [D1/S1/Seamanship]</p>`,
	},
	1970: {
		index: 1970,
		text: `<p>What you first believed to be a massive warfleet, on closer inspection reveals itself to be a convoy of merchant ships. Clearly, they are from foreign parts, for if they knew this area as well as you, they would never risk such heavy ships on the shifting sandbars and reefs that you have learned so well.</p>
<p><b>No Skill:</b> You approach the merchantmen to warn them of the dangers ahead, but they spurn your offer. Rarely is such sinful pride rewarded so directly. Shortly after you depart, the lead vessel loses its bottom on an unseen reef. Thus does Allah humble the haughty! [S1/Piety]</p>
<p><b>Wisdom:</b> You realize that foreign merchants will not trust you, fearing that you might lead them into a trap for pirates. But you are unwilling to abandon them to their fate. By pretending to run aground on a sandbar, you are able to coax the foreigners into deeper water and the safety of the main channel. Though they will never know of their debt to you, you know that the All-Merciful always rewards the generous. [D1/S1/<em>Blessed</em>]</p>`,
	},
	1971: {
		index: 1971,
		text: `<p>For days you have encountered the ruins of village after village, the people missing, the houses burned. Your only clue you find is a charred piece of wood with the word "Magian" carved into it. Ahead you see a column of smoke. Perhaps this island is where the Magians have been taking their victims?</p>
<p><b>No Skill:</b> The island is a volcano! No doubt the Magians are hurling their innocent victims into the fiery core. You go ashore to discover dozens of islanders trapped in cages near the shore. You free the people and flee before the Magians return. [D1/S1]</p>
<p><b>Stealth and Stealing:</b> You land on the shore of the volcano and find the Magian camp. After freeing their prisoners, you prepare an ambush for the evil cultists' return. The next morning, the vile fire-worshippers come back to a most unfriendly welcome! [D1/S1/Weapon Use]</p>`,
	},
	1972: {
		index: 1972,
		text: `<p>Rumors of pirates have been reaching your ears for some weeks as you make your way through the various islands of this region. Such scallywags cannot be allowed to disrupt the sea lanes, so you take it upon yourself to hunt them down. You finally discover their haven on the slopes of a volcanic island. As you approach the island, smoke begins pouring forth from its highest peak! The volcano is about to erupt!</p>
<p><b>No Skill:</b> You know that you must escape the burning ash. Sadly, you see that the pirates have made the same discovery, and you are forced to let them escape. [S1/Seamanship]</p>
<p><b>Seamanship:</b> You know that the pirates will probably try to escape from the eruption, and you realize that you have a chance to stop them! In order to escape, the pirates must pass through a narrow strait. If you can block that strait long enough, they will be unable to reach safety in time. But if you wait too long, your ship will be caught in the conflagration!</p>
<p><em>Roll two dice, adding two for Seamanship:</em></p>
<p>❖ 2–4: Fiery rocks begin to rain from the heavens, splattering your deck and setting your sails ablaze! Your boldness has cost you dearly. [S1/W-3 (Min: Beggar)/Go to paragraph 315]</p>
<p>❖ 5–9: The flaming debris from the eruption falls too close for comfort. You are forced to retreat too soon, and the pirates make their escape. [D1/S1/Wisdom]</p>
<p>❖ 10+: The fighting is fierce, but you manage to delay the pirates long enough to hamper their flight. Though your ship is singed, and a couple of the reavers slipped past you, your boldness and determination accomplished much this day. [D1/S1/<em>Determined</em>]</p>`,
	},
	1973: {
		index: 1973,
		text: `<p>According to legend, volcanoes are a rich source of precious gems, and when you see a small volcanic island, you land to take a look around. Soon, though, you hear rumblings in the rocks that makes you fear the volcano may explode. When you return to your ship, you see that a band of red-turbaned Magians has seized it! You're going to have to fight in order to escape the island!</p>
<p><b>No Skill:</b> You charge the Magians, sword in hand. Smiting foes left and right, you send some of the vile cultists to their doom, but their numbers prove too great. When you wake, you find yourself in the brig of your own ship! [D1/<em>Imprisoned</em>]</p>
<p><b>Weapon Use:</b> Shouting prayers to the Most High that your arm might be strong enough to destroy the infidels, you leap into the midst of your foes. The battle is long and fierce, but in the end you are victorious! Truly there is no might but in Allah! [D1/S1/Piety]</p>`,
	},
	1974: {
		index: 1974,
		text: `<p>You have heard stories of volcanoes from your early childhood, but you have never had an opportunity to see one, and you wish to see this wonder firsthand. You are in a small port when you overhear a sailor telling a tale of escaping from an erupting volcano and try to convince him to take you there.</p>
<p><b>No Skill:</b> The sailor tells you at great length of the horrors he has seen, which leave him too frightened to risk sailing close enough to see it again. Nothing you say convinces him to go. [S1]</p>
<p><b>Bargaining and Evaluation:</b> It takes a healthy amount of gold to convince the frightened sailor to guide you to the volcanic island. The magnificent beauty of the island alone is worth it. What you learn from the voyage is doubly so. [D1/Wilderness Lore]</p>`,
	},
	1975: {
		index: 1975,
		text: `<p>The middle of a volcanic eruption may not be the best time to negotiate a deal, but desperate men will often pay much when their situation is dire.</p>
<p><b>No Skill:</b> The terrified scholar agrees to give you everything he has of value if you will just get him off the island before it explodes. You suppose you should feel guilty for taking advantage of the young man, but you are impressed by the gift he has given you. [D-1/<b>Treasure</b>]</p>
<p><b>Piety</b> (mandatory): In the end, you don't have the heart to add to the suffering of these unfortunate people. You agree to take them on board for free and barely escape the flaming island safely. [D2]</p>`,
	},
	1976: {
		index: 1976,
		text: `<p>Traveling by merchant ship isn't always comfortable, but usually it is safe. So when you notice a smoking mountain atop an island directly in the path of the ship's heading, you immediately approach the captain to warn him away from it.</p>
<p><b>No Skill:</b> The lure of profit is too much for this captain to ignore. Despite the dangers, he intends to sail as close to the volcano as possible. You are finally able to convince him to take a safer course, but only when you agree to cover his lost profits. [S1/W-1 (Min: Penniless)]</p>
<p><b>Courtly Graces:</b> By appealing to the captain's pride through flowery words and courtly phrases, you are able to convince him to take a somewhat safer route. To ease his losses, you also agree to help him negotiate with the merchants at his final destination. [D1/Bargaining and Evaluation]</p>`,
	},
	1977: {
		index: 1977,
		text: `<p>Despite the dangers, you approach the smoking cone of the volcanic island. Once ashore, you discover a deep cave and decide to explore it.</p>
<p><b>No Skill:</b> The heat of the cave gets stronger the deeper you go. Soon you find yourself inside the mountain's core, roiling lava far below you. You study the inner workings of the volcano for as long as you dare, then reluctantly turn to leave. [S1/Scholarship]</p>
<p><b>Luck:</b> The walls of the cave are studded with precious gems! You pry a few loose, but the ominous rumbling of the volcano convinces you that you shouldn't tarry long. [D1/W+1 (Max: Respectable)]</p>`,
	},
	1978: {
		index: 1978,
		text: `<p>You find yourself trapped on a volcanic island, and the earth is starting to rumble! Having little other option, you decide to explore and find a large cave. Inside the cave you find a giant efreet, sheathed in fire and shackled in chains of gold!</p>
<p><b>No Skill:</b> You hope that the eruption will end if the efreet is freed, so you shatter the chains. In hindsight, you shouldn't have expected gratitude from such a creature! Now it is you who is in chains. [S1/Enduring Hardship/<em>Enslaved</em>]</p>
<p><b>Beguiling, Seduction:</b> You know that efreet cannot be trusted, so you force him to agree to a deal in exchange for his freedom before you sever his chains. Fortunately, he is true to his word and delivers you from the island once you have released him. [D1/S1/Move up to three spaces in any direction]</p>`,
	},
	1979: {
		index: 1979,
		text: `<p>Heedless of the danger, you climb to the edge of the volcanic caldera and are surprised to discover a band of men in red turbans. You had heard that vile Magians sacrifice their innocent victims in volcanoes just like this one, and this proves it!</p>
<p><b>No Skill:</b> Before you can approach close enough to stop them, they hurl their victim into the flames. Most of the Magians escape your wrath, but at least a few join their sacrifice in the fires below. [D1]</p>
<p><b>Acting and Disguise:</b> You are fortunate enough to find some Magian robes discarded by the side of the path. Donning them quickly, you call to your "brothers" to wait for you. When you are in their midst, it is easy to catch them by surprise and make them the sacrifice for the volcanic flames! [D1/S1/Quick Thinking]</p>`,
	},
	1980: {
		index: 1980,
		text: `<p>Sailing through an area of open sea, you are surprised when you run aground unexpectedly. As your ship careens, the waters around you bubble and boil. You have struck an underwater volcano! As you struggle to free your vessel, your lookout spies a distant sail.</p>
<p><b>No Skill:</b> You manage to signal the other ship, which moves in to help you free your vessel. Fortunately, you clear the sandbar before the new island grows any higher. [S1/Luck]</p>
<p><b>Accursed</b> (mandatory): The other vessel approaches to aid you, but runs aground on the rapidly rising island! Soon both vessels are trapped! The other captain blames you for his misfortune. [D-1/<em>Scorned</em>]</p>
<p><b>Enduring Hardship:</b> The other vessel refuses to risk approaching you, so you are forced to free yourself. As you work, the island rises slowly from the sea, forcing you to struggle even harder. But Allah smiles even on those who suffer: the rising island reveals an enormous emerald! [D1/S1/W+1 (Max: Rich)]</p>`,
	},
	1981: {
		index: 1981,
		text: `<p>The rumbling volcano has panicked the people of this quiet seaside village. You know of no way to stop a volcano, so you have to find some way to help them evacuate the area.</p>
<p><b>No Skill:</b> While the villagers pack their precious belongings, you search the wharf for any captain willing to take them on board. As you approach the last ship, you near despair, but the generous captain agrees to help. [D1/S1]</p>
<p><b>Quick Thinking:</b> Seeing the ships leaving the quay as quickly as they can, you realize there may be another way to help the villagers. You quickly locate a caravanserai, and convince the merchants there to take the villagers with them. The friendly merchant even agrees to hire you on as a caravan guard! [D1/S1/W+1 (Max: Respectable)/Move up to two spaces in any direction]</p>`,
	},
	1982: {
		index: 1982,
		text: `<p>You have learned of the existence of a Magian cult operating from a nearby dormant volcano. According to tales you have heard, they plan to awaken the volcano by making blasphemous human sacrifices.</p>
<p><b>No Skill:</b> You approach the Vizier, but he refuses to act on your information. When the volcano later erupts, he knows that you could blame him for not acting on your wise advice, so he has you cast into the dungeons. [S1/<em>Imprisoned</em>]</p>
<p><b>Storytelling:</b> You approach the court openly and tell all present of what you have learned, reminding them of many tales of those who did not heed honest warnings. They nod at your wisdom, and the Sultan commands his army to patrol the volcano. [D1/S1/Courtly Graces]</p>`,
	},
	1983: {
		index: 1983,
		text: `<p>You are sailing around a volcanic island at a safe distance when you see some figures on the shore, waving for help.</p>
<p><b>No Skill:</b> You approach as near as you dare so the castaways can swim out to meet you. One of them is a poet, and his gratitude for your bravery inspires him to write an epic poem about you. [D1/S1/<em>Respected</em>]</p>
<p><b>Seamanship:</b> Your skill and daring are enough to bring your ship nearly to the shore. With the help of your boats, you rescue the people and most of their belongings, before the falling ash of the volcano forces you to withdraw. In return for your kindness, they reward you generously. [D1/S1/W+2 (Max: Respectable)]</p>`,
	},
	1984: {
		index: 1984,
		text: `<p>For days, the volcano has rumbled and complained. The locals have turned to a Magian cult, who promises to quiet the restless mountain with a sacrifice.</p>
<p><b>No Skill:</b> Trusting to your faith and arms, you agree to go with the cultists as their sacrifice. As their captive, you obediently approach the flames of the volcano, but at the last moment, you spring to attack! Though you are badly wounded during your escape, you are content that Allah is pleased with your choice, as the volcano soon goes silent again. [D1/S1/<em>Wounded</em>/<em>Blessed</em>]</p>
<p><b>Appearance:</b> Bravely, you stand before the people of the village to warn them of the dangers they will face by working with the vile cultists. The simple folk cannot bring themselves to doubt one with such princely airs and demeanor, and under your leadership they turn on the Magians and drive them away. Perhaps it is coincidence that the volcano soon grows quiet. Then again, maybe the Magians have some power over fire after all... [D1/S1/<em>Respected</em>]</p>`,
	},
	1985: {
		index: 1985,
		text: `<p>Out of curiosity, more than anything else, you have decided to explore the bowl of a mighty volcano. You see that you are not the only one, as a pair of figures can be seen across the fiery core. Suddenly, you see one of the figures slip, barely catching himself before he tumbles into the inferno.</p>
<p><b>No Skill:</b> There isn't time to run around the entire volcano to reach the man, so you try your luck with some of the tunnels you find. By the time you find a suitable passageway, all that you can do is console the dead man's friend. [S1]</p>
<p><b>Wilderness Lore:</b> You race around the caldera as fast as you can, the heat pulling sweat from you in rivers. There is no possibility to reach the dangling figure from above, but you know that volcanoes are often filled with passages and tunnels. Allah is with you this day, as you quickly find such a tunnel, and arrive just in time to catch the young man as his grip is failing! [D1/S1]</p>`,
	},
	1986: {
		index: 1986,
		text: `<p>You are approaching the fabled "Valley of Dogs," a place known to be the home of wild beasts and wilder men. You see a seasoned fellow sitting near a pillar of rock near the entrance to the valley. He warns, "You do not want to enter without a guide!"</p>
<p><b>No Skill:</b> You don't think the fellow looks particularly trustworthy. Better to take your chances. It turns out that you made a good choice, as you encounter the same fellow with a band of robbers halfway through the valley. Not that your wisdom will save you from paying them... [S1/W-2 (Min: Respectable)]</p>
<p><b>Bargaining and Evaluation:</b> While you don't trust this "guide," you decide you might as well pay him now. At least if bandits do attack, they won't get as much from you. But you are surprised when the guide delivers you to the far side of the valley in safety. [D1]</p>`,
	},
	1987: {
		index: 1987,
		text: `<p>A pack of wild dogs blocks your path as you make your way across the Valley of Dogs. They are too many for your lone sword to handle, so you have to find a way to distract them while you make your escape. Perhaps there's something they want to eat even more than you?</p>
<p><b>No Skill:</b> You try backing up along the path, to buy some time, but alas! More of the pack has snuck up behind you while you were focused on the group in front. Now you're in a very bad position. You are lucky that some passing animal distracts them before they finish you off. [S1/<em>Crippled</em>]</p>
<p><b>Quick Thinking:</b> You still have some meat from a gazelle you killed shortly before entering the valley. It's rather dry, but it might be enough to attract their attention. You toss the haunch over the side of the path, and the starving beasts fall to fighting over it, leaving you in peace. [D1/S1]</p>`,
	},
	1988: {
		index: 1988,
		text: `<p>You tried to cross the Valley of Dogs as quickly as you could so you would not encounter the ruthless beasts that live there. But you were so intent on the dogs, you walked right into a band of bandits who now block your path and demand your wealth!</p>
<p><b>No Skill:</b> They are too many for you to resist. You pay them your gold, and they allow you to pass. [S1/W-2 (Min: Poor)]</p>
<p><b>Beguiling, Seduction:</b> You convince the bandits that you don't carry any valuables worth stealing, and that you passed an overloaded merchant not far back on the trail. They rush past you towards the promise of even greater wealth. [D1/Bargaining and Evaluation]</p>
<p><b>Courtly Graces:</b> Your high words and manners simply enrage the bandits. In addition to taking your money, they give you a sound beating. [S1/W-2 (Min: Penniless)/<em>Wounded</em>]</p>`,
	},
	1989: {
		index: 1989,
		text: `<p>Standing at the edge of the notorious Valley of Dogs, you realize that you cannot hope to cross it fast enough to evade the roving bands of wild men and beasts that have made their home there. You need to find some reliable men to travel with you.</p>
<p><b>No Skill:</b> So notorious is this lawless place that you cannot even find mercenaries brave enough to accompany you. You have no choice but to go the long way around the valley. [S1/Enduring Hardship/Have another player move you up to three spaces in any direction]</p>
<p><b>Seduction:</b> With a little work, you convince a local captain that he should send his soldiers to protect you while you cross the valley. But the easily frightened swordsmen prove to be no match for the bandits of the valley. At least they are enough distraction for you to get away. [D1/Stealth and Stealing]</p>`,
	},
	1990: {
		index: 1990,
		text: `<p>At the last village before you reach the Valley of Dogs, you have a chance to speak with a kindly old innkeeper. He warns you about the dangers of the Valley.</p>
<p><b>No Skill:</b> Though he is too old to guide you himself, the innkeeper does know of a secret path that should get you across safely. You are happy to give him a small gift in exchange for the information. [D1/W-1 (Min: Poor)/Wilderness Lore]</p>
<p><b>Scholarship:</b> As the innkeeper describes the secret pathway, you realize that it's not only a safe way to cross the Valley of Dogs, but it's actually the way to a legendary lost wonder! You thank him for his kindness and hurry on your way. [D1/S1/Opportunity to enter the Sepulchre of Solomon]</p>`,
	},
	1991: {
		index: 1991,
		text: `<p>Making your way across the dreaded Valley of Dogs, you encounter a man dressed in tatters and furs. You call out to a fellow traveler, hoping he can help you in this dangerous land—but without a word he attacks you madly and you are forced to slay him in your defense.</p>
<p><b>No Skill:</b> You thank Allah for sending you a warning and proceed with doubled caution. You are able to avoid two other bands of such wild men before you reach the far side of the valley. [D1/S1]</p>
<p><b>Acting and Disguise:</b> Investigating the man closely, you realize that this is one of the ruthless bandits you were warned about. You disguise yourself in the man's garments. Your ploy proves effective, as you bypass one group of rogues easily. But the second band you meet is far more curious, and you are forced to fight for your life. Allah lends strength to your arm, and you leave the field of battle littered with the bodies of evil men. [D1/S1/Weapon Use]</p>`,
	},
	1992: {
		index: 1992,
		text: `<p>Thankful that luck has been with you as you cross the Valley of Dogs, you almost choose to ignore the scream of fear you hear. But how can stand by when another is in such danger? You see some bandits pushing around a pretty youngster. What you guess to be her father lies unconscious on the ground. If you catch them by surprise, you may be able to defeat them.</p>
<p><b>No Skill:</b> As you creep forwards, your foot crushes a branch. The sound seems to echo off the valley walls for an eternity. Immediately, the bandits give you chase. You lead them as far from the others as you can before you lose them. You hope the girl was able to escape. [D1/S1]</p>
<p><b>Stealth and Stealing:</b> As quiet as a gazelle, you creep through the underbrush until you are close enough to a bandit that you could touch him with an outstretched hand. When they are all distracted by the youth's cries, you explode from the bushes and attack! In moments, the bandits lie at your feet. You can see in the youth's eyes that she has more a mere "thank you" on her mind. [D1/S1/<b>Beloved</b>]</p>`,
	},
	1993: {
		index: 1993,
		text: `<p>You hear the howling of the wolf pack long before you see it. They have a quarry. You move as subtly as you can and come to a clearing where you see a band of travelers surrounded by wolf pack near as great as an army!</p>
<p><b>No Skill:</b> Knowing you would fall victim to the wolves, you turn away and search for another path out of the valley. You eventually find one, but when you finally reach level ground again, you don't really know where you are. [S1/<em>Lost</em>]</p>
<p><b>Wilderness Lore:</b> You cannot fight this wolf pack—but wolves will flee from fire. Taking a moment to gather some dry brush, you race back and set hurling flaming brands among the wolves, causing them to scatter. The travelers are revealed to be a band of ascetics who were seeking a suitable soul to care for a rare and valuable artifact. [D1/S1/Luck/<b>Treasure</b>]</p>
<p><b>Fated</b> (mandatory): You start to head away when you are overwhelmed by guilt: you would be abandoning another to their fate. You plunge into the clearing. You do your best, but they are too many for you to handle. Fortunately, the travelers come to your aid in time to save your life. [D1/<em>Crippled</em>/Lose Fated]</p>`,
	},
	1994: {
		index: 1994,
		text: `<p>At the urging of the local people, you have chosen to try to find a safer path through the Valley of Dogs. The way is strenuous and full of dangers. It takes all of your strength and resilience to reach the far side.</p>
<p><b>No Skill:</b> Exhausted by your endeavors, you collapse on the edge of the valley. You pushed yourself much too hard, and now you must pay the price. [D1/Enduring Hardship/<em>Diseased</em>]</p>
<p><b>Enduring Hardship:</b> Bands of hungry wolves, gangs of wolf-like men, marshes and heavy brush. All this and more you have overcome. What challenges will the world throw your way next? Whatever they are, you stand ready for them! [D1/S1/<em>Determined</em>]</p>`,
	},
	1995: {
		index: 1995,
		text: `<p>A lovely but brazen maiden offers fertility charms in the market place. You recognize the liquid as nothing more than wine. You bow to her, and politely offer her a fine robe, explaining that it will make her appear more chaste and improve her chances of making a sale.</p>
<p><b>No Skill:</b> She is offended by your assumption that she is wanton. She tells anyone who will listen that you have maligned her virtue and caused her distress. [D1/<em>Scorned</em>]</p>
<p><b>Piety:</b> Pleased by your offer and impressed by your reasoning, she takes the cloak and dons it. She repays your generosity with a portion of her brisk sales. [S1/W+1 (Max: Poor)/Beguiling]</p>`,
	},
	1996: {
		index: 1996,
		text: `<p>In a renowned tea house, you encounter a well-dressed merchant boasting of his new trade route and the monies it will pay those who invest with him. However, you suspect he is lying—you know the route he describes passes through an area overrun with mermen. You respectfully join the conversation, presenting yourself as an enthusiastic investor.</p>
<p><b>No Skill:</b> No one is impressed by your inclusion in the circle of listeners. The merchant quickly tires of your presence and excuses himself. [D1]</p>
<p><b>Courtly Graces:</b> Because of your fine bearing and eloquent conversation, the listeners come to believe that an incognito noble is highly interested in the merchant's proposition, which is wiser than it originally seemed. Money flows in and the merchant invites you to his home. [D1/Acting and Disguise/<em>Respected</em>]</p>`,
	},
	1997: {
		index: 1997,
		text: `<p>Low on supplies, you approach a merchant, offering to barter some of your possessions. A pair of passing guardsmen notice your legitimate discussions but accuse you of attempting to defraud the merchant and immediately impose a hefty fine. You notice a familiarity between the officers and the merchant. You are not the first to fall into this trap.</p>
<p><b>No Skill:</b> You accept the soldiers' pronouncement, pay the fine, and humbly ask the merchant's forgiveness. Clearly pleased by your capitulation, he embraces you and declares you forgiven. [D1/S1/W-1 (Min: Poor)]</p>
<p><b>Quick Thinking, Luck:</b> Despite your anger, you praise the guardsmen's perceptiveness and offer some council. Your politeness and respectfulness allows you engage the three cohorts in an extended discussion on the finer points of the law of fraud. During that time, two other soldiers happen by and you ask their opinion on the subject. Fortunately, these newcomers were not part of the deception and quickly declare you innocent. [D2/S1/Wisdom]</p>`,
	},
	1998: {
		index: 1998,
		text: `<p>You are drawn in by a street game offered by a quick-tongued and quick-fingered young man. He offers to double any bet if the watcher can guess which cup hides the pebble. His motions are swift and confusing, and his amusing patter serves to distract. You carefully study his movement for an hour. Confident you know his patterns, you approach.</p>
<p><b>No Skill:</b> You guess wrong and then compound the error by attempting to recoup your losses. [S1/W-1 (Min: Penniless)]</p>
<p><b>Acting and Disguise:</b> You notice several tells that the young man possesses and are not distracted by his wit. He gets angry and challenges you to continue playing. In the end, you walk away with a large sum of coins. [D1/S1/W+1 (Max: Rich)]</p>`,
	},
	1999: {
		index: 1999,
		text: `<p>You happen into an inn where three dark-cloaked strangers are huddled in a corner. You sit nearby and surreptitiously listen in. They are discussing a scheme to separate a noble from his purse by offering a horse enchanted to look healthy when it is not. When they depart, you follow at a safe distance. When they arrive at meeting place with the animal, you quickly make your way to the noble's side. You explain the true intent of the thieves.</p>
<p><b>No Skill:</b> The noble joins the strangers in condemning you for interfering in business that does not concern you. [D1/<em>Scorned</em>]</p>
<p><b>Magic:</b> With a snap of your fingers, you dispel the glamour on the beast and reveal it a crippled old nag. The noble charges the thieves with fraud and invites you to his home for an extended visit. [D2/S1/Courtly Graces]</p>`,
	},
};
