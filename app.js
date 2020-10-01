let quiz = document.querySelector('.seinfeld-quiz');
let question1 = document.querySelector('#q1Title')

quiz.addEventListener('click', e => {
    console.log('clicked');
    console.log(e.target.name);
    console.log(e.target.value);
    if(e.target.name == 'q1'){
        if (e.target.value == 'A'){
            question1.classList.add('correct');
            question1.classList.remove('wrong');

            console.log('correct!');
        } else {
            console.log('false');
            question1.classList.add('wrong');
            question1.classList.remove('correct');


        }
        console.log('you clicked one!')
    }

    // console.log(e.target.name.value);

})