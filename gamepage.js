player1_name=localStorage.getItem("player1_keyname");
player2_name=localStorage.getItem("player2_keyname");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn -"+ player1_name;
document.getElementById("player_answer").innerHTML="Answer turn -"+ player2_name;

function send(){

  get_word=document.getElementById("Type_word_box").value;

  lowercase_word=get_word.toLowerCase();
  console.log("to lowercase =" + lowercase_word);

  charAt1=lowercase_word.charAt(1);
  console.log(charAt1);

  index_last=lowercase_word.length-1;
  charAt3=lowercase_word.charAt(index_last);
  console.log(charAt3);

    index_middle=Math.floor(lowercase_word.length/2 );
    charAt2=lowercase_word.charAt(index_middle);
    console.log(charAt2);

    output1=lowercase_word.replace(charAt1,"_");
    output2=output1.replace(charAt2,"_");
    output3=output2.replace(charAt3,"_");
    console.log(output3);

    question="<h4>Question="+ output3 +"</h4><br>";
    answerbox="Answer= <input type='text' id='box_answer'> <br><br>";
    checkbutton="<button class='btn btn-info' onclick='check()'>Check</button>";

    row= question + answerbox + checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("Type_word_box").value="";
}

question_turn="player1";
answer_turn="player2";

function check(){

get_answer=document.getElementById("box_answer").value;
answer=get_answer.toLowerCase();
console.log("answer to lowercase - " + answer);
if( answer == lowercase_word){

  if(answer_turn == "player1"){
    player1_score=player1_score +1;
document.getElementById("player1_score").innerHTML=player1_score;

  }
else{
  player2_score=player2_score +1;
  document.getElementById("player2_score").innerHTML=player2_score;

}

}

if(question_turn =="player1"){

  question_turn = "player2";

  document.getElementById("player_question").innerHTML="Question turn -"+ player2_name;

}

else{

  question_turn= "player1";
  document.getElementById("player_question").innerHTML="Question turn -"+ player1_name;
}


if(answer_turn =="player1"){

  answer_turn = "player2";

  document.getElementById("player_answer").innerHTML="Answer turn -"+ player2_name;

}

else{

  answer_turn= "player1";
  document.getElementById("player_answer").innerHTML="Answer turn -"+ player1_name;
}
docxument.getElementById("output").innerHTML="";
}


