// let translation = [];
// translation[0]= {word:"apple" emoji: "🍎"}

//How to straight copy:
// document.getElementsByClassName('textField')[0].onchange = function(e){
// 	document.getElementsByClassName('textField')[1].value =
// 	document.getElementsByClassName('textField')[0].value;
// }

let dictionary = [
	{word: "apple", emoji="🍎"}, 
	{word: "cat", emoji="🐈"}, 
]
	
let userInput = document.getElementsByClassName('textField')[0];
let output = document.getElementsByClassName('textField')[1];	


document.getElementsByClassName('textField')[0].onchange = function(){
	let split=userInput.value.split(" ");
	split.map(function(wordTranslate){
		let translation=dictionary.filter(words => {
			return (words.word == wordTranslate)
		});
		
	})
}

// document.getElementsByClassName('textField')[0].onchange = function(e){
// 	document.getElementsByClassName('textField')[1].value =
// 	document.getElementsByClassName('textField')[0].value.split();
// }


