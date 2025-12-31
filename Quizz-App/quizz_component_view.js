const QuizzComponentView = {
    props: {
        question: String,
        options: Array
    },
    emits: ['next-clicked', 'previous-clicked'],
    template: `
        <div class="root">
            <label class="question-label">{{ question }}</label><br>
            <div v-for="option in options" :key="option" class="option-container">
                <input type="radio" :value="option" :id="'option-' + option" name="quiz-option">
                <label :for="'option-' + option">{{ option }}</label>
            </div>
            <br><br>
            <div class="buttons">
                <button class="previous" @click="$emit('previous-clicked')">Previous</button>
                <button class="clear">Clear</button>
                <button class="next" @click="$emit('next-clicked')">Next</button>
            </div>
        </div>
    `
};  