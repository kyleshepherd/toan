import type { Story } from "./stories";

export const stories200: Record<number, Story> = {
	200: {
		index: 200,
		text: `<p>The other asks your aid in arranging an audience for him with one of your friends, a very influential merchant of a nearby city.</p>
<p><b>No Skill:</b> You do so willingly. The other turns out to be a false swindler who dupes and cheats the merchant and you are blamed for your poor judgment. [D1/<em>Scorned</em>]</p>
<p><b>Acting and Disguise, Brass Trumpet:</b> A certain tone in the voice of the other makes clear to you that his intentions are far from honest and he intends to swindle your friend. You denounce him for his falseness and mark clearly in your mind the ways of the dishonest. [D2/Wisdom]</p>`,
	},
	201: {
		index: 201,
		text: `<p>You try to get the other's attention to discuss a matter of some financial importance, but he seems distracted and rudely ignores your actions.</p>
<p><b>No Skill:</b> You take umbrage at this rudeness, and stalk off in a huff. Only later do you realize that you have wasted an opportunity at great riches. [<em>Envious</em>]</p>
<p><b>Courtly Graces:</b> You politely apologize for wasting the other's time and make ready to go on your way. At your kind words, the other snaps out of his reverie, and apologizes in turn. The other then proceeds to tell you his tale of woe, misery, and destitution. Your commiserations lighten his load, and in gratitude for your kindness, he journeys with you for many a day. [S2/<em>Blessed</em>]</p>`,
	},
	202: {
		index: 202,
		text: `<p>The other says to you, "I'm of the number of those who are about to perish and the cause of my death will be nothing else but my love and desire and excess of my transport. I beg deliverance from the affliction I suffer." The other begs you to assist in arranging a marriage to a wealthy noble who lives nearby.</p>
<p><b>No Skill:</b> You have little ability along this line, and you express your regret that you cannot help before you go on your way. [S1]</p>
<p><b>Courtly Graces, Beguiling:</b> Your words in the right ears greatly facilitate the achievement of the other's desires, and you are rewarded for your assistance. [D1/W+1 (Max: Respectable)]</p>
<p><b>Seduction, Appearance:</b></p>
<p><em>If you are not Married:</em> In the course of your match-making, you fall in love with the close confidant of the noble. For true lovers there is no impediment, and the double wedding is a marvelous tale to be remembered by all. [D2/S1/<em>Married</em>]</p>
<p><em>If you are Married:</em> You assist the other in all ways, including detailed instructions on the arts of beauty and love-making. Their marriage is consummated with joy, and is an example to all who would learn from it. The newlyweds make your good efforts known to all, and you are celebrated for your efforts. [D2/S1/<em>Respected</em>]</p>`,
	},
	203: {
		index: 203,
		text: `<p>The other responds, "I desperately need your aid. I have little now to reward you, but if you can be patient, I promise you a valuable payment later."</p>
<p><em>Roll two dice, adding one each for Quick Thinking and Scholarship:</em></p>
<p>2–7: Although you wait for a thousand days, the other cannot make good his promise. [D1/W-1 (Min: Poor)]</p>
<p>8+: With your assistance and in the fullness of time, the other's fortunes turn, and he makes good his promise of repayment. You learn much from your acquaintance with him. [D1/W+1 (Max: Rich)/Choice of Bargaining and Evaluation or Scholarship]</p>`,
	},
	204: {
		index: 204,
		text: `<p>The unfortunate other accepts your aid and thanks you.</p>
<p><b>No Skill:</b> He praises you for your good heart, but because of his poor state, he cannot return your generosity. [D1]</p>
<p><b>Luck, Appearance:</b> The fortunes of the other you aided improve dramatically, and you are remembered as one who was generous in time of need. Truly do the blessings of the Most High visit those who are kind to the needy! [D2/W+1 (Max: Respectable)/<em>Blessed</em> (1 turn)]</p>`,
	},
	205: {
		index: 205,
		text: `<p>The other turns on you with rage gleaming in his eyes. He shouts, "You have the temerity to show pity to <em>me</em>?"</p>
<p><b>No Skill:</b> He calls down a thousand curses upon you! [D1/<em>Accursed</em>]</p>
<p><b>Storytelling, Acting and Disguise:</b> To turn aside his wrath, you relate the fable of The Dog Which Pitied Its Master, and this comforts his soul. So moved is he that he makes you his companion for the pleasure of your company. [D1/S1/Scholarship and Courtly Graces at Master level/<em>Blessed</em>]</p>`,
	},
	206: {
		index: 206,
		text: `<p>Although the other is pleased by your attention, he must decline your kind offer. He tells you a tragic tale of the loss of his wealth and position due to the machinations of a wicked Vizier. Because of his wretched condition, he is bereft of hope and prospects, and his sorrow is contagious. [S1/<em>Grief Stricken</em>]</p>`,
	},
	207: {
		index: 207,
		text: `<p>"Ah," cries the other, "your visage is like that of the full moon, and you are wise beyond your years. A most fitting companion you would be, even to royalty!"</p>
<p><b>No Skill:</b> "As soon as my financial affairs are in order, we can be married." [D1/<em>Beloved</em>]</p>
<p><b>Luck:</b> Your beloved is embroiled in a legal battle for recovery of his estate from his father, but by a stroke of great luck, the day after your betrothal, new evidence is found and the dispute is finally settled. You are married in wealthy bliss soon after, and reside on his estate on the outskirts of a great city nearby. [D2/S1/W+2 (Max: Rich)/<em>Married</em>]</p>`,
	},
	208: {
		index: 208,
		text: `<p>No sooner have you opened your mouth but words begin to pour from the other in an unstoppable torrent. "Oh yes, well let me tell you this tale I heard from a fisherman... or maybe it was a slave. Anyway..." The other speaks incessantly for hours, without pause for food or rest.</p>
<p><b>No Skill:</b> Although a tale or two would be interesting, this verbal assault drives you mad. [S1/Enduring Hardship/<em>Insane</em> (1 turn)]</p>
<p><b>Enduring Hardship, Acting and Disguise:</b> You sit with a semblance of rapt attention throughout the interminable blathering. Your host is immensely pleased by your receptiveness, and when finally he is finished, he presents you with a great treasure, saying, "I have been so lonely. You are the first to stay and listen in such a long time." You gladly take the gift as due payment for your suffering and go on your way. [D2/S2/Courtly Graces/<b>Treasure</b>]</p>`,
	},
	209: {
		index: 209,
		text: `<p>"Come," says the other, "pass the night with me that I may be cheered by your conversation."</p>
<p><b>No Skill:</b> You provide brief respite to the other's restlessness. For this kindness, you are rewarded by being forced to remain indefinitely for your host's entertainment. [S1/<em>Enslaved</em>]</p>
<p><b>Storytelling:</b> Your skill as a storyteller is greatly appreciated. You are offered a small sum in exchange for remaining to enjoy the hospitality of your host.</p>
<p><em>You may accept or decline:</em></p>
<p><em>If you accept:</em> You agree to stay, but quickly realize that the other intends to keep you with him forever. [D1/S1/W+1 (Max: Respectable)/<em>Enslaved</em>]</p>
<p><em>If you decline:</em> You say that you must be on your way. The other is offended and has his companions throw you in a dark dungeon-like cell. [D1/S2/<em>Imprisoned</em>]</p>`,
	},
	210: {
		index: 210,
		text: `<p>You soon discover that the other is desperate for conversation. Since you seem cooperative, you are held captive and forced to listen to his inane babbling for nights on end.</p>
<p><b>No Skill:</b> You see little that you can do save suffer. [D1/Enduring Hardship/<em>Imprisoned</em>]</p>
<p><b>Stealth and Stealing:</b> You encourage the other to continue far into the night, pretending that you are fascinated with every word. Eventually, his chatter is so dull that he puts himself to sleep. You make your escape and help yourself to his purse as compensation for your suffering. [D1/S1/W+1 (Max: Poor)/Acting and Disguise]</p>`,
	},
	211: {
		index: 211,
		text: `<p>You profess your love to the other in glowing phrases. Finally, the other says, "I'm sorry, but I'm not sure I wish to marry you. You talk too much." The other launches into a lengthy and exhausting argument with himself over your virtues and failings, and never allows you to speak a word in your own defense.</p>
<p><b>No Skill:</b> Finally, he concludes that you would make a fine spouse, but you are no longer sure you wish to be married. You are wed, and each day is a living hell until the divorce. [D1/S2/<em>Accursed</em>/<em>Insane</em>]</p>
<p><b>Seduction:</b> You realize that you have no desire to be wed to this chattering creature, so you wisely point out all your own flaws in great detail. The other refuses the marriage. [D2/Quick Thinking]</p>`,
	},
	212: {
		index: 212,
		text: `<p>You succeed in spiriting away unseen with the other but soon wish you had failed. You are being driven mad by his incessant chatter.</p>
<p><b>No Skill:</b> Eventually, in your delirium, you part from the other and go your separate ways. [D1/W+1 (Max: Respectable)/<em>Insane</em>]</p>
<p><b>Courtly Graces:</b> Realizing the impending loss of your sanity, you excuse yourself with great politeness and flee for your life. [D2/S1/Wisdom]</p>`,
	},
	213: {
		index: 213,
		text: `<p>Your scheme is completely successful but you realize that your profits could be enhanced with a ransom, so you take the other along. Unhappily, he has nothing of value on his person, and no one is interested in ransoming him.</p>
<p><b>No Skill:</b> Your captive eats like a horse and talks without pause. This goes on for many weeks, as you stubbornly look for someone to take this person off your hands. [D1/Enduring Hardship/<em>Accursed</em>]</p>
<p><b>Appearance, Seduction:</b> Your captive is quite taken with you, and you discover to your amazement that he is most charming and delightful. The now meek-and-retiring character of your captive fills you with wonder. [D2/S1/<em>Love Struck</em> (if appropriate and not <em>Married</em>)]</p>`,
	},
	214: {
		index: 214,
		text: `<p>As you approach, your victim cries out, and people nearby come to his aid. You are beaten and taken prisoner, then taken to a Prince of the Faithful, who administers a stern justice.</p>
<p><b>No Skill:</b> You suffer greatly in your confinement. [D1/<em>Wounded</em>/<em>Imprisoned</em>]</p>
<p><b>Enduring Hardship:</b> Your punishment is difficult, but you learn well from it. [D2/Wisdom/Piety/Lose Stealth and Stealing/<em>Wounded</em>]</p>`,
	},
	215: {
		index: 215,
		text: `<p>You attack in darkness, but cannot overcome your victim before he cries out. You must flee. [<em>Grief Stricken</em> (1 turn)]</p>`,
	},
	216: {
		index: 216,
		text: `<p>As the other draws near, you recognize him as one who hates you. Reconsidering your plans, you flee from his sight. The next place you go, however, he is there before you! This happens again and again.</p>
<p><b>No Skill:</b> Fear trickles like ice down your back, and you finally tell him you will kill him if you see him again. But in your heart you know you are not free of this ill shadow. [D1/<em>Pursued</em>]</p>
<p><b>Piety:</b> You recognize this as the will of Allah, and speak to the other, saying, "Fate has cast us together, so let us make the most of it." The other is struck by the wisdom of your words, and you become stalwart companions. The other is most wise and skillful and his company brings you great comfort. [D2/S1/Weapon Use/Wisdom/<em>Fated</em>]</p>
<p><b>Brass Trumpet</b> (mandatory): The Brass Trumpet sounds whenever the other happens to come near. Soon you learn to avoid him with ease, and never again do you see him. [D1]</p>`,
	},
	217: {
		index: 217,
		text: `<p>Despite your quick action, the other sends his servants to catch you.</p>
<p><b>No Skill:</b> You cannot escape them. They catch you and throw you in a well, where they torment you for many days. [D1/S1/<em>Grief Stricken</em>/<em>Imprisoned</em>]</p>
<p><b>Luck:</b> You cannot escape them; they catch you and throw you in a well. Before long, you are left alone. A scorpion drops on your head. After you kill it, you wonder where it came from. Your search reveals a small crevice leading to a forgotten treasure room! Thanking the Most High for your good fortune, you loot the place and escape through a hidden trap-door. [D2/S2/W+2 (Max: Rich)/<b>Treasure</b>]</p>
<p><b>Brass Trumpet</b> (mandatory): Whenever the servants draw near to you, the Brass Trumpet sounds forth its clear, clean tone. This calls the attention of a passing band of soldiers, who drive off your tormentors and free you. [D2/S1]</p>`,
	},
	218: {
		index: 218,
		text: `<p>The other's sneering grin and whining voice drive you almost mad with fury. Taking leave of your senses, you attack him.</p>
<p><b>No Skill:</b> The other falls instantly, and in minutes life has left him. You are overwhelmed by remorse for your rash deeds. [D1/<em>Grief Stricken</em>]</p>
<p><b>Storytelling:</b> Scant inches from the other's throat, you recover yourself and realize that murder will gain you naught. You lower your sword and fall to the ground, praying for Allah's forgiveness. The other walks off, confused. [D2/S1/Piety]</p>`,
	},
	219: {
		index: 219,
		text: `<p>The other grovels in helpless terror and surrenders his purse to you.</p>
<p><b>No Skill:</b> You flee, chuckling at the ease of your crime. [D1/W+1 (Max: Respectable)]</p>
<p><b>Weapon Use:</b> With cleverness and skill, you terrorize your victim until he pleads for his life and discloses to you the placement of all his treasures. [D2/W+3 (Max: Princely)/<b>Treasure</b>]</p>`,
	},
	220: {
		index: 220,
		text: `<p>Your words of love work wonderfully. The other cheerfully marries you, then wastes all your wealth in lavish extravagances.</p>
<p><b>No Skill:</b> You are left a broken man. [D1/W-3 (Min: Beggar)/<em>Married</em>]</p>
<p><b>Storytelling:</b> You learn from your mistake, though not in time to help yourself. You tell your story as a warning to others. [D2/W-3 (Min: Penniless)/Storytelling/<em>Married</em>]</p>`,
	},
	221: {
		index: 221,
		text: `<p>You speak to the other in honeyed and poetic words. He thinks your actions are very amusing, but cannot fathom just what it is you want.</p>
<p><b>No Skill:</b> You despair of ever making this dullard comprehend your intent, and depart to return to the company of intelligent folk. [Lose Scholarship]</p>
<p><b>Seduction, Appearance:</b> Though he is confused by your words, your sincerity and affection are clear. The other is overwhelmed with affection for you, and profligate with gifts and other demonstrations of his feelings.</p>
<p><em>If the other is of the opposite sex and you are not Married:</em> The other throws himself at your feet, and cries that he will surely perish for love of you! You help him again to his feet, and find the weight of his body against yours most pleasing. [D1/W+1 (Max: Respectable)/<em>Beloved</em>]</p>
<p><em>Otherwise:</em> The other praises your many virtues to his friends. [D1/W+1 (Max: Respectable)/<em>Respected</em>]</p>`,
	},
	222: {
		index: 222,
		text: `<p>"You?" cries the other. "You dare make advances to me? You do not show proper respect for one in my situation!" He calls out and you are quickly surrounded by his allies.</p>
<p><b>No Skill:</b> You are overwhelmed and then imprisoned that you might learn some manners. [D1/Courtly Graces/<em>Imprisoned</em>]</p>
<p><b>Weapon Use:</b> With inspired swordplay you overcome the crowd and win your freedom, though you doubt you will be welcomed in these parts in the future. [D1/S1/Weapon Use/<em>Outlaw</em>]</p>`,
	},
	223: {
		index: 223,
		text: `<p>Coming to the other in his home, you speak most kindly to him. "Ah, hmmm," he mutters, "very nice. Hmmm, yes. Your deference is of course proper... Hmmm. Oh, are you still here?"</p>
<p><b>No Skill:</b> He snaps his fingers lazily, and calls out, "Show this one out." You are escorted to the door. [D1]</p>
<p><b>Seduction:</b> Seizing the opportunity, you begin a line of ingenious, profuse, and imaginative flattery. The other baskes in your blandishments, then gives you a bag of coins. [D1/W+1 (Max: Rich)]</p>`,
	},
	224: {
		index: 224,
		text: `<p>You lavish him with praise. "Oh, how charming," cries the other. "Oh, my friends, I am most pleased with this one. Surely his talent exceeds all my other fools and jesters." You are captured and each day forced to perform exactly as you did on that first meeting.</p>
<p><b>No Skill:</b> You can find no easy escape. [D1/Beguiling/<em>Imprisoned</em>]</p>
<p><b>Stealth and Stealing:</b> You study the layout of the fool's abode; when the time is right you stuff your pockets with his belongings and make your escape through an unguarded window. [D2/S1/W+2 (Max: Princely)]</p>`,
	},
	225: {
		index: 225,
		text: `<p>As you approach, he stops short. "Ah, yes," says the other, peering at you with eyes that have lost the gleam of intelligence. "Would like a purse full of gold?"</p>
<p><b>No Skill:</b> You nod dumbly and receive the gold! Allah be praised! [D1/W+1 (Max: Rich)]</p>
<p><b>Quick Thinking:</b> Such an opportunity is not to be missed! Inspired, you pour on every ounce of your charm, and the other gives you almost his entire estate! [D2/S1/W+3 (Max: Princely)/<b>Treasure</b>]</p>`,
	},
	226: {
		index: 226,
		text: `<p>With the help of several accomplices, you stage a little entertainment to trap your victim, and your scheme is successful. However, in spite of his fancy dress, your victim has no wealth.</p>
<p><b>No Skill:</b> Sadly, you let him go. [D1]</p>
<p><b>Courtly Graces:</b> By asking the right questions of the right people, you discover that your victim is a numb-wit, all his substantial wealth entrusted to relatives. You spirit him away and demand a large ransom for his release. [D2/W+2 (Max: Rich)]</p>`,
	},
	227: {
		index: 227,
		text: `<p>Your victim may be a fool, but he is not so foolish as to fall for your scheme. The other's companions turn out to be heavily armed.</p>
<p><b>No Skill:</b> You are easily caught and imprisoned for your attempted crime. [D1/<em>Imprisoned</em>]</p>
<p><b>Acting and Disguise:</b> You were, of course, well-disguised, and were able to escape unharmed and unrecognized. [D1/S1/Quick Thinking]</p>`,
	},
	228: {
		index: 228,
		text: `<p>The other you have chosen as your prey divines your intent and flees.</p>
<p><b>No Skill:</b> He escapes easily, and you are left standing alone. [D1]</p>
<p><b>Quick Thinking:</b> As he runs away, you cunningly shout, "Thief, thief!" Well-intentioned bystanders help you overcome your victim. You carry him off, and he fetches a fine ransom. [D1/S1/W+1 (Max: Rich)]</p>`,
	},
	229: {
		index: 229,
		text: `<p>Your victim stands his ground and defends himself valiantly. Nonetheless you overcome him. Unfortunately, he has nothing of value.</p>
<p><b>No Skill:</b> Worse yet, he has recognized you and identifies you to the local authorities. You become a hunted criminal. [D1/<em>Outlaw</em>]</p>
<p><b>Luck:</b> Your victim does not recall your features and identifies another as his assailant. At first, you thank your luck, but then you discover that the innocent man is to hang. You cannot let an innocent die for your crime—you come forward and confess. The Sultan is impressed with your courage; he pardons you and engages you to catch other criminals. Even your victim is pleased by your repentance. [D3/S1/W+1 (Max: Respectable)/<em>Robe of Honor</em>/You may lose one status of your choice]</p>`,
	},
	230: {
		index: 230,
		text: `<p>You greet the other kindly, disguising your attention. The other returns your greeting with a grace that surprises you.</p>
<p><b>No Skill:</b> When you strike, the other is shocked by your abuse of his innocent gestures. Unhappily, he hands over his purse to you, but utters a powerful curse on your head. [D-1/W+1 (Max: Respectable)/<em>Accursed</em>]</p>
<p><b>Courtly Graces:</b> Your heart tells you it would be indecent to accost this generous person, no matter how desperate you are. Instead, you earnestly and forthrightly ask for his aid. Kindly, he introduces you to some of his influential friends. [D2/Gain any skill at Master level (1 use)]</p>`,
	},
	231: {
		index: 231,
		text: `<p>Your crime is prevented and you are captured, but Allah is Compassionate and your judge is merciful.</p>
<p><b>No Skill:</b> Your confinement is short and brings you closer to Allah. [D1/Piety]</p>
<p><b>Stealth and Stealing</b> (mandatory): Your reputation weighs heavily against you, however, and you are charged with a severe punishment. [D1/W-1 (Min: Beggar)/Wisdom/<em>Imprisoned</em>]</p>`,
	},
	232: {
		index: 232,
		text: `<p>The other sees your actions and suspects you of foul intent. Instantly you are set upon by guards and brought before the Sultan, who, you learn, is a distant relative of the one who accuses you. You are thrown in a cell. [D1/<em>Imprisoned</em>]</p>`,
	},
	233: {
		index: 233,
		text: `<p>You eye the other with disapproval, noting that he also views you with suspicion.</p>
<p><b>No Skill:</b> You go your separate ways, breathing sighs of relief. [D1]</p>
<p><b>Luck:</b> As you pass by, the other is attacked by a deranged hag. Impulsively you aid in subduing her. You strike up a conversation and to your great surprise you discover that the other knew your father well. Gladly he extends his hospitality and undertakes the smoothing of your road to destiny. [D2]</p>`,
	},
	234: {
		index: 234,
		text: `<p>You unwittingly give offense to the other.</p>
<p><b>No Skill:</b> The response he gives you is very cold and very brief. [D-1]</p>
<p><b>Courtly Graces, Bargaining and Evaluation:</b> You perceive what you have done, and immediately attempt to right the situation with fine words. Allah inspires compassion in him, and he is receptive to your requests. [D2]</p>`,
	},
	235: {
		index: 235,
		text: `<p>You are embraced as a guest, and the other's friends are impressed at the honor shown you.</p>
<p><b>No Skill, Married</b> (mandatory): You are taken to the other's house and enjoy many nights of pleasurable company. [D1/S1/<em>Respected</em>]</p>
<p><b>Appearance:</b> The other's eldest child is of surpassing grace and exceptional beauty. You are smitten with each other, and your happiness is assured! [D1/S1/<em>Beloved</em>]</p>`,
	},
	236: {
		index: 236,
		text: `<p>The other is quite taken by your humility and charm and converses with you for many an hour. "There is a legend I know," he says, "about a mysterious kingdom beneath the waves..."</p>
<p><b>No Skill:</b> You find the tale delightful, but see no value in it. [S1]</p>
<p><b>Scholarship, Storytelling:</b> The tale he tells enables you to find this wondrous kingdom. [D1/S1/Opportunity to enter the Undersea Kingdom]</p>`,
	},
	237: {
		index: 237,
		text: `<p>At your words, the other looks at you speculatively.</p>
<p><b>No Skill:</b> "You are too kind," he says. "However, there is little I can do for you, I'm afraid. Your story is already written." [<em>Fated</em>]</p>
<p><b>Storytelling:</b> After a moment's pause, he asks if you have any talent at entertainment. Your tales delight him, and he offers to aid you in whatever way he can. [D1/S1/You may lose one status of your choice]</p>`,
	},
	238: {
		index: 238,
		text: `<p>You speak words of love to the other. He is hesitant, saying, "My father would be furious if he saw me even talking to you!"</p>
<p><b>No Skill:</b> You have no choice but to withdraw. [D1/Wisdom]</p>
<p><b>Acting and Disguise:</b> You disguise yourself as a physician. The object of your affections feigns a distressing malady, and you are summoned to his bedside. The father's suspicions are allayed, and you spend a night in pleasant dalliance. [D2/S1/Seduction/<em>Beloved</em>]</p>`,
	},
	239: {
		index: 239,
		text: `<p>You woo the other.</p>
<p><b>No Skill:</b></p>
<p><em>If the other is male:</em> He flushes with pleasure, and, feeling as though his heart would burst, he embraces you. Then you discover that you are kissing without shame, and retire to a more private place. [D1/<em>Beloved</em>]</p>
<p><em>If the other is female:</em> She raises her veil and makes signs at you with her eyes. You boldly embrace her, and she does not shy away; instead, she returns your embrace with fire, and whispers her love to you. [D1/<em>Beloved</em>]</p>
<p><b>Luck, Seduction:</b> Joyfully, he desires you as intensely, and a quick marriage is performed. Your future happiness is assured. [D2/<em>Married</em>]</p>`,
	},
	240: {
		index: 240,
		text: `<p>Despite an outward appearance of poverty, the other is secretly amazingly wealthy.</p>
<p><b>No Skill:</b> You are so amazed at the wealth of this apparently destitute soul that you cry out in surprise. Others hear you, and you are caught in the act. Your victim turns out to be a Vizier sojourning among the people to learn of their condition.</p>
<p><em>Roll two dice, adding one each for Wisdom, Appearance, Courtly Graces, and Quick Thinking:</em></p>
<p>2–7: You are jailed for your crimes. [D1/<em>Imprisoned</em>]</p>
<p>8+: You plead in your defense the very thing the Vizier was trying to find out. The condition of the people, as represented by yourself, is so bad that you must rob for a living. The Sultan is impressed by your plea and your judgment is light. [D2/S1]</p>
<p><b>Acting and Disguise, Bargaining and Evaluation:</b> You study the actions of your intended victim, realizing that something seems out of place. You soon discover that the other is actually a disguised Vizier, and you confront him and ask him of his purpose. Impressed with your discerning nature, he asks you to join the Sultan's court as an honored advisor. [D2/S1/Wisdom/<em>Respected</em>/<em>Robe of Honor</em>]</p>`,
	},
	241: {
		index: 241,
		text: `<p>Your victim seems helpless and falls at your feet in a faint. You greedily reach for his purse—and a sword flashes in your face.</p>
<p><b>No Skill:</b> Rising from the ground, the other calmly deals you a thousand blows. [D1/<em>Crippled</em>]</p>
<p><b>Weapon Use:</b> You dart back in surprise. Drawing your own sword you put up a desperate defense. Despite your skill, you are outclassed, and you escape at the earliest opportunity, suffering from many wounds. [D2/Weapon Use/<em>Wounded</em>]</p>`,
	},
	242: {
		index: 242,
		text: `<p>You follow your victim to his home and rob him there.</p>
<p><b>No Skill:</b> You make off with his purse, and escape into the night. [D1/W+2 (Max: Rich)/Stealth and Stealing]</p>
<p><b>Bargaining and Evaluation, Scholarship:</b> Upon examining your ill-gained goods, you realize that among the otherwise ordinary objects is a most remarkable article. [D1/W+2 (Max: Rich)/Stealth and Stealing/<b>Treasure</b>]</p>`,
	},
	243: {
		index: 243,
		text: `<p>The other seems cool and uninterested in your advances.</p>
<p><b>No Skill:</b> "I'm sorry," he says. "It can never be." [D1]</p>
<p><b>Seduction, Appearance:</b> You speak in impassioned words and make known your intentions. The other gazes into your eyes and with a quick move, he takes you in his arms and smothers you with kisses! Your reason is sundered, and you return his passion. Obviously you have made a big hit with your intended. [D2/S1/Appearance/<em>Beloved</em>]</p>`,
	},
	244: {
		index: 244,
		text: `<p>You take the arm of the other and speak to him. "Oh please," he cries. "I do not appreciate your intentions, and you endanger me with your attention. I am disguised to avoid scrutiny, and you will bring danger upon me."</p>
<p><b>No Skill:</b> The other disengages from your grasp and rushes off. [D1/S1]</p>
<p><b>Stealth and Stealing:</b> You hold the other close to you and demand a ransom for concealing his secret. You extort a large sum from your desperate victim. [D-1/W+2 (Max: Rich)/Beguiling]</p>`,
	},
	245: {
		index: 245,
		text: `<p>"Your words are most charming," the other says hurriedly, "but I am in great peril and must—"</p>
<p><b>No Skill:</b> Before he can finish his thought, a horde of dark, ugly men appear, thrusting you aside and seizing the other. Your struggle in his defense is rewarded with a rain of blows, and you are left sprawled on the ground, never to see the other again. [D1/<em>Wounded</em>]</p>
<p><b>Weapon Use, Wilderness Lore:</b> A horde of dark, ugly men appears, trying to get at the other. You skillfully fend them off long enough for both of you to escape. The other is most grateful. [D2/S1/W+1 (Max: Respectable)/Courtly Graces (1 use)/<em>Determined</em>]</p>`,
	},
	246: {
		index: 246,
		text: `<p>You chat briefly with the other, believing him to be a commoner. Later, you learn that your companion was the oldest child of the Sultan.</p>
<p><b>No Skill:</b> Your tale of this meeting amazes all who hear it. [S1/Storytelling]</p>
<p><b>Scholarship, Seduction:</b> Your companion was greatly impressed with your speech and wisdom, and you are invited to enjoy his hospitality. All at the banquet are moved by your dignity and insight. [D2/S1/Wisdom/<em>Respected</em>]</p>`,
	},
	247: {
		index: 247,
		text: `<p>The other responses gracefully to your overtures. You spend many hours conversing about the foolish ways of man and the inscrutable ways of Allah.</p>
<p><b>No Skill:</b> You leave armed with new insights into the meaning of your own life. [D1/Wisdom]</p>
<p><b>Scholarship:</b> You impress your host with your profound thoughts, and he gives you a gift which, he says, will be most useful to one of your insight. [D2/Wisdom/<b>Treasure</b>]</p>`,
	},
	248: {
		index: 248,
		text: `<p>Gathering your wits, you speak to the other.</p>
<p><b>No Skill:</b> The other sneers at your words, saying, "You are obviously unused to discourse with those of culture. I will hold my displeasure this time, but do not come before me again without learning the behavior of courteous folk." [D1]</p>
<p><b>Courtly Graces:</b> Delight fills the face of the other at your words. He says, "Your manners are impeccable and your speech exceedingly fair. Let me repay the pleasure I gain from your company with this small gift." [D1/W+1 (Max: Respectable)/Wisdom]</p>`,
	},
	249: {
		index: 249,
		text: `<p>To your amazement, the other is eager to speak to you. "Come close and attend. I have heard a prophecy which concerns your future."</p>
<p><em>Roll two dice, adding two each for Quick Thinking, Wisdom, and Fated:</em></p>
<p>2–7: The prophecy is obscure, and the only meaning you take from it is that you are destined for a strange fate, though you cannot even say if it is kind or ill. [D2/<em>Fated</em>]</p>
<p>8+: "Your fate is shrouded in mystery. Your destiny lies in a distant land of legend and wonder, where weal or woe hang in the balance of each action. If you but say the word, there you will be taken." [D3/S1/Opportunity to enter any Place of Power]</p>`,
	},
	250: {
		index: 250,
		text: `<p>He responds, "If you would truly honor me, there is a task I would have you perform, in a far land. If you are successful, I will reward you beyond your wildest dreams." [D2/S1/W+1 (Max: Rich)/Place two random <b>Treasures</b> under your Origin marker here. Have another player place your Destination marker anywhere on the board. If you reach your Destination marker and return to your origin, you receive both <b>Treasures</b>]</p>`,
	},
	251: {
		index: 251,
		text: `<p>Your scheme proceeds well, until a sudden twist of fate robs you of success and precipitates you into the hands of the other's guards. They throw you in a cell to give you ample opportunity to repent your wicked ways. [D1/<em>Imprisoned</em>]</p>`,
	},
	252: {
		index: 252,
		text: `<p>Your intended victim is easily taken and quite cooperative. He tries to convince you of the error of your ways with wise words and composed behavior.</p>
<p><b>No Skill:</b> You reflect on his words and are filled with shame and revulsion at your past behavior. Abashed, you humbly beg to become his companion, that you might learn from his actions, and he graciously consents. [D2/Wisdom/<em>Grief Stricken</em> (1 turn)]</p>
<p><b>Determined</b> (mandatory): Your determination leaves you unmoved by your victim's words. Unfortunately, it seems your victim has no wealth, and your abduction of such a respected one earns you the hatred of the righteous. [D1/<em>Pursued</em> (SOLDIER)/<em>Outlaw</em>]</p>`,
	},
	253: {
		index: 253,
		text: `<p>Your clever plot works perfectly. Your victim is taken without a struggle, and there is no delay of the ransom for such a distinguished personage.</p>
<p><b>No Skill:</b> If only the other had not seen your face and recognized you... [D1/W+1 (Max: Rich)/<em>Outlaw</em>]</p>
<p><b>Acting and Disguise:</b> You conceal your identity during the abduction, that the other might not recognize you, and you make good your escape without difficulty. [D2/W+2 (Max: Rich)]</p>`,
	},
	254: {
		index: 254,
		text: `<p>Despite the vigilance of those around him, you easily seize the other. You take him to another place to await delivery of his ransom, but realize that he works an evil charm on you.</p>
<p><b>No Skill:</b> You cannot resist him and fall beneath his spell. [D1/Lose Wisdom/Lose Piety/<em>Ensorcelled</em>]</p>
<p><b>Determined</b> (mandatory): You are not so easily taken by simple trickery, but you feel your determination weakening.</p>
<p><em>You may release him, or persevere:</em></p>
<p><em>If you release him:</em> You decide your captive is not worth the effort, and abandon him. [D1/Lose <em>Determined</em>]</p>
<p><em>If you attempt to persevere:</em></p>
<p><em>Roll two dice, adding one each for Appearance and Scholarship:</em></p>
<p>2–7: In the end, his evil is too strong. You fall under his influence. [D1/Beguiling/Lose Piety/<em>Ensorcelled</em>]</p>
<p>8+: You hold out against his hypnotic evil, and it is he who surrenders. He arranges to have his ransom paid. [D3/S1/W+2 (Max: Rich)]</p>
<p><b>Brass Trumpet</b> (mandatory): As the other begins to work his evil magic upon you, the Brass Trumpet sounds, shattering him concentration. You seize the opportunity and flee into the night. [D1/S1]</p>`,
	},
	255: {
		index: 255,
		text: `<p>The other leaps back from your attack, crying, "Guards, guards!" Suddenly there are armed men all around you.</p>
<p><b>No Skill:</b> Resistance is useless, and you are taken. The other is furious, and orders you tortured until you repent. [D1/<em>Wounded</em>]</p>
<p><b>Weapon Use</b> (mandatory): Although resistance is useless, your reliance on force of arms is deeply ingrained. You fight back, and the results are unfortunate, as the guards wound you severely before they manage to disarm you. When you are finally subdued, the other orders you tortured and abandoned in the wilderness. [D1/<em>Wounded</em>/<em>Crippled</em>]</p>
<p><b>Brass Trumpet</b> (mandatory): As the guards lay hands on you, the Brass Trumpet peals forth a tremendous blast. The guards and the other fall to the ground clasping their ears, and you flee to safety. [D1/S1]</p>`,
	},
	256: {
		index: 256,
		text: `<p>You carefully plan your theft and enter his home while he is away. The house is cluttered with bric-a-brac. Unfortunately, all the valuables seem to be well-hidden.</p>
<p><b>No Skill:</b></p>
<p><em>Roll two dice, adding one each for Bargaining and Evaluation and Stealth and Stealing:</em></p>
<p>2–9: You grab some items and then run. They all turn out to be worthless. [D1]</p>
<p>10+: You help yourself to as much treasure as you can easily take. Most of it is worthless, but you discover that a lamp you have taken has some interesting properties. [D2/S1/<b>Magic Lamp</b>]</p>
<p><b>Scholarship:</b> You note a battered lamp of Chinese design. You call to mind the power of the Oriental sorcerers and their lamps, and you eagerly snatch it up and experiment. [D2/S1/<b>Magic Lamp</b>]</p>`,
	},
	257: {
		index: 257,
		text: `<p>You are caught in the act, and brought before the Sultan for judgment. "Perhaps," he says, "if I thought you were a generous man in the sight of Allah, I would spare you."</p>
<p><b>No Skill:</b> <em>You may offer a bribe, or accept your punishment:</em></p>
<p><em>If you offer a bribe:</em></p>
<p>"Oh my Prince," you plead, "perhaps a gift to you will convince you of my generosity."</p>
<p><em>Roll one die adding one each for Courtly Graces and Acting and Disguise:</em></p>
<p>1–3: The Sultan is furious, crying, "You dare offer a bribe to a Prince of the Faithful?" You are dragged away to the deepest dungeons. [D1/<em>Imprisoned</em>]</p>
<p>4+: He smiles and accepts your kind gift, then finds you not guilty. [D1/S1]</p>
<p><em>If you accept your punishment:</em></p>
<p>You accept your punishment, and you are imprisoned for your offense. [D1/Enduring Hardship]</p>
<p><b>Piety:</b> You take him at his word, and call several witnesses who testify that you are a generous man in the sight of Allah. He is forced to free you. [D2/Piety]</p>`,
	},
	258: {
		index: 258,
		text: `<p>Your sword flashes, but the other is also skillful.</p>
<p><b>No Skill:</b> In fact, he is far more skilled than you. Soon you must flee, licking your wounds. [D1/<em>Wounded</em>]</p>
<p><b>Weapon Use:</b> To your amazement, his skill is almost as great as yours! Never before have you been tested to this degree, but after a duel which lasts a night and a day, you triumph! Tales of your victory over this formidable opponent are told far and wide for years, and a wealthy man hires you as his personal bodyguard. [D2/S2/W+1 (Max: Rich)/Weapon Use/<em>Respected</em>]</p>`,
	},
	259: {
		index: 259,
		text: `<p>Your victim screams for help as he nimbly avoids your blow. Guards rush to his cries, and they block your escape route.</p>
<p><b>No Skill:</b> Desperately, you fight your way through them, and you flee, free but wounded. [D1/<em>Wounded</em>]</p>
<p><b>Quick Thinking:</b> Cleverly, you dash into a nearby dwelling, where the inhabitants scatter in alarm. In the confusion your pursuers are delayed, and you are able to escape. [D2]</p>`,
	},
	260: {
		index: 260,
		text: `<p>As you stand to attack, the other whips out his sword, crying, "No mercy!" He skillfully presses his attack.</p>
<p><em>You may flee or stand and fight:</em></p>
<p><em>If you flee:</em></p>
<p>You flee, but not before the other wounds you. Word of your cowardice is in every ear by sunset. [D1/<em>Wounded</em>/<em>Scorned</em>]</p>
<p><em>If you stand:</em></p>
<p><em>Roll two dice, adding two each for Determined and Weapon Use:</em></p>
<p>2–8: You struggle bravely, but are overcome. The other covers you with cuts before leaving you to your fate. [D1/<em>Wounded</em>]</p>
<p>9+: Though you are badly outmatched by the skill of the other, you manage to hold off your opponent through sheer determination. Saluting your courage, he departs, bidding you to leave with your freedom. [D2/<em>Determined</em>]</p>`,
	},
	261: {
		index: 261,
		text: `<p>As soon as the other comes into sight, he pins you with an icy glare, and demands to know why he should not slay you immediately. You begin babbling as one insane.</p>
<p><b>No Skill:</b> "Very well," he laughs, "Your abject groveling has earned you your life. However, a beating never killed anyone." He has his guards flog you before a crowd, who believe you guilty of many great crimes. [D1/<em>Scorned</em>]</p>
<p><b>Beguiling:</b> You earn the contempt of the other, and he ignores you totally. The other's enemies enjoy a hearty laugh at his expense, however, for you cleverly wove tremendous insults into your feigned delirium. [D1/Quick Thinking/Acting and Disguise]</p>`,
	},
	262: {
		index: 262,
		text: `<p>The other is crazed and obviously obsessed with you. You find the other pitiful in ways, and repulsive in others. The other has tried a disguise to trick you. Thinking the other might have evil intentions, you try to avoid him.</p>
<p><b>No Skill:</b> He sees you and jumps up in rage. "Ah-ha!" he shouts. "You are the one I have sought for many miles, through hardship and injustice. Prepare to yield your life for your crimes!" You take advantage of the other's long tirade to flee and disappear into the crowd. [D1]</p>
<p><b>Luck:</b> He sees you and catches up to you. In his fury, the other attacks hastily and stumbles at your feet. When he is at your mercy, you take this opportunity to rid yourself of his threats. At the same time, you hate to leave his purse unattended. [D2/W+1 (Max: Respectable)]</p>`,
	},
	263: {
		index: 263,
		text: `<p>The other is crazed and obviously obsessed with you. You find the other pitiful in ways, and repulsive in others. The other has tried a disguise to trick you. Thinking the other might have evil intentions, you try to avoid him. You do escape, but the other cries out to you, "I will stab out at you in ways that you can not imagine!"</p>
<p><b>No Skill:</b> You are soon stripped of your wealth and reputation by the backbiting and rumor-mongering of the other. [D1/W-2 (Min: Penniless)/<em>Scorned</em>]</p>
<p><b>Beguiling, Acting and Disguise:</b> You decide to go on the offensive and, in a disguise, you speak to the other of yourself and discover why the other hates you. With this knowledge you are able to make amends and (strange are the ways of Allah!) become successful business partners with the other. [D1/S1/W+2 (Max: Respectable)/Bargaining and Evaluation]</p>
<p><b>Brass Trumpet</b> (mandatory): You try to escape but the other confronts you in a public place. The Brass Trumpet sounds its note of warning, making clear to all the evil intents of the other, and delivering you from all suspicion of wrong-doing. [D2/S1/<em>Respected</em>]</p>`,
	},
	264: {
		index: 264,
		text: `<p>The other is crazed and obviously obsessed with you. You find the other pitiful in ways, and repulsive in others. The other has tried a disguise to trick you. Thinking the other might have evil intentions, you try to avoid him. You are unable to avoid the other and he traps you in a conversation.</p>
<p><b>No Skill:</b> Speaking to the other, you learn of his bitter and cruel heart, but (fortunately) his vengeance does not touch on your affairs. He was wronged by a woman, and as a result hates all women. You fear his bitter hatred and avoid further contact with him. [Enduring Hardship]</p>
<p><b>Bargaining and Evaluation:</b> Although you would prefer to avoid contact with this bitter person, you never let anything stand in the way of business. You consider yourself fortunate to avoid his wrath, and depart as soon as you have concluded your dealings. [D1/W+1 (Max: Rich)/Luck]</p>`,
	},
	265: {
		index: 265,
		text: `<p>The other says, "I have been seeking my brother for years. He has wronged me and reduced my mother to poverty, and I shall not rest until his perfidy is repaid. I would be most grateful for any aid."</p>
<p><em>Roll two dice, adding one each for Quick Thinking, Weapon Use, Courtly Graces, and Stealth and Stealing:</em></p>
<p>2–8: Would that you could, but you are unable to aid the other. [D1]</p>
<p>9+: You bring the wicked brother to justice by finding evidence of his crimes. The other is most grateful, and becomes your trusted companion. [D2/S1/Choice of skill at Master level (1 use)/<em>Beloved</em> (if appropriate)]</p>`,
	},
	266: {
		index: 266,
		text: `<p>Your charming words penetrate the angry heart of the other. "Your passionate kindness has distracted me from my vengeance, which I see now to be but conceit and vanity. Thank you for your guidance. I would be honored if you would accept my thanks."</p>
<p><b>No Skill:</b></p>
<p><em>If you are the same sex as the other:</em> The other gives you a bag of gold, which you take gladly before going on your way. [D1/W+1 (Max: Rich)/Courtly Graces]</p>
<p><em>If you are the opposite sex from the other:</em></p>
<p>The gift is an evening of delights. You begin as the sun sets, and notice not the outside world until you are called out for morning prayers. Together you perform the wuzu-ablution and thank Allah for the joy you have shared. [D1/Seduction/<em>Beloved</em> (if not <em>Married</em>)]</p>
<p><b>Storytelling:</b> He produces a remarkable article. "One of your vast knowledge would surely find interest in this." The gift is an ancient text of great value. [D1/S1/Choice of Magic or <b>Book of Hidden Treasures</b>]</p>`,
	},
	267: {
		index: 267,
		text: `<p>After you finish speaking, the other responds, "You have made your wishes clear to me. If you aid me in my search for justice, I shall consider what you ask."</p>
<p><b>No Skill:</b></p>
<p><em>Roll two dice, adding one each for Quick Thinking, Seduction, and Wisdom:</em></p>
<p>2–7: You lack the necessary skills to aid the other, and he goes on his way. [D1]</p>
<p>8+: With your help, the other brings a foul miscreant to his just end. The other is now free to spend time with you and learn of your charming personality. [D2/<em>Beloved</em> (if appropriate)]</p>
<p><b>Appearance:</b> The other is so taken with you that he soon forgets vengeance and returns your attentions wholeheartedly.</p>
<p><em>If the other is of the same sex as you, or if you are Married:</em> You and he spend many nights in pleasant discourse, and each grow wiser from the company of the other. [D2/Wisdom]</p>
<p><em>If the other is of opposite sex and is female:</em> With the stain of vengeance cleared from her visage, she shines in beauty, and her kiss is sweeter than the wines of Greece. [D2/Seduction/<em>Beloved</em>]</p>
<p><em>If the other is of opposite sex and is male:</em> Now that hatred no longer furrows his brow, you see that he is handsome as a prince of Samarkand, and his touch is as strong as Damascus steel. [D2/Seduction/<em>Beloved</em>]</p>`,
	},
	268: {
		index: 268,
		text: `<p>"I am captured by your charms, and I love you," replies the other, "but I cannot rest until justice is brought to the wicked thief whom I pursue."</p>
<p><b>No Skill:</b> "I'm sorry." The other continues on his way. [D1]</p>
<p><b>Determined</b> (mandatory): You are so smitten with the other that you vow to aid in his vengeance. Your determination so impresses him that he agrees to let you journey with him.</p>
<p><em>If you are male:</em> Her long legs and rounded belly bring you great joy as you travel together, but you learn that what you share is not love but passion, and you know you will part ways when justice is accomplished. [D2/S1/Stealth and Stealing/<em>Under Geas</em>]</p>
<p><em>If you are female:</em> His broad chest and strong arms bring you great joy as you travel together, but you learn that what you share is not love but passion, and you know you will part ways when justice is accomplished. [D2/S1/Stealth and Stealing/<em>Under Geas</em>]</p>`,
	},
	269: {
		index: 269,
		text: `<p>The other looks upon you for a moment before responding.</p>
<p><b>No Skill:</b> "I am pleased with your conduct. Your speech and manners are evidence of fine breeding and education. Any Sultan would be proud to speak to you as a companion." The other presents you to the Sultan, and, indeed, he is pleased by your wisdom. [D1/Courtly Graces/<em>Robe of Honor</em>/You may lose one status of your choice]</p>
<p><b>Stealth and Stealing</b> (mandatory): He cries, "Your reputation precedes you, lout! Begone from my sight at once!" [<em>Scorned</em>]</p>`,
	},
	270: {
		index: 270,
		text: `<p>Before you can finish a sentence, the other looms over you like a vengeful demon. "Yes?" he booms. "What do you want, worm?"</p>
<p><b>No Skill:</b> Your nerve fails you and you flee his presence. [D-1/S1]</p>
<p><b>Determined</b> (mandatory), <b>Acting and Disguise:</b> You maintain your poise and confidence in the face of the other's intimidation. "Well," he says, "It appears you are made of stern stuff. I can use a person of your character..." You obtain a position of trust and confidence in his household, and learn greatly from your patron. [D2/W+1 (Max: Rich)/Wisdom/<em>Respected</em>]</p>`,
	},
	271: {
		index: 271,
		text: `<p>The other glares bitterly as you speak. "You seek only to gain profit at my expense, do you not?"</p>
<p><b>No Skill:</b> The other waves his hand dismissively, and will have no dealings with you at all. [<em>Scorned</em>]</p>
<p><b>Piety:</b> The other's initial skepticism decreases as the sincerity of your character is revealed. You finally earn the other's trust, and he grants you your desires. [D2/Choice of <em>Beloved</em> (if appropriate) or <em>Respected</em>/You may lose one status of your choice]</p>
<p><b>Beguiling</b> (mandatory): Your confidence in your wit and tongue lead you to attempt to trick the other, when it is obvious that he is skeptical of your character. He is not fooled for an instant, and publicly humiliates you. [D1/Lose Beguiling/<em>Scorned</em>]</p>`,
	},
	272: {
		index: 272,
		text: `<p>The other looks at you reflectively. "Due to my wealth and powers, I find myself constantly approached by false friends and lovers. Though I admit I am impressed with your charms, I must assume you to be the same until you prove otherwise."</p>
<p><b>No Skill:</b> Although you know in your heart that you are not false, the other will not give you a chance to prove it. [D1]</p>
<p><b>Seduction:</b> To prove your sincerity, you give the other lessons in the amorous arts.</p>
<p><em>If you are of the opposite sex from the other and are not Married:</em> Your lesson does not cease until morning, and he does not tire of instruction. When you are finished, he cannot bear to be parted from your company. [D1/<em>Beloved</em>]</p>
<p><em>Otherwise:</em> You discourse long into the evening on the ways to bring satisfaction to one's lovers, and the other is most eager to continue his studies with another. Before you part, he promises to speak highly of you to all he meets. [D1/<em>Respected</em>]</p>`,
	},
	273: {
		index: 273,
		text: `<p>You make a very favorable first impression on the other, and he invites you to dine with him. When the plates of food are brought out, they are empty! "Do you enjoy my fine cuisine?" he asks a little later, after "eating" a huge meal.</p>
<p><b>No Skill:</b> You are totally baffled by his behavior, think him mad, and politely excuse yourself. [S1]</p>
<p><b>Acting and Disguise:</b> You fall in with his play-acting, pretending to also enjoy the meal. The joke goes on long enough, however, and finally you leap up and give him a tremendous bash on the neck. "Why did you do that?" he cries. "Why, there was a large bug crawling on you," you reply. He is delighted that you were willing to share his eccentricity and orders real (and sumptuous) food. Then he begs you to remain as his companion for a while, playing all nature of tricks and devices. [D1/S2/Beguiling]</p>`,
	},
	274: {
		index: 274,
		text: `<p>"Come, sit here with me and share my hospitality, and I will share with you the tale of how I came to achieve this station..." He tells of his poverty and shiftlessness as a youth, incredible good fortune in stumbling across a hidden vault filled with exotic treasures, and subsequent prudence and wisdom in the management of his affairs.</p>
<p><b>No Skill:</b> You are inspired to follow his example, both seizing upon good fortune and planning in advance against calamity. [D1/Wisdom]</p>
<p><b>Storytelling:</b> You repay the courtesy of your host with the telling of your own life's story, which is a lesson to everyone of the dangers of seeking wealth and adventure. Your host is deeply impressed with your sagacity and humility, and by your skill at weaving a narrative. [D2/S2/Storytelling/<em>Robe of Honor</em>]</p>`,
	},
	275: {
		index: 275,
		text: `<p>You discourse with the other for long hours, delighting him no end. "Your breeding and education are certainly superior. Everyone of my wealth and station should have such a one to advise him."</p>
<p><em>Roll two dice, adding one each for Wisdom, Bargaining and Evaluation, and Scholarship:</em></p>
<p>2–7: The evil one robs you of your freedom and enslaves you that you might remain with him. [D2/<em>Enslaved</em>]</p>
<p>8+: The other hires you as his advisor, inspiring in others jealousy of your success. One who had long courted the favor of the other swears to destroy you. [D2/W+1 (Max: Rich)/<em>Pursued</em> (PRINCE)]</p>`,
	},
	276: {
		index: 276,
		text: `<p>When setting out to rob the wealthy, one must expect to encounter superior safeguards against such nefarious activities. The other is well-prepared for your attempt to rob him.</p>
<p><b>No Skill:</b> Not only do you fail, but you are captured. The Sultan deems it fitting that you be enslaved to your intended victim. [D1/Lose Stealth and Stealing/<em>Enslaved</em>]</p>
<p><b>Acting and Disguise:</b> Knowing the safeguards to be elaborate and powerful, you impersonate a servant sent to fetch an item for your imperious master. Your whining and pleading convince the guards, and you bear away a rich prize. [D2/<b>Treasure</b>]</p>`,
	},
	277: {
		index: 277,
		text: `<p>In the private dwelling of the other, you come across a veritable treasure trove! As you enter, you hear a guard approaching.</p>
<p><b>No Skill:</b> <em>You may flee at once, or tarry a moment longer to steal something:</em></p>
<p><em>If you flee:</em></p>
<p>Your escape is successful, though you are empty-handed. [D1]</p>
<p><em>If you tarry:</em></p>
<p><em>Roll two dice, adding one each for Stealth and Stealing, Quick Thinking, and Scholarship:</em></p>
<p>2–6: You take too long to select the right item, and are easily captured and thrown into a dungeon. [D1/<em>Imprisoned</em>]</p>
<p>7–10: You make off with a valuable bauble. [D2/W+1 (Max: Rich)]</p>
<p>11+: You make off with an enchanted item. [D2/<b>Treasure</b>]</p>
<p><b>Bargaining and Evaluation:</b> You tarry long enough to discern among the treasures an item of great value and an item of fabled powers, and have time to take one of them before you flee. [D2/Choice of W+1 (Max: Princely) or <b>Treasure</b>]</p>`,
	},
	278: {
		index: 278,
		text: `<p>The other is careful in his business, and you will need help to rob him. You fall in with a shrewd thief who will aid you.</p>
<p><b>No Skill:</b> To your sorrow, you discover that the wealthy other has set a thief to catch a thief—your companion is in his employ. You accommodatingly stumble into the trap. The guards cackle with glee as they throw you in the dungeon. [D1/W-2 (Min: Poor)/<em>Imprisoned</em>]</p>
<p><b>Seduction:</b> Your own practice of deception causes you to distrust your companion, and you look into his background. You find that he is in the employ of your intended victim, so you cleverly trick him and make him seem a traitor to his employer. He is imprisoned, while you escape with the gold. [D2/S1/W+1 (Max: Respectable)/Quick Thinking]</p>`,
	},
	279: {
		index: 279,
		text: `<p>If you had known that the powerful other is infamous for his cruelty and misanthropy, you would never have approached him. You seem fortunate, however, for he says in a honeyed voice, "It is my policy to occasionally reveal the generous side of my personality. What favor may I grant you?"</p>
<p><b>No Skill:</b> You make your request.</p>
<p><em>Roll two dice, adding one each for Appearance, Acting and Disguise, and Wisdom:</em></p>
<p>2–7: Your request must have been too much; he explodes in rage at your presence, and calls down curses on your impertinent head. [D1/<em>Accursed</em>]</p>
<p>8+: To your great surprise, he grants your favor willingly! You take your boon and hurry off before you can arouse his wrath accidentally. [D2/S2/W+1 (Max: Rich)/You may lose one status of your choice]</p>
<p><b>Courtly Graces:</b> Your tact and clever tongue lead you to make a reasonable request while avoiding the powerful other's wrath. Your request is granted graciously. [D2/S1/W+1 (Max: Respectable)/You may lose one status of your choice]</p>`,
	},
	280: {
		index: 280,
		text: `<p>"Talk?!" the other cries out, "You wish to talk?! I'll have your tongue!" and he leaps toward you. You are easily defeated, beaten to a pulp, and left for dead. [D2/<em>Crippled</em>]</p>`,
	},
	281: {
		index: 281,
		text: `<p>The other, being deeply troubled and unable to sleep, is in a terrible mood. You attempt a bargain but the other is no more interested in you than in an earthworm. "I am bored with you. I think that I will amuse myself by seeing how easy it will be to separate you from your limbs." You desperately reply, "If it is amusement that you wish... let me tell you a tale." The other relaxes a bit and finally says, "Perhaps you shall leave here intact. Let's hear this tale."</p>
<p><b>No Skill:</b></p>
<p><em>Roll two dice, adding one each for Acting and Disguise, Determined, and Enduring Hardship:</em></p>
<p>2–6: You are terrified; you cannot speak. The other has you dragged behind a horse, and as you lie bleeding on the road, you curse your fate for ever meeting him. [D1/Lose Luck/<em>Wounded</em>]</p>
<p>7+: Your tale strikes the other's fancy and he permits you to leave—unfulfilled but, as promised, intact. [D1/Storytelling]</p>
<p><b>Storytelling:</b> Your terror inspires you to one of your finest performances, and the other gratefully grants your favor. [D2/S1/Storytelling/<em>Blessed</em>/You may lose one status of your choice]</p>
<p><b>Seduction</b> (if of opposite sex): You know the cause of many sleepless nights, for it is none other than the sickness of empty love. You take the other's hand in yours and caress the other's firm and tender arms, and lead him to a private place where you can administer the cure for longing. [D2/Choice of W+2 (Max: Rich) or <em>Beloved</em> (if appropriate)]</p>`,
	},
	282: {
		index: 282,
		text: `<p>The other listens intently to your words while chewing abstractedly on his sleeve.</p>
<p><b>No Skill:</b> When you finish, he raises his arms and cries, "Guards, take this revolting worm away. The presumption of addressing me thus is a crime of enormous proportion. Now, summon my Viziers." As you are led away to the dungeon, you see three dogs (dressed in the finest robes) being led in. [D1/<em>Imprisoned</em>]</p>
<p><b>Quick Thinking:</b> You soon realize that the other has had his turban wrapped too tightly about his brain for many years, and you forget about your request. Instead you flatter him, calling upon reserves of rhetorical excess you had not known you possessed. You escape his madness at the first opportunity. [D2/Courtly Graces]</p>`,
	},
	283: {
		index: 283,
		text: `<p>"Your words are most kind, but I must insist upon greater proof than mere chit-chat," says the other. "To prove your love, you must demonstrate the depth of your devotion. First, shave off your hair, then shave and paint your private parts red..."</p>
<p><b>No Skill, Seduction</b> (mandatory): So great is your love that you do not realize that you being made a fool... until you run naked into a barber shop and all the men laugh uproariously at you. [D1/S1/<em>Scorned</em>]</p>
<p><b>Storytelling:</b> You are cautious in your affairs, and you do not wish to become involved with one who is obviously mad. However, your heart still yearns for the other, and your suffering is great. [D2/Enduring Hardship]</p>`,
	},
	284: {
		index: 284,
		text: `<p>After hearing your protestations of love, the other says "Very lovely. Please come back tomorrow." This occurs for many days.</p>
<p><b>No Skill:</b> You give up in disgust and leave the sight of this mad person. [D1]</p>
<p><b>Determined</b> (mandatory), <b>Enduring Hardship:</b> Your persistence is admired by one of the other's advisors. Once he is satisfied as to your character, his aid proves invaluable, and your courtship is a success. [D2/S1/<em>Determined</em>/<em>Married</em>]</p>`,
	},
	285: {
		index: 285,
		text: `<p>The other is elderly and somewhat confused. You offer to aid him to find the way home.</p>
<p><b>No Skill:</b> You wander for a while but clearly you do not know where you are going. The elderly other sense this and thanks you for trying to help but he will try to get home himself. [D1]</p>
<p><b>Wilderness Lore, Scholarship:</b> Your knowledge allows you to easily locate the dwelling of the other. His relatives are grateful for your kindness, and reward you with a fine gift. [D2/W+1 (Max: Respectable)/Courtly Graces]</p>`,
	},
	286: {
		index: 286,
		text: `<p>The other is a stranger, lost and alone, and he does not speak your language well.</p>
<p><b>No Skill:</b> You cannot discover what he needs. [<em>Determined</em>]</p>
<p><b>Scholarship:</b> You speak the other's tongue fluently and are able to help him find his destination: the palace of the Sultan. The other is an honored guest of the prince, and you are gratefully welcomed in the palace. [D2/Piety/<em>Robe of Honor</em>]</p>`,
	},
	287: {
		index: 287,
		text: `<p>The other is lost and at his wits' end. So eager is he to be on his way, you are hardly able to make him remain and listen to your directions.</p>
<p><b>No Skill:</b> A few hours later, you meet him again, still lost. "You scoundrel," he roars. "You did this deliberately!" Then he proceeds to thrash you soundly with his cudgel, and you count yourself fortunate to escape with only minor wounds. [D1]</p>
<p><b>Courtly Graces:</b> You calm the other and patiently explain the directions; as a safeguard you offer to accompany him as a guide. You are richly rewarded for your efforts and make a valuable business contact. [D2/W+1 (Max: Rich)]</p>`,
	},
	288: {
		index: 288,
		text: `<p>The other is busy, but is fascinated with your conversation.</p>
<p><b>No Skill:</b> Finally he forgets his other errand altogether, and you spend the day in pleasant discourse, swapping stories into the evening. [D1/Storytelling]</p>
<p><b>Storytelling, Courtly Graces:</b> You are such a charming conversationalist that the other becomes your constant companion. You both profit from your friendship. [D2/S1/Choice of Piety or Wisdom]</p>`,
	},
	289: {
		index: 289,
		text: `<p>The other suspects that you intend to abduct him, and leaves you at the first opportunity. [D1]</p>`,
	},
	290: {
		index: 290,
		text: `<p>The other flees in terror at your first word. [S1]</p>`,
	},
	291: {
		index: 291,
		text: `<p>You lure the other to a remote place. There are none to hear his shouts for aid.</p>
<p><b>No Skill:</b></p>
<p><em>Roll two dice, adding one for Storytelling:</em></p>
<p>2–7: The ransom you demand is too high. The family of the victim cannot pay, and instead they hire assassins to hunt you down. You barely manage to escape with your life, and the assassin follows as you flee. [D1/<em>Pursued</em> (SOLDIER)]</p>
<p>8+: Your ransom demands are reasonable, and the relatives pay with alacrity, happy to have their loved one returned. [D1/W+1 (Max: Respectable)]</p>
<p><b>Bargaining and Evaluation:</b> You carefully research the victim's fortune and charge the correct ransom. [D2/W+1 (Max: Respectable)/Wisdom]</p>`,
	},
	292: {
		index: 292,
		text: `<p>The other places his arm around a hairless ape which travels with him. "My friend has been trapped in a beast's form by an evil sorcerer. Until someone kisses these ugly lips, my friend will remain a wretched beast."</p>
<p><b>No Skill:</b> You are willing to try.</p>
<p><em>Roll two dice, adding one each for Acting and Disguise, Wilderness Lore, and Bargaining and Evaluation:</em></p>
<p>2–7: You cannot bring yourself to kiss an ape. The enchantment remains. [S1]</p>
<p>8+: You manage a formal peck on the lips of the beast, and it is transformed into a rather ugly maiden—who immediately falls in love with you.</p>
<p><em>If you are not Married:</em> The attentions of the maiden, who clings to you like a vine to a tree, bring howls of laughter from those around, and you are the butt of jokes for months after. [D1/S1/Enduring Hardship/<em>Beloved</em>/<em>Scorned</em>]</p>
<p><em>If you are Married:</em> You quickly protest that you are already married, and the maiden gathers what little dignity she has and departs. [D1/S1]</p>
<p><b>Appearance</b> (mandatory): Your vanity makes the very thought of kissing an ape revolting to you. You beat the other and his ape (which gives you a nasty bite). Unfortunately, the wound heals slowly, and infects. [D1/<em>Wounded</em>/Roll 1 die: On a 1 or 2, <em>Diseased</em>]</p>`,
	},
	293: {
		index: 293,
		text: `<p>The other shouts with relief when the enchantment is lifted.</p>
<p><b>No Skill:</b> Then he leaps to attack you. Fierce with long insanity, he nearly rends you limb from limb before he capers madly off. [D1/<em>Crippled</em>]</p>
<p><b>Magic:</b> You recognize that the other was driven mad by the enchantment, and magically cure that as well. The other is grateful, and tells of the haunted house where he first suffered the enchantment. "Possibly," he suggests, "one of your power might break the haunt." [D2/S2/Opportunity to enter the Haunted House]</p>`,
	},
	294: {
		index: 294,
		text: `<p>The other tells you of his problem: an enchantment laid upon him by a wicked sorcerer.</p>
<p><b>No Skill:</b> You would cheerfully aid him if you could, but you know little of magic. Upon consideration, you decide that the best course when dealing with magic is to leave it well alone. [D1/Wisdom]</p>
<p><b>Beguiling</b> (mandatory): You offer to lift the enchantment for a small fee, knowing full well that it is impossible for you to do so. The other has met your type before, and thrashes you soundly. You flee, and he gives chase. [D1/<em>Wounded</em>/<em>Pursued</em>]</p>`,
	},
	295: {
		index: 295,
		text: `<p>You hear the tragic tale of how the other was given a beast's form by perfidious brothers and sisters who were jealous of their sibling's success.</p>
<p><b>No Skill:</b> The story is entertaining and enlightening, but you cannot help him. [S1]</p>
<p><b>Scholarship:</b> The tale gives you clues to the spells necessary to enter a land hitherto thought to exist only in legend: the Dusky Land of the 'efreets. The tale also holds the key to lifting the other's curse, and you do so. [D2/S1/Opportunity to enter the Dusky Land]</p>`,
	},
	296: {
		index: 296,
		text: `<p>As you draw closer, you come to believe that the other is not who you had first thought. The other's features flow like water, their perfect beauty uncanny and unnatural. You are inflamed with passion by this beautiful one, and find yourself irresistibly drawn to make amorous advances, even overstepping the bounds of decency.</p>
<p><b>No Skill:</b> The other recoils in horror, exclaiming, "Get away, foul worm! Oh, why must I be cursed this way?" These cruel words break the spell that drew you, tearing at your heart and fill it with sorrow. [D1/S1/<em>Grief Stricken</em>]</p>
<p><b>Appearance:</b> The other is smitten with your charms, and you spend together a night of unimaginable rapture. When you awake, the other has mysteriously disappeared, and none can tell the manner of his going. Memory of his scent and touch fill your mind, driving you to distraction. [D2/S1/<em>Ensorcelled</em>]</p>`,
	},
	297: {
		index: 297,
		text: `<p>The kidnapping is accomplished easily. You then sit back and wait for the ransom offers that never come. In time you realize that your hostage will bring you no riches.</p>
<p><b>No Skill:</b> You wish you had selected a victim more carefully. [D1]</p>
<p><b>Storytelling:</b> You discover your hostage to be a perfect companion. Drawn by your tales of your glamorous and romantic life, the other begs to accompany you on your travels, and proves to be of great assistance. [D2/Choice of Magic (1 use) or Appearance]</p>`,
	},
	298: {
		index: 298,
		text: `<p>The other seems to be an easy target for your plans, but you soon discover that it was all a trap!</p>
<p><b>No Skill:</b> Guards burst from concealment and you are caught. Fortunately, the Sultan is merciful. Although you are banished from the kingdom, you escape with your life. [D1/<em>Outlaw</em>]</p>
<p><b>Stealth and Stealing:</b> Cannily, you had arranged a diversion to keep the guards busy elsewhere. The other is taken easily, and you receive a rich ransom. [D1/S1/W+1 (Max: Rich)]</p>`,
	},
	299: {
		index: 299,
		text: `<p>When the other is in your custody, you conceive a great regard for him and feel remorse for your cruel act.</p>
<p><b>No Skill:</b> You release him, and beg forgiveness, which he grants. [D2/<em>Love Struck</em> if opposite gender or Piety if same gender]</p>
<p><b>Appearance:</b> Your victim is at first repelled by your deed, but as your devotion and contrition become evident, you are forgiven. [D2/Lose Stealth and Stealing or Beguiling/Choice of <em>Beloved</em> (if appropriate) or <em>Respected</em>]</p>
<p><b>Married</b> (mandatory): As your devotion and contrition become evident, you are forgiven. [D2/Lose Stealth and Stealing or Beguiling/<em>Respected</em>]</p>`,
	},
};
