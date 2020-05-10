import easy from './Easy'
import normal from './Normal'
import hard from './Hard'

const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();
 

const changeFormat = (question)=>({
    question:entities.decode(question.question),
    answers: [entities.decode(question.correct_answer), ...question.incorrect_answers.map(ans => entities.decode(ans))],
    difficulty: question.difficulty,
    type: question.type,
    category: question.category,
    correctAnswer: entities.decode(question.correct_answer)
})


const shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

export default ()=>({
    easy: shuffle(easy.map(changeFormat)),
    normal: shuffle(normal.map(changeFormat)),
    hard : shuffle(hard.map(changeFormat))
})