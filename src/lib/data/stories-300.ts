import type { Story } from "./stories";

export const stories300: Record<number, Story> = {
	300: {
		index: 300,
		text: `<p>"Thank you for your kind and flattering words," says the other. "Now, I'm sure you are very busy and must be on your way..." Though polite, your dismissal is unmistakable. [D1]</p>`,
	},
	301: {
		index: 301,
		text: `<p>"Phaugh!" cries the other almost before you have opened your mouth. "You are all the same. If I was not attractive, you would not give me a second thought."</p>
<p><b>No Skill:</b> "You are not worth another moment of my time. Begone!" [S1]</p>
<p><b>Beguiling:</b> "And if there is anything I hate more than empty adoration, it is insincere flattery. Be sure that I shall warn all my acquaintances against you!" [D-1/<em>Scorned</em>]</p>
<p><b>Storytelling:</b> You quote from the Prophet concerning the vanity of man, and state that those who most fervently deny an action most desire it themselves. The other is chastened by your wise words, and you converse far into the night, learning much from his manners and impressing him with your wisdom. [D2/Courtly Graces/<em>Respected</em>]</p>`,
	},
	302: {
		index: 302,
		text: `<p>When you make clear your respect for the other, he huffs, "I have many friends and suitors, and though few are so attractive and clever as you, you must prove yourself worthy to win my respect and affection."</p>
<p><b>No Skill:</b></p>
<p><em>Roll two dice, adding two each for Determined and Bargaining and Evaluation:</em></p>
<p>2–7: You can think of no way to demonstrate your worth beyond what you have already done, and depart. [D1]</p>
<p>8+: You are persistent in demonstrating your good qualities. You finally bring a friend whose faults are manifest, that the other might compare you. The other finally agrees that you are superior, and spends much time with you to better learn of your good nature. [D2/Choice of <em>Beloved</em> (if appropriate) or <em>Respected</em>]</p>
<p><b>Courtly Graces, Storytelling, Appearance:</b> Your grace, wit, and charm set you clearly above the rest, and you win the affections of the other. [D2/If opposite sex, Seduction and <em>Beloved</em>; otherwise, Wisdom and <em>Respected</em>]</p>
<p><b>Married</b> (mandatory): You are persistent in demonstrating your good qualities. You tell of all you have done, and speak of the love you bear your spouse, and all the other proofs of your virtue. The other finally agrees that you are a person of great merit. [D2/<em>Respected</em>]</p>`,
	},
	303: {
		index: 303,
		text: `<p>The other interrupts you, declaring "I have decided that you shall be married to my eldest child." He gets what he wants, regardless of the desires of others.</p>
<p><b>No Skill:</b> <em>You can agree to the marriage, or refuse:</em></p>
<p><em>If you refuse:</em> The other vows vengeance for your insulting behavior. [D2/<em>Pursued</em>]</p>
<p><em>If you agree:</em> You agree to the demands of the other and prepare to be wed.</p>
<p><em>Roll one die:</em></p>
<p>1–3: You view your impending wedding with trepidation, and with good cause. Your spouse is as overbearing and horrid as her parents. [D2/W+1 (Max: Respectable)/<em>Enslaved</em>/<em>Married</em>]</p>
<p>4+: Your marriage, while not the stuff of legend, is quite satisfying to you. [D2/W+1 (Max: Respectable)/<em>Married</em>]</p>
<p><b>Luck:</b> Despite an overbearing parent, your intended turns out to be a tender and loving soul with a face like the full moon! You praise Allah for your good fortune, for your marriage is pure bliss, and together you are a redoubtable combination. [D2/S1/W+1 (Max: Rich)/Quick Thinking/Bargaining and Evaluation/<em>Married</em>]</p>
<p><b>Married</b> (mandatory): You protest that you are already married, and after much difficulty, you convince the other that it would be sinful to abandon your spouse for no better reason than to marry his child. You go on your way, praising Allah for sparing you this fate. [D1/S1/Piety]</p>`,
	},
	304: {
		index: 304,
		text: `<p>"I have a dreadful secret," the other confesses. "I am in love with another, but I am not of the Faithful, and her father opposes the marriage. Can you help me?"</p>
<p><b>No Skill:</b> You recoil at such a thought, and consider giving the infidel a good thrashing! You make haste to be elsewhere. [D1/S1]</p>
<p><b>Piety:</b> Your carefully considered and pious words soften the heart of the other, turning him towards the True Faith. Once he has accepted the word of Allah, his new father-in-law has no objection to the match. All concerned are most grateful to you. [D2/S2/Piety/<em>Respected</em>]</p>`,
	},
	305: {
		index: 305,
		text: `<p>The other confesses to a powerful loneliness and sits eagerly, drinking up the respect you show. Soon you must take your leave, and the other gives you a small gift. [D1/W+1 (Max: Respectable)]</p>`,
	},
	306: {
		index: 306,
		text: `<p>The other listens restlessly to your words, sighs, and says, "Oh, my days are so long and lonely. Can you do nothing to ease my ennui?"</p>
<p><b>No Skill:</b> Nothing you do raises the spirits of your companion, and eventually you must depart. [D1]</p>
<p><b>Seduction:</b> You know just what the other needs and arrange for him a night of extravagant sexual adventure. He grants you a gift out of gratitude. [D2/W+1 (Max: Respectable)]</p>`,
	},
	307: {
		index: 307,
		text: `<p>"Come," says the other. "I am troubled with sleeplessness. Tell me a tale so that the night might pass more pleasantly."</p>
<p><b>No Skill:</b> Your feeble story does little to amuse the other, and he bids you depart from him. [D1]</p>
<p><b>Storytelling, Acting and Disguise:</b> You tell one story, then another, then another. The evening passes quickly, and the other slips quietly into a deep, peaceful sleep. The other awakens the next morning, refreshed and grateful, and gives you a bag of gold for your help. [D2/S2/W+1 (Max: Rich)]</p>`,
	},
	308: {
		index: 308,
		text: `<p>To your words, the other responds, "I have what wealth I need, and my friends and lovers are numerous, yet when I think of the Dark Minister of the Graveyard all seems fleeting, and the day a tedious parade to a dark and restless night. Can you lighten my heart?"</p>
<p><b>No Skill:</b> The other's despair is contagious, and you leave with a deep sickness of the soul. [S1/<em>Grief Stricken</em>]</p>
<p><b>Piety:</b> "There is no power or comfort but in Allah," you reply. "Do not rail against the condition of Man. Would you rather be a dog or a donkey? Accept what is given and cease your grumbling!" In time the other comes to realize the truth of your words and wisdom of the Prophet. [D2/S1/Choice of Piety or Wisdom]</p>`,
	},
	309: {
		index: 309,
		text: `<p>"I'm overcome with sadness," says the other, with a deep sigh. "My condition is wretched beyond bearing. It is a tale of unrequited love..."</p>
<p><b>No Skill:</b> You are overwhelmed with sympathy, but can do nothing to ease his sorrow. [S1/<em>Grief Stricken</em> (1 turn)]</p>
<p><b>Courtly Graces, Seduction:</b> You teach the other how to win the heart of his beloved. The couple rewards your kindness by naming their firstborn after you. [D3/S1/Seduction/<em>Blessed</em>]</p>`,
	},
	310: {
		index: 310,
		text: `<p>You meet the other at the docks and your heart goes out to him. You profess your great desire to aid the other. When you view him up close, you realize how makeup and dim light has concealed an ugliness of epic proportion. However, it is too late now to honorably withdraw your offer. The other says, "You can best aid me by marriage, which would give me status with my neighbors."</p>
<p><b>No Skill:</b></p>
<p><em>If you are the same sex as the other or are Married:</em> You persuade a friend to undertake the marriage in exchange for a mighty favor. [D1/<em>Under Geas</em>]</p>
<p><em>Otherwise:</em> You realize that you must be the one to do this thing. Your life is miserable for long after. [D1/<em>Married</em>/<em>Accursed</em>]</p>
<p><b>Seamanship:</b> You propose to the other that you teach the other how to fish and be a fish monger. This will give him a trade and therefore respect amongst his neighbors. He agrees and you spend some weeks training him. [D2/Bargaining and Evaluation]</p>
<p><b>Bargaining and Evaluation:</b> You consider approaching the other, but you wisely never bargain for goods without first inspecting them. In conversation with those around, you discover the other's terrible faults and steer clear. You count yourself fortunate for your restraint. [D1]</p>`,
	},
	311: {
		index: 311,
		text: `<p>The other is wide-eyed with fright, and accepts your offer. "Oh please, hide me. I am pursued by men who would do me great harm." Before you can reply, you are both surrounded by ruffians.</p>
<p><b>No Skill:</b> You are pummeled senseless, and the other is taken. [D1/<em>Wounded</em>]</p>
<p><b>Weapon Use:</b> You dispatch one man with dazzling swordsmanship, and the others flee. The other thanks you profusely, and begs you to accompany him on the Hadj to Mecca. [D2/Courtly Graces/Scholarship/<em>On Pilgrimage</em>]</p>`,
	},
	312: {
		index: 312,
		text: `<p>"My father has hidden me away to avoid the evil eye of a cruel sorcerer who has decreed my death," explains the other. "You can best aid me by leaving me alone."</p>
<p><b>No Skill:</b> Heeding his request, you go on your way, though not before tarrying a while to bring him cheer. [D1]</p>
<p><b>Beguiling:</b> You shrewdly exploit the situation by extorting a fee to prevent your revealing the other's whereabouts to the sorcerer. [D1/W+1 (Max: Rich)]</p>
<p><b>Fated</b> (mandatory): You hear a noise, and snatch up a knife to defend the other. You unfortunately slip in a puddle and accidentally slay your companion. Your grief is beyond words but you recognize the hand of fate in your trial. [D2/Lose <em>Fated</em>/<em>Grief Stricken</em>]</p>`,
	},
	313: {
		index: 313,
		text: `<p>"Help!" cries the youth. "I am pursued by guards of my lover's father! If they catch me they shall beat me to within an inch of my life!"</p>
<p><b>No Skill:</b> You cannot help the other, and as he flees, you are deeply saddened. [D1/<em>Grief Stricken</em>]</p>
<p><b>Quick Thinking:</b> You quickly conceive a plan to aid the other. As the runaway dashes off, you shout to the guards, "I have seen the one you chase. For a coin I'll show you where he's gone." After receiving the payment, you lead the guards on a merry chase, then lose them. [D2/S2/W+1 (Max: Poor)/Quick Thinking]</p>`,
	},
	314: {
		index: 314,
		text: `<p>The other vanishes without a word. [S-1]</p>`,
	},
	315: {
		index: 315,
		text: `<p>You have gone overboard.</p>
<p><em>Roll one die, adding one each for Seamanship and Wilderness Lore:</em></p>
<p>1: You drift ashore, but Allah alone knows where. [<em>Lost</em>/Move to any coastal space]</p>
<p>2: [Go to paragraph 1583]</p>
<p>3: [Go to paragraph 1584]</p>
<p>4: [Go to paragraph 1585]</p>
<p>5: [Go to paragraph 1586]</p>
<p>6+: Allah be praised! You find your way to shore and, by clever observation of the stars and signs, you know where you have come! [Move to any coastal space]</p>`,
	},
	316: {
		index: 316,
		text: `<p>The cloud rising from the censer smells of strange herbs. An old man in oddly-fashioned garments greets you and asks your aid in performing a ritual. You cautiously agree.</p>
<p><b>No Skill:</b> Your ignorance causes you to make a terrible mistake, and the ritual fails. In fury, the old man curses you. [D1/<em>Accursed</em>]</p>
<p><b>Scholarship:</b> You follow the old man's complicated instructions correctly, and suddenly the smoke changes color and an 'efreet of great power appears! "What mortal is so presumptuous as to summon me, the Lord of the Marids, right hand of Iblis?" Your power is not enough to prevent the 'efreet from carrying off the old man. However, his notes and censer remain behind, and you study them to learn a path to the fabled Dusky Land of the 'Efreeti. [D2/S2/<b>Eagle Censer</b>/Opportunity to enter the Dusky Land]</p>`,
	},
	317: {
		index: 317,
		text: `<p>"I am willing to aid all those who come to me for my healing abilities," says the sage. "But I cannot do anything until my stock of herbs is replenished." He asks that you go with him to find the herbs he needs.</p>
<p><b>No Skill:</b> You agree, and although the trek is long, it is not too difficult. [D1/You may lose one status of your choice/Have another player move you to any forest space]</p>
<p><b>Wilderness Lore:</b> You know well the healing properties of plants. Anticipating the healer's needs, you possess the very herbs he names. He is delighted. [D2/W+1 (Max: Rich)/Lose any statuses of your choice]</p>`,
	},
	318: {
		index: 318,
		text: `<p>"Come, now," says the other, "I am a busy man. You wish healing? Just wait over there at the end of that line."</p>
<p><b>No Skill:</b></p>
<p><em>Roll two dice, adding one each for Wilderness Lore, and Enduring Hardship:</em></p>
<p>2–7: You wait, but the sage is far too busy to get to you any time soon. [D1]</p>
<p>8+: You convince him to take you just as the sun is sinking in the west. [D1/You may lose one status of your choice]</p>
<p><b>Luck:</b> The line of patients is unusually short, and you are healed quite soon. [D1/Lose any statuses of your choice]</p>`,
	},
	319: {
		index: 319,
		text: `<p>You tell the Sage that you are sure he can cure all your wounds. "Hmm," he responds. "Well, your case is certainly an unusual one. It will require extra payment."</p>
<p><b>No Skill:</b> You grudgingly hand over the money. [D1/W-2 (Min: Respectable)/Lose any statuses of your choice]</p>
<p><b>Weapon Use, Stealth and Stealing:</b> You are infuriated at the other's attempt to gouge your wallet. Putting a dagger to his throat before he can move, you force him to graciously remit your fee completely. [D2/W+1 (Max: Respectable)/Lose any statuses of your choice]</p>`,
	},
	320: {
		index: 320,
		text: `<p>"Hmmm." The other pauses to judge you. "I'm sorry," he says, "but what has happened has happened. You are beyond help."</p>
<p><b>No Skill:</b> You accede to his judgment and go on your way. [D1]</p>
<p><b>Determined</b> (mandatory), <b>Luck:</b> The other is dubious about his abilities to help you, but you persist in begging him and at last he tries—and succeeds, much to his own surprise! [D2/You may lose one status of your choice]</p>`,
	},
	321: {
		index: 321,
		text: `<p>To achieve your ends, you find yourself spending a great deal of time with the other. You become interested in his version of the arcane arts, and he finds you an apt pupil for his style.</p>
<p><b>No Skill:</b> "If you like," he says, "I shall make you my apprentice and teach you my secrets." You eagerly accept, and learn many things from him. [D1/Scholarship/You may lose one status of your choice]</p>
<p><b>Scholarship:</b> Recognizing in you a colleague of great talents that complement his own, the other proposes a partnership for your mutual benefit. [D2/S1/W+1 (Max: Respectable)/You may lose one status of your choice]</p>`,
	},
	322: {
		index: 322,
		text: `<p>You bend one knee before the other, and speak of his greatness. "Yes, indeed," he cries, his eyes shining wildly, "you should humble yourself before one who bears the word of Allah! Take heed, for I pronounce your doom and the doom of all who listen..."</p>
<p><b>No Skill:</b> He goes on for quite a while, and you feel uneasy, for in his words is the ring of truth. [D1/<em>Fated</em>]</p>
<p><b>Weapon Use</b> (mandatory): You are so offended by his surly tone that you unthinkingly draw your sword; within seconds, you have mortally wounded him. Your victim has just enough breath to speak your doom, and in your sorrow, you vow to make a holy pilgrimage to cleanse yourself. [D2/S2/<em>Grief Stricken</em>/<em>On Pilgrimage</em>]</p>`,
	},
	323: {
		index: 323,
		text: `<p>At your approach, the other cries out, "I am fated to be the instrument of your doom, foul one!" He attacks unerringly, as if Allah Himself guided his blows, while every thrust of yours goes astray.</p>
<p><b>No Skill:</b> You are grievously wounded, and his final blow is met on your sword—and both weapons shatter. "Ah, then," he mutters, "You shall not die by my hand. But rest assured your fate is known." [D2/S1/Lose Weapon Use/<em>Wounded</em>/<em>Fated</em>]</p>
<p><b>Luck:</b> You swing wildly, and miraculously his sword shatters at the impact. "Ahem," he says. "Perhaps I have... ah... misread the signs. How can I atone for my error?" He presses coins into your hands, and bows and scrapes and invokes the blessings of the Merciful Lord, and you consider yourself lucky to have turned his wrath into generosity. [D2/S1/W+1 (Max: Respectable)/<em>Blessed</em>]</p>`,
	},
	324: {
		index: 324,
		text: `<p>The bad tidings the other bears has built within you a boiling rage and you stride forward.</p>
<p><b>No Skill:</b> Your first blow lands undefended; he falls instantly, mortally wounded. "Do not think," he gasps, "that by slaying me you have avoided your fate. You must bear the consequences of your crime." Your rage passes, and falling into despair you rend your garments. [D-1/S1/Lose Weapon Use/<em>Grief Stricken</em>/<em>Fated</em>]</p>
<p><b>Storytelling:</b> At the last moment you restrain yourself, and wisely accept the pronouncement of your fate instead of slaying the one who would bring you knowledge of it. The fate he describes sounds unpleasant, but you steel yourself to face it, for what Allah wills is for the best. [D2/S1/Enduring Hardship/<em>Fated</em>]</p>`,
	},
	325: {
		index: 325,
		text: `<p>Before you can even move, the other attacks you like a man possessed.</p>
<p><b>No Skill:</b> You flee, but he pursues. As you pull away, he shouts, "I shall follow ye to the ends of the earth!" [D1/<em>Pursued</em>]</p>
<p><b>Piety:</b> Only by the will of Allah can you be saved! You fall to your knees and cry out. Your attacker seems dazed, and clutches at his eyes. "I am blinded!" he cries. Thus is revealed again the power of the True Faith, and the good fortune with which the Living God blesses His followers. [D2/S1/Piety/<em>Blessed</em>]</p>`,
	},
	326: {
		index: 326,
		text: `<p>A crowd has gathered to listen to the other, who has promised to explain the cause of the hard economic times. His doubletalk has gone on for hours, and the crowd grows restless. You are made uneasy by his words, and head in another direction. As you make to leave, he points at you and cries, "Look there! There is the one who is the cause of all your troubles! Shall this one go unpunished?" The air is filled with angry snarls.</p>
<p><b>No Skill:</b> The crowd moves toward you, and your protestations of innocence go unheard. Then they are upon you, and treat you savagely. [D1/<em>Crippled</em>]</p>
<p><b>Beguiling, Quick Thinking:</b> "Wait," you cry in a booming voice. "Will you deny me the right to defend myself?" The crowd pauses and you leap to take advantage. Speaking with inspiration and surpassing yourself with fine oratory, you turn and accuse your accuser. The mob visits its wrath on him instead of you. [D1/S2/Choice of Courtly Graces or Acting and Disguise]</p>`,
	},
	327: {
		index: 327,
		text: `<p>Refusing to hear your fate from the lips of the prophet, you turn and flee.</p>
<p><b>No Skill:</b> It avails you nothing of course: your fate is no less your fate. [D1/<em>Fated</em>]</p>
<p><b>Luck, Appearance</b> (mandatory): You successfully avoid hearing the pronouncement—in which you were mistakenly revealed as the only child of the recently deceased Sultan. Thus does every person suffer who seeks to avoid his fate. [D2]</p>`,
	},
	328: {
		index: 328,
		text: `<p>On your words, the other says, "If you would truly honor me, you would grant me your aid."</p>
<p><b>No Skill:</b> The task the other asks of you is beyond your abilities; you cannot help, but the story of his doomed courtship is a powerful and memorable lesson. [S1]</p>
<p><b>Courtly Graces:</b> The other is soon to be married to another of high station, but is lacking in knowledge of protocol. Your courtly skills help the other. In gratitude, the married couple bestow a wondrous gift upon you. [D1/S1/<b>Treasure</b>]</p>
<p><b>Quick Thinking:</b> With great cleverness, you weave a complex ruse to gain the other the thing he needs. Impressed and grateful, the other shares with you an arcane secret he learned many years ago. [D1/S1/You may lose one status of your choice]</p>`,
	},
	329: {
		index: 329,
		text: `<p>The other says, "Your honeyed words have touched my heart, but I have little that I may offer you."</p>
<p><b>No Skill:</b> "Nonetheless, I shall share a bit of knowledge with you. May it be of help." [D1/S1/Choice of skill (1 use)]</p>
<p><b>Appearance:</b> "I perish in ecstasy of love for you, for you are beautiful beyond words. Be parted from me nevermore." The other becomes your most devoted companion. [D1/<em>Respected</em>/<em>Beloved</em> (if not <em>Married</em>)]</p>`,
	},
	330: {
		index: 330,
		text: `<p>"Please rise," says the other. "Your excessive gesturing is embarrassing and improper."</p>
<p><b>No Skill:</b> Your humble entreaties are ignored, and you go on your way, embarrassed. [<em>Envious</em>]</p>
<p><b>Storytelling:</b> "I do not wish to send away one of your obvious intelligence, but I have no time for you. Could you come back tomorrow?" [S1/You may spend D1 and return to the Reaction Matrix, choosing a new reaction for the encounter]</p>
<p><b>Appearance:</b> "...But you are quite intriguing," says the other, "I will forgive your impudence this time." [Courtly Graces]</p>`,
	},
	331: {
		index: 331,
		text: `<p>To your entreaty, the other responds, "The Prophet has said the stranger must be succored in times of need."</p>
<p><b>No Skill:</b> "Therefore I shall give you knowledge which may be of aid to you in the future." [D1]</p>
<p><b>Piety:</b> You complete the quote; the listener is delighted with your knowledge and wisdom and seeks to aid you. [D2/Choice of W+1 (Max: Respectable) or <em>Blessed</em> or Choice of skill/You may lose one status of your choice]</p>`,
	},
	332: {
		index: 332,
		text: `<p>The other says, "This is well-done. I have arcane skills which I can teach you, but, in exchange, I require a proper gift."</p>
<p><b>No Skill:</b> [D1/Lose one Wealth Level (Min: Beggar) or <b>Treasure</b> to gain Magic]</p>
<p><b>Bargaining and Evaluation:</b> Your shrewd bargaining completely befuddles the other, and you end up richer as well as wiser. [D1/S1/W+1 (Max: Respectable)/You may lose one status of your choice]</p>`,
	},
	333: {
		index: 333,
		text: `<p>Your kind words please the other, and he says, "I wish to grant your wishes, but for my own reasons I must undertake a holy pilgrimage on foot, and I require a companion. Will you accompany me?"</p>
<p><em>You may decline or accept:</em></p>
<p><em>If you decline:</em> The other walks slowly away, leaving you deeply dissatisfied with your lot. [<em>Envious</em>]</p>
<p><em>If you accept:</em> The two of you head on to Mecca. [D1/<em>On Pilgrimage</em>]</p>`,
	},
	334: {
		index: 334,
		text: `<p>The other bids you rise, and says, "There is no need for you to give me anything, for I am happy to assist you. I have much knowledge of ancient legends."</p>
<p><b>No Skill:</b> The other gives you a mysterious magical item. [D1/<b>Treasure</b>]</p>
<p><b>Scholarship, Wilderness Lore:</b> The other, impressed with your knowledge of this world and others, tells you tales and gives you a map to a far-off place known only in legends. [D2/Opportunity to enter the Jeweled Fortress]</p>`,
	},
	335: {
		index: 335,
		text: `<p>In response to your kind words, the other mumbles, "Yes, yes, I see... Hmmm. Well. I really don't know what to say. This is very puzzling."</p>
<p><b>No Skill:</b> The other seems distracted, or inattentive, or addle-pated. You leave to seek someone more appropriate to your needs. [D1]</p>
<p><b>Carnelian Idol</b> (mandatory), <b>Beguiling, Seduction:</b> Seized of an evil impulse, you try to trick the other into aiding you, but he goes from absent-mindedness to white rage quite suddenly. Soon you are examining a dungeon. [S1/<em>Imprisoned</em>]</p>`,
	},
	336: {
		index: 336,
		text: `<p>You approach the other to ask a favor, but somehow either he or you knocks a priceless vase to the floor. "Idiot!" he thunders, blaming you for the accident. Fuming, he summons a lower djinn. "Take this fool anywhere; just get him out of my sight!"</p>
<p><b>No Skill:</b> The djinn carries you to a faraway land. [D1/S1/Have another player move you to any space except a Place of Power]</p>
<p><b>Stealth and Stealing:</b> The djinn carries you far away, but you smile, for in the confusion you stealthily pilfered an item of magical appearance. [D1/S1/<b>Treasure</b>/Have another player move you to any space except a Place of Power]</p>`,
	},
	337: {
		index: 337,
		text: `<p>The other you have addressed laughs and he agrees to aid you. "Here is a little charm I picked up somewhere..." You are surprised as he mutters a powerful word. There is a loud *poof* and you feel... different.</p>
<p><b>No Skill:</b> "Sorry," he murmurs. "I must study that enchantment further." [D1/S2/<em>Sex-Changed</em>]</p>
<p><b>Magic:</b> You are changed to the opposite sex! Quickly, you undo the charm with a powerful spell of your own, and the other is abashed, saying, "That was not the enchantment I intended." You are not so sure. Fearing your power, the other is effusive in his apologies, and presses gifts into your hands to dispel your wrath. [D2/S1/W+1 (Max: Respectable)/<b>Treasure</b>]</p>`,
	},
	338: {
		index: 338,
		text: `<p>You humbly address the other. He responds, "Hmmm... yes... grovel a bit, yes... Indeed! You look quite good on all fours." The other makes a mystic pass or two.</p>
<p><b>No Skill:</b> There is a loud *poof* and you feel... different. [S2/<em>Beast Form</em>]</p>
<p><b>Acting and Disguise:</b> You raise yourself up and cry, "Do you not recognize me? I am the great enchanter Ali-ibn-Emael! Do not trifle with me, worm!" The other is cowed by your pose and gives you a gift. You are quite pleased with your trickery. [D1/S2/Choice of W+1 (Max: Rich) or <b>Treasure</b>/Beguiling]</p>`,
	},
	339: {
		index: 339,
		text: `<p>The other ignores you as an elephant would a worm. [<em>Scorned</em>]</p>`,
	},
	340: {
		index: 340,
		text: `<p>At your first word, the other cries, "I'll brook no interference from anyone! Bow down and worship me or I shall destroy you!"</p>
<p><b>No Skill:</b> <em>You can worship him or refuse:</em></p>
<p><em>If you worship him:</em> When you bow down and worship him, he favors you with gifts, but you know that Allah does not approve. [D-1/W+1 (Max: Rich)/Lose Piety/<b>Treasure</b>]</p>
<p><em>If you refuse:</em> You refuse. He strips you of all possessions and uses his influence to make you an outcast. [Piety/<em>Outlaw</em>/W=Beggar, but gain D1 for each level you lost]</p>
<p><b>Beguiling:</b> You promise to worship him by going forth and proclaiming his power and majesty before all people. You rush out into the streets and escape into the nearest dark alley. [D1/S2/Quick Thinking]</p>`,
	},
	341: {
		index: 341,
		text: `<p>You have heard that the other is a fearsome figure in the realms of dark magic. You approach cautiously.</p>
<p><b>No Skill:</b> "You dare even enter my presence?" he cries. Though his anger is terrible, you are permitted to leave alive. [<em>Scorned</em>]</p>
<p><b>Appearance:</b> Your enchanting form pleases him beyond all reason. "Your face is like a shining light. You remind me of my long-dead cousin." You are awarded high honor and a gift by the other. [D2/W+1 (Max: Princely)/<em>Blessed</em>]</p>`,
	},
	342: {
		index: 342,
		text: `<p>The other sees your actions as an attempt to profit at his expense. Silencing you with a gesture, he cries, "Bear this one away from me immediately!" Skeletal guards with sharp scimitars appear from thin air and attack.</p>
<p><b>No Skill:</b> You valiantly fight back, but are overwhelmed by the warriors. [S1/<em>Wounded</em>]</p>
<p><b>Weapon Use:</b> The other is so impressed with your swordplay that he dispels the unholy guards with a gesture. "Hold," he cries. "I shall forgive you your indiscretions and grant your wish if you will be my servant for a time." [D1/S1/Choice of skill at Master level (1 use)/<em>Enslaved</em>]</p>`,
	},
	343: {
		index: 343,
		text: `<p>You attempt to profit at the other's expense, and he grows unreasonably angry. "Nothing can save you, you wretch. My servant shall bear you into the desert and slay you there. He shall bring me a jar of your blood as proof of the deed."</p>
<p><b>No Skill:</b> The servant bears you into the desert and gashes your throat, filling the jar. He leaves you for dead, but you are found by a passing dervish and saved. [D2/S1/Enduring Hardship/<em>Crippled</em>]</p>
<p><b>Appearance:</b> The servant is taken by your beauty, for you remind him of his long-dead favorite cousin. He cannot harm you, but instead slays an antelope and brings its blood to his master. [D3/S1]</p>
<p><b>Pursued</b> (mandatory): The servant executes his task reluctantly, cutting deeply across your throat, and filling the jar with your blood. When he departs, you drift in and out of consciousness until the one who has for so long pursued you finds you with your life nearly gone.</p>
<p><em>Roll two dice, adding one each for Appearance and Respected:</em></p>
<p>2–7: Your enemy complains bitterly to thin air of this attempt by fate to thwart revenge. Then, shrugging philosophically, your enemy remarks, "Strange indeed are the ways of Allah. Goodbye, my wretched foe." Your end is mercifully brief, though painful. [Death]</p>
<p>8+: Your foe prepares to end your misery, then reconsiders. "To slay you now would be a mercy, and you are not deserving of such. I cannot have my revenge until you are well." To your surprise, your enemy stays with you until you have recovered somewhat from your wounds, cursing you the while. When he feels you are able to travel, he takes you to the nearest civilized area, leaving you with the warning that you will see your foe again when you are once more a fit recipient of revenge. After pronouncing this doom over you, your enemy rides off. [D2/S2/Enduring Hardship/<em>Accursed</em>/Have another player move you up to four spaces]</p>`,
	},
	344: {
		index: 344,
		text: `<p>Your attempt to sweet-talk a favor out of the other is a pronounced failure. You then try to extricate yourself with fine words.</p>
<p><b>No Skill:</b> "You seek to appease me with fawning?" he cries. "Very well. I will forgive you and even reward you with a suitable job—cleaning out privy-pots!" [D1/<em>Enslaved</em>]</p>
<p><b>Storytelling:</b> As part of your oratory you tell the tale of the Lion and the Mouse, demonstrating that the strong should not abuse the weak. Your listener takes the meaning and allows you to leave unhindered. [D2/S2/Quick Thinking]</p>`,
	},
	345: {
		index: 345,
		text: `<p>"I'll grant your desire," the other says in response to your well-considered words.</p>
<p><b>No Skill:</b> "In return for this gift, there's a task I would have you complete. To ensure that you fulfill your part of the bargain, perhaps an enchantment of the Far East might serve." [D2/W+1 (Max: Rich)/<em>Under Geas</em>]</p>
<p><b>Appearance:</b> "Your perfect form reminds me of the Eastern Willow," he proclaims. "It makes me yearn for the pleasures of the Orient. It is my honor to assist you." [D2/W+1 (Max: Rich)/<em>Respected</em>/You may lose one status of your choice]</p>`,
	},
	346: {
		index: 346,
		text: `<p>The other is not pleased by your words. "If you had not been a stranger, and therefore subject to clemency, I should have had your head struck from your body. I expect a gift in exchange for my leniency."</p>
<p><b>No Skill:</b> You are given a choice of how to appease the other. You must think quickly to give him the best gift. [Choice of W-1 (Min: Poor) or Lose one <b>Treasure</b> or <em>Imprisoned</em>]</p>
<p><b>Beguiling:</b> Your listener hangs on your every word and sends you on with his protection. [D2/S1/<em>Blessed</em>]</p>
<p><b>Seamanship:</b> You notice that the other has scale models of sailing ships as decorations. You tell him tales of your sailing adventures and he hangs on every word. He sends you on with the blessings of Allah. [S1/Courtly Graces]</p>`,
	},
	347: {
		index: 347,
		text: `<p>The other, ignoring your words completely, seems very interested in your accouterments. "My, what a lovely bauble you have."</p>
<p><b>No Skill:</b> The other waits for you to give him the item he so admires. [D1/Choice of W-1 (Min: Beggar) or Lose one <b>Treasure</b> or <em>Pursued</em>]</p>
<p><b>Quick Thinking, Bargaining and Evaluation:</b> Realizing the true nature of your companion, you quickly concoct a story about the accursed nature of the bauble in question, and the tragedy of your life since you have been forced to carry it. The other has pity on you for your misfortune. [D1/S1/Storytelling]</p>`,
	},
	348: {
		index: 348,
		text: `<p>The other seems bored by your words and deeds. "Many come to me speaking fine words. What do you truly want?"</p>
<p><b>No Skill:</b> Regrettably, his heart is closed to you. [<em>Scorned</em>]</p>
<p><b>Storytelling:</b> Wisely realizing the chilly disposition of the other, you comment, "I merely wished to do you a kindness, but I see I am unwelcome." You leave without a backward glance. The other is amazed, calls you back, and gives you a wonderful gift. [D2/<b>Treasure</b>]</p>`,
	},
	349: {
		index: 349,
		text: `<p>The other regards you speculatively.</p>
<p><b>No Skill:</b> With contempt dripping from every syllable, he asks, "How could such a one as <em>you</em> aid <em>me</em>?" Those around hear his words and revile you. [D1/<em>Scorned</em>]</p>
<p><b>Appearance:</b> The other is struck by your great beauty and accepts your help. You deliver him from an unfortunate situation. [D2/S1/<em>Beloved</em> (if appropriate)]</p>
<p><b>Brass Trumpet</b> (mandatory): The Brass Trumpet sounds a note of warning. You realize that the other bears you ill will, and you suddenly remember a pressing engagement elsewhere. [D1/S1]</p>`,
	},
	350: {
		index: 350,
		text: `<p>The other says, "If you could aid me, I would be most grateful. I wish to visit my true love, the heir of a powerful king of my people. The king will not allow us to meet."</p>
<p><b>No Skill:</b> You attempt to speak to the king but your efforts are in vain. [D1]</p>
<p><b>Acting and Disguise:</b> You make your host up as a feeble serving-woman, and the other gains access to the object of his romantic desire. The couple is pleased, and you are given a splendid gift. [D2/S1/Choice of W+1 (Max: Princely) or <b>Treasure</b>]</p>`,
	},
	351: {
		index: 351,
		text: `<p>With sorrow in his voice, the other says, "I suffer excessively for love of one who is the child of the Caliph. If you would truly be my friend, you will aid me in arranging a meeting."</p>
<p><b>No Skill:</b> You go to the palace of the Caliph, but he catches you trying to get in to see his child, and has you thrown in the dungeon. [D1/<em>Imprisoned</em>]</p>
<p><b>Courtly Graces, Seduction:</b> With skillful words, you get on the good side of certain nabobs and emirs of the Caliph, and are able through a cunning pretext to arrange the tryst. Your efforts are well-rewarded. [D1/S2/W+1 (Max: Rich)/Beguiling]</p>`,
	},
	352: {
		index: 352,
		text: `<p>You encounter the other at the docks. You try to converse with him.</p>
<p><b>No Skill:</b> At your first words the other starts and flees from you. [S1]</p>
<p><b>Seamanship:</b> You speak about the sea and sailing to the other, putting him at ease. You discover that he seeks a companion for a journey to the Holy City of Mecca. You accompany him and along the way you learn a few enchantments. [D1/S1/<em>On Pilgrimage</em>/You may lose one status of your choice]</p>`,
	},
	353: {
		index: 353,
		text: `<p>"Well," the other says excitedly, "I can indeed use your aid. I have no need for money, but, for the enchantment I am attempting, I need a quantity of blood..."</p>
<p><b>No Skill:</b> Without warning he leaps forward, gashes your arm, takes some blood, and throws you out a window. [S1/<em>Wounded</em>]</p>
<p><b>Weapon Use:</b> You defend yourself as he attacks you and tries to take your blood. He desists only after losing a large portion of his own. After he lies dead at your feet, you find some interesting items. [D1/S1/<b>Treasure</b>]</p>
<p><b>Quick Thinking:</b> You agree to give him what he seeks, but you casually mention that you have a serious and terrible sickness of the blood that may make yours less useful. The other leaves in haste, and you compliment yourself for your cleverness. [D1/S2/Beguiling]</p>`,
	},
	354: {
		index: 354,
		text: `<p>The other says, "Indeed, I desperately need your aid. You must hide me from a powerful enemy to whom I seem to have given offense and who now seeks to slay me. If you are successful you will be rewarded."</p>
<p><b>No Skill:</b> The villain—an enchanter of evil aspect—comes to town as predicted. Although you do your best, your companion is slain, and you nearly perish in their battle. [S1/<em>Crippled</em>]</p>
<p><b>Stealth and Stealing:</b> You know many good hiding places and find sanctuary for your companion. Your underworld friends keep you informed until the foul sorcerer has left the area. [D1/S1/W+1 (Max: Rich)]</p>
<p><b>Brass Trumpet</b> (mandatory): The Brass Trumpet sounds a note of warning as the other's enemy comes near, and you manage to hide the other well. When the enemy has departed, the other makes to you a gift. [D1/S1/W+1 (Max: Rich)]</p>`,
	},
	355: {
		index: 355,
		text: `<p>"I can always use the aid of others," cackles your host. "There is one that I wish to rend limb from limb for his past crimes against me." You are surprised when he names a virtuous Vizier of wide renown—a man above reproach.</p>
<p><b>No Skill:</b></p>
<p><em>You may assist the other, or refuse:</em></p>
<p><em>If you assist him:</em> The Vizier is easily delivered to his death, though he utters a terrible curse on all who acted against him. You are rewarded by the other's accomplices for your part in the foul undertaking. [D-1/S1/W+1 (Max: Princely)/Lose Piety/<em>Accursed</em>]</p>
<p><em>If you refuse:</em> The other is furious when you refuse, robs you of much of your wealth, and vows your destruction. [D1/S1/W-3 (Min: Penniless)/Piety/<em>Pursued</em>]</p>
<p><b>Acting and Disguise, Brass Trumpet:</b> You realize that the other is nothing but a wicked schemer. You pretend to assist the other but secretly warn the Vizier of his danger. You manage to trap him who sought your aid. The Vizier is most grateful and commends you to the Sultan. [D3/S2/W+1 (Max: Rich)/Beguiling/<em>Robe of Honor</em>]</p>`,
	},
	356: {
		index: 356,
		text: `<p>Eagerly, the other accepts your offer of assistance, saying, "Allah has sent you to me at a fortuitous moment. Do you see the one approaching? Go to him and tell him that his love waits for him in yonder grove. There we have secreted a donkey, and he shall look the fool."</p>
<p><em>Roll two dice, adding one each for Enduring Hardship and Acting and Disguise:</em></p>
<p>2–7: You burst out laughing before you can finish delivering your message, and the intended victim gives you a public thrashing before going his way. [S1/<em>Scorned</em>]</p>
<p>8+: You play your part well and summon the victim to his amatory tryst. The laughter is heard for miles! [S2/Acting and Disguise]</p>`,
	},
	357: {
		index: 357,
		text: `<p>The other gestures you to silence and swiftly brings you to an abandoned site before a large cave. "Listen carefully," he says. "While I stand here and provide the protective spells, you must enter this cave. Turn left at the first junction, then two rights, then up a ladder..." His instructions continue for ten minutes.</p>
<p><b>No Skill:</b></p>
<p><em>You can choose to aid him, or depart:</em></p>
<p><em>If you depart:</em> You wisely refuse to cooperate with such insanity, and head on your way. [Wisdom]</p>
<p><em>If you assist him, roll two dice, adding one each for Wisdom and Scholarship:</em></p>
<p>2–7: You bumble the procedure, and a terrible curse strikes you! [D1/S1/<em>Sex-Changed</em>]</p>
<p>8+: You successfully retrieve the requested article from the caves, and your companion rewards you well. [D1/S2/W+1 (Max: Rich)]</p>
<p><b>Quick Thinking:</b> You have no trouble following his directions. You retrieve a treasure and manage to find a different exit, keeping the item you found. [D2/S2/<em>Pursued</em>/<b>Treasure</b>]</p>`,
	},
	358: {
		index: 358,
		text: `<p>The other says, "There is an item which I must recover from a land called Arlandia. However, I can find no record of this land. If you help me, I will be extremely generous in my reward."</p>
<p><b>No Skill:</b> You have never heard of Arlandia and cannot help. [S1]</p>
<p><b>Scholarship:</b> From your knowledge of history and ancient tongues, you know that Arlandia is the ancient name of this very place! You easily retrieve the item and earn the reward and the praise of the other. [D2/S1/W+1 (Max: Rich)/<em>Respected</em>]</p>`,
	},
	359: {
		index: 359,
		text: `<p>"Ah, you may assist me in a difficult enchantment I am about to undertake!" The other hands you a scroll. "I have need to call forth a most powerful djinn. Read this aloud the moment he appears."</p>
<p><b>No Skill:</b> You admit to the other that you know nothing of magic and cannot even read the scroll. You are sent away. [S1]</p>
<p><b>Magic:</b> The djinn appears, and the feeble scroll spell is not enough to contain him. You rely on your own power to save both yourself and the other. You defeat the djinn and order transportation to magical lands. [D3/S2/Move to the Dusky Land and have an immediate encounter]</p>`,
	},
	360: {
		index: 360,
		text: `<p>The other is depressed and weary, but friendly. "You may accompany me on my doomed trek, if you wish."</p>
<p><b>No Skill:</b> You go with him as far as you dare. You must eventually bid him farewell, to return to your own quest. Before you leave, he tells you a fascinating tale about your future. [D2/S1/<em>Fated</em>]</p>
<p><b>Piety:</b> You reply, "There is no strength or power but in Allah. If you are doomed, it is by His wise decree. And if there is no decree, you are not doomed." This cheers your companion, and he accompanies you, praising you to all you meet. [D3/S2/Enduring Hardship/<em>Respected</em>]</p>`,
	},
	361: {
		index: 361,
		text: `<p>"You cannot help me," hisses the other. "Go away before you too are taken!"</p>
<p><b>No Skill:</b> You stay to comfort him. Before you can speak, strange dark creatures are upon you. You lose your senses and awake with awful visions burned into your mind. [D1/<em>Insane</em>]</p>
<p><b>Weapon Use:</b> Dark creatures surround you almost as he speaks. You manage by skillful swordplay to win your way free, but your companion is left behind. [D2/<em>Grief Stricken</em>]</p>`,
	},
	362: {
		index: 362,
		text: `<p>The other cuts short your words. "My own affairs call all my attention now," the other replies brusquely. "I must journey to a far-off land to save my own soul."</p>
<p><b>No Skill:</b> There is little you can do except give him your blessing. [S1]</p>
<p><b>Piety:</b> When you offer to accompany him, he weeps with joy. The journey is arduous, but Allah has willed that you survive. [D2/S1/Opportunity to enter any Place of Power]</p>`,
	},
	363: {
		index: 363,
		text: `<p>You see your intended victim enter a house, and you wait until full darkness to enter. As you step forward a youthful voice whispers, "Is that you, Mizah, my love?" It is apparently the child of the owner of the house, preparing to elope with the other!</p>
<p><b>No Skill:</b> With all this activity it would be far too dangerous to try anything here tonight! Praise Allah you were warned. What a stroke of luck! [D1/Luck]</p>
<p><b>Acting and Disguise:</b> You disguise your voice and coax the other into a rendezvous at a distant location. You then climb up the ladder the other has left and make quite a haul. [S1/W+2 (Max: Rich)/Quick Thinking]</p>`,
	},
	364: {
		index: 364,
		text: `<p>You enter the home of the other while he is occupied with a diversion you planned. While rooting through the possessions of your victim, you discover evidence that the other is secretly a guard for the Sultan out to trap thieves such as yourself.</p>
<p><b>No Skill:</b> You flee immediately but are recognized by hidden guards and are declared an outlaw. You consider yourself fortunate to have escaped the guards alive. [D1/<em>Outlaw</em>]</p>
<p><b>Stealth and Stealing:</b> Your escape route and diversions are so well planned that you can stay a few extra minutes and guarantee a little profit. [D2/S1/W+1 (Max: Respectable)]</p>`,
	},
	365: {
		index: 365,
		text: `<p>You enter the dwelling of the other while he is away, but he returns as you finish picking out the best items. You flee and hear him screaming behind you.</p>
<p><b>No Skill:</b> "I have recognized you," he cries, "and shall hunt you forever!" [D1/<em>Outlaw</em>/<em>Pursued</em>/<b>Treasure</b>]</p>
<p><b>Luck:</b> The victim of your theft is so enraged that he suffers a fit of apoplexy and dies on the spot before he can tell anyone who you are. You take a wondrous item and flee. [D2/S1/<b>Treasure</b>]</p>`,
	},
	366: {
		index: 366,
		text: `<p>You fake a fire and the other flees from his abode. You enter, chuckling, when a door suddenly shuts behind you. A voice cries, "Now I have you. Crawl, you thieving worm!"</p>
<p><b>No Skill:</b> You are defenseless and throw yourself on his mercy. He does not slay you, but makes you his servant. [D-1/<em>Enslaved</em>]</p>
<p><b>Magic:</b> You obscure the vision of your victim with a magical mist and are able to reach the door untouched—picking up on the way a little something for your trouble. How lucky you are that you were standing close to the door when he returned! [D2/<b>Treasure</b>]</p>`,
	},
	367: {
		index: 367,
		text: `<p>You trick the other into showing you his treasure room by pretending to be a tax-collector for the Sultan. As you move among his possessions, you see many valuable ones.</p>
<p><b>No Skill:</b> You take one. Instantly, the room grows dark, and your skin feels like it were being flayed and rubbed with salt. Your sight is gone, and there is no end to your pain. [D2/Choice of <em>Insane</em> or <em>Crippled</em>]</p>
<p><b>Magic:</b> You recognize that a magical curse guards the other's possessions. You are able to turn aside the curse and pilfer a valuable item. [D2/S1/<b>Treasure</b>]</p>`,
	},
	368: {
		index: 368,
		text: `<p>The other, lured away by a false seducer (hired by you), comes back just as you enter his treasure chamber.</p>
<p><b>No Skill:</b> You try to slip out, but he catches you. "Must you add to my misery? Your baseness is best rewarded with suffering like mine!" There is a loud *poof* and you feel... strange. [D1/<em>Sex-Changed</em>]</p>
<p><b>Stealth and Stealing:</b> Your alert ears hear his approaching footsteps, and you have ample time to flee with bags full of loot. [D1/S1/W+1 (Max: Rich)]</p>`,
	},
	369: {
		index: 369,
		text: `<p>Your theft goes unpunished. However, you see the victim in the street and he seems to have gained much vitality and good humor. As for yourself, unfortunate incidents begin to plague you.</p>
<p><b>No Skill:</b> You have no explanation for your ailment. [D1/W+1 (Max: Rich)/<em>Accursed</em>]</p>
<p><b>Wilderness Lore:</b> You perceive an evil aura about one of the treasures you stole. Suspecting a curse, you sell it to another for a substantial sum. [D2/S1/W+1 (Max: Rich)/Wisdom]</p>`,
	},
	370: {
		index: 370,
		text: `<p>You accost the other, but he simply says, "Take what you wish. I have no use for it."</p>
<p><b>No Skill:</b> Indeed, in examining the possessions, you can see why the other has no use for them. [S1/W+1 (Max: Poor)]</p>
<p><b>Storytelling, Enduring Hardship:</b> You are struck by the despondent air of the other, and choose not to plunder his meager goods. Instead you tell him a story which cheers his heart. In gratitude he teaches you a few enchantments. [D1]</p>`,
	},
	371: {
		index: 371,
		text: `<p>Your victim is caught in his bed, helpless. Although you feel pangs of guilt, you rob him anyway. [D-1/W+1 (Max: Respectable)/<em>Grief Stricken</em> (1 turn)]</p>`,
	},
	372: {
		index: 372,
		text: `<p>You successfully dupe your victim and are enriched. However, hours later, you are beset by strange magical attacks.</p>
<p><b>No Skill:</b> In desperation you return the goods and beg the other to dispel the curse—to no avail, for the curse lingers with you. [D1/S1/<em>Accursed</em>]</p>
<p><b>Appearance:</b> In desperation you return the goods and beg the other to dispel the curse. Taken by your handsome form, the other lifts the curse, letting you go with an admonition to do no more evil. [D1/S1]</p>`,
	},
	373: {
		index: 373,
		text: `<p>You are caught in the act. Mercifully, the other spares your life.</p>
<p><b>No Skill:</b> However, he has you banished from here for your crimes. [D1/<em>Outlaw</em>]</p>
<p><b>Appearance:</b> The other finds your appearance pleasing. You in turn are struck by the grace and wisdom of your benefactor, and wish never to be parted from him.</p>
<p><em>If the other is of opposite sex and you are not Married:</em> You are both smitten with love for each other, and retire to a private place to better become acquainted with each other's charms. [D2/S1/<em>Beloved</em>]</p>
<p><em>Otherwise:</em> You become the other's faithful companion, and join him on his holy pilgrimage. [D2/S1/Wisdom/<em>On Pilgrimage</em>]</p>
<p><b>Wilderness Lore:</b> You recognize the gathering enchantment, and back hurriedly away, muttering a counter-charm. You leave in wisdom and in haste. [D2/Wisdom]</p>`,
	},
	374: {
		index: 374,
		text: `<p>Your victim seems to be far away, and you glimpse treasure and strange artifacts among his possessions. However, the other comes upon you in the act.</p>
<p><b>No Skill:</b> Your feeble explanation of your presence is transparent. You are brought before the Sultan, whose justice is harsh but fair—a whipping and imprisonment. You burn at the thought of the treasure you might have had. [D1/<em>Wounded</em>/<em>Imprisoned</em>/<em>Envious</em>]</p>
<p><b>Quick Thinking:</b> You improvise a marvelous story describing how you found a brass jar in a cave, just like the one in the other's treasure trove. When you picked it up and rubbed it, a great 'efreet appeared and cast a powerful spell, and you found yourself here in the other's chambers. Accustomed to such marvels, the other believes you and lets you go. [D2/S2/Storytelling]</p>`,
	},
	375: {
		index: 375,
		text: `<p>Success beyond your wildest dreams! As you search in the other's yard, you happen to find a hidden trapdoor which leads to a vast underground chamber filled with wealth!</p>
<p><b>No Skill:</b> Praise Allah for His bounty! [D1/S2/W+3 (Max: Princely)]</p>
<p><b>Piety:</b> You note that the chamber has long been unused, and you suspect that the owner of the house is unaware of its existence. You recall the words of the Prophet concerning greed, and know that wealth will avail you not when comes the Terminator of Earthly Delights. You go to the owner of the house and explain what you have found. The other is amazed at your honesty, and shares the wealth with you. [D3/S2/W+3 (Max: Princely)/Wisdom/<em>Blessed</em>]</p>`,
	},
	376: {
		index: 376,
		text: `<p>The other was rich beyond your wildest dreams of avarice! You gaze in awe at the priceless treasures scattered about his home—then begin gathering them up.</p>
<p><b>No Skill:</b> Only later do you discover that the "priceless treasures" are really worthless junk. [D1/Bargaining and Evaluation]</p>
<p><b>Bargaining and Evaluation, Stealth and Stealing:</b> Suddenly you recognize that these "priceless treasures" are really worthless junk. Obviously they are decoys, and a more careful search reveals the location of the real treasures. [D1/S1/W+2 (Max: Princely)/<b>Treasure</b>]</p>`,
	},
	377: {
		index: 377,
		text: `<p>You espy the other at some distance and you hasten to go unseen, that you might carry out your plans. But when you turn around, the other is suddenly before you, enveloped in a shimmering light!</p>
<p><b>No Skill:</b> In a trice, your arms sprout dense fur—and grow much shorter. A voice behind you says, "Well I think you look much better that way." [D1/<em>Beast Form</em>]</p>
<p><b>Wilderness Lore:</b> You recognize the gathering enchantment, and back hurriedly away, muttering a counter-charm. You leave in wisdom and in haste. [D2/Wisdom]</p>`,
	},
	378: {
		index: 378,
		text: `<p>The other is wise enough to see an experienced traveler trying to avoid him. As you pass, he lets you go on undisturbed. [Wisdom]</p>`,
	},
	379: {
		index: 379,
		text: `<p>Though you attempt to leave the other a great distance from yourself, it is to no avail. The other cries, "Perhaps you are too ignorant to know your risk! I would gladly teach you!"</p>
<p><b>No Skill:</b> You don't even see what hit you. You merely awaken, confused, in some dirty alley. [D2/S1/W-2 (Min: Poor)/Lose one <b>Treasure</b>]</p>
<p><b>Beguiling:</b> Your obsequious apology and clever flattery mollifies your dangerous persecutor. Acting with great mercy, he decides to relieve you of one of your possessions and let you go free. [D2/S1/Courtly Graces/Lose one <b>Treasure</b>]</p>`,
	},
	380: {
		index: 380,
		text: `<p>The other is far too awesome to escape or beat. No matter where you turn, he is there, grinning at you.</p>
<p><b>No Skill:</b> Finally you throw yourself on the mercy of the other, and he contemplates what to do with you.</p>
<p><em>Roll two dice, adding one each for Courtly Graces, Beguiling, and Appearance:</em></p>
<p>2–7: You are made his slave. [D1/<em>Enslaved</em>]</p>
<p>8+: The Mercy of God stays his hand, and he lets you off with a light beating. [D1]</p>
<p><b>Celestial Planisphere:</b> You assay a powerful and dangerous spell to end the torment. After a long confrontation with the other in which magic power flies like rain, you each withdraw, his curses ringing in your ears. You know this conflict is far from over. [D3/S2/<em>Accursed</em>/<em>Fated</em>/<em>Pursued</em>]</p>`,
	},
	381: {
		index: 381,
		text: `<p>A trap! While trying to avoid the other, you have been led just where he wanted you. The other invokes powerful names and works a strange trick upon you...</p>
<p><b>No Skill:</b> A large crowd mocks you as you appear before them in the form of a donkey. Even after your own form is returned to you, you are humiliated beyond words. [D-1/S1/<em>Scorned</em>]</p>
<p><b>Courtly Graces:</b> You stand before a crowd of his friends transformed into a donkey, but your grace and bearing under pressure so impress them that you win their sympathy. The other undoes the curse and all acclaim you. [D2/S1/Enduring Hardship/<em>Respected</em>]</p>
<p><b>Brass Trumpet</b> (mandatory): As he works his magics, the Brass Trumpet sounds, shattering his concentration. You take advantage of the confusion to flee. [D1/S1]</p>`,
	},
	382: {
		index: 382,
		text: `<p>You flee, and only when you are exhausted do you stop. Suddenly the voice of the other cackles maniacally in your ears.</p>
<p><b>No Skill:</b> You are frightened out of your wits. [D1/Lose one Skill/<em>Insane</em>]</p>
<p><b>Weapon Use:</b> You instinctively turn and lash out with your sword, catching him off guard. Wounded, he staggers back, and you take the opportunity to make good your escape. [D2/S1]</p>`,
	},
	383: {
		index: 383,
		text: `<p>Offended by your apparent snub, the other decides to humiliate you. "Behold," he cries, "there goes the one who is the cause of all woes!" The ever-fickle crowd pursues you relentlessly.</p>
<p><b>No Skill:</b> You are not treated gently by the crowd, who are convinced you are a sorcerer. [D1/<em>Crippled</em>]</p>
<p><b>Beguiling, Brass Trumpet:</b> You stop and shout back at the crowd, telling them of the evil of the other. Your charisma and oratory dissuade them from harming you. In the confusion, you slip away. [D1/S2]</p>`,
	},
	384: {
		index: 384,
		text: `<p>You are moved by the plight of the other, but feel there is little you can do.</p>
<p><b>No Skill:</b> You pass the other by. [Lose <em>Respected</em>]</p>
<p><b>Piety:</b> You pass the other by with a prayer. He thanks you for your blessing. [D1/Piety]</p>`,
	},
	385: {
		index: 385,
		text: `<p>The other's plight is pathetic. Your heart is heavy as you pass.</p>
<p><b>No Skill:</b> You don't wish to become involved, however, for fear of what troubles this other might bring to you. [D-1/S1]</p>
<p><b>Enduring Hardship:</b> As you go by, you are moved by memories of your own past sufferings to inquire as to his tale. It is tragic—if it were engraved on the corner of the eye with a needle, it would serve as a lesson to those who seek wisdom. [D2/S2/Wisdom/<em>Grief Stricken</em>]</p>`,
	},
	386: {
		index: 386,
		text: `<p>You prudently keep your distance from the other, who smells most foully. You see the Sultan's guards approach on horseback.</p>
<p><b>No Skill:</b> The other does not get out of the way in time, and you watch in horror as he is trampled in the street. [D-1/<em>Grief Stricken</em>]</p>
<p><b>Piety:</b> The words of the Prophet have directed that the stranger shall be honored and comforted. You aid the other in getting out of the way of the Sultan's entourage. [D3/Wisdom/Piety]</p>`,
	},
	387: {
		index: 387,
		text: `<p>At your words, the other says, "I have no patience with such foolish offers! Get out of my sight!" You do. [S1]</p>`,
	},
	388: {
		index: 388,
		text: `<p>"I will do anything," sighs the other, "if only I can see my loved one again." Since the loved one is the oldest child of the Caliph's most respected Vizier, you doubt you can be of help.</p>
<p><b>No Skill:</b> [S1]</p>
<p><b>Luck:</b> While walking in the street, you save a man's life as he is about to be trampled by his horse. It turns out to be the Sultan! In gratitude, he offers you any boon you wish, and you make the request on behalf of your friend. He is so impressed by your selflessness, that he grants that request and makes you one of his trusted advisors. [D2/S1/W+1 (Max: Respectable)/<em>Robe of Honor</em>/You may lose one status of your choice]</p>`,
	},
	389: {
		index: 389,
		text: `<p>The other is suffering unending torments brought on by sorcery. "There is only one thing that would interest me, and that is to be freed of my torment. Unless there is something you can do, I will do nothing for you."</p>
<p><b>No Skill:</b> You are unable to help the other. [S1]</p>
<p><b>Scholarship, Magic:</b> However, your own knowledge fills the gaps in his, and between the two of you, you are able to translate an arcane scroll which reveals the way to the land of the Djinn. [D2/S2/Opportunity to enter the Dusky Land]</p>`,
	},
	390: {
		index: 390,
		text: `<p>The other is trapped in a magical cage. "Free me," he cries. "Anything you desire is yours if you only free me!" A simple gesture on your part will free the other, but you wonder if he will keep his word.</p>
<p><em>You can pass by, or do as you have been asked:</em></p>
<p><em>If you pass by:</em> You decide not to endanger yourself by aiding the other. As you pass him by, he pronounces an awful curse on you. [D1/<em>Accursed</em>]</p>
<p><em>If you release him:</em></p>
<p><em>Roll two dice, adding one for Bargaining and Evaluation and three for Magic:</em></p>
<p>2–7: Freed, he attacks you immediately, overwhelming you with his magics. [D1/<em>Ensorcelled</em>]</p>
<p>8–10: When free, he keeps his promise of a reward, but in as miserly a way as possible. [D2/S1/Choice of W+1 (Max: Rich) or <b>Treasure</b> or Any status]</p>
<p>11+: Once he is free, he keeps his word and bestows upon you wonderful gifts. [D3/S1/W+1 (Max: Princely)/You may lose one status of your choice/<b>Treasure</b>/Opportunity to enter any Place of Power]</p>`,
	},
	391: {
		index: 391,
		text: `<p>As you speak, the other cries, "Oh woe, seek not to take advantage of me, I pray. Have mercy upon me!"</p>
<p><b>No Skill:</b> You take pity on the other. When you have concluded your deal, you realize you have been horribly disadvantaged, but the other is of course nowhere to be found. [D1/W-1 (Min: Poor)/<em>Envious</em>]</p>
<p><b>Bargaining and Evaluation, Beguiling:</b> You recognize sneaky business tactics when you see them, regardless of the source. Politely, but firmly, you get what you want. [D2/S1/W+1 (Max: Rich)/Bargaining and Evaluation]</p>`,
	},
	392: {
		index: 392,
		text: `<p>"I am willing to assist you," says the other, "but a more generous offer from you would better reflect the service I am to provide, would it not?"</p>
<p><b>No Skill:</b> You agree, and the other's services do not come cheaply.</p>
<p><em>If you cannot pay:</em> [<em>Enslaved</em>]</p>
<p><em>Otherwise:</em> [W-2 (Min: Penniless)/Choice of Magic or <b>Treasure</b>]</p>
<p><b>Storytelling:</b> You know just how valuable the other's services will be to you, and explain this to him. Moved by your wise words, he is willing to settle for a lower price.</p>
<p><em>If you cannot pay:</em> [Magic]</p>
<p><em>Otherwise:</em> [W-1 (Min: Poor)/<b>Treasure</b>/You may lose one status of your choice]</p>`,
	},
	393: {
		index: 393,
		text: `<p>"Why," says the other, sweetly. "I would be happy to do business with you. Come with me and we will talk business together."</p>
<p><b>No Skill:</b> You do so. "Here," he says, "let me give you—this!" You hear a loud *poof*, and suddenly your mind is no longer completely your own. [D1/W-1 (Min: Poor)/<em>Ensorcelled</em>]</p>
<p><b>Stealth and Stealing:</b> You are immediately suspicious of the other. Anticipating a betrayal, you seize an obviously enchanted item from the other before he can do you harm. The other refuses to cooperate with you, so you keep the item in recompense. [D1/S1/W+1 (Max: Respectable)/<b>Treasure</b>]</p>`,
	},
	394: {
		index: 394,
		text: `<p>The other is interested in dealing with you. "I have an item I'm sure you'll be interested in." The other shows you an interesting looking bauble. You realize that the item is protected by an ancient curse. The other was unaware of this and is very embarrassed when you bring it to his attention. As evidence of his good will, he offers you the item for free.</p>
<p><em>You may accept or reject the item:</em></p>
<p><em>If you reject it:</em> The other throws it in the river. He thanks you for your assistance. [S1]</p>
<p><em>If you accept it:</em> You take the item despite its curse. [D1/<em>Accursed</em>/<b>Treasure</b>]</p>`,
	},
	395: {
		index: 395,
		text: `<p>To your business proposal, the other responds, "I fear I have nothing that you need."</p>
<p><b>No Skill:</b> "And while I am in the habit of giving alms, I do not give great rewards to the merely grasping." With that, he departs. [<em>Envious</em>]</p>
<p><b>Enduring Hardship:</b> You tell of your past sufferings in a clear and firm voice, and you touch the other's heart; he does what he can. [S1/W+1 (Max: Poor)/Storytelling]</p>`,
	},
	396: {
		index: 396,
		text: `<p>"I shall do as you ask," says the other.</p>
<p><b>No Skill:</b> You soon learn that this cooperative character has very little to offer you. [D1/W+1 (Max: Penniless)]</p>
<p><b>Luck:</b> It just so happens that this otherwise unprepossessing fellow has a few remarkable magic tricks he can show you. [D1]</p>`,
	},
	397: {
		index: 397,
		text: `<p>The other is in rather difficult straits at the moment, but agrees to try to aid you when you convince him that you can help him in return.</p>
<p><b>No Skill:</b> You make known your needs, and quickly find that there is little he can do. You leave him to his fate. [D-1]</p>
<p><b>Enduring Hardship:</b> Your own memories of hardship lead you to question the other about his predicament. Your conversation brings you greater understanding and you decide to truly help the other, giving up your plans of trickery. [D1/S1/Piety]</p>`,
	},
	398: {
		index: 398,
		text: `<p>Hoping to get something for nothing, you offer to help the other if he will aid you with his clear magical talents. He agrees. You soon find (to your dismay) that the other is growing old, and has forgotten most of his skills.</p>
<p><b>No Skill:</b> So time-bedimmed are his abilities that he is of no help whatsoever. [S1]</p>
<p><b>Scholarship, Magic:</b> However, your own knowledge fills the gaps in his, and between the two of you, you are able to translate an arcane scroll which reveals the way to the land of the Djinn. [D2/S2/Opportunity to enter the Dusky Land]</p>`,
	},
	399: {
		index: 399,
		text: `<p>The other falls for your trick, and speaks to you from the bottom of the oubliette in which you have cruelly trapped him. "You are a fool to do this. If I escape, you shall surely feel my wrath!"</p>
<p><em>Roll two dice, adding one for Luck:</em></p>
<p>2–7: The other escapes your trap and relentlessly chases you. [D1/<em>Pursued</em>]</p>
<p>8+: You assay a few spells you have never tried before, and are surprised when they work! You never hear from the other again. However, there is this dog which keeps trying to bite you... [D2/S1/Magic]</p>`,
	},
};
