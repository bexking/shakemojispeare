// let translation = [];
// translation[0]= {word:"apple" emoji: "🍎"}

//How to straight copy:
// document.getElementsByClassName('textField')[0].onchange = function(e){
// 	document.getElementsByClassName('textField')[1].value =
// 	document.getElementsByClassName('textField')[0].value;
// }

let dictionary = [
	{word: "apple", emoji: "🍎"},
	{word: "cat", emoji: "🐈"} 
];
	
let userInput = document.getElementsByClassName('textField')[0];
let output = document.getElementsByClassName('textField')[1];	

function wordTranslate(wordToTranslate){
	let translation=dictionary.filter(words => {
		return (words.word == wordToTranslate)
	});
	return translation[0].emoji;
}


document.getElementsByClassName('textField')[0].onchange = function(){
	let split=userInput.value.split(" ");
	let asdf = split.map(wordTranslate);
	output.value = asdf;
}

// document.getElementsByClassName('textField')[0].onchange = function(e){
// 	document.getElementsByClassName('textField')[1].value =
// 	document.getElementsByClassName('textField')[0].value.split();
// }


