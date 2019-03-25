// start the game 

$("#start").on('click', function () {
    game.start();
    console.log(questions)
})

$(document).on('click', '#end', function(){
    game.done();
})

var questions = [{
    question: "The Chihuahua is a breed of dog believed to originate from what country?",
    answers: ["Canada", "Mexico", "Germany", "France"],
    correctAnswer: "Mexico"
}, {
    question: "Normal adult dogs have how many teeth?",
    answers: ["36", "42", "38", "40"],
    correctAnswer: "42"

}, {
    question: "What is a dogs best sense?",
    answers: ["Smell", "Sight", "Hearing", "Taste"],
    correctAnswer: "Smell"
}, {
    question: "What is the most popular breed of dog, according to the American Kennel Club’s registrations?",
    answers: ["Labrador", "Pug", "Pitbull", "Rottweiler"],
    correctAnswer: "Labrador"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 10,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log('Time is up!');
            game.done();
        }
    },

    start: function () {

        // start the timer for 1 min

        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">10</span> Secounds</h2>');

        // have the person select answers( can only pick one answer per question)

        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='" + questions[i].answers[j]+ "'>" +questions[i].answers[j])
            }

        }

        $('#subwrapper').append('<br><button id="end>DONE</button>')
    },
    done: function () {
        $.each($('input[name="question-1"]:checked'), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-2"]:checked'), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-3"]:checked'), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-4"]:checked'), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },
    // have the person select answers( can only pick one answer per question)

    // total the score 
    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();

        $('#subwrapper').html("<h2>All done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3>InCorrect Answers: "+this.incorrect+"</h3>");
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}













