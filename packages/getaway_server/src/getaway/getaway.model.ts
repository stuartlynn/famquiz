import questions from '../questions/QuestionList'

const INITALSCORE = 2
const MAXSCORE = 10

type MultipleChoiceQuestion = {
    question: string;
    answers: string[];
    correctAnswer: string;
    category: string;
    difficulty: string;
}

const Scores = {
    'accelerate': 2,
    'coast': 1
}

class Player {
    name: string;
    icon: string;
    joined: boolean;
    constructor(name: string, icon: string) {
        this.name = name;
        this.icon = icon;
        this.joined = false;
    }

    join() {
        this.joined = true;
    }
    leave() {
        this.joined = false;
    }
}

export class PlayerScore {
    name: string;
    score: number;
    alive: boolean;

    constructor(name: string) {
        this.name = name;
        this.score = 2;
        this.alive = true;
    }

    checkAlive() {
        if (this.score <= 0) {
            this.alive = false
        }
    }

    playerAnswered(bet: number, correct: boolean) {
        if (correct) {
            this.score = Math.min(this.score + bet, MAXSCORE)
        }
        else{
            this.score = Math.max(this.score - bet, 0 )
        }
        this.checkAlive()
    }

}


enum State {
    WAITING_TO_START = 'wait_to_start',
    SHOW_QUESTION = 'show_question',
    SHOW_ANSWER = 'show_answer',
    SHOW_RESULTS = 'show_results',
    WINNER = 'show_winner'
}

type PlayerAnswer = {
    name: string,
    bet: number,
    correct: boolean,
    answer: string
}


export class GetAway {
    players: Player[];
    questionList: any;
    scores: PlayerScore[];
    currentQuestion: MultipleChoiceQuestion;
    questionNumber: number;
    currentState: State;
    currentAnswers: PlayerAnswer[];
    winner: Player | null;
    currentDifficulty: 'easy' | 'normal' | 'hard'


    constructor() {
        this.players = [
            new Player('Stuart and Nicole', 'https://images.dog.ceo/breeds/maltese/n02085936_850.jpg'),
            new Player('Annie and Craig', 'https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_2865.jpg'),
            new Player('Kirsten and Alex', 'https://images.dog.ceo/breeds/terrier-australian/n02096294_8467.jpg'),
            new Player('Luke and Aileen', 'https://images.dog.ceo/breeds/kuvasz/n02104029_110.jpg'),
            new Player('Connor', 'https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_5295.jpg'),
            new Player('Anne and Nick', 'https://images.dog.ceo/breeds/setter-english/n02100735_4540.jpg')
        ]

        this.questionNumber = 0
        this.questionList = questions();
        this.currentDifficulty = 'easy'

        this.currentQuestion = this.questionList[this.currentDifficulty][this.questionNumber];

        this.currentState = State.WAITING_TO_START;
        this.currentAnswers = [];
        this.winner = null;
        this.scores = this.players.map(player => new PlayerScore(player.name))
    }

    serialize() {
        return {
            players: this.players,
            scores: this.scores,
            currentQuestion: this.currentQuestion,
            currentAnswers: this.currentAnswers,
            state: this.currentState,
        }
    }
    playerJoined(name: string) {
        this.players.find(p => p.name === name).join()
        this.checkAllJoined()
    }

    checkAllJoined(){
        if(this.players.filter(p=>!p.joined).length === 0 && this.currentState === State.WAITING_TO_START){
            this.currentState= State.SHOW_QUESTION  
        }
    }

    playerLeft(name: string) {
        this.players.find(p => p.name === name).leave()
    }

    resetCurrentAnswers() {
        this.currentAnswers = []
    }

    numberAlive() {
        return this.scores.filter(s => s.alive).length
    }

    checkAllAnswered() {
        if (this.currentAnswers.length == this.numberAlive()) {
            this.scoreAnswers()
            this.currentState = State.SHOW_ANSWER
            setTimeout(() => {
                this.nextQuestion()
            }, 5000)
        }
    }

    nextQuestion() {
        if (this.checkHasWon()) {
            this.winner = this.getWinner()
            this.currentState = State.WINNER
        }
        else {
            if (this.currentState = State.SHOW_ANSWER) {
                this.questionNumber = this.questionNumber + 1;
                if (this.questionNumber <= 5) {
                    this.currentDifficulty = 'easy'
                }
                if (this.questionNumber > 5 && this.questionNumber <= 10) {
                    this.currentDifficulty = 'normal'
                }
                if (this.questionNumber > 10) {
                    this.currentDifficulty = 'hard'
                }
                this.currentQuestion = this.questionList[this.currentDifficulty][this.questionNumber];
                this.currentAnswers = []
                this.currentState = State.SHOW_QUESTION
            }
        }
    }

    checkHasWon() {
        return this.scores.filter(score => score.alive).length === 1
    }

    restart() {
        this.scores = this.players.map(player => new PlayerScore(player.name))
        this.currentState = State.WAITING_TO_START
    }

    start() {
        if (this.currentState = State.WAITING_TO_START) {
            this.currentState = State.SHOW_QUESTION
        }
    }

    getWinner() {
        const winnerName = this.scores.filter(s => s.alive)[0].name;
        return this.players.find(player => player.name === winnerName)
    }

    scoreAnswers() {
        this.currentAnswers.forEach(({ name, bet, correct }) => {
            const player = this.scores.find(player => player.name === name)
            if (player) {
                player.playerAnswered(Scores[bet], correct)
            }
        })

    }

    playerAnsweredQuestion(name: string, bet: number, correct: boolean, answer: string) {
        if (!this.currentAnswers.find(ans => ans.name === name) && this.currentState !== State.WINNER) {
            this.currentAnswers.push({ name, bet, correct, answer })
            this.checkAllAnswered()
        }
    }

}