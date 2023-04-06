$(document).ready(function(){
    correct = ["1991", "name", "code", "js"];
    questions = ["Which year Kazakhstan got its independence?","Which year Kazakhstan got its independence?"]
    choice_options = [["1998","1991","1990","1989"],["1998","1991","1990","1989"]]
    
    // Generate quiz questions
    // ...
    
    //let quizBox = document.getElementById ("quiz-box"); // JS way
    quizBox = $("#quiz-box"); // Jquery
    
    quizBox.append ("<div class='question'>"); 
    
    $('.question').append ("<p class='d'> Q1. Which year Kazakhstan got its independence? </p>");
    $('.question').append ("<label><input type='radio' name='q1' value='a'>1998</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>1991</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>1990</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>1989</label>")
    
    countCorrect = 0;
    reset = false;
    
    $("button").click (function (event){
         $("input[name=q1]").each (function (index){
                choice = $(this).parent().text(); 
                if ($( this ).prop("checked") == true && correct [0] == choice){
                     countCorrect += 1;
                }
         });
    $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + "</h2>");
    }); 

});