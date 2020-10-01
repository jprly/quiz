let quiz = document.querySelector('.seinfeld-quiz');
let question1 = document.querySelector('#q1Title');
let question2 = document.querySelector('#q2Title');
let question3 = document.querySelector('#q3Title');
let question4 = document.querySelector('#q4Title');

let gradeQuestion = (question, answer, e) => {
    if (e.target.value == answer){
        question.classList.add('correct'); 
        question.classList.remove('wrong');
    } else {
        question.classList.add('wrong');
        question.classList.remove('correct');
    }
}

quiz.addEventListener('click', e => {
    if (e.target.name == 'q1'){
        gradeQuestion(question1, 'A', e);
    }
    if (e.target.name == 'q2'){
        gradeQuestion(question2, 'B', e);
    }
    if (e.target.name == 'q3'){
        gradeQuestion(question3, 'A', e);
    }
    if (e.target.name == 'q4'){
        gradeQuestion(question4, 'A', e);
    }

    


});