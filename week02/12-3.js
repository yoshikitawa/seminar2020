function buttonAPressed() {
  var ctx =document.getElementById('canvas1').getContext('2d');
  var x = document.getElementById('input-word').value;
  var img01 =new Image();
  var img02 =new Image();
  img01.src = 'apple.jpg';
  img02.src = 'mikan.jpg';
  ctx.clearRect(0,0,400,300);
  ctx.font='30px sans-serif';
  if (x=='りんご'){
    ctx.drawImage(img01,20,20,100,100)
  }
  else if(x=='みかん'){
    ctx.drawImage(img02,20,20,100,100);
  }
  else {
    ctx.fillText('見つかりませんでした',20,50,100);
  }
}