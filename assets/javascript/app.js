$("#start").on("click", function() {
    game.start();
        
        
})
var questions = [{
    questions: "What player is the logo modeled after?",
    answers: ["Michael Jordan", "John Stockton", "Magic Johnson","Jerry West"],
    correctAsnwer: "Jerry West"
}, {
    questions: "What player scored the most points in a single game?",
    answers: ["Michael Jordan", "LeBron James", "Kobe Bryant", "Wilt Chamberlain"],
    correctAsnwer:"Wilt Chamberlain"
}, {
    questions: "What player has the highest points per game average?",
    answers: ["Kobe Bryant", "Michael Jordan", "LeBron James", "Larry Bird"],
    correctAsnwer:"Michael Jordan"
}, {
    questions: "What team drafted Kobe Bryant?",
    answers: ["Los Angelos Lakers", "Boston Celtics", "Charlotte Hornets", "New York Knicks"],
    correctAsnwer:"Charlotte Hornets"
}, {
    questions: "Who won the most NBA finals MVP's?",
    answers: ["Tim Duncan","Magic Johnson","Michael Jordan","Kobe Bryant"],
    correctAsnwer:"Michael Jordan"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 30,
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0){
            console.log("Game over");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $("#subwrapper").prepend('<h2>Time remaining <span id="counter">30</span> Seconds </h2>');
            for(var i=0;i<questions.length;i++){
                $("#subwrapper").append("<h2>" + questions[i].questions+"</h2>");
                for(var j=0;j< questions[i].answers.length; j++){
                    $("#subwrapper").append("<input type = 'radio' name= 'question-"+i+"'value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
        
                }
            }       
    },
    done: function() {
        $.each($('input [name="question-0"]:checked'),function(){
            if($(this).val()==question[0].correctAsnwer){
                game.correct++;
            } else  {
                game.incorrect++;
            }  
        });
        $.each($('input [name="question-1"]:checked'),function(){
            if($(this).val()==question[1].correctAsnwer){
                game.correct++;
            } else  {
                game.incorrect++;
            }  
        });
        $.each($('input [name="question-2"]:checked'),function(){
            if($(this).val()==question[2].correctAsnwer){
                game.correct++;
            } else  {
                game.incorrect++;
            }  
        });
        $.each($('input [name="question-3"]:checked'),function(){
            if($(this).val()==question[3].correctAsnwer){
                game.correct++;
            } else  {
                game.incorrect++;
            }  
        });
        $.each($('input [name="question-4"]:checked'),function(){
            if($(this).val()==question[4].correctAsnwer){
                game.correct++;
            } else  {
                game.incorrect++;
            }  
        });

        this.result();
        },
        result: function() {
            clearInterval(timer);
            $("#subwrapper h2").remove();
            $("#subwrapper").html("<h2>Game Over</h2>");
            $("#subrapper").append("<h3>Correct Answers: "+this.correct+"</h3>");
            $("#subrapper").append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
            
        }

   
}
    