var a = Math.floor(Math.random()*20)+1;
function buttonStartPressed(){
  document.getElementById('output-result').innerHTML= '数当てゲームを開始しました。いくつかな？';
}
function buttonAnswerPressed(){
  b =document.getElementById('input-number').value;
  if (a==b){
    document.getElementById('output-result').innerHTML='あたり！';
  }
  else if(a>b){
    document.getElementById('output-result').innerHTML='はずれ！それより大きいです';
  }
  else if (a<b){
    document.getElementById('output-result').innerHTML='はずれ！それより小さいです';
  }
}