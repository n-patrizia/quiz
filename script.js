const skip = document.getElementById('skip');
let score = document.getElementById('score');
let totalScore = document.getElementById('totalScore');
const countdown = document.getElementById('countdown');
let count = 0;
let scoreCount = 0;
let duration = 0;
const qaSet = document.querySelectorAll('.qa_set');
const qaAnsRow = document.querySelectorAll('.qa_set .qa_ans_row input');

skip.addEventListener('click', function () {
    step()
});

//point per each correct answer
qaAnsRow.forEach(function (qaAnsRowSingle) {
    qaAnsRowSingle.addEventListener('click', function () {
        setTimeout(function () {
            step();
        }, 500)

        let valid = this.getAttribute('valid');
        if (valid == 'valid') {
            scoreCount += 1;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        } else {
            scoreCount += 0;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        }

    })
})

//next question
function step() {
    count += 1;
    for (var i = 0; i < qaSet.length; i++) {
        qaSet[i].className = 'qa_set';
    }
    qaSet[count].className = 'qa_set active';
    if (count == 5) {
        skip.style.display = 'none';
        score.style.display = 'none';
        lastpageScore.style.display = 'none';
    }
}

