function adduser(){
player1_name=document.getElementById("player1_name_box").value;
player2_name=document.getElementById("player2_name_box").value;

localStorage.setItem("player1_keyname" , player1_name);
localStorage.setItem("player2_keyname" , player2_name);
window.location="gamepage.html"
}
