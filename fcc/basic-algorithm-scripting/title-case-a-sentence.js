// Link 
// https://www.freecodecamp.com/challenges/title-case-a-sentence

// Notes
//


// ES5 intelligible

function titleCase(str) {
	var words = str.split(' ');
	var titleCaseWords = [];
	for(var i = 0; i < words.length; i++) {
		titleCaseWords.push(words[i][0].toUpperCase() + words[i].slice(1).toLowerCase());
	}
	var titleCaseStr = titleCaseWords.join(' ');
	return titleCaseStr;
}


// ES6 small, sane

const titleCase = s => s.split(' ').map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(' ');


// ES6 small, insane

const titleCase = s => s.split` `.map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join` `;