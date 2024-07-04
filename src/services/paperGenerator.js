const questionStore = require('./questionStore');

class PaperGenerator {
    generate(totalMarks, difficultyDistribution = {}) {
        const { easy = 0, medium = 0, hard = 0 } = difficultyDistribution;
        const marksRequired = {
            easy: Math.round(totalMarks * easy / 100),
            medium: Math.round(totalMarks * medium / 100),
            hard: Math.round(totalMarks * hard / 100),
        };

        const selectedQuestions = [];

        const addQuestions = (difficulty, marks) => {
            const questions = questionStore.getQuestionsByDifficulty(difficulty);
            let marksCollected = 0;
            while (marksCollected < marks && questions.length > 0) {
                const question = questions.pop();
                if (marksCollected + question.marks <= marks) {
                    selectedQuestions.push(question);
                    marksCollected += question.marks;
                }
            }
        };

        addQuestions('Easy', marksRequired.easy);
        addQuestions('Medium', marksRequired.medium);
        addQuestions('Hard', marksRequired.hard);

        return selectedQuestions;
    }
}

module.exports = new PaperGenerator();
