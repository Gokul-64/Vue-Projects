const questions = [
    {
        question: "When did India get independence?",
        options: [1947, 1950, 1960, 1940],
        answer: 1947
    },
    {
        question: "Who was the first Prime Minister of India?",
        options: ["Sardar Patel", "Jawaharlal Nehru", "B.R. Ambedkar", "Indira Gandhi"],
        answer: "Jawaharlal Nehru"
    },
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
        answer: "New Delhi"
    }
];
window.allQuestions = questions;

const app = Vue.createApp({
    template: `
        <router-view /> `          
});

app.use(router); 
app.mount("#app");