var words = ['impress', 'calm', 'company', 'hissing', 'suit', 'stage', 'behavior', 'guttural', 'trashy', 'selection', 'throat', 'earn', 'impulse', 'nebulous', 'trip', 'wide', 'straw', 'cooing', 'desert', 'pocket', 'smiling', 'tickle', 'wistful', 'ahead', 'spicy', 'cumbersome', 'wandering', 'separate', 'plug', 'daily', 'drown', 'spoil', 'rice', 'wire', 'wonder', 'disarm', 'month', 'tremendous', 'protective', 'burst', 'chunky', 'tow', 'sneeze', 'moan', 'island', 'theory', 'start', 'rhyme', 'wrong', 'towering', 'squalid', 'handsomely', 'sturdy', 'thing', 'polish', 'scared', 'ambiguous', 'impolite', 'lowly', 'expert', 'inquisitive', 'frighten', 'reach', 'employ', 'gigantic', 'tawdry', 'successful', 'receptive', 'round', 'bitter', 'subdued', 'admit', 'fire', 'bustling', 'stiff', 'marble', 'strip', 'government', 'soup', 'suggestion', 'sin', 'locket', 'achiever', 'craven', 'curl', 'tub', 'letters', 'economic', 'outstanding', 'ball', 'sneaky', 'battle', 'torpid', 'sized', 'roll', 'watch', 'bumpy', 'crazy', 'trite', 'ink', 'fresh', 'tour', 'top', 'thoughtless', 'trees', 'grin', 'bleach', 'chance', 'military', 'surround', 'grain', 'educated', 'orange', 'smell', 'hallowed', 'rat', 'grade', 'acrid', 'risk', 'evanescent', 'wiry', 'pricey', 'colorful', 'cover', 'trap', 'potato', 'view', 'oil', 'extend', 'scattered', 'thoughtful', 'willing', 'uneven', 'even', 'ripe', 'stick', 'apparatus', 'please', 'second', 'tongue', 'changeable', 'belong', 'wax', 'argument', 'irritating', 'paste', 'payment', 'sort', 'straight', 'cable', 'fish', 'baseball', 'bait', 'entertain', 'sleepy', 'gorgeous', 'common', 'youthful', 'immense', 'better', 'grateful', 'remarkable', 'lucky', 'country', 'berry', 'flippant', 'dear', 'dolls', 'flock', 'tense', 'didactic', 'glove', 'thankful', 'sweet', 'equal', 'defiant', 'box', 'cows', 'owe', 'descriptive', 'pretend', 'disillusioned', 'imported', 'fowl', 'exercise', 'color', 'ask', 'lethal', 'leg', 'poor', 'money', 'shake', 'jump', 'sweltering', 'raspy', 'habitual', 'range', 'push', 'mate', 'wonderful', 'utter', 'misty', 'cloth', 'pollution', 'dynamic', 'enchanted', 'work', 'funny', 'cultured', 'queen', 'typical', 'momentous', 'tumble', 'coil', 'overjoyed', 'page', 'thundering', 'machine', 'whimsical', 'lonely', 'teeny', 'class', 'symptomatic', 'ruddy', 'elfin', 'ship', 'jaded', 'fertile', 'silver', 'blush', 'familiar', 'teeth', 'supply', 'succinct', 'grip', 'town', 'lamp', 'friend', 'delightful', 'insect', 'solid', 'airplane', 'breath', 'team', 'unsightly', 'ghost', 'oven', 'cherry', 'friendly', 'bent', 'servant', 'permissible', 'serious', 'kick', 'tree', 'veil', 'bathe', 'salt', 'shirt', 'film', 'wall', 'shelf', 'underwear', 'spectacular', 'horse', 'upbeat', 'apparel', 'boundary', 'decisive', 'observant', 'pushy', 'aggressive', 'name', 'song', 'nail', 'coordinated', 'ratty', 'imperfect', 'skirt', 'dry', 'nasty', 'chew', 'offer', 'plough', 'scare', 'maddening', 'strange', 'stir', 'deeply', 'lamentable', 'fearless', 'cagey', 'fantastic', 'toothsome', 'skin', 'ultra', 'physical', 'ubiquitous', 'tame', 'extra', 'string', 'exist', 'rod', 'vest', 'lumpy', 'wrench', 'scale', 'tramp', 'spot', 'dapper', 'direful', 'tiger', 'cat', 'screeching', 'deceive', 'lock', 'bridge', 'weak', 'dress', 'understood', 'dam', 'add', 'low', 'knit', 'conscious', 'bang', 'decision', 'aloof', 'boy', 'gray', 'alive', 'brash', 'stay', 'gate', 'suggest', 'beam', 'clam', 'spare', 'combative', 'billowy', 'young', 'obsequious', 'brown', 'sugar', 'auspicious', 'eatable', 'abrupt', 'death', 'chop', 'float', 'intend', 'bat', 'maniacal', 'income', 'warlike', 'quick', 'gusty', 'purring', 'earthquake', 'children', 'exultant', 'arm', 'humor', 'aspiring', 'obtain', 'fruit', 'endurable', 'peace', 'aftermath', 'fair', 'stingy', 'story', 'moor', 'plastic', 'knee', 'dusty', 'dance', 'best', 'drawer', 'fail', 'whirl', 'attractive', 'discover', 'acoustics', 'flavor', 'finger', 'dull', 'careful', 'treatment', 'rotten', 'complete', 'precious', 'perpetual', 'curtain', 'robust', 'fly', 'guarded', 'lean', 'unarmed', 'seed', 'ethereal', 'whistle', 'wary', 'icky', 'current', 'grass', 'fretful', 'admire', 'scissors', 'deadpan', 'rigid', 'cuddly', 'discreet', 'hard', 'serve', 'statuesque', 'tooth', 'industry', 'arithmetic', 'wilderness', 'suppose', 'clumsy', 'hypnotic', 'rich', 'parsimonious', 'abusive', 'jail', 'fierce', 'two', 'optimal', 'acoustic', 'beginner', 'short', 'nose', 'kiss', 'board', 'versed', 'form', 'frantic', 'ring', 'gold', 'avoid', 'itchy', 'explain', 'pear', 'like', 'ground', 'authority', 'tranquil', 'absurd', 'crush', 'mighty', 'yak', 'horn', 'paint', 'joke', 'enjoy', 'post', 'phone', 'mysterious', 'null', 'holiday', 'ocean', 'super', 'disappear', 'territory', 'repeat', 'loutish', 'hall', 'hour', 'hands', 'goofy', 'ugliest', 'obey', 'knot', 'development', 'year', 'cake', 'visitor', 'stranger', 'astonishing', 'coach', 'fancy', 'cruel', 'channel', 'umbrella', 'grab', 'psychotic', 'eminent', 'naive', 'verse', 'strap', 'necessary', 'escape', 'heal', 'haunt', 'dizzy', 'well', 'guide', 'root', 'zinc', 'wreck', 'interest', 'fairies', 'rescue', 'big', 'somber', 'material', 'promise', 'memorize', 'hop', 'wait', 'addition', 'naughty', 'wrist', 'fireman', 'jelly', 'face', 'desk', 'bow', 'clover', 'deliver', 'reflective', 'fat', 'crash', 'upset', 'dysfunctional', 'noxious', 'heavy', 'plan', 'legs', 'trace', 'absorbing', 'psychedelic', 'unfasten', 'value', 'opposite', 'violet', 'pack', 'near', 'glossy', 'count', 'language', 'nostalgic', 'mere', 'communicate', 'wacky', 'rabbit', 'fabulous', 'crate', 'button', 'married', 'warn', 'meat', 'hurried', 'dinner', 'wrap', 'pie', 'green', 'match', 'needy', 'full', 'call', 'squash', 'superb', 'boiling', 'engine', 'tired', 'route', 'superficial', 'ice', 'tangible', 'living', 'bike', 'march', 'damp', 'hand', 'half', 'zoo', 'curvy', 'spell', 'shoes', 'join', 'oceanic', 'precede', 'word', 'tart', 'important', 'complex', 'minute', 'trucks', 'stretch', 'clip', 'person', 'husky', 'oatmeal', 'uppity', 'telling', 'drunk', 'girls', 'structure', 'fall', 'swim', 'unkempt', 'cycle', 'wish', 'milky', 'quickest', 'sign', 'chivalrous', 'irate', 'terrify', 'direction', 'chilly', 'thaw', 'bottle', 'peel', 'possess', 'cars', 'groan', 'jittery', 'release', 'violent', 'whip', 'slap', 'retire', 'list', 'wink', 'grotesque', 'property', 'stare', 'old', 'efficacious', 'redundant', 'handy', 'busy', 'mailbox', 'scold', 'seemly', 'canvas', 'thank', 'suck', 'distance', 'stuff', 'abnormal', 'sniff', 'exchange', 'puny', 'relation', 'receipt', 'honey', 'early', 'breathe', 'prose', 'leather', 'vacation', 'approve', 'abaft', 'yoke', 'basket', 'tip', 'carriage', 'educate', 'coherent', 'coast', 'move', 'swift', 'futuristic', 'motion', 'pies', 'jog', 'defective', 'number', 'spiritual', 'boring', 'used', 'scream', 'power', 'paper', 'rough', 'wealthy', 'enchanting', 'cast', 'trust', 'haircut', 'appear', 'hate', 'land', 'fast', 'tent', 'fax', 'mountainous', 'station', 'yellow', 'step', 'neck', 'shame', 'muscle', 'transport', 'rustic', 'possessive', 'nonstop', 'grubby', 'discussion', 'godly', 'absorbed', 'easy', 'fluffy', 'huge', 'run', 'tacky', 'salty', 'rightful', 'wasteful', 'laugh', 'apologise', 'keen', 'concern', 'squeeze', 'reign', 'alert', 'terrible', 'brick', 'support', 'subsequent', 'grumpy', 'bag', 'cherries', 'polite', 'gaudy', 'picture', 'practice', 'rude', 'pause', 'place', 'mine', 'trot', 'blink', 'dinosaurs', 'moon', 'homely', 'profuse', 'slimy', 'announce', 'wipe', 'bored', 'passenger', 'sprout', 'jumbled', 'murder', 'measly', 'humorous', 'sofa', 'slippery', 'yard', 'poke', 'greet', 'kill', 'aboard', 'calculator', 'vessel', 'maid', 'future', 'third', 'boil', 'tasteless', 'error', 'baby', 'clear', 'butter', 'ruin', 'steady', 'sense', 'tray', 'quilt', 'space', 'eyes', 'mellow', 'tight', 'delay', 'placid', 'decide', 'reward', 'productive', 'silly', 'flame', 'mouth', 'basin', 'whisper', 'cabbage', 'truthful', 'multiply', 'roof', 'boundless', 'produce', 'silk', 'abiding', 'scarce', 'scrub', 'berserk', 'forgetful', 'animated', 'drain', 'duck', 'unadvised', 'fold', 'wine', 'adaptable', 'known', 'outrageous', 'zoom', 'zesty', 'arrest', 'reduce', 'bright', 'imaginary', 'giants', 'learn', 'slip', 'hose', 'introduce', 'long', 'dad', 'nimble', 'jeans', 'club', 'pine', 'flap', 'edge', 'hellish', 'confused', 'flag', 'cough', 'shrill', 'six', 'plausible', 'temporary', 'honorable', 'historical', 'pancake', 'detect', 'pleasure', 'rhythm', 'graceful', 'scrape', 'clap', 'powerful', 'ants', 'bizarre', 'peck', 'uttermost', 'launch', 'impartial', 'cross', 'fang', 'oranges', 'argue', 'cemetery', 'sweater', 'vanish', 'education', 'truculent', 'victorious', 'purpose', 'travel', 'park', 'broad', 'depressed', 'calculate', 'penitent', 'tiny', 'satisfying', 'crib', 'nutty', 'iron', 'mug', 'tedious', 'temper', 'miniature', 'adjustment', 'bashful', 'lame', 'tacit', 'spiteful', 'moaning', 'lake', 'mint', 'crime', 'acid', 'heat', 'plucky', 'advise', 'skate', 'trail', 'reply', 'tap', 'rambunctious', 'flash', 'continue', 'workable', 'useful', 'bells', 'open', 'bite', 'stimulating', 'questionable', 'real', 'develop', 'claim', 'earthy', 'adjoining', 'eyed', 'mark', 'good', 'spotty', 'burly', 'normal', 'attract', 'disturbed', 'scribble', 'woman', 'gullible', 'representative', 'cow', 'secretary', 'curved', 'gaping', 'woebegone', 'man', 'grieving', 'slow', 'record', 'narrow', 'sticks', 'longing', 'flower', 'wretched', 'flagrant', 'twist', 'faded', 'harmonious', 'aquatic', 'foamy', 'consider', 'sedate', 'prick', 'press', 'infamous', 'relax', 'mammoth', 'cave', 'fry', 'exuberant', 'driving', 'three', 'scene', 'insidious', 'stew', 'reading', 'wakeful', 'cushion', 'delight', 'church', 'substance', 'crowd', 'humdrum', 'whispering', 'harm', 'smash', 'manage', 'needle', 'refuse', 'guitar', 'plot', 'curious', 'disagree', 'frogs', 'debt', 'concentrate', 'collect', 'vase', 'peaceful', 'worried', 'glib', 'melodic', 'jazzy', 'capable', 'plate', 'attend', 'jolly', 'waste', 'flesh', 'swanky', 'bone', 'light', 'dare', 'label', 'nifty', 'confuse', 'spooky'];

function newPass() {
	//get 2 random word out of the above array
	var randWord1 = words[Math.floor(Math.random() * words.length)]	
	var randWord2 = words[Math.floor(Math.random() * words.length)]
	//get random 4 digit number
	var randNum = Math.floor(1000 + Math.random() * 9000);

	// Ensure word 1 ≠ word 2
	if (randWord1 == randWord2) {
		newPass();
		return;
	}

	//Combine word 1, word 2 and 3 digit number
	var pass = titleCase(randWord1) + titleCase(randWord2) + randNum;

	//Test password length, for a more secure password
	if (pass.length < 15) {
		newPass();
		return;
	}
			
	document.getElementById("pass").value = pass;
	
	document.getElementById("messageBox").value = "";
}

//Title case both words in password
function titleCase(word) {
	return (word.charAt(0).toUpperCase() + word.slice(1));
}

// Generate a username based on first/last names
function newUsername() {
	let firstName = document.getElementById("firstName").value;		
	let lastName = document.getElementById("lastName").value;
	let username = "";
	
	// Reset a few things
	document.getElementById("firstName").style.border = '1px solid #ccc';
	document.getElementById("lastName").style.border = '1px solid #ccc';
	document.getElementById("userError").innerHTML="";
	
	const names = document.querySelectorAll('.name');
	
	//Make username FLas or FILA, depending on last name length
	if (lastName.length > 2) {
		username = firstName.charAt(0).toUpperCase() + lastName.slice(0, 3).toUpperCase();
	} else if (lastName.length == 2) {
		username = firstName.slice(0, 2).toUpperCase() + lastName.slice(0, 2).toUpperCase();
	}
	
	//error checks for username
	if (username.length != 4) {				
		username = "";
				
		//no first name
		if (firstName.length < 1) {
			document.getElementById("firstName").style.border = '1px solid red';
			
			document.getElementById("userError").innerHTML="Please input first name.";
		}
		
		//last name too short
		if (lastName.length < 2) {
			//and no first name
			if (firstName.length < 1) {
				document.getElementById("firstName").style.border = '1px solid red';
				document.getElementById("lastName").style.border = '1px solid red';				
			
				document.getElementById("userError").innerHTML="Please input first name and last name.";
			} else {
				document.getElementById("lastName").style.border = '1px solid red';
			
				document.getElementById("userError").innerHTML="Last name too short.";
			}
		}
		
		//person has a short last name
		if (lastName.length == 2) {
			//but first name too short
			if (firstName.length < 2) {
				document.getElementById("firstName").style.border = '1px solid red';
				document.getElementById("lastName").style.border = '1px solid red';
				
				document.getElementById("userError").innerHTML="A last name of two letters requires a first name of at least two letters.";
			}
		}
	}
	
	document.getElementById("username").value = username;
	
	document.getElementById("messageBox").value = "";
}

function textMessage() {			
	//ensure password is long for more secure
	if (pass.value.length < 15) {
		newPass();
	}
	
	//if username happens to be too short, restart function
	if (username.value.length < 4) {
		newUsername();
		document.getElementById("messageBox").value = "";
	} else {	
		//generate text message
		var  message = "Hello " + firstName.value.charAt(0).toUpperCase() + firstName.value.slice(1,99).toLowerCase() + ", your username is " + username.value.toUpperCase() + " and your password is " + pass.value;
	
		document.getElementById("messageBox").value = message;
	}
}

function copyToClipboard() {
	var copyText = document.getElementById("messageBox");

	copyText.select();
	copyText.setSelectionRange(0, 99999);

	navigator.clipboard.writeText(copyText.value);
}

function clearForm() {
	document.getElementById("firstName").style.border = '1px solid #ccc;';
	document.getElementById("lastName").style.border = '1px solid #ccc;';
	document.getElementById("userError").innerHTML=""
	
	document.getElementById("firstName").value = "";
	document.getElementById("lastName").value = "";
	document.getElementById("username").value = "";
	document.getElementById("pass").value = "";	
	document.getElementById("messageBox").value = "";
}