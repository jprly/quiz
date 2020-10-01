let quiz = document.querySelector('.seinfeld-quiz');

quiz.addEventListener('click', e => {
    console.log('clicked');
    console.log(e.target.name);
    console.log(e.target.value);

    // console.log(e.target.name.value);

})