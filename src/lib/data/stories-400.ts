import type { Story } from "./stories";

export const stories400: Record<number, Story> = {
	400: {
		index: 400,
		text: `<p>You cry out a word of danger to the other, and he falls upon his prat in startlement. He looks up at your laughter and cries, "Woe is me! Must you add to my misery by making a fool of me?"</p>
<p><b>No Skill:</b> You turn away, savoring the grandness of your low jest. [D1]</p>
<p><b>Enduring Hardship:</b> You are ashamed of your actions, and resolve to be more compassionate in your future dealings. You offer to perform a task for the other to help him regain his dignity. [D1/S1/Choice of Piety or Wisdom/<em>Under Geas</em>]</p>`,
	},
	401: {
		index: 401,
		text: `<p>Your victim, not wishing to believe ill of you, falls for your lie that there is a djinn enslaved in this very magic lamp (an old brass thing you found somewhere) and is willing to pay you handsomely for it.</p>
<p><b>No Skill:</b> Afterwards, you accidentally meet him again, and he swears vengeance upon you for the trick you have played. [D1/W+1 (Max: Rich)/Beguiling/<em>Pursued</em>]</p>
<p><b>Beguiling:</b> You further convince him that it would be very dangerous to release the djinn, but that the mere possession of the lamp will confer upon him great fortune. Your trick is so well thought out that the other cheerfully pays the price and never suspects that the lamp is worthless. [D1/S1/W+1 (Max: Rich)]</p>`,
	},
	402: {
		index: 402,
		text: `<p>You tell the other your tales, with the proper embellishments to ensure that your listener understands the righteousness of your destiny. The other is willing to perform a service for you, but his prices are high.</p>
<p><b>No Skill:</b> Despite your clever maneuverings, you must pay full price or receive no service.</p>
<p><em>If your wealth is Respectable or greater:</em> [D1/W-1 (Min: Poor)/Choice of skill (1 use)/You may lose one status of your choice]</p>
<p><em>Otherwise:</em> You cannot pay, and you leave. You were so certain that your words would sway him... [Bargaining and Evaluation]</p>
<p><b>Bargaining and Evaluation:</b> You are able to bargain him down to a price that does not significantly affect your pocketbook. [D1/S1/Gain any skill (1 use)/You may lose one status of your choice]</p>`,
	},
	403: {
		index: 403,
		text: `<p>You weave a complex tale of your needs and destiny to sway him to your assistance. The other is willing to take up any cause for free.</p>
<p><b>No Skill:</b> Kindly he offers to deliver you from any mortal menace. [D1/Lose <em>Pursued</em>, <em>Under Geas</em>, <em>Enslaved</em>, <em>Scorned</em>, and <em>Imprisoned</em>]</p>
<p><b>Weapon Use, Magic:</b> Greatly impressed with your skills and subtle learnings, he places his own skills at your service as a friend. [D1/Weapon Use/<em>Respected</em>]</p>`,
	},
	404: {
		index: 404,
		text: `<p>The other is willing to join you as an aid and traveling companion for a while, but warns you that he has been dabbling in strange and eldritch mysteries of late, and danger might come your way. Talking further, you learn that he has drawn the anger of one of the People of the Flame. You are willing to brave the wrath of that angry 'efreet for the pleasure of the company of this stranger.</p>
<p><b>No Skill:</b> He is delighted at your bravery, and you travel a ways with him. During your time together, he teaches you some small amount of magic. [D1/S1/<em>Pursued</em> ('EFREET)]</p>
<p><b>Enduring Hardship:</b> You suffer through many dangers with the other, and prove to be such a valuable and stoic companion that he begs to remain with you. He teaches you all the secret ways he has mastered. [D2/S1/<em>Pursued</em> ('EFREET)/You may lose one status of your choice]</p>`,
	},
	405: {
		index: 405,
		text: `<p>You attempt to cheat the other of a portion of his inheritance by claiming to be a long-lost relative, but he hears your words with suspicion.</p>
<p><b>No Skill:</b> The other discovers the falsehood of your statements before it is too late for him, and vows vengeance upon you. [D1/<em>Pursued</em>]</p>
<p><b>Beguiling:</b> Fortunately, you come prepared with falsified documents to "prove" your claim, and the other is completely taken in. [D2/W+1 (Max: Rich)]</p>`,
	},
	406: {
		index: 406,
		text: `<p>You fool the other so completely that he puts you up in his home as a long-lost member of the family, feeds you the best meals he can afford, and showers you with gifts.</p>
<p><b>No Skill:</b> You enjoy your life of luxury for a time, and when eventually you depart, it is with the blessing of the other and many wishes of a speedy return. [D1/S1/W+1 (Max: Respectable)]</p>
<p><b>Stealth and Stealing:</b> You completely hoodwink the other, so that even when you help yourself to some of his more interesting possessions, he blesses you. [D2/S1/W+1 (Max: Respectable)/Beguiling/<b>Treasure</b>]</p>`,
	},
	407: {
		index: 407,
		text: `<p>You convince the other into investing in non-existent shipments of spices from far lands, and your scheme seems likely to bring you much of his money. To your amazement, within a few days you discover that the false merchant you invented for your hoax really does exist, and the other makes a great profit.</p>
<p><b>No Skill:</b> You hurry to invest your money. Quickly you discover that the other has turned the tables on you, and you have been duped. [S1/W-1 (Min: Penniless)]</p>
<p><b>Quick Thinking:</b> You realize that the other has tried to turn the tables on you. You cunningly redouble your efforts in the hoax, inventing a terrible disaster to the false merchant, which wipes out all the other's "wealth." The resulting confusion is so exquisite that even your victim salutes your artistry. [D2/S2/Acting and Disguise]</p>`,
	},
	408: {
		index: 408,
		text: `<p>Your intended victim is not taken in for a minute. "You are nothing but a sharper," he says menacingly, and drives you off with harsh words. Your humiliation is evident for all to see. [S1/<em>Scorned</em>]</p>`,
	},
	409: {
		index: 409,
		text: `<p>You attempt to fool the other into giving you a valuable magic item, by pretending to be a scholar who has discovered the item is cursed. You learn, however, that the other is a scholar also, and will see through your blatant lies.</p>
<p><b>No Skill:</b> You hastily abandon your scheme and get out while you can. [D1/Wisdom]</p>
<p><b>Beguiling, Acting and Disguise:</b> So confident are you in your own talents of deception that you carry through with your plans. When they fail, as they must with a victim so astute, you regret your foolishness. The other is furious, and you suffer accordingly. [D1/<em>Imprisoned</em>]</p>`,
	},
	410: {
		index: 410,
		text: `<p>You try to fool the other into rendering aid, rather than asking for it forthrightly. Thus you begin a tale of being his long-lost sibling.</p>
<p><b>No Skill:</b> The other sees through your lies quickly, and denounces you to the Sultan as the shiftless sharper you are. The Sultan orders you imprisoned that you might learn the folly of wickedness. [D1/<em>Imprisoned</em>]</p>
<p><b>Wisdom:</b> You wisely sense that the other does not believe you, so you change tactics before it is too late, cleverly transforming your lie into the beginning of a parable about aiding strangers. You then ask for his aid, which he grants. [D1/S1/Storytelling/Quick Thinking/You may lose one status of your choice]</p>`,
	},
	411: {
		index: 411,
		text: `<p>You have heard that the other intends a dangerous journey to a far off land, and you attempt to fool him into taking you along by saying that you are the most powerful sorcerer who ever lived.</p>
<p><b>No Skill:</b> The other, no fool, subtly tests your words and gleans out their falsehood, and vows that you shall suffer for your impudence. You feel the power of his words fill your brain, driving out all other thoughts... [D1/<em>Ensorcelled</em>]</p>
<p><b>Storytelling, Enduring Hardship:</b> The other sees through your rather transparent lie but admires your boldness and sees other virtues in you that would be valuable to him on his journey. He decides to take you along anyway and teaches you some small tricks of his art. [D2/S1/Opportunity to enter the Jeweled Fortress]</p>`,
	},
	412: {
		index: 412,
		text: `<p>Your attempts at a subtle trap are completely lost on the other, as he muddles through your band of con men without even noticing the profits he was being offered. [S1]</p>`,
	},
	413: {
		index: 413,
		text: `<p>You discover that the other is quite suspicious of all strangers, and he seems to have a great grudge to bear against all.</p>
<p><b>No Skill:</b> Without cause, he suspects you of having been sent by his enemies, and has you bound and beaten near unto death. [D1/<em>Crippled</em>]</p>
<p><b>Acting and Disguise:</b> You are able to alleviate his suspicions through a superb performance of hatred against those he himself hates. Completely taken in, he treats you like a member of the family. [D1/S1/W+1 (Max: Rich)]</p>`,
	},
	414: {
		index: 414,
		text: `<p>Your cunning design makes a fool of the other, and you prepare to extort a small amount in exchange for keeping silent about his humiliation.</p>
<p><b>No Skill:</b> The other weeps openly and bemoans the cruelty of humanity while handing over the requested sum. [D1/W+1 (Max: Respectable)]</p>
<p><b>Wisdom:</b> The other weeps openly and bemoans the cruelty of mankind, for this is but the longest in a dire series of humiliations for him. You hear words of truth in his cries.</p>
<p><em>If you are the same sex as the other or are Married:</em> You take note of the poetic nature of the other, and repent your earlier decision. Instead, you aid the other in regaining his lost reputation. Though the path to redemption is difficult, witnessing the bravery with which he bears his humiliation inspires you. [D2/Enduring Hardship]</p>
<p><em>Otherwise:</em> You take note of the exquisite beauty of the other, and repent your earlier intention. Instead you soon find that you are desperately in love. [D2/S1/<em>Love Struck</em>]</p>`,
	},
	415: {
		index: 415,
		text: `<p>At your words, the other throws himself at your feet...</p>
<p><b>No Skill:</b> ...and proclaims himself your good friend and faithful companion. [D1]</p>
<p><b>Seduction, Appearance</b> (if of opposite sex): ...and proclaims himself your devoted lover. [D2/<em>Beloved</em>]</p>`,
	},
	416: {
		index: 416,
		text: `<p>You are able to use arcane means to place the other completely at your mercy.</p>
<p><b>No Skill:</b> The other wails and bemoans his fate, touching your heart, but not causing you to free him until he performs a small favor for you. [D1/Beguiling]</p>
<p><b>Appearance</b> (if of opposite sex): The other is well pleased to be at your mercy, as you are comelier than any he has ever seen. In truth, he is your equal in beauty, and you embrace with fierce determination. [D2/<em>Beloved</em>]</p>`,
	},
	417: {
		index: 417,
		text: `<p>Your attempt to overcome the other is easily defeated.</p>
<p><b>No Skill:</b> When the other has you at his mercy, you are beaten and tortured until he has satisfied his wicked desires. [D1/<em>Crippled</em>]</p>
<p><b>Weapon Use:</b> You redouble your attack with great skill, but you quickly realize that you are facing your equal (or perhaps superior) and prudently withdraw. [D2/Wisdom]</p>`,
	},
	418: {
		index: 418,
		text: `<p>You come upon him and defeat him easily.</p>
<p><b>No Skill:</b> As you are looting his body, a shadow looms over you. The one you defeated was a servant sent to test you. The master remains yet to be faced!</p>
<p><em>You may surrender to the master or fight:</em></p>
<p><em>If you surrender:</em> You bow down and ask how you can serve him, and he demands you take the place of the slain servant. [D1/W-1 (Min: Poor)/<em>Enslaved</em>]</p>
<p><em>If you fight:</em> When the master comes, you draw your sword and face him.</p>
<p><em>Roll two dice, adding one each for Weapon Use and Luck:</em></p>
<p>2–8: The master is most powerful and skilled, and cruelly thrashes you, leaving you bleeding near to death. [D1/Lose Appearance/Lose Weapon Use/<em>Crippled</em>]</p>
<p>9+: Though the master is most skillful, you fend him off until a twist of fortune gains you a second's advantage. You seize the chance and flee. [D2/S2]</p>
<p><b>Quick Thinking, Acting and Disguise:</b> You realize that the other you have defeated is merely a servant sent to test you. You quickly don his robes and muffle your face. When the master comes, your report that you have slain your foe, and actually receive a reward! [D2/S1/W+1 (Max: Respectable)/Beguiling]</p>`,
	},
	419: {
		index: 419,
		text: `<p>The other apparently chooses not to deal with you. Instead, he chants a quick spell and disappears in a puff of smoke, leaving behind a pile of his effects.</p>
<p><b>No Skill:</b> You root through them and recover some gold coins among the vast pile of junk. [D1/S1/W+1 (Max: Respectable)]</p>
<p><b>Scholarship, Bargaining and Evaluation:</b> While searching the pile, you discover a handful of gems and a remarkable item of great magical power among them. [D2/S1/W+1 (Max: Rich)/<b>Treasure</b>]</p>`,
	},
	420: {
		index: 420,
		text: `<p>Your victim puts up no resistance and is easily overcome. However, he refuses to reveal where any of his valuables are kept.</p>
<p><b>No Skill:</b> In your attempt to discover his hiding place, you interrogate him for many hours, learning of his many wicked misdeeds. You have the small satisfaction of slaying the infidel for his crimes. [S1/Piety]</p>
<p><b>Beguiling:</b> You trick the other by having an accomplice yell "Fire!" outside the dwelling door. The other's alarmed start toward the northwest corner of the room reveals a hidden trapdoor and the treasure within. [D2/S1/<b>Treasure</b>]</p>`,
	},
	421: {
		index: 421,
		text: `<p>You move to attack, but the other does not draw his weapon. Instead, he says "I have no quarrel with you. Why do you do this thing?"</p>
<p><b>No Skill:</b> Your reasons seemed clear enough a moment ago, but now you hesitate. In a twinkling the other has made good his escape. [S1]</p>
<p><b>Wisdom:</b> You recognize the other's stalling tactics and press your attack, forcing him to defend himself. He is no match for you, and after a fierce fight you subdue him. As ransom he offers you coin and knowledge, including the secrets of hidden lands and arcane powers. [D2/S1/W+1 (Max: Rich)/Opportunity to enter the Dusky Land]</p>`,
	},
	422: {
		index: 422,
		text: `<p>As you move toward him, the other stares at you wild-eyed. "So we meet again!" he cries. "Now I shall pay you for your crimes!"</p>
<p><b>No Skill:</b> "I learned this in the mountains lairs of the infidel sorcerers!" Before you can stop him, he gestures magically. There is a loud *poof* and suddenly you feel... different. [D1/S1/<em>Beast Form</em>]</p>
<p><b>Courtly Graces:</b> Quickly you speak in your defense, and your soft voice and well-reasoned arguments convince the other that you are not the one he seeks. [D2/S2]</p>`,
	},
	423: {
		index: 423,
		text: `<p>As you approach, the other gestures magically and you are lifted and hurled into an old well. "There you shall stay until I choose to release you! Perhaps I shall have my servants bring you a morsel of bread every now and then." The other laughs maniacally and leaves.</p>
<p><b>No Skill:</b> True to his word, he does not let you starve, but it is a long while before you are freed. [S1/<em>Imprisoned</em>]</p>
<p><b>Stealth and Stealing:</b> The rough walls of the well provide ample purchase for one of your talents. You scramble out like the accomplished burglar you are. [D1/S2]</p>`,
	},
	424: {
		index: 424,
		text: `<p>You strike down the other, but instantly a weird mist envelops his body, and a fierce wind springs up. "How shall your actions benefit you, fool?" booms a voice from the air.</p>
<p><b>No Skill:</b></p>
<p><em>You may approach the body or leave it alone:</em></p>
<p><em>If you leave it alone:</em> You leave the body of your slain opponent on the ground. Instead, you free his horse and go your own way. [D1/S2]</p>
<p><em>If you approach the body:</em></p>
<p>You struggle towards the body of the slain other, though the fierce wind batters you.</p>
<p><em>Roll two dice, adding two for Magic:</em></p>
<p>2–7: The closer you get the more difficult the going. Finally everything goes black as something invades your very mind and drives out your own thoughts. [D2/<em>Ensorcelled</em>]</p>
<p>8+: You manage to push through the howling whirlwind and rescue the other's purse. You do not tarry, but make haste away from this accursed place. [D2/S2/W+1 (Max: Rich)]</p>
<p><b>Scholarship, Storytelling:</b> You are well aware that there are creatures that can strike the living even from beyond death, and you prudently decide to leave the body alone. As you set about freeing the other's horse, you note the magical design on its saddlebags. [D2/S1/<b>Magic Saddlebags</b>]</p>`,
	},
	425: {
		index: 425,
		text: `<p>As you step forward there is a blinding flash of light. When your vision clears, your foe is gone, and before you stands a fierce lion, growling menacingly.</p>
<p><b>No Skill:</b> You are badly mauled by its claws and teeth. A passing dervish discovers you and tends to your wounds until you can again walk. [D1/S1/<em>Crippled</em>]</p>
<p><b>Wilderness Lore:</b> You have experience with lions, and you fall to the ground and lie motionless, feigning death. The beast quickly loses interest in you and wanders off. [D2/S2/Quick Thinking]</p>`,
	},
	426: {
		index: 426,
		text: `<p>Casting aside his robes, the other brandishes a wicked sword. "Come, fool!" he cries. "This is the fate you have chosen—do not shy away from it!"</p>
<p><b>No Skill:</b> The other is an expert swordsman and cuts you to ribbons, leaving you for dead. [D1/<em>Crippled</em>]</p>
<p><b>Determined</b> (mandatory), <b>Weapon Use, Enduring Hardship:</b> Clearly, he is your superior, and you observe many clever tricks with the sword as he cuts you in a hundred places. However, your determination keeps you standing even though your blood flows like a mighty river. In respect for your courage, he spares your life and tends to your wounds. [D2/S2/Weapon Use/Enduring Hardship/<em>Wounded</em>]</p>`,
	},
	427: {
		index: 427,
		text: `<p>You engage the other in battle, but immediately you realize that never before have you fought one of such consummate skill.</p>
<p><b>No Skill:</b> Easily, he defeats you. The other orders you thrown in his dungeon and fed on bread and water. [D1/<em>Wounded</em>/<em>Imprisoned</em>]</p>
<p><b>Courtly Graces, Acting and Disguise:</b> You surrender immediately and plead for mercy with excessive flattery of the other's prowess. The other's vanity is swollen and you are permitted to leave. [D1/S1/Beguiling]</p>`,
	},
	428: {
		index: 428,
		text: `<p>Your attack is turned aside, and you are defeated by the other. With a cruel laugh, he reveals himself to be a fire-worshipping Magian! He binds you in ropes and carries you to the lip of a volcano, which is rumbling as though about to erupt.</p>
<p><b>No Skill:</b> In you go—but at that very moment the volcano erupts, belching forth a blast of gas that bears you far away. Miraculously, you are only injured by your landing and not killed outright, although your belongings are scattered across the face of the world and you are left without means to travel. [D4/S2/W-3 (Min: Penniless)/<em>Wounded</em>/<em>Lost</em>/Lose all <b>Treasures</b>]</p>
<p><b>Piety:</b> "There is no strength or power but in Allah," you cry, and at that moment the volcano erupts. A flow of lava burns your enemy to a crisp, but through the Mercy of the Most Holy God, you are spared. When the eruption is over, you see that you stand at the lip of a strangely glistening valley. [D3/S2/Piety/<em>Blessed</em>/Move to the Valley of Diamonds and have an immediate encounter]</p>`,
	},
	429: {
		index: 429,
		text: `<p>You slay the other easily, and suddenly there is a tremendous crash. Somewhere a spell has been broken, and the countryside begins to quake! Before your eyes, a hoard of enraged 'efreets appears!</p>
<p><b>No Skill:</b> You flee in terror! What awful machinery of fate have you set in motion? You tell your tale to the next person you see, and he nods and tells you a most remarkable tale that he has heard, which eerily echoes your own life... [D2/S1/<em>Fated</em>]</p>
<p><b>Magic, Eagle Censer:</b> Through the use of your magical arts, you summon one of the 'efreets and compel him to discourse with you about what has taken place. You discover that the other bore a token of great power over all of the djinn, and the 'efreets have come to take it back. Instead, you order this djinn to bring it to you. [D2/S2/<b>Protective Talisman</b>]</p>`,
	},
	430: {
		index: 430,
		text: `<p>You come closer, and discover that the magical other is trapped within a glass cage of cunning design. "Free me!" he cries, "and I shall serve you faithfully!"</p>
<p><b>No Skill:</b> The glass shatters before your sword blows, freeing the other. He repays your favor with treachery, blasting you with the power of his magic and hurling you far away. [D1/Have another player move you to any space except a Place of Power]</p>
<p><b>Wisdom:</b> You wisely suspect the other's insincerity and refuse to free him. Upon hearing this, he pronounces an awful curse upon you! [D2/Wisdom/<em>Accursed</em>]</p>`,
	},
	431: {
		index: 431,
		text: `<p>The other looks at you searchingly.</p>
<p><b>No Skill:</b> Despair fills his words as he cries, "So long have I suffered, have you sent by my enemies to torture me? Begone!" [S1]</p>
<p><b>Appearance:</b> With longing in his voice, he says, "Your soul is as clear as a mountain stream, and your visage resembles that of the full moon."</p>
<p><em>If you are the same sex as the other or are Married:</em> "Please stay by me and comfort me in my hour of need." You spend a day and a night with him and trade tales to lighten his suffering. He is a most skilled weaver of fiction, and you learn many tales from him. When you depart, it is with his blessings before the Most High. [D2/Storytelling/<em>Blessed</em>]</p>
<p><em>Otherwise:</em> The other takes your hand and presses it against his breast and kisses each of your fingers. "Please stay with me and be my love until the end of my days." [D2/Seduction/<em>Beloved</em>]</p>`,
	},
	432: {
		index: 432,
		text: `<p>The other is stricken with devotion for you, but his fate is in the hands of the Sultan, and nothing may be accomplished without his consent.</p>
<p><b>No Skill:</b> You are unable to obtain an audience with the Sultan, and cannot complete your fate with the other. Black sorrow fills your heart as you go on your way. [D1/<em>Grief Stricken</em>]</p>
<p><b>Appearance</b> (female only): You pretend to be a present for the Sultan and say that you come with a message. You are obviously quite beautiful and the Sultan's attendants believe you. You gain an audience with the Sultan and you are able to convince him that the other should be given clemency. To complete the ruse, however, you find that you now must remain a servant of the Sultan. [D1/S1/Courtly Graces/Bargaining and Evaluation/<em>Enslaved</em>]</p>`,
	},
	433: {
		index: 433,
		text: `<p>The other is willing to fulfill your desire.</p>
<p><b>No Skill:</b> However, he can only be with you for a short time.</p>
<p><em>If the other is of the same sex:</em> But while he journeys with you, he will help however he can. [D1/Choice of skill]</p>
<p><em>If the other is of the opposite sex:</em> But while he journeys with you, he will love you as best he can. [D1/<em>Blessed</em>]</p>
<p><b>Piety:</b> After realizing your pious nature, the other abandons his previous plans and takes up with you.</p>
<p><em>If the other is of the same sex or you are Married:</em> The other becomes your permanent companion and helps you throughout your life, lending his knowledge and skill to your cause. [D2/Choice of skill]</p>
<p><em>Otherwise:</em> The other marries you and proves to be a loyal and loving spouse, most enthusiastic and energetic in the many acts which make a happy union between man and woman. [D2/<em>Married</em>]</p>`,
	},
	434: {
		index: 434,
		text: `<p>The other tells you he has duties which must be performed.</p>
<p><b>No Skill:</b> And he has no time for the likes of you. [<em>Scorned</em>]</p>
<p><b>Seduction</b> (if opposite sex), <b>Appearance:</b> However, a bit of dalliance never hurt anyone. You spend a few hours of bliss. [D1/S1]</p>
<p><b>Storytelling</b> (if same sex): However, he is always interested in a good tale, and you spend several hours swapping yarns. [S1/Storytelling]</p>`,
	},
	435: {
		index: 435,
		text: `<p>The other looks upon you haughtily and sniffs. "Your desire is amusing to me, but no more than that. I will not do what you ask—please go." Contemptuously, he throws you a handful of silver.</p>
<p><em>You may take the coins or leave them:</em></p>
<p><em>If you take them:</em> You take the coins from the ground, even knowing that it will reflect badly on you. [S1/W+1 (Max: Respectable)/<em>Scorned</em>]</p>
<p><em>If you leave them:</em> The dignity that Allah grants His followers gives you the strength to pass the coins by. Others remark on your acts, and your reputation is enhanced. [D1/<em>Respected</em>]</p>`,
	},
	436: {
		index: 436,
		text: `<p>The other speaks without looking at you. "You exceed the bounds of polite company, do you not?"</p>
<p><b>No Skill:</b> "Now, please leave my sight." [Lose <em>Respected</em>]</p>
<p><b>Courtly Graces</b> (if same sex): You persist, and your words and poems convince the other that you are one of breeding and taste. You dine together and discourse on literary matters and court gossip. [D1/S1/Scholarship/Courtly Graces]</p>
<p><b>Seduction</b> (if opposite sex), <b>Appearance:</b> But when the other turns to look at you, he is struck dumb with love and desire. You smile, and he drops to his knees and begs you never to take your beauty from him. You bid him rise while you consider his suit, for truly he is most attractive, with a countenance as bright as the summer stars and movements as graceful as an eagle in flight. [D1/S1/<em>Beloved</em>]</p>`,
	},
	437: {
		index: 437,
		text: `<p>The other looks upon you sadly. "It is not permitted that I love a mortal."</p>
<p><b>No Skill:</b> You have no way to answer this. "I'm sorry," says the other. [D1/S1]</p>
<p><b>Seduction, Appearance:</b> Despite his curse, he cannot contain his love for you, and soon you find yourself in the most compromising of positions with him. The other's arcane lore complements your knowledge of the arts amorous, and you spend a day and a night seeking new knowledge in each other's company. Finally, with tears you go your separate ways, as you know must be. He showers you with blessing before you go. [D1/S2/<em>Blessed</em>]</p>`,
	},
	438: {
		index: 438,
		text: `<p>The other looks at you haughtily. "There are many who seek my hand. Why should I favor you?"</p>
<p><b>No Skill:</b> Your protestations of powerful love are not enough to sway the other. You leave, heart-broken. [D1/<em>Grief Stricken</em>]</p>
<p><b>Seduction, Appearance, Courtly Graces:</b> Your amorous charms and genteel nature combine to make you a superior suitor. The other favors you. [D1/S1/<em>Beloved</em>]</p>`,
	},
	439: {
		index: 439,
		text: `<p>In reply, the other explains, "You have many obvious charms, and I do favor you, but I have vowed that my spouse must be my equal. Come, let us duel, that you may prove you are worthy of me."</p>
<p><b>No Skill:</b> Although you do your best to honor this strange request, you are bested, and must go on your way unfulfilled. [D1/S1]</p>
<p><b>Weapon Use</b> (if facing a Soldier or Dervish): The other is of great skill in his own realm, but so are you—you are your opponent's equal, if not superior. After the duel he throws his arms about you and professes undying love. [D2/S2/<em>Beloved</em>]</p>
<p><b>Magic</b> (if facing a Wizard or Enchantress): The other is of great skill in his own realm, but so are you—you are your opponent's equal, if not superior. After the duel he throws his arms about you and professes undying love. [D2/S2/<em>Beloved</em>]</p>`,
	},
	440: {
		index: 440,
		text: `<p>The other is unimpressed with your suit. "You are bold, yes, but many are bold."</p>
<p><b>No Skill:</b> "Now, begone before I forget my good nature." [S1]</p>
<p><b>Beguiling, Acting and Disguise:</b> Realizing that this is what the other admires most, you brazenly stand up to him and act even more brashly than before. The other's heart is won! [D2/S2/<em>Beloved</em>]</p>`,
	},
	441: {
		index: 441,
		text: `<p>The other grins at your words. "I will not marry you, for you are far beneath me. But you will make a fine servant!" The other's bodyguards take you.</p>
<p><b>No Skill:</b> Upon your word of honor, you are allowed to journey on, but your freedom is not yours. [D1/<em>Enslaved</em>]</p>
<p><b>Stealth and Stealing:</b> You take the first opportunity to make good your escape, knowing that your former master will pursue you to the ends of the Earth. [D2/S1/<em>Pursued</em>]</p>`,
	},
	442: {
		index: 442,
		text: `<p>The other harkens to your kind words, and responds with joy. He follows you around, going on and on about how he would forsake his vows and all his power for you. His pathetic aspect repels you—for if he would throw over so much for your lovely face, how much could you possibly trust his love?</p>
<p><b>No Skill:</b> You publicly humiliate him to get him to leave you alone. Though he does so, your actions bring no glory to you, either. [S1/<em>Scorned</em>/Lose <em>Respected</em>]</p>
<p><b>Bargaining and Evaluation:</b> Rather than risk confronting him directly, you take an unconventional approach. You throw yourself on the ground beseech him to hear more about his holy vows, that you may learn from his piety. Surprised, he tells you, you beseech him for more, and more, and more. After a while, he cannot stand to answer any more of your questions and decides to leave you alone once and for all. [S1/Enduring Hardship]</p>`,
	},
	443: {
		index: 443,
		text: `<p>The other is willing to follow you without regard for recompense of any kind. You have found a true and devoted friend and a mentor in the mystic arts. [D1/S1]</p>`,
	},
	444: {
		index: 444,
		text: `<p>The other is unwilling to journey with you, but invites you to come to his home for an evening's entertainment.</p>
<p><b>No Skill:</b></p>
<p><em>If you are of the opposite sex:</em> You commit a tremendous gaffe and are asked to leave. [S1/<em>Scorned</em>]</p>
<p><em>If you are of the same sex:</em> You enjoy his hospitality for some time before going on your way. [D1/S2]</p>
<p><b>Courtly Graces, Storytelling:</b> Your host finds you a marvelous guest, and travels with you for some time before returning home. [D2/S2]</p>
<p><b>Seduction</b> (if opposite sex), <b>Appearance:</b> The other sees you as a superior person, and the other is willing to perform a small favor in gratitude. [D2/You may lose one status of your choice]</p>`,
	},
	445: {
		index: 445,
		text: `<p>The other is most generous, offering to assist you in exchange for payment of "whatever you can afford."</p>
<p><b>No Skill:</b> You pay what you can, and the other is pleased to aid you as he can. [D1/S1/W-1 (Min: Beggar)/Choice of skill (1 use)/You may lose one status of your choice]</p>
<p><b>Acting and Disguise:</b> You pretend to total penury, and the other renders his services for free out of mercy. [D1/S1/You may lose one status of your choice]</p>`,
	},
	446: {
		index: 446,
		text: `<p>The other is suspicious of your motives, and questions you closely about what you wish him to do.</p>
<p><b>No Skill:</b> Unsatisfied as to your virtue, he refuses to accompany you. [S1]</p>
<p><b>Piety:</b> Your virtue is unmistakable, and the other willingly assists you. [D1/S1/Choice of skill]</p>`,
	},
	447: {
		index: 447,
		text: `<p>The other is suspicious of your motives, and questions you closely about what you wish him to do.</p>
<p><b>No Skill:</b> After speaking with you, he is still dubious, but is willing to serve you a while for a fee.</p>
<p><em>If you cannot or will not pay:</em> [Lose Bargaining and Evaluation]</p>
<p><em>Otherwise:</em> [D1/W-1 (Min: Poor)/Choice of skill]</p>
<p><b>Beguiling</b> (mandatory): Your confidence in your devious tongue steers you wrong—your attempts to convince him simply make him more suspicious. Adamantly, he refuses to aid you. [S1]</p>`,
	},
	448: {
		index: 448,
		text: `<p>The other drops his cloak aside, and the hideous sight of his true form and physical shape are revealed!</p>
<p><b>No Skill:</b> You recoil in horror. The other casts a baleful glance at you and spits at your feet. [D-1/S1/<em>Scorned</em>]</p>
<p><b>Determined</b> (mandatory), <b>Enduring Hardship:</b> You are inured to horror, and have seen much worse in your time. Your calm gaze pleases the other. "Few indeed can look upon my form without quailing. Very well, I shall aid you. I find few like you in my travels." [D2/S2/Choice of skill/You may lose one status of your choice]</p>`,
	},
	449: {
		index: 449,
		text: `<p>Casting nervous glances all about, the other whispers, "You mustn't be seen with me! I have many enemies! Run, save yourself!"</p>
<p><b>No Skill:</b> Taking the other at his word, you flee. [D-1/S1]</p>
<p><b>Weapon Use:</b> You boldly offer the other the use of your sword in return for a service at a later time, though you know you will incur the hatred of his enemies as if they were your own. This marks the beginning of a profitable companionship. [D2/S1/W+1 (Max: Respectable)/Choice of skill/<em>Pursued</em> (WIZARD)]</p>`,
	},
	450: {
		index: 450,
		text: `<p>The other boasts, "I am far too powerful and learned to be the hireling of such as you! Begone!"</p>
<p><b>No Skill:</b> Casually he gestures, and you hear a loud *poof*—he disappears and is replaced by a small frog, which croaks mournfully. [S2]</p>
<p><b>Seduction</b> (if opposite sex), <b>Appearance, Beguiling</b> (mandatory): Your charms and flattery convince him to aid you with an enchantment. He begins to chant, and you hear a loud *poof*. You feel... changed. [D1/S2/<em>Sex-Changed</em>]</p>`,
	},
	451: {
		index: 451,
		text: `<p>In response to your request, the other says gently, "I'll be happy to accept the fee you offer, but I must warn you. Sometimes things don't always go as I anticipate."</p>
<p><b>No Skill:</b> You take your chances.</p>
<p><em>Roll two dice, adding one for Luck and two for Magic:</em></p>
<p>2–8: The other is incompetent and nearly destroys both of you. Your mind is ravaged by the things that he calls up. [D1/S1/W-1 (Min: Poor)/<em>Ensorcelled</em>]</p>
<p>9+: The other performs with perfect skill. You feel as fresh as a newborn. [D2/S1/W-1 (Min: Poor)/Lose any statuses of your choice]</p>
<p><b>Wealth: Poor</b> or less (mandatory): You are too poor to pay the fee the other demands, and you leave. [<em>Envious</em>]</p>`,
	},
	452: {
		index: 452,
		text: `<p>The other is very eager to work with you, and does not demand a fee. "I am eager to practice my magic," he says.</p>
<p><b>No Skill:</b> You get nervous at the word "practice" and decide to seek assistance elsewhere. [S1/Wisdom]</p>
<p><b>Magic:</b> You point out the minor flaws in the other's technique, and he eagerly engages you as a tutor in the ways of sorcerers. Happily, he is endowed with wealth, and you receive great recompense for your lessons. [D2/S1/W+2 (Max: Princely)/You may lose one status of your choice]</p>`,
	},
	453: {
		index: 453,
		text: `<p>"I cannot help you," says the other, "for I am old and weak and not long for this world."</p>
<p><b>No Skill:</b> But the other finds you a kind soul and bequeaths you a magical item in his possession. [D1/S1/<b>Treasure</b>]</p>
<p><b>Wisdom:</b> You recognize his power and beg that he become your tutor. The other is eager to leave his knowledge to a younger person, and he teaches you many secrets, including the secret location of a remarkable place. [D2/S2/<b>Treasure</b>/Opportunity to enter Stonehenge]</p>`,
	},
	454: {
		index: 454,
		text: `<p>The other smiles kindly. "I'm sorry, I do not hire out my talents, and I need nothing anyway."</p>
<p><b>No Skill:</b> You bow your head and go. [S1]</p>
<p><b>Piety:</b> You bow your head and say, "As the Master of All Creation wishes, so shall it be." The other recognizes you as one of great piety, and gives you lessons that you might prosper in your affairs. [D1/S1/Bargaining and Evaluation/You may lose one status of your choice]</p>`,
	},
	455: {
		index: 455,
		text: `<p>You ask the other if he has any wisdom he might share. He responds, "Heh, if it's tales yer interested in... Well, I've those aplenty. Why, I recall..."</p>
<p><b>No Skill:</b> The ramblings are fabulous and imaginative, but not illuminating. [S1/Storytelling]</p>
<p><b>Wilderness Lore:</b> The description of one unique natural feature in one of the tales is familiar from your travels. The tale provides the clue to allow you access to a marvelous place. [D2/S1/Opportunity to enter the City of Brass]</p>`,
	},
	456: {
		index: 456,
		text: `<p>You talk with the other, and he responds, "Let me tell you how I came to be this way, that my life may be a warning to those that seek wisdom."</p>
<p><b>No Skill:</b> You hear the tale, and indeed take its warnings well. [S1/Wisdom]</p>
<p><b>Wisdom:</b> The tale strikes deep into your heart, and a long time after, in a moment of great danger, you recall his words and avoid misfortune. [D2/S1/Wisdom/<em>Blessed</em>]</p>`,
	},
	457: {
		index: 457,
		text: `<p>The other you encounter is so old and decrepit that you can't make out what he says.</p>
<p><b>No Skill:</b> [S1]</p>
<p><b>Quick Thinking:</b> You think to search about for one of the old one's companions, and find one that can translate his mumblings into sense. [D1/S1/Wisdom (1 use)]</p>`,
	},
	458: {
		index: 458,
		text: `<p>He says, "You are brave to come so near. Can I trust you to exact my vengeance upon the evil Vizier who has brought me to this condition?"</p>
<p><b>No Skill:</b> You listen to his tale, and consider the request, but it is too dangerous. In fact, you may have spent too much time talking to the wretched other. [D1/<em>Diseased</em>]</p>
<p><b>Enduring Hardship:</b> The other's tale is so compelling and piteous that it strikes a sad note in your heart, and you are moved to undertake the task. Your plan for vengeance is just and successful, and the Vizier is revealed as corrupt. The Sultan is thankful, and appoints you as the evil Vizier's replacement. [D2/W+2 (Max: Rich)/<em>Vizier</em>]</p>`,
	},
	459: {
		index: 459,
		text: `<p>You gain no information from the hideous other.</p>
<p><b>No Skill:</b> Days later, you notice that people shun you because of the contact you have had with him. [D1/Lose Seduction/<em>Scorned</em>]</p>
<p><b>Luck:</b> Fortunately, no one knows that you have spoken with him, and you come away with both your health and your reputation intact. [D1/S1]</p>`,
	},
	460: {
		index: 460,
		text: `<p>You give the other a sound thrashing, then discover that in your rage you have killed your victim. The local authorities are most displeased and hurl you in a dungeon.</p>
<p><b>No Skill:</b> [D1/S1/<em>Imprisoned</em>]</p>
<p><b>Wisdom, Piety:</b> You are most ashamed and regretful of your precipitous action, and vow to start a new life, forswearing violence. [D2/S2/Choice of Piety or Wisdom/Lose Weapon Use]</p>`,
	},
	461: {
		index: 461,
		text: `<p>Your victim cries out, but none will come to his aid. You laugh as he flees in terror. [S1]</p>`,
	},
	462: {
		index: 462,
		text: `<p>Your victim cries out, and others rush to the cries.</p>
<p><b>No Skill:</b> They rain blows upon you and take the opportunity to rob you as well. [D1/S1/W-2 (Min: Penniless)/<em>Wounded</em>]</p>
<p><b>Courtly Graces, Beguiling:</b> As you continue the beating, you calmly point out to the crowd the crimes of the other. They join you in ministering justice. [D1/S2/Acting and Disguise]</p>
<p><b>Brass Trumpet</b> (mandatory): As you continue to beat your victim, you calmly point out to the crowd the crimes of the other. The peals of the Brass Trumpet do much to persuade the crowd of the truth of your words, and they join you in ministering justice. [D1/S2/Piety]</p>`,
	},
	463: {
		index: 463,
		text: `<p>The victim accepts his abuse with resignation.</p>
<p><b>No Skill:</b> The crowd also approves. Afterwards you discover that the other absconded with your purse! [S1/W-1 (Min: Poor)]</p>
<p><b>Brass Trumpet:</b> Your reasons for this are truly just and approved of by all—including the victim himself and his friends. [D1/S1/Piety/<em>Respected</em>]</p>`,
	},
	464: {
		index: 464,
		text: `<p>After you have finished beating the other, he appears humbled, but you later discover him using your punishment to earn pity, as he continues to beg from the crowd.</p>
<p><b>No Skill:</b> This enrages you, and you beat him again (which only enriches him further). The crowds mock you for your foolishness. [S1/<em>Scorned</em>]</p>
<p><b>Bargaining and Evaluation, Beguiling:</b> You recognize the shrewdness of the other in turning adversity to advantage. You are generous with the other, who becomes your devoted companion, ever-ready with a clever plan to help you. [D1/S1/W+1 (Max: Rich)/Quick Thinking]</p>
<p><b>Brass Trumpet:</b> You draw forth the Brass Trumpet, and its blast convinces the crowds that the other is truly wicked, and they turn away from the other. Justice is served. [D2/S1/Wisdom]</p>`,
	},
	465: {
		index: 465,
		text: `<p>When you finished administering your punishment, your victim eagerly entreats you to continue. Wherever you go, he follows, begging for more "justice."</p>
<p><b>No Skill:</b> You have no idea whether he is mocking you or not, but his yammering is driving you mad! [S1/<em>Insane</em>]</p>
<p><b>Enduring Hardship, Brass Trumpet:</b> You have pity on the poor wretch, who is obviously demented rather than truly evil. You convince another to care for him out of charity. Your reputation is enhanced. [D2/S2/Wisdom/<em>Respected</em>]</p>`,
	},
	466: {
		index: 466,
		text: `<p>"It matters little what you do to me!" your victim cries. "I have a far greater pain to bear!"</p>
<p><b>No Skill:</b> In curiosity you forebear your punishment to listen to his tale of woe. It is wondrous and remarkable, and you learn much from it. [S1/Storytelling]</p>
<p><b>Luck:</b> Most marvelous are the ways of Allah! This is your long lost cousin, stolen by Bedouins at birth! You embrace the other, vowing to shield him from harm. In turn, his bravery is a constant example to you. [D2/S2/Enduring Hardship/<em>Fated</em>]</p>`,
	},
	467: {
		index: 467,
		text: `<p>As you administer your blows, a young noble steps forward and cries, "Stop! Do not hurt this wretched soul!" The ugly one seems most happy, and they speak familiarly to each other.</p>
<p><b>No Skill:</b> You prudently sneak away, lest the noble notice you. [D-1/S1/Wisdom]</p>
<p><b>Storytelling:</b> You sense a mighty tale here and beg to hear it. It is a strange one indeed—for the wretched one is the noble's former lover, cursed by a wicked enchanter to bear this form. You are weeping openly by the tale's end. [D1/S3/<em>Grief Stricken</em>]</p>`,
	},
	468: {
		index: 468,
		text: `<p>Your intervention prevents the ugly other from pressing his perverse suit on a comely youth, who is very grateful to you.</p>
<p><em>If you are of the opposite sex or are Married:</em> The comely youth insists you accept a small gift in gratitude. [D1/W+1 (Max: Respectable)]</p>
<p><em>If you are of the same sex and are not Married:</em> The grateful—and most lovely—youth takes both your hands in his, and leads you to a private place where you spend an evening in most pleasant play.</p>
<p><b>No Skill:</b> The skills of the other are most remarkable, and you are exhausted by your love-play. When the morning comes, though, he is gone. [S1/Seduction]</p>
<p><b>Appearance:</b> When the dawn comes, you find love growing between you like wildflowers. [D2/S2/<em>Beloved</em>]</p>`,
	},
	469: {
		index: 469,
		text: `<p>You see the ugly one sneak to the window of a nearby house and speak briefly to a beautiful girl within.</p>
<p><b>No Skill:</b> You can't hear what is being said. Your curiosity is aroused and you follow the other, but he manages to elude you. [S1]</p>
<p><b>Stealth and Stealing:</b> You craftily move closer and overhear the conversation. The ugly one is a servant of a man you know to be a rogue and peasant, and the other is arranging the assignation of his master with the beautiful girl! Horrified, you reveal the plot to the girl's father, who rewards you gratefully and punishes the daughter and the ugly servant. [D1/S2/W+1 (Max: Respectable)]</p>`,
	},
	470: {
		index: 470,
		text: `<p>To your amazement, you see the beggarly one enter the palace of the Prince of the Faithful. You hurry to inform the guards, who bring you before the Sultan himself. Immediately you recognize him as the beggar you followed! "It is my sport," he says, "to travel among the people as a beggar—but you alone have penetrated the disguise. In return for your silence I offer you my hospitality."</p>
<p><b>No Skill:</b> You apologize for your curiosity, and enjoy a night of revel at the Sultan's expense. [D1/S1/<em>Blessed</em>]</p>
<p><b>Courtly Graces:</b> You spend an evening in pleasant discourse with him, and he is moved by your sagacity. "Never have I come across one so wise! I would have you near me as my trusted advisor." [D2/S2/<b>Robe of Honor</b>/<em>Vizier</em>]</p>`,
	},
	471: {
		index: 471,
		text: `<p>The other notices you following him, turns, and spits curses at you.</p>
<p><b>No Skill:</b> The crowd jeers at your embarrassment. [S1/<em>Scorned</em>]</p>
<p><b>Magic:</b> The other notices you following, turns, and spits curses at you. You note the subtle hand-gestures of an incantation, and with your own magic turn his enchantment aside. The other is revealed as a wicked enchanter, and the passers-by aid you in administering his punishment. [D2/S2/<em>Respected</em>]</p>`,
	},
	472: {
		index: 472,
		text: `<p>The other you follow seems furtive and suspicious, and you keep a close eye on him.</p>
<p><b>No Skill:</b> You follow him for most of the day. Toward evening he turns to you and laughs. "I hope you've had a pleasant day—fool!" Smoothly, he disappears into the gloom. [D-1/S1]</p>
<p><b>Beguiling, Stealth and Stealing:</b> The other wanders about for hours. You realize that the other has noticed you and is leading you on a merry chase. You seize him and, in righteous anger, administer unto him a sound beating for his impudence. You are the hand of Allah's will. [D1/S1/Piety]</p>`,
	},
	473: {
		index: 473,
		text: `<p>The other slips into a house, and emerges moments later with two silver candlesticks and other loot. You've caught a thief red-handed.</p>
<p><b>No Skill:</b> You grab him and wake the owner of the house, who rewards you for your aid. [D1/S1/W+1 (Max: Respectable)]</p>
<p><b>Stealth and Stealing:</b> You force him to share the take. Impressed with your skill, the other joins forces with you on many other robberies, and your partnership is profitable. [D1/S1/W+2 (Max: Rich)/Stealth and Stealing]</p>`,
	},
	474: {
		index: 474,
		text: `<p>The other spies you following him and cries out in a guttural tongue. Instantly you are surrounded by evil-smelling ruffians.</p>
<p><b>No Skill:</b> They beat you horribly and rob you, but by the grace of Allah you are not killed. [S1/W-2 (Min: Poor)/<em>Wounded</em>]</p>
<p><b>Weapon Use:</b> Swiftly you draw forth your sword and lay about you in all directions. The ruffians are not used to fighting those who can defend themselves. Soon, two lie dead on the ground and the others are fleeing in terror. [D2/S1/Weapon Use]</p>`,
	},
	475: {
		index: 475,
		text: `<p>You trail the other to a secret place where he meets with others of his kind to plot some sort of mischief.</p>
<p><b>No Skill:</b> You are seen before you can overhear their plans! You flee, and one of their number chases after you. [D1/S1/<em>Pursued</em> (THIEF)]</p>
<p><b>Acting and Disguise:</b> You disguise yourself as one of the band and enter the house to hear their conversation. You learn that they are hirelings of a wicked Vizier who have been ordered to kidnap the Sultan that their master might take his place! You warn the Sultan, and the whole band dance on the gallows before day's end. In gratitude, the Sultan offers you the place of the Vizier. [D2/S2/<em>Vizier</em>]</p>
<p><b>Brass Trumpet</b> (mandatory): As you draw near, the Brass Trumpet sounds a cry of alarm. The rogues scatter, but the city guards, alerted by the trumpet-blast, catch them easily. With your testimony, they are convicted of plotting terrible deeds, and are sorely punished. You are rewarded for your role. [D2/S2/W+1 (Max: Rich)/<b>Robe of Honor</b>]</p>`,
	},
	476: {
		index: 476,
		text: `<p>The other is beset by robbers! With surprising strength, he hurls the first of them to the ground—then the rest are upon him.</p>
<p><b>No Skill:</b> Alone, he is no match for so many, and he is overwhelmed. After the ruffians are gone you tend to his wounds. As he recovers, he tells you he is a rich merchant traveling incognito, and the robbers have made off with a handful of valuable gems. [D-1/S2]</p>
<p><b>Weapon Use:</b> You cannot stand by and watch as the other is attacked, and you throw yourself into the fray! The other is a mighty fighter, and with your help the robbers are driven off. The one you save is a rich merchant in disguise, and he rewards you with a gem as large as a horse's eye! [D2/S2/W+1 (Max: Princely)]</p>`,
	},
	477: {
		index: 477,
		text: `<p>The other responds well to the interest you show and invites you to his humble abode to meet his wise and aged grandmother.</p>
<p><b>No Skill:</b> The grandmother is as wise as the other said, and she offers you much sound advice. [D1/S1/Choice of Wisdom or Storytelling]</p>
<p><b>Appearance:</b> The grandmother stares at you and intones, "You are most beautiful, and you have in your eyes the look of greatness. It is fortunate that you have come here." She tells you a remarkable tale. [D2/S1/<em>Fated</em>]</p>`,
	},
	478: {
		index: 478,
		text: `<p>The other is happy for your kindness and brings you to a place where friends meet to spin yarns.</p>
<p><b>No Skill:</b> You spend a thoroughly enjoyable evening with the friends of the other. [S2]</p>
<p><b>Storytelling, Acting and Disguise:</b> Your tales are the best of the evening. You are brought before the Sultan, who has been visiting the inn while disguised as a humble merchant! Pleased with your stories, he invites you to the palace. [D2/S2/Storytelling/<b>Robe of Honor</b>]</p>`,
	},
	479: {
		index: 479,
		text: `<p>The other takes note of you following him. He turns and speaks words in a harsh voice, then disappears in a cloud of foul smoke!</p>
<p><b>No Skill:</b> You suspect that you have encountered an enchanter or 'efreet, and go on your way, marveling at the wonders of the world. [S1]</p>
<p><b>Luck:</b> Later that week you happen to spy the other wandering in a market. Knowing his magical powers, you approach him. [Have an immediate encounter with a Kindly 'Efreet (Matrix M)]</p>`,
	},
	480: {
		index: 480,
		text: `<p>Before you can come close to the other, he is set upon by ruffians.</p>
<p><b>No Skill:</b> Afraid of becoming involved, you hang back. Soon the other lies moaning on the ground, lamenting his fate. You are wracked with guilt for your inaction. [D-1/S1/<em>Grief Stricken</em>]</p>
<p><b>Piety</b> (mandatory): In a burst of mercy, you rush forward to his aid, but the ruffians are too strong for both of you, and you suffer for your pious act. [D2/S1/W-1 (Min: Poor)/Piety/<em>Wounded</em>]</p>`,
	},
	481: {
		index: 481,
		text: `<p>As you see the other limp painfully along, you are overwhelmed with sympathy. You rush forward and share your wealth with the other, who is profoundly moved and grateful. [D2/S1/W-2 (Min: Penniless)/<em>Blessed</em>]</p>`,
	},
	482: {
		index: 482,
		text: `<p>The other turns. Meeting your eyes, he invites you to accompany him for a fine meal at his dwelling, and you feel a strange compulsion to accept.</p>
<p><b>No Skill:</b> You are lead to a sleazy hovel. Inside, twenty men with red turbans sit around a brightly burning flame. You realize they are evil Magian fire-worshippers! You cannot resist their demonic enchantments. [D1/<em>Ensorcelled</em>]</p>
<p><b>Scholarship:</b> From your studies, you recognize the symbol on the other's red turban as the secret sign of the evil Magian fire-worshippers! You resist the compulsion but allow the other to lead you to his hovel. Once there, you flee and warn the Sultan. [D1/S2/Quick Thinking]</p>
<p><b>Brass Trumpet</b> (mandatory): The trumpet's blaring sound breaks the hold the stranger has on you and the other flees in fright. [S1]</p>`,
	},
	483: {
		index: 483,
		text: `<p>The other turns and greets you with a soft and soothing voice. You feel your attention drifting.</p>
<p><b>No Skill:</b> Soon you bow down before him, saying, "Hearkening and obedience, O my Master." [D1/<em>Enslaved</em>]</p>
<p><b>Magic, Brass Trumpet:</b> You realize that he is an Oriental enchanter and pretend to be mesmerized. The other requires your aid to gain access to a magical treasure, but you slay the infidel and take his maps. [D2/S2/Acting and Disguise/Opportunity to enter the Cave of Wonders]</p>`,
	},
	484: {
		index: 484,
		text: `<p>You are led to a desolate place. Suddenly, he turns to face you and grows enormously! The one you followed stands revealed as an 'efreet! [Have an immediate encounter with an All-Powerful 'Efreet (Matrix M)]</p>`,
	},
	485: {
		index: 485,
		text: `<p>You watch and listen as the other speaks to himself—in two different voices! You realize he is possessed!</p>
<p><b>No Skill:</b> You mumble a prayer to Allah—through Whom all things are possible—for his deliverance from this foul fate. [D1/Piety]</p>
<p><b>Magic:</b> You know how to break the curse, though it is difficult. The other is revealed as a traveling merchant, penniless and lost far from home. You piously offer him hospitality and guidance. In gratitude, he offers you a gift. [D2/S2/Piety/<b>Treasure</b>]</p>`,
	},
	486: {
		index: 486,
		text: `<p>You have chosen the other as a target and follow him across town. When you come to a deserted spot, the other turns and gestures at you.</p>
<p><b>No Skill:</b> It's a trap! The other's accomplices beat and rob you. [D1/W-2 (Min: Penniless)/<em>Wounded</em>]</p>
<p><b>Stealth and Stealing:</b> You realize from long experience that the other intends to rob you, and you avoid the ambush. [D1/S1/Choice of Quick Thinking or Wisdom]</p>
<p><b>Brass Trumpet</b> (mandatory): The warning note of the Brass Trumpet sounds, alerting you to the bandits hidden around you. When they hear the trumpet, they flee, leaving you safely alone. [D1/S1]</p>`,
	},
	487: {
		index: 487,
		text: `<p>With surprising strength, he wrests your weapon from you.</p>
<p><b>No Skill:</b> The other wounds you with it and makes his escape. [D1/<em>Wounded</em>]</p>
<p><b>Quick Thinking:</b> You cry out, "Help, I am being robbed!" Your ruse fools several passers-by, who "come to your aid" and subdue him. You thank them and quietly relieve the unconscious one of his purse. [D1/S1/W+1 (Max: Respectable)/Beguiling]</p>
<p><b>Weapon Use</b> (mandatory): You panic, draw a dagger, and slay him, but you were seen committing the crime, and are pursued by the local guards. [D1/<em>Outlaw</em>]</p>`,
	},
	488: {
		index: 488,
		text: `<p>You succeed easily. The other was far more wealthy than he appeared, and you make a fine haul!</p>
<p><b>No Skill:</b> While attempting to sell one of the items you obtained, you are captured and brought before the Prince of the Faithful. Some of the items were originally stolen from him! You are found guilty of stealing from the Sultan and are harshly punished, thrown in prison, and barred from the court. [D1/S1/<em>Imprisoned</em>/Lose Courtly Graces]</p>
<p><b>Scholarship, Courtly Graces:</b> You recognize upon one of the items the seal of the Sultan. You prudently deliver both the wealth and the thief to the Sultan, who rewards you handsomely. [D2/S2/W+1 (Max: Rich)/Wisdom]</p>`,
	},
	489: {
		index: 489,
		text: `<p>You easily take the other's purse. Weeping, he begs you to return it, as he needs that money to woo a lover.</p>
<p><b>No Skill:</b> You laugh at this feeble excuse and count the small wealth you have gained. [D-1/S1/W+1 (Max: Respectable)]</p>
<p><b>Seduction, Storytelling:</b> Your soul is stirred by the other's tale, and you return his purse and offer to help him. It seems his project is hopeless, though, for he is exceedingly ugly.</p>
<p><em>Roll one die, adding one for Appearance:</em></p>
<p>1–3: You do your best, but the other's suit fails. But what a tale! [D1/S2/Storytelling]</p>
<p>4+: You succeed!</p>
<p><em>If you are not Married:</em> Passion, like a plague, spreads from mouth to mouth, and you have spent too long in the company of the other—for you have fallen for a beauteous youth who is the lover's best friend! You do not cease from assisting the other, but press your court on his friend most ardently. [D2/S2/<em>Love Struck</em>]</p>
<p><em>If you are Married:</em> You know some tricks of beauty, and teach them to the other. With your determined assistance, he presses his suit, and to your amazement, his love is returned in kind! He blesses you for your aid, and you go on your way knowing you have done a great deed. [D2/S2/<em>Blessed</em>]</p>`,
	},
	490: {
		index: 490,
		text: `<p>You knock down your victim and start rifling though his garments while the other weeps piteously.</p>
<p><b>No Skill:</b> You become overcome with revulsion for your deed. You fall to your knees and vow to purify yourself. [D2/S1/Piety/<em>On Pilgrimage</em>]</p>
<p><b>Stealth and Stealing, Bargaining and Evaluation:</b> You pity your victim, but your heart is hardened against pity. [D1/W+1 (Max: Respectable)]</p>`,
	},
	491: {
		index: 491,
		text: `<p>The pitiful other is an easy mark, but penniless. You vow to pick your victims with more care in the future. [D-1/Wisdom]</p>`,
	},
	492: {
		index: 492,
		text: `<p>As you gaze at the your pathetic victim sitting in sorrow on the ground before you, you are overcome with shame. You find yourself showering alms upon the wretch you were to rob.</p>
<p><b>No Skill:</b> The other goggles at the money, then takes it and flees, not badly hurt. [D1/W-1 (Min: Poor)]</p>
<p><b>Luck:</b> Amazingly, the wretch turns out to be the eldest child of the Sultan, traveling in disguise and fallen on very hard times! Your generous action has touched his heart, and he invites you to share the hospitality of his father's court. [D2/S2/W+1 (Max: Respectable)/<b>Robe of Honor</b>]</p>`,
	},
	493: {
		index: 493,
		text: `<p>The other turns and sees you. Mistaking your intentions (as well as your identity), he cries out gladly and wraps his arms around you. Annoyingly, he follows you about for the rest of the day, chattering about his family. You have no idea how to get rid of him.</p>
<p><b>No Skill:</b> You cannot get him to leave you alone! Insanity and misfortune are embodied in this prattling jackanapes! [D1/<em>Insane</em>/<em>Accursed</em>]</p>
<p><b>Courtly Graces:</b> You gracefully extract yourself without harming the other's feelings. [D1/S1]</p>`,
	},
	494: {
		index: 494,
		text: `<p>Your victim spends a lot of time muttering to himself. You make off with his purse, and he doesn't even notice. Unfortunately, the purse comes with more than just gold—you take ill soon after. [S1/W+1 (Max: Poor)/<em>Diseased</em>]</p>`,
	},
	495: {
		index: 495,
		text: `<p>Your victim notices you trying to lift his purse. With giggles, he hands over the purse and a concealed pouch that you had not even noticed!</p>
<p><b>No Skill:</b> As he wanders off jauntily, you wonder about his mental health. [S1/W+1 (Max: Poor)]</p>
<p><b>Quick Thinking:</b> Realizing that one should not let a good thing slip past too easily, you encourage the other to bring you to his dwelling, where you help yourself to most of his valuables. [S2/W+1 (Max: Respectable)]</p>`,
	},
	496: {
		index: 496,
		text: `<p>As your hands fall upon the other's purse he turns and stares at you. You stare into his eyes, which are pools of dark fire, and you feel yourself falling.</p>
<p><b>No Skill:</b> You stagger back, your mind reeling in pain. [D1/<em>Insane</em>]</p>
<p><b>Weapon Use:</b> You respond instinctively with your sword. You slay the other, but his body turns into a huge, raging beast. You slay the beast, and it is transformed into a beautiful maiden, who smiles most brightly at you.</p>
<p><em>You can slay the maiden or refrain:</em></p>
<p><em>If you refrain:</em> She smiles and gestures. You hear a loud *poof* and feel... changed. [D1/<em>Beast Form</em>]</p>
<p><em>If you slay the maiden:</em> There is final transformation: before you stands a hairless ape, who bows and greets you with kind and generous words. [D2/S2/Determined/<b>Hairless Ape</b>]</p>`,
	},
	497: {
		index: 497,
		text: `<p>You easily rob your victim. To your amazement, his pockets are filled with huge treasures! As you remove them, a bright glow envelops you.</p>
<p><b>No Skill:</b> Moments later you wake as if from a dream to find that you have nothing. And to top it off, the other has robbed you! [S2/W-2 (Min: Beggar)]</p>
<p><b>Magic:</b> You realize that all this is a dream brought on by the other's enchantments. You break free with a shudder—and flee. [D2/Wisdom/Determined]</p>`,
	},
	498: {
		index: 498,
		text: `<p>You notice the strange bead the other wears around his neck and realize that it possesses powerful magical properties!</p>
<p><b>No Skill:</b> You do not dare to steal from the powerful stranger. [D-1/S1]</p>
<p><b>Beguiling:</b> You convince the other that you are a powerful sorcerer and "discover" a terrible curse on his bead. He is quite eager for you to take it. [D1/S2/Acting and Disguise/<b>Magic Bead</b>]</p>
<p><b>Seduction</b> (if opposite sex), <b>Appearance:</b> It is a simple matter to provide the other with a few hours of entertainment (no matter how unpleasant he is) and obtain the bead as a present. [D1/S1/<b>Magic Bead</b>]</p>`,
	},
	499: {
		index: 499,
		text: `<p>The object of your benevolence takes your coin and says, "Come, let me buy you a drink!"</p>
<p><b>No Skill:</b> You spend a joyful hour delighting in his many ribald tales. [S1/Storytelling]</p>
<p><b>Luck:</b> As you drink together the other tells you many tales. To your great surprise, the other is very knowledgeable, and his tales contain valuable knowledge you have been searching for on the location of a strange place. [D1/S1/Opportunity to enter the Haunted House]</p>`,
	},
};
