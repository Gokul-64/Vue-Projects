const QuizzComponent = {
    props: {
        id: [String, Number]
    },
    emits: [],
    components: {
        'quizz-component-view': QuizzComponentView
    },
    computed: {
        currentQuestion() {
            const questionIndex = parseInt(this.id);
            return window.allQuestions[questionIndex];
        },
        questionIndex() {
            return parseInt(this.id);
        }
    },
    methods: {
        goToNext() {
            if (this.questionIndex < window.allQuestions.length - 1) {
                const nextId = this.questionIndex + 1;
                this.$router.push({ name: 'quiz-question', params: { id: nextId } });
            } else {
                alert("Quiz Complete!");
            }
        },
        goToPrevious() {
            if (this.questionIndex > 0) {
                const previousId = this.questionIndex - 1;
                this.$router.push({ name: 'quiz-question', params: { id: previousId } });
            }
        }
    },
    template: `
        <quizz-component-view 
            :question="currentQuestion.question" 
            :options="currentQuestion.options"
            @next-clicked="goToNext"
            @previous-clicked="goToPrevious"
        />
    `
};