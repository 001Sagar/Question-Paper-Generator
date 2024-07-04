const fs = require('fs');
const path = require('path');

class QuestionStore {
    constructor() {
        this.questions = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/questions.json')));
    }

    getQuestionsByDifficulty(difficulty) {
        return this.questions.filter(q => q.difficulty === difficulty);
    }

    getAllQuestions() {
        return this.questions;
    }
}

module.exports = new QuestionStore();
